// Music and sound, all synthesized live with the Web Audio API (no audio files).
// Two looping tracks: "camp" (laid-back gym beat for the career screens) and "fight"
// (driving arena track whose layers follow an intensity level), plus crowd noise,
// impact sounds, the cage bell, result stings and an announcer voice.

const STORE_KEY = "cc3d_sound";
let ctx = null;
let out, musicBus, sfxBus, crowdBus, noiseBuf;
let on = true;
// volume levels, 0..1: everything, music, hits and bells, the crowd, the commentators' voices
const vol = { master: 1, music: 0.8, sfx: 1, crowd: 1, voice: 1 };
try {
  const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
  if (saved.on === false) on = false;
  for (const k of Object.keys(vol)) if (typeof saved[k] === "number") vol[k] = Math.max(0, Math.min(1, saved[k]));
} catch { /* storage blocked: defaults are fine */ }

let wanted = { name: null, intensity: 1 }; // track the game wants, started once audio is unlocked
let current = null; // { name, gain, step, next, intensity }
let timer = null;
let crowd = null;   // { gain, base }

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

function persist() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify({ on, ...vol })); } catch { /* ignore */ }
}

function init() {
  if (ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -14;
  comp.ratio.value = 4;
  out = ctx.createGain();
  out.gain.value = on ? vol.master : 0;
  out.connect(comp).connect(ctx.destination);
  musicBus = ctx.createGain();
  musicBus.gain.value = 0.34 * vol.music;
  musicBus.connect(out);
  sfxBus = ctx.createGain();
  sfxBus.gain.value = 0.9 * vol.sfx;
  sfxBus.connect(out);
  crowdBus = ctx.createGain();
  crowdBus.gain.value = 0.5 * vol.crowd;
  crowdBus.connect(out);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  timer = setInterval(schedule, 25);
}

/** Browsers only allow sound after the player interacts, so the first tap or key press starts it. */
function unlock() {
  init();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  if (wanted.name && (!current || current.name !== wanted.name)) startTrack(wanted.name, wanted.intensity);
}
["pointerdown", "keydown", "touchstart"].forEach((ev) => window.addEventListener(ev, unlock, { passive: true }));

export function isOn() {
  return on;
}

export function toggle() {
  return setOn(!on);
}

export function setOn(v) {
  on = !!v;
  persist();
  applyVolumes();
  if (!on && "speechSynthesis" in window) speechSynthesis.cancel();
  return on;
}

/** The volume levels (0..1) for master, music, sfx, crowd and voice. */
export function volumes() {
  return { ...vol };
}

export function setVolume(kind, v) {
  if (!(kind in vol)) return;
  vol[kind] = Math.max(0, Math.min(1, Number(v) || 0));
  persist();
  applyVolumes();
  if (kind === "voice" && !vol.voice && "speechSynthesis" in window) speechSynthesis.cancel();
}

function applyVolumes() {
  if (!ctx) return;
  const t = ctx.currentTime;
  out.gain.setTargetAtTime(on ? vol.master : 0, t, 0.05);
  musicBus.gain.setTargetAtTime(0.34 * vol.music, t, 0.05);
  sfxBus.gain.setTargetAtTime(0.9 * vol.sfx, t, 0.05);
  crowdBus.gain.setTargetAtTime(0.5 * vol.crowd, t, 0.05);
}

// ------------------------------------------------------------------ instruments

function env(g, t, peak, attack, decay) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
}

function noise(t, dur, dest) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  src.connect(dest);
  src.start(t, Math.random() * 1.5, dur + 0.05);
  return src;
}

function osc(type, freq, t, dur, dest) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  o.connect(dest);
  o.start(t);
  o.stop(t + dur + 0.05);
  return o;
}

function kick(t, vol, dest) {
  const g = ctx.createGain();
  g.connect(dest);
  env(g, t, vol, 0.002, 0.32);
  const o = osc("sine", 150, t, 0.4, g);
  o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
}

