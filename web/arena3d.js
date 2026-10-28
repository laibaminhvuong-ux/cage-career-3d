// The 3D stage: one WebGL renderer shared by the fighter preview (create screen and
// dashboard) and the fight arena (octagon, crowd, referee, cameras, and a director that
// turns each fight-engine event into choreography).
import * as THREE from "./vendor/three.module.min.js";
import { Fighter3D, orgStyle, setFighterEnv, GROUND_POSES, POSES, SEQUENCES, attack, groundShift, lookFromName, parseLook, submission, takedown } from "./fighter3d.js";
import * as audio from "./audio.js";
import { WorldView } from "./world3d.js";
import { RoomEnvironment } from "./vendor/RoomEnvironment.js";
import { createPost } from "./post3d.js";
import { RingCardPresenter } from "./ringcard3d.js";
import { WalkoutDirector } from "./walkout3d.js";
import { commentary, cornerCall, finishShout, interviewCall, reaction, resultCall, roundCall } from "./announcer.js";

const R = 4.4; // cage radius to the fence posts
const RED = "#d62828";
const BLUE = "#2f6fed";
const TAU = Math.PI * 2;

function angleLerp(a, b, k) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return a + d * k;
}
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const yawTo = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);

function canvasTexture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

let glowTex = null;
function glowTexture() {
  if (glowTex) return glowTex;
  glowTex = canvasTexture(64, 64, (g, w) => {
    const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    r.addColorStop(0, "rgba(255,255,255,1)");
    r.addColorStop(0.25, "rgba(255,240,200,.85)");
    r.addColorStop(1, "rgba(255,200,120,0)");
    g.fillStyle = r;
    g.fillRect(0, 0, w, w);
  });
  return glowTex;
}

// ====================================================================== stage

export function createStage() {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    console.warn("WebGL unavailable, 3D disabled", e);
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const canvas = renderer.domElement;
  // soft studio reflections for skin, sweat, gloves and blood
  let pm = null;
  try {
    pm = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    try {
      setFighterEnv(pm.fromScene(room, 0.04).texture);
    } finally {
      room.dispose();
    }
  } catch (e) {
    console.warn("No reflection map", e);
  }
  canvas.className = "stage3d";

  const preview = new PreviewView();
  const arena = new ArenaView();
  const world = new WorldView();
  // the town reflects its own sky (car paint, windows)
  try {
    if (pm) world.scene.environment = pm.fromEquirectangular(world.scene.background).texture;
  } catch (e) {
    console.warn("No sky reflections", e);
  }
  // The generated textures stay alive; the generator's temporary GPU buffers do not.
  if (pm) pm.dispose();
  let view = null;
  let host = null;
  const clock = new THREE.Clock();
  // the finishing pipeline (bloom, ambient occlusion, grade); absent in tests that stub the renderer
  const post = typeof createPost === "function" ? createPost(renderer) : null;

  const resize = () => {
    if (!host) return;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    renderer.setSize(w, h, false);
    if (post) post.setSize(w, h);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    view.camera.aspect = w / h;
    if (view === arena) {
      // Keep both fighters in portrait shots without moving through the fence.
      const portraitScale = Math.max(1, 0.95 / view.camera.aspect);
      view.camera.fov = Math.min(85, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(42 / 2)) * portraitScale)));
    }
    view.camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);

  // drag to look around
  let drag = null;
  // views with their own controls (the open world) get the raw pointer events
  const own = (type) => (e) => {
    if (view && view.pointer) {
      view.pointer(type, e, canvas);
      return true;
    }
    return false;
  };
  const ownDown = own("down"), ownMove = own("move"), ownUp = own("up");
  canvas.addEventListener("pointerdown", (e) => { if (ownDown(e)) return; drag = { x: e.clientX }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener("pointermove", (e) => {
    if (ownMove(e)) return;
    if (!drag || !view) return;
    view.userYaw = (view.userYaw || 0) - (e.clientX - drag.x) * 0.008;
    drag.x = e.clientX;
  });
  canvas.addEventListener("pointerup", (e) => { if (ownUp(e)) return; drag = null; });
  const cancelDrag = () => {
    drag = null;
    // Cancel a world drag without treating it as a tap-to-walk command.
    world.drag = null;
  };
  canvas.addEventListener("pointercancel", cancelDrag);
  canvas.addEventListener("lostpointercapture", cancelDrag);
  window.addEventListener("blur", cancelDrag);

  function show(container, which) {
    const v = which === "arena" ? arena : which === "world" ? world : preview;
    world.active = v === world;
    if (host === container && view === v) return;
    cancelDrag();
    if (v === world) world.enter();
    if (host) ro.unobserve(host);
    host = container;
    view = v;
    container.appendChild(canvas);
    ro.observe(container);
    resize();
  }

  // frame rate: capped at 30 or 60, or as fast as the screen allows (0); onFps reports the measured rate
  let fpsCap = 0, lastFrame = 0, frames = 0, fpsSince = performance.now(), onFps = null;
  // Auto quality: a ladder from the richest look to the lightest. Each step is an effects level
  // plus a share of the screen's sharpest resolution (fewer pixels is often the biggest saving), so
  // every screen, 1x laptops included, can keep High effects at slightly fewer pixels. The game
  // watches its own frame rate and steps down when it can't keep up, and back up when there's
  // headroom. Phones start at Medium and never climb past it; the settled step is remembered.
  const maxPr = Math.min(window.devicePixelRatio || 1, 1.75);
  const LADDER = [["high", 1], ["high", 0.85], ["medium", 1], ["medium", 0.85], ["low", 1], ["low", 0.85], ["low", 0.7]];
  const STEP_KEY = "cc3d_autostep";
  const small = typeof screen !== "undefined" && typeof matchMedia === "function" && (Math.min(screen.width, screen.height) < 700 || matchMedia("(pointer: coarse)").matches);
  const ceiling = small ? 2 : 0; // the richest step this device may climb to
  let saved = NaN;
  try { saved = parseInt(localStorage.getItem(STEP_KEY), 10); } catch { /* storage blocked */ }
  const auto = { step: saved >= ceiling && saved < LADDER.length ? saved : ceiling, sum: 0, n: 0, since: 0, calm: 0, held: 0, fails: {} };
  const applyStep = () => {
    const [level, share] = LADDER[auto.step];
    const pr = share * maxPr;
    if (post) post.setLevel(level);
    if (Math.abs(renderer.getPixelRatio() - pr) > 0.01) {
      renderer.setPixelRatio(pr);
      resize();
    }
  };
  const moveStep = (to) => {
    auto.step = to;
    auto.calm = auto.held = 0;
    applyStep();
  };
  const autoOn = () => !!post && post.getQuality() === "auto";
  /** Called every rendered frame with the time since the last one. */
  const autoTune = (now, ms) => {
    // (a gap over 1.5 s is the tab being away, not the game being slow)
    if (!autoOn() || ms <= 0 || ms > 1500) return;
    auto.sum += ms;
    auto.n++;
    if (now - auto.since < 2000 || auto.n < 2) return;
    const fps = (1000 * auto.n) / auto.sum;
    auto.sum = auto.n = 0;
    auto.since = now;
    const target = fpsCap ? fpsCap * 0.9 : 55;
    // a step that has held for ~10 s is this device's level: start there next time (a passing
    // stutter, like a scene loading, is not remembered)
    if (++auto.held === 5) try { localStorage.setItem(STEP_KEY, String(auto.step)); } catch { /* ignore */ }
    if (fps < target * 0.82 && auto.step < LADDER.length - 1) {
      // too slow: step down (two steps when it's struggling badly), and remember that the richer step didn't hold up
      auto.fails[auto.step] = (auto.fails[auto.step] || 0) + 1;
      moveStep(Math.min(LADDER.length - 1, auto.step + (fps < target * 0.45 ? 2 : 1)));
    } else if (fps >= target * 0.97 && auto.step > ceiling) {
      // smooth for a while: try one step richer (unless that step already failed twice)
      if (++auto.calm >= 6 && (auto.fails[auto.step - 1] || 0) < 2) moveStep(auto.step - 1);
    } else auto.calm = 0;
  };
  renderer.setAnimationLoop((now) => {
    if (!view || !host || !host.isConnected || host.offsetParent === null || document.hidden) {
      clock.getDelta();
      lastFrame = 0;
      frames = 0;
      fpsSince = now;
      return;
    }
    if (fpsCap && now - lastFrame < 1000 / fpsCap - 2) return;
    if (lastFrame) autoTune(now, now - lastFrame);
    lastFrame = now;
    const dt = Math.min(clock.getDelta(), 0.1);
    view.update(dt);
    renderer.toneMappingExposure = view.exposure || 1.05;
    if (post) post.render(view, dt);
    else renderer.render(view.scene, view.camera);
    frames++;
    if (now - fpsSince >= 500) {
      if (onFps) onFps(Math.round((frames * 1000) / (now - fpsSince)));
      frames = 0;
      fpsSince = now;
    }
  });
  const setFps = (cap) => { fpsCap = cap === 30 || cap === 60 ? cap : 0; };
  const watchFps = (fn) => { onFps = fn; };

  const setQuality = (q) => {
    if (!post) return;
    post.setQuality(q);
    if (q === "auto") applyStep();
    else if (Math.abs(renderer.getPixelRatio() - maxPr) > 0.01) {
      // a fixed setting renders at full resolution again
      renderer.setPixelRatio(maxPr);
      resize();
    }
  };
  const getQuality = () => (post ? post.getQuality() : "low");
  /** What Auto is doing right now, for the Settings screen. */
  const getAutoStatus = () => (post ? { level: post.getLevel(), scale: Math.round((renderer.getPixelRatio() / maxPr) * 100) } : null);
  // for checks: feed the tuner a frame directly, and read where it stands
  const autoTick = (now, ms) => autoTune(now, ms);
  const autoStep = () => ({ index: auto.step, level: LADDER[auto.step][0], scale: Math.round(LADDER[auto.step][1] * 100), ceiling, ladder: LADDER.map((r) => [...r]) });
  if (autoOn()) applyStep();
  return { preview, arena, world, show, setFps, watchFps, setQuality, getQuality, getAutoStatus, autoTick, autoStep };
}

/** A promotion's logo: its badge shape in its colors with the wordmark across it. r = radius. */
export function drawOrgLogo(g, org, x, y, r) {
  const st = orgStyle(org);
  const label = (st.label || org).toUpperCase();
  const path = (rr) => {
    g.beginPath();
    if (st.shape === "circle") g.arc(x, y, rr, 0, TAU);
    else if (st.shape === "octagon" || st.shape === "hexagon") {
      const n = st.shape === "octagon" ? 8 : 6;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU + Math.PI / n;
        g[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      }
      g.closePath();
    } else if (st.shape === "shield") {
      g.moveTo(x - rr * 0.82, y - rr * 0.78);
      g.lineTo(x + rr * 0.82, y - rr * 0.78);
      g.quadraticCurveTo(x + rr * 0.86, y + rr * 0.35, x, y + rr);
      g.quadraticCurveTo(x - rr * 0.86, y + rr * 0.35, x - rr * 0.82, y - rr * 0.78);
      g.closePath();
    } else if (st.shape === "star") {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU - Math.PI / 2, k = i % 2 ? 0.62 : 1;
        g[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr * k, y + Math.sin(a) * rr * k);
      }
      g.closePath();
    } else {
      // flame: a circle wreathed in licks of fire
      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * TAU, k = 0.86 + 0.14 * Math.max(0, Math.sin(a * 8)) ** 3;
        g[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr * k, y + Math.sin(a) * rr * k);
      }
      g.closePath();
    }
  };
  g.save();
  g.fillStyle = st.ring;
  path(r);
  g.fill();
  g.fillStyle = st.bg;
  path(r * 0.9);
  g.fill();
  if (st.shape === "flame") {
    // a coiled dragon line behind the name
    g.strokeStyle = st.ring;
    g.globalAlpha = 0.35;
    g.lineWidth = r * 0.06;
    g.beginPath();
    for (let i = 0; i <= 80; i++) {
      const t = i / 80, a = t * TAU * 1.6, rr = r * (0.2 + 0.5 * t);
      g[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr * 0.8);
    }
    g.stroke();
    g.globalAlpha = 1;
  }
  g.fillStyle = st.text;
  g.textAlign = "center";
  g.textBaseline = "middle";
  const words = label.split(" ");
  const lines = label.length > 7 && words.length > 1 ? words : [label];
  const size = (lines.length > 1 ? 0.42 : label.length <= 3 ? 0.62 : label.length <= 5 ? 0.46 : 0.3) * r;
  g.font = `${st.font} ${size}px system-ui, sans-serif`;
  lines.forEach((l, i) => g.fillText(l, x, y + (i - (lines.length - 1) / 2) * size * 1.02 + size * 0.04, r * 1.55));
  g.restore();
}

