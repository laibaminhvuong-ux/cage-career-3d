// The dynasty: a new career can start as the protégé of a Hall of Fame legend.
//   node tools/check_dynasty.mjs   (Node 20: add --experimental-default-type=module)
import assert from "node:assert/strict";
import { Game, packCareer, unpackCareer } from "../web/engine.js";

const legend = (name, legacyScore, extra = {}) => ({ name, record: "30-2-0", style: "Striker", legacy: legacyScore >= 200 ? "Hall of Famer" : "Contender", legacyScore, titlesWon: 2, ...extra });
const memStore = (hof) => ({ kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => hof, addHallOfFame() {} });
const base = { weightClass: 3, style: "Balanced", country: "USA" };

// no Hall of Fame yet: no legends to pick, and an unmentored career is unchanged
{
  const game = new Game(memStore([]));
  await game.load();
  assert.deepEqual(game.call("state").legends, [], "nobody to train under yet");
  const s = game.call("new", { ...base, name: "Solo", mentor: "" });
  assert.equal(s.mentor, null, "no mentor picked");
  assert.equal(s.fame, 0, "starts with no fame");
  assert.throws(() => game.call("new", { ...base, name: "Ghost", mentor: "0" }), /Hall of Fame/, "can't pick a legend who isn't there");
}

// with legends: best legacy first, and the protégé gets the perks
{
  const game = new Game(memStore([legend("Low Legend", 60), legend("GOAT", 320), legend("Mid Legend", 150)]));
  await game.load();
  const L = game.call("state").legends;
  assert.deepEqual(L.map((x) => x.name), ["GOAT", "Mid Legend", "Low Legend"], "legends sorted by legacy");
  const s = game.call("new", { ...base, name: "Heir", mentor: "0" });
  const c = game.active();
  assert.equal(s.mentor.name, "GOAT", "the protégé names their mentor");
  assert.equal(s.mentor.legacyScore, 320, "the mentor's legacy is the mark to beat");
  assert.equal(s.mentor.passed, false);
  assert.equal(s.fame, 15, "inherited fame (capped at 15)");
  assert.ok(s.news.some((n) => n.includes("protégé of GOAT")), "the news marks the start of the dynasty");
  // 25% off the gym
  const full = new Game(memStore([]));
  await full.load();
  const plain = full.call("new", { ...base, name: "Plain" });
  assert.equal(s.gym.nextCost, Math.round((plain.gym.nextCost * 0.75) / 50) * 50, "gym moves cost 25% less");
  c.money = 1e9;
  const before = c.money;
  game.call("upgrade");
  assert.equal(before - c.money, Math.round(full.active().gymCost(1) * 0.75 / 50) * 50, "and the discount is what's charged");
  // saves keep the mentor; old saves get none
  const back = unpackCareer(packCareer(c));
  assert.equal(back.mentor.name, "GOAT", "the mentor survives save/load");
  delete back.mentor;
  back.migrate();
  assert.equal(back.mentor, null, "an old save migrates to no mentor");
  // passing the mentor: announced once
  c.mentor.legacyScore = -1;
  c.accept(0);
  c.scheduled.weeks = 0;
  game.call("fight/start");
  let guard = 0;
  while (c.fight && !c.fight.finished && guard++ < 200) game.call("fight/round", { plan: "BALANCED" });
  assert.ok(c.mentor.passedAt, "passing the mentor's legacy is recorded");
  assert.ok(/passed your mentor/.test(c.lastResult.careerNote), "and announced on the fight result");
  assert.equal(game.call("state").mentor.passed, true);
  const at = c.mentor.passedAt;
  // the next fight must not announce it again
  game.call("fight/close");
  c.injuryWeeks = 0;
  c.generateOffers();
  c.accept(0);
  c.scheduled.weeks = 0;
  game.call("fight/start");
  guard = 0;
  while (c.fight && !c.fight.finished && guard++ < 200) game.call("fight/round", { plan: "BALANCED" });
  assert.ok(!/passed your mentor/.test(c.lastResult.careerNote), "not re-announced on the next fight");
  assert.equal(c.news.filter((n) => n.includes("The student passes the master")).length, 1, "announced exactly once");
  assert.equal(c.mentor.passedAt, at);
}

console.log("PASS: dynasty: Hall of Fame legends listed best first; a protégé gets inherited fame, 25% off gym moves and the mentor's legacy as the mark to beat; passing it is announced once; saves keep the mentor and old saves migrate");
