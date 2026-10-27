// Node 22+: node tools/check_achievements.mjs   (Node 20: --experimental-default-type=module)
//
// Drives the real engine in memory (no browser, no dependencies) and checks that:
//   * the trophy table is well formed and every trophy is earnable and unique
//   * an old save with no `trophies` field still loads, and Career.migrate() adds it
//   * each milestone earns its trophy exactly once, and a second evaluation earns nothing
//   * trophies survive save/load and are summarised for the screen
//   * a fight played through the real API announces its new trophies and persists them
import assert from "node:assert/strict";
import fs from "node:fs";
import { Game, packCareer, unpackCareer } from "../web/engine.js";
import { TROPHIES, snapshot, evaluateTrophies, trophiesJson, trophyById } from "../web/achievements.js";
import { trophiesHtml } from "../web/trophies-ui.js";

const memStore = () => ({ kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} });
async function career(name) {
  const game = new Game(memStore());
  await game.load();
  game.call("new", { name, weightClass: 3, style: "Balanced", country: "USA" });
  return { game, c: game.active() };
}

// ------------------------------------------------------------- the trophy table
const ids = TROPHIES.map((t) => t.id);
assert.equal(new Set(ids).size, ids.length, "trophy ids must be unique");
assert.ok(ids.length >= 20, `only ${ids.length} trophies defined`);
for (const t of TROPHIES) {
  for (const key of ["id", "icon", "name", "desc", "group"]) assert.ok(String(t[key] || "").trim(), `${t.id} is missing ${key}`);
  assert.equal(typeof t.check, "function", `${t.id} has no check`);
  assert.ok(trophyById(t.id) === t && trophyById("nope") === null, "lookup must round-trip");
}
// Every trophy must be earnable, and none may fire for an empty career — no dead or free trophies.
const maxed = { fights: 30, wins: 30, losses: 0, draws: 0, koWins: 10, subWins: 10, streak: 10, rank: 0, titlesWon: 2, titleDefenses: 3, belts: 2, gfc: true, bonuses: 6, rivalWins: 1, earnings: 2_000_000, fame: 100, retired: true, legacy: 250, ppvBuys: 500_000 };
assert.deepEqual(TROPHIES.filter((t) => !t.check(maxed)).map((t) => t.id), [], "every trophy must be reachable");
assert.deepEqual(TROPHIES.filter((t) => t.check({})).map((t) => t.id), [], "an empty career must earn nothing");
assert.ok(trophyById("legend").check({ retired: true, legacy: 200 }) && !trophyById("legend").check({ retired: true, legacy: 199 }), "the Hall of Fame trophy needs both retirement and the score");

// --------------------------------------------------------- new career, old save
const { game, c } = await career("Trophy QA");
assert.deepEqual(c.trophies, [], "a new career starts with no trophies");
assert.deepEqual(evaluateTrophies(c), [], "no milestones, no trophies");
assert.deepEqual(snapshot(c).fights, 0);

const stale = JSON.parse(packCareer(c));
delete stale.data.trophies; // what a save written before this feature looks like
const restored = unpackCareer(JSON.stringify(stale));
assert.equal(restored.trophies, undefined, "the field really is absent in an old save");
restored.migrate();
assert.deepEqual(restored.trophies, [], "migrate() must give an old save an empty trophy list");

// ------------------------------------------------------------- milestones
const earned = [];
function fire(label) {
  const fresh = evaluateTrophies(c).map((t) => t.id);
  earned.push(...fresh);
  return fresh;
}
/** Sets up a milestone, then asserts its trophies arrive once and only once. */
function once(label, ids, setup) {
  const want = [].concat(ids);
  setup();
  const fresh = fire(label);
  for (const id of want) {
    assert.ok(fresh.includes(id), `${label} should unlock ${id}`);
    assert.equal(c.trophies.filter((t) => t.id === id).length, 1, `${id} must be recorded once`);
  }
  const again = fire(label);
  for (const id of want) assert.ok(!again.includes(id), `${id} must not unlock twice`);
}
once("a first fight", ["debut", "first_win"], () => { c.me.losses = 1; c.me.draws = 1; c.me.wins = 1; });
once("a first KO", "first_finish", () => { c.me.koWins = 1; });
once("five KOs", "ko5", () => { c.me.koWins = 5; });
once("a first submission", ["first_sub"], () => { c.me.subWins = 1; });
once("five submissions", "sub5", () => { c.me.subWins = 5; });
once("a three-fight streak", "streak3", () => { c.me.streak = 3; });
once("a seven-fight streak", "streak7", () => { c.records = { longestStreak: 7 }; });
once("a GFC contract", "contract", () => { c.gfc = true; c.rankings = []; });
once("the top 15", "ranked", () => { c.rankings = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, c.me]; assert.equal(snapshot(c).rank, 10); });
once("the top 3", "top3", () => { c.rankings = [{}, {}, c.me]; assert.equal(snapshot(c).rank, 2); });
once("a title", "champion", () => { c.titlesWon = 1; });
once("a first defense", "still", () => { c.titleDefenses = 1; });
once("three defenses", "still3", () => { c.titleDefenses = 3; });
once("two divisions", "belts2", () => { c.divisionsWon = ["Flyweight", "Bantamweight"]; });
once("a performance bonus", "bonus", () => { c.bonusCount = 1; });
once("five bonuses", "bonuses5", () => { c.bonusCount = 5; });
once("beating the rival", "rival", () => { c.rivalWins = 1; });
once("a pay-per-view main event", "ppv", () => { c.lastResult = { ppv: { buys: 850_000 } }; });
once("100 fame", "famous", () => { c.fame = 100; });
once("a million dollars", "millionaire", () => { c.earnings = 1_000_000; });
once("25 fights", "veteran", () => { c.me.wins = 25; });