function snare(t, vol, dest) {
  const g = ctx.createGain();
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 1400;
  hp.connect(g).connect(dest);
  env(g, t, vol * 0.8, 0.002, 0.17);
  noise(t, 0.2, hp);
  const tg = ctx.createGain();
  tg.connect(dest);
  env(tg, t, vol * 0.5, 0.002, 0.09);
  osc("triangle", 190, t, 0.12, tg);
}

function hat(t, vol, dest, open = false) {
  const g = ctx.createGain();
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 7500;
  hp.connect(g).connect(dest);
  env(g, t, vol, 0.001, open ? 0.22 : 0.035);
  noise(t, open ? 0.3 : 0.06, hp);
}

function crash(t, vol, dest) {
  const g = ctx.createGain();
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 4000;
  hp.connect(g).connect(dest);
  env(g, t, vol, 0.002, 1.4);
  noise(t, 1.5, hp);
}

function bassNote(t, midi, dur, vol, dest, gritty) {
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.Q.value = gritty ? 6 : 2;
  lp.frequency.setValueAtTime(gritty ? 1600 : 900, t);
  lp.frequency.exponentialRampToValueAtTime(gritty ? 260 : 220, t + dur);
  lp.connect(g).connect(dest);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.setValueAtTime(vol, t + dur * 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc(gritty ? "sawtooth" : "triangle", mtof(midi), t, dur, lp);
  if (gritty) osc("square", mtof(midi - 12), t, dur, lp);
}

function pad(t, notes, dur, vol, dest, bright = 900) {
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = bright;
  lp.connect(g).connect(dest);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.4, dur * 0.3));
  g.gain.setValueAtTime(vol, t + dur * 0.75);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  for (const n of notes) {
    for (const det of [-7, 7]) {
      const o = osc("sawtooth", mtof(n), t, dur, lp);
      o.detune.value = det;
    }
  }
}

function pluck(t, midi, dur, vol, dest, type = "triangle") {
  const g = ctx.createGain();
  g.connect(dest);
  env(g, t, vol, 0.004, dur);
  osc(type, mtof(midi), t, dur, g);
  const g2 = ctx.createGain();
  g2.connect(dest);
  env(g2, t, vol * 0.3, 0.002, dur * 0.4);
  osc("sine", mtof(midi + 12), t, dur * 0.5, g2);
}

let shaper = null;
function distortion() {
  if (shaper) return shaper;
  shaper = ctx.createWaveShaper();
  const c = new Float32Array(1024);
  for (let i = 0; i < c.length; i++) {
    const x = (i / c.length) * 2 - 1;
    c[i] = Math.tanh(x * 4);
  }
  shaper.curve = c;
  const post = ctx.createGain();
  post.gain.value = 0.35;
  shaper.connect(post).connect(musicBus);
  shaper._post = post;
  return shaper;
}

function powerChord(t, root, dur, vol) {
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 2400;
  g.connect(lp).connect(distortion());
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.005);
  g.gain.exponentialRampToValueAtTime(vol * 0.5, t + dur * 0.6);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  for (const n of [root, root + 7, root + 12]) osc("sawtooth", mtof(n), t, dur, g);
}

function lead(t, midi, dur, vol, dest) {
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 2600;
  lp.connect(g).connect(dest);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.setValueAtTime(vol, t + dur * 0.8);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  const o = osc("square", mtof(midi), t, dur, lp);
  const lfo = ctx.createOscillator();
  const lg = ctx.createGain();
  lfo.frequency.value = 5.5;
  lg.gain.value = 9;
  lfo.connect(lg).connect(o.detune);
  lfo.start(t + 0.12);
  lfo.stop(t + dur + 0.05);
}

// ------------------------------------------------------------------ tracks

