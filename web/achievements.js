// Trophies: career milestones a player unlocks.
//
// The definitions and the evaluator live here so the engine only has to record which ids a
// career has earned (`career.trophies`, an array of { id, date }) — saves stay small and old
// careers stay loadable, because Career.migrate() just adds an empty list.
//
// `snapshot()` flattens everything the checks read, so each check is a total one-liner and the
// whole table can be tested without playing a fight (tools/check_achievements.mjs). It never
// throws on a half-built career: it is also called from retire(), where no fight is in progress.

/** Every number a trophy check can look at, derived from the career. */
export function snapshot(career) {
  const me = (career && career.me) || {};
  const last = (career && career.lastResult) || null;
  const wins = me.wins | 0, losses = me.losses | 0, draws = me.draws | 0;
  const rankings = (career && career.rankings) || [];
  return {
    fights: wins + losses + draws,
    wins, losses, draws,
    koWins: me.koWins | 0,
    subWins: me.subWins | 0,
    streak: Math.max(me.streak | 0, (career && career.records && career.records.longestStreak) | 0),
    rank: career && career.gfc ? rankings.indexOf(me) : -1,
    titlesWon: (career && career.titlesWon) | 0,
    titleDefenses: (career && career.titleDefenses) | 0,
    belts: ((career && career.divisionsWon) || []).length,
    gfc: !!(career && career.gfc),
    bonuses: (career && career.bonusCount) | 0,
    rivalWins: (career && career.rivalWins) | 0,
    earnings: (career && career.earnings) | 0,
    fame: (career && career.fame) | 0,
    retired: !!(career && career.retired),
    legacy: career && typeof career.legacyScore === "function" ? career.legacyScore() : 0,
    ppvBuys: last && last.ppv ? last.ppv.buys | 0 : 0,
  };
}

/** [id, icon, name, description, group, check]. Ordered as they appear on the trophy screen. */
export const TROPHIES = [
  ["debut", "🥊", "First Steps", "Fight your first professional bout.", "Career", (s) => s.fights >= 1],
  ["first_win", "✋", "Hand Raised", "Win your first fight.", "Career", (s) => s.wins >= 1],
  ["contract", "🎟", "Big Show", "Earn a GFC contract on the Contender Series.", "Career", (s) => s.gfc],
  ["veteran", "🧓", "Veteran", "Make 25 professional walks to the cage.", "Career", (s) => s.fights >= 25],
  ["retire", "🥋", "Hang Them Up", "Retire with your health and your story intact.", "Career", (s) => s.retired],
  ["legend", "🏛", "Hall of Famer", "Retire with a legacy score of 200 or more.", "Career", (s) => s.retired && s.legacy >= 200],

  ["first_finish", "💥", "Don't Leave It to the Judges", "Win a fight by KO or TKO.", "In the cage", (s) => s.koWins >= 1],
  ["first_sub", "🤝", "Tap Artist", "Win a fight by submission.", "In the cage", (s) => s.subWins >= 1],
  ["ko5", "🥊", "Heavy Hands", "Five knockout wins.", "In the cage", (s) => s.koWins >= 5],
  ["sub5", "🐍", "Submit Machine", "Five submission wins.", "In the cage", (s) => s.subWins >= 5],
  ["streak3", "🔥", "Rolling", "Win three fights in a row.", "In the cage", (s) => s.streak >= 3],
  ["streak7", "⚡", "Untouchable", "Win seven fights in a row.", "In the cage", (s) => s.streak >= 7],
  ["bonus", "💰", "Bonus Winner", "Take home a Fight, KO or Submission of the Night bonus.", "In the cage", (s) => s.bonuses >= 1],
  ["bonuses5", "🎁", "Bonus Collector", "Five performance bonuses.", "In the cage", (s) => s.bonuses >= 5],
  ["rival", "⚔", "Settle It", "Beat your rival.", "In the cage", (s) => s.rivalWins >= 1],
  ["ppv", "📺", "Pay-Per-View Star", "Headline a card fans have to pay for.", "In the cage", (s) => s.ppvBuys > 0],

  ["ranked", "📊", "In the Rankings", "Break into the top 15.", "The belt", (s) => s.rank >= 0 && s.rank <= 14],
  ["top3", "🥇", "Contender", "Climb to the top 3.", "The belt", (s) => s.rank >= 0 && s.rank <= 2],
  ["champion", "🏆", "And NEW", "Win a title.", "The belt", (s) => s.titlesWon >= 1],
  ["still", "🛡", "And STILL", "Defend your belt.", "The belt", (s) => s.titleDefenses >= 1],
  ["still3", "🛡", "Three Times a Champion", "Three successful title defenses.", "The belt", (s) => s.titleDefenses >= 3],
  ["belts2", "👑", "Two Belts", "Win titles in two divisions.", "The belt", (s) => s.belts >= 2],

  ["famous", "🌟", "Household Name", "Reach 100 fame.", "Money & fame", (s) => s.fame >= 100],
  ["millionaire", "💵", "Seven Figures", "Earn $1,000,000 over your career.", "Money & fame", (s) => s.earnings >= 1000000],
].map(([id, icon, name, desc, group, check]) => ({ id, icon, name, desc, group, check }));

export function trophyById(id) {
  return TROPHIES.find((t) => t.id === id) || null;
}

/**
 * Records every trophy this career has just earned and returns only the new ones, so the UI can
 * announce them. Idempotent: already-earned ids are skipped, so it is safe to call any number of
 * times and a second call with no progress returns [].
 */
export function evaluateTrophies(career) {
  if (!career) return [];
  if (!Array.isArray(career.trophies)) career.trophies = [];
  const earned = new Set(career.trophies.map((t) => t && t.id));
  const s = snapshot(career);
  const date = typeof career.dateLabel === "function" ? career.dateLabel() : "";
  const fresh = [];
  for (const t of TROPHIES) {
    if (earned.has(t.id) || !t.check(s)) continue;
    earned.add(t.id);
    career.trophies.push({ id: t.id, date });
    fresh.push({ id: t.id, date, icon: t.icon, name: t.name, desc: t.desc, group: t.group });
  }
  return fresh;
}

/** What the trophy screen renders: every trophy, marked earned or locked. */
export function trophiesJson(career) {
  const list = (career && Array.isArray(career.trophies) && career.trophies) || [];
  const when = new Map(list.map((t) => [t && t.id, t && t.date]));
  const items = TROPHIES.map((t) => ({ id: t.id, icon: t.icon, name: t.name, desc: t.desc, group: t.group, earned: when.has(t.id), date: when.get(t.id) || "" }));
  return { earned: items.reduce((n, i) => n + (i.earned ? 1 : 0), 0), total: items.length, items };
}