// ====================================================================== preview

class PreviewView {
  constructor() {
    this.look = { bloom: [0.3, 0.4, 0.95], ao: 0.4, contrast: 1.08, saturation: 1.05, warmth: 0.5, vignette: 0.55, grain: 0.02 };
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color("#0f1116");
    scene.fog = new THREE.Fog("#0f1116", 7, 14);
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    scene.add(new THREE.HemisphereLight("#cfd8ff", "#1a1410", 0.9));
    const key = new THREE.SpotLight("#fff3e2", 60, 12, 0.55, 0.6, 1.6);
    key.position.set(1.5, 5.5, 3);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.normalBias = 0.015;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 12;
    scene.add(key, key.target);
    const rimR = new THREE.PointLight(RED, 9, 8, 1.5);
    rimR.position.set(-2.5, 1.8, -1.5);
    const rimB = new THREE.PointLight(BLUE, 9, 8, 1.5);
    rimB.position.set(2.5, 1.8, -1.5);
    scene.add(rimR, rimB);
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(2.2, 48),
      new THREE.MeshStandardMaterial({
        roughness: 0.9,
        map: canvasTexture(256, 256, (g, w) => {
          const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
          r.addColorStop(0, "#3a3e48");
          r.addColorStop(0.8, "#1c1f26");
          r.addColorStop(1, "#0f1116");
          g.fillStyle = r;
          g.fillRect(0, 0, w, w);
          g.strokeStyle = "rgba(229,56,59,.7)";
          g.lineWidth = 4;
          g.beginPath();
          g.arc(w / 2, w / 2, w * 0.44, 0, TAU);
          g.stroke();
        }),
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    this.fighters = [];
    this.key = "";
    this.userYaw = 0;
    this.t = 0;
    this.nextMove = 2;
  }

  /** One fighter spins on a turntable and shadowboxes; two square off. */
  setFighters(list) {
    const key = JSON.stringify(list);
    if (key === this.key) return;
    this.key = key;
    this.fighters.forEach((f) => f.dispose());
    const looks = list.map((d) => (d.look ? parseLook(d.look) : lookFromName(d.name || "x")));
    if (looks.length === 2 && looks[0].shorts === looks[1].shorts) looks[1].shorts = (looks[1].shorts + 3) % 8;
    this.fighters = list.map((d, i) => {
      const f = new Fighter3D({ look: looks[i], weightClass: d.weightClass, style: d.style, glove: i ? BLUE : RED, org: d.org, eventGloves: d.eventGloves, tattooText: d.ink, faceSeed: d.name || "", female: !!d.female });
      f.setBelt(d.belt || null);
      f.setInjured(!!d.injured);
      this.scene.add(f.root);
      return f;
    });
    if (this.fighters.length === 2) {
      this.fighters[0].root.position.set(-0.62, 0, 0);
      this.fighters[0].root.rotation.y = Math.PI / 2;
      this.fighters[1].root.position.set(0.62, 0, 0);
      this.fighters[1].root.rotation.y = -Math.PI / 2;
    }
    this.fighters.forEach((f) => f.lastPos.copy(f.root.position));
  }

  update(dt) {
    this.t += dt;
    const two = this.fighters.length === 2;
    if (!two && this.fighters[0]) {
      const f = this.fighters[0];
      f.root.rotation.y = Math.sin(this.t * 0.35) * 0.7 + 0.35 + this.userYaw;
      this.nextMove -= dt;
      if (this.nextMove <= 0 && !f.busy) {
        const moves = ["jab", "jab-cross", "left hook", "uppercut", "body kick", "1-2-hook combination", "leg kick", "head kick", "knee up the middle"];
        f.play(attack(moves[Math.floor(Math.random() * moves.length)], 1 + Math.floor(Math.random() * 3)).frames, "stance");
        this.nextMove = 1.4 + Math.random() * 2;
      }
    }
    this.fighters.forEach((f) => f.update(dt));
    const yaw = two ? this.userYaw * 0.6 + Math.sin(this.t * 0.2) * 0.25 : 0;
    // back the camera off until the fighters fit both across and top to bottom
    const halfV = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const halfH = halfV * this.camera.aspect;
    const dist = Math.max(two ? 4.3 : 3.7, (two ? 1.45 : 0.75) / halfH, 1.2 / halfV);
    this.camera.position.set(Math.sin(yaw) * dist, two ? 1.35 : 1.2, Math.cos(yaw) * dist);
    this.camera.lookAt(0, 0.98, 0);
  }
}

// ====================================================================== arena

function buildCage(scene) {
  // raised octagon platform
  const plat = new THREE.Mesh(
    new THREE.CylinderGeometry(R + 0.5, R + 0.62, 0.9, 8, 1),
    new THREE.MeshStandardMaterial({ color: "#121318", roughness: 0.8 })
  );
  plat.rotation.y = Math.PI / 8;
  plat.position.y = -0.465; // top sits just under the mat so the two never fight for depth
  plat.receiveShadow = true;
  scene.add(plat);

  const mat = canvasTexture(2048, 2048, (g, w) => {
    g.fillStyle = "#c9c4b8";
    g.fillRect(0, 0, w, w);
    // woven canvas: a fine cross-hatch, then scuffs and footprints from the night's fights
    g.globalAlpha = 0.05;
    g.strokeStyle = "#5a5446";
    g.lineWidth = 1;
    for (let x = 0; x < w; x += 4) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x, w);
      g.stroke();
      g.beginPath();
      g.moveTo(0, x);
      g.lineTo(w, x);
      g.stroke();
    }
    g.globalAlpha = 1;
    for (let i = 0; i < 3000; i++) {
      g.fillStyle = `rgba(90,80,60,${Math.random() * 0.05})`;
      g.beginPath();
      g.ellipse(Math.random() * w, Math.random() * w, 3 + Math.random() * 26, 2 + Math.random() * 12, Math.random() * 3, 0, TAU);
      g.fill();
    }
    // sponsor decals around the octagon
    const c0 = w / 2;
    const sponsors = ["IRON GYM", "LUXURY MOTORS", "PRIME REALTY", "PAWS", "INK STUDIO", "CAFÉ & DINING", "NIGHTCLUB", "GFC"];
    g.textAlign = "center";
    g.textBaseline = "middle";
    sponsors.forEach((t, i) => {
      const a = (i / 8) * TAU + Math.PI / 8;
      g.save();
      g.translate(c0 + Math.sin(a) * w * 0.4, c0 + Math.cos(a) * w * 0.4);
      g.rotate(-a);
      g.fillStyle = "rgba(12,12,16,0.82)";
      g.fillRect(-w * 0.09, -w * 0.022, w * 0.18, w * 0.044);
      g.fillStyle = i % 2 ? "#f4b942" : "#ffffff";
      g.font = `800 ${w * 0.024}px system-ui, sans-serif`;
      g.fillText(t, 0, 2);
      g.restore();
    });
    // corner color marks
    for (const [a, col] of [[Math.PI / 8 + TAU / 8, "#d62828"], [Math.PI / 8 + (5 * TAU) / 8, "#2f6fed"]]) {
      g.fillStyle = col;
      g.globalAlpha = 0.75;
      g.beginPath();
      g.arc(c0 + Math.sin(a) * w * 0.47, c0 + Math.cos(a) * w * 0.47, w * 0.025, 0, TAU);
      g.fill();
      g.globalAlpha = 1;
    }
    const c = w / 2;
    g.strokeStyle = "rgba(20,20,24,.18)";
    g.lineWidth = 6;
    g.beginPath();
    g.arc(c, c, w * 0.17, 0, TAU);
    g.stroke();
    g.fillStyle = "#c8102e";
    g.beginPath();
    g.arc(c, c, w * 0.15, 0, TAU);
    g.fill();
    g.fillStyle = "#fff";
    g.font = `italic 900 ${w * 0.1}px system-ui, sans-serif`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText("GFC", c, c + w * 0.005);
    g.fillStyle = "rgba(20,20,24,.55)";
    g.font = `800 ${w * 0.035}px system-ui, sans-serif`;
    for (const [a, txt] of [[0, "CAGE CAREER"], [Math.PI, "CAGE CAREER"], [Math.PI / 2, "FIGHT NIGHT"], [-Math.PI / 2, "FIGHT NIGHT"]]) {
      g.save();
      g.translate(c, c);
      g.rotate(a);
      g.fillText(txt, 0, w * 0.33);
      g.restore();
    }
  });
  // A separate linear height map preserves the printed sponsors while grazing
  // light picks out the fabric weave. Repeating it avoids another large texture.
  const weave = canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = "#808080";
    g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) for (let x = 0; x < w; x += 8) {
      const over = ((x + y) / 8) % 2 === 0;
      g.fillStyle = "#a0a0a0";
      g.fillRect(x + 1, y + 1, over ? 6 : 3, over ? 3 : 6);
      g.fillStyle = "#686868";
      g.fillRect(x + 5, y + 5, 2, 2);
    }
  });
  weave.colorSpace = THREE.NoColorSpace;
  weave.wrapS = weave.wrapT = THREE.RepeatWrapping;
  weave.repeat.set(24, 24);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R + 0.02, 8), new THREE.MeshStandardMaterial({ map: mat, bumpMap: weave, bumpScale: 0.012, roughness: 0.9 }));
  floor.rotation.x = -Math.PI / 2;
  floor.rotation.z = Math.PI / 8;
  floor.receiveShadow = true;
  scene.add(floor);

  const link = canvasTexture(128, 128, (g, w) => {
    // one diamond of vinyl-coated chain link, with a highlight along each wire
    g.clearRect(0, 0, w, w);
    g.lineCap = "round";
    for (const [col, lw] of [["rgba(10,10,12,1)", 7], ["rgba(70,72,78,.9)", 2.5]]) {
      g.strokeStyle = col;
      g.lineWidth = lw;
      g.beginPath();
      g.moveTo(w / 2, 0); g.lineTo(w, w / 2); g.lineTo(w / 2, w); g.lineTo(0, w / 2); g.closePath();
      g.stroke();
    }
  });
  link.wrapS = link.wrapT = THREE.RepeatWrapping;
  const side = 2 * R * Math.sin(Math.PI / 8);
  const H = 1.75;
  link.repeat.set(side / 0.075, H / 0.075);
  const fenceMat = new THREE.MeshStandardMaterial({ map: link, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.35, metalness: 0.25, depthWrite: false });
  const pad = new THREE.MeshStandardMaterial({ color: "#0b0b0d", roughness: 0.4, metalness: 0.05 });
  const corners = [];
  const panels = [], rails = [];
  for (let i = 0; i < 8; i++) {
    const a0 = (i / 8) * TAU + Math.PI / 8, a1 = ((i + 1) / 8) * TAU + Math.PI / 8;
    const p0 = new THREE.Vector3(Math.sin(a0) * R, 0, Math.cos(a0) * R);
    const p1 = new THREE.Vector3(Math.sin(a1) * R, 0, Math.cos(a1) * R);
    const mid = p0.clone().add(p1).multiplyScalar(0.5);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(side, H), fenceMat);
    panel.position.set(mid.x, H / 2 + 0.12, mid.z);
    panel.lookAt(0, H / 2 + 0.12, 0);
    scene.add(panel);
    panels.push(panel);
    // top rail and bottom padding
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, side, 14), pad);
    rail.position.set(mid.x, H + 0.14, mid.z);
    rail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p1.clone().sub(p0).normalize());
    scene.add(rail);
    rails.push(rail);
    const base = new THREE.Mesh(new THREE.BoxGeometry(side, 0.18, 0.14), pad);
    base.position.set(mid.x, 0.09, mid.z);
    base.lookAt(0, 0.09, 0);
    base.castShadow = true;
    scene.add(base);
    corners.push(p0);
  }
  corners.forEach((p, i) => {
    const color = i === 1 ? RED : i === 5 ? BLUE : "#0b0b0d";
    // padded posts with the logo printed down them
    const tex = canvasTexture(256, 1024, (g, w, h) => {
      g.fillStyle = color;
      g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(255,255,255,.08)";
      for (let y = 0; y < h; y += 128) g.fillRect(0, y, w, 4);
      g.save();
      g.translate(w / 2, h / 2);
      g.rotate(-Math.PI / 2);
      g.fillStyle = i === 1 || i === 5 ? "#ffffff" : "#f4b942";
      g.font = "italic 900 150px system-ui, sans-serif";
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText("MMA", 0, 0);
      g.restore();
    });
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, H + 0.3, 20), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.42 }));
    post.position.set(p.x, (H + 0.3) / 2, p.z);
    post.rotation.y = Math.atan2(p.x, p.z);
    post.castShadow = true;
    scene.add(post);
  });
  // the cage door, on the panel between the blue corner and the next post
  {
    const a0 = (6 / 8) * TAU + Math.PI / 8, a1 = (7 / 8) * TAU + Math.PI / 8;
    const p0 = new THREE.Vector3(Math.sin(a0) * R, 0, Math.cos(a0) * R), p1 = new THREE.Vector3(Math.sin(a1) * R, 0, Math.cos(a1) * R);
    const mid = p0.clone().add(p1).multiplyScalar(0.5).multiplyScalar(1.004);
    const frame = new THREE.Group();
    frame.position.copy(mid);
    frame.lookAt(0, 0, 0);
    for (const x of [-0.5, 0.5]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.06, H, 0.06), pad);
      bar.position.set(x, H / 2 + 0.12, 0);
      frame.add(bar);
    }
    const latch = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.08), new THREE.MeshStandardMaterial({ color: "#9ca3af", metalness: 0.8, roughness: 0.3 }));
    latch.position.set(0.44, 1.0, 0.04);
    frame.add(latch);
    scene.add(frame);
  }
  // the apron around the platform, wrapped in banners
  const apron = canvasTexture(4096, 128, (g, w, h) => {
    g.fillStyle = "#0d0e12";
    g.fillRect(0, 0, w, h);
    g.font = "italic 900 72px system-ui, sans-serif";
    g.textBaseline = "middle";
    for (let x = 30, i = 0; x < w; x += 520, i++) {
      g.fillStyle = i % 2 ? "#f4b942" : "#ffffff";
      g.fillText(i % 2 ? "CAGE CAREER" : "FIGHT NIGHT", x, h / 2 + 4);
    }
  });
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.505, R + 0.625, 0.88, 8, 1, true), new THREE.MeshStandardMaterial({ map: apron, roughness: 0.6 }));
  skirt.rotation.y = Math.PI / 8;
  skirt.position.y = -0.465;
  scene.add(skirt);
  return { red: corners[1], blue: corners[5], panels, rails, floor, skirt };
}