// chord = [bass root, chord tones...] in MIDI notes
const CAMP = {
  bpm: 86,
  swing: 0.14,
  chords: [
    [45, 57, 60, 64, 67], [41, 57, 60, 64, 65], [48, 55, 59, 64, 67], [43, 55, 59, 62, 67],
    [38, 57, 60, 62, 65], [45, 55, 60, 64, 67], [41, 57, 60, 65, 69], [40, 56, 59, 62, 64],
  ],
  // pentatonic melody, one array per bar (16 steps, null = rest)
  melody: [
    [76, null, null, 74, null, null, 72, null, 69, null, null, null, 72, null, 74, null],
    [72, null, null, null, 69, null, 67, null, null, null, 69, null, null, null, null, null],
    [76, null, 79, null, 76, null, 74, null, 72, null, null, 74, null, 72, null, null],
    [71, null, null, null, 74, null, null, null, 67, null, null, null, null, null, null, null],
    [74, null, null, 72, null, 69, null, null, 72, null, 74, null, 77, null, 76, null],
    [76, null, null, null, 72, null, 69, null, null, null, 72, null, 74, null, null, null],
    [77, null, 76, null, 72, null, 69, null, 72, null, null, null, 69, null, 67, null],
    [68, null, null, null, 71, null, null, null, 74, null, 76, null, null, null, null, null],
  ],
  play(step, t, I, dest) {
    const bar = Math.floor(step / 16) % 8;
    const s = step % 16;
    const ch = this.chords[bar];
    const sd = 60 / this.bpm / 4;
    if ([0, 7, 10].includes(s) || (s === 15 && bar % 2)) kick(t, 0.75, dest);
    if (s === 4 || s === 12) snare(t, 0.45, dest);
    if (s % 2 === 0) hat(t, s % 4 === 2 ? 0.16 : 0.1, dest);
    if (s === 14 && bar % 4 === 3) hat(t, 0.12, dest, true);
    if (s === 0) bassNote(t, ch[0], sd * 5, 0.42, dest);
    if (s === 6) bassNote(t, ch[0] + 12, sd * 2, 0.3, dest);
    if (s === 10) bassNote(t, ch[0] + 7, sd * 3.5, 0.34, dest);
    if (s === 14) bassNote(t, ch[0] + (bar % 2 ? 10 : 2), sd * 2, 0.25, dest);
    if (s === 0) pad(t, ch.slice(1), sd * 16, 0.045, dest, 1100);
    if (s === 0 || s === 7) ch.slice(1, 4).forEach((n, i) => pluck(t + i * 0.012, n, 0.5, 0.06, dest, "sine"));
    const note = this.melody[bar][s];
    if (note && Math.floor(step / 128) % 2 === 1) pluck(t, note, 0.45, 0.09, dest);
  },
};

const FIGHT = {
  bpm: 148,
  swing: 0,
  chords: [38, 34, 36, 33, 38, 34, 41, 40], // D, Bb, C, A, D, Bb, F, E
  riff: [
    [74, null, 77, null, 76, null, 74, null, 72, null, 74, null, 69, null, null, null],
    [70, null, null, 74, null, null, 77, null, 76, null, 74, null, 72, null, 74, null],
    [72, null, 76, null, 79, null, 77, null, 76, null, 74, null, 72, null, null, null],
    [73, null, null, null, 76, null, null, null, 79, null, 81, null, 79, null, 76, null],
  ],
  play(step, t, I, dest) {
    const bar = Math.floor(step / 16) % 8;
    const s = step % 16;
    const root = this.chords[bar];
    const sd = 60 / this.bpm / 4;
    const full = I >= 0.8;
    if (full) {
      if ([0, 6, 8, 11].includes(s) || (s === 14 && bar % 2)) kick(t, 0.9, dest);
      if (s === 4 || s === 12) snare(t, 0.6, dest);
      if (bar % 4 === 0 && s === 0) crash(t, 0.22, dest);
    } else if (I >= 0.5 && s === 0) {
      kick(t, 0.6, dest);
    }
    if (I >= 0.5) hat(t, s % 2 ? 0.07 : 0.13, dest, s === 14);
    if (s % 2 === 0) bassNote(t, root + (s === 6 || s === 14 ? 12 : 0), sd * 1.8, I >= 0.5 ? 0.3 : 0.2, dest, true);
    if (I >= 0.5 && [0, 3, 6].includes(s)) powerChord(t, root + 12, sd * (s === 6 ? 6 : 2.6), full ? 0.22 : 0.12);
    if (I < 0.5 && s === 0) pad(t, [root + 24, root + 27, root + 31], sd * 16, 0.04, dest, 700);
    if (I >= 1.1) {
      const n = this.riff[bar % 4][s];
      if (n) lead(t, n, sd * 1.9, 0.06, dest);
    }
  },
};