// the milestone ids the checks above did not cover are only reachable at retirement
c.retired = true;
assert.ok(fire("retirement").includes("retire"), "retiring should unlock the retirement trophy");
assert.deepEqual(fire("nothing left").length, 0, "an idle evaluation earns nothing");
assert.equal(new Set(earned).size, earned.length, "no trophy may be announced twice");

// ------------------------------------------------------------- persistence
assert.deepEqual(evaluateTrophies(c), [], "a second evaluation earns nothing");
const round = unpackCareer(packCareer(c));
assert.deepEqual(round.trophies.map((t) => t.id), c.trophies.map((t) => t.id), "trophies must survive save/load");
const json = trophiesJson(round);
assert.equal(json.items.length, TROPHIES.length, "the screen lists every trophy");
assert.equal(json.earned, round.trophies.length, "the earned count must match the save");
assert.ok(json.items.every((i) => (i.earned ? i.date !== undefined : i.date === "")), "earned trophies carry a date");

// ------------------------------------------------- a real fight, through the API
const { game: g2, c: c2 } = await career("Fight QA");
g2.call("accept", { index: 0 });
c2.scheduled.weeks = 0;
g2.call("fight/start");
let guard = 0;
while (c2.fight && !c2.fight.finished && guard++ < 200) g2.call("fight/round", { plan: "BALANCED" });
assert.ok(c2.fight.finished, "the fight must resolve");
const announced = c2.lastResult.trophies;
assert.ok(Array.isArray(announced) && announced.length >= 1, "the result panel gets the new trophies");
assert.ok(announced.some((t) => t.id === "debut"), "finishing a fight unlocks First Steps");
assert.ok(announced.every((t) => trophyById(t.id) && t.name && t.icon), "announced trophies carry display text");
assert.deepEqual(announced.map((t) => t.id), c2.trophies.map((t) => t.id), "everything announced is recorded on the career");
assert.deepEqual(unpackCareer(packCareer(c2)).trophies.map((t) => t.id), c2.trophies.map((t) => t.id), "fight trophies persist");
const state = g2.call("state");
assert.equal(state.trophies.items.length, TROPHIES.length);
assert.equal(state.trophies.earned, c2.trophies.length, "the screen state matches the career");

// ------------------------------------------------- the trophy screen, and its wiring
const html = trophiesHtml(state);
assert.equal((html.match(/class="trophy /g) || []).length, TROPHIES.length, "one card per trophy");
for (const group of ["Career", "In the cage", "The belt", "Money &amp; fame"]) assert.ok(html.includes(group), `the screen must show the ${group} group`);
assert.ok(html.includes("Trophies") && html.includes("Locked") && html.includes("Earned"), "the screen labels earned and locked trophies");
const hostile = trophiesHtml({ trophies: { earned: 0, total: 1, items: [{ id: "x", icon: "🥊", name: "<img src=x onerror=alert(1)>", desc: "a & b", group: "G", earned: false, date: "" }] } });
assert.ok(!hostile.includes("<img") && hostile.includes("&lt;img") && hostile.includes("a &amp; b"), "trophy text must be escaped");
// wiring guards: the top-bar entry point and the modal/handler that open it
const indexHtml = fs.readFileSync(new URL("../web/index.html", import.meta.url), "utf8");
const appJs = fs.readFileSync(new URL("../web/app.js", import.meta.url), "utf8");
assert.ok(indexHtml.includes('data-trophies title="Trophies"'), "the top bar needs a trophy button");
assert.ok(appJs.includes('if (d.trophies !== undefined) return openModal("trophies")'), "the trophy button needs its click handler");
assert.ok(appJs.includes('if (modal.kind === "trophies") { body.innerHTML = trophiesHtml(s); return; }'), "the trophy modal needs its render branch");
assert.ok(appJs.includes("r.trophies || []"), "the fight result must announce new trophies");

console.log(`PASS: ${TROPHIES.length} trophies, all reachable; ${c.trophies.length} earned across fabricated milestones (each exactly once); old saves migrate to an empty list; trophies persist through save/load; a real resolved fight announced ${announced.length} and recorded them`);
