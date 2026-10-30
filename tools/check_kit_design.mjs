// Run: node tools/check_kit_design.mjs (web/*.js are ES modules). Real Three.js and real
// body/shorts geometry; the 2D canvas is mocked so no browser or GPU is needed.
import assert from "node:assert/strict";
import * as THREE from "../web/vendor/three.module.min.js";

// A recording 2D context: every drawing call and every style assignment is logged.
let ops = [];
const gradient = { addColorStop() {} };
const special = {
  createLinearGradient: () => gradient,
  createRadialGradient: () => gradient,
  createPattern: () => null,
  measureText: () => ({ width: 8 }),
  getImageData: (x, y, w, h) => ({ data: new Uint8ClampedArray(w * h * 4), width: w, height: h }),
};
const ctx = new Proxy({ canvas: null }, {
  get(t, k) {
    if (k in t) return t[k];
    if (k in special) return special[k];
    return (...a) => { ops.push([String(k), ...a]); };
  },
  set(t, k, v) { t[k] = v; ops.push(["=" + String(k), v]); return true; },
});
const makeCanvas = () => {
  const c = { width: 0, height: 0, getContext: () => ctx, toDataURL: () => "" };
  ctx.canvas = c;
  return c;
};
globalThis.document = {
  createElement: (tag) => (tag === "canvas" ? makeCanvas() : { tagName: tag, style: {}, appendChild() {} }),
  createElementNS: (ns, tag) => ({ tagName: tag, style: {} }),
  body: { appendChild() {} },
};

const { KIT_NAMES, addCylinderUV, kitAccent, kitTexture, kitTextureCount, paintKit } = await import("../web/kit3d.js");
const { LOOK_OPTIONS, parseLook, lookString, lookFromName, Fighter3D } = await import("../web/fighter3d.js");

// ---------------------------------------------------------------- the design table
assert.equal(KIT_NAMES.length, 10, "ten kit designs");
assert.equal(new Set(KIT_NAMES).size, 10, "design names are unique");
assert.equal(KIT_NAMES[0], "Plain", "index 0 must be Plain so older looks decode to it");
assert.deepEqual([...LOOK_OPTIONS.design], KIT_NAMES, "the look picker reads the same table");

// ---------------------------------------------------------------- every print paints
const signatures = new Set();
for (let i = 1; i < KIT_NAMES.length; i++) {
  ops = [];
  paintKit(ctx, i, "#c8102e");
  assert(ops.length > 6, `${KIT_NAMES[i]} must actually draw`);
  const signature = JSON.stringify(ops);
  assert(!signatures.has(signature), `${KIT_NAMES[i]} must not repeat another design`);
  signatures.add(signature);
  // the whole garment is covered first, so no bare canvas shows through the print
  assert(ops.some(([op, x, y, w, h]) => op === "fillRect" && x === 0 && y === 0 && w === 128 && h === 128),
    `${KIT_NAMES[i]} must fill the base colour`);
  // the print contrasts with the kit it sits on (filled or stroked)
  const paints = (color) => ops.some(([op, v]) => (op === "=fillStyle" || op === "=strokeStyle") && v === color);
  assert(paints(kitAccent("#c8102e")), `${KIT_NAMES[i]} must use the contrasting print colour`);
  paintKit(ctx, i, "#f2f2f2");
  assert(paints("#141414"), `${KIT_NAMES[i]} must print dark on a light kit`);
  paintKit(ctx, i, "#151515");
  assert(paints("#f5f5f5"), `${KIT_NAMES[i]} must print light on a dark kit`);
}

// ---------------------------------------------------------------- the accent
assert.equal(kitAccent("#f5f5f5"), "#141414", "light kit gets a dark print");
assert.equal(kitAccent("#151515"), "#f5f5f5", "dark kit gets a light print");
assert.equal(kitAccent("#c8102e"), "#f5f5f5");
assert.equal(kitAccent("#e8a91c"), "#141414");

// ---------------------------------------------------------------- the maps (shared, per colour)
const red = kitTexture(3, "#c8102e");
assert(red && red.isCanvasTexture, "a design yields a canvas texture");
assert.equal(red.image.width, 128);
assert.equal(kitTexture(3, "#C8102E"), red, "the same design and colour reuse one map");
assert.notEqual(kitTexture(3, "#1d4ed8"), red, "another colour gets its own map");
assert.equal(kitTexture(0, "#c8102e"), null, "Plain adds no texture at all");
const before = kitTextureCount();
kitTexture(4, "#15803d");
assert.equal(kitTextureCount(), before + 1);
kitTexture(4, "#15803d");
assert.equal(kitTextureCount(), before + 1, "cached, not repainted");