const WALKOUT_ANTHEM = { bpm: 104, swing: 0, play(step, t, I, dest) {
  const s = step % 16, root = [38, 34, 41, 36][Math.floor(step / 16) % 4], sd = 60 / this.bpm / 4;
  if (s % 4 === 0) kick(t, 0.9, dest);
  if (s === 4 || s === 12) snare(t, 0.6, dest);
  if (s === 0) pad(t, [root + 24, root + 31, root + 36], sd * 15, 0.09, dest, 1800);
  if (s % 2 === 0) bassNote(t, root, sd * 1.6, 0.35, dest);
} };
const WALKOUT_THUNDER = { bpm: 120, swing: 0, play(step, t, I, dest) {
  const s = step % 16;
  if ([0, 3, 6, 8, 10, 14].includes(s)) kick(t, 1, dest);
  if (s === 4 || s === 12) snare(t, 0.9, dest);
  if (s % 2 === 0) hat(t, 0.15, dest);
  if (s === 0) crash(t, 0.25, dest);
} };
const WALKOUT_NEON = { bpm: 128, swing: 0, play(step, t, I, dest) {
  const s = step % 16, root = [45, 41, 48, 43][Math.floor(step / 16) % 4], sd = 60 / this.bpm / 4;
  if (s % 4 === 0) kick(t, 0.8, dest);
  if (s === 4 || s === 12) snare(t, 0.5, dest);
  if (s % 2) hat(t, 0.12, dest);
  pluck(t, root + [24, 31, 36, 31][s % 4], sd * 1.3, 0.12, dest, "triangle");
} };
const TRACKS = { camp: CAMP, fight: FIGHT, "walkout-anthem": WALKOUT_ANTHEM, "walkout-thunder": WALKOUT_THUNDER, "walkout-neon": WALKOUT_NEON };

function startTrack(name, intensity) {
  if (!ctx) return;
  const now = ctx.currentTime;
  if (current) {
    current.gain.gain.setTargetAtTime(0.0001, now, 0.35);
    const old = current.gain;
    setTimeout(() => old.disconnect(), 2500);
  }
  current = null;
  if (!name) return;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(1, now + 1.2);
  gain.connect(musicBus);
  current = { name, track: TRACKS[name], gain, step: 0, next: now + 0.1, intensity };
}

function schedule() {
  if (!ctx || !current || ctx.state !== "running") return;
  const tr = current.track;
  const sd = 60 / tr.bpm / 4;
  if (current.next < ctx.currentTime - 0.2) current.next = ctx.currentTime + 0.05; // tab was in the background
  while (current.next < ctx.currentTime + 0.12) {
    const swing = current.step % 2 ? tr.swing * sd : 0;
    tr.play(current.step, current.next + swing, current.intensity, current.gain);
    current.step++;
    current.next += sd;
  }
}

/** Pick the music. intensity (fight track only): 0.3 calm, 0.6 walkout, 1 fighting, 1.2 final round. */
export function music(name, intensity = 1) {
  wanted = { name, intensity };
  if (!ctx) return;
  if (current && current.name === name) {
    current.intensity = intensity;
    return;
  }
  startTrack(name, intensity);
}

// ------------------------------------------------------------------ crowd

