import { createStage } from "./arena3d.js";
import * as audio from "./audio.js";
import { LOOK_OPTIONS, SHORTS_NAMES, TATTOO_REGIONS, lookString, parseLook, randomLook } from "./fighter3d.js";
import { Game, GameError } from "./engine.js";
import { openStore, onSaveError } from "./store.js";
import { introCall } from "./announcer.js";
import { startTour } from "./tutorial.js";

const STAT_LABELS = {
  striking: "Striking", power: "Power", speed: "Speed", wrestling: "Wrestling",
  grappling: "Grappling", cardio: "Cardio", chin: "Chin",
};
const PLANS = [
  { id: "BALANCED", name: "Balanced", desc: "Mix strikes and takedowns" },
  { id: "STRIKE", name: "Strike", desc: "Keep it standing, throw volume" },
  { id: "WRESTLE", name: "Wrestle", desc: "Takedowns and top control" },
  { id: "SUBMIT", name: "Hunt Subs", desc: "Drag it down, chase the tap" },
  { id: "COUNTER", name: "Counter", desc: "Patient, saves energy" },
  { id: "ALLOUT", name: "All Out", desc: "Swing big, burns the tank" },
];

const $ = (id) => document.getElementById(id);
let state = null;
let busy = false;

// fight playback
let fightShown = 0;      // events already on screen
let playing = false;
let skipPlayback = false;
let touchGloves = true; // the choice before round one
let headSnapshot = null; // fight json shown in the header while a round plays out
let modal = null;        // { kind: "saves" | "market" | "talk" | "talkResult" | "division" | "hof", target?, code? }
const PLAN_NAMES = Object.fromEntries(PLANS.map((p) => [p.id, p.name]));

// 3D stage (null when the device has no WebGL: the game still works from the text log)
let stage = null;
try {
  stage = createStage();
} catch (e) {
  console.warn("3D disabled:", e);
}
let createLook = randomLook();
let speed = 1;
try { speed = Number(localStorage.getItem("cc3d_speed")) || 1; } catch { /* ignore */ }
if (stage) stage.arena.setSpeed(speed);
// what the announcer says shows as a subtitle over the cage
audio.onSay((text, mood) => {
  const el = $("announcerLine");
  if (!el) return;
  $("skipTalk").classList.toggle("hidden", !text);
  if (!text) {
    el.className = "announcer-line";
    return;
  }
  el.textContent = (mood === "call" ? "🎙 " : "🎤 ") + text;
  el.className = "announcer-line show " + (mood || "");
});
if (stage) {
  stage.world.onNear = () => renderWorldBottom();
  stage.world.onEnter = (id) => openModal("place", { place: id });
}

// ------------------------------------------------------------------ helpers

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function money(n) {
  const v = Math.round(n);
  return (v < 0 ? "-$" : "$") + Math.abs(v).toLocaleString();
}
function rankLabel(r) {
  if (r > 0 && state && state.belt && state.belt.interimIsMe) return "Interim champion";
  return r === 0 ? "Champion" : r > 0 ? "#" + r : "Unranked";
}
function bar(value, color, cls = "") {
  const v = Math.max(0, Math.min(100, value));
  return `<div class="bar ${cls}"><i style="width:${v}%;${color ? "background:" + color : ""}"></i></div>`;
}
function statColor(v) {
  if (v >= 80) return "var(--gold)";
  if (v >= 65) return "var(--green)";
  if (v >= 45) return "var(--blue)";
  return "#6b7385";
}
function healthColor(v) {
  return v > 60 ? "var(--green)" : v > 30 ? "var(--orange)" : "var(--red)";
}

let toastTimer;
function toast(msg, err = false) {
  const t = $("toast");
  t.textContent = msg;
  t.className = "toast show" + (err ? " err" : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.className = "toast"), 2600);
}

let game = null; // the in-browser game engine, ready once saves have loaded

async function api(path, params = {}) {
  if (busy || !game) return null;
  busy = true;
  try {
    const data = game.call(path, params);
    state = data;
    if (data.message) toast(data.message);
    return data;
  } catch (e) {
    if (e instanceof GameError) toast(e.message, true);
    else {
      console.error(e);
      toast("Something went wrong. Your last save is safe.", true);
    }
    return null;
  } finally {
    busy = false;
  }
}

/** In-page yes/no question (browser confirm() dialogs are blocked inside claude.ai). */
function ask(text, yes) {
  return new Promise((resolve) => {
    const box = $("askBox");
    $("askText").textContent = text;
    $("askYes").textContent = yes;
    box.classList.remove("hidden");
    const done = (v) => {
      box.classList.add("hidden");
      $("askYes").onclick = $("askNo").onclick = null;
      resolve(v);
    };
    $("askYes").onclick = () => done(true);
    $("askNo").onclick = () => done(false);
  });
}

async function act(path, params) {
  if (await api(path, params)) render();
}

// ------------------------------------------------------------------ save codes and files
// A save code is "CC3D1." + base64url(gzip(packed save)), short enough to paste into a chat.
// A save file is the packed save itself (JSON). Import accepts either.

const CODE_PREFIX = "CC3D1.";