// ---------------------------------------------------------------- the wrap
const g = new THREE.BufferGeometry();
g.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 1, 1, 0, 0, 0, 0, -1, -1, 1, 0], 3));
const uv = addCylinderUV(g).getAttribute("uv");
assert(uv, "the cloth gets UVs");
assert.equal(uv.count, 4);
assert(Math.abs(uv.getX(0) - 0.5) < 1e-6, "front centre is u = 0.5");
assert(Math.abs(uv.getX(1) - 0.75) < 1e-6, "the fighter's left is u = 0.75");
assert(Math.abs(uv.getX(2) - 1) < 1e-6, "the back is the seam");
assert(Math.abs(uv.getX(3) - 0.25) < 1e-6, "the fighter's right is u = 0.25");
assert(Math.abs(uv.getY(0) - 0) < 1e-6 && Math.abs(uv.getY(3) - 1) < 1e-6, "v runs from hem to waist");
for (let i = 0; i < uv.count; i++) {
  assert(Number.isFinite(uv.getX(i)) && uv.getX(i) >= 0 && uv.getX(i) <= 1, "u stays inside the map");
  assert(Number.isFinite(uv.getY(i)) && uv.getY(i) >= 0 && uv.getY(i) <= 1, "v stays inside the map");
}
assert.equal(addCylinderUV(g).getAttribute("uv"), uv, "adding UVs twice is a no-op");

// ---------------------------------------------------------------- saves stay compatible
// a look saved before designs existed: every field the old build wrote, and nothing after it
const full = lookString(parseLook(""));
const legacy = full.split(",").slice(0, -1).join(",");
assert.equal(parseLook(legacy).design, 0, "older looks read as Plain");
assert.equal(lookString(parseLook(legacy)), full, "and re-save with the new trailing field");
assert.equal(parseLook(legacy + ",7").design, 7, "the design survives a round trip");
assert.equal(parseLook(legacy + ",99").design, 9, "out-of-range designs wrap");
assert.equal(lookString(parseLook(legacy + ",7")), full.split(",").slice(0, -1).concat("7").join(","));
assert.equal(lookString({ ...parseLook(""), design: 4 }).split(",").pop(), "4", "design is the last field, so no older field moved");
const designs = new Set();
for (let i = 0; i < 300; i++) designs.add(lookFromName("NPC " + i).design);
assert.equal(designs.size, 10, "townsfolk draw every design");
assert.equal(lookFromName("Same Name").design, lookFromName("Same Name").design, "an NPC keeps the same clothes");

// ---------------------------------------------------------------- the real fighter
const kitLook = { ...parseLook(""), design: 6, body: 1, abs: 1 }; // Flames on the default red
const fighter = new Fighter3D({ look: kitLook, weightClass: 2, detail: "low" });
const flameMap = kitTexture(6, "#c8102e");
let printed = 0, uvMeshes = 0, bad = 0;
fighter.root.traverse((o) => {
  if (!o.isMesh) return;
  const positions = o.geometry.getAttribute("position");
  for (let i = 0; i < positions.count; i += 41) if (!Number.isFinite(positions.getY(i))) bad++;
  if (!o.material || o.material.map !== flameMap) return;
  printed++;
  const u = o.geometry.getAttribute("uv");
  assert(u, "a printed garment must carry wrap UVs");
  uvMeshes++;
  for (let i = 0; i < u.count; i++) {
    if (!(u.getX(i) >= 0 && u.getX(i) <= 1 && u.getY(i) >= 0 && u.getY(i) <= 1)) bad++;
  }
});
assert(printed >= 1, "the flame kit must reach the fight shorts");
assert(uvMeshes >= 1);
assert.equal(bad, 0, "no broken geometry or UV in the dressed fighter");

const plainFighter = new Fighter3D({ look: { ...parseLook(""), design: 0, body: 1, abs: 1 }, weightClass: 2, detail: "low" });
let plainKits = 0;
plainFighter.root.traverse((o) => { if (o.isMesh && o.material && o.material.map === flameMap) plainKits++; });
assert.equal(plainKits, 0, "Plain shorts stay untextured");

// in life: the street shirt wears the same design
const casual = new Fighter3D({ casual: true, look: { ...parseLook(""), design: 3, body: 1, abs: 1 }, weightClass: 2, detail: "low", shirt: "#1f2937" });
const pinstripe = kitTexture(3, "#1f2937");
let shirts = 0;
casual.root.traverse((o) => {
  if (o.isMesh && o.material && o.material.map === pinstripe) {
    shirts++;
    assert(o.geometry.getAttribute("uv"), "the printed street shirt has UVs too");
  }
});
assert(shirts >= 1, "the design shows on the street shirt, not only in the cage");

fighter.dispose(); plainFighter.dispose(); casual.dispose();
console.log(`PASS: ${KIT_NAMES.length} designs (9 prints) over any kit colour, shared 128px maps, wrap UVs, old looks stay Plain, fight shorts and street shirt both printed`);