function buildCrowd(scene) {
  const seats = [];
  for (let row = 0; row < 10; row++) {
    const r = R + 2.6 + row * 0.85;
    const y = -0.9 + row * 0.42;
    const n = Math.floor((TAU * r) / 0.62);
    for (let i = 0; i < n; i++) {
      if (Math.random() < 0.08) continue;
      const a = (i / n) * TAU + row * 0.2;
      if (Math.sin(a) * r < -R && Math.abs(Math.cos(a) * r) < 2.2) continue;
      seats.push({ x: Math.sin(a) * r, y, z: Math.cos(a) * r, a, phase: Math.random() * TAU, s: 0.9 + Math.random() * 0.25 });
    }
  }
  const bodyG = new THREE.CapsuleGeometry(0.2, 0.36, 3, 8);
  const headG = new THREE.SphereGeometry(0.12, 8, 6);
  const bodies = new THREE.InstancedMesh(bodyG, new THREE.MeshStandardMaterial({ roughness: 0.9 }), seats.length);
  const heads = new THREE.InstancedMesh(headG, new THREE.MeshStandardMaterial({ roughness: 0.8 }), seats.length);
  const shirt = ["#2b2f3a", "#3d1f1f", "#1f2a3d", "#3a3a3a", "#4a3b26", "#5a1e1e", "#1e3a2a", "#6b6b6b", "#151515", "#7a2f2f"];
  const skin = ["#f2d2b6", "#e3b48e", "#c98e64", "#a96c45", "#7c4b2c", "#4f301d"];
  const c = new THREE.Color();
  seats.forEach((s, i) => {
    bodies.setColorAt(i, c.set(shirt[i % shirt.length]).multiplyScalar(0.55 + Math.random() * 0.5));
    heads.setColorAt(i, c.set(skin[(i * 7) % skin.length]).multiplyScalar(0.6));
  });
  scene.add(bodies, heads);

  // camera flashes in the stands
  const flashN = 60;
  const fpos = new Float32Array(flashN * 3);
  const fcol = new Float32Array(flashN * 3);
  for (let i = 0; i < flashN; i++) {
    const s = seats[Math.floor(Math.random() * seats.length)];
    fpos.set([s.x, s.y + 0.9, s.z], i * 3);
  }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute("position", new THREE.BufferAttribute(fpos, 3));
  fg.setAttribute("color", new THREE.BufferAttribute(fcol, 3));
  const flashes = new THREE.Points(fg, new THREE.PointsMaterial({ size: 0.5, map: glowTexture(), vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(flashes);

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const v = new THREE.Vector3();
  const one = new THREE.Vector3();
  return {
    update(t, excitement) {
      seats.forEach((s, i) => {
        const jump = Math.max(0, Math.sin(t * (6 + (i % 5)) + s.phase)) * 0.16 * excitement;
        q.setFromAxisAngle(up, s.a + Math.PI);
        one.setScalar(s.s);
        m.compose(v.set(s.x, s.y + 0.38 * s.s + jump, s.z), q, one);
        bodies.setMatrixAt(i, m);
        m.compose(v.set(s.x, s.y + 0.82 * s.s + jump, s.z), q, one);
        heads.setMatrixAt(i, m);
      });
      bodies.instanceMatrix.needsUpdate = true;
      heads.instanceMatrix.needsUpdate = true;
      for (let i = 0; i < flashN; i++) {
        const lit = Math.random() < 0.004 + excitement * 0.025 ? 1 : 0;
        fcol[i * 3] = fcol[i * 3 + 1] = fcol[i * 3 + 2] = lit;
      }
      fg.attributes.color.needsUpdate = true;
    },
  };
}

/** Light beams through the haze, a hanging jumbotron, and the people around the cage. */
function buildExtras(scene, cornerSpots) {
  // beams from the lighting rig down onto the canvas
  const beamTex = canvasTexture(8, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, "rgba(255,246,225,0.55)");
    gr.addColorStop(0.6, "rgba(255,246,225,0.12)");
    gr.addColorStop(1, "rgba(255,246,225,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  });
  const beamMat = new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, opacity: 0.32, fog: false });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const top = new THREE.Vector3(Math.sin(a) * 5.2, 7.2, Math.cos(a) * 5.2);
    const bottom = new THREE.Vector3(Math.sin(a + 0.4) * 1.6, 0, Math.cos(a + 0.4) * 1.6);
    const len = top.distanceTo(bottom);
    const g = new THREE.CylinderGeometry(0.18, 1.4, len, 20, 1, true);
    g.translate(0, -len / 2, 0);
    const beam = new THREE.Mesh(g, beamMat);
    beam.position.copy(top);
    beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), bottom.clone().sub(top).normalize());
    scene.add(beam);
  }

  // the jumbotron: four screens over the cage
  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = 1024;
  screenCanvas.height = 512;
  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  const tron = new THREE.Group();
  tron.position.set(0, 6.4, 0);
  const shell = new THREE.Mesh(new THREE.BoxGeometry(3.3, 1.75, 3.3), new THREE.MeshStandardMaterial({ color: "#0b0c10", roughness: 0.5, metalness: 0.5 }));
  tron.add(shell);
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: false });
  for (let i = 0; i < 4; i++) {
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(3.05, 1.5), screenMat);
    sc.position.set(Math.sin((i / 4) * TAU) * 1.66, 0, Math.cos((i / 4) * TAU) * 1.66);
    sc.rotation.y = (i / 4) * TAU;
    tron.add(sc);
  }
  scene.add(tron);
  const drawScreen = (red, blue, line, org = "GFC") => {
    const g = screenCanvas.getContext("2d");
    const w = 1024, h = 512;
    const bg = g.createLinearGradient(0, 0, w, 0);
    bg.addColorStop(0, "#5a0a10");
    bg.addColorStop(0.5, "#0b0c12");
    bg.addColorStop(1, "#0a1f55");
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.textAlign = "center";
    g.textBaseline = "middle";
    drawOrgLogo(g, org, w / 2, 78, 66);
    g.font = "800 54px system-ui, sans-serif";
    g.fillStyle = "#fff";
    g.fillText(red, w * 0.27, h * 0.48, w * 0.45);
    g.fillText(blue, w * 0.73, h * 0.48, w * 0.45);
    g.fillStyle = "#f4b942";
    g.font = "900 60px system-ui, sans-serif";
    g.fillText("VS", w / 2, h * 0.48);
    g.fillStyle = "#e5e7eb";
    g.font = "700 40px system-ui, sans-serif";
    g.fillText(line, w / 2, h * 0.82, w * 0.9);
    screenTex.needsUpdate = true;
  };

  // cageside: the commentary desk, photographers and each corner's team
  const people = [];
  const person = (x, z, face, color, sit = true) => people.push({ x, z, face, color, sit });
  const deskA = Math.PI * 0.5;
  const dr = R + 2.0;
  const desk = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 0.7), new THREE.MeshStandardMaterial({ color: "#121318", roughness: 0.7 }));
  desk.position.set(Math.sin(deskA) * dr, -0.5, Math.cos(deskA) * dr);
  desk.rotation.y = deskA;
  scene.add(desk);
  const glow = new THREE.MeshBasicMaterial({ color: "#7dd3fc", toneMapped: false });
  for (let i = -1; i <= 1; i++) {
    const mon = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.04), glow);
    const off = new THREE.Vector3(Math.cos(deskA) * i * 0.95, 0.06, -Math.sin(deskA) * i * 0.95);
    mon.position.copy(desk.position).add(off).add(new THREE.Vector3(-Math.sin(deskA) * 0.1, 0, -Math.cos(deskA) * 0.1));
    mon.rotation.y = deskA;
    scene.add(mon);
    person(desk.position.x + off.x + Math.sin(deskA) * 0.6, desk.position.z + off.z + Math.cos(deskA) * 0.6, deskA + Math.PI, "#1f2937");
  }
  for (const a of [0.2, 1.3, 2.4, 3.6, 4.7]) person(Math.sin(a) * (R + 1.1), Math.cos(a) * (R + 1.1), a + Math.PI, "#111111");
  for (const [spot, col] of [[cornerSpots.p, "#7f1d1d"], [cornerSpots.o, "#1e3a8a"]]) {
    const out = spot.clone().setY(0).normalize().multiplyScalar(R + 1.2);
    for (const k of [-0.5, 0.5]) {
      const side = new THREE.Vector3(out.z, 0, -out.x).normalize().multiplyScalar(k);
      person(out.x + side.x, out.z + side.z, Math.atan2(-out.x, -out.z), col, false);
    }
    const stool = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.2, 0.5, 12), new THREE.MeshStandardMaterial({ color: "#1f2937", roughness: 0.6 }));
    stool.position.set(out.x * 0.9, -0.62, out.z * 0.9);
    scene.add(stool);
  }
  const bodyG = new THREE.CapsuleGeometry(0.2, 0.4, 3, 10), headG = new THREE.SphereGeometry(0.12, 12, 10);
  const skinM = new THREE.MeshStandardMaterial({ color: "#b98563", roughness: 0.7 });
  for (const p of people) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(bodyG, new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.8 }));
    b.position.y = p.sit ? 0.0 : 0.25;
    const h = new THREE.Mesh(headG, skinM);
    h.position.y = p.sit ? 0.45 : 0.72;
    g.add(b, h);
    g.position.set(p.x, -0.55, p.z);
    g.rotation.y = p.face;
    scene.add(g);
  }
  return { drawScreen };
}

