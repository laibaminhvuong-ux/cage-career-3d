// Fight presentation and preparation helpers. No mini-games or event customization.
export class FeatureError extends Error {}
export const WALKOUT_OPTIONS = {
  music: { anthem: "Arena anthem", thunder: "Heavy drums", neon: "Neon synth" },
  lighting: { crimson: "Crimson", blue: "Electric blue", gold: "Championship gold", violet: "Violet" },
  entrance: { focused: "Focused walk", bounce: "Shadowbox", salute: "Salute the crowd" },
  celebration: { triumph: "Arms raised", bow: "Respectful bow", dance: "Victory dance" },
};
export const WALKOUT_COLORS = { crimson: "#ed4250", blue: "#49a2ff", gold: "#f3c655", violet: "#bb7eff" };
export const DEFAULT_WALKOUT = { music: "anthem", lighting: "crimson", entrance: "focused", celebration: "triumph" };
export function walkoutPreferences(value = {}) {
  return Object.fromEntries(Object.keys(DEFAULT_WALKOUT).map(k => [k, Object.prototype.hasOwnProperty.call(WALKOUT_OPTIONS[k], value?.[k]) ? value[k] : DEFAULT_WALKOUT[k]]));
}
export function npcWalkout(name = "", style = "") {
  let h = 0; for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return { music: ["thunder", "neon", "anthem"][h % 3], lighting: ["blue", "violet", "gold"][h % 3], entrance: style === "Striker" ? "bounce" : h % 2 ? "salute" : "focused", celebration: "triumph" };
}
export function saveWalkout(career, input) {
  if (career.fight) throw new FeatureError("Finish your fight before changing your walkout.");
  const next = {};
  for (const key of Object.keys(DEFAULT_WALKOUT)) {
    if (!Object.prototype.hasOwnProperty.call(WALKOUT_OPTIONS[key], input[key])) throw new FeatureError("Pick a valid " + key + ".");
    next[key] = input[key];
  }
  career.walkoutPreferences = next;
  return "Walkout and celebration saved for your next fight.";
}

export const CORNER_CHOICES = {
  recover: { name: "Recover stamina", detail: "+12 stamina", icon: "💧" },
  cutman: { name: "Treat cuts", detail: "Reduce bleeding and recover 3 health", icon: "🩹" },
  tactics: { name: "Tactical advice", detail: "+2 striking, wrestling and grappling next round only", icon: "🧠" },
};
export function tickCornerClock(corner, now, paused) {
  const elapsed = Math.max(0, now - (corner.lastTick ?? now));
  corner.lastTick = now;
  if (paused) corner.until += elapsed;
}
export function cornerState(fight) {
  if (!fight || fight.finished || fight.manual || fight.round <= 0 || fight.round >= fight.rounds || fight.clock < 300) return null;
  return { round: fight.round, selected: fight.cornerChoices?.[fight.round] || null, choices: CORNER_CHOICES, cut: fight.p.cut || 0 };
}
export function chooseCorner(career, choice) {
  const f = career.fight, state = cornerState(f);
  if (!state) throw new FeatureError("Corner choices are available only between rounds.");
  if (!Object.prototype.hasOwnProperty.call(CORNER_CHOICES, choice)) throw new FeatureError("Pick a corner treatment.");
  if (state.selected) throw new FeatureError("Your corner has already helped this break.");
  (f.cornerChoices ||= {})[f.round] = choice;
  if (choice === "recover") f.p.stamina = Math.min(100, f.p.stamina + 12);
  if (choice === "cutman") { f.p.cut = Math.max(0, (f.p.cut || 0) - 1); f.p.damage = Math.max(0, f.p.damage - 3); }
  const message = "Corner: " + CORNER_CHOICES[choice].name + " — " + CORNER_CHOICES[choice].detail + ".";
  career.log(message); return message;
}
export function beginFeatureRound(fight) {
  if (fight.featureTactic) {
    for (const stat of ["striking", "wrestling", "grappling"]) fight.p.mods[stat] = (fight.p.mods[stat] || 0) - 2;
    fight.featureTactic = null;
  }
  if (fight.cornerChoices?.[fight.round] === "tactics") {
    fight.p.mods ||= {};
    for (const stat of ["striking", "wrestling", "grappling"]) fight.p.mods[stat] = (fight.p.mods[stat] || 0) + 2;
    fight.featureTactic = { round: fight.round + 1 };
  }
}

const WEIGHTS = { finish: 100, kd: 90, subatt: 75, big: 65, td: 45 };
export function highlightClips(fight, limit = 6) {
  if (!fight || !Array.isArray(fight.logs)) return [];
  const candidates = [];
  fight.logs.forEach((events, r) => events.forEach((event, i) => {
    if (WEIGHTS[event.type]) candidates.push({ id: r + ":" + i, round: r + 1, start: Math.max(0, i - 2), end: Math.min(events.length - 1, i + 1), index: i, score: WEIGHTS[event.type], kind: event.type, clock: event.t, text: event.text, label: ({ finish: "The finish", kd: "Knockdown", subatt: "Submission attempt", big: "Big shot", td: "Takedown" })[event.type] });
  }));
  if (!candidates.length) {
    const r = fight.logs.length - 1, events = fight.logs[r] || [];
    let i = events.length - 1;
    while (i >= 0 && !["strike", "gnp", "miss"].includes(events[i].type)) i--;
    if (i >= 0) candidates.push({ id: r + ":" + i, round: r + 1, start: Math.max(0, i - 2), end: i, index: i, score: 1, kind: "exchange", clock: events[i].t, text: events[i].text, label: "Last exchange" });
  }
  const selected = [];
  for (const clip of candidates.sort((a, b) => b.score - a.score || b.round - a.round || b.index - a.index)) {
    if (selected.some(other => other.round === clip.round && clip.start <= other.end && clip.end >= other.start)) continue;
    selected.push(clip); if (selected.length >= Math.max(1, Math.min(12, limit))) break;
  }
  return selected.sort((a, b) => a.round - b.round || a.index - b.index);
}
export function clipContext(fight, clip) {
  const events = fight?.logs?.[clip?.round - 1];
  if (!events || !Number.isInteger(clip.start) || !Number.isInteger(clip.end) || clip.start < 0 || clip.end < clip.start || clip.end >= events.length) throw new FeatureError("That replay is unavailable.");
  const logs = fight.logs.slice(0, clip.round - 1).map(round => round.slice()); logs.push(events.slice(0, clip.start));
  const previous = logs.flat().slice(-1)[0];
  const side = (fighter, index) => ({ ...fighter, health: previous?.hp?.[index] ?? 100, stamina: previous?.st?.[index] ?? 100 });
  return { initial: { ...fight, round: clip.round, finished: false, manual: null, player: side(fight.player, 0), opponent: side(fight.opponent, 1), logs }, events: events.slice(clip.start, clip.end + 1) };
}

