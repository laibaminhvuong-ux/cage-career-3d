import { createStage } from "./arena3d.js";
import { WALKOUT_OPTIONS, highlightClips, tickCornerClock } from "./fightfeatures.js";
import { createFightPresentation } from "./fightpresentation.js";
import { featureLinks, walkoutSettingsHtml, filmRoomHtml, cornerPanelHtml, highlightShelfHtml } from "./fightfeatures-ui.js";
import { trophiesHtml } from "./trophies-ui.js";
import { getPresentation15Plus, setPresentation15Plus, mountMediaPresenter } from "./ringcard3d.js";
import * as audio from "./audio.js";
import { LOOK_OPTIONS, SHORTS_NAMES, TATTOO_REGIONS, lookString, parseLook, randomLook } from "./fighter3d.js";
import { Game, GameError } from "./engine.js";
import { openStore, onSaveError } from "./store.js";
import { introCall, speakerFor } from "./announcer.js";
import { startTour } from "./tutorial.js";
import { LANGUAGES, getLang, isBuiltIn, setLang, startI18n } from "./i18n.js";

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
/** A name (fighter, promotion, gym, pet...) that a translation must leave alone. */
const nm = (s) => `<span translate="no">${esc(s)}</span>`;
let state = null;
let busy = false;

// fight playback
let fightShown = 0;      // events already on screen
let playing = false;
let skipPlayback = false;
let touchGloves = true; // the choice before round one
let headSnapshot = null; // fight json shown in the header while a round plays out
let modal = null;        // { kind: "saves" | "market" | "talk" | "talkResult" | "division" | "hof", target?, code? }
let mediaPresenterPreview = null;
const PLAN_NAMES = Object.fromEntries(PLANS.map((p) => [p.id, p.name]));