/** One corner of the fight: a fighter plus where it is heading. */
class Side {
  constructor(tag, fighter) {
    this.tag = tag;
    this.f = fighter;
    this.pos = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.yaw = 0;
    this.fixedYaw = null; // null = face the opponent
    this.rate = 4;
    this.lunge = 0;
    this.lungeTarget = 0;
    this.lungeUntil = 0;
    this.ring = null;
    this.dmg = 0; // visible damage to the head, 0..1
    this.bdmg = 0; // body (ribs, liver)
    this.ldmg = 0; // legs
  }

  hurt(d, body = this.bdmg, leg = this.ldmg) {
    this.dmg = Math.min(1, Math.max(0, d));
    this.bdmg = Math.min(1, Math.max(0, body));
    this.ldmg = Math.min(1, Math.max(0, leg));
    this.f.setDamage(this.dmg, this.bdmg, this.ldmg);
  }
}

// Where the fighter on top kneels, sits or lies relative to the one underneath, who lies at G facing gDir:
// a = distance along gDir, c = distance to the bottom fighter's left, yaw = turn relative to the bottom fighter.
const GROUND = {
  guard: { a: 0.46, c: 0, yaw: Math.PI },
  half: { a: 0.4, c: 0.06, yaw: Math.PI },
  mount: { a: -0.3, c: 0, yaw: Math.PI },
  side: { a: -0.3, c: 0.5, yaw: -Math.PI / 2 },
  back: { a: -0.3, c: 0, yaw: 0 },
  headlock: { a: 0.85, c: 0, yaw: Math.PI },
  legs: { a: 0.85, c: 0, yaw: Math.PI },
  armbar: { a: -0.3, c: 0.5, yaw: -Math.PI / 2 },
};

// how long (ms, at 1x) the director needs to act out each event
const BASE_MS = { strike: 1000, miss: 800, big: 1500, kd: 2100, td: 1500, stuff: 1300, sweep: 1400, ground: 900, gnp: 1000, subatt: 1800, info: 1100, round: 2000, finish: 3800 };