export function archiveCardFootage(career, card) {
  if (!card?.bouts) return;
  const archive = (career.filmArchive ||= {});
  const library = (career.filmLibrary ||= {});
  for (const bout of card.bouts) {
    if (!bout.result || !bout.json) continue;
    const replayKey = card.name + "|" + bout.a.id + "|" + bout.b.id;
    library[replayKey] = bout.json;
    for (const [fighter, opponent, side] of [[bout.a, bout.b, "p"], [bout.b, bout.a, "o"]]) {
      if (!fighter?.id) continue;
      const events = bout.json.logs.flat().filter(e => e.side === side), moves = {};
      for (const event of events) if (event.move) moves[event.move] = (moves[event.move] || 0) + 1;
      const key = card.name + "|" + opponent.id;
      const records = archive[fighter.id] ||= [];
      if (records.some(record => record.key === key)) continue;
      records.unshift({ key, replayKey, event: card.name, opponent: opponent.displayName(), week: career.week, method: bout.result.method,
        result: bout.result.winner === "draw" ? "D" : bout.result.winner === (side === "p" ? "a" : "b") ? "W" : "L",
        moves: Object.entries(moves).sort((a, b) => b[1] - a[1]).slice(0, 5), takedowns: events.filter(e => e.type === "td").length, subs: events.filter(e => e.type === "subatt").length });
      records.length = Math.min(records.length, 3);
    }
  }
  // Keep full playback footage bounded independently from compact scouting summaries.
  for (const key of Object.keys(library).slice(0, Math.max(0, Object.keys(library).length - 12))) delete library[key];
  for (const id of Object.keys(archive).sort((a, b) => (archive[b][0]?.week || 0) - (archive[a][0]?.week || 0)).slice(80)) delete archive[id];
}
function studyKey(career) { return career.scheduled?.card?.name || career.scheduled?.opp?.id || null; }
export function filmReport(career) {
  const opp = career.scheduled?.opp;
  if (!opp) return null;
  const studied = career.filmStudy?.opponentId === opp.id && career.filmStudy?.booking === studyKey(career);
  const stats = ["striking", "power", "speed", "wrestling", "grappling", "cardio", "chin"].sort((a, b) => opp.get(b) - opp.get(a));
  const footage = career.filmArchive?.[opp.id] || [];
  const advice = opp.style === "Wrestler" ? "Expect level changes. Keep space, sprawl, and make them work before shooting." : opp.style === "Jiu-Jitsu" ? "Protect your neck and prioritize getting back to your feet over risky ground exchanges." : opp.style === "Striker" ? "Mix your entries, check kicks, and avoid predictable straight-line approaches." : "Test their reactions early; mix attacks rather than repeating one combination.";
  return { opponentId: opp.id, name: opp.displayName(), style: opp.style, studied, canStudy: !career.retired && !career.fight && career.scheduled.weeks > 0 && !studied && career.energy >= 10,
    strongest: studied ? stats.slice(0, 2).map(key => ({ key, value: Math.round(opp.get(key)) })) : [],
    weakest: studied ? stats.slice(-2).map(key => ({ key, value: Math.round(opp.get(key)) })) : [],
    advice: studied ? advice : "Spend a week reviewing your opponent to unlock the full scouting report.",
    footage: studied ? footage.map(record => ({ ...record, fight: career.filmLibrary?.[record.replayKey] || null })) : [], basis: footage.length ? "Archived event footage and style scouting" : "Style scouting — no archived footage available yet" };
}
export function studyOpponent(career) {
  career.requireActive();
  const report = filmReport(career);
  if (!report?.canStudy) throw new FeatureError(report?.studied ? "You already studied this opponent for this booking." : "Book a fight, keep a camp week available, and have at least 10 energy.");
  career.energy -= 10;
  career.filmStudy = { opponentId: report.opponentId, booking: studyKey(career), week: career.week };
  career.advanceWeek(); career.log("Film study: reviewed " + report.name + ". Your coach can scout the next round's plan.");
  return "Film studied: opponent report unlocked and round-plan scouting enabled. One week and 10 energy used.";
}
export function applyFilmStudy(career, fight) {
  if (filmReport(career)?.studied) fight.coachStars = Math.max(3, fight.coachStars || 0);
}
export function careerFeatures(career) {
  return { walkout: walkoutPreferences(career.walkoutPreferences), film: filmReport(career), lastFight: career.lastCard?.bouts?.find(b => b.player)?.json || null };
}
