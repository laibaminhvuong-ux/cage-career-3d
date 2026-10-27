// Run: node tools/check_fighter_dispose.cjs. No WebGL or dependencies needed.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const source = fs.readFileSync(path.join(__dirname, "../web/fighter3d.js"), "utf8");
const start = source.lastIndexOf("\n  dispose() {");
assert(start >= 0, "Fighter disposal method must exist");
const method = source.slice(start, source.lastIndexOf("\n}"));
const resource = () => ({ count: 0, dispose() { this.count++; } });
const sharedGeo = resource(), bodyGeo = resource(), tattooGeo = resource(), privateGeo = resource();
const fur = resource(), skin = resource(), trim = resource(), skeleton = resource();
const objects = [
  { isMesh: true, geometry: sharedGeo, material: fur },
  { isMesh: true, isSkinnedMesh: true, geometry: bodyGeo, material: skin, skeleton },
  { isMesh: true, isSkinnedMesh: true, geometry: tattooGeo, material: [skin, trim], skeleton },
  { isMesh: true, geometry: privateGeo, material: [fur, skin] },
  { isMesh: true, geometry: privateGeo, material: skin },
];
const context = { shared: { sharedGeo }, furMats: new Map([["cached-hair", fur]]) };
vm.createContext(context);
vm.runInContext("globalThis.Fighter = class {" + method + "}", context);
function fighter(meshes) {
  const f = new context.Fighter();
  f.sharedGeometry = new Set([bodyGeo]); f.tattoos = [{ geometry: tattooGeo }];
  f.root = { traverse(fn) { meshes.forEach(fn); }, removeFromParent() { f.detached = true; } };
  return f;
}
const first = fighter(objects); first.dispose();
for (const r of [sharedGeo, bodyGeo, tattooGeo, fur]) assert.equal(r.count, 0, "Cached resource must survive fighter disposal");
for (const r of [privateGeo, skin, trim, skeleton]) assert.equal(r.count, 1, "Private resource must be released exactly once");
assert(first.detached);
const second = fighter([{ isMesh: true, geometry: sharedGeo, material: fur }]); second.dispose();
assert.equal(fur.count, 0, "Disposing another fighter must preserve the same cached hair material");
assert(second.detached);
console.log("PASS: cached hair/body/tattoo resources survive two fighter removals; owned geometry/materials/skeleton released exactly once");
