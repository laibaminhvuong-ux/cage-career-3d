// Run: node --experimental-default-type=module tools/check_belts.mjs (web/*.js are ES modules). Real Three.js geometry; canvas text mocked for Node.
import assert from "node:assert/strict";
import * as THREE from "../web/vendor/three.module.min.js";
import { BELT_STYLES, beltStyle, createPromotionBelt } from "../web/belt3d.js";
globalThis.document = { createElement: () => ({ getContext: () => ({ clearRect() {}, fillText() {}, fillRect() {} }) }) };
const styles = new Set(), silhouettes = new Set();
let meshes = 0;
for (const org of Object.keys(BELT_STYLES)) {
  const hips = new THREE.Group(), chest = new THREE.Group();
  const belt = createPromotionBelt({ width: 1, hips, chest, org });
  assert.equal(belt.promotion, org);
  assert.equal(belt.waist.visible, false); assert.equal(belt.sash.visible, false); assert.equal(belt.sash.userData.plate.visible, false);
  assert.equal(belt.waist.parent, hips); assert.equal(belt.sash.parent, chest); assert.equal(belt.sash.userData.plate.parent, chest);
  styles.add(JSON.stringify(belt.style)); silhouettes.add(belt.style.shape);
  for (const root of [hips, chest]) root.traverse(o => {
    if (!o.isMesh) return;
    meshes++;
    for (const value of o.geometry.getAttribute("position").array) assert(Number.isFinite(value), "Belt geometry must be finite");
    assert(o.material);
  });
}
assert.equal(styles.size, 7); assert.equal(silhouettes.size, 7);
assert.equal(beltStyle("dfc"), BELT_STYLES.DFC);
assert.equal(beltStyle("Cage Warriors Europe"), BELT_STYLES.CWE);
assert.equal(beltStyle("unknown"), BELT_STYLES.GFC);
console.log(`PASS: ${styles.size} distinct belts and silhouettes; ${meshes} meshes; waist/shoulder attachments, initial visibility, aliases and fallback`);
