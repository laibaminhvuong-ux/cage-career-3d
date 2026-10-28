import { WALKOUT_OPTIONS, walkoutPreferences, highlightClips } from "./fightfeatures.js";
const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
export function featureLinks(state) {
  return `<div class="feature-links btn-row"><button class="btn small" data-walkoutsettings ${state.fight ? "disabled" : ""}>🎵 Walkout & celebration</button>
    ${state.scheduled ? `<button class="btn small" data-filmroom>🎬 Opponent film room</button>` : ""}
    ${state.features?.lastFight ? `<button class="btn small" data-highlights>📺 Last fight highlights</button>` : ""}</div>`;
}
export function walkoutSettingsHtml(state) {
  const value = walkoutPreferences(state.features?.walkout);
  return `<h1>Your walkout</h1><p class="muted">Both fighters enter one at a time, before the bell. Anyone can skip the entrances.</p>
    <div class="feature-form">${Object.entries(WALKOUT_OPTIONS).map(([key, options]) => `<label>${esc(key[0].toUpperCase() + key.slice(1))}<select id="walkout-${key}">${Object.entries(options).map(([id, label]) => `<option value="${id}" ${value[key] === id ? "selected" : ""}>${esc(label)}</option>`).join("")}</select></label>`).join("")}</div>
    <p class="muted">Music is synthesized in-game. Sound follows your audio settings.</p><button class="btn primary big" data-savewalkout>Save walkout</button>`;
}
export function filmRoomHtml(state) {
  const f = state.features?.film;
  if (!f) return '<h1>Opponent film room</h1><p class="muted">Book a fight to study your opponent.</p>';
  const stats = list => list.map(s => `<span class="film-stat">${esc(s.key)} <b>${s.value}</b></span>`).join("");
  return `<h1>🎬 ${esc(f.name)}: film room</h1><p class="muted">${esc(f.style)} · ${esc(f.basis)}</p>
    ${f.studied ? `<div class="label">Strengths</div><div class="btn-row">${stats(f.strongest)}</div><div class="label">Areas to test</div><div class="btn-row">${stats(f.weakest)}</div>` : ""}
    <div class="feature-note">${esc(f.advice)}</div>
    ${f.studied ? '<p class="badge gold">Round-plan scouting unlocked for this booking</p>' : `<button class="btn primary big" data-studyfilm ${f.canStudy ? "" : "disabled"}>Study opponent <span class="sub">1 week · 10 energy</span></button>`}
    ${f.footage.length ? `<div class="label">Archived fights</div>${f.footage.map(b => `<article class="film-bout"><b>${esc(b.result)} · ${esc(b.opponent)}</b><div class="muted">${esc(b.event)} · ${esc(b.method)}</div><div>${b.moves.map(([move, count]) => `${esc(move)} ×${count}`).join(" · ") || "No labeled techniques in this footage"}</div><small>${b.takedowns} takedowns · ${b.subs} submission attempts</small>${b.fight ? `<button class="btn small" data-studyfootage="${f.footage.indexOf(b)}">▶ Watch footage highlights</button>` : ""}</article>`).join("")}` : '<p class="muted">No archived fights for this opponent yet. Scouting is based on their style and attributes; footage will accumulate as events finish.</p>'}`;
}
export function cornerPanelHtml(fight) {
  const c = fight?.corner;
  if (!c || c.selected) return "";
  return `<div class="corner-work"><div class="label">Your corner · one choice this break${c.cut ? ` · bleeding level ${c.cut}` : ""}</div><div class="corner-choices">${Object.entries(c.choices).map(([id, choice]) => `<button class="btn" data-cornerchoice="${id}">${choice.icon} ${esc(choice.name)}<span class="sub">${esc(choice.detail)}</span></button>`).join("")}</div><p class="muted">Choose before the next bell. The normal corner recovery still applies.</p></div>`;
}
export function highlightShelfHtml(fight) {
  const clips = highlightClips(fight);
  return `<h1>📺 Fight highlights</h1><p class="muted">${esc(fight?.player?.name)} vs ${esc(fight?.opponent?.name)} · Replays never change the result.</p>
    ${clips.length ? `<button class="btn primary big" data-reel>▶ Play highlight reel</button><div class="highlight-list">${clips.map(clip => `<article class="highlight-card"><b>${esc(clip.label)} · R${clip.round} ${esc(clip.clock)}</b><p>${esc(clip.text)}</p><button class="btn small" data-replayclip="${esc(clip.id)}">▶ Replay</button></article>`).join("")}</div>` : '<p class="muted">No exchanges to replay yet.</p>'}`;
}
