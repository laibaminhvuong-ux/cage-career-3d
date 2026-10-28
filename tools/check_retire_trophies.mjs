// Retirement trophies: retiring (by choice or forced at 40) records the retirement / Hall of Fame
// trophies and hands them to the career-over screen, which announces them.
//   node tools/check_retire_trophies.mjs
import assert from "node:assert/strict";
import { Game, packCareer, unpackCareer } from "../web/engine.js";

const memStore = () => ({ kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} });
async function career(name) {
  const game = new Game(memStore());
  await game.load();
  game.call("new", { name, weightClass: 3, style: "Balanced", country: "USA" });
  return { game, c: game.active() };
}

// retiring by choice
{
  const { game } = await career("Choice");
  assert.deepEqual(game.call("state").retireTrophies, [], "nothing to announce before retiring");
  const s = game.call("retire");
  const ids = s.retireTrophies.map((t) => t.id);
  assert.ok(ids.includes("retire"), "retiring announces Hang Them Up");
  assert.ok(!ids.includes("legend"), "a short career is no Hall of Famer");
  for (const t of s.retireTrophies) assert.ok(t.icon && t.name && t.desc, "announced trophies carry icon, name and text");
  assert.ok(s.trophies.items.find((t) => t.id === "retire").earned, "and the shelf records it");
}

// a Hall of Fame legacy
{
  const { game, c } = await career("Legend");
  c.legacyScore = () => 250;
  const ids = game.call("retire").retireTrophies.map((t) => t.id);
  assert.ok(ids.includes("retire") && ids.includes("legend"), "a big legacy announces Hall of Famer too");
}

// forced retirement at 40 happens in the yearly update, not retire(), and used to skip trophies
{
  const { game, c } = await career("Forty");
  c.me.age = 39;
  c.newYear();
  assert.ok(c.retired, "forced to retire at 40");
  const s = game.call("state");
  assert.ok(s.retireTrophies.some((t) => t.id === "retire"), "a forced retirement also announces its trophies");
  const back = unpackCareer(packCareer(c));
  assert.deepEqual(back.retireTrophies.map((t) => t.id), s.retireTrophies.map((t) => t.id), "kept through save/load");
}

// an old retired save without the field still loads
{
  const { game, c } = await career("Old");
  game.call("retire");
  delete c.retireTrophies;
  assert.deepEqual(game.call("state").retireTrophies, [], "old retired saves show no announcement");
}

console.log("PASS: retirement and Hall of Fame trophies recorded on voluntary and forced retirement, handed to the career-over screen, kept through save/load");
