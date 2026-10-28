// Fight-night bonus objectives and your rival's watchable fights.
//   node tools/check_objectives.mjs   (Node 20: add --experimental-default-type=module)
import assert from "node:assert/strict";
import { Game, packCareer, unpackCareer } from "../web/engine.js";

const memStore = () => ({ kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} });
async function career(name, style = "Balanced") {
  const game = new Game(memStore());
  await game.load();
  game.call("new", { name, weightClass: 3, style, country: "USA" });
  return { game, c: game.active() };
}
const corner = (sig, td, kd) => ({ totSig: sig, totTd: td, totKd: kd });
const fight = (o) => ({ methodType: "DEC", endRound: 3, p: corner(0, 0, 0), o: corner(0, 0, 0), ...o });

// ------------------------------------------------- booking posts objectives
{
  const { game, c } = await career("Booker", "Wrestler");
  const s = game.call("accept", { index: 0 });
  const objs = s.scheduled.objectives;
  assert.ok(objs.length >= 1 && objs.length <= 2, "one or two objectives per booking");
  assert.ok(["td", "early", "clean"].includes(objs[0].id), "the first objective suits a wrestler");
  for (const x of objs) assert.ok(x.icon && x.text && x.pay >= 100 && !x.text.includes("{n}"), "objectives carry display text and a payout");
  assert.equal(new Set(objs.map((x) => x.id)).size, objs.length, "no duplicate objectives");
  assert.deepEqual(unpackCareer(packCareer(c)).scheduled.objectives, c.scheduled.objectives, "objectives survive save/load");
}

// ------------------------------------------------- each objective's rule, and only a win pays
{
  const { c } = await career("Rules");
  const o = { rounds: 3, objectives: ["early", "ko", "sub", "td", "volume", "clean", "outland"].map((id) => ({ id, pay: 1000 })) };
  const hit = (f, won = true) => Object.fromEntries(c.scoreObjectives(o, fight(f), won).map((x) => [x.id, x.done]));
  assert.deepEqual(hit({ methodType: "KO", endRound: 1, p: corner(30, 0, 1), o: corner(10, 0, 0) }),
    { early: true, ko: true, sub: false, td: false, volume: false, clean: true, outland: true });
  assert.deepEqual(hit({ methodType: "SUB", endRound: 3, p: corner(45, 4, 0), o: corner(30, 0, 1) }),
    { early: false, ko: false, sub: true, td: true, volume: true, clean: false, outland: false });
  assert.ok(Object.values(hit({ methodType: "KO", endRound: 1, p: corner(90, 5, 2), o: corner(1, 0, 0) }, false)).every((v) => !v), "a loss pays nothing");
  const five = c.scoreObjectives({ rounds: 5, objectives: [{ id: "volume", pay: 1 }] }, fight({ p: corner(50, 0, 0) }), true)[0];
  assert.ok(!five.done && five.text.includes("70"), "five-rounders need more volume");
  assert.deepEqual(c.scoreObjectives({ rounds: 3 }, fight({}), true), [], "a fight booked before this feature has none");
  assert.deepEqual(c.scoreObjectives({ rounds: 3, objectives: [{ id: "gone", pay: 5 }] }, fight({}), true), [], "unknown ids are ignored");
}

// ------------------------------------------------- a real fight pays what it hit
for (let n = 0; n < 4; n++) {
  const { game, c } = await career("Payday " + n);
  game.call("accept", { index: 0 });
  c.scheduled.objectives = [{ id: "clean", pay: 777 }, { id: "volume", pay: 1234 }];
  c.scheduled.weeks = 0;
  game.call("fight/start");
  let guard = 0;
  while (c.fight && !c.fight.finished && guard++ < 200) game.call("fight/round", { plan: "BALANCED" });
  const r = c.lastResult;
  assert.equal(r.objectives.length, 2, "the result lists every objective");
  const expect = r.objectives.reduce((a, x) => a + (x.done ? x.pay : 0), 0);
  assert.equal(r.objectivePay, expect, "objective pay is the sum of those hit");
  if (r.result !== "W") assert.equal(expect, 0, "only a win pays");
  const st = game.call("state");
  assert.ok(st.lastResult.objectives && st.lastResult.pay >= expect, "objective pay is part of the fight's payday");
}

// ------------------------------------------------- your rival's fights, watchable from the Rival panel
{
  const { game, c } = await career("Rival QA");
  c.setRival(c.gen(50), 40, "test");
  const rv = c.rival;
  const before = rv.wins + rv.losses + rv.draws;
  c.rivalBout(c.gen(48), "Iron Cage Regional");
  const st = game.call("state");
  assert.ok(st.rival.lastFight && st.rival.lastFight.opp, "the Rival panel shows their last fight");
  game.call("card/watch", { id: "r" });
  const w = game.call("state").watch;
  assert.ok(w && w.player && w.opponent && w.cardName && w.division, "the rival's fight can be watched");
  assert.equal(rv.wins + rv.losses + rv.draws, before, "rivalBout itself records nothing (callers do)");
  game.call("card/watch", { id: "" });
  const back = unpackCareer(packCareer(c));
  assert.equal(back.rivalLast.opp, c.rivalLast.opp, "the rival's last fight survives save/load");
  c.setRival(c.gen(52), 40, "a new rival");
  assert.equal(game.call("state").rival.lastFight, null, "a new rival doesn't inherit the old one's fight");
  game.call("card/watch", { id: "r" });
  assert.equal(game.call("state").watch, null, "nor can it be watched");
  // the weekly path: an unranked rival's off-card fights are now real bouts
  c.setRival(c.gen(50), 40, "weekly");
  for (let i = 0; i < 400 && !c.rivalLastFight(); i++) c.rivalWeek();
  assert.ok(c.rivalLastFight(), "the weekly rival fight is stored for watching");
  assert.ok(c.rival.wins + c.rival.losses + c.rival.draws >= 1, "and counts on the rival's record");
}

console.log("PASS: bonus objectives posted on booking, scored per rule (win only), paid in the real fight's payday, kept through save/load; rival's off-card fights watchable, scoped to the current rival");