async function gzip(bytes, decompress) {
  const stream = new Blob([bytes]).stream().pipeThrough(decompress ? new DecompressionStream("gzip") : new CompressionStream("gzip"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function saveToCode(text) {
  const bytes = await gzip(new TextEncoder().encode(text));
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return CODE_PREFIX + btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function codeToSave(input) {
  const t = String(input || "").trim();
  if (t.startsWith("{")) return t;
  const at = t.indexOf(CODE_PREFIX);
  if (at < 0) throw new Error("not a save code");
  const b64 = t.slice(at + CODE_PREFIX.length).replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
  const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
  return new TextDecoder().decode(await gzip(bytes, true));
}

async function importSave(input) {
  let text;
  try {
    text = await codeToSave(input);
  } catch {
    toast("That save code or file isn't a Cage Career 3D career.", true);
    return;
  }
  if (await api("save/import", { text })) { modal = null; resetFightScreen(); render(); }
}

/** Offers a file to save: through claude.ai's download prompt there, a plain download link elsewhere. */
async function offerFile(filename, text) {
  let downloads = null;
  try {
    if (window.claude && typeof window.claude.use === "function") downloads = await window.claude.use("downloads");
  } catch { /* not available */ }
  if (downloads) {
    try {
      await downloads.save({ filename, data: text });
    } catch (e) {
      if (e && e.code !== "declined") toast("Couldn't save the file here. Copy the save code instead.", true);
    }
    return;
  }
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Save code copied.");
  } catch {
    const box = $("exportCode");
    if (box) { box.focus(); box.select(); }
    toast("Select the code and copy it.");
  }
}

// ------------------------------------------------------------------ rendering

function render() {
  if (!state) return;
  $("lifeBtn").classList.toggle("hidden", !state.exists);
  // the first time a career screen shows, offer the tour
  if (state.exists && !state.fight && !modal && !worldOpen()) setTimeout(() => startTour("career"), 900);
  if (!state.exists) {
    $("create").classList.remove("hidden");
    $("dash").classList.add("hidden");
    $("topstats").innerHTML = "";
    $("fightScreen").classList.add("hidden");
    $("createSaves").innerHTML = `<p class="btn-row">${state.saves.length
      ? `<button class="btn small" data-saves>← Back to your ${state.saves.length} saved fighter${state.saves.length === 1 ? "" : "s"}</button>` : ""}
      <button class="btn small" data-importopen>📂 Load a saved career</button></p>`;
    fillCreateForm();
    renderLookPickers();
    renderModal();
    render3d();
    return;
  }
  $("create").classList.add("hidden");
  $("dash").classList.remove("hidden");
  renderTop();
  $("goal").textContent = state.goal;
  renderFighter();
  renderFightCard();
  renderActions();
  renderRival();
  renderTeam();
  renderSponsors();
  renderPromotions();
  renderStatus();
  renderRankings();
  renderHistory();
  renderNews();
  renderFightScreen();
  renderModal();
  renderWorld();
  render3d();
}

/** Puts the shared 3D canvas where it is needed and picks the music. */
function render3d() {
  syncSoundButtons();
  const fightOpen = !$("fightScreen").classList.contains("hidden");
  if (stage) {
    if (modal && modal.kind === "edit" && $("editStage")) {
      // the fighter editor keeps the 3D preview while it's open
      const e = modal.draft;
      stage.show($("editStage"), "preview");
      stage.preview.setFighters([{ look: lookString(e.look), weightClass: state.weightClassIndex, style: e.style, female: state.gender === "F", name: state.fighter.name, ink: e.nickname || state.fighter.name.split(" ").pop() }]);
    } else if (fightOpen) stage.show($("arenaStage"), "arena");
    else if (worldOpen() && state.exists) {
      stage.show($("worldStage"), "world");
      stage.world.setLife({ look: state.fighter.look, weightClass: state.weightClassIndex, style: state.fighter.style, life: state.life,
        ink: state.fighter.nickname || state.fighter.name.split(" ").pop(),
        seed: state.fighter.name,
        female: state.gender === "F",
        carCatalog: state.life.catalog.cars, injured: state.injuryWeeks > 0 });
    }
    else if (!state.exists) {
      stage.show($("createStage"), "preview");
      updateCreatePreview();
    } else {
      stage.show($("dashStage"), "preview");
      stage.preview.setFighters(showcaseFighters());
    }
  }
  if (state.exists) renderShowcaseCaption();
  updateMusic();
}

function updateMusic() {
  const f = state && state.fight;
  const fightOpen = f && !$("fightScreen").classList.contains("hidden");
  if (!fightOpen) {
    audio.crowdOn(false);
    audio.music("camp");
    return;
  }
  audio.crowdOn(true);
  if (f.finished && !playing) return audio.music(null);
  if (f.finished) return; // the arena stops the music on the finishing event
  const finalRound = f.round + (playing ? 0 : 1) === f.rounds && f.rounds > 1;
  audio.music("fight", playing ? (finalRound ? 1.2 : 1) : f.round === 0 ? 0.6 : 0.35);
}

function syncSoundButtons() {
  document.querySelectorAll("[data-sound]").forEach((b) => {
    b.textContent = audio.isOn() ? "🔊" : "🔇";
    b.title = audio.isOn() ? "Sound on" : "Sound off";
  });
  $("speedBtn").textContent = speed + "×";
}

function showcaseFighters() {
  const s = state;
  const champ = s.rank === 0 || (s.belt && (s.belt.interimIsMe || s.belt.held.length > 0));
  const me = { look: s.fighter.look, name: s.fighter.name, weightClass: s.weightClassIndex, style: s.fighter.style, female: s.gender === "F", belt: champ && !s.retired ? "waist" : null, injured: s.injuryWeeks > 0,
    ink: s.fighter.nickname || s.fighter.name.split(" ").pop() };
  const o = s.scheduled && !s.retired ? s.scheduled : null;
  const opp = o ? o.opponent : null;
  return opp ? [me, { look: opp.look, name: opp.name, weightClass: s.weightClassIndex, style: opp.style, female: opp.gender === "F", belt: o.oppRank === 0 ? "shoulder" : null }] : [me];
}

function renderShowcaseCaption() {
  const s = state;
  const opp = s.scheduled && !s.retired ? s.scheduled.opponent : null;
  $("showcaseCap").innerHTML = opp
    ? `<span class="red">${esc(s.fighter.displayName)}</span><span class="vs">VS</span><span class="blue">${esc(opp.displayName)}</span>`
    : `<span class="red">${esc(s.fighter.displayName)}</span><span class="muted">${esc(s.fighter.style)} · ${esc(s.weightClass)} · drag to spin</span>`;
}

// ------------------------------------------------------------------ fighter look (create screen)

/** The look options as rows of chips and swatches; attr is the data attribute the buttons carry. */
function lookRows(look, attr, section = "all") {
  const row = (key, label, kind) => `
    <div class="look-row"><span>${label}</span><div class="chips">
      ${LOOK_OPTIONS[key].map((v, i) => kind === "swatch"
        ? `<button type="button" class="swatch ${look[key] === i ? "on" : ""}" style="background:${v}" data-${attr}="${key}:${i}" title="${key === "shorts" ? SHORTS_NAMES[i] : ""}" aria-label="${label} ${i + 1}"></button>`
        : `<button type="button" class="btn chip ${look[key] === i ? "on" : ""}" data-${attr}="${key}:${i}">${esc(v)}</button>`).join("")}
    </div></div>`;
  const parts = {
    face: () => row("skin", "Skin tone", "swatch") + row("face", "Face", "chip") + row("hair", "Hair", "chip") + row("hairColor", "Hair color", "swatch") + row("beard", "Facial hair", "chip"),
    body: () => row("body", "Body type", "chip") + row("abs", "Abs", "chip") + row("shorts", "Fight shorts", "swatch"),
    gear: () => row("headband", "Headband", "chip") + row("wraps", "Feet", "chip") + row("knees", "Knees", "chip"),
    ink: () => TATTOO_REGIONS.map((r) => row(r.key, r.name, "chip")).join(""),
  };
  if (section !== "all") return parts[section]();
  return parts.face() + parts.body()
    + `<div class="label" style="margin-top:8px">Accessories</div>` + parts.gear()
    + `<div class="label" style="margin-top:8px">Tattoos</div>` + parts.ink();
}

function renderLookPickers() {
  $("lookPickers").innerHTML = lookRows(createLook, "look");
  $("lookInput").value = lookString(createLook);
}

function updateCreatePreview() {
  if (!stage) return;
  const form = $("createForm");
  const style = (form.querySelector("input[name=style]:checked") || {}).value || "Striker";
  stage.preview.setFighters([{ look: lookString(createLook), weightClass: Number($("wcSelect").value || 3), style, female: $("genderSelect").value === "F" }]);
}

/** The weight classes for the chosen division (men's or women's). */
function fillWeightClasses() {
  const female = $("genderSelect").value === "F";
  const list = female ? state.womenClasses : state.weightClasses;
  $("wcSelect").innerHTML = list.map((w, i) => `<option value="${i}" ${i === (female ? 1 : 3) ? "selected" : ""}>${esc(w)}${female ? " (women's)" : ""}</option>`).join("");
}

function fillCreateForm() {
  const wc = $("wcSelect");
  if (wc.options.length) return;
  fillWeightClasses();
  $("countrySelect").innerHTML = state.countries.map((c) => `<option>${esc(c)}</option>`).join("");
}

function renderTop() {
  const s = state;
  $("topstats").innerHTML = `
    <span>Year <b>${s.year}</b> · Week <b>${s.week}</b></span>
    <span>Age <b>${s.fighter.age}</b></span>
    <span class="${s.money < 0 ? "neg" : ""}">Cash <b>${money(s.money)}</b></span>
    <span>Fame <b>${s.fame}</b></span>`;
}

function renderFighter() {
  const f = state.fighter;
  const s = state;
  const badges = [];
  const belts = s.belt ? (s.rank === 0 ? 1 : 0) + s.belt.held.length : 0;
  if (belts > 1) badges.push(`<span class="badge gold">🏆 ${["", "", "CHAMP-CHAMP", "TRIPLE CHAMP", "QUADRUPLE CHAMP"][belts] || belts + "-BELT CHAMP"}</span>`);
  if (s.rank === 0) badges.push(`<span class="badge gold">🏆 ${esc(s.orgShort)} ${esc(s.weightClass).toUpperCase()} CHAMPION</span>`);
  else if (s.belt && s.belt.interimIsMe) badges.push(`<span class="badge gold">INTERIM CHAMPION</span>`);
  else if (s.rank > 0) badges.push(`<span class="badge red">${esc(s.orgShort)} #${s.rank}</span>`);
  if (s.belt) for (const d of s.belt.held) badges.push(`<span class="badge gold">🏆 ${esc(d)} champion</span>`);
  badges.push(`<span class="badge">${esc(s.org)}</span>`);
  if (f.streak >= 2) badges.push(`<span class="badge green">${f.streak}-fight win streak</span>`);
  if (f.streak <= -2) badges.push(`<span class="badge red">${-f.streak}-fight skid</span>`);
  if (s.injuryWeeks > 0) badges.push(`<span class="badge red">Injured ${s.injuryWeeks}w</span>`);
  if (s.titlesWon) badges.push(`<span class="badge gold">${s.titlesWon}× champ</span>`);

  $("fighterCard").innerHTML = `
    ${s.retired ? "" : `<button class="btn ghost small edit-btn" data-editfighter title="Edit your fighter">✏️ Edit</button>`}
    <div class="fighter-top">
      <div>
        <div class="fighter-name">${esc(f.displayName)}</div>
        <div class="fighter-meta">${esc(f.style)} · ${esc(s.weightClass)} · ${esc(f.country)} · Age ${f.age}</div>
      </div>
      <div class="ovr"><b>${f.overall}</b><span>OVR</span></div>
    </div>
    <div class="record">${f.record} <small>${f.koWins} KO · ${f.subWins} SUB · ${f.decWins} DEC</small></div>
    <div class="badges">${badges.join("")}</div>
    ${Object.entries(f.stats).map(([k, v]) => `
      <div class="stat"><span>${STAT_LABELS[k]}</span>${bar(v, statColor(v))}<b>${Math.floor(v)}</b></div>`).join("")}`;
}

function difficulty(opp) {
  const d = opp.overall - state.fighter.overall;
  if (d <= -4) return `<span class="diff easy">Favorite</span>`;
  if (d >= 4) return `<span class="diff hard">Underdog</span>`;
  return `<span class="diff even">Even</span>`;
}

function offerHtml(o, withButton) {
  const opp = o.opponent;
  const kinds = {
    interim: "🏆 INTERIM TITLE FIGHT · 5 rounds", unify: "🏆 TITLE UNIFICATION · 5 rounds", title: "🏆 TITLE FIGHT · 5 rounds",
    eliminator: "🎯 TITLE ELIMINATOR · winner gets the next shot", main: "★ MAIN EVENT · 5 rounds",
  };
  const tag = (o.grudge ? "⚔ GRUDGE MATCH · " : "") + (o.title ? kinds[o.kind] || kinds.title : kinds[o.kind] || (o.contender ? "⭐ CONTENDER SERIES" : `${o.rounds} rounds`));
  const isInterim = state.belt && state.belt.interim && !state.belt.interimIsMe && o.opponent.displayName === state.belt.interim;
  const rank = o.oppRank === 0 ? "Champion" : isInterim ? "Interim champion" : o.oppRank > 0 ? `#${o.oppRank}` : "";
  return `
    <div class="offer ${o.title ? "title" : ""} ${o.contender || o.grudge ? "contender" : ""}">
      <div class="offer-top">
        <div>
          <div class="offer-meta">${tag}${rank ? " · " + rank : ""}</div>
          <div class="offer-name"><span class="flink" data-fighter="${o.oppId}">${esc(opp.displayName)}</span>${o.callout ? ` <span class="badge gold">📣 your callout</span>` : ""}</div>
          <div class="offer-meta">${opp.record} · ${esc(opp.style)} · ${esc(opp.country)} · Age ${opp.age} · OVR <b>${opp.overall}</b></div>
        </div>
        ${difficulty(opp)}
      </div>
      <div class="offer-money">Purse <b>${money(o.purse)}</b> + <b>${money(o.winBonus)}</b> to win · in ${o.weeks} week${o.weeks === 1 ? "" : "s"}</div>
      ${withButton ? `<button class="btn ${o.title ? "gold" : "primary"} small" data-accept="${o.index}">Accept fight</button>` : ""}
    </div>`;
}

function taleOfTape(opp) {
  const me = state.fighter;
  return Object.keys(STAT_LABELS).map((k) => {
    const a = Math.floor(me.stats[k]), b = Math.floor(opp.stats[k]);
    return `<div class="stat" style="grid-template-columns:34px 1fr 34px">
      <b style="text-align:left;color:${a >= b ? "var(--text)" : "var(--muted)"}">${a}</b>
      <span style="text-align:center;font-size:12px;color:var(--muted)">${STAT_LABELS[k]}</span>
      <b style="color:${b >= a ? "var(--text)" : "var(--muted)"}">${b}</b></div>`;
  }).join("");
}

function renderFightCard() {
  const s = state;
  const el = $("fightCard");
  if (s.retired) {
    el.innerHTML = `
      <h2>Career over</h2>
      <div class="fight-night">
        <h3>${esc(s.legacy)}</h3>
        <p>${esc(s.fighter.displayName)} retired at ${s.fighter.age} with a record of <b>${s.fighter.record}</b>.</p>
        <p class="muted">${s.titlesWon} title${s.titlesWon === 1 ? "" : "s"} won · ${s.titleDefenses} defenses · ${money(s.earnings)} career earnings · legacy score ${s.legacyScore}</p>
      </div>
      <div class="btn-row"><button class="btn primary big" data-newsave>Start a new career</button><button class="btn big" data-saves>💾 Saves</button></div>`;
    return;
  }
  if (s.fightNight) {
    const o = s.scheduled;
    el.innerHTML = `
      <h2>Next fight</h2>
      <div class="fight-night">
        <h3>FIGHT NIGHT</h3>
        <p>${o.title ? (o.kind === "interim" ? `🏆 For the interim ${esc(state.orgShort)} title — ` : o.kind === "unify" ? `🏆 To unify the ${esc(state.orgShort)} belts — ` : `🏆 For the ${esc(state.orgShort)} title — `) : o.kind === "eliminator" ? "🎯 Title eliminator — " : o.kind === "main" ? "★ Main event — " : ""}vs <b>${esc(o.opponent.displayName)}</b></p>
      </div>
      <button class="btn primary big" data-startfight>Walk out to the cage</button>`;
    return;
  }
  if (s.scheduled) {
    const o = s.scheduled;
    el.innerHTML = `
      <h2>Fight camp</h2>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
        <div class="countdown">${o.weeks}</div>
        <div class="muted">week${o.weeks === 1 ? "" : "s"} until fight night.<br>Train hard — every session counts.</div>
      </div>
      ${offerHtml(o, false)}
      ${o.oppBonus > 0 ? `<p class="badge red" style="display:inline-block">Opponent fired up: +${o.oppBonus} to all stats</p>` : ""}
      <button class="btn small" data-talk="opponent" ${s.canTalk ? "" : "disabled"}>🎤 Talk to the press${s.canTalk ? "" : " (done this week)"}</button>
      <div class="label">Tale of the tape <span style="float:right">You · Them</span></div>
      ${taleOfTape(o.opponent)}`;
    return;
  }
  el.innerHTML = `
    <h2>Fight offers</h2>
    ${s.offers.length ? s.offers.map((o) => offerHtml(o, true)).join("") : `<p class="muted">No offers right now. Keep training — your manager is working the phones.</p>`}
    <p class="muted" style="font-size:12px;margin:6px 0 0">Offers refresh every few weeks.</p>`;
}

function renderActions() {
  const s = state;
  const locked = s.retired || s.fightNight || !!s.fight;
  const hurt = s.injuryWeeks > 0;
  $("actionsCard").innerHTML = `
    <h2>This week</h2>
    <div class="energy-row">
      <div class="lbl"><span>Energy</span><b>${s.energy}/100</b></div>
      ${bar(s.energy, s.energy > 50 ? "var(--green)" : s.energy > 25 ? "var(--orange)" : "var(--red)", "lg")}
    </div>
    ${hurt ? `<p class="badge red" style="display:inline-block">Injured: ${s.injuryWeeks} week(s) — no training or sparring</p>` : ""}
    <div class="label" style="margin-top:4px">Train <span class="muted">(−${s.trainCost} energy, ${s.gym.name} ×${s.gym.mult})</span></div>
    <div class="train-grid">
      ${Object.keys(STAT_LABELS).map((k) => `
        <button class="btn small" data-train="${k}" ${locked || hurt || s.energy < s.trainCost ? "disabled" : ""}>${STAT_LABELS[k]}</button>`).join("")}
    </div>
    <div class="act-grid">
      <button class="btn" data-action="spar" ${locked || hurt || s.energy < 30 ? "disabled" : ""}>Spar<span class="sub">Gains across the board · −30</span></button>
      <button class="btn" data-action="rest" ${locked ? "disabled" : ""}>Rest<span class="sub">Recover energy · +50</span></button>
      <button class="btn" data-action="media" ${locked || s.energy < 10 ? "disabled" : ""}>Media<span class="sub">Build fame · −10</span></button>
      <button class="btn" data-action="work" ${locked || s.energy < 15 ? "disabled" : ""}>${s.gfc ? "Seminar" : "Teach classes"}<span class="sub">Earn cash · −15</span></button>
    </div>
    <p class="muted" style="font-size:12px;margin:10px 0 0">Each action takes one week. Weekly costs: ${money(s.gym.fee + s.teamSalary)} (gym ${money(s.gym.fee)} + team ${money(s.teamSalary)}).</p>`;
}

function renderStatus() {
  const s = state;
  const g = s.gym;
  $("statusCard").innerHTML = `
    <h2>Career</h2>
    <div class="kv">
      <span>Promotion</span><b>${esc(s.org)}</b>
      <span>Ranking</span><b>${s.gfc ? rankLabel(s.rank) : "—"}</b>
      ${s.gfc ? "" : `<span>Regional wins (since tryout)</span><b>${s.regionalWins}</b>`}
      <span>Cash</span><b style="color:${s.money < 0 ? "var(--red)" : "var(--green)"}">${money(s.money)}</b>
      <span>Career earnings</span><b>${money(s.earnings)}</b>
      <span>Division</span><b>${esc(s.weightClass)}</b>
      <span>Title defenses</span><b>${s.titleDefenses}</b>
      ${s.divisionsWon.length ? `<span>Belts won</span><b>${s.divisionsWon.map(esc).join(", ")}</b>` : ""}
      <span>Peak overall</span><b>${s.peakOverall}</b>
      <span>Fame</span><b>${s.fame}/100</b>
    </div>
    ${bar(s.fame, "var(--gold)")}
    <div class="gym-box">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <div><b>${esc(g.name)}</b><div class="muted" style="font-size:12px">Training ×${g.mult} · ${money(g.fee)}/wk</div></div>
        ${g.nextName ? `<button class="btn small" data-upgrade ${s.money < g.nextCost || s.retired ? "disabled" : ""}>Move up<span class="sub">${esc(g.nextName)} · ${money(g.nextCost)}</span></button>` : `<span class="badge gold">Best gym</span>`}
      </div>
    </div>
    <div class="footer-btns">
      ${s.retired ? "" : `<button class="btn ghost small" data-division ${s.scheduled || s.fight ? "disabled" : ""}>Change division${s.divisionCooldown ? ` (${s.divisionCooldown}w)` : ""}</button>`}
      ${s.retired ? "" : `<button class="btn ghost small" data-retire>Retire</button>`}
      <button class="btn ghost small" data-saves>💾 Saves / new career</button>
    </div>`;
}

function renderRankings() {
  const s = state;
  const b = s.belt;
  const beltBox = b ? `
    <div class="belt-box">
      <div class="belt-title">🏆 ${esc(s.orgShort)} ${esc(b.division)} Championship</div>
      <div class="kv">
        <span>Champion</span><b>${esc(b.champion || "Vacant")}${s.rank === 0 ? " (you)" : ""}</b>
        ${b.interim ? `<span>Interim champion</span><b>${esc(b.interim)}${b.interimIsMe ? " (you)" : ""}</b>` : ""}
        ${b.champInjured ? `<span>Status</span><b style="color:var(--orange)">Champion injured · ${b.champInjured}w</b>` : ""}
        ${b.idle !== null ? `<span>Last title fight</span><b style="color:${b.idle >= b.stripWarn ? "var(--red)" : "var(--text)"}">${b.idle} weeks ago${b.idle >= b.stripWarn ? ` — stripped in ${b.stripWeeks - b.idle}w` : ""}</b>` : ""}
        ${b.held.map((d, i) => `<span>${esc(d)} belt</span><b style="color:${b.heldIdle[i] >= b.stripWarn ? "var(--red)" : "var(--gold)"}">Yours · stripped in ${b.stripWeeks - b.heldIdle[i]}w unless defended</b>`).join("")}
        ${b.nextInLine ? `<span>Title shot</span><b style="color:var(--gold)">You're next in line</b>` : ""}
      </div>
      ${b.lineage.length ? `<details><summary>Belt lineage</summary><ol class="lineage">${b.lineage.map((l) => `
        <li class="${l.player ? "me" : ""}"><b>${esc(l.name)}</b>${l.interim ? ` <span class="badge">interim</span>` : ""}
          <div class="muted">${esc(l.how)} · ${esc(l.date)}${l.defenses ? ` · ${l.defenses} defense${l.defenses === 1 ? "" : "s"}` : ""}</div></li>`).join("")}</ol></details>` : ""}
    </div>` : "";
  $("rankCard").innerHTML = `
    <h2>${esc(s.orgShort)} ${esc(s.weightClass)} rankings</h2>
    <div class="btn-row" style="margin:-4px 0 8px"><button class="btn small" data-alldivs>📊 All ${esc(s.orgShort)} divisions</button>
      <span class="muted" style="font-size:12px;align-self:center">Tap any fighter to meet them</span></div>
    ${s.gfc ? "" : `<p class="muted" style="font-size:13px">You're not in a major promotion yet. These are the GFC fighters you're chasing.</p>`}
    ${beltBox}
    <ul class="ranks scroll">
      ${s.rankings.map((r) => `
        <li class="${r.player ? "me" : "tap"} ${r.rank === 0 || r.interim ? "champ" : ""} ${r.rival ? "rivalrow" : ""}" ${r.player ? "" : `data-fighter="${r.id}"`}>
          <span class="rk">${r.rank === 0 ? "C" : r.interim ? "IC" : r.rank}</span>
          <span>${esc(r.name)} <span class="muted">${r.record}</span></span>
          <span class="muted">${r.overall}</span>
        </li>`).join("")}
    </ul>`;
}

function relBadge(v) {
  if (v >= 40) return ` <span class="badge" style="color:var(--green)">friend</span>`;
  if (v <= -40) return ` <span class="badge red">bad blood</span>`;
  return "";
}

function renderHistory() {
  const h = state.history;
  $("historyCard").innerHTML = `
    <h2>Fight record</h2>
    ${h.length ? `<div class="scroll"><table class="hist">${h.map((x) => `
      <tr>
        <td><span class="res ${x.result}">${x.result}</span></td>
        <td>${esc(x.opponent)}<div class="muted" style="font-size:12px">${esc(x.event)} · ${esc(x.date)}</div></td>
        <td style="text-align:right">${esc(x.method)}<div class="muted" style="font-size:12px">R${x.round} ${esc(x.time)}</div></td>
      </tr>`).join("")}</table></div>` : `<p class="muted">No pro fights yet.</p>`}`;
}

function renderNews() {
  $("newsCard").innerHTML = `
    <h2>News</h2>
    <ul class="news scroll">${state.news.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>`;
}

function starsHtml(n) {
  return `<span class="stars">${"★".repeat(n)}<span class="off">${"★".repeat(5 - n)}</span></span>`;
}

function renderRival() {
  const s = state;
  const r = s.rival;
  const el = $("rivalCard");
  if (!r) {
    el.innerHTML = `
      <h2>Rival</h2>
      <p class="muted">No active rivalry. Someone will step up soon — or beat you and make it personal.</p>
      ${s.rivalries.length ? `<div class="label">Past rivalries</div><ul class="news">${s.rivalries.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}`;
    return;
  }
  const heatLabel = r.heat >= 75 ? "Boiling" : r.heat >= 40 ? "Heated" : r.heat >= 20 ? "Simmering" : "Cold";
  el.innerHTML = `
    <h2>⚔ Rival</h2>
    <div class="fighter-top">
      <div>
        <div class="fighter-name" style="font-size:17px">${esc(r.displayName)}</div>
        <div class="fighter-meta">${r.record} · ${esc(r.style)} · ${esc(r.country)} · Age ${r.age}${r.rank === 0 ? " · Champion" : r.rank > 0 ? " · #" + r.rank : ""}</div>
      </div>
      <div class="ovr"><b>${r.overall}</b><span>OVR</span></div>
    </div>
    <div class="h2h"><b>${r.h2hWins}-${r.h2hLosses}</b><span class="muted">head to head (first to lead by 2 settles it)</span></div>
    <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>Heat</span><b>${heatLabel} · ${r.heat}</b></div>
    <div class="heat"><i style="width:${r.heat}%"></i></div>
    <p class="muted" style="font-size:12px">At 60+ heat a grudge match (1.5× purse) shows up in your offers.</p>
    <div class="btn-row">
      <button class="btn small" data-talk="rival" ${s.canTalk && !s.retired ? "" : "disabled"}>🎤 Call them out${s.canTalk ? "" : " (done this week)"}</button>
      <button class="btn small ghost" data-fighter="${r.id}">👤 Profile</button>
    </div>`;
}

function renderPromotions() {
  const el = $("promoCard");
  if (!el || !state.promotions) return;
  const s = state, P = s.progress;
  const need = (n) => `<span style="color:${P.fame >= n.fame ? "var(--green)" : "var(--muted)"}">Fame ${P.fame}/${n.fame}</span> ·
    <span style="color:${P.wins >= n.wins ? "var(--green)" : "var(--muted)"}">Wins ${P.wins}/${n.wins}</span> ·
    <span style="color:${P.ovr >= n.ovr ? "var(--green)" : "var(--muted)"}">OVR ${P.ovr}/${n.ovr}</span>`;
  el.innerHTML = `
    <h2>🏢 Promotions</h2>
    <p class="muted" style="font-size:13px">Now fighting in <b style="color:var(--text)">${esc(s.orgName)}</b>${s.gfc ? ` · ${s.contractFights ? s.contractFights + " fight" + (s.contractFights === 1 ? "" : "s") + " left on your contract" : "free agent"}` : ""}.
      Promotions call once you've earned it.</p>
    ${s.promotions.slice().reverse().map((p) => {
      const offer = s.promoOffers.find((o) => o.org === p.id);
      return `<div class="offer ${p.current ? "title" : offer ? "contender" : ""}">
        <div class="offer-top"><div>
          <div class="offer-meta">${esc(p.short)} · ${esc(p.about)}</div>
          <div class="offer-name">${esc(p.name)}</div>
          <div class="offer-meta">${p.current ? "✅ Your promotion" : need(p.need)}</div>
        </div></div>
        ${offer ? `<div class="offer-money">Contract: ${offer.fights} fights · ${money(offer.bonus)} to sign · purses ×${offer.pay}</div>
          <button class="btn gold small" data-promo="${p.id}" ${s.scheduled ? "disabled" : ""}>${p.current ? "Re-sign" : "Sign contract"}</button>
          ${!p.current && s.gfc && s.contractFights ? `<span class="muted" style="font-size:12px"> · buying out your current deal costs ${money(Math.round(offer.bonus * 0.4))}</span>` : ""}` : ""}
      </div>`;
    }).join("")}`;
}

function renderSponsors() {
  const el = $("sponsorCard");
  if (!el) return;
  const L = state.life;
  if (!L) return (el.innerHTML = "");
  const deal = (d, mine) => `
    <div class="offer ${mine ? "title" : ""}">
      <div class="offer-top"><div>
        <div class="offer-meta">${esc(d.cat)}${mine ? ` · ${d.weeksLeft} week${d.weeksLeft === 1 ? "" : "s"} left` : ` · ${d.weeks} weeks`}</div>
        <div class="offer-name">${esc(d.name)}</div>
        <div class="offer-meta">${esc(d.clauseText)}</div>
      </div></div>
      <div class="offer-money">${money(d.weekly)}/week · ${money(d.winBonus)} per win${mine ? "" : ` · ${money(d.signing)} to sign`}</div>
      ${mine ? `<button class="btn ghost small" data-life="dropSponsor" data-id="${d.id}">End deal</button>`
        : `<button class="btn gold small" data-life="signSponsor" data-id="${d.id}" ${L.sponsors.length >= 4 ? "disabled" : ""}>Sign</button>`}
    </div>`;
  el.innerHTML = `
    <h2>🤝 Sponsors <span class="muted" style="font-weight:400">· marketability ${L.marketability}</span></h2>
    ${L.sponsors.length ? L.sponsors.map((d) => deal(d, true)).join("") : `<p class="muted">No sponsors yet. Win, build fame and grow your following and brands will call.</p>`}
    ${L.sponsorOffers.length ? `<div class="label">Offers <span class="muted">(new offers in ${L.sponsorRefresh}w)</span></div>` + L.sponsorOffers.map((d) => deal(d, false)).join("") : ""}`;
}

function renderTeam() {
  const s = state;
  const slots = Object.values(s.team);
  const filled = slots.filter((t) => t.name).length;
  $("teamCard").innerHTML = `
    <h2>Team · ${filled}/${slots.length}</h2>
    ${slots.map((t) => `
      <div class="staff-row">
        <div>
          <div class="role">${esc(t.title)}</div>
          ${t.name ? `<b>${esc(t.name)}</b> ${starsHtml(t.stars)}<div class="perk">${esc(t.perk)} · ${money(t.salary)}/wk</div>` : `<span class="muted">Vacant</span>`}
        </div>
        ${t.name && !s.retired ? `<button class="btn small ghost" data-fire="${t.role}">Release</button>` : ""}
      </div>`).join("")}
    <div class="btn-row"><button class="btn primary small" data-market ${s.retired ? "disabled" : ""}>Hire staff (${s.market.length} available)</button></div>`;
}

// ------------------------------------------------------------------ modals

function openModal(kind, extra = {}) {
  modal = { kind, ...extra };
  renderModal();
}

function closeModal() {
  modal = null;
  renderModal();
  if (state) render3d();
}

function renderModal() {
  const el = $("modal");
  if (!modal) {
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  const body = $("modalBody");
  const s = state;
  if (modal.kind === "saves") {
    const full = s.saves.length >= s.maxSaves;
    body.innerHTML = `
      <h1>💾 Saved fighters</h1>
      <p class="muted">Up to ${s.maxSaves} fighters. Every action saves automatically, so you can switch any time.
        ${s.storage === "account" ? "Saves are kept with your claude.ai account, so they're on every device you sign in on." : "Saves are kept in this browser on this device."}</p>
      ${s.saves.length ? s.saves.map((v) => `
        <div class="hof-entry ${v.active ? "active" : ""}">
          <div class="top">
            <div><b>${v.missing ? "Missing save" : esc(v.name)}</b>
              ${v.missing ? "" : `<div class="muted" style="font-size:12px">${esc(v.weightClass)} · ${esc(v.style)} · ${esc(v.record)} · ${v.overall} OVR · age ${v.age}</div>`}</div>
            <span>${v.active ? `<span class="badge red">PLAYING</span>` : ""}${v.retired ? ` <span class="badge gold">RETIRED</span>` : ""}</span>
          </div>
          <div class="btn-row">
            ${v.active || v.missing ? "" : `<button class="btn small primary" data-slot="${v.slot}">Play</button>`}
            ${v.missing ? "" : `<button class="btn small" data-export="${v.slot}">Export</button>`}
            <button class="btn small ghost" data-delslot="${v.slot}" data-name="${esc(v.name || "this save")}">Delete</button>
          </div>
        </div>`).join("") : `<p class="muted">No saved fighters yet.</p>`}
      <div class="btn-row">
        <button class="btn primary" data-newsave ${full ? "disabled" : ""}>+ New fighter${full ? " (slots full)" : ""}</button>
        <button class="btn" data-importopen ${full ? "disabled" : ""}>📂 Load a career</button>
      </div>`;
  } else if (modal.kind === "import") {
    body.innerHTML = `
      <h1>📂 Load a career</h1>
      <p class="muted">Bring in a fighter exported from Cage Career 3D, from this device or any other. It goes into a free save slot and starts playing.</p>
      <div class="btn-row"><label class="btn primary">Choose save file<input type="file" id="importFile" accept=".json,application/json,text/plain" hidden></label></div>
      <p class="muted" style="margin-top:14px">…or paste a save code:</p>
      <textarea id="importCode" rows="5" spellcheck="false" placeholder="CC3D1.…" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px"></textarea>
      <div class="btn-row"><button class="btn primary" data-importcode>Load code</button><button class="btn ghost" data-saves>← Back</button></div>`;
    $("importFile").addEventListener("change", async (ev) => {
      const f = ev.target.files && ev.target.files[0];
      if (f) importSave(await f.text());
    });
  } else if (modal.kind === "export") {
    body.innerHTML = `
      <h1>⬆️ Export ${esc(modal.name)}</h1>
      <p class="muted">Use this to move the fighter to another device or browser, or to share them. Open 💾 Saves → 📂 Load a career there.</p>
      <div class="btn-row"><button class="btn primary" data-savefile>Save as file</button><button class="btn" data-copycode ${modal.code ? "" : "disabled"}>Copy save code</button></div>
      <textarea id="exportCode" rows="5" readonly spellcheck="false" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px;margin-top:10px">${esc(modal.code || "Preparing code…")}</textarea>
      <div class="btn-row"><button class="btn ghost" data-saves>← Back</button></div>`;
  } else if (modal.kind === "market") {
    body.innerHTML = `
      <h1>Staff market</h1>
      <p class="muted">Cash ${money(s.money)} · Fame ${s.fame} · New candidates in ${s.marketRefresh} week(s). Signing fee is 4 weeks' salary.</p>
      ${s.market.length ? s.market.map((c) => {
        const famous = s.fame >= c.fameRequired, rich = s.money >= c.fee;
        return `
        <div class="candidate">
          <div class="top">
            <div><div class="role muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${esc(c.title)}</div><b>${esc(c.name)}</b> ${starsHtml(c.stars)}</div>
            <button class="btn small ${famous && rich ? "primary" : ""}" data-hire="${c.index}" ${famous && rich ? "" : "disabled"}>Sign · ${money(c.fee)}</button>
          </div>
          <div class="muted" style="font-size:13px;margin-top:4px">${esc(c.perk)}</div>
          <div class="muted" style="font-size:12px;margin-top:4px">${money(c.salary)}/week
            ${c.fameRequired ? ` · <span style="color:${famous ? "var(--green)" : "var(--red)"}">needs ${c.fameRequired} fame</span>` : ""}
            ${c.current ? ` · replaces ${esc(c.current)}` : ""}</div>
        </div>`;
      }).join("") : `<p class="muted">Nobody's available right now. Check back in a few weeks.</p>`}`;
  } else if (modal.kind === "talk") {
    const target = modal.target === "rival" ? s.rival : s.scheduled && s.scheduled.opponent;
    if (!target) return closeModal();
    body.innerHTML = `
      <h1>🎤 Press conference</h1>
      <p class="muted">The cameras are on. What do you say about <b style="color:var(--text)">${esc(target.displayName)}</b>?</p>
      <div class="tones">
        <button class="btn" data-tone="respect">Respectful<span class="sub">+1 fame, cools the rivalry</span></button>
        <button class="btn" data-tone="trash">Trash talk<span class="sub">Fame & hype, opponent gets motivated</span></button>
        <button class="btn primary" data-tone="personal">Get personal<span class="sub">Big hype, big risk</span></button>
      </div>
      <p class="muted" style="font-size:12px;margin-top:12px">Hyping a booked fight raises the purse, but a fired-up opponent fights harder. Win and you backed it up; lose and you'll eat your words.</p>`;
  } else if (modal.kind === "talkResult") {
    const t = s.lastTalk;
    body.innerHTML = `
      <h1>🎤 Headlines</h1>
      <div class="quote"><span class="who">${esc(s.fighter.displayName)}</span>"${esc(t.you)}"</div>
      <div class="quote them"><span class="who">${esc(t.target)}</span>"${esc(t.them)}"</div>
      <ul class="news">${t.effects.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
      <button class="btn primary big" data-closemodal style="margin-top:12px">Done</button>`;
  } else if (modal.kind === "division") {
    const i = s.weightClassIndex;
    const opts = [i - 1, i + 1].filter((x) => x >= 0 && x < s.classes.length);
    body.innerHTML = `
      <h1>Change division</h1>
      <p class="muted">Champions keep their belt when they change division, so you can hold several at once, but each belt must be defended within a year and a half or it's stripped. You fight at <b style="color:var(--text)">${esc(s.weightClass)}</b>. Moving up adds power and chin but costs speed; cutting down adds speed, costs power, and the weight cut drains cardio. You start over in the new division's rankings${s.rank === 0 ? " — but as a champion, you get an immediate superfight for the other belt" : s.rank > 0 && s.rank <= 5 ? " — your reputation lands you at #10" : ""}.</p>
      ${s.divisionCooldown ? `<p class="badge red" style="display:inline-block">Your body needs ${s.divisionCooldown} more weeks before another move.</p>` : ""}
      <div class="btn-row">${opts.map((x) => `<button class="btn ${x > i ? "" : ""}" data-movediv="${x}" ${s.divisionCooldown ? "disabled" : ""}>${x > i ? "▲ Move up to" : "▼ Cut down to"} ${esc(s.classes[x])}</button>`).join("")}</div>`;
  } else if (modal.kind === "start") {
    body.innerHTML = `
      <div class="start-menu">
        <div class="boot-mark">CAGE<span>CAREER</span><sup>3D</sup></div>
        <p class="muted">Welcome back. What do you want to do?</p>
        ${s.exists ? `<button class="btn primary big" data-closemodal>▶ Continue as ${esc(s.fighter.displayName)}</button>` : ""}
        <button class="btn big" data-newsave>➕ Start a new fighter</button>
        <button class="btn big" data-saves>💾 Saved fighters & load a career</button>
      </div>`;
  } else if (modal.kind === "edit") {
    const e = modal.draft;
    body.innerHTML = `
      <h1>✏️ Edit fighter</h1>
      <div class="edit-wrap">
        <div id="editStage" class="stage-host edit-stage"><div class="stage-fallback">3D preview unavailable on this device</div></div>
        <div>
          <div class="row2">
            <label>Nickname<input id="editNick" maxlength="24" value="${esc(e.nickname)}" placeholder="e.g. The Storm"></label>
            <label>Fighting style<select id="editStyle">${["Striker", "Wrestler", "Jiu-Jitsu", "Balanced"].map((x) => `<option ${x === e.style ? "selected" : ""}>${x}</option>`).join("")}</select></label>
          </div>
          <div class="tabs">${[["face", "🙂 Face & hair"], ["body", "💪 Body"], ["gear", "🧢 Gear"], ["ink", "🖋️ Tattoos"]].map(([k, t]) =>
            `<button class="btn small ${(modal.tab || "face") === k ? "gold" : "ghost"}" data-etab="${k}">${t}</button>`).join("")}</div>
          <div class="look-pickers">${lookRows(e.look, "elook", modal.tab || "face")}</div>
        </div>
      </div>
      <div class="btn-row"><button class="btn primary" data-saveedit>Save changes</button><button class="btn ghost" data-closemodal>Cancel</button></div>`;
    if (stage) {
      stage.show($("editStage"), "preview");
      stage.preview.setFighters([{ look: lookString(e.look), weightClass: s.weightClassIndex, style: e.style, female: state.gender === "F", name: state.fighter.name, ink: e.nickname || s.fighter.name.split(" ").pop() }]);
    }
  } else if (modal.kind === "place") {
    renderPlace(body);
  } else if (modal.kind === "phone") {
    renderPhone(body);
  } else if (modal.kind === "divisions") {
    const tab = modal.dtab || s.weightClass;
    const D = s.divisions.find((x) => x.name === tab) || s.divisions[0];
    body.innerHTML = `
      <h1>📊 ${esc(s.orgShort)} rankings</h1>
      <p class="muted" style="font-size:13px">${s.gfc ? `Every ${esc(s.orgName)} division` : "The GFC divisions you're chasing"}. Tap a fighter to see their profile, talk to them, train together or call them out.</p>
      <div class="tabs">${s.divisions.map((x) => `<button class="btn small ${x.name === D.name ? "gold" : "ghost"}" data-dtab="${esc(x.name)}">${esc(x.name)}${x.current ? " ●" : ""}${x.held ? " 🏆" : ""}</button>`).join("")}</div>
      <h2 style="margin-top:10px">${esc(D.name)}${D.current ? ` <span class="badge red">YOUR DIVISION</span>` : ""}</h2>
      <ul class="ranks">${D.list.map((r) => `
        <li class="${r.player ? "me" : "tap"} ${r.rank === 0 || r.interim ? "champ" : ""} ${r.rival ? "rivalrow" : ""}" ${r.player ? "" : `data-fighter="${r.id}"`}>
          <span class="rk">${r.rank === 0 ? "C" : r.interim ? "IC" : r.rank}</span>
          <span>${esc(r.name)} <span class="muted">${r.record} · ${esc(r.country)}</span>${relBadge(r.rel)}</span>
          <span class="muted">${r.overall}</span>
        </li>`).join("")}</ul>`;
  } else if (modal.kind === "fighter") {
    const f = s.profile;
    if (!f) return closeModal();
    const m = modal.result && s.lastMeet && s.lastMeet.id === f.id ? s.lastMeet : null;
    const relPct = (f.rel + 100) / 2;
    const busy = s.retired || !!s.fight;
    body.innerHTML = `
      ${modal.back ? `<button class="btn small ghost" data-backdivs>← ${esc(modal.back)} rankings</button>` : ""}
      <div class="fighter-top" style="margin-top:8px">
        <div>
          <h1 style="margin:0">${esc(f.displayName)}</h1>
          <div class="fighter-meta">${f.record} (${f.koWins} KO · ${f.subWins} SUB · ${f.decWins} DEC) · ${esc(f.style)} · ${esc(f.country)} · Age ${f.age}</div>
          <div class="fighter-meta">${esc(s.orgShort)} ${esc(f.division)} · ${f.rank === 0 ? "🏆 Champion" : f.rank > 0 ? "#" + f.rank : "Unranked"}${f.rival ? " · ⚔ Your rival" : ""}${f.booked ? " · 🥊 Your next opponent" : ""}${f.streak > 1 ? ` · 🔥 ${f.streak}-fight win streak` : ""}</div>
          ${f.h2h ? `<div class="fighter-meta">Against you: ${esc(f.h2h)}</div>` : ""}
        </div>
        <div class="ovr"><b>${f.overall}</b><span>OVR</span></div>
      </div>
      <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin:10px 0 4px"><span>Relationship</span><b>${esc(f.relLabel)} · ${f.rel > 0 ? "+" : ""}${f.rel}</b></div>
      <div class="relbar"><i style="left:${relPct}%"></i></div>
      ${m ? `<div class="quote" style="margin-top:12px"><span class="who">${esc(s.fighter.displayName)}</span>"${esc(m.you)}"</div>
        <div class="quote them"><span class="who">${esc(m.target)}</span>"${esc(m.them)}"</div>
        <ul class="news">${m.effects.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
      <div class="label">Interact${f.met ? " · you've talked this week" : ""}</div>
      <div class="tones meet">
        <button class="btn" data-meet="respect" ${busy || f.met ? "disabled" : ""}>🤝 Show respect<span class="sub">Relationship +10, fame +1</span></button>
        <button class="btn" data-meet="trash" ${busy || f.met ? "disabled" : ""}>🔥 Trash talk online<span class="sub">Fame & hype, they start to hate you</span></button>
        <button class="btn" data-meet="hangout" ${busy || f.met || f.rel <= -40 || f.booked ? "disabled" : ""}>🍽️ Hang out<span class="sub">Dinner together: relationship +15, happiness +3</span></button>
        <button class="btn" data-meet="train" ${busy || f.rel < 30 || f.booked ? "disabled" : ""}>🏋️ Train together<span class="sub">${f.rel < 30 ? "Needs Friendly (30+)" : "Takes a week: learn their two best skills fast"}</span></button>
        <button class="btn primary" data-meet="callout" ${busy || !f.canCallout || f.booked ? "disabled" : ""}>📣 Call them out<span class="sub">${!f.inPromo ? "Earn a GFC contract first" : !f.sameDivision ? "They fight at " + esc(f.division) : s.scheduled ? "You already have a fight booked" : "Ask for the fight. They might say no"}</span></button>
        <button class="btn" data-meet="rival" ${busy || f.rival || f.met ? "disabled" : ""}>⚔ Declare a rivalry<span class="sub">Bad blood sells fights</span></button>
      </div>
      <div class="label">Stats <span style="float:right">You · Them</span></div>
      ${taleOfTape(f)}`;
  } else if (modal.kind === "hof") {
    const hof = s.hallOfFame || [];
    body.innerHTML = `
      <h1>🏛 Hall of Fame</h1>
      <p class="muted">Every career finished by every player. A legacy score of 200+ (Hall of Famer or All-Time Great) earns induction.</p>
      ${hof.length ? hof.map((h, n) => `
        <div class="hof-entry ${h.inducted ? "inducted" : ""}">
          <div class="top">
            <div><b>${n + 1}. ${esc(h.name)}</b>${h.mine ? ` <span class="badge red">YOU</span>` : ""}<div class="muted" style="font-size:12px">${esc(h.style)} · ${esc(h.country)} · ${h.divisions.map(esc).join(" / ")}</div></div>
            <span class="badge ${h.inducted ? "gold" : ""}">${h.inducted ? "INDUCTED · " : ""}${esc(h.legacy)}</span>
          </div>
          <div class="kv" style="margin-top:8px;font-size:13px">
            <span>Record</span><b>${h.record} (${h.koWins} KO, ${h.subWins} SUB)</b>
            <span>Titles · defenses</span><b>${h.titlesWon} · ${h.titleDefenses}</b>
            ${h.divisionsWon.length ? `<span>Belts</span><b>${h.divisionsWon.map(esc).join(", ")}${h.divisionsWon.length >= 2 ? " 👑" : ""}</b>` : ""}
            <span>Peak overall</span><b>${h.peakOverall}</b>
            <span>Career</span><b>${h.years} yrs · retired at ${h.retiredAge}</b>
            <span>Earnings</span><b>${money(h.earnings)}</b>
            <span>Legacy score</span><b>${h.legacyScore}</b>
          </div>
          ${h.rivalries.length ? `<div class="muted" style="font-size:12px;margin-top:6px">Rivalries: ${h.rivalries.map(esc).join(" · ")}</div>` : ""}
        </div>`).join("") : `<p class="muted">No retired careers yet. Be the first legend.</p>`}`;
  }
}


// ------------------------------------------------------------------ life: the open world

function worldOpen() {
  return !$("worldScreen").classList.contains("hidden");
}

function openWorld() {
  if (!state || !state.exists) return;
  $("worldScreen").classList.remove("hidden");
  if (stage) stage.world.goHome();
  render();
  setTimeout(() => startTour("world"), 1200);
}

function closeWorld() {
  $("worldScreen").classList.add("hidden");
  if (stage && stage.world.isDriving()) stage.world.toggleDrive();
  render();
}

function compact(n) {
  return n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "K" : String(n);
}

function moodFace(h) {
  return h >= 80 ? "😁" : h >= 60 ? "🙂" : h >= 40 ? "😐" : h >= 20 ? "😕" : "😞";
}

function renderWorld() {
  if (!worldOpen() || !state || !state.life) return;
  const s = state, L = s.life;
  $("worldHud").innerHTML = `
    <div class="hud-stats">
      <span title="Cash">💵 <b style="color:${s.money < 0 ? "var(--red)" : "var(--green)"}">${money(s.money)}</b></span>
      <span title="Happiness: training ×${L.moodMult}">${moodFace(L.happiness)} <b>${L.happiness}</b></span>
      <span title="Followers">📱 <b>${compact(L.followers)}</b></span>
      <span title="Energy">⚡ <b>${s.energy}</b></span>
      <span class="muted">Y${s.year} W${s.week}</span>
      ${s.injuryWeeks ? `<span class="badge red">Injured ${s.injuryWeeks}w</span>` : ""}
    </div>
    <div class="hud-btns">
      <button class="btn small ghost" data-help title="How to play">❓</button>
      <button class="btn small" data-phone>📱 Phone</button>
      <button class="btn small primary" data-closeworld>🥊 Career</button>
    </div>`;
  renderWorldBottom();
}

function renderWorldBottom() {
  if (!worldOpen() || !state) return;
  const near = stage ? stage.world.near : null;
  const L = state.life;
  const car = L.driving && L.catalog.cars.find((c) => c.id === L.driving);
  const driving = stage && stage.world.isDriving();
  $("worldBottom").innerHTML = `
    ${near ? `<button class="btn gold big" data-enter="${near.id}">${near.icon} Enter ${esc(near.name)} <span class="sub">E</span></button>` : ""}
    ${car ? `<button class="btn" data-drive>${driving ? "🚶 Get out" : "🚗 Drive " + esc(car.name)}</button>` : ""}`;
}

/** Buttons for one life action, disabled when it's already done this week. */
function lifeBtn(type, text, extra = "", cls = "") {
  const done = state.life.done[type];
  return `<button class="btn ${cls}" data-life="${type}" ${extra} ${done ? "disabled" : ""}>${text}${done ? ` <span class="sub">done this week</span>` : ""}</button>`;
}

function renderPlace(body) {
  const s = state, L = s.life, C = L.catalog;
  const id = modal.place;
  const P = L.partner;
  const partnerLine = P ? `<p>❤️ <b>${esc(P.name)}</b> · ${esc(P.job)} · ${P.stage === "married" ? "married" : P.stage === "engaged" ? "engaged 💍" : "dating"}</p>
      ${bar(P.affection, P.affection > 50 ? "var(--red)" : "var(--orange)")}<p class="muted" style="font-size:12px">Affection ${Math.round(P.affection)}/100</p>` : "";
  const meet = () => `
    ${lifeBtn("meet", "👋 Meet someone new")}
    ${L.candidate ? `<div class="offer contender"><b>${esc(L.candidate.name)}</b>, ${L.candidate.age} · ${esc(L.candidate.job)}
      <div class="btn-row"><button class="btn primary small" data-life="ask">❤️ Ask them out</button></div>
      ${P ? `<p class="muted" style="font-size:12px">Careful — you're already with ${esc(P.name)}.</p>` : ""}</div>` : ""}`;
  const head = (icon, title, sub) => `<h1>${icon} ${title}</h1>${sub ? `<p class="muted">${sub}</p>` : ""}`;
  if (id === "home") {
    const H = C.houses[L.house];
    body.innerHTML = `
      ${head("🏠", esc(H.name), `Upkeep ${money(H.upkeep)}/week · Happiness ${moodFace(L.happiness)} ${L.happiness} (heading to ${L.target}) · training ×${L.moodMult}`)}
      ${partnerLine}
      ${L.kids.length ? `<p>👶 ${L.kids.map((k) => `<b>${esc(k.name)}</b> (${k.age})`).join(", ")}</p>` : ""}
      ${L.pets.length ? `<p>🐾 ${L.pets.map((p) => `<b>${esc(p.name)}</b> the ${p.kind}`).join(", ")}</p>` : ""}
      <div class="btn-row">
        ${lifeBtn("family", "👨‍👩‍👧 Family time")}
        <button class="btn" data-action="rest" ${s.fightNight ? "disabled" : ""}>😴 Rest at home <span class="sub">ends the week</span></button>
        ${P && P.stage === "married" ? `<button class="btn" data-life="kids">${L.tryingForKids ? "⏸ Stop trying for a baby" : "👶 Try for a baby"}</button>` : ""}
      </div>
      <div class="label">Lifestyle <span class="muted">(weekly spending — bigger means happier and more famous)</span></div>
      <div class="btn-row">${C.lifestyles.map((l, i) => `<button class="btn small ${i === L.lifestyle ? "gold" : ""}" data-life="lifestyle" data-level="${i}">${esc(l.name)}<span class="sub">${money(l.cost)}/wk</span></button>`).join("")}</div>
      <p class="muted" style="font-size:12px">Last week: bills ${money(L.lastBills)} · sponsors paid ${money(L.lastSponsor)}.</p>`;
  } else if (id === "club") {
    body.innerHTML = `
      ${head("🪩", "Nightclub", "Bottle service, flashing lights, and the city's most eligible singles. Partying lifts your mood — but cameras are everywhere.")}
      <div class="btn-row">${lifeBtn("party", "🍾 Party in the VIP section", "", "primary")}</div>
      ${meet()}`;
  } else if (id === "cafe") {
    body.innerHTML = `
      ${head("☕", "Café & Dining", "Quiet tables, good coffee, and a candlelit restaurant upstairs.")}
      ${partnerLine}
      <div class="btn-row">
        ${P ? lifeBtn("date", `🍷 Take ${esc(P.name)} on a date <span class="sub">${money(L.dateCost)}</span>`, "", "primary") : ""}
        ${P ? lifeBtn("gift", "🎁 Buy a gift") : ""}
        ${P && P.stage === "dating" ? lifeBtn("propose", "💍 Propose") : ""}
        ${P && P.stage === "engaged" ? `<button class="btn gold" data-life="wedding">💒 Have the wedding <span class="sub">${money(L.weddingCost)}</span></button>` : ""}
      </div>
      ${!P || P.stage !== "married" ? meet() : ""}`;
  } else if (id === "gym") {
    const hurt = s.injuryWeeks > 0, locked = !!s.fightNight;
    body.innerHTML = `
      ${head("🥊", "Iron Gym", `Energy ${s.energy}/100 · each session ends the week · happiness bonus ×${L.moodMult}`)}
      <div class="train-grid">${Object.keys(STAT_LABELS).map((k) => `<button class="btn small" data-train="${k}" ${locked || hurt || s.energy < s.trainCost ? "disabled" : ""}>${STAT_LABELS[k]}</button>`).join("")}</div>
      <div class="btn-row"><button class="btn" data-action="spar" ${locked || hurt || s.energy < 30 ? "disabled" : ""}>Spar</button></div>
      ${hurt ? `<p class="badge red" style="display:inline-block">Injured — rest up at home first</p>` : ""}`;
  } else if (id === "ink") {
    const cur = (state.fighter.look || "").split(",").map(Number);
    body.innerHTML = `
      ${head("🖋️", "Ink Studio", "Pick a spot, pick a design. A new piece costs " + money(1500 + s.fame * 40) + "; laser removal $2,500.")}
      ${TATTOO_REGIONS.map((r, i) => `<div class="label">${esc(r.name)}</div><div class="btn-row">${LOOK_OPTIONS[r.key].map((d, j) =>
        `<button class="btn small ${(cur[7 + i] || 0) === j ? "gold" : ""}" data-life="tattoo" data-region="${r.key}" data-design="${j}">${esc(d)}</button>`).join("")}</div>`).join("")}`;
  } else if (id === "arena") {
    const o = s.scheduled;
    body.innerHTML = `
      ${head("🏆", "The Arena", o ? `Next fight: vs ${esc(o.opponent.displayName)} in ${o.weeks} week(s)` : `${s.offers.length} fight offer(s) waiting`)}
      ${s.fightNight ? `<button class="btn primary big" data-startfight>Walk out to the cage</button>` : `<button class="btn primary" data-closeworld>See fight offers & schedule</button>`}`;
  } else if (id === "cars") {
    body.innerHTML = `
      ${head("🚗", "Luxury Motors", "Pick your ride. Cars lift your mood and your fame; sell them back for 60%.")}
      ${C.cars.map((c) => {
        const own = L.cars.includes(c.id);
        return `<div class="shop-row"><span class="swatch" style="background:${c.color}"></span>
          <div><b>${esc(c.name)}</b><div class="muted" style="font-size:12px">${money(c.price)} · +${c.joy} happiness${c.fame ? ` · +${c.fame} fame` : ""}</div></div>
          ${own ? `<span class="btn-row"><button class="btn small ${L.driving === c.id ? "gold" : ""}" data-life="drive" data-id="${c.id}">${L.driving === c.id ? "Driving" : "Drive"}</button><button class="btn small ghost" data-life="sell" data-kind="car" data-id="${c.id}">Sell</button></span>`
            : `<button class="btn small primary" data-life="buy" data-kind="car" data-id="${c.id}" ${s.money < c.price ? "disabled" : ""}>Buy</button>`}</div>`;
      }).join("")}`;
  } else if (id === "realty") {
    const trade = Math.round(C.houses[L.house].price * 0.85);
    body.innerHTML = `
      ${head("🏡", "Prime Realty", `Your current home trades in for ${money(trade)}.`)}
      ${C.houses.map((h, i) => `<div class="shop-row"><span class="swatch">${["🏢", "🏠", "🏡", "🏖️", "🏰"][i]}</span>
        <div><b>${esc(h.name)}</b><div class="muted" style="font-size:12px">${h.price ? money(h.price) : "Rent"} · upkeep ${money(h.upkeep)}/wk · +${h.joy} happiness</div></div>
        ${i === L.house ? `<span class="badge gold">Home</span>` : `<button class="btn small primary" data-life="buy" data-kind="house" data-id="${h.id}" ${s.money + trade < h.price ? "disabled" : ""}>Move in</button>`}</div>`).join("")}`;
  } else if (id === "pets") {
    body.innerHTML = `
      ${head("🐾", "Paws Pet Shop", "A loyal companion follows you everywhere in town.")}
      ${C.pets.map((p) => `<div class="shop-row"><span class="swatch">${{ dog: "🐕", cat: "🐈", parrot: "🦜", tiger: "🐅" }[p.id]}</span>
        <div><b>${esc(p.name)}</b><div class="muted" style="font-size:12px">${money(p.price)} · ${money(p.upkeep)}/wk · +${p.joy} happiness</div></div>
        <button class="btn small primary" data-life="buy" data-kind="pet" data-id="${p.id}" ${s.money < p.price ? "disabled" : ""}>Adopt</button></div>`).join("")}`;
  }
}

function renderPhone(body) {
  const L = state.life;
  body.innerHTML = `
    <div class="phone">
      <div class="phone-head"><b>@${esc(state.fighter.name.toLowerCase().replace(/[^a-z0-9]+/g, ""))}</b>
        <span>${compact(L.followers)} followers · sponsors ${money(L.sponsorRate)}/wk</span></div>
      <div class="label">Post <span class="muted">(once a week)</span></div>
      <div class="btn-row">
        ${lifeBtn("post", "💪 Training clip", 'data-kind="training"', "small")}
        ${lifeBtn("post", "🏎️ Flex", 'data-kind="flex"', "small")}
        ${lifeBtn("post", "❤️ Family pic", 'data-kind="family"', "small")}
        ${lifeBtn("post", "🎤 Call someone out", 'data-kind="callout"', "small")}
      </div>
      <div class="feed">${L.feed.length ? L.feed.map((p) => `
        <div class="post">
          <div class="muted" style="font-size:12px">${esc(p.date)}</div>
          <div>${esc(p.text)}</div>
          <div class="muted" style="font-size:12px">❤️ ${compact(p.likes)} · +${compact(p.gained)} followers</div>
          ${p.comments.map((c) => `<div class="comment"><b>@${esc(c.user)}</b> ${esc(c.text)}</div>`).join("")}
        </div>`).join("") : `<p class="muted">No posts yet. Your fans are waiting.</p>`}</div>
    </div>`;
}

// ------------------------------------------------------------------ fight screen

function allEvents(f) {
  return f.logs.flat();
}

function renderFightScreen() {
  const f = state.fight;
  const screen = $("fightScreen");
  if (!f) {
    screen.classList.add("hidden");
    fightShown = 0;
    headSnapshot = null;
    return;
  }
  const opening = screen.classList.contains("hidden");
  screen.classList.remove("hidden");
  const events = allEvents(f);

  if (opening) {
    // fresh walkout or page reload mid-fight: show everything so far instantly
    loadArena(f);
    if (f.round === 0) {
      audio.say(introCall(f, (state.life ? state.life.sponsors : []).map((d) => d.name)));
    }
    caption(null);
    $("fightLog").innerHTML = f.round === 0 ? introHtml(f) : "";
    events.forEach((e) => $("fightLog").appendChild(eventEl(e, false)));
    if (f.round === 0) setTimeout(() => startTour("fight"), 1500);
    fightShown = events.length;
    headSnapshot = f;
    renderFightHead(f);
    renderFightControls(f);
    scrollLog();
    return;
  }
  playEvents(events.slice(fightShown), f);
}

function introHtml(f) {
  return `<div class="ev info n">Tale of the tape</div>
    <div style="max-width:420px;margin:0 auto 8px">
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <b style="text-align:center;color:#ff6b6e">${f.player.overall} OVR</b><span class="muted">vs</span><b style="text-align:center;color:#75a8ff">${f.opponent.overall} OVR</b>
      </div>
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <span>${esc(f.player.style)}</span><span class="muted">style</span><span>${esc(f.opponent.style)}</span>
      </div>
    </div>
    <div class="ev round">${f.belt ? `This one is for the ${esc(f.belt.label)}. Five rounds.` : f.title ? "This one is for the championship. Five rounds." : `${f.rounds} rounds.`} Pick your game plan.</div>`;
}

function eventEl(e, animate) {
  const div = document.createElement("div");
  div.className = `ev ${e.type} ${e.side}`;
  if (!animate) div.style.animation = "none";
  div.innerHTML = (e.type === "round" || (e.type === "info" && e.side === "n") ? "" : `<span class="t">${e.t}</span>`) + esc(e.text);
  return div;
}

function scrollLog() {
  const log = $("fightLog");
  log.scrollTop = log.scrollHeight;
}

function loadArena(f) {
  if (!stage) return;
  stage.show($("arenaStage"), "arena");
  stage.arena.load(f, { playerLook: state.fighter.look, weightClass: state.weightClassIndex, sponsors: (state.life ? state.life.sponsors : []).map((d) => d.name) });
}

let captionTimer;
function caption(e) {
  const el = $("fightCaption");
  clearTimeout(captionTimer);
  if (!e) {
    el.className = "caption";
    return;
  }
  el.textContent = e.text;
  el.className = `caption show ${e.side} ${e.type}`;
  captionTimer = setTimeout(() => el.classList.remove("show"), e.type === "finish" ? 8000 : 3200);
}

async function playEvents(events, f) {
  playing = true;
  skipPlayback = false;
  renderFightControls(f);
  updateMusic();
  let finishShown = false;
  for (const e of events) {
    $("fightLog").appendChild(eventEl(e, !skipPlayback));
    fightShown++;
    scrollLog();
    if (!skipPlayback) {
      caption(e);
      if (e.type === "finish") finishShown = true;
      let pause = e.type === "kd" || e.type === "finish" ? 1100 : e.type === "big" || e.type === "subatt" ? 750 : 420;
      if (stage) pause = stage.arena.play(e, f);
      updateFightBars(e);
      await new Promise((r) => setTimeout(r, pause / speed));
    }
  }
  if (skipPlayback && stage) {
    // skipped: jump the arena straight to the end of the round
    stage.arena.restore(f);
    const last = events[events.length - 1];
    if (last) caption(last);
    if (f.finished && !finishShown) {
      const r = (state.lastResult || {}).result;
      audio.music(null);
      audio.sting(r);
    }
  }
  playing = false;
  updateMusic();
  headSnapshot = f;
  renderFightHead(f);
  renderFightControls(f);
  scrollLog();
}

/** Health and stamina drain live as each moment of the round plays out. */
function updateFightBars(e) {
  if (!e.hp) return;
  ["p", "o"].forEach((side, i) => {
    const c = document.querySelector(`#fightHead .corner.${side}`);
    if (!c) return;
    const [hp, st] = c.querySelectorAll(".bar > i");
    if (hp) {
      hp.style.width = e.hp[i] + "%";
      hp.style.background = healthColor(e.hp[i]);
    }
    if (st) st.style.width = e.st[i] + "%";
    const sig = c.querySelector(".sig");
    if (sig && e.sg) sig.textContent = e.sg[i];
  });
}

function renderFightHead(f) {
  const corner = (c, side) => `
    <div class="corner ${side}">
      <div class="cn">${esc(c.name)}</div>
      <div class="cm">${c.record} · Sig <span class="sig">${c.sig}</span> · TD ${c.td}${c.kd ? " · KD " + c.kd : ""}</div>
      <div class="bl">HEALTH</div>${bar(c.health, healthColor(c.health), "lg")}
      <div class="bl">STAMINA</div>${bar(c.stamina, "var(--gold)")}
    </div>`;
  $("fightHead").innerHTML = `
    ${corner(f.player, "p")}
    <div class="round-box">
      <div class="rl">ROUND</div>
      <div class="rn">${Math.max(1, f.round)}/${f.rounds}</div>
      ${f.title ? `<div class="belt">TITLE</div>` : ""}
    </div>
    ${corner(f.opponent, "o")}`;
}

function renderFightControls(f) {
  const el = $("fightControls");
  if (playing) {
    el.innerHTML = `<button class="btn big" data-skip>Skip ▶▶</button>`;
    return;
  }
  if (!f.finished) {
    el.innerHTML = `
      <div class="prompt">${f.round === 0 ? "Choose your game plan for round 1" : `Corner advice between rounds — game plan for round ${f.round + 1}?`}
        ${f.scout ? `<br><span class="scout">🧠 Coach: "They're going to ${esc(PLAN_NAMES[f.scout])} this round."</span>` : ""}
        ${f.oppFiredUp && f.round === 0 ? `<br><span style="color:#ff6b6e">Your opponent is fired up after the trash talk.</span>` : ""}</div>
      ${f.round === 0 ? `<div class="touch-row"><span>Before the bell:</span>
        <button class="btn small ${touchGloves ? "gold" : ""}" data-touch="1">🤜🤛 Touch gloves</button>
        <button class="btn small ${touchGloves ? "" : "primary"}" data-touch="0">🙅 Refuse</button></div>` : ""}
      <div class="plans">
        ${PLANS.map((p) => `<button class="btn" data-plan="${p.id}">${p.name}<span class="sub">${p.desc}</span></button>`).join("")}
      </div>`;
    return;
  }
  const r = state.lastResult || {};
  const word = { W: "VICTORY", L: "DEFEAT", D: "DRAW" }[r.result] || "";
  el.innerHTML = `
    <div class="result-banner">
      <div class="rw ${r.result}">${word}</div>
      <div class="rd"><b>${esc(f.method)}</b> · R${f.endRound} ${esc(f.endTime)}${f.cards ? " · " + f.cards.join(", ") : ""}</div>
      <div class="rd">Paid <b>${money(r.pay || 0)}</b>${r.perfBonus ? " (incl. $50,000 bonus)" : ""} · Fame ${r.fameDelta >= 0 ? "+" : ""}${r.fameDelta} · Record <b>${esc(r.record)}</b></div>
      ${r.careerNote ? `<div class="rd" style="margin-top:4px;color:var(--gold)"><b style="color:inherit">${esc(r.careerNote)}</b></div>` : ""}
      ${r.injuryNote ? `<div class="rd" style="color:var(--red)">${esc(r.injuryNote)}</div>` : ""}
    </div>
    <button class="btn primary big" data-closefight>Continue</button>`;
}

// ------------------------------------------------------------------ events

document.addEventListener("click", async (ev) => {
  const b = ev.target.closest("button, [data-fighter]");
  if (!b || b.disabled) return;
  const d = b.dataset;
  if (d.train) return act("action", { type: "train", stat: d.train });
  if (d.action) return act("action", { type: d.action });
  if (d.accept !== undefined) return act("accept", { index: d.accept });
  if (d.upgrade !== undefined) return act("upgrade");
  if (d.startfight !== undefined) return act("fight/start");
  if (d.plan) {
    if (playing) return;
    if (await api("fight/round", { plan: d.plan, touch: touchGloves })) render();
    return;
  }
  if (d.skip !== undefined) { skipPlayback = true; return; }
  if (d.sound !== undefined) { audio.toggle(); syncSoundButtons(); updateMusic(); return; }
  if (d.speed !== undefined) {
    speed = speed === 1 ? 2 : speed === 2 ? 0.5 : 1;
    try { localStorage.setItem("cc3d_speed", String(speed)); } catch { /* ignore */ }
    if (stage) stage.arena.setSpeed(speed);
    syncSoundButtons();
    return;
  }
  if (d.togglelog !== undefined) { $("fightPanel").classList.toggle("log-open"); scrollLog(); return; }
  if (d.look) {
    const [key, i] = d.look.split(":");
    createLook[key] = Number(i);
    renderLookPickers();
    updateCreatePreview();
    return;
  }
  if (d.randomlook !== undefined) {
    createLook = randomLook();
    renderLookPickers();
    updateCreatePreview();
    return;
  }
  if (d.closefight !== undefined) return act("fight/close");
  if (d.hof !== undefined) return openModal("hof");
  if (d.saves !== undefined) return openModal("saves");
  if (d.newsave !== undefined) {
    if (await api("save/blank")) { modal = null; render(); }
    return;
  }
  if (d.slot !== undefined) {
    if (await api("save/switch", { slot: d.slot })) { modal = null; resetFightScreen(); render(); }
    return;
  }
  if (d.importopen !== undefined) return openModal("import");
  if (d.importcode !== undefined) {
    const code = $("importCode").value;
    if (!code.trim()) return toast("Paste a save code first.", true);
    return importSave(code);
  }
  if (d.export !== undefined) {
    let text;
    try { text = game.exportSave(Number(d.export)); } catch (e) { return toast("Couldn't read that save.", true); }
    const v = state.saves[Number(d.export)];
    modal = { kind: "export", text, name: v ? v.name : "fighter", code: null };
    renderModal();
    const mine = modal;
    try { mine.code = await saveToCode(text); } catch { mine.code = null; }
    if (modal === mine) renderModal();
    return;
  }
  if (d.savefile !== undefined) {
    const safe = String(modal.name || "fighter").replace(/[^\w\- ]+/g, "").trim() || "fighter";
    return offerFile(safe + " - Cage Career 3D.json", modal.text);
  }
  if (d.copycode !== undefined) return copyText(modal.code);
  if (d.delslot !== undefined) {
    if (await ask(`Delete ${d.name}? This can't be undone.`, "Delete")) {
      if (await api("save/delete", { slot: d.delslot })) { resetFightScreen(); render(); }
    }
    return;
  }
  if (d.closemodal !== undefined) return closeModal();
  if (d.skiptalk !== undefined) return audio.say([]);
  if (d.promo) {
    if (await ask(`Sign with ${d.promo.toUpperCase()}? A new promotion means new rankings, and any belts you hold now are vacated.`, "Sign")) act("promo", { org: d.promo });
    return;
  }
  if (d.help !== undefined) {
    const fightOpen = !$("fightScreen").classList.contains("hidden");
    return startTour(fightOpen ? "fight" : worldOpen() ? "world" : "career", true);
  }
  if (d.editfighter !== undefined) {
    return openModal("edit", { draft: { look: parseLook(state.fighter.look), nickname: state.fighter.nickname || "", style: state.fighter.style } });
  }
  if (d.etab && modal && modal.draft) {
    modal.draft.nickname = $("editNick").value;
    modal.draft.style = $("editStyle").value;
    modal.tab = d.etab;
    return renderModal();
  }
  if (d.elook && modal && modal.draft) {
    const [key, i] = d.elook.split(":");
    modal.draft.nickname = $("editNick").value;
    modal.draft.style = $("editStyle").value;
    modal.draft.look[key] = Number(i);
    return renderModal();
  }
  if (d.saveedit !== undefined && modal && modal.draft) {
    const e = modal.draft;
    if (await api("edit", { look: lookString(e.look), nickname: $("editNick").value, style: $("editStyle").value })) {
      modal = null;
      render();
    }
    return;
  }
  if (d.touch !== undefined) {
    touchGloves = d.touch === "1";
    return renderFightControls(state.fight);
  }
  if (d.world !== undefined) return openWorld();
  if (d.closeworld !== undefined) {
    modal = null;
    return closeWorld();
  }
  if (d.enter) return openModal("place", { place: d.enter });
  if (d.phone !== undefined) return openModal("phone");
  if (d.drive !== undefined) {
    if (stage) stage.world.toggleDrive();
    return renderWorldBottom();
  }
  if (d.life) {
    const params = { type: d.life };
    for (const k of ["kind", "id", "level", "region", "design"]) if (d[k] !== undefined) params[k] = d[k];
    if (await api("life", params)) render();
    return;
  }
  if (d.market !== undefined) return openModal("market");
  if (d.hire !== undefined) return act("staff/hire", { index: d.hire });
  if (d.fire !== undefined) {
    if (await ask("Release this team member?", "Release")) act("staff/fire", { role: d.fire });
    return;
  }
  if (d.fighter) {
    if (await api("fighter/view", { id: d.fighter })) openModal("fighter", { back: modal && modal.kind === "divisions" ? modal.dtab : null });
    return;
  }
  if (d.alldivs !== undefined) return openModal("divisions", { dtab: state.weightClass });
  if (d.dtab) {
    modal.dtab = d.dtab;
    return renderModal();
  }
  if (d.backdivs !== undefined) return openModal("divisions", { dtab: modal.back });
  if (d.meet) {
    const p = state.profile;
    if (d.meet === "rival" && state.rival && !(await ask(`Make ${p.displayName} your new rival? Your rivalry with ${state.rival.displayName} ends.`, "Declare war"))) return;
    if (await api("fighter/meet", { id: p.id, type: d.meet })) {
      if (state.profile) { modal.result = true; render(); } else closeModal();
    }
    return;
  }
  if (d.talk) return openModal("talk", { target: d.talk });
  if (d.tone) {
    if (await api("talk", { target: modal.target, tone: d.tone })) { modal = { kind: "talkResult" }; render(); }
    return;
  }
  if (d.division !== undefined) return openModal("division");
  if (d.movediv !== undefined) {
    if (await api("division", { weightClass: d.movediv })) { modal = null; render(); }
    return;
  }
  if (d.retire !== undefined) {
    if (await ask("Retire now? Your career will end and your legacy will be locked in.", "Retire")) act("retire");
    return;
  }
});

/** Switching careers mid-fight must not replay the old fight's log. */
function resetFightScreen() {
  $("fightScreen").classList.add("hidden");
}

$("modal").addEventListener("click", (ev) => {
  if (ev.target.id === "modal") closeModal();
});

$("createForm").addEventListener("change", (ev) => {
  if (ev.target.id === "genderSelect") fillWeightClasses();
  updateCreatePreview();
});

$("createForm").addEventListener("submit", (ev) => {
  ev.preventDefault();
  act("new", Object.fromEntries(new FormData(ev.target)));
});

// Load the saves (from the claude.ai account when available), then show the game.
(async () => {
  onSaveError(() => toast("Couldn't save your latest progress. Check your connection.", true));
  const store = await openStore();
  game = new Game(store);
  if ("onDowngrade" in store) store.onDowngrade = () => game.saveAll();
  try {
    await game.load();
  } catch (e) {
    console.error(e);
    toast("Couldn't load your saves. Try reloading the page.", true);
  }
  $("boot").classList.add("hidden");
  act("state");
  let linked = false, fresh = false;
  try {
    const q = new URLSearchParams(location.search);
    linked = q.has("career");
    fresh = q.has("new");
  } catch { /* no query */ }
  if (fresh) {
    // ?new opens straight on the create screen (saved fighters stay in Saves)
    try { history.replaceState(null, "", location.pathname); } catch { /* keep the url */ }
    if (state && state.saves.length < state.maxSaves && (await api("save/blank"))) render();
  } else if (!linked && state && state.saves.length) {
    openModal("start");
  }
  loadLinkedCareer();
})();

/** A link like ?career=minh-vuong offers to load a ready-made career from saves/minh-vuong.json. */
async function loadLinkedCareer() {
  let name = null;
  try { name = new URLSearchParams(location.search).get("career"); } catch { /* no query */ }
  if (!name || !/^[a-z0-9-]+$/.test(name)) return;
  try { history.replaceState(null, "", location.pathname); } catch { /* keep the url */ }
  let text;
  try {
    const r = await fetch("saves/" + name + ".json", { cache: "no-store" });
    if (!r.ok) throw new Error(r.status);
    text = await r.text();
  } catch {
    toast("Couldn't find that career.", true);
    return;
  }
  const who = name.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  if (await ask(`Load ${who} into a save slot and start playing?`, "Load")) importSave(text);
}
