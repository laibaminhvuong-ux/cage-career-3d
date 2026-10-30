// Run with Node: node tools/check_venue_extras.mjs
// Dresses the REAL club, ink studio and realtor's office (buildInterior from web/world3d.js,
// extracted into a VM with a GPU-free canvas stub) and checks every added prop fits the room
// it lands in: inside the walls, out of the furniture, out of the door.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import * as THREE from "../web/vendor/three.module.min.js";
import { decorateVenueExtras, EXTRAS_VENUES } from "../web/venue-extras3d.js";
import { decorateVenue } from "../web/venue-details3d.js";

// ---- the real buildInterior(), with no renderer and a canvas that swallows every 2-D call
const sticky = new Proxy(function () {}, {
  get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : k === "then" ? undefined : sticky),
  apply: () => sticky,
  construct: () => ({ width: 10, height: 10 }),
});
class FighterStub {
  constructor() {
    this.root = new THREE.Group();
    return new Proxy(this, { get: (t, k) => (k in t ? t[k] : () => {}) });
  }
  dispose() {}
}
const context = {
  THREE,
  console,
  performance,
  setInterval: () => 0,
  clearInterval: () => {},
  document: { createElement: () => ({ getContext: () => sticky, width: 10, height: 10, style: {} }) },
  Fighter3D: FighterStub,
  attack: 1,
  parseLook: () => ({}),
  lookFromName: () => ({}),
  LOOK_OPTIONS: [],
  buildHouse: () => ({ group: new THREE.Group(), w: 0, d: 0, h: 0, solids: [], people: [], tick() {} }),
};const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
// the module under test draws its signs with document.createElement("canvas")
globalThis.document = context.document;
const source = fs.readFileSync(path.join(root, "web/world3d.js"), "utf8")
  .replace(/^import .*$/gm, "")
  .replace(/^export /gm, "");
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.buildInterior = buildInterior;`, context);
const buildInterior = context.buildInterior;
assert.equal(typeof buildInterior, "function", "buildInterior must be reachable from world3d.js");

const overlap = (a, b) => a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1];
const rooms = { club: [16, 12, 4.2], ink: [10, 8, 3.2], realty: [12, 9, 3.2] };
assert.deepEqual(EXTRAS_VENUES.slice().sort(), Object.keys(rooms).sort(), "one room profile per dressed venue");

for (const [id, [w, d, h]] of Object.entries(rooms)) {
  const room = buildInterior(id, { house: 2, partner: null });
  assert.equal(room.w, w, `${id} width`);
  assert.equal(room.d, d, `${id} depth`);
  assert.equal(room.h, h, `${id} height`);
  const ownSolids = room.solids.map((s) => s.slice());
  const ownChildren = room.group.children.length;
  const ownLook = JSON.stringify(room.look || null);

  // count the room's own tick calls through the wrapper, so our wrap can be told apart
  let ownTicks = 0;
  let ownArgs = null;
  const ownTick = room.tick;
  room.tick = (dt, t) => { ownTicks++; ownArgs = [dt, t]; ownTick(dt, t); };

  assert.equal(decorateVenueExtras(id, room), room, "returns the interior it was given");
  const extras = room.extras;
  assert.equal(extras.name, `venue-extras-${id}`);
  assert.equal(extras.parent, room.group, "props hang off the room group");
  assert.equal(room.group.children.length, ownChildren + 1, "exactly one new group in the room");
  assert.equal(JSON.stringify(room.look || null), ownLook, "the room's grade is untouched");

  const props = extras.children;
  assert.ok(props.length >= 4, `${id} gets several distinct props`);
  const kinds = new Set(props.map((p) => p.userData.prop));
  for (const k of kinds) assert.ok(["floor", "surface", "wall", "ceiling"].includes(k), `${id}: unknown prop kind ${k}`);
  assert.ok(kinds.has("floor") && (kinds.has("surface") || kinds.has("wall")), `${id}: props stand and hang`);

  let meshes = 0;
  const lights = [];
  const textures = new Map();
  extras.traverse((o) => {
    if (o.isMesh) meshes++;
    if (o.isLight) lights.push(o);
    if (o.material && o.material.map) textures.set(o.material.map, o.material.map.version);
  });
  assert.ok(meshes >= 40, `${id} is dressed in real geometry (${meshes} meshes)`);
  assert.equal(lights.length, 0, "no lights are added: the room lights itself");

  // 1. nothing pokes through a wall, floor or ceiling
  for (const p of props) {
    const box = new THREE.Box3().setFromObject(p);
    assert.ok(Number.isFinite(box.min.x) && Number.isFinite(box.max.y), `${id}/${p.name}: finite bounds`);
    assert.ok(box.min.x >= -w / 2 - 0.07 && box.max.x <= w / 2 + 0.07, `${id}/${p.name}: inside the side walls`);
    assert.ok(box.min.z >= -d / 2 - 0.07 && box.max.z <= d / 2 + 0.07, `${id}/${p.name}: inside the end walls`);
    assert.ok(box.min.y >= -0.08 && box.max.y <= h + 0.02, `${id}/${p.name}: between floor and ceiling`);
  }

  // 2. furniture standing on the floor never intersects the room's existing furniture
  for (const p of props.filter((x) => x.userData.prop === "floor")) {
    const box = new THREE.Box3().setFromObject(p);
    const footprint = [box.min.x, box.min.z, box.max.x, box.max.z];
    for (const s of ownSolids) assert.ok(!overlap(footprint, s), `${id}/${p.name}: clear of existing furniture`);
  }

  // 3. the collision boxes we add are inside the room, off the old furniture and out of the doorway
  const added = room.solids.slice(ownSolids.length);
  assert.ok(added.length >= 2, `${id}: floor props are walkable-around`);
  for (const s of added) {
    assert.ok(s[0] >= -w / 2 && s[2] <= w / 2 && s[1] >= -d / 2 && s[3] <= d / 2, `${id}: collision box inside the room`);
    for (const o of ownSolids) assert.ok(!overlap(s, o), `${id}: collision box does not stack on existing furniture`);
    assert.ok(s[0] > 1 || s[2] < -1 || s[1] > d / 2 || s[3] < d / 2 - 3.1, `${id}: entrance stays walkable`);
  }

  // 4. adding it twice changes nothing
  const solidCount = room.solids.length;
  decorateVenueExtras(id, room);
  assert.equal(room.extras, extras, "idempotent: same group");
  assert.equal(extras.children.length, props.length, "idempotent: no duplicate props");
  assert.equal(room.solids.length, solidCount, "idempotent: no duplicate collision boxes");

  // 5. the room's own animation keeps running, ours too, and no canvas uploads per frame
  for (let n = 0; n < 600; n++) room.tick(1 / 60, n / 60);
  assert.equal(ownTicks, 600, `${id}: the room's own tick still runs every frame`);
  assert.deepEqual(ownArgs, [1 / 60, 599 / 60], `${id}: tick arguments pass through unchanged`);
  for (const [texture, version] of textures) assert.equal(texture.version, version, `${id}: no per-frame canvas uploads`);
  extras.traverse((o) => {
    if (!o.isMesh) return;
    for (const v of [...o.position.toArray(), ...o.rotation.toArray().slice(0, 3), ...o.scale.toArray()]) {
      assert.ok(Number.isFinite(v), `${id}: animated transforms stay finite`);
    }
  });
  console.log(`PASS: ${id} — ${props.length} props / ${meshes} meshes inside the room, clear of furniture and the door, no added lights, room tick preserved`);
}

// ---- rooms this module leaves alone, and the two decorators composing
for (const id of ["home", "cafe", "gym", "cars", "pets", "arena", "nope"]) {
  const fake = { group: new THREE.Group(), solids: [], tick() {} };
  const before = fake.tick;
  assert.equal(decorateVenueExtras(id, fake), fake);
  assert.equal(fake.group.children.length, 0, `${id}: untouched by venue extras`);
  assert.equal(fake.tick, before, `${id}: tick untouched`);
  assert.equal(fake.extras, undefined);
}
{
  // a café goes through Codex's decorator first, then this one, which must leave it alone
  const room = buildInterior("cafe", { house: 1, partner: null });
  decorateVenue("cafe", room);
  const children = room.group.children.length;
  const solids = room.solids.length;
  decorateVenueExtras("cafe", room);
  assert.equal(room.group.children.length, children, "a venue already dressed by venue-details3d is left alone");
  assert.equal(room.solids.length, solids);
  assert.equal(room.extras, undefined);
}
console.log(`PASS: only ${EXTRAS_VENUES.join(", ")} are dressed; every other interior is untouched`);