export function crowdOn(active) {
  if (!ctx) return;
  if (active && !crowd) {
    const g = ctx.createGain();
    g.gain.value = 0.0001;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 650;
    bp.Q.value = 0.5;
    const bp2 = ctx.createBiquadFilter();
    bp2.type = "bandpass";
    bp2.frequency.value = 1700;
    bp2.Q.value = 1.2;
    const g2 = ctx.createGain();
    g2.gain.value = 0.35;
    const lfo = ctx.createOscillator();
    const lg = ctx.createGain();
    lfo.frequency.value = 0.23;
    lg.gain.value = 0.18;
    lfo.connect(lg).connect(g2.gain);
    lfo.start();
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.loop = true;
    src.connect(bp).connect(g);
    src.connect(bp2).connect(g2).connect(g);
    g.connect(crowdBus);
    src.start();
    g.gain.setTargetAtTime(0.16, ctx.currentTime, 0.8);
    crowd = { g, src, lfo, base: 0.16 };
  } else if (!active && crowd) {
    const c = crowd;
    crowd = null;
    c.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.4);
    setTimeout(() => { c.src.stop(); c.lfo.stop(); c.g.disconnect(); }, 2000);
  }
}

/** A swell of crowd noise; strength 0-1. */
export function roar(strength = 0.5) {
  if (!ctx || !crowd) return;
  const t = ctx.currentTime;
  const g = crowd.g.gain;
  g.cancelScheduledValues(t);
  g.setValueAtTime(Math.max(crowd.base, g.value), t);
  g.linearRampToValueAtTime(crowd.base + 0.55 * strength, t + 0.25);
  g.setTargetAtTime(crowd.base, t + 0.6 + strength, 0.9);
}

// ------------------------------------------------------------------ effects

/** name: punch, kick, body, ground, whoosh, slam, tap, bell, bell3, ko */
export function sfx(name, strength = 1) {
  if (!ctx || !on) return;
  const t = ctx.currentTime + 0.005;
  const v = Math.min(1.4, 0.45 + strength * 0.6);
  const thump = (f0, f1, dur, vol) => {
    const g = ctx.createGain();
    g.connect(sfxBus);
    env(g, t, vol, 0.002, dur);
    const o = osc("sine", f0, t, dur, g);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.8);
  };
  const burst = (type, freq, dur, vol, q = 0.8) => {
    const g = ctx.createGain();
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    f.connect(g).connect(sfxBus);
    env(g, t, vol, 0.001, dur);
    noise(t, dur + 0.05, f);
    return f;
  };
  switch (name) {
    case "punch":
      thump(140, 55, 0.14, 0.7 * v);
      burst("lowpass", 2200, 0.07, 0.55 * v);
      break;
    case "kick":
      burst("highpass", 900, 0.06, 0.6 * v);
      thump(110, 45, 0.2, 0.8 * v);
      break;
    case "body":
      thump(90, 40, 0.22, 0.85 * v);
      burst("lowpass", 900, 0.1, 0.5 * v);
      break;
    case "ground":
      thump(100, 45, 0.12, 0.55 * v);
      burst("lowpass", 1200, 0.06, 0.35 * v);
      break;
    case "whoosh": {
      const f = burst("bandpass", 500, 0.2, 0.18, 1.5);
      f.frequency.exponentialRampToValueAtTime(2200, t + 0.16);
      break;
    }
    case "slam":
      thump(80, 30, 0.45, 1.0);
      burst("lowpass", 500, 0.3, 0.7);
      break;
    case "tap":
      for (let i = 0; i < 3; i++) {
        const g = ctx.createGain();
        const f = ctx.createBiquadFilter();
        f.type = "bandpass";
        f.frequency.value = 1500;
        f.connect(g).connect(sfxBus);
        env(g, t + i * 0.32, 0.4, 0.001, 0.05);
        noise(t + i * 0.32, 0.08, f);
      }
      break;
    case "bell":
    case "bell3": {
      const n = name === "bell3" ? 3 : 1;
      for (let i = 0; i < n; i++) {
        const tt = t + i * 0.34;
        for (const [ratio, vol] of [[1, 0.35], [2.76, 0.14], [5.4, 0.07], [8.9, 0.03]]) {
          const g = ctx.createGain();
          g.connect(sfxBus);
          env(g, tt, vol, 0.002, 1.8 / Math.sqrt(ratio));
          osc("sine", 1180 * ratio, tt, 2, g);
        }
      }
      break;
    }
    case "ko":
      thump(70, 25, 0.8, 1.2);
      burst("lowpass", 400, 0.6, 0.8);
      break;
  }
}