// 3D stage (null when the device has no WebGL: the game still works from the text log)
let stage = null;
try {
  stage = createStage();
} catch (e) {
  console.warn("3D disabled:", e);
}
const presentation = createFightPresentation({
  getState: () => state, getStage: () => stage, getSpeed: () => speed, getLive: () => rt, isPlaying: () => playing,
  renderControls: renderFightControls, renderHead: renderFightHead, updateBars: updateFightBars, caption, render3d, updateMusic, toast,
  resumeLive: realtimeLoop, introductions: f => audio.say(introCall(f, (state.life?.sponsors || []).map(s => s.name))),
});
// settings kept on this device: frame rate cap (0 = max) and the FPS counter
const gfx = { fps: 60, meter: false };
try { Object.assign(gfx, JSON.parse(localStorage.getItem("cc3d_gfx") || "{}")); } catch { /* defaults */ }
function saveGfx() {
  try { localStorage.setItem("cc3d_gfx", JSON.stringify(gfx)); } catch { /* ignore */ }
}
function applyGfx() {
  if (!stage) return;
  stage.setFps(gfx.fps);
  const meter = $("fpsMeter");
  meter.classList.toggle("hidden", !gfx.meter);
  stage.watchFps(gfx.meter ? (n) => { meter.textContent = n + " FPS"; } : null);
}
startI18n((status) => {
  if (status === "offline") toast("Couldn't reach the translator right now. Showing English for the rest.", true);
});
let createLook = randomLook();
let speed = 1;
try { speed = Number(localStorage.getItem("cc3d_speed")) || 1; } catch { /* ignore */ }
if (stage) stage.arena.setSpeed(speed);
applyGfx();
// what the announcer says shows as a subtitle over the cage
audio.onSay((text, mood) => {
  const el = $("announcerLine");
  if (!el) return;
  $("skipTalk").classList.toggle("hidden", !text);
  if (!text) {
    el.className = "announcer-line";
    return;
  }
  const who = speakerFor(mood);
  el.textContent = (mood === "call" || mood === "color" || mood === "analyst" ? "🎙 " : "🎤 ") + (who ? who.replace(/"[^"]*" /, "") + ": " : "") + text;
  el.className = "announcer-line show " + (mood || "");
});
if (stage) {
  stage.world.onNear = () => renderWorldBottom();
  stage.world.onEnter = (id) => (id === "exit" ? leavePlace() : enterPlace(id));
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
  if (presentation.walkout || presentation.replaying) return;
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
  const org = s.gfc ? s.orgShort : "Iron Cage";
  const me = { org, eventGloves: s.card?.specialEvent?.gloves, look: s.fighter.look, name: s.fighter.name, weightClass: s.weightClassIndex, style: s.fighter.style, female: s.gender === "F", belt: champ && !s.retired ? "waist" : null, injured: s.injuryWeeks > 0,
    ink: s.fighter.nickname || s.fighter.name.split(" ").pop() };
  const o = s.scheduled && !s.retired ? s.scheduled : null;
  const opp = o ? o.opponent : null;
  return opp ? [me, { org, eventGloves: s.card?.specialEvent?.gloves, look: opp.look, name: opp.name, weightClass: s.weightClassIndex, style: opp.style, female: opp.gender === "F", belt: o.oppRank === 0 ? "shoulder" : null }] : [me];
}

function renderShowcaseCaption() {
  const s = state;
  const opp = s.scheduled && !s.retired ? s.scheduled.opponent : null;
  $("showcaseCap").innerHTML = opp
    ? `<span class="red">${nm(s.fighter.displayName)}</span><span class="vs">VS</span><span class="blue">${nm(opp.displayName)}</span>`
    : `<span class="red">${nm(s.fighter.displayName)}</span><span class="muted">${esc(s.fighter.style)} · ${esc(s.weightClass)} · drag to spin</span>`;
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
        <div class="fighter-name">${nm(f.displayName)}</div>
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
  const tag = (o.trilogy ? "⚔ TRILOGY · " : o.grudge ? "⚔ GRUDGE MATCH · " : "") + (o.title ? kinds[o.kind] || kinds.title : kinds[o.kind] || (o.contender ? "⭐ CONTENDER SERIES" : `${o.rounds} rounds`));
  const isInterim = state.belt && state.belt.interim && !state.belt.interimIsMe && o.opponent.displayName === state.belt.interim;
  const rank = o.oppRank === 0 ? "Champion" : isInterim ? "Interim champion" : o.oppRank > 0 ? `#${o.oppRank}` : "";
  return `
    <div class="offer ${o.title ? "title" : ""} ${o.contender || o.grudge ? "contender" : ""}">
      <div class="offer-top">
        <div>
          <div class="offer-meta">${tag}${rank ? " · " + rank : ""}</div>
          <div class="offer-name"><span class="flink" data-fighter="${o.oppId}">${nm(opp.displayName)}</span>${o.callout ? ` <span class="badge gold">📣 your callout</span>` : ""}</div>
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
        <p>${nm(s.fighter.displayName)} retired at ${s.fighter.age} with a record of <b>${s.fighter.record}</b>.</p>
        <p class="muted">${s.titlesWon} title${s.titlesWon === 1 ? "" : "s"} won · ${s.titleDefenses} defenses · ${money(s.earnings)} career earnings · legacy score ${s.legacyScore}</p>
      </div>
      <div class="btn-row"><button class="btn gold" data-legacy>🏛 Legacy ceremony</button></div>
      ${coachingHtml(s)}
      <div class="btn-row"><button class="btn primary big" data-newsave>Start a new career</button><button class="btn big" data-saves>💾 Saves</button></div>`;
    if (s.legacyReel && !legacySeen.has(s.fighter.name)) {
      legacySeen.add(s.fighter.name);
      setTimeout(() => openModal("legacy"), 400);
    }
    return;
  }
  if (s.fightNight) {
    const o = s.scheduled;
    el.innerHTML = `
      <h2>Next fight</h2>
      <div class="fight-night">
        <h3>FIGHT NIGHT${s.card ? " · " + esc(s.card.name) : ""}</h3>
        <p>${o.title ? (o.kind === "interim" ? `🏆 For the interim ${esc(state.orgShort)} title — ` : o.kind === "unify" ? `🏆 To unify the ${esc(state.orgShort)} belts — ` : `🏆 For the ${esc(state.orgShort)} title — `) : o.kind === "eliminator" ? "🎯 Title eliminator — " : o.kind === "main" ? "★ Main event — " : ""}vs <b>${esc(o.opponent.displayName)}</b></p>
      </div>
      ${s.card && s.card.media && s.card.media.ready ? `<button class="btn gold" data-media style="margin-bottom:8px">🎤 Media day (last chance, skipping costs a fine)</button>` : ""}
      ${s.card ? (() => {
        const done = s.card.bouts.filter((b) => b.result && !b.player);
        return `<div class="label">${done.length ? "Earlier tonight" : "On the card"}</div>
          ${(done.length ? done : s.card.bouts.filter((b) => !b.player).slice(-3)).slice(-4).map((b) => boutRow(b, true)).join("")}
          <button class="btn small ghost" data-card style="margin:4px 0 10px">📋 Full card</button>`;
      })() : ""}
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
      ${o.campReady ? `<div class="label">🏕 Fight camp — how do you prepare for ${nm(o.opponent.displayName)}?</div><div class="tones">
        <button class="btn" data-camp="tapes">🎞 Study tapes<span class="sub">Your coach reads their game plan every round</span></button>
        <button class="btn" data-camp="partners">🥊 Sparring partners<span class="sub">Partners who fight like them: blunt their best weapon (costs money)</span></button>
        <button class="btn primary" data-camp="hard">🔥 Hard camp<span class="sub">+2 to every stat on fight night, risk of injury</span></button></div>`
        : o.camp ? `<p class="camp-note">🏕 ${esc(o.camp.text)}</p>` : ""}
      ${o.cutReady ? `<div class="label">⚖️ Fight week — your weight cut</div><div class="tones">
        <button class="btn" data-cut="easy">🥗 Easy<span class="sub">${esc(o.cuts.easy)}</span></button>
        <button class="btn" data-cut="standard">⚖️ Standard<span class="sub">${esc(o.cuts.standard)}</span></button>
        <button class="btn primary" data-cut="extreme">🧖 Extreme<span class="sub">${esc(o.cuts.extreme)}</span></button></div>`
        : o.cut ? `<p class="camp-note">⚖️ ${esc(o.cuts[o.cut])}</p>` : o.weeks > 1 ? `<p class="muted" style="font-size:12px">⚖️ The weight cut starts in fight week.</p>` : ""}
      ${s.card ? `<div class="btn-row" style="margin:6px 0"><button class="btn small" data-card>📋 ${esc(s.card.name)} card · ${s.card.bouts.find((b) => b.player).slot}</button>
        ${s.card.media ? (s.card.media.ready ? `<button class="btn small gold" data-media>🎤 Media day</button>` : s.card.media.done ? `<span class="muted" style="font-size:12px;align-self:center">🎤 Media day done</span>` : `<span class="muted" style="font-size:12px;align-self:center">🎤 Media day in fight week</span>`) : ""}</div>` : ""}
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
    ${featureLinks(s)}
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
        <div><b>${nm(g.name)}</b><div class="muted" style="font-size:12px">Training ×${g.mult} · ${money(g.fee)}/wk</div></div>
        ${g.nextName ? `<button class="btn small" data-upgrade ${s.money < g.nextCost || s.retired ? "disabled" : ""}>Move up<span class="sub">${nm(g.nextName)} · ${money(g.nextCost)}</span></button>` : `<span class="badge gold">Best gym</span>`}
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
        <li class="${l.player ? "me" : ""}"><b>${nm(l.name)}</b>${l.interim ? ` <span class="badge">interim</span>` : ""}
          <div class="muted">${esc(l.how)} · ${esc(l.date)}${l.defenses ? ` · ${l.defenses} defense${l.defenses === 1 ? "" : "s"}` : ""}</div></li>`).join("")}</ol></details>` : ""}
    </div>` : "";
  $("rankCard").innerHTML = `
    <h2>${esc(s.orgShort)} ${esc(s.weightClass)} rankings</h2>
    <div class="btn-row" style="margin:-4px 0 8px"><button class="btn small" data-alldivs>📊 All promotions & divisions</button>
      <span class="muted" style="font-size:12px;align-self:center">Tap any fighter to meet them</span></div>
    ${s.gfc ? "" : `<p class="muted" style="font-size:13px">You're not in a major promotion yet. These are the GFC fighters you're chasing.</p>`}
    ${beltBox}
    <ul class="ranks scroll">
      ${s.rankings.map((r) => `
        <li class="${r.player ? "me" : "tap"} ${r.rank === 0 || r.interim ? "champ" : ""} ${r.rival ? "rivalrow" : ""}" ${r.player ? "" : `data-fighter="${r.id}"`}>
          <span class="rk">${r.rank === 0 ? "C" : r.interim ? "IC" : r.rank}</span>
          <span>${nm(r.name)} <span class="muted">${r.record}</span></span>
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
        <div class="fighter-name" style="font-size:17px">${nm(r.displayName)}</div>
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
    <p class="muted" style="font-size:13px">Now fighting in <b style="color:var(--text)">${nm(s.orgName)}</b>${s.gfc ? ` · ${s.contractFights ? s.contractFights + " fight" + (s.contractFights === 1 ? "" : "s") + " left on your contract" : "free agent"}` : ""}.
      Promotions call once you've earned it.</p>
    ${s.promotions.slice().reverse().map((p) => {
      const offer = s.promoOffers.find((o) => o.org === p.id);
      return `<div class="offer ${p.current ? "title" : offer ? "contender" : ""}">
        <div class="offer-top"><div>
          <div class="offer-meta">${esc(p.short)} · ${esc(p.about)}</div>
          <div class="offer-name">${nm(p.name)}</div>
          <div class="offer-meta">${p.current ? "✅ Your promotion" : need(p.need)}</div>
        </div></div>
        ${offer ? `<div class="offer-money">Contract: ${offer.fights} fights · ${money(offer.bonus)} to sign · purses ×${offer.pay}
            ${offer.terms && offer.terms.ppv ? " · 📺 $1/PPV buy" : ""}${offer.terms && offer.terms.titleClause ? " · 🏆 title-shot clause" : ""}</div>
          ${offer.negotiated ? `<div class="muted" style="font-size:12px">Final offer.</div>` : `<div class="btn-row" style="margin:4px 0"><span class="muted" style="font-size:12px;align-self:center">Negotiate:</span>
            <button class="btn small ghost" data-nego="money" data-org="${p.id}">💰 More money</button>
            <button class="btn small ghost" data-nego="ppv" data-org="${p.id}">📺 PPV points</button>
            <button class="btn small ghost" data-nego="title" data-org="${p.id}">🏆 Title-shot clause</button></div>`}
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
          ${t.name ? `<b>${nm(t.name)}</b> ${starsHtml(t.stars)}<div class="perk">${esc(t.perk)} · ${money(t.salary)}/wk</div>` : `<span class="muted">Vacant</span>`}
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
  if (mediaPresenterPreview) { mediaPresenterPreview.dispose(); mediaPresenterPreview = null; }
  const el = $("modal");
  if (!modal) {
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  // inside a place its menu is a side panel, so the room stays in view
  el.classList.toggle("side", modal.kind === "place" && !!(stage && stage.world.inside));
  el.classList.toggle("phone-mode", modal.kind === "phone");
  const body = $("modalBody");
  const s = state;
  if (modal.kind === "walkout") { body.innerHTML = walkoutSettingsHtml(s); return; }
  if (modal.kind === "filmroom") { body.innerHTML = filmRoomHtml(s); return; }
  if (modal.kind === "highlights") { body.innerHTML = highlightShelfHtml(modal.fight); return; }
  if (modal.kind === "trophies") { body.innerHTML = trophiesHtml(s); return; }
  if (modal.kind === "saves") {
    const full = s.saves.length >= s.maxSaves;
    body.innerHTML = `
      <h1>💾 Saved fighters</h1>
      <p class="muted">Up to ${s.maxSaves} fighters. Every action saves automatically, so you can switch any time.
        ${s.storage === "account" ? "Saves are kept with your claude.ai account, so they're on every device you sign in on." : "Saves are kept in this browser on this device."}</p>
      ${s.saves.length ? s.saves.map((v) => `
        <div class="hof-entry ${v.active ? "active" : ""}">
          <div class="top">
            <div><b>${v.missing ? "Missing save" : nm(v.name)}</b>
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
      <h1>⬆️ Export ${nm(modal.name)}</h1>
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
            <div><div class="role muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${esc(c.title)}</div><b>${nm(c.name)}</b> ${starsHtml(c.stars)}</div>
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
      <p class="muted">The cameras are on. What do you say about <b style="color:var(--text)">${nm(target.displayName)}</b>?</p>
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
      <div class="quote"><span class="who">${nm(s.fighter.displayName)}</span>"${esc(t.you)}"</div>
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
        ${s.exists ? `<button class="btn primary big" data-closemodal>▶ Continue as ${nm(s.fighter.displayName)}</button>` : ""}
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
  } else if (modal.kind === "legacy") {
    renderLegacyModal(body);
  } else if (modal.kind === "card") {
    renderCardModal(body);
  } else if (modal.kind === "media") {
    renderMediaModal(body);
  } else if (modal.kind === "phone") {
    renderPhone(body);
  } else if (modal.kind === "divisions") {
    const tab = modal.dtab || s.weightClass;
    const D = s.divisions.find((x) => x.name === tab) || s.divisions[0];
    const P = s.promotions.find((x) => x.id === s.viewOrg) || s.promotions[0];
    const mine = s.viewOrg === s.orgKey;
    body.innerHTML = `
      <h1>📊 <span translate="no">${esc(P.short)}</span> rankings</h1>
      <div class="tabs promo-tabs">${s.promotions.slice().reverse().map((x) => `<button class="btn small ${x.id === s.viewOrg ? "primary" : "ghost"}" data-dorg="${x.id}" translate="no">${esc(x.short)}${x.id === s.orgKey && s.gfc ? " ●" : ""}</button>`).join("")}</div>
      <p class="muted" style="font-size:13px">${nm(P.name)}${mine ? (s.gfc ? " · your promotion" : " · the promotion you're chasing") : ""}. Tap a fighter to see their profile, talk to them or train together${mine ? ", or call them out" : ""}.</p>
      <div class="tabs">${s.divisions.map((x) => `<button class="btn small ${x.name === D.name ? "gold" : "ghost"}" data-dtab="${esc(x.name)}">${esc(x.name)}${x.current ? " ●" : ""}${x.held ? " 🏆" : ""}</button>`).join("")}</div>
      <h2 style="margin-top:10px">${esc(D.name)}${D.current ? ` <span class="badge red">YOUR DIVISION</span>` : ""}${D.list[0] ? ` <span class="muted" style="font-size:13px;font-weight:400">· champion ${nm(D.list[0].name)}</span>` : ""}</h2>
      <ul class="ranks">${D.list.map((r) => `
        <li class="${r.player ? "me" : "tap"} ${r.rank === 0 || r.interim ? "champ" : ""} ${r.rival ? "rivalrow" : ""}" ${r.player ? "" : `data-fighter="${r.id}"`}>
          <span class="rk">${r.rank === 0 ? "C" : r.interim ? "IC" : r.rank}</span>
          <span>${nm(r.name)} <span class="muted">${r.record} · ${esc(r.country)}</span>${relBadge(r.rel)}</span>
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
          <h1 style="margin:0">${nm(f.displayName)}</h1>
          <div class="fighter-meta">${f.record} (${f.koWins} KO · ${f.subWins} SUB · ${f.decWins} DEC) · ${esc(f.style)} · ${esc(f.country)} · Age ${f.age}</div>
          <div class="fighter-meta"><span translate="no">${esc(f.org)}</span> ${esc(f.division)} · ${f.rank === 0 ? "🏆 Champion" : f.rank > 0 ? "#" + f.rank : "Unranked"}${f.rival ? " · ⚔ Your rival" : ""}${f.booked ? " · 🥊 Your next opponent" : ""}${f.streak > 1 ? ` · 🔥 ${f.streak}-fight win streak` : ""}</div>
          ${f.h2h ? `<div class="fighter-meta">Against you: ${esc(f.h2h)}</div>` : ""}
        </div>
        <div class="ovr"><b>${f.overall}</b><span>OVR</span></div>
      </div>
      <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin:10px 0 4px"><span>Relationship</span><b>${esc(f.relLabel)} · ${f.rel > 0 ? "+" : ""}${f.rel}</b></div>
      <div class="relbar"><i style="left:${relPct}%"></i></div>
      ${m ? `<div class="quote" style="margin-top:12px"><span class="who">${nm(s.fighter.displayName)}</span>"${esc(m.you)}"</div>
        <div class="quote them"><span class="who">${esc(m.target)}</span>"${esc(m.them)}"</div>
        <ul class="news">${m.effects.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
      <div class="label">Interact${f.met ? " · you've talked this week" : ""}</div>
      <div class="tones meet">
        <button class="btn" data-meet="respect" ${busy || f.met ? "disabled" : ""}>🤝 Show respect<span class="sub">Relationship +10, fame +1</span></button>
        <button class="btn" data-meet="trash" ${busy || f.met ? "disabled" : ""}>🔥 Trash talk online<span class="sub">Fame & hype, they start to hate you</span></button>
        <button class="btn" data-meet="hangout" ${busy || f.met || f.rel <= -40 || f.booked ? "disabled" : ""}>🍽️ Hang out<span class="sub">Dinner together: relationship +15, happiness +3</span></button>
        <button class="btn" data-meet="train" ${busy || f.rel < 30 || f.booked ? "disabled" : ""}>🏋️ Train together<span class="sub">${f.rel < 30 ? "Needs Friendly (30+)" : "Takes a week: learn their two best skills fast"}</span></button>
        <button class="btn primary" data-meet="callout" ${busy || !f.canCallout || f.booked ? "disabled" : ""}>📣 Call them out<span class="sub">${f.otherOrg ? "They fight in the " + esc(f.org) : !f.inPromo ? "Earn a GFC contract first" : !f.sameDivision ? "They fight at " + esc(f.division) : s.scheduled ? "You already have a fight booked" : "Ask for the fight. They might say no"}</span></button>
        <button class="btn" data-meet="rival" ${busy || f.rival || f.met ? "disabled" : ""}>⚔ Declare a rivalry<span class="sub">Bad blood sells fights</span></button>
      </div>
      <div class="label">Stats <span style="float:right">You · Them</span></div>
      ${taleOfTape(f)}`;
  } else if (modal.kind === "settings") {
    const v = audio.volumes(), on = audio.isOn(), cur = getLang();
    const slider = (k, label) => `<label class="set-row"><span>${label}</span>
      <input type="range" min="0" max="100" step="5" value="${Math.round(v[k] * 100)}" data-vol="${k}" ${on ? "" : "disabled"}><b data-volval="${k}">${Math.round(v[k] * 100)}%</b></label>`;
    const opt = (l) => `<option value="${l[0]}" ${l[0] === cur ? "selected" : ""}>${esc(l[1])}</option>`;
    body.innerHTML = `
      <h1>⚙️ Settings</h1>
      <div class="label">🌐 Language</div>
      <select id="langSelect" class="set-select" translate="no">
        <optgroup label="Built in">${LANGUAGES.filter((l) => isBuiltIn(l[0])).map(opt).join("")}</optgroup>
        <optgroup label="More languages (machine translated)">${LANGUAGES.filter((l) => !isBuiltIn(l[0])).map(opt).join("")}</optgroup>
      </select>
      <p class="muted" style="font-size:12px">${isBuiltIn(cur) ? "Menus and buttons are translated by hand. Other text is machine translated when you're online." : "Machine translated, by your browser's own translator or online through Google Translate. The commentators still speak English; their words show translated on screen."}</p>
      <div class="label">🔊 Sound</div>
      <div class="btn-row">
        <button class="btn small ${on ? "gold" : "ghost"}" data-soundset="on">On</button>
        <button class="btn small ${on ? "ghost" : "gold"}" data-soundset="off">Off</button>
      </div>
      ${slider("master", "Master volume")}
      ${slider("music", "Music")}
      ${slider("sfx", "Sound effects")}
      ${slider("crowd", "Crowd")}
      ${slider("voice", "Commentary voice")}
      <div class="label">Event presentation</div>
      <label class="set-row"><span>15+ presentation</span><input type="checkbox" id="presentation15Plus" ${getPresentation15Plus() ? "checked" : ""}></label>
      <p class="muted" style="font-size:12px">Adult ring-card presenters wear sports bras and shorts by default. Turn on for bikini outfits at media day and between rounds. Saved on this device.</p>
      <div class="label">🖥️ Graphics</div>
      <div class="set-row"><span>Graphics quality</span><div class="btn-row" style="margin:0">
        ${[["low", "Low"], ["medium", "Medium"], ["high", "High"]].map(([q, l]) => `<button class="btn small ${stage && stage.getQuality() === q ? "gold" : "ghost"}" data-quality="${q}">${l}</button>`).join("")}
      </div></div>
      <p class="muted" style="font-size:12px;margin:-2px 0 6px">High adds ambient occlusion (soft contact shadows). Medium keeps the glow, grading and smooth edges. Low is the fastest.</p>
      <div class="set-row"><span>Frame rate</span><div class="btn-row" style="margin:0">
        ${[[30, "30 FPS"], [60, "60 FPS"], [0, "Max"]].map(([n, l]) => `<button class="btn small ${gfx.fps === n ? "gold" : "ghost"}" data-fps="${n}">${l}</button>`).join("")}
      </div></div>
      <label class="set-row"><span>Show FPS counter</span><input type="checkbox" id="fpsToggle" ${gfx.meter ? "checked" : ""}></label>
      <p class="muted" style="font-size:12px">30 FPS saves battery and keeps phones cool. Max runs as fast as your screen and device allow.</p>
      <button class="btn primary big" data-closemodal style="margin-top:10px">Done</button>`;
  } else if (modal.kind === "hof") {
    const hof = s.hallOfFame || [];
    body.innerHTML = `
      <h1>🏛 Hall of Fame</h1>
      <p class="muted">Every career finished by every player. A legacy score of 200+ (Hall of Famer or All-Time Great) earns induction.</p>
      ${hof.length ? hof.map((h, n) => `
        <div class="hof-entry ${h.inducted ? "inducted" : ""}">
          <div class="top">
            <div><b>${n + 1}. ${nm(h.name)}</b>${h.mine ? ` <span class="badge red">YOU</span>` : ""}<div class="muted" style="font-size:12px">${esc(h.style)} · ${esc(h.country)} · ${h.divisions.map(esc).join(" / ")}</div></div>
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
  if (stage) stage.world.leavePlace();
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

/** Walk into a place: the 3D room, with its menu in a side panel. */
function enterPlace(id) {
  if (stage) {
    const L = state.life;
    stage.world.enterPlace(id, {
      house: L.house,
      partner: id === "home" && L.partner ? { name: L.partner.name, gender: L.partner.gender } : null,
      cars: id === "cars" ? L.catalog.cars.map((c) => ({ id: c.id, color: c.color, name: c.name })) : null,
      org: id === "arena" ? (state.gfc ? state.orgShort : "Iron Cage") : null,
    });
  }
  openModal("place", { place: id });
  renderWorldBottom();
}

function leavePlace() {
  if (stage) stage.world.leavePlace();
  if (modal && modal.kind === "place") closeModal();
  renderWorldBottom();
}

function renderWorldBottom() {
  if (!worldOpen() || !state) return;
  const inside = stage && stage.world.inside;
  if (inside) {
    $("worldBottom").innerHTML = `
      <button class="btn gold" data-placemenu>${inside.icon} ${esc(inside.name)} menu</button>
      <button class="btn" data-leave>🚪 Leave <span class="sub">${stage.world.near ? "E" : "walk to the door"}</span></button>`;
    return;
  }
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
  const partnerLine = P ? `<p>❤️ <b>${nm(P.name)}</b> · ${esc(P.job)} · ${P.stage === "married" ? "married" : P.stage === "engaged" ? "engaged 💍" : "dating"}</p>
      ${bar(P.affection, P.affection > 50 ? "var(--red)" : "var(--orange)")}<p class="muted" style="font-size:12px">Affection ${Math.round(P.affection)}/100</p>` : "";
  const meet = () => `
    ${lifeBtn("meet", "👋 Meet someone new")}
    ${L.candidate ? `<div class="offer contender"><b>${nm(L.candidate.name)}</b>, ${L.candidate.age} · ${esc(L.candidate.job)}
      <div class="btn-row"><button class="btn primary small" data-life="ask">❤️ Ask them out</button></div>
      ${P ? `<p class="muted" style="font-size:12px">Careful — you're already with ${nm(P.name)}.</p>` : ""}</div>` : ""}`;
  const head = (icon, title, sub) => `<h1>${icon} ${title}</h1>${sub ? `<p class="muted">${sub}</p>` : ""}`;
  if (id === "home") {
    const H = C.houses[L.house];
    body.innerHTML = `
      ${head("🏠", esc(H.name), `Upkeep ${money(H.upkeep)}/week · Happiness ${moodFace(L.happiness)} ${L.happiness} (heading to ${L.target}) · training ×${L.moodMult}`)}
      ${partnerLine}
      ${L.kids.length ? `<p>👶 ${L.kids.map((k) => `<b>${nm(k.name)}</b> (${k.age})`).join(", ")}</p>` : ""}
      ${L.pets.length ? `<p>🐾 ${L.pets.map((p) => `<b>${nm(p.name)}</b> the ${p.kind}`).join(", ")}</p>` : ""}
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
        ${P ? lifeBtn("date", `🍷 Take ${nm(P.name)} on a date <span class="sub">${money(L.dateCost)}</span>`, "", "primary") : ""}
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
      ${head("🏆", "The Arena", o ? `Next fight: vs ${nm(o.opponent.displayName)} in ${o.weeks} week(s)` : `${s.offers.length} fight offer(s) waiting`)}
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

// ------------------------------------------------------------------ the phone
// A phone in your pocket: a home screen of apps, each one a real screen. The battery is your
// energy, the clock is your own, and the apps run on the career's data.

const PHONE_APPS = [
  { id: "gram", name: "Fightgram", icon: "📸", bg: "linear-gradient(135deg,#f58529,#dd2a7b 50%,#8134af)" },
  { id: "messages", name: "Messages", icon: "💬", bg: "linear-gradient(#5ff777,#13c33b)" },
  { id: "calls", name: "Phone", icon: "📞", bg: "linear-gradient(#5ff777,#13c33b)" },
  { id: "bank", name: "Bank", icon: "🏦", bg: "linear-gradient(#1e3a8a,#0b1b4d)" },
  { id: "calendar", name: "Calendar", icon: "📅", bg: "#fff" },
  { id: "news", name: "Fight News", icon: "📰", bg: "linear-gradient(#ef4444,#991b1b)" },
  { id: "maps", name: "Maps", icon: "🗺️", bg: "linear-gradient(#a7f3d0,#60a5fa)" },
  { id: "music", name: "Music", icon: "🎵", bg: "linear-gradient(#fb7185,#e11d48)" },
  { id: "stats", name: "Fight Stats", icon: "📊", bg: "linear-gradient(#111827,#374151)" },
  { id: "rankings", name: "Rankings", icon: "🏆", bg: "linear-gradient(#f4b942,#b45309)" },
  { id: "weather", name: "Weather", icon: "⛅", bg: "linear-gradient(#38bdf8,#1d4ed8)" },
  { id: "settings", name: "Settings", icon: "⚙️", bg: "linear-gradient(#9ca3af,#4b5563)" },
];
const DOCK = ["calls", "messages", "gram", "music"];

function phoneHandle() {
  return state.fighter.name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function renderPhone(body) {
  const s = state, L = s && s.life;
  if (!L) return closeModal();
  const now = new Date();
  const clock = now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
  const bars = Math.min(4, 1 + Math.floor(s.fame / 25));
  const app = modal.app || null;
  const status = `<div class="ph-status"><b>${clock}</b><span class="ph-island"></span>
    <span class="ph-sig">${"▂▄▆█".split("").map((c, i) => `<i class="${i < bars ? "on" : ""}">${c}</i>`).join("")}</span>
    <span class="ph-batt" title="Energy ${s.energy}%"><i style="width:${s.energy}%;background:${s.energy < 25 ? "#ef4444" : "#34c759"}"></i></span></div>`;
  let screen;
  if (!app) {
    const badge = { messages: Object.values(L.msgs || {}).length ? "" : "", news: s.news.length ? Math.min(9, s.news.length) : "", gram: L.done.post ? "" : "!" };
    const icon = (a, dock) => `<button class="ph-app" data-phoneapp="${a.id}">
        <span class="ph-ico" style="background:${a.bg}">${a.icon}${badge[a.id] ? `<em>${badge[a.id]}</em>` : ""}</span>${dock ? "" : `<span class="ph-name">${a.name}</span>`}</button>`;
    screen = `<div class="ph-home">
      <div class="ph-widget"><div class="ph-wd">${now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</div>
        <div class="ph-wt">${s.scheduled ? `🥊 Fight in <b>${s.scheduled.weeks}</b> week${s.scheduled.weeks === 1 ? "" : "s"} vs ${nm(s.scheduled.opponent.displayName)}` : "No fight booked"}</div>
        <div class="ph-wt">❤️ Happiness ${L.happiness} · ⚡ Energy ${s.energy}</div></div>
      <div class="ph-grid">${PHONE_APPS.filter((a) => !DOCK.includes(a.id)).map((a) => icon(a)).join("")}</div>
      <div class="ph-dock">${DOCK.map((id) => icon(PHONE_APPS.find((a) => a.id === id), true)).join("")}</div>
    </div>`;
  } else {
    const A = PHONE_APPS.find((a) => a.id === app.split(":")[0]);
    screen = `<div class="ph-appview ph-${A.id}">
      <div class="ph-bar"><button class="ph-back" data-phoneapp="${app.includes(":") ? A.id : ""}">‹ ${app.includes(":") ? A.name : "Home"}</button><b>${A.name}</b><span></span></div>
      <div class="ph-scroll">${phoneApp(app, s, L)}</div></div>`;
  }
  body.innerHTML = `<div class="phone-device"><div class="phone-screen">${status}${screen}
    <button class="ph-homebar" data-phoneapp="" aria-label="Home"></button></div></div>`;
}

function phoneApp(app, s, L) {
  const [id, sub] = app.split(":");
  const C = L.catalog;
  if (id === "gram") {
    const posts = L.feed;
    return `<div class="gram-head"><span class="gram-av">${esc(s.fighter.name[0])}</span>
        <div class="gram-nums"><div><b>${L.postCount}</b>posts</div><div><b>${compact(L.followers)}</b>followers</div><div><b>${Math.min(999, 40 + s.fame * 3)}</b>following</div></div></div>
      <div class="gram-bio"><b>${nm(s.fighter.displayName)}</b><br>${esc(s.weightClass)} · ${esc(s.orgShort)} · ${s.fighter.record}<br><span class="muted">💼 sponsors ${money(L.sponsorRate)}/wk</span></div>
      <div class="label" style="margin:10px 0 6px">New post ${L.done.post ? `<span class="muted">· posted this week</span>` : ""}</div>
      <div class="gram-post-btns">
        ${lifeBtn("post", "💪 Training clip", 'data-kind="training"', "small")}
        ${lifeBtn("post", "🤳 Selfie", 'data-kind="selfie"', "small")}
        ${lifeBtn("post", "🏎️ Flex", 'data-kind="flex"', "small")}
        ${lifeBtn("post", "❤️ Family pic", 'data-kind="family"', "small")}
        ${lifeBtn("post", "❓ Fan Q&A", 'data-kind="qa"', "small")}
        ${lifeBtn("post", "🤝 Sponsor shout-out", 'data-kind="sponsor"', "small")}
        ${lifeBtn("post", "🎤 Call someone out", 'data-kind="callout"', "small")}
      </div>
      ${posts.length ? posts.map((p) => `
        <div class="gram-card">
          <div class="gram-user"><span class="gram-av sm">${esc(s.fighter.name[0])}</span><b>${esc(phoneHandle())}</b><span class="muted">· ${esc(p.date)}</span></div>
          <div class="gram-img k-${esc(p.kind)}">${{ training: "🥊", flex: "🏎️", family: "👨‍👩‍👧", callout: "🎤", selfie: "🤳", qa: "❓", sponsor: "🤝" }[p.kind] || "📸"}</div>
          <div class="gram-acts">❤️ ${compact(p.likes)} &nbsp; 💬 ${p.comments.length} &nbsp; ↗︎ <span class="muted">+${compact(p.gained)} followers</span></div>
          <div class="gram-cap"><b>${esc(phoneHandle())}</b> ${esc(p.text)}</div>
          ${p.comments.map((c) => `<div class="gram-cm"><b>${esc(c.user)}</b> ${esc(c.text)}</div>`).join("")}
        </div>`).join("") : `<p class="muted" style="text-align:center;margin:24px 0">No posts yet. Your fans are waiting.</p>`}`;
  }
  if (id === "messages") {
    const P = L.partner, M = L.msgs || {};
    const coach = s.team.head && s.team.head.name ? s.team.head.name : "Coach";
    const chats = [
      P && { id: "partner", name: P.name, av: "❤️" },
      { id: "mom", name: "Mom", av: "👩" },
      { id: "coach", name: coach, av: "🧢" },
      s.rival && { id: "rival", name: s.rival.displayName, av: "⚔️" },
    ].filter(Boolean);
    if (!sub) {
      return `<div class="msg-list">${chats.map((c) => {
        const T = M[c.id] || [];
        const last = T[T.length - 1];
        return `<button class="msg-row" data-phoneapp="messages:${c.id}"><span class="msg-av">${c.av}</span>
          <span class="msg-mid"><b>${nm(c.name)}</b><span class="muted">${last ? esc(last.text) : c.id === "rival" ? "Talk your trash…" : "No messages yet"}</span></span>
          <span class="muted" style="font-size:11px">${last ? esc(last.date) : ""}</span></button>`;
      }).join("")}</div>`;
    }
    const c = chats.find((x) => x.id === sub);
    if (!c) return `<p class="muted">This conversation is gone.</p>`;
    const T = M[sub] || [];
    let thread = T.map((m) => m.from === "call" ? `<div class="msg-call">${esc(m.text)} · ${esc(m.date)}</div>` : `<div class="bubble ${m.from === "me" ? "me" : "them"}">${esc(m.text)}</div>`).join("");
    if (sub === "rival" && s.lastMeet && s.rival && s.lastMeet.id === s.rival.id) {
      thread += `<div class="bubble me">${esc(s.lastMeet.you)}</div><div class="bubble them">${esc(s.lastMeet.them)}</div>`;
    }
    const actions = {
      partner: `${lifeBtn("text", "Send a sweet text ❤️", "", "primary small")} ${lifeBtn("call", "📞 Call", 'data-who="partner"', "small")}`,
      mom: lifeBtn("call", "📞 Call Mom", 'data-who="mom"', "primary small"),
      coach: `<button class="btn primary small" data-life="call" data-who="coach">📞 Ask about my next opponent</button>`,
      rival: s.rival ? `<button class="btn primary small" data-meet-phone="trash">🔥 Send trash talk</button> <button class="btn small" data-meet-phone="respect">🤝 Show respect</button>` : "",
    }[sub];
    return `<div class="msg-head"><span class="msg-av">${c.av}</span><b>${nm(c.name)}</b></div>
      <div class="msg-thread">${thread || `<p class="muted" style="text-align:center">Say something.</p>`}</div>
      <div class="msg-actions">${actions}</div>`;
  }
  if (id === "calls") {
    const P = L.partner;
    const row = (av, name, sub2, btn) => `<div class="msg-row"><span class="msg-av">${av}</span><span class="msg-mid"><b>${name}</b><span class="muted">${sub2}</span></span>${btn}</div>`;
    return `<div class="label">Favorites</div><div class="msg-list">
      ${P ? row("❤️", nm(P.name), esc(P.stage), lifeBtn("call", "📞", 'data-who="partner"', "small")) : ""}
      ${row("👩", "Mom", "mobile", lifeBtn("call", "📞", 'data-who="mom"', "small"))}
      ${row("🧢", esc(s.team.head && s.team.head.name ? s.team.head.name : "Coach"), "head coach", `<button class="btn small" data-life="call" data-who="coach">📞</button>`)}
      ${s.team.manager && s.team.manager.name ? row("💼", esc(s.team.manager.name), "manager", `<button class="btn small" data-phoneapp="calendar">📅</button>`) : ""}
      </div>
      <p class="muted" style="font-size:12px">Calling family lifts your mood. Your coach scouts your next opponent.</p>`;
  }
  if (id === "bank") {
    const house = C.houses[L.house], style = C.lifestyles[L.lifestyle];
    const sponsorPay = L.sponsors.reduce((a, d) => a + d.weekly, 0);
    const out = s.gym.fee + s.teamSalary + house.upkeep + style.cost;
    const net = sponsorPay - out;
    const line = (k, v, neg) => `<div class="bank-line"><span>${k}</span><b style="color:${neg ? "#ef4444" : "#16a34a"}">${neg ? "−" : "+"}${money(Math.abs(v))}</b></div>`;
    return `<div class="bank-card"><div class="muted" style="color:#c7d2fe">Checking ···· ${String(Math.abs(L.followers * 7) % 10000).padStart(4, "0")}</div>
        <div class="bank-bal">${money(s.money)}</div><div style="color:#c7d2fe;font-size:12px">Career earnings ${money(s.earnings)}</div></div>
      <div class="label">Every week</div>
      ${line("Sponsors", sponsorPay, false)}
      ${line("Gym fee", s.gym.fee, true)}
      ${line("Team salaries", s.teamSalary, true)}
      ${line(esc(house.name) + " upkeep", house.upkeep, true)}
      ${line(esc(style.name) + " lifestyle", style.cost, true)}
      <div class="bank-line total"><span>Net per week</span><b style="color:${net >= 0 ? "#16a34a" : "#ef4444"}">${net >= 0 ? "+" : "−"}${money(Math.abs(net))}</b></div>
      <p class="muted" style="font-size:12px">Fight purses and bonuses come on top. Last week: bills ${money(L.lastBills)}, sponsors ${money(L.lastSponsor)}.</p>`;
  }
  if (id === "calendar") {
    const ev = [];
    if (s.scheduled) ev.push(["🥊", `Fight vs ${nm(s.scheduled.opponent.displayName)}`, `in ${s.scheduled.weeks} week${s.scheduled.weeks === 1 ? "" : "s"}`]);
    if (s.belt && s.belt.idle !== null && s.rank === 0) ev.push(["🏆", "Title defense deadline", `${Math.max(0, s.belt.stripWeeks - s.belt.idle)} weeks left`]);
    if (s.gfc) ev.push(["📝", `${esc(s.orgShort)} contract`, `${s.contractFights} fight${s.contractFights === 1 ? "" : "s"} left`]);
    for (const o of s.promoOffers) ev.push(["📨", `${esc(o.short)} contract offer`, "waiting in Promotions"]);
    for (const d of L.sponsors) ev.push(["🤝", esc(d.name) + " deal", `${d.weeksLeft} weeks left`]);
    if (s.divisionCooldown) ev.push(["⚖️", "Can change division", `in ${s.divisionCooldown} weeks`]);
    ev.push(["🎂", "Birthday", `turning ${s.fighter.age + 1} in ${53 - s.week} weeks`]);
    return `<div class="cal-top"><div class="cal-y">Year ${s.year}</div><div class="cal-w">Week <b>${s.week}</b> of 52</div></div>
      <div class="cal-strip">${Array.from({ length: 7 }, (_, i) => { const w = s.week + i; const fight = s.scheduled && i === s.scheduled.weeks; return `<div class="${i === 0 ? "now" : ""} ${fight ? "fight" : ""}"><span>W${((w - 1) % 52) + 1}</span><b>${fight ? "🥊" : i === 0 ? "•" : ""}</b></div>`; }).join("")}</div>
      <div class="label">Upcoming</div>
      ${ev.map(([i, t, w]) => `<div class="cal-ev"><span>${i}</span><div><b>${t}</b><div class="muted">${w}</div></div></div>`).join("")}`;
  }
  if (id === "news") {
    return `<div class="news-app">${s.news.slice(0, 25).map((n, i) => {
      const m = n.match(/^(Y\d+ W\d+) — (.*)$/);
      const head = m ? m[2] : n;
      return `<div class="news-item ${i === 0 ? "top" : ""}"><div class="muted" style="font-size:11px">${m ? esc(m[1]) : ""} · ${esc(s.orgShort)} NEWS</div><b>${esc(head)}</b></div>`;
    }).join("")}</div>`;
  }
  if (id === "maps") {
    const places = [["home", "🏠", "Home"], ["gym", "🥊", "Gym"], ["club", "🪩", "Nightclub"], ["cafe", "☕", "Café"], ["ink", "🖋️", "Ink Studio"],
      ["cars", "🚗", "Car Dealer"], ["realty", "🏡", "Realtor"], ["pets", "🐾", "Pet Shop"], ["arena", "🏆", "The Arena"]];
    return `<div class="map-art">📍</div><p class="muted" style="font-size:12px;margin:6px 0 10px">Tap a place to go straight there.</p>
      ${places.map(([pid, ic, n]) => `<button class="msg-row" data-goplace="${pid}"><span class="msg-av">${ic}</span><span class="msg-mid"><b>${n}</b><span class="muted">${Math.round(1 + (pid.length * 37) % 9)} min walk</span></span><span>›</span></button>`).join("")}`;
  }
  if (id === "music") {
    const v = audio.volumes();
    const on = audio.isOn() && v.music > 0;
    const track = state.fight ? ["Walkout Anthem", "Cage Career OST"] : worldOpen() ? ["City Strolls", "Cage Career OST"] : ["Gym Beats Vol. 2", "Cage Career OST"];
    return `<div class="music-art">${on ? "🎧" : "🎵"}</div>
      <div class="music-t"><b>${track[0]}</b><div class="muted">${track[1]}</div></div>
      <div class="music-ctl"><button class="btn" data-music="toggle">${on ? "⏸ Pause" : "▶️ Play"}</button></div>
      <label class="set-row" style="grid-template-columns:auto 1fr 40px"><span>🔈</span><input type="range" min="0" max="100" step="5" value="${Math.round(v.music * 100)}" data-vol="music"><b data-volval="music">${Math.round(v.music * 100)}%</b></label>`;
  }
  if (id === "stats") {
    const f = s.fighter, fin = f.koWins + f.subWins + f.decWins;
    const pct = (n) => (fin ? Math.round((n / fin) * 100) : 0) + "%";
    return `<div class="stat-big">${f.record}<div class="muted">W-L-D</div></div>
      <div class="stat-tiles"><div><b>${f.koWins}</b>KO/TKO<span>${pct(f.koWins)}</span></div><div><b>${f.subWins}</b>Submissions<span>${pct(f.subWins)}</span></div><div><b>${f.decWins}</b>Decisions<span>${pct(f.decWins)}</span></div></div>
      <div class="bank-line"><span>Overall</span><b>${f.overall} (peak ${s.peakOverall})</b></div>
      <div class="bank-line"><span>Titles won · defenses</span><b>${s.titlesWon} · ${s.titleDefenses}</b></div>
      <div class="bank-line"><span>Streak</span><b>${f.streak > 0 ? f.streak + " wins" : f.streak < 0 ? -f.streak + " losses" : "—"}</b></div>
      <div class="label">Last fights</div>
      ${s.history.slice(0, 8).map((h) => `<div class="bank-line"><span><span class="res ${h.result}">${h.result}</span> ${nm(h.opponent)}</span><b>${esc(h.method)}</b></div>`).join("") || `<p class="muted">No pro fights yet.</p>`}`;
  }
  if (id === "weather") {
    const wk = s.week, temps = [6, 9, 14, 19, 24, 28, 30, 27, 22, 15, 9, 6];
    const t = temps[Math.floor(((wk - 1) % 52) / 4.34)];
    const sky = ["☀️", "⛅", "🌤️", "🌦️"][(wk * 7) % 4];
    return `<div class="wx"><div class="wx-city">Fight City</div><div class="wx-t">${t}°</div><div class="wx-s">${sky} ${t > 22 ? "Hot — hydrate between rounds" : t < 10 ? "Cold — warm up longer" : "Perfect training weather"}</div></div>
      <div class="wx-days">${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => `<div><span>${d}</span><b>${["☀️", "⛅", "🌤️", "🌦️", "☀️", "⛅", "🌤️"][(wk + i) % 7]}</b><span>${t + (((wk + i) * 3) % 5) - 2}°</span></div>`).join("")}</div>`;
  }
  return "";
}

// ------------------------------------------------------------------ retirement: legacy and coaching

const legacySeen = new Set();

function renderLegacyModal(body) {
  const L = state.legacyReel;
  if (!L) return closeModal();
  body.innerHTML = `
    <div class="card-poster legacy-poster"><div class="cp-org">${L.inducted ? "HALL OF FAME · CLASS OF YEAR " + state.year : "CAREER RETROSPECTIVE"}</div>
      <h1>${nm(state.fighter.displayName)}</h1><div class="cp-main">${esc(L.tier)} <span>·</span> legacy ${L.score}</div></div>
    ${L.speech ? `<div class="label">🎤 Induction speech</div>${L.speech.map((t) => `<div class="quote">"${esc(t)}"</div>`).join("")}` : ""}
    <div class="label">🎬 Highlight reel</div>
    ${L.highlights.length ? L.highlights.map((h) => `<div class="cb"><div class="cb-top"><span class="cb-slot">${esc(h.date)}</span></div>
      <div class="cb-res">${esc(h.text)} ${h.canWatch ? `<button class="btn small ghost" data-watch="h${h.id}">▶ Watch</button>` : ""}</div></div>`).join("") : `<p class="muted">No wins to show.</p>`}
    <div class="label">📊 Career records</div>
    <div class="kv">${L.records.map(([k, v]) => `<span>${esc(k)}</span><b>${esc(String(v))}</b>`).join("")}</div>`;
}

function coachingHtml(s) {
  const C = s.coaching;
  if (!C) return `<div class="offer contender" style="margin-top:10px"><b>🏫 Open your own gym</b>
    <p class="muted" style="font-size:13px;margin:4px 0">Recruit prospects, train them, corner them in their fights and send the best to the GFC.</p>
    <button class="btn primary small" data-gymopen>Open the gym</button></div>`;
  return `<div class="label">🏫 ${esc(C.name)} · earned ${money(C.earnings)}${C.graduates.length ? " · " + C.graduates.length + " sent to the GFC" : ""}</div>
    ${C.last ? `<div class="camp-note">Last fight: ${nm(C.last.name)} ${esc(C.last.text)} <button class="btn small ghost" data-watch="c">▶ Watch</button></div>` : ""}
    ${C.prospects.map((p) => `<div class="cb"><div class="cb-top"><span class="cb-slot">${nm(p.displayName)}</span><span class="muted">${esc(p.style)} · ${p.record} · OVR ${p.overall}</span></div>
      <div class="btn-row" style="margin:4px 0">
        <select data-coachstat="${p.i}">${Object.entries(STAT_LABELS).map(([k, l]) => `<option value="${k}">${l}</option>`).join("")}</select>
        <button class="btn small" data-coachtrain="${p.i}">🏋️ Train (1 week)</button>
        ${p.rest ? `<span class="muted" style="font-size:12px;align-self:center">Fights again in ${p.rest}w</span>`
          : `<select data-coachplan="${p.i}">${PLANS.map((x) => `<option value="${x.id}">${x.name}</option>`).join("")}</select><button class="btn small primary" data-coachfight="${p.i}">🥊 Corner a fight</button>`}
      </div></div>`).join("")}
    ${C.prospects.length < 4 ? `<button class="btn small" data-coachrecruit>➕ Recruit a prospect ($3,000)</button>` : ""}`;
}

// ------------------------------------------------------------------ event cards

/** One bout as a line on the card: names, records, division, and the result once it's in. */
function boutRow(b, compact = false) {
  const r = b.result;
  const side = (x, won) => `<span class="cb-f ${won ? "won" : r && r.winner !== "draw" ? "lost" : ""}">${x.rank === 0 ? "🏆 " : x.rank > 0 ? `<em>#${x.rank}</em> ` : ""}${nm(x.name)}${compact ? "" : ` <small>${esc(x.record)}</small>`}</span>`;
  return `<div class="cb ${b.player ? "you" : ""} ${b.title ? "title" : ""}">
    <div class="cb-top"><span class="cb-slot">${b.slot}${b.title ? " · 🏆 Title" : ""}${b.rival ? " · ⚔ Your rival" : ""}</span><span class="muted">${esc(b.division)} · ${b.rounds} rds</span></div>
    <div class="cb-names">${side(b.a, r && r.winner === "a")}<span class="cb-vs">vs</span>${side(b.b, r && r.winner === "b")}</div>
    ${r ? `<div class="cb-res">${r.winner === "draw" ? "Draw" : nm((r.winner === "a" ? b.a : b.b).last) + " wins"} · ${esc(r.method)} · R${r.round} ${esc(r.time)}
      ${b.canWatch ? `<button class="btn small ghost" data-watch="${b.id}">▶ Watch</button>` : ""}</div>`
      : `<div class="cb-res muted">${b.player ? "Your fight" : state.card && state.card.simmed ? "Later tonight" : "Fight night"}</div>`}
  </div>`;
}

function awardsHtml(card) {
  if (!card.awards || !card.awards.length) return "";
  return `<div class="label">Bonuses</div><div class="awards">${card.awards.map((a) => `
    <div class="award"><span class="aw-ico">${a.icon}</span><div><b>${a.award}</b><div>${a.winners.map(nm).join(" & ")}</div>
      <div class="muted">${money(a.amount)}${a.both ? " each" : ""}</div></div></div>`).join("")}</div>`;
}

function renderCardModal(body) {
  const c = state.card;
  if (!c) return closeModal();
  const main = c.bouts.filter((b) => b.slot !== "Prelims"), pre = c.bouts.filter((b) => b.slot === "Prelims");
  body.innerHTML = `
    <div class="card-poster"><div class="cp-org">${esc(c.org)}</div><h1>${esc(c.name)}</h1>
      ${c.specialEvent ? `<div class="event-edition">✦ ${esc(c.specialEvent.name)} · exclusive gloves & octagon</div>` : ""}
      <div class="cp-main">${nm(c.bouts[0].a.last)} <span>vs</span> ${nm(c.bouts[0].b.last)}</div></div>
    ${c.done ? awardsHtml(c) : ""}
    ${c.media && c.media.ready ? `<button class="btn gold big" data-media>🎤 Fight-week media day</button>` : ""}
    <div class="label">Main card</div>${main.map((b) => boutRow(b)).join("")}
    ${pre.length ? `<div class="label">Prelims</div>${pre.map((b) => boutRow(b)).join("")}` : ""}`;
}

function mediaPresenterHtml() {
  return `<div class="media-presenter" id="mediaPresenterStage" role="img" aria-label="Adult ring-card presenter with a media day sign"></div>`;
}
function showMediaPresenter(card) {
  const host = $("mediaPresenterStage");
  if (host) mediaPresenterPreview = mountMediaPresenter(host, { org: card.org, event: card.specialEvent || null });
}

/** Media day: the whole card faces the press, then you take questions and face off. */
function renderMediaModal(body) {
  const c = state.card, M = c && c.media;
  if (!M) return closeModal();
  if (M.done && M.result) {
    const R = M.result;
    body.innerHTML = `<h1>🎤 ${esc(c.name)} media day</h1>${mediaPresenterHtml()}
      ${R.lines.map((l) => `<div class="mq">${esc(l.q)}</div>
        <div class="quote"><span class="who">${nm(state.fighter.displayName)}</span>"${esc(l.you)}"</div>
        <div class="quote them"><span class="who">${nm(state.scheduled ? state.scheduled.opponent.displayName : "")}</span>"${esc(l.them)}"</div>`).join("")}
      <div class="faceoff">🥊 FACE-OFF · ${esc(R.faceText)}</div>
      <ul class="news">${R.effects.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
      <button class="btn primary big" data-closemodal>Done</button>`;
    showMediaPresenter(c);
    return;
  }
  const picks = modal.picks || (modal.picks = []);
  const step = picks.length;
  const quotes = M.quotes.map((q) => `<div class="mquote ${q.tone}"><b>${nm(q.who)}</b> on ${nm(q.vs)}: "${esc(q.text)}"</div>`).join("");
  let ask;
  if (step < M.questions.length) {
    const Q = M.questions[step];
    ask = `<div class="mq">Question ${step + 1}/${M.questions.length} — <b>${esc(Q.q)}</b></div>
      <div class="tones">
        <button class="btn" data-mediaans="respect">🤝 Respectful<span class="sub">"${esc(Q.respect)}"</span></button>
        <button class="btn" data-mediaans="confident">😎 Confident<span class="sub">"${esc(Q.confident)}"</span></button>
        <button class="btn primary" data-mediaans="trash">🔥 Trash talk<span class="sub">"${esc(Q.trash)}"</span></button>
      </div>`;
  } else {
    ask = `<div class="mq"><b>The face-off.</b> You and ${nm(state.scheduled.opponent.displayName)} step up, nose to nose.</div>
      <div class="tones">
        <button class="btn" data-faceoff="nod">🤜🤛 Touch fists<span class="sub">Respect, +1 fame</span></button>
        <button class="btn" data-faceoff="stare">👁️ Death stare<span class="sub">Don't blink, +2 fame</span></button>
        <button class="btn primary" data-faceoff="shove">💢 Shove<span class="sub">Huge hype, they get fired up, might be fined</span></button>
      </div>`;
  }
  body.innerHTML = `<h1>🎤 ${esc(c.name)} media day</h1>${mediaPresenterHtml()}
    <p class="muted">Every fighter on the card is here. The cameras are rolling.</p>
    <div class="mquotes">${quotes}</div>
    ${ask}`;
  showMediaPresenter(c);
}

// ---------- watching another bout on the card

let watching = null; // { f, stop }

async function watchBout(f, back = "card") {
  if (!stage || (state.fight && !state.fight.finished)) return;
  watching = { f, stop: false, back };
  const screen = $("fightScreen");
  screen.classList.remove("hidden");
  screen.classList.add("spectating");
  closeModal();
  stage.show($("arenaStage"), "arena");
  stage.arena.load({ ...f, logs: [], round: 0, finished: false }, { playerLook: f.player.look, weightClass: f.wc, sponsors: [] });
  const fresh = (c) => ({ ...c, health: 100, stamina: 100, sig: 0, td: 0, kd: 0 });
  renderFightHead({ ...f, round: 1, player: fresh(f.player), opponent: fresh(f.opponent) });
  $("fightLog").innerHTML = `<div class="ev round">${esc(f.cardName)} · ${esc(f.slot)} · ${esc(f.division)}</div>`;
  $("fightControls").innerHTML = `<div class="btn-row" style="justify-content:center"><button class="btn big" data-skipwatch>Skip ▶▶</button><button class="btn big ghost" data-stopwatch>✕ Back to the card</button></div>`;
  caption({ text: `${f.cardName}: ${f.player.name} vs ${f.opponent.name}`, side: "n", type: "round" });
  await presentation.runWalkouts(f, true);
  if (!watching || watching.f !== f) return;
  $("fightControls").innerHTML = `<div class="btn-row" style="justify-content:center"><button class="btn big" data-skipwatch>Skip ▶▶</button><button class="btn big ghost" data-stopwatch>✕ Back</button></div>`;
  audio.music("fight", 0.8);
  for (const e of f.logs.flat()) {
    if (!watching || watching.f !== f) return;
    $("fightLog").appendChild(eventEl(e, !watching.stop));
    if (watching.stop) continue;
    caption(e);
    const pause = stage.arena.play(e, f);
    updateFightBars(e);
    scrollLog();
    await new Promise((r) => setTimeout(r, pause / speed));
  }
  if (!watching || watching.f !== f) return;
  stage.arena.restore(f);
  updateFightBars(f.logs.flat().slice(-1)[0] || {});
  scrollLog();
  audio.music(null);
  const w = f.winner === "player" ? f.player.name : f.winner === "opponent" ? f.opponent.name : null;
  $("fightControls").innerHTML = `<div class="result-banner"><div class="rw W" style="font-size:22px">${w ? nm(w) + " wins" : "Draw"}</div>
    <div class="rd"><b>${esc(f.method)}</b> · R${f.endRound} ${esc(f.endTime)}</div></div>
    <button class="btn primary big" data-stopwatch>Back to the card</button>`;
}

async function stopWatching() {
  presentation.cancelWalkouts();
  const back = watching ? watching.back : "card";
  watching = null;
  $("fightScreen").classList.remove("spectating");
  await api("card/watch", { id: "" });
  if (!state.fight) $("fightScreen").classList.add("hidden");
  render();
  updateMusic();
  if (back) openModal(back);
}

// ------------------------------------------------------------------ fight screen

function allEvents(f) {
  return f.logs.flat();
}

function renderFightScreen() {
  if (watching || presentation.replaying) return;
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
    caption(null);
    $("fightLog").innerHTML = f.round === 0 ? introHtml(f) : "";
    events.forEach((e) => { if (!e.quiet) $("fightLog").appendChild(eventEl(e, false)); });
    if (f.round === 0) setTimeout(() => startTour("fight"), 1500);
    fightShown = events.length;
    headSnapshot = f;
    renderFightHead(f);
    renderFightControls(f);
    scrollLog();
    if (f.round === 0) presentation.runWalkouts(f);
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

/** A live, hands-on round: one beat after another until the bell, whatever you press goes next. */
async function realtimeLoop() {
  if (rt.running) return;
  rt.running = true;
  try {
    while (!rt.stop && state && state.fight && state.fight.manual && !state.fight.finished && !$("fightScreen").classList.contains("hidden")) {
      if (rt.paused) {
        await new Promise((r) => setTimeout(r, 200));
        continue;
      }
      const m = state.fight.manual;
      const action = rt.pending && m.actions.includes(rt.pending) ? rt.pending : IDLE_ACTION[m.where];
      rt.pending = null;
      const before = fightShown;
      if (!(await api("fight/turn", { action, quick: true }))) break;
      const f = state.fight;
      const events = allEvents(f).slice(before);
      const t0 = performance.now();
      for (const e of events) {
        fightShown++;
        if (!e.quiet) {
          $("fightLog").appendChild(eventEl(e, true));
          caption(e);
        }
        let pause = stage ? stage.arena.play(e, f) : 400;
        updateFightBars(e);
        if (e.type === "kd" || e.type === "finish" || e.type === "round") pause = Math.max(pause, 1400);
        else pause = Math.min(pause, 650);
        await new Promise((r) => setTimeout(r, pause / speed));
      }
      scrollLog();
      // one beat lasts at least this long, so the fight has a rhythm you can play to
      const left = 950 / speed - (performance.now() - t0);
      if (left > 0) await new Promise((r) => setTimeout(r, left));
      headSnapshot = f;
      renderFightHead(f);
      renderFightControls(f);
      if (f.finished) {
        audio.music(null);
        audio.sting((state.lastResult || {}).result);
      }
    }
  } finally {
    rt.running = false;
    rt.pending = null;
    updateMusic();
    if (state && state.fight) {
      renderFightHead(state.fight);
      renderFightControls(state.fight);
    }
  }
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
  // a hands-on round has opened: from here it runs live
  if (f.manual && !f.finished) realtimeLoop();
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
      <div class="cn">${nm(c.name)}</div>
      <div class="cm">${c.record} · Sig <span class="sig">${c.sig}</span> · TD ${c.td}${c.kd ? " · KD " + c.kd : ""}${c.cut ? ` · <span class="cutmark">${"🩸".repeat(c.cut)} cut</span>` : ""}</div>
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

// hands-on fighting: every choice, grouped as the controls show them
const MOVE_ACTIONS = [["in", "⬆️", "Step in", "W"], ["out", "⬇️", "Back off", "S"], ["circle", "🔄", "Circle", "A"]];
const ATTACK_ACTIONS = [["jab", "👊", "Jab", "J"], ["cross", "🥊", "Cross", "K"], ["hook", "🪝", "Hook", "L"], ["uppercut", "⤴️", "Uppercut", "U"],
  ["leg", "🦵", "Leg kick", "I"], ["body", "🦶", "Body kick", "O"], ["head", "💥", "Head kick", "P"], ["flashy", "🌀", "Spinning attack", "Y"], ["takedown", "🤼", "Takedown", "T"]];
const DODGE_ACTIONS = [["slip", "↪️", "Slip", "Q"], ["block", "🛡️", "Block", "E"], ["check", "🦿", "Check kick", "R"], ["sprawl", "🧱", "Sprawl", "F"]];
const TOP_ACTIONS = [["gnp", "👊", "Ground & pound", "J"], ["pass", "➡️", "Pass guard", "K"], ["sub", "🔒", "Submission", "L"], ["standup", "🧍", "Stand up", "S"]];
const BOTTOM_ACTIONS = [["sweep", "🔃", "Sweep", "J"], ["getup", "🧍", "Get up", "K"], ["guardsub", "🔒", "Submission", "L"], ["tieup", "🛡️", "Tie up", "E"]];
// what your fighter does when you don't press anything: stay light on the feet, hold position, cover up
const IDLE_ACTION = { stand: "circle", top: "pass", bottom: "tieup" };
// real-time fighting: the next move you've queued, and whether the loop is running or paused
const rt = { pending: null, running: false, paused: false };

// between live rounds: a short corner break, then the bell rings by itself
const CORNER_SECONDS = 8;
let corner = null; // { round, until, timer }
function cornerLeft() {
  return corner ? Math.max(0, Math.ceil((corner.until - performance.now()) / 1000)) : CORNER_SECONDS;
}
function startCorner(f) {
  if (corner && corner.round === f.round) return;
  if (corner) clearInterval(corner.timer);
  corner = { round: f.round, until: performance.now() + CORNER_SECONDS * 1000, lastTick: performance.now() };
  corner.timer = setInterval(async () => {
    const cur = state && state.fight;
    tickCornerClock(corner, performance.now(), presentation.replaying);
    if (presentation.replaying) return;
    if (!cur || cur.finished || cur.manual || cur.round !== corner.round || fightMode !== "manual" || $("fightScreen").classList.contains("hidden")) {
      clearInterval(corner.timer);
      return;
    }
    const el = $("cornerCount");
    if (el) el.textContent = "next round in " + cornerLeft() + "s";
    if (cornerLeft() <= 0 && !playing && !rt.running) {
      clearInterval(corner.timer);
      if (await api("fight/manual", { touch: touchGloves })) render();
    }
  }, 250);
}
const ACTION_TIPS = {
  in: "Close the distance: punches land more, kicks less", out: "Get out of range and catch your breath", circle: "Reset off the fence, recover a little",
  jab: "Fast and safe", cross: "Solid power", hook: "Big damage, knockdown power", uppercut: "Best up close",
  leg: "Slows them down over time", body: "Drains their stamina", head: "Huge if it lands, easy to see coming", flashy: "Highlight reel or air",
  takedown: "Take it to the mat", slip: "Beats punches, sets up a counter", block: "Halves damage from strikes", check: "Beats leg kicks, hurts them",
  sprawl: "Beats takedowns, tires them out", gnp: "Strikes from on top", pass: "Improve your position", sub: "Go for the finish",
  standup: "Let them up to strike", sweep: "Reverse the position", getup: "Back to the feet", guardsub: "Choke or armbar from your back",
  tieup: "Smother their strikes and subs",
};
let fightMode = "manual";
try { fightMode = localStorage.getItem("cc3d_fightmode") || "manual"; } catch { /* default */ }

function manualPanel(f) {
  const m = f.manual;
  const left = Math.max(0, 300 - (f.clock || 0));
  const btn = ([id, icon, label, key]) => `<button class="btn act-btn ${rt.pending === id ? "queued" : ""}" data-turn="${id}" title="${esc(ACTION_TIPS[id] || "")} (${key})">${icon} ${label} <kbd>${key}</kbd><span class="sub">${esc(ACTION_TIPS[id] || "")}</span></button>`;
  const group = (title, list) => `<div class="act-group"><div class="label">${title}</div><div class="act-grid">${list.map(btn).join("")}</div></div>`;
  const where = m.where === "stand" ? (m.range === "in" ? "Inside, in punching range" : "Outside, at kicking range")
    : (m.where === "top" ? "You're on top" : "You're on your back") + " · " + ({ guard: "guard", half: "half guard", side: "side control", mount: "full mount", back: "back control", legs: "leg lock", headlock: "headlock" }[m.pos] || m.pos);
  return `
    <div class="prompt rt-head"><span class="live-dot ${rt.paused ? "paused" : ""}"></span> LIVE · Round ${f.round} · <b>${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}</b> · ${where}
      <button class="btn small ghost" data-rtpause>${rt.paused ? "▶️ Resume" : "⏸ Pause"}</button></div>
    <div class="rt-hint">The fight doesn't wait: tap or press a key any time and your fighter throws it on the next beat.</div>
    ${m.where === "stand" ? group("Attack", ATTACK_ACTIONS) + group("Dodge", DODGE_ACTIONS) + group("Move", MOVE_ACTIONS)
      : group(m.where === "top" ? "On top" : "On your back", m.where === "top" ? TOP_ACTIONS : BOTTOM_ACTIONS)}
    <div class="btn-row" style="justify-content:center;margin-top:8px"><button class="btn small ghost" data-plan="BALANCED">⏩ Sim the rest of this round</button></div>`;
}

function renderFightControls(f) {
  const replayButton = $("instantReplayBtn");
  if (replayButton) replayButton.classList.toggle("hidden", !(f?.manual && !f.finished && !presentation.walkout && !presentation.replaying && highlightClips(f).length));
  const el = $("fightControls");
  const specialControls = presentation.controlsHtml();
  if (specialControls) { el.innerHTML = specialControls; return; }
  if (f && f.manual && !f.finished) {
    // Keep live buttons mounted between beats so pointer clicks are not interrupted.
    const signature = JSON.stringify([f.round, f.manual.where, f.manual.range, f.manual.pos, rt.paused]);
    if (el.dataset.manualSignature === signature && el.querySelector(".rt-head")) {
      const left = Math.max(0, 300 - (f.clock || 0));
      el.querySelector(".rt-head b").textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
      el.querySelectorAll("[data-turn]").forEach(button => button.classList.toggle("queued", button.dataset.turn === rt.pending));
    } else {
      el.innerHTML = manualPanel(f);
      el.dataset.manualSignature = signature;
    }
    return;
  }
  if (playing) {
    el.innerHTML = `<button class="btn big" data-skip>Skip ▶▶</button>`;
    return;
  }
  if (!f.finished && f.manual) {
    el.innerHTML = manualPanel(f);
    return;
  }
  if (!f.finished) {
    if (fightMode === "manual" && f.round > 0) startCorner(f);
    el.innerHTML = `
      <div class="mode-row"><button class="btn small ${fightMode === "manual" ? "gold" : "ghost"}" data-fightmode="manual">🎮 Fight it yourself</button>
        <button class="btn small ${fightMode === "plan" ? "gold" : "ghost"}" data-fightmode="plan">📋 Game plan (auto)</button></div>
      <div class="prompt">${f.round === 0 ? (fightMode === "manual" ? "You call every move: attack, dodge or move, one exchange at a time." : "Choose your game plan for round 1") : fightMode === "manual" ? `Corner advice between rounds. Ready for round ${f.round + 1}?` : `Corner advice between rounds — game plan for round ${f.round + 1}?`}
        ${f.scout ? `<br><span class="scout">🧠 Coach: "They're going to ${esc(PLAN_NAMES[f.scout])} this round."</span>` : ""}
        ${f.oppFiredUp && f.round === 0 ? `<br><span style="color:#ff6b6e">Your opponent is fired up after the trash talk.</span>` : ""}</div>
      ${cornerPanelHtml(f)}
      ${f.round > 0 && highlightClips(f).length ? '<button class="btn small" data-highlights>📺 Round highlights</button>' : ""}
      ${f.round === 0 ? `<div class="touch-row"><span>Before the bell:</span>
        <button class="btn small ${touchGloves ? "gold" : ""}" data-touch="1">🤜🤛 Touch gloves</button>
        <button class="btn small ${touchGloves ? "" : "primary"}" data-touch="0">🙅 Refuse</button></div>` : ""}
      ${fightMode === "manual" ? `<button class="btn primary big" data-manual>🔔 ${f.round === 0 ? "Start the fight" : `Start round ${f.round + 1} now <span class="sub" id="cornerCount">next round in ${cornerLeft()}s</span>`}</button>` : `<div class="plans">
        ${PLANS.map((p) => `<button class="btn" data-plan="${p.id}">${p.name}<span class="sub">${p.desc}</span></button>`).join("")}
      </div>`}`;
    return;
  }
  const r = state.lastResult || {};
  const word = { W: "VICTORY", L: "DEFEAT", D: "DRAW" }[r.result] || "";
  el.innerHTML = `
    <div class="result-banner">
      <div class="rw ${r.result}">${word}</div>
      <div class="rd"><b>${esc(f.method)}</b> · R${f.endRound} ${esc(f.endTime)}${f.cards ? " · " + f.cards.join(", ") : ""}</div>
      <div class="rd">Paid <b>${money(r.pay || 0)}</b>${r.perfBonus ? ` (incl. ${money(r.perfBonus)} in bonuses)` : ""} · Fame ${r.fameDelta >= 0 ? "+" : ""}${r.fameDelta} · Record <b>${esc(r.record)}</b></div>
      ${(r.bonuses || []).map((b) => `<div class="rd bonus-win">${b.icon} ${esc(b.award)}! +${money(b.amount)}</div>`).join("")}
      ${r.ppv ? `<div class="rd">📺 ${r.ppv.buys.toLocaleString("en-US")} pay-per-view buys${r.ppv.share ? ` · your share <b>${money(r.ppv.share)}</b>` : " · no PPV points in your contract"}</div>` : ""}
      ${r.weighIn && !r.weighIn.made ? `<div class="rd" style="color:var(--red)">⚖️ Missed weight (${esc(r.weighIn.weight)} lbs)</div>` : ""}
      ${r.careerNote ? `<div class="rd" style="margin-top:4px;color:var(--gold)"><b style="color:inherit">${esc(r.careerNote)}</b></div>` : ""}
      ${r.injuryNote ? `<div class="rd" style="color:var(--red)">${esc(r.injuryNote)}</div>` : ""}
      ${(r.trophies || []).map((t) => `<div class="rd trophy-unlock">${t.icon} Trophy unlocked — <b style="color:inherit">${esc(t.name)}</b>: ${esc(t.desc)}</div>`).join("")}
    </div>
    <div class="btn-row" style="justify-content:center"><button class="btn" data-highlights>📺 Highlights & replays</button>${state.card ? `<button class="btn" data-card>📋 ${esc(state.card.name)} results & bonuses</button>` : ""}
    <button class="btn primary big" data-closefight>Continue</button></div>`;
}

// ------------------------------------------------------------------ events

document.addEventListener("click", async (ev) => {
  const b = ev.target.closest("button, [data-fighter]");
  if (!b || b.disabled) return;
  const d = b.dataset;
  if (d.skipwalkout !== undefined) { presentation.skipWalkouts(); return; }
  if (d.stopreplay !== undefined) { presentation.stopReplay(); return; }
  if (d.replayrate) { presentation.setReplayRate(d.replayrate); return; }
  if (d.walkoutsettings !== undefined) return openModal("walkout");
  if (d.savewalkout !== undefined) {
    const values = Object.fromEntries(Object.keys(WALKOUT_OPTIONS).map(key => [key, $("walkout-" + key).value]));
    if (await api("walkout/save", values)) { closeModal(); render(); } return;
  }
  if (d.filmroom !== undefined) return openModal("filmroom");
  if (d.trophies !== undefined) return openModal("trophies");
  if (d.studyfilm !== undefined) { if (await api("film/study")) render(); return; }
  if (d.studyfootage !== undefined) { const f = state.features?.film?.footage?.[Number(d.studyfootage)]?.fight; if (f) openModal("highlights", { fight: f }); return; }
  if (d.cornerchoice) { if (await api("fight/corner", { choice: d.cornerchoice })) { if (stage) stage.arena.restore(state.fight); renderFightHead(state.fight); renderFightControls(state.fight); } return; }
  if (d.highlights !== undefined) { const f = state.fight || state.features?.lastFight; if (f) openModal("highlights", { fight: f }); return; }
  if (d.replayclip || d.reel !== undefined) { const f = modal?.fight; if (f) { const clips = highlightClips(f); const chosen = d.reel !== undefined ? clips : clips.filter(clip => clip.id === d.replayclip); closeModal(); presentation.playReplay(f, chosen); } return; }
  if (d.instantreplay !== undefined) { const f = state.fight; if (f) { const clip = highlightClips(f).slice(-1)[0]; if (clip) presentation.playReplay(f, [clip]); } return; }
  if (d.train) return act("action", { type: "train", stat: d.train });
  if (d.action) return act("action", { type: d.action });
  if (d.accept !== undefined) return act("accept", { index: d.accept });
  if (d.upgrade !== undefined) return act("upgrade");
  if (d.startfight !== undefined) return act("fight/start");
  if (d.plan) {
    if (playing || presentation.walkout || presentation.replaying) return;
    if (rt.running) {
      // finishing a live round on autopilot: let the current beat end first
      rt.stop = true;
      while (rt.running) await new Promise((r) => setTimeout(r, 50));
      rt.stop = false;
    }
    if (await api("fight/round", { plan: d.plan, touch: touchGloves })) render();
    return;
  }
  if (d.skip !== undefined) { skipPlayback = true; return; }
  if (d.fightmode) {
    fightMode = d.fightmode;
    try { localStorage.setItem("cc3d_fightmode", fightMode); } catch { /* ignore */ }
    return renderFightControls(state.fight);
  }
  if (d.manual !== undefined) {
    if (playing || presentation.walkout || presentation.replaying) return;
    if (await api("fight/manual", { touch: touchGloves })) render();
    return;
  }
  if (d.turn) {
    // queue it for the next beat
    rt.pending = d.turn;
    document.querySelectorAll("[data-turn]").forEach((x) => x.classList.toggle("queued", x.dataset.turn === d.turn));
    if (!rt.running && state.fight && state.fight.manual) realtimeLoop();
    return;
  }
  if (d.rtpause !== undefined) {
    rt.paused = !rt.paused;
    return renderFightControls(state.fight);
  }
  if (d.sound !== undefined) { audio.toggle(); syncSoundButtons(); updateMusic(); if (modal && modal.kind === "settings") renderModal(); return; }
  if (d.settings !== undefined) return openModal("settings");
  if (d.soundset !== undefined) {
    audio.setOn(d.soundset === "on");
    syncSoundButtons();
    updateMusic();
    return renderModal();
  }
  if (d.quality) {
    if (stage) stage.setQuality(d.quality);
    return renderModal();
  }
  if (d.fps !== undefined) {
    gfx.fps = Number(d.fps);
    saveGfx();
    applyGfx();
    return renderModal();
  }
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
  if (d.card !== undefined) return openModal("card");
  if (d.camp) return act("camp", { kind: d.camp });
  if (d.cut) return act("cut", { kind: d.cut });
  if (d.nego) {
    if (await api("negotiate", { org: d.org, ask: d.nego })) render();
    return;
  }
  if (d.legacy !== undefined) return openModal("legacy");
  if (d.gymopen !== undefined) {
    const name = prompt("Name your gym:", state.fighter.name.split(" ").pop() + " MMA");
    if (name !== null) act("gym/open", { name });
    return;
  }
  if (d.coachrecruit !== undefined) return act("coach", { action: "recruit" });
  if (d.coachtrain !== undefined) return act("coach", { action: "train", i: d.coachtrain, extra: document.querySelector(`[data-coachstat="${d.coachtrain}"]`).value });
  if (d.coachfight !== undefined) {
    if (await api("coach", { action: "fight", i: d.coachfight, extra: document.querySelector(`[data-coachplan="${d.coachfight}"]`).value })) render();
    return;
  }
  if (d.media !== undefined) return openModal("media", { picks: [] });
  if (d.mediaans) {
    modal.picks.push(d.mediaans);
    return renderModal();
  }
  if (d.faceoff) {
    if (await api("card/media", { answers: modal.picks.join(","), faceoff: d.faceoff })) { modal.picks = null; render(); }
    return;
  }
  if (d.watch !== undefined) {
    const back = /^h/.test(d.watch) ? "legacy" : d.watch === "c" ? null : "card";
    if (await api("card/watch", { id: d.watch })) {
      if (state.watch) watchBout(state.watch, back);
      else toast("That bout can't be replayed right now.", true);
    }
    return;
  }
  if (d.skipwatch !== undefined) { if (watching) watching.stop = true; return; }
  if (d.stopwatch !== undefined) return stopWatching();
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
  if (d.enter) return d.enter === "exit" ? leavePlace() : enterPlace(d.enter);
  if (d.leave !== undefined) return leavePlace();
  if (d.placemenu !== undefined) return stage && stage.world.inside ? openModal("place", { place: stage.world.inside.id }) : null;
  if (d.phone !== undefined) return openModal("phone", { app: null });
  if (d.phoneapp !== undefined) {
    const a = d.phoneapp;
    if (a === "settings") return openModal("settings");
    if (a === "rankings") {
      await api("promo/view", { id: state.orgKey });
      return openModal("divisions", { dtab: state.weightClass });
    }
    modal.app = a || null;
    return renderModal();
  }
  if (d.goplace) {
    if (!worldOpen()) openWorld();
    return enterPlace(d.goplace);
  }
  if (d.music !== undefined) {
    const v = audio.volumes();
    if (!audio.isOn()) audio.setOn(true);
    audio.setVolume("music", v.music > 0 ? 0 : 0.8);
    syncSoundButtons();
    updateMusic();
    return renderModal();
  }
  if (d.meetPhone) {
    if (!state.rival) return;
    if (await api("fighter/meet", { id: state.rival.id, type: d.meetPhone })) render();
    return;
  }
  if (d.drive !== undefined) {
    if (stage) stage.world.toggleDrive();
    return renderWorldBottom();
  }
  if (d.life) {
    const params = { type: d.life };
    for (const k of ["kind", "id", "level", "region", "design", "who"]) if (d[k] !== undefined) params[k] = d[k];
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
  if (d.alldivs !== undefined) {
    await api("promo/view", { id: state.orgKey });
    return openModal("divisions", { dtab: state.weightClass });
  }
  if (d.dorg) {
    if (await api("promo/view", { id: d.dorg })) renderModal();
    return;
  }
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
  presentation.cancelAll();
  $("fightScreen").classList.add("hidden");
}

$("modal").addEventListener("click", (ev) => {
  if (ev.target.id === "modal") closeModal();
});

// real-time fight controls on the keyboard
document.addEventListener("keydown", (ev) => {
  if (presentation.walkout || presentation.replaying) return;
  const f = state && state.fight;
  if (!f || !f.manual || f.finished || $("fightScreen").classList.contains("hidden")) return;
  if (/INPUT|TEXTAREA|SELECT/.test((ev.target && ev.target.tagName) || "")) return;
  if (ev.key === " " || ev.key === "Escape") {
    rt.paused = !rt.paused;
    renderFightControls(f);
    ev.preventDefault();
    return;
  }
  const list = f.manual.where === "stand" ? [...ATTACK_ACTIONS, ...DODGE_ACTIONS, ...MOVE_ACTIONS, ["circle", "", "", "D"]] : f.manual.where === "top" ? TOP_ACTIONS : BOTTOM_ACTIONS;
  const hit = list.find((a) => a[3] === ev.key.toUpperCase());
  if (!hit) return;
  ev.preventDefault();
  rt.pending = hit[0];
  document.querySelectorAll("[data-turn]").forEach((x) => x.classList.toggle("queued", x.dataset.turn === hit[0]));
  if (!rt.running) realtimeLoop();
});

// settings: volume sliders, language, FPS counter
document.addEventListener("input", (ev) => {
  const k = ev.target.dataset && ev.target.dataset.vol;
  if (!k) return;
  audio.setVolume(k, ev.target.value / 100);
  const out = document.querySelector(`[data-volval="${k}"]`);
  if (out) out.textContent = ev.target.value + "%";
});
document.addEventListener("change", (ev) => {
  if (ev.target.id === "presentation15Plus") {
    const enabled = setPresentation15Plus(ev.target.checked);
    if (stage) stage.arena.setPresentation15Plus(enabled);
    renderModal();
    return;
  }
  if (ev.target.id === "langSelect") {
    setLang(ev.target.value);
    renderModal();
  }
  if (ev.target.id === "fpsToggle") {
    gfx.meter = ev.target.checked;
    saveGfx();
    applyGfx();
  }
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