class ArenaView {
  constructor() {
    // fight-night broadcast look: punchy contrast, glowing lights, a heavy vignette
    this.look = { bloom: [0.45, 0.45, 0.9], ao: 0.5, contrast: 1.1, saturation: 1.08, warmth: 0.6, vignette: 0.5, grain: 0.028 };
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color("#07080b");
    scene.fog = new THREE.FogExp2("#07080b", 0.035);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    scene.add(new THREE.HemisphereLight("#9fb0d6", "#2a2018", 0.55));
    const key = new THREE.SpotLight("#fff6e8", 95, 22, 0.6, 0.6, 1.1);
    key.position.set(0, 10, 0.5);
    key.castShadow = true;
    key.shadow.mapSize.set(1536, 1536);
    key.shadow.bias = -0.0003;
    key.shadow.normalBias = 0.02;
    key.shadow.camera.near = 4;
    key.shadow.camera.far = 14;
    scene.add(key, key.target);
    // Broad neutral fills keep faces readable from both broadcast angles,
    // while the red/blue lights still define the corners. No extra shadow maps.
    for (const [x, z] of [[-4, 3], [4, -3]]) {
      const fill = new THREE.SpotLight("#dce8ff", 14, 18, 0.8, 0.9, 1.2);
      fill.position.set(x, 5, z);
      fill.target.position.set(0, 1, 0);
      scene.add(fill, fill.target);
    }
    for (const [x, z, c] of [[-6, -4, RED], [6, 4, BLUE]]) {
      const rim = new THREE.SpotLight(c, 40, 16, 0.5, 0.8, 1.2);
      rim.position.set(x, 5, z);
      scene.add(rim, rim.target);
    }
    // lighting truss
    const truss = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.08, 6, 8), new THREE.MeshStandardMaterial({ color: "#222", metalness: 0.6, roughness: 0.4 }));
    truss.rotation.x = Math.PI / 2;
    truss.position.y = 7.4;
    scene.add(truss);
    const bulbM = new THREE.MeshBasicMaterial({ color: "#fff7df" });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.28), bulbM);
      b.position.set(Math.sin(a) * 5.2, 7.25, Math.cos(a) * 5.2);
      scene.add(b);
    }
    const corners = buildCage(scene);
    this.cage = corners;
    this.panels = corners.panels;
    this.eventBorder = new THREE.Mesh(new THREE.RingGeometry(R - 0.28, R - 0.17, 8), new THREE.MeshBasicMaterial({ color: "#ffffff", toneMapped: false }));
    this.eventBorder.rotation.x = -Math.PI / 2; this.eventBorder.rotation.z = Math.PI / 8;
    this.eventBorder.position.y = 0.005; this.eventBorder.visible = false; scene.add(this.eventBorder);
    this.presenter = new RingCardPresenter(); scene.add(this.presenter.root);
    this.walkouts = new WalkoutDirector(this);
    this.cornerSpot = {
      p: corners.red.clone().multiplyScalar(0.8),
      o: corners.blue.clone().multiplyScalar(0.8),
    };
    this.crowd = buildCrowd(scene);
    this.extras = buildExtras(scene, this.cornerSpot);
    this.extras.drawScreen("RED CORNER", "BLUE CORNER", "FIGHT NIGHT");

    // effects
    this.sparks = [];
    for (let i = 0; i < 24; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
      s.visible = false;
      scene.add(s);
      this.sparks.push({ s, t: 1, dur: 0.2, v: new THREE.Vector3(), size: 0.3 });
    }

    // blood: droplets in flight, and the stains they leave on the canvas
    const bloodM = new THREE.MeshStandardMaterial({ color: "#b3120f", roughness: 0.25, emissive: "#4a0000" });
    const dropGeo = new THREE.SphereGeometry(0.018, 6, 5);
    this.drops = [];
    for (let i = 0; i < 48; i++) {
      const m = new THREE.Mesh(dropGeo, bloodM);
      m.visible = false;
      scene.add(m);
      this.drops.push({ m, v: new THREE.Vector3(), live: false });
    }
    const stainM = new THREE.MeshBasicMaterial({ color: "#7a0a0a", transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
    const stainGeo = new THREE.CircleGeometry(1, 14);
    stainGeo.rotateX(-Math.PI / 2);
    this.stains = [];
    for (let i = 0; i < 70; i++) {
      const m = new THREE.Mesh(stainGeo, stainM);
      m.visible = false;
      scene.add(m);
      this.stains.push(m);
    }
    this.stainNext = 0;

    this.P = this.O = this.ref = null;
    this.key = "";
    this.t = 0;          // fight time (slows down in slow motion)
    this.timers = [];
    this.slowUntil = 0;
    this.real = 0;
    this.excite = 0.25;
    this.userYaw = 0;
    this.speed = 1;
    this.mode = "intro";
    this.C = new THREE.Vector3();
    this.theta = 0;
    this.G = new THREE.Vector3();
    this.gDir = new THREE.Vector3(1, 0, 0);
    this.cam = { yaw: 0.3, dist: 5, h: 1.7, focus: new THREE.Vector3(0, 1, 0), close: null, shake: 0 };
  }

  // ------------------------------------------------------------ setup

  /** Builds both fighters and the referee for a fight. info: { playerLook, weightClass } */
  load(f, info) {
    const pl = info.playerLook ? parseLook(info.playerLook) : lookFromName(f.player.realName || f.player.name);
    const ol = f.opponent.look ? parseLook(f.opponent.look) : lookFromName(f.opponent.realName || f.opponent.name);
    if (ol.shorts === pl.shorts) ol.shorts = (ol.shorts + 3) % 8;
    const org = String(f.org || "GFC");
    const key = JSON.stringify([f.player.name, f.opponent.name, pl, ol, info.weightClass, org, f.specialEvent?.id || "standard"]);
    const shortName = (c) => String(c.realName || c.name).split(" ").pop().toUpperCase();
    const billing = f.belt ? f.belt.label.toUpperCase() : f.rounds === 5 ? "MAIN EVENT · 5 ROUNDS" : "3 ROUNDS";
    const sp = info.sponsors && info.sponsors.length ? "  ·  PRESENTED BY " + info.sponsors.slice(0, 2).join(" & ").toUpperCase() : "";
    this.extras.drawScreen(shortName(f.player), shortName(f.opponent), billing + sp, org);
    const edition = f.specialEvent || null;
    this.specialEvent = edition;
    this.cage.floor.material.color.set(edition ? edition.tint : "#ffffff");
    this.cage.skirt.material.color.set(edition ? edition.tint : "#ffffff");
    this.eventBorder.visible = !!edition;
    if (edition) this.eventBorder.material.color.set(edition.accent);
    this.presenter.configure(org, edition);
    this.drawCenterLogo(org, edition);
    if (key !== this.key) {
      this.key = key;
      for (const s of [this.P, this.O]) if (s) { s.f.dispose(); s.ring.removeFromParent(); }
      if (this.ref) this.ref.f.dispose();
      const ink = (c) => c.nickname || String(c.realName || c.name).split(" ").pop();
      this.P = new Side("p", new Fighter3D({ look: pl, weightClass: info.weightClass, style: f.player.style, glove: RED, org, eventGloves: edition?.gloves, tattooText: ink(f.player), faceSeed: f.player.realName || f.player.name, female: f.player.gender === "F" }));
      this.O = new Side("o", new Fighter3D({ look: ol, weightClass: info.weightClass, style: f.opponent.style, glove: BLUE, org, eventGloves: edition?.gloves, tattooText: ink(f.opponent), faceSeed: f.opponent.realName || f.opponent.name, female: f.opponent.gender === "F" }));
      this.ref = new Side("r", new Fighter3D({ ref: true, look: { skin: 1, hair: 0, hairColor: 5, beard: 0, shorts: 2 } }));
      this.ref.f.setBase("ref");
      for (const s of [this.P, this.O]) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.42, 0.5, 32),
          new THREE.MeshBasicMaterial({ color: s.tag === "p" ? RED : BLUE, transparent: true, opacity: 0.55, depthWrite: false })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.012;
        this.scene.add(ring);
        s.ring = ring;
      }
      for (const s of [this.P, this.O, this.ref]) this.scene.add(s.f.root);
    }
    this.P.fighterName = f.player.name; this.O.fighterName = f.opponent.name;
    this.O.fighterStyle = f.opponent.style;
    this.restore(f);
  }

  /** The promotion's logo painted in the middle of the canvas. */
  drawCenterLogo(org, edition = null) {
    const key = org + "|" + (edition?.id || "standard");
    if (this.logoOrg === key) return;
    this.logoOrg = key;
    if (!this.logo) {
      this.logoCanvas = document.createElement("canvas");
      this.logoCanvas.width = this.logoCanvas.height = 512;
      this.logoTex = new THREE.CanvasTexture(this.logoCanvas);
      this.logoTex.colorSpace = THREE.SRGBColorSpace;
      this.logo = new THREE.Mesh(new THREE.CircleGeometry(1.42, 48), new THREE.MeshStandardMaterial({ map: this.logoTex, transparent: true, roughness: 0.82, polygonOffset: true, polygonOffsetFactor: -2 }));
      this.logo.rotation.x = -Math.PI / 2;
      this.logo.position.y = 0.008;
      this.logo.receiveShadow = true;
      this.scene.add(this.logo);
    }
    const g = this.logoCanvas.getContext("2d");
    g.clearRect(0, 0, 512, 512);
    // worn canvas around the logo
    g.fillStyle = edition ? edition.canvas : "#c9c4b8";
    g.beginPath();
    g.arc(256, 256, 255, 0, TAU);
    g.fill();
    drawOrgLogo(g, org, 256, edition ? 210 : 256, edition ? 174 : 228);
    if (edition) {
      g.fillStyle = edition.accent; g.font = "900 34px Arial";
      g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText(edition.name.toUpperCase(), 256, 435, 450);
    }
    this.logoTex.needsUpdate = true;
  }

  stain(x, z, size) {
    const m = this.stains[this.stainNext++ % this.stains.length];
    m.visible = true;
    m.position.set(x, 0.016, z);
    m.scale.set(size * (0.7 + Math.random() * 0.6), 1, size * (0.7 + Math.random() * 0.6));
    m.rotation.y = Math.random() * TAU;
  }

  /** Blood flies off a fighter's face on a hard shot, away from the attacker. */
  bloodSpray(D, A, strength) {
    const from = D.f.worldPoint("head");
    const away = D.pos.clone().sub(A.pos).setY(0).normalize();
    const n = Math.round(4 + strength * 5);
    for (let i = 0; i < n; i++) {
      const d = this.drops.find((x) => !x.live);
      if (!d) break;
      d.live = true;
      d.m.visible = true;
      d.m.position.copy(from);
      d.m.scale.setScalar(0.6 + Math.random() * 1.2);
      d.v.copy(away).multiplyScalar(1 + Math.random() * 2.5 * strength).add(new THREE.Vector3((Math.random() - 0.5) * 1.6, 0.5 + Math.random() * 1.8, (Math.random() - 0.5) * 1.6));
    }
  }

  /** Jump straight to where the fight currently stands (opening the screen, reloading mid-fight). */
  restore(f) {
    this.walkouts.stop(false);
    this.presenter.hide();
    this.timers = [];
    this.slowUntil = 0;
    this.cam.shake = 0;
    this.mode = f.round === 0 ? "intro" : "stand";
    this.top = this.down = null;
    this.gpos = null;
    this.holding = false;
    this.lastInfo = "";
    this.lastG = "";
    this.refIn = false;
    this.ended = this.decision = null;
    this.ref.f.setBase("ref");
    this.C.set(0, 0, 0);
    this.theta = 0;
    this.cam.close = null;
    this.userYaw = 0;
    for (const s of [this.P, this.O]) {
      s.fixedYaw = null;
      s.f.setBase(f.round === 0 ? "relaxed" : "stance");
      // the champion walks out with the belt over the shoulder
      s.f.setBelt(f.round === 0 && f.belt && f.belt.champ === s.tag ? "shoulder" : null);
    }
    if (f.round === 0) {
      this.P.pos.copy(this.cornerSpot.p).multiplyScalar(0.5);
      this.O.pos.copy(this.cornerSpot.o).multiplyScalar(0.5);
    }
    // the damage so far shows on their faces, and blood is already on the canvas
    for (const st of this.stains) st.visible = false;
    for (const d of this.drops) { d.live = false; d.m.visible = false; }
    const hurt = (c) => (f.round === 0 ? 0 : Math.min(1, (100 - c.health) / 90 + f.round * 0.05));
    this.P.hurt(hurt(f.player), hurt(f.player) * 0.7, hurt(f.player) * 0.6);
    this.O.hurt(hurt(f.opponent), hurt(f.opponent) * 0.7, hurt(f.opponent) * 0.6);
    const stains = Math.round((this.P.dmg + this.O.dmg) * 14);
    for (let i = 0; i < stains; i++) {
      const a = Math.random() * TAU, r = Math.random() * R * 0.6;
      this.stain(Math.cos(a) * r, Math.sin(a) * r, 0.04 + Math.random() * 0.14);
    }
    for (const e of f.logs.flat()) this.handle(e, f, true);
    this.layout(0);
    for (const s of [this.P, this.O, this.ref]) {
      s.pos.copy(s.target);
      s.yaw = s.fixedYaw ?? (s === this.ref ? yawTo(s.pos, this.C) : yawTo(s.pos, this.other(s).pos));
      s.lunge = s.lungeTarget = 0;
      s.f.snap();
      this.place(s, 0);
      s.f.lastPos.copy(s.f.root.position);
    }
    if (f.round === 0 && !f.finished) this.presenter.show(1);
    if (f.finished) this.presenter.hide();
    this.snapCamera();
  }

  setPresentation15Plus(enabled) { this.presenter.setOutfit(enabled); }

  startWalkouts(preferences, onPhase, onDone) { this.walkouts.start(preferences, onPhase, onDone); this.snapCamera(); }
  skipWalkouts() { if (this.walkouts.active) this.walkouts.stop(true); }
  setReplayMode(enabled) { this.replayMode = !!enabled; }

  setSpeed(x) {
    this.speed = x;
  }

  other(s) {
    return s === this.P ? this.O : this.P;
  }

  side(tag) {
    return tag === "p" ? this.P : tag === "o" ? this.O : null;
  }

  /** Run anything still pending from the previous event, so slow frame rates never apply events out of order. */
  flush() {
    const pending = this.timers.sort((a, b) => a.at - b.at);
    this.timers = [];
    pending.forEach((x) => x.fn());
  }

  later(delay, fn, instant) {
    if (instant) fn();
    else this.timers.push({ at: this.t + delay, fn });
  }

  // ------------------------------------------------------------ choreography

  /** Act out one fight event. Returns how long it needs on screen (ms at 1x speed). */
  play(e, f) {
    return this.handle(e, f, false);
  }

  handle(e, f, instant) {
    this.flush();
    // hands-on fights: stepping in closes the distance, backing off opens it, circling turns the pair
    if (e.r) this.standGap = e.r === "in" ? 1.0 : 1.65;
    if (e.mv === "circle") this.theta += 0.9;
    const A = this.side(e.side);
    const D = A ? this.other(A) : null;
    const g = e.g !== undefined ? e.g : this.inferG(e);
    const act = (s, frames, after) => {
      if (after) s.f.setBase(after);
      if (!instant) s.f.play(frames, after);
    };
    let ms = BASE_MS[e.type] || 1000;

    switch (e.type) {
      case "info":
        if (e.side === "n") {
          this.presenter.hide();
          // round start: back to the middle, touch gloves
          this.mode = "stand";
          this.top = this.down = null;
          this.refIn = false;
          this.standGap = null;
          this.C.set(0, 0, 0);
          // touching gloves, or one fighter leaving the other hanging
          const rn = Number((e.text.match(/Round (\d+)/) || [])[1]) || f.round;
          const touch = e.touch !== undefined ? e.touch : rn === 1 ? "both" : null;
          for (const s of [this.P, this.O]) {
            s.fixedYaw = null;
            s.f.setBelt(null);
            const offers = touch === "both" || (touch === "p" && s === this.P) || (touch === "o" && s === this.O);
            if (offers) act(s, SEQUENCES.touch, "stance");
            else if (touch) act(s, SEQUENCES.refuse, "stance");
            else act(s, [[POSES.stance, 0.3, 8]], "stance");
          }
          if (!instant) {
            audio.sfx("bell");
            audio.roar(0.5);
            this.excite = 0.7;
            const n = Number((e.text.match(/Round (\d+)/) || [])[1]) || f.round;
            // round one waits for the introductions to finish
            if (!this.replayMode) audio.say(roundCall(n, f), n === 1);
          }
          ms = 2300;
        } else {
          ms = this.info(e, A, D, act, instant);
        }
        break;

      case "strike":
      case "miss":
      case "big":
      case "kd": {
        if (this.mode !== "stand") this.standUp(instant, act);
        const big = e.type === "big" || e.type === "kd";
        const a = attack(e.move, e.n || 1, false);
        act(A, a.frames, "stance");
        if (instant) {
          if (e.type === "kd") this.knockDown(D, true);
          break;
        }
        A.lungeTarget = a.fwd || 0.15;
        A.lungeUntil = this.t + (a.lungeFor || 0.35);
        let at = 0, first = true, hits = 0;
        for (const fr of a.frames) {
          if (fr[3]) {
            const when = at + Math.min(fr[1], 0.09);
            if (e.type === "miss") {
              if (first) this.later(Math.max(0, when - 0.12), () => { D.f.play(SEQUENCES.slip, "stance"); audio.sfx("whoosh"); });
            } else {
              const last = hits === (e.n || 1) - 1 || fr === a.frames[a.frames.length - 1];
              const strength = big && last ? 1.8 : 0.6 + Math.min(4, e.n || 1) * 0.1;
              this.later(when, () => this.impact(A, D, fr[3], strength));
              hits++;
            }
            first = false;
          }
          at += fr[1];
        }
        if (e.type === "big") {
          this.later(at, () => D.f.play(SEQUENCES.rocked, "stance"));
          this.closeUp(D, 1.8);
          audio.roar(0.8);
          audio.duck(1.2);
          this.excite = 1;
        }
        if (e.type === "kd") {
          this.later(at, () => this.knockDown(D, false));
          this.closeUp(D, 2.2);
          audio.duck(2);
        }
        ms = Math.max(ms, at * 1000 + (e.type === "miss" ? 450 : 600));
        if (e.type === "kd") ms += 900;
        if (e.type === "big") ms += 600;
        break;
      }

      case "td": {
        if (instant) {
          this.goGround(g || A.tag, true, e.p);
          break;
        }
        if (this.mode !== "stand") this.standUp(true, act);
        const td = takedown(e.move, e.text);
        A.f.play(td.att, null);
        D.f.play(td.def, null);
        A.lungeTarget = td.fwd;
        D.lungeTarget = td.dFwd;
        A.lungeUntil = D.lungeUntil = this.t + td.mat;
        if (td.big) this.closeUp(D, td.mat + 0.6, true);
        this.later(td.mat, () => {
          this.goGround(g || A.tag, false, e.p);
          audio.sfx("slam", td.big ? 1.6 : 1);
          audio.roar(td.big ? 1 : 0.6);
          this.cam.shake = td.big ? 0.24 : 0.12;
          this.excite = td.big ? 1 : 0.8;
        });
        ms = Math.max(ms, td.mat * 1000 + 700);
        break;
      }

      case "stuff": {
        // the side that stuffs it is e.side; the other fighter shot in
        const shooter = D;
        if (!instant) {
          shooter.f.play(SEQUENCES.shoot, "stance");
          shooter.lungeTarget = 0.4;
          shooter.lungeUntil = this.t + 0.45;
          this.later(0.18, () => { A.f.play(SEQUENCES.sprawl, "stance"); audio.sfx("body", 0.5); });
          audio.roar(0.3);
        }
        break;
      }

      case "sweep":
        if (!instant) {
          audio.sfx("slam");
          audio.roar(0.7);
          this.excite = 0.8;
        }
        this.goGround(g || A.tag, instant, e.p);
        break;

      case "ground": {
        if (this.mode !== "ground") this.goGround(g || A.tag, instant, e.p);
        else if (e.p && (e.p !== this.gpos || this.holding)) this.setGroundPos(e.p, instant);
        if (!instant) {
          const top = this.side(this.top), bot = this.other(top);
          top.f.play(groundShift(top.f.base), top.f.base);
          bot.f.play(groundShift(bot.f.base), bot.f.base);
          if (e.p && /back|mount/.test(e.p)) audio.roar(0.5);
        }
        break;
      }

      case "gnp": {
        if (this.mode !== "ground" || this.top !== A.tag) this.goGround(A.tag, instant, e.p);
        else if (e.p && (e.p !== this.gpos || this.holding)) this.setGroundPos(e.p, true);
        const a = attack(e.move, e.n || 1, true, POSES[A.f.base]);
        act(A, a.frames, A.f.base);
        if (instant) break;
        if (/^(top|bottom|half)/i.test(D.f.base) || D.f.base === "mountBottom") D.f.play(SEQUENCES.block, D.f.base);
        let at = 0;
        for (const fr of a.frames) {
          if (fr[3]) this.later(at + 0.06, () => this.impact(A, D, "ground", 0.8 + (e.n || 1) * 0.1));
          at += fr[1];
        }
        ms = Math.max(ms, at * 1000 + 450);
        break;
      }

      case "subatt": {
        const topTag = g || this.top || D.tag;
        if (this.mode !== "ground" || this.top !== topTag) this.goGround(topTag, true, e.p);
        const fromBottom = this.top !== A.tag;
        const sub = submission(e.move, fromBottom);
        this.setGroundPos(sub.layout, instant);
        // the hold stays on until the next event: an escape or the tap
        this.holding = true;
        A.f.setBase(sub.attHold);
        D.f.setBase(sub.defHold);
        if (!instant) {
          A.f.play(sub.att, sub.attHold);
          D.f.play(sub.def, sub.defHold);
          this.closeUp(this.side(this.top) === A ? D : A, 2.2, true);
          audio.roar(0.7);
          this.excite = 0.9;
        }
        ms = 2200;
        break;
      }

      case "round": {
        const completed = Number((e.text.match(/round (\d+)/i) || [])[1]) || f.round;
        if (completed < f.rounds) this.presenter.show(completed + 1);
        else this.presenter.hide();
        if (!instant && !this.replayMode && !f.finished) setTimeout(() => { if (!this.replayMode) audio.say(cornerCall(f), true); }, 1800);
        this.mode = "corners";
        this.top = this.down = null;
        for (const s of [this.P, this.O]) {
          s.fixedYaw = null;
          s.f.setBase("relaxed");
          if (!instant) s.f.stopActions();
        }
        if (!instant) {
          audio.sfx("bell3");
          audio.roar(0.45);
          this.excite = 0.45;
        }
        break;

      }
      case "finish":
        this.presenter.hide();
        ms = this.finish(e, f, instant, act);
        break;
    }

    if (!instant && !this.replayMode) {
      // the big moments always get called (cutting into whatever was being said); otherwise the
      // commentary team keeps talking through the fight whenever nobody's mid-sentence
      const call = reaction(e, f);
      if (call && (e.type === "kd" || e.type === "big" || !audio.talking())) audio.say(call);
      else if (!audio.talking() && Math.random() < 0.55) {
        const line = commentary(e, f);
        if (line) audio.say(line);
      }
    }

    // keep the position in step with the engine
    if (e.type !== "finish" && e.type !== "round" && !(e.type === "info" && e.side === "n")) {
      if (g === "" && this.mode === "ground") this.standUp(instant, act);
      else if (g && (this.mode !== "ground" || this.top !== g) && e.type !== "td") {
        this.goGround(g, instant, e.p);
      } else if (g && this.mode === "ground" && e.type !== "subatt" && (this.holding || (e.p && e.p !== this.gpos))) {
        this.setGroundPos(e.p || this.gpos, instant);
      }
    }
    this.lastG = g;
    return ms;
  }

  /** Older saves have no position on events; work it out from the event itself. */
  inferG(e) {
    const prev = this.lastG ?? "";
    if (e.type === "td" || e.type === "sweep") return e.side;
    if (e.type === "info" && /feet|get back up|scrambles/i.test(e.text)) return "";
    if (e.type === "round" || (e.type === "info" && e.side === "n")) return "";
    return prev;
  }

  info(e, A, D, act, instant) {
    const text = e.text || "";
    this.lastInfo = text;
    if (/survives/i.test(text)) {
      this.down = null;
      this.refIn = false;
      this.mode = "stand";
      act(A, SEQUENCES.getUp, "stance");
      if (!instant) audio.roar(0.6);
      return 1500;
    }
    if (/referee jumps in/i.test(text)) {
      if (!instant) {
        this.refIn = true;
        this.ref.f.play(SEQUENCES.waveOff, "ref");
        audio.roar(1);
        this.excite = 1;
      }
      return 1300;
    }
    if (/doctor/i.test(text)) {
      if (!instant) {
        this.refIn = true;
        this.ref.f.play(SEQUENCES.waveOff, "ref");
        audio.roar(0.6);
      }
      return 1700;
    }
    if (/escapes/i.test(text)) {
      if (!instant) {
        A.f.stopActions();
        D.f.stopActions();
        audio.roar(0.4);
      }
      return 1000;
    }
    return 1100;
  }

  impact(A, D, kind, strength) {
    D.f.hit(kind, Math.min(1.6, strength));
    const toHead = kind !== "body" && kind !== "leg";
    D.hurt(D.dmg + (toHead ? 0.016 : 0.003) * strength, D.bdmg + (kind === "body" ? 0.045 : 0) * strength, D.ldmg + (kind === "leg" ? 0.05 : 0) * strength);
    if (toHead && (strength > 1.1 || (D.dmg > 0.3 && Math.random() < 0.35 + D.dmg * 0.4))) this.bloodSpray(D, A, strength);
    D.lungeTarget = -0.1 * strength;
    D.lungeUntil = this.t + 0.18;
    const part = kind === "body" ? "chest" : kind === "leg" ? "knL" : "head";
    const p = D.f.worldPoint(part);
    this.spark(p, strength);
    audio.sfx(kind === "leg" ? "kick" : kind === "body" ? "body" : kind === "ground" ? "ground" : "punch", strength);
    if (strength > 1.2) {
      this.cam.shake = Math.max(this.cam.shake, 0.06 * strength);
      audio.roar(0.6);
    } else if (Math.random() < 0.3) {
      audio.roar(0.2);
    }
    this.excite = Math.min(1, this.excite + 0.08 * strength);
  }

  knockDown(D, instant) {
    this.mode = "down";
    this.down = D.tag;
    D.f.setBase("down");
    if (instant) return;
    D.hurt(D.dmg + 0.12);
    this.bloodSpray(D, this.other(D), 2.2);
    D.f.stopActions();
    this.slowUntil = this.real + 0.8;
    audio.sfx("ko");
    audio.roar(1);
    this.excite = 1;
    this.cam.shake = 0.15;
  }

  goGround(topTag, instant, pos) {
    const top = this.side(topTag);
    const bot = this.other(top);
    if (this.mode !== "ground") {
      this.G.copy(bot.pos);
      if (this.G.length() > R * 0.55) this.G.setLength(R * 0.55);
      this.gDir.copy(top.pos).sub(bot.pos).setY(0);
      if (this.gDir.lengthSq() < 1e-4) this.gDir.set(1, 0, 0);
      this.gDir.normalize();
    } else if (this.top !== topTag) {
      this.gDir.negate();
    }
    this.mode = "ground";
    this.top = topTag;
    this.down = null;
    if (!instant) {
      top.f.stopActions();
      bot.f.stopActions();
    }
    this.setGroundPos(pos || "guard", instant);
  }

  /** Move both fighters into a ground position (see GROUND_POSES). */
  setGroundPos(pos, instant) {
    if (!GROUND_POSES[pos]) pos = "guard";
    this.gpos = pos;
    this.holding = false;
    const top = this.side(this.top), bot = this.other(top);
    const [tb, bb] = GROUND_POSES[pos];
    top.f.setBase(tb);
    bot.f.setBase(bb);
  }

  standUp(instant, act) {
    const wasGround = this.mode === "ground";
    const bottomTag = wasGround && this.top ? this.other(this.side(this.top)).tag : this.down;
    this.mode = "stand";
    this.top = this.down = null;
    this.gpos = null;
    this.holding = false;
    this.C.copy(this.P.pos).add(this.O.pos).multiplyScalar(0.5).setY(0);
    this.theta = Math.atan2(this.O.pos.z - this.P.pos.z, this.O.pos.x - this.P.pos.x);
    for (const s of [this.P, this.O]) {
      if (s.tag === bottomTag) act(s, SEQUENCES.getUp, "stance");
      else {
        s.f.setBase("stance");
        if (!instant) s.f.stopActions();
      }
    }
  }

  finish(e, f, instant, act) {
    const W = f.winner === "player" ? this.P : f.winner === "opponent" ? this.O : null;
    const L = W ? this.other(W) : null;
    const type = f.methodType;
    const result = f.winner === "player" ? "W" : f.winner === "opponent" ? "L" : "D";
    const doctor = /doctor/i.test(this.lastInfo || "");
    if (!instant && !this.replayMode) {
      audio.music(null);
      audio.roar(1);
      this.excite = 1;
      setTimeout(() => audio.sting(result), 900);
    }

    if (type === "DEC" || !W) {
      // everyone meets in the middle for the decision
      const go = () => {
        this.mode = "ended";
        this.decision = { W, L };
        for (const s of [this.P, this.O]) s.f.setBase(W ? (s === W ? "victory" : "dejected") : "relaxed");
        // a draw leaves the belt with the champion
        const keeper = W || (f.belt && this.side(f.belt.champ));
        if (f.belt && keeper) keeper.f.setBelt("waist");
        if (W) { this.ref.f.setBase("refRaise"); if (!instant) this.celebrate(W, f); }
      };
      if (instant) go();
      else {
        if (!this.replayMode) {
          audio.sfx("bell3");
          audio.say(resultCall(f, W ? W.tag : null));
          if (W) audio.say(interviewCall(f, W.tag), true);
        }
        this.later(1.2, go);
      }
      return 4200;
    }

    if (type === "SUB") {
      if (!instant && !this.replayMode) {
        const base = L.f.base;
        L.f.play(SEQUENCES.tap(base), base);
        audio.sfx("tap");
        audio.say([{ t: finishShout(f, W.tag, false), mood: "call", roar: 1 }]);
        audio.say(resultCall(f, W.tag), true);
        audio.say(interviewCall(f, W.tag), true);
        this.closeUp(L, 2.0, true);
      }
      this.later(1.3, () => {
        if (!instant) this.ref.f.play(SEQUENCES.waveOff, "ref");
        this.refIn = true;
      }, instant);
      this.later(2.0, () => this.endPoses(W, L, "sitting", instant, f), instant);
      return 4600;
    }

    // KO / TKO
    if (!doctor && this.down !== L.tag) {
      if (instant) this.knockDown(L, true);
      else this.later(0.15, () => this.knockDown(L, false));
    }
    if (!instant && !this.replayMode) {
      audio.say([{ t: finishShout(f, W.tag, doctor), mood: "call", roar: 1 }]);
      audio.say(resultCall(f, W.tag), true);
      audio.say(interviewCall(f, W.tag), true);
      if (!doctor) this.closeUp(L, 1.8);
      this.refIn = true;
    }
    this.later(1.6, () => this.endPoses(W, L, doctor ? "dejected" : "down", instant, f), instant);
    return 4400;
  }

  endPoses(W, L, loserBase, instant, f) {
    this.mode = "ended";
    this.decision = null;
    // the winner walks off toward the fence to celebrate; the loser stays where they fell
    const out = W.pos.clone().sub(L.pos).setY(0);
    if (out.lengthSq() < 1e-4) out.set(1, 0, 0);
    const spot = L.pos.clone().addScaledVector(out.normalize(), 2.2);
    if (spot.length() > R * 0.62) spot.setLength(R * 0.62);
    this.ended = { W, L, spot, lPos: L.pos.clone(), lYaw: L.yaw };
    L.f.setBase(loserBase);
    W.f.setBase("victory");
    if (!instant) this.celebrate(W, f);
    if (f && f.belt) {
      W.f.setBelt("waist");
    }
  }

  celebrate(winner, fight) {
    const style = winner === this.P ? fight?.walkout?.celebration : "triumph";
    const custom = (base, values) => { const p = Object.fromEntries(Object.entries(base).map(([k, v]) => [k, v.slice()])); for (const [k, v] of Object.entries(values)) p[k] = v; return p; };
    if (style === "bow") winner.f.play([[custom(POSES.relaxed, { spine: [0.65, 0, 0], neck: [-0.2, 0, 0] }), 1.4, 6], [POSES.victory, 1, 6]], "victory");
    else if (style === "dance") winner.f.play([[custom(POSES.victory, { hips: [0, 0.5, 0.12] }), 0.45, 8], [custom(POSES.victory, { hips: [0, -0.5, -0.12] }), 0.45, 8], [custom(POSES.victory, { hips: [0, 0.5, 0.12] }), 0.45, 8], [POSES.victory, 0.5, 8]], "victory");
    else winner.f.play(SEQUENCES.celebrate, "victory");
  }

  // ------------------------------------------------------------ positions

  layout(dt) {
    const P = this.P, O = this.O, ref = this.ref;
    const t = this.t;
    if (this.walkouts.active) { this.walkouts.update(dt); return; }
    for (const s of [P, O]) s.fixedYaw = null;
    switch (this.mode) {
      case "intro":
      case "stand": {
        if (this.mode === "stand") {
          this.theta += dt * 0.16;
          const drift = new THREE.Vector3(Math.sin(t * 0.11) * 1.0, 0, Math.cos(t * 0.083) * 0.8);
          this.C.lerp(drift, damp(0.3, dt));
        }
        if (this.C.length() > R * 0.5) this.C.setLength(R * 0.5);
        const dir = new THREE.Vector3(Math.cos(this.theta), 0, Math.sin(this.theta));
        const gap = this.mode === "intro" ? 1.05 : this.standGap || 1.3;
        P.target.copy(this.C).addScaledVector(dir, -gap / 2);
        O.target.copy(this.C).addScaledVector(dir, gap / 2);
        ref.target.copy(this.C).addScaledVector(this.farSide(), this.refIn ? 0.6 : this.mode === "intro" ? 0.9 : 2.0);
        break;
      }
      case "ground": {
        const top = this.side(this.top), bot = this.other(top);
        const L = GROUND[this.gpos] || GROUND.guard;
        const left = new THREE.Vector3(this.gDir.z, 0, -this.gDir.x);
        bot.target.copy(this.G);
        top.target.copy(this.G).addScaledVector(this.gDir, L.a).addScaledVector(left, L.c);
        bot.fixedYaw = Math.atan2(this.gDir.x, this.gDir.z);
        top.fixedYaw = bot.fixedYaw + L.yaw;
        ref.target.copy(this.G).addScaledVector(this.farSide(), this.refIn ? 0.9 : 1.8).addScaledVector(this.gDir, 0.2);
        break;
      }
      case "down": {
        const dn = this.side(this.down), up = this.other(dn);
        dn.target.copy(dn.pos);
        const away = up.pos.clone().sub(dn.pos).setY(0);
        if (away.lengthSq() < 1e-4) away.set(1, 0, 0);
        away.normalize();
        up.target.copy(dn.pos).addScaledVector(away, 1.15);
        dn.fixedYaw = Math.atan2(away.x, away.z);
        ref.target.copy(dn.pos).addScaledVector(this.farSide(), this.refIn ? 0.8 : 1.6).addScaledVector(away, 0.5);
        break;
      }
      case "corners":
        P.target.copy(this.cornerSpot.p);
        O.target.copy(this.cornerSpot.o);
        P.fixedYaw = yawTo(P.target, new THREE.Vector3());
        O.fixedYaw = yawTo(O.target, new THREE.Vector3());
        ref.target.set(0, 0, 0).add(new THREE.Vector3(this.cornerSpot.p.z, 0, -this.cornerSpot.p.x).setLength(1.2));
        break;
      case "ended": {
        if (this.decision) {
          // ref in the middle, fighters either side, facing the same way
          const c = new THREE.Vector3(0, 0, 0);
          const camDir = new THREE.Vector3(Math.sin(this.cam.yaw), 0, Math.cos(this.cam.yaw));
          const right = new THREE.Vector3(camDir.z, 0, -camDir.x);
          const face = Math.atan2(camDir.x, camDir.z);
          ref.target.copy(c);
          const { W, L } = this.decision;
          // the referee raises his right arm, which is on the camera's left
          (W || P).target.copy(c).addScaledVector(right, -0.55);
          (L || O).target.copy(c).addScaledVector(right, 0.55);
          P.fixedYaw = O.fixedYaw = ref.fixedYaw = face;
        } else if (this.ended) {
          const { W, L, spot, lPos, lYaw } = this.ended;
          L.target.copy(lPos);
          L.fixedYaw = lYaw;
          W.target.copy(spot);
          W.fixedYaw = Math.atan2(this.camera.position.x - spot.x, this.camera.position.z - spot.z);
          ref.target.copy(lPos).addScaledVector(this.farSide(), 0.9);
        }
        break;
      }
    }
    if (this.mode !== "ended" || !this.decision) ref.fixedYaw = null;
  }

  /** Unit vector pointing away from the camera, so the referee never blocks the view. */
  farSide() {
    const v = new THREE.Vector3(-Math.sin(this.cam.yaw), 0, -Math.cos(this.cam.yaw));
    return v;
  }

  place(s, dt) {
    s.pos.lerp(s.target, damp(s.rate, dt));
    const face = s.fixedYaw ?? (s === this.ref ? yawTo(s.pos, this.focusPoint()) : yawTo(s.pos, this.other(s).pos));
    s.yaw = angleLerp(s.yaw, face, damp(8, dt));
    if (this.t > s.lungeUntil) s.lungeTarget = 0;
    s.lunge += (s.lungeTarget - s.lunge) * damp(14, dt);
    const r = s.f.root;
    r.position.set(s.pos.x + Math.sin(s.yaw) * s.lunge, 0, s.pos.z + Math.cos(s.yaw) * s.lunge);
    r.rotation.y = s.yaw;
    if (s.ring) s.ring.position.set(r.position.x, 0.012, r.position.z);
  }

  focusPoint() {
    return this.P.pos.clone().add(this.O.pos).multiplyScalar(0.5);
  }

  // ------------------------------------------------------------ effects & camera

  spark(p, strength) {
    const n = strength > 1.2 ? 6 : 2;
    for (let i = 0; i < n; i++) {
      const sp = this.sparks.find((x) => x.t >= x.dur);
      if (!sp) return;
      sp.t = 0;
      sp.dur = i === 0 ? 0.18 : 0.45;
      sp.size = i === 0 ? 0.35 + strength * 0.2 : 0.06;
      sp.s.position.copy(p);
      sp.v.set((Math.random() - 0.5) * 2.5, Math.random() * 2, (Math.random() - 0.5) * 2.5);
      if (i === 0) sp.v.set(0, 0, 0);
      sp.s.visible = true;
    }
  }

  closeUp(s, seconds, low = false) {
    if (!s) return;
    this.cam.close = { s, until: this.real + seconds, low, fresh: true };
  }

  snapCamera() {
    this.updateCamera(0, true);
  }

  updateCamera(dt, snap = false) {
    const c = this.cam;
    const P = this.P.pos, O = this.O.pos;
    const axis = O.clone().sub(P);
    let perp = Math.atan2(axis.x, axis.z) + Math.PI / 2;
    if (Math.abs(angleLerp(c.yaw, perp, 1) - c.yaw) > Math.PI / 2) perp += Math.PI;
    let focus, dist, h, yaw = perp + Math.sin(this.real * 0.07) * 0.5 + this.userYaw;
    let rate = 1.4;
    if (c.close && this.real > c.close.until) {
      c.close = null;
      snap = true;
    }
    if (c.close) {
      const head = c.close.s.f.worldPoint(c.close.low ? "chest" : "head");
      focus = head;
      dist = c.close.low ? 2.6 : 2.3;
      h = c.close.low ? 0.9 : 0.25;
      yaw = perp + 0.65 + this.userYaw;
      if (c.close.fresh) {
        c.close.fresh = false;
        snap = true;
      }
      rate = 3;
    } else {
      focus = P.clone().add(O).multiplyScalar(0.5);
      const m = this.mode;
      if (m === "ended" && this.ended) focus = this.ended.W.pos.clone().lerp(this.ended.L.pos, 0.35);
      if (m === "ended" && this.decision) focus = new THREE.Vector3();
      focus.y = m === "ground" || m === "down" ? 0.55 : 1.05;
      dist = { stand: 4.7, intro: 3.9, ground: 3.9, down: 4.1, corners: 6.4, ended: 4.4 }[m] || 4.7;
      h = { corners: 4.4, ground: 1.1, down: 1.0 }[m] ?? 0.7;
      if (m === "corners") {
        focus.set(0, 0.9, 0);
        // on a narrow (portrait) screen look down the line from behind your corner instead of side-on
        if (this.camera.aspect < 1.1) {
          yaw = Math.atan2(this.cornerSpot.p.x, this.cornerSpot.p.z) + 0.15 + this.userYaw;
          dist = 8;
          h = 5.5;
        }
      }
    }
    if (this.walkouts.active) {
      focus = this.walkouts.side.pos.clone(); focus.y = 1.05;
      dist = 3.6; h = 0.65; yaw = Math.PI / 2; rate = 8;
    }
    if (this.presenter.root.visible && (this.mode === "intro" || this.mode === "corners")) {
      focus = this.presenter.root.position.clone(); focus.y = 1.2;
      dist = 4.5; h = 0.65; rate = 2;
    }
    const k = snap ? 1 : damp(rate, dt);
    c.yaw = angleLerp(c.yaw, yaw, k);
    c.dist += (dist - c.dist) * k;
    c.h += (h - c.h) * k;
    c.focus.lerp(focus, snap ? 1 : damp(rate * 1.5, dt));
    const cam = this.camera;
    const baseFov = this.presenter.root.visible ? 50 : 42;
    const portraitScale = Math.max(1, 0.95 / cam.aspect);
    const fov = Math.min(85, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(baseFov / 2)) * portraitScale)));
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    cam.position.set(c.focus.x + Math.sin(c.yaw) * c.dist, c.focus.y + c.h, c.focus.z + Math.cos(c.yaw) * c.dist);
    // stay inside the cage (except for the wide between-rounds shot) and hide the fence panel right in front of the lens
    const flat = Math.hypot(cam.position.x, cam.position.z);
    const lim = this.walkouts.active ? R + 12 : this.mode === "corners" && !c.close && !this.presenter.root.visible ? R + 4 : R - 0.45;
    if (flat > lim) {
      cam.position.x *= lim / flat;
      cam.position.z *= lim / flat;
      cam.position.y += (flat - lim) * 0.35;
    }
    for (let i = 0; i < this.panels.length; i++) {
      const p = this.panels[i];
      const front = p.position.x * cam.position.x + p.position.z * cam.position.z > 0.35 * Math.hypot(p.position.x, p.position.z) * Math.hypot(cam.position.x, cam.position.z);
      const gate = this.walkouts.active && p.position.x < -R * 0.75;
      p.visible = !gate && !((this.presenter.root.visible || this.walkouts.active) && front) && (p.position.distanceTo(cam.position) > 1.6 || flat < R - 1.6);
      this.cage.rails[i].visible = !gate && !((this.presenter.root.visible || this.walkouts.active) && front);
    }
    if (c.shake > 0.001) {
      cam.position.x += (Math.random() - 0.5) * c.shake;
      cam.position.y += (Math.random() - 0.5) * c.shake;
      c.shake *= Math.exp(-dt * 6);
    }
    cam.lookAt(c.focus);
  }

  update(dt) {
    if (!this.P) return;
    this.real += dt;
    const slow = this.real < this.slowUntil ? 0.3 : 1;
    const sdt = dt * slow * this.speed;
    this.t += sdt;
    const due = this.timers.filter((x) => x.at <= this.t);
    this.timers = this.timers.filter((x) => x.at > this.t);
    due.forEach((x) => x.fn());

    this.layout(sdt);
    for (const s of [this.P, this.O, this.ref]) {
      s.rate = this.walkouts.active ? 40 : this.mode === "ground" ? 7 : 4;
      this.place(s, sdt);
      s.f.update(sdt);
    }
    this.excite += (0.25 - this.excite) * damp(0.35, dt);
    this.crowd.update(this.real, this.excite);
    if (this.presenter.root.visible) {
      const a = this.real * 0.14;
      this.presenter.root.position.set(Math.sin(a) * 1.7, 0, Math.cos(a) * 1.7);
      this.presenter.root.rotation.y = Math.atan2(this.camera.position.x - this.presenter.root.position.x, this.camera.position.z - this.presenter.root.position.z);
      this.presenter.update(dt);
    }
    for (const d of this.drops) {
      if (!d.live) continue;
      d.v.y -= 9.8 * sdt;
      d.m.position.addScaledVector(d.v, sdt);
      if (d.m.position.y <= 0.02) {
        d.live = false;
        d.m.visible = false;
        if (Math.hypot(d.m.position.x, d.m.position.z) < R - 0.3) this.stain(d.m.position.x, d.m.position.z, 0.03 + Math.random() * 0.07);
      }
    }
    for (const sp of this.sparks) {
      if (sp.t >= sp.dur) continue;
      sp.t += sdt;
      const k = Math.min(1, sp.t / sp.dur);
      sp.s.position.addScaledVector(sp.v, sdt);
      sp.v.y -= 6 * sdt;
      sp.s.scale.setScalar(sp.size * (sp.size > 0.1 ? 0.4 + k : 1));
      sp.s.material.opacity = 1 - k;
      if (k >= 1) sp.s.visible = false;
    }
    this.updateCamera(dt);
  }
}