/** A short musical result sting; the fight track drops out underneath it. */
export function sting(result) {
  if (!ctx || !on) return;
  const t = ctx.currentTime + 0.05;
  const notes = result === "W" ? [60, 64, 67, 72, 76] : result === "L" ? [57, 53, 50, 45] : [57, 60, 64];
  notes.forEach((n, i) => {
    const g = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = result === "W" ? 3200 : 1200;
    lp.connect(g).connect(sfxBus);
    const tt = t + i * (result === "W" ? 0.11 : 0.22);
    const hold = result === "W" && i === notes.length - 1 ? 2.2 : 0.8;
    g.gain.setValueAtTime(0.0001, tt);
    g.gain.exponentialRampToValueAtTime(0.09, tt + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, tt + hold);
    for (const det of [-8, 0, 8]) {
      const o = osc("sawtooth", mtof(n), tt, hold, lp);
      o.detune.value = det;
    }
  });
  if (result === "W") {
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 4000;
    const g = ctx.createGain();
    hp.connect(g).connect(sfxBus);
    env(g, t + 0.44, 0.25, 0.002, 1.6);
    noise(t + 0.44, 1.7, hp);
  }
}

/** Ring announcer, using the browser's built-in voice. */
// The voices: an arena announcer (deep, theatrical) and a play-by-play commentator (quicker, excitable).
// Lines are queued as segments, each with its own delivery, so an introduction can build: slow and
// low for "Ladies and gentlemen", rising to a shout on the name.
const MOODS = {
  calm: { rate: 0.92, pitch: 0.62, volume: 0.85 },
  build: { rate: 0.82, pitch: 0.72, volume: 0.95 },
  hype: { rate: 0.74, pitch: 0.95, volume: 1 },
  shout: { rate: 0.68, pitch: 1.1, volume: 1 },
  tense: { rate: 0.78, pitch: 0.55, volume: 0.9 },
  // the commentary team: fast play-by-play, a deep slow ex-champion, an excitable analyst
  call: { rate: 1.14, pitch: 1.12, volume: 1 },
  color: { rate: 0.94, pitch: 0.6, volume: 0.95 },
  analyst: { rate: 1.18, pitch: 1.38, volume: 1 },
  // the announcer at full stretch: drawn-out names, a hushed build before the big reveal
  roar: { rate: 0.55, pitch: 1.2, volume: 1 },
  hush: { rate: 0.8, pitch: 0.5, volume: 0.75 },
  ref: { rate: 0.96, pitch: 0.7, volume: 0.9 },
  coach: { rate: 1.08, pitch: 0.95, volume: 1 },
  interview: { rate: 1.0, pitch: 1.05, volume: 0.95 },
  fighter: { rate: 1.04, pitch: 0.78, volume: 1 },
};
let sayQueue = [];
let sayTimer = null;
let onSayHook = null;
/** The app shows each spoken line as a subtitle: fn(text, mood) (null text clears it). */
export function onSay(fn) {
  onSayHook = fn;
}

