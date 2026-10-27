// Node 22+: node tools/check_fight_features.mjs.
import assert from "node:assert/strict";
import * as THREE from "../web/vendor/three.module.min.js";
import { Game, GameError, Fight, packCareer, unpackCareer } from "../web/engine.js";
import { chooseCorner, beginFeatureRound, highlightClips, clipContext, archiveCardFootage, tickCornerClock, filmReport } from "../web/fightfeatures.js";
import { WalkoutDirector } from "../web/walkout3d.js";
import { filmRoomHtml } from "../web/fightfeatures-ui.js";
const store = { kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} };
const game = new Game(store); await game.load(); game.call("new", { name: "Feature QA", weightClass: 3, style: "Balanced", country: "USA" });
let c = game.active();
assert.throws(() => game.call("walkout/save", { music: "bad" }), GameError);
game.call("walkout/save", { music: "neon", lighting: "blue", entrance: "salute", celebration: "bow" });
assert.equal(unpackCareer(packCareer(c)).walkoutPreferences.music, "neon");
game.call("accept", { index: 0 }); c.scheduled.weeks = 3;
const week = c.week; game.call("film/study");
assert.equal(c.week, week + 1); assert(game.call("state").features.film.studied);
assert.throws(() => game.call("film/study"), GameError);
c.scheduled.weeks = 0; game.call("fight/start");
assert.equal(c.fight.walkout.celebration, "bow"); assert(c.fight.coachStars >= 3);
const fight = c.fight;
fight.round = 1; fight.clock = 300; fight.p.stamina = 50; fight.p.damage = 20; fight.p.cut = 2;
game.call("fight/corner", { choice: "cutman" });
assert.equal(fight.p.cut, 1); assert.equal(fight.p.damage, 17);
assert.throws(() => game.call("fight/corner", { choice: "recover" }), GameError);
assert.equal(unpackCareer(packCareer(c)).fight.cornerChoices[1], "cutman");
const tactical = new Fight(c.me, c.scheduled.opp, 5, false, 0, 0); c.fight = tactical;
tactical.round = 1; tactical.clock = 300; tactical.p.mods = { power: 3, striking: 1 };
chooseCorner(c, "tactics"); beginFeatureRound(tactical); tactical.round = 2;
assert.equal(tactical.p.mods.striking, 3); assert.equal(tactical.p.mods.power, 3);
tactical.cornerChoices[2] = "recover"; beginFeatureRound(tactical);
assert.equal(tactical.p.mods.striking, 1); assert.equal(tactical.p.mods.wrestling, 0); assert.equal(tactical.p.mods.power, 3);
const logs = [[{ type: "info", side: "n", text: "Round 1", hp: [100, 100], st: [100, 100] }, { type: "strike", side: "p", text: "jab", move: "jab", hp: [100, 95], st: [95, 100] }, { type: "kd", side: "p", text: "down", hp: [100, 70], st: [92, 90] }, { type: "finish", side: "p", text: "KO", hp: [100, 0], st: [90, 85] }]];
const replay = { logs, finished: true, round: 1, rounds: 3, player: { name: "A", health: 100 }, opponent: { name: "B", health: 0 } };
const before = JSON.stringify(replay), clips = highlightClips(replay);
assert(clips.some(clip => clip.kind === "finish"));
const context = clipContext(replay, clips.at(-1)); assert(context.events.length); assert.equal(context.initial.finished, false); assert.equal(JSON.stringify(replay), before);
assert.throws(() => clipContext(replay, { round: 1, start: -1, end: 999 }));
const bout = { a: c.me, b: c.scheduled.opp, result: { winner: "a", method: "KO" }, json: replay };
archiveCardFootage(c, { name: "QA 1", bouts: [bout] }); archiveCardFootage(c, { name: "QA 1", bouts: [bout] });
assert.equal(Object.keys(c.filmLibrary).length, 1);
assert.equal(c.filmArchive[c.me.id].length, 1); assert.equal(c.filmArchive[c.me.id][0].moves[0][0], "jab");
function side(tag) { return { tag, fighterName: tag, pos: new THREE.Vector3(), target: new THREE.Vector3(), ring: { visible: true }, f: { root: new THREE.Group(), lastPos: new THREE.Vector3(), stopActions() {}, setBase() {}, play() {} } }; }
const arena = { scene: new THREE.Scene(), P: side("p"), O: side("o"), ref: { target: new THREE.Vector3() }, cornerSpot: { p: new THREE.Vector3(3, 0, 1), o: new THREE.Vector3(-3, 0, -1) }, presenter: { hide() {}, show() {} } };
const director = new WalkoutDirector(arena), phases = []; let completed = 0;
director.start({}, phase => phases.push(phase.side), () => completed++);
assert(arena.P.pos.x < -4.4); assert.equal(arena.O.f.root.visible, false);
for (let i = 0; i < 130; i++) { director.update(0.1); arena.P.pos.copy(arena.P.target); arena.O.pos.copy(arena.O.target); }
assert.deepEqual(phases, ["p", "o"]); assert.equal(completed, 1); assert.equal(director.active, false); assert(arena.P.pos.length() < 4.4 && arena.O.pos.length() < 4.4);
director.start({}, () => {}, () => completed++); director.stop(true); director.update(100);
assert.equal(completed, 2); assert(arena.P.f.root.visible && arena.O.f.root.visible); assert.equal(director.active, false);
console.log("PASS: saved entrance options; one-week film/scouting; once-per-break cutman and next-round-only tactics; immutable replay context; bounded/deduplicated footage; red then blue outside-cage walkouts and skip");

const cornerClock = { until: 8000, lastTick: 0 }; tickCornerClock(cornerClock, 5000, true); assert.equal(cornerClock.until, 13000); tickCornerClock(cornerClock, 5250, false); assert.equal(cornerClock.until, 13000); console.log("PASS: replay pauses actual elapsed corner time even under a slow frame/event loop");

const report = filmReport(c); assert(report.studied && report.footage[0].fight, "Recent archived footage must be playable after study");
assert(filmRoomHtml({ features: { film: report } }).includes("data-studyfootage"));
for (let i = 0; i < 16; i++) archiveCardFootage(c, { name: "Archive bound " + i, bouts: [bout] });
assert.equal(Object.keys(c.filmLibrary).length, 12); assert.equal(c.filmArchive[c.me.id].length, 3);
console.log("PASS: film-room playable footage link and hard limits on full footage / fighter summaries");
