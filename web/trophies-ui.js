import { trophiesJson } from "./achievements.js";
const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
export function trophiesHtml(state) {
  const T = state?.trophies || trophiesJson(null);
  const groups = [];
  for (const item of T.items) {
    let g = groups.find((x) => x.name === item.group);
    if (!g) groups.push((g = { name: item.group, items: [] }));
    g.items.push(item);
  }
  return `<h1>🏆 ${esc("Trophies")}</h1>
    <p class="muted">${esc(`Earned ${T.earned} of ${T.total}. Trophies are saved with the career.`)}</p>
    ${groups.map((g) => `<div class="label">${esc(g.name)} <span style="float:right">${g.items.filter((i) => i.earned).length}/${g.items.length}</span></div>
      <div class="trophy-grid">${g.items.map((i) => `<article class="trophy ${i.earned ? "earned" : "locked"}" title="${esc(i.earned ? i.date : "")}">
        <span class="trophy-icon">${i.earned ? i.icon : "🔒"}</span>
        <b>${esc(i.name)}</b>
        <small>${esc(i.desc)}</small>
        ${i.earned ? '<span class="badge gold">Earned</span>' : '<span class="badge">Locked</span>'}
      </article>`).join("")}</div>`).join("")}`;
}