// everyone who speaks gets their own voice where the device has enough: the announcer first, then the
// three commentators (never the announcer's voice when there are two or more), then the rest
const ROLES = ["announcer", "call", "color", "analyst", "ref", "interview", "coach", "fighter"];
let voiceMap = null;
function pickVoice(kind) {
  const voices = speechSynthesis.getVoices();
  const en = voices.filter((x) => /^en/i.test(x.lang));
  if (!en.length) return null;
  if (!voiceMap || voiceMap.n !== en.length) {
    const anc = en.find((x) => /en[-_](US)/i.test(x.lang) && /male|david|daniel|alex|fred|guy/i.test(x.name)) || en.find((x) => /en[-_]US/i.test(x.lang)) || en[0];
    // spread the commentators across accents too (US, UK, Australia...) so they sound like different people
    const rest = en.filter((v) => v !== anc).sort((a, b) => (a.lang === anc.lang) - (b.lang === anc.lang));
    const order = [anc, ...rest];
    voiceMap = { n: en.length, map: Object.fromEntries(ROLES.map((r, i) => [r, order[i % order.length]])) };
  }
  return voiceMap.map[kind] || voiceMap.map.announcer;
}

function nextLine() {
  sayTimer = null;
  const seg = sayQueue.shift();
  if (!seg) {
    if (onSayHook) onSayHook(null);
    return;
  }
  const go = () => {
    if (onSayHook) onSayHook(seg.t, seg.mood);
    if (seg.roar) roar(seg.roar);
    if (!on || !vol.voice || !vol.master || !("speechSynthesis" in window)) {
      sayTimer = setTimeout(nextLine, 600 + seg.t.length * 55);
      return;
    }
    try {
      const u = new SpeechSynthesisUtterance(seg.t);
      Object.assign(u, MOODS[seg.mood] || MOODS.calm);
      // a line can push its own delivery further (rising pitch through a build-up, a slower roar)
      if (seg.rate) u.rate = Math.max(0.3, Math.min(2, u.rate * seg.rate));
      if (seg.pitch) u.pitch = Math.max(0, Math.min(2, u.pitch * seg.pitch));
      u.volume = Math.min(1, u.volume * vol.voice * vol.master);
      const v = pickVoice(MOODS[seg.mood] && ["call", "color", "analyst", "ref", "coach", "interview", "fighter"].includes(seg.mood) ? seg.mood : "announcer");
      if (v) u.voice = v;
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        nextLine();
      };
      u.onend = finish;
      u.onerror = finish;
      // some browsers never fire onend: move on anyway
      sayTimer = setTimeout(finish, 1500 + seg.t.length * 110);
      speechSynthesis.speak(u);
    } catch {
      sayTimer = setTimeout(nextLine, 800);
    }
  };
  if (seg.gap) sayTimer = setTimeout(go, seg.gap);
  else go();
}

/**
 * Speak a sequence of segments: [{ t: text, mood: calm|build|hype|shout|tense|call, gap: ms pause before, roar: crowd 0..1 }].
 * A new sequence replaces whatever was being said unless queue is set.
 */
export function say(segments, queue = false) {
  if (!queue) {
    sayQueue = [];
    clearTimeout(sayTimer);
    sayTimer = null;
    try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch { /* ignore */ }
  }
  sayQueue.push(...segments);
  if (!sayTimer && !(queue && "speechSynthesis" in window && speechSynthesis.speaking)) nextLine();
}

/** True while a sequence is being read out. */
export function talking() {
  return sayQueue.length > 0 || !!sayTimer || ("speechSynthesis" in window && speechSynthesis.speaking);
}

/** A quick commentator call during the action; skipped if the announcer is mid-sentence. */
export function shout(text) {
  if (talking()) return;
  say([{ t: text, mood: "call" }]);
}

export function announce(text) {
  say([{ t: text, mood: "hype" }]);
}

/** Brief dip in the music so big moments cut through. */
export function duck(seconds = 1.2) {
  if (!ctx || !current) return;
  const g = current.gain.gain;
  const t = ctx.currentTime;
  g.cancelScheduledValues(t);
  g.setTargetAtTime(0.35, t, 0.05);
  g.setTargetAtTime(1, t + seconds, 0.4);
}
