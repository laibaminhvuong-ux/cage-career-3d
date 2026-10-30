// Your home, room by room. A house is a floor plan of rooms you walk between through doorways:
// the cheaper the house, the fewer the rooms; the mansion has a cinema, a money vault with a
// diving board and a shark tank. The middle column is the hallway spine (front door at the
// front of the living room); every other room opens off its neighbours in the same row.
// Furniture comes from the world's building kit (K, see world3d.js).
import * as THREE from "./vendor/three.module.min.js";

const TAU = Math.PI * 2;
const T = 0.12;      // half a wall's thickness: each room's walls stand this far in
const DOOR = 2.0;    // doorway width
const DOOR_H = 2.3;  // doorway height

/** The floor plans, cheapest first. Rows run from the front door back. */
const PLANS = [
  { cw: 8, cd: 7, h: 3, rows: [["bath", "living", "bedroom"]] },
  { cw: 8, cd: 7, h: 3, rows: [["bath", "living", "bedroom"], ["office", "kitchen", "laundry"]] },
  { cw: 8.5, cd: 7.5, h: 3.2, rows: [["bath", "living", "master"], ["kids", "kitchen", "gym"]] },
  { cw: 9, cd: 8, h: 3.6, rows: [["spa", "gaming", "living", "master", "closet"], ["gym", "cinema", "kitchen", "pool", "wine"]] },
  { cw: 10, cd: 9, h: 4, rows: [["spa", "gaming", "living", "master", "sneakers"], ["recovery", "cinema", "kitchen", "pool", "trophies"], ["octagon", "studio", "vault", "aquarium", "ballpit"]] },
];

const look = (o = {}) => ({ bloom: [0.3, 0.5, 0.88], ao: 0.7, contrast: 1.1, saturation: 1.1, warmth: 0.7, vignette: 0.32, grain: 0.016, ...o });

// ------------------------------------------------------------------ small helpers

const glow = (color) => new THREE.MeshBasicMaterial({ color, toneMapped: false });
const plane = (w, h, m) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
const stdMat = (o) => new THREE.MeshStandardMaterial(o);

/** Hang something on one of the room's walls, facing into the room. */
function onWall(C, obj, side, along, y, inset = T + 0.02) {
  const { w, d } = C;
  if (side === "back") obj.position.set(along, y, -d / 2 + inset);
  else if (side === "front") { obj.position.set(along, y, d / 2 - inset); obj.rotation.y = Math.PI; }
  else if (side === "left") { obj.position.set(-w / 2 + inset, y, along); obj.rotation.y = Math.PI / 2; }
  else { obj.position.set(w / 2 - inset, y, along); obj.rotation.y = -Math.PI / 2; }
  C.g.add(obj);
  return obj;
}
function rug(C, tex, w, d, x, z) {
  const r = plane(w, d, stdMat({ map: tex, roughness: 1 }));
  r.rotation.x = -Math.PI / 2;
  r.position.set(x, 0.012, z);
  r.receiveShadow = true;
  C.g.add(r);
}
/** A window with a view and curtains, on an outside wall. */
function window_(C, side, along, night = false, curtain = "#efe6d4") {
  const { K } = C;
  const win = new THREE.Group();
  win.add(plane(1.6, 1.2, new THREE.MeshBasicMaterial({ map: K.viewTexture(night), toneMapped: false })));
  K.at(K.box(1.75, 0.08, 0.06, "#e8e4dc"), 0, 0.64, 0, win);
  K.at(K.box(1.75, 0.08, 0.06, "#e8e4dc"), 0, -0.64, 0, win);
  for (const x of [-0.84, 0, 0.84]) K.at(K.box(0.06, 1.3, 0.06, "#e8e4dc"), x, 0, 0, win);
  K.at(K.box(1.8, 0.05, 0.18, "#e8e4dc"), 0, -0.68, 0.08, win);
  onWall(C, win, side, along, 1.65);
  onWall(C, K.curtains(1.7, 2.4, curtain), side, along, 0, T + 0.16);
}
function screen(C, w, h, tex) {
  const g = new THREE.Group();
  C.K.at(C.K.box(w + 0.08, h + 0.08, 0.06, "#0b0b0d"), 0, 0, 0, g);
  C.K.at(plane(w, h, new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })), 0, 0, 0.035, g);
  return g;
}
/** A bed, head toward -z. */
function bed(K, wd = 1.6, duvet = "#e5e7eb", frame = "#3b2a1d", head = null) {
  const g = new THREE.Group();
  const L = 2.1;
  K.at(K.box(wd + 0.1, 0.3, L, frame), 0, 0.15, 0, g);
  K.at(K.box(wd, 0.25, L - 0.1, "#f5f5f4", { roughness: 0.95 }), 0, 0.42, 0.02, g);
  K.at(K.box(wd + 0.06, 0.1, L * 0.62, duvet, { roughness: 0.95 }), 0, 0.58, L * 0.18, g);
  K.at(K.box(wd + 0.08, 0.04, 0.35, new THREE.Color(duvet).multiplyScalar(0.7).getStyle(), { roughness: 0.95 }), 0, 0.64, L * 0.32, g);
  for (const x of wd > 1.3 ? [-wd / 4, wd / 4] : [0]) {
    const p = K.at(K.cushion("#ffffff"), x, 0.64, -L / 2 + 0.32, g);
    p.scale.set(1.3, 0.55, 0.9);
  }
  K.at(K.box(wd + 0.24, 1.15, 0.12, head || frame, { roughness: 0.8 }), 0, 0.58, -L / 2 - 0.04, g);
  return g;
}
function nightstand(K, shade = "#f6e2bd") {
  const g = new THREE.Group();
  K.at(K.box(0.5, 0.55, 0.42, "#2a1d14"), 0, 0.28, 0, g);
  K.at(K.floorLamp(shade, 0.42), 0, 0.56, 0, g);
  return g;
}
function chandelier(K, r = 0.6) {
  const ch = new THREE.Group();
  K.at(K.cyl(r, r * 0.5, 0.4, "#d4af37", 12, { metalness: 0.9, roughness: 0.25 }), 0, 0, 0, ch);
  for (let i = 0; i < 10; i++) K.at(new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), glow("#fff3c4")), Math.cos((i / 10) * TAU) * r, -0.22, Math.sin((i / 10) * TAU) * r, ch);
  return ch;
}
/** Fake light beams: an additive cone from the ceiling. */
function beam(C, x, z, r = 0.8, color = "#fff3d6", top = C.h - 0.1) {
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(r, top, 20, 1, true), m);
  cone.position.set(x, top / 2, z);
  C.g.add(cone);
  C.K.at(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.16, 12), glow(color)), x, top - 0.02, z, C.g);
}
/** Many copies of one shape (balls, bottles, coins): one draw call. */
function instanced(C, geo, material, n, place) {
  const m = new THREE.InstancedMesh(geo, material, n);
  const o = new THREE.Object3D(), col = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const c = place(o, i, col);
    o.updateMatrix();
    m.setMatrixAt(i, o.matrix);
    if (c) m.setColorAt(i, col);
  }
  C.g.add(m);
  return m;
}

// ------------------------------------------------------------------ painted textures

/** A fake game on a monitor: a fighter, a racer or a space shooter. */
const gameTex = (K, kind) => K.canvasTex("game" + kind, 256, 160, (g, w, h) => {
  if (kind === 0) {
    const s = g.createLinearGradient(0, 0, 0, h); s.addColorStop(0, "#f97316"); s.addColorStop(1, "#7c2d12");
    g.fillStyle = s; g.fillRect(0, 0, w, h);
    g.fillStyle = "#1f2937"; g.fillRect(0, h * 0.75, w, h * 0.25);
    g.fillStyle = "#22c55e"; g.fillRect(10, 10, 100, 10); g.fillStyle = "#ef4444"; g.fillRect(w - 110, 10, 70, 10);
    g.fillStyle = "#fde68a"; g.font = "bold 22px Arial"; g.textAlign = "center"; g.fillText("ROUND 3", w / 2, 40);
    g.fillStyle = "#111";
    for (const [x, f] of [[90, 1], [165, -1]]) { g.fillRect(x - 8, 70, 16, 45); g.beginPath(); g.arc(x, 62, 10, 0, TAU); g.fill(); g.fillRect(x, 80, 26 * f, 7); }
  } else if (kind === 1) {
    g.fillStyle = "#38bdf8"; g.fillRect(0, 0, w, h / 2); g.fillStyle = "#16a34a"; g.fillRect(0, h / 2, w, h / 2);
    g.fillStyle = "#374151"; g.beginPath(); g.moveTo(w / 2 - 10, h / 2); g.lineTo(w / 2 + 10, h / 2); g.lineTo(w, h); g.lineTo(0, h); g.fill();
    g.fillStyle = "#fff"; for (let i = 0; i < 5; i++) g.fillRect(w / 2 - 2 - i, h / 2 + 8 + i * i * 3, 4 + i * 2, 4 + i);
    g.fillStyle = "#dc2626"; g.fillRect(w / 2 - 22, h - 38, 44, 22);
    g.fillStyle = "#fde68a"; g.font = "bold 16px Arial"; g.fillText("LAP 2/3  1st", 10, 20);
  } else {
    g.fillStyle = "#020617"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 80; i++) { g.fillStyle = "#fff"; g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5); }
    g.fillStyle = "#22d3ee"; g.beginPath(); g.moveTo(w / 2, h - 40); g.lineTo(w / 2 - 14, h - 14); g.lineTo(w / 2 + 14, h - 14); g.fill();
    g.fillStyle = "#a3e635"; for (let i = 0; i < 6; i++) g.fillRect(30 + i * 36, 30 + (i % 2) * 18, 20, 12);
    g.fillStyle = "#fde68a"; g.fillRect(w / 2 - 1, 60, 2, 40);
  }
}, false);
const movieTex = (K) => K.canvasTex("movie", 512, 216, (g, w, h) => {
  const s = g.createLinearGradient(0, 0, 0, h);
  s.addColorStop(0, "#1e1b4b"); s.addColorStop(0.55, "#be185d"); s.addColorStop(0.8, "#fb923c"); s.addColorStop(1, "#111");
  g.fillStyle = s; g.fillRect(0, 0, w, h);
  g.fillStyle = "#fde68a"; g.beginPath(); g.arc(w / 2, h * 0.72, 40, Math.PI, 0); g.fill();
  g.fillStyle = "#0a0a0a"; g.fillRect(0, h * 0.72, w, h * 0.28);
  for (const [x, f] of [[w / 2 - 70, 1], [w / 2 + 70, -1]]) { g.fillRect(x - 10, h * 0.42, 20, 70); g.beginPath(); g.arc(x, h * 0.38, 14, 0, TAU); g.fill(); g.fillRect(x, h * 0.48, 40 * f, 10); }
  g.fillStyle = "#fff"; g.font = "italic 900 34px Arial"; g.textAlign = "center"; g.fillText("CAGE CAREER: THE MOVIE", w / 2, 40);
}, false);
const waterTex = (K) => K.canvasTex("water", 256, 256, (g, w, h) => {
  g.fillStyle = "#0ea5e9"; g.fillRect(0, 0, w, h);
  g.strokeStyle = "rgba(224,247,255,0.55)"; g.lineWidth = 2;
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * w, y = Math.random() * h;
    g.beginPath(); g.moveTo(x, y); g.bezierCurveTo(x + 20, y - 15, x + 40, y + 15, x + 60, y); g.stroke();
  }
});
const tileTex = (K, c) => K.floorTexture(c, "tiles");
const foamTex = (K) => K.canvasTex("foam", 128, 128, (g) => {
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    const x = i * 32, y = j * 32;
    const vertical = (i + j) % 2;
    for (let k = 0; k < 4; k++) {
      g.fillStyle = k % 2 ? "#2b2d33" : "#1c1d22";
      if (vertical) g.fillRect(x + k * 8, y, 8, 32); else g.fillRect(x, y + k * 8, 32, 8);
    }
  }
});
const carpetTex = (K, base, fleck) => K.canvasTex("carpet" + base + fleck, 128, 128, (g) => {
  g.fillStyle = base; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 260; i++) { g.fillStyle = fleck; g.globalAlpha = 0.25 + Math.random() * 0.4; g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
  g.globalAlpha = 1;
});
const playTilesTex = (K) => K.canvasTex("playtiles", 128, 128, (g) => {
  const c = ["#f43f5e", "#facc15", "#22c55e", "#3b82f6"];
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { g.fillStyle = c[(i + j * 2) % 4]; g.fillRect(i * 64, j * 64, 64, 64); }
});

// ------------------------------------------------------------------ the rooms

function living(C) {
  const { K, g, w, d, h, lux, tier, ctx } = C;
  const x0 = -w / 4;
  rug(C, lux ? K.rugTexture("#6b1d2a", "#2a1016", "#d4af37") : K.rugTexture("#3f4d63", "#1f2633", "#c9b38a"), 3.4, 2.4, x0, 0);
  // the TV wall: slats, a media unit, a big screen with the fights on
  onWall(C, plane(3.2, h, stdMat({ map: K.tiled(K.slatTexture(lux ? "#3b2716" : "#6b4a2f"), 1.6, h / 2), roughness: 0.7 })), "back", x0, h / 2, T + 0.01);
  K.at(K.box(2.2, 0.45, 0.45, "#2a2420"), x0, 0.23, -d / 2 + 0.4, g);
  K.at(K.neon(3, "#ffcf8a"), x0, 0.5, -d / 2 + 0.22, g);
  onWall(C, screen(C, lux ? 2.4 : 1.9, lux ? 1.35 : 1.07, K.textTexture("🥊 FIGHT NIGHT LIVE", { w: 512, h: 288, bg: "#0e1a33", fg: "#f4b942", font: "bold 44px Arial" })), "back", x0, 1.45, T + 0.1);
  C.block(x0 - 1.1, -d / 2, x0 + 1.1, -d / 2 + 0.65);
  // a sofa facing it, a coffee table, cushions
  K.at(K.sofa(2.6, lux ? "#ece6da" : "#55606e"), x0, 0, 1.4, g).rotation.y = Math.PI;
  C.block(x0 - 1.3, 0.9, x0 + 1.3, 1.9);
  K.at(K.table(1.2, 0.6, 0.42, "#3a2c20"), x0, 0, 0, g);
  C.block(x0 - 0.6, -0.3, x0 + 0.6, 0.3);
  for (const [x, c] of [[-0.8, lux ? "#c9a227" : "#e0b04f"], [0.1, lux ? "#7a1f2b" : "#c2410c"], [0.85, lux ? "#c9a227" : "#e5e7eb"]]) K.at(K.cushion(c), x0 + x, 0.62, 1.7, g).rotation.set(-0.2, Math.PI, x * 0.15);
  K.at(K.floorLamp("#f6e2bd"), x0 - 1.7, 0, 1.6, g);
  // the other side: a fireplace (or bookcase) with armchairs; a kitchenette in the apartment
  const bx = w / 4 + 0.2;
  if (tier === 0) {
    K.at(K.counter(2.0, "#6b4e37"), bx - 0.3, 0, -d / 2 + 0.47, g);
    K.at(K.box(0.8, 1.9, 0.7, "#d9dde2", { metalness: 0.6, roughness: 0.3 }), bx + 1.3, 0.95, -d / 2 + 0.47, g);
    C.block(bx - 1.3, -d / 2, bx + 1.7, -d / 2 + 0.85);
    K.at(K.table(1.0, 0.8), bx, 0, 0.9, g);
    for (const x of [-0.5, 0.5]) K.at(K.chair(), bx + x, 0, 1.6, g).rotation.y = Math.PI;
    C.block(bx - 0.6, 0.5, bx + 0.6, 1.3);
  } else {
    if (tier >= 2) {
      const fp = K.fireplace(false);
      K.at(fp.group, bx, 0, -d / 2 + T + 0.25, g);
      C.tick(fp.tick);
      C.block(bx - 1.2, -d / 2, bx + 1.2, -d / 2 + 0.7);
      if (lux) onWall(C, K.picture(1.6, 1.0, K.emojiArt("🏆", "#1f2937")), "back", bx, 2.4);
    } else {
      K.at(K.bookshelf(1.6, Math.min(2.2, h - 0.5)), bx, 0, -d / 2 + T + 0.2, g);
      C.block(bx - 0.8, -d / 2, bx + 0.8, -d / 2 + 0.5);
    }
    for (const x of [-0.75, 0.75]) {
      K.at(K.sofa(0.95, lux ? "#7a1f2b" : "#a16207"), bx + x, 0, -0.2, g).rotation.y = Math.PI + x * 0.4;
      C.block(bx + x - 0.5, -0.7, bx + x + 0.5, 0.3);
    }
  }
  K.at(K.plant(1.2), -w / 2 + 0.7, 0, d / 2 - 0.7, g);
  K.at(K.plant(1.2), w / 2 - 0.7, 0, d / 2 - 0.7, g);
  for (const sx of [-1, 1]) window_(C, "front", sx * (w / 4 + 0.6), lux);
  if (lux) K.at(chandelier(K, 0.7), 0, h - 0.6, 0, g);
  if (ctx.partner) C.person(x0 + 0.4, 1.55, Math.PI, { seed: ctx.partner.name, female: (ctx.partner.gender || "F") === "F", shirt: "#e11d48", sit: true });
}

function kitchen(C) {
  const { K, g, w, d, h, lux, doors } = C;
  const body = lux ? "#f5f5f5" : "#6b4e37", top = lux ? "#1f1f1f" : "#d8d4cc";
  const runs = doors.back ? [[-w / 2 + 0.3, -1.15], [1.15, w / 2 - 0.3]] : [[-w / 2 + 0.3, w / 2 - 0.3]];
  for (const [a, b] of runs) {
    const len = b - a, mx = (a + b) / 2;
    K.at(K.counter(len, body, top), mx, 0, -d / 2 + T + 0.36, g);
    K.at(K.box(len, 0.7, 0.36, lux ? "#e7e5e4" : "#7a5a40"), mx, h - 0.8, -d / 2 + T + 0.18, g);
    onWall(C, plane(len, 0.65, stdMat({ map: K.tiled(tileTex(K, lux ? "#d9d4cb" : "#7d8c99"), len, 0.65), roughness: 0.2 })), "back", mx, 1.38);
    C.block(a, -d / 2, b, -d / 2 + 0.85);
  }
  // a hob with a hood over it, a sink with a tap
  const [hobA, hobB] = runs[runs.length - 1];
  const hx = (hobA + hobB) / 2;
  K.at(K.box(0.8, 0.02, 0.5, "#0b0b0b", { roughness: 0.2 }), hx, 1.06, -d / 2 + T + 0.36, g);
  K.at(K.box(0.9, 0.4, 0.5, "#c0c4ca", { metalness: 0.8, roughness: 0.3 }), hx, h - 1.3, -d / 2 + T + 0.3, g);
  const sx = (runs[0][0] + runs[0][1]) / 2;
  K.at(K.box(0.6, 0.03, 0.4, "#9ca3af", { metalness: 0.9, roughness: 0.2 }), sx, 1.06, -d / 2 + T + 0.36, g);
  K.at(K.cyl(0.02, 0.02, 0.35, "#c0c4ca", 8, { metalness: 0.9 }), sx, 1.22, -d / 2 + T + 0.15, g);
  // the fridge, the island with stools and a fruit bowl, pendants, a dining table
  K.at(K.box(0.85, 1.95, 0.7, "#d9dde2", { metalness: 0.6, roughness: 0.3 }), -w / 2 + T + 0.36, 0.98, -d / 2 + 1.6, g);
  C.block(-w / 2, -d / 2 + 1.2, -w / 2 + 0.9, -d / 2 + 2.0);
  const ix = -1.7;
  K.at(K.counter(2.4, lux ? "#1f2937" : body, lux ? "#f5f5f4" : top), ix, 0, 0.4, g);
  C.block(ix - 1.25, 0, ix + 1.25, 0.8);
  for (let i = 0; i < 3; i++) K.at(K.stool(lux ? "#e5e0d6" : "#2b2b2b"), ix - 0.8 + i * 0.8, 0, 1.2, g);
  for (let i = 0; i < 5; i++) K.at(K.sphere(0.07, ["#ef4444", "#f59e0b", "#84cc16"][i % 3]), ix + 0.4 + (i % 3) * 0.1, 1.12 + Math.floor(i / 3) * 0.08, 0.35 + (i % 2) * 0.1, g);
  for (const x of [-0.7, 0, 0.7]) K.at(K.pendant(h - 2.2, lux ? "#c9a227" : "#1f1f1f"), ix + x, h, 0.4, g);
  const tx = w / 4 + 0.4;
  K.at(K.table(1.8, 1.0), tx, 0, 1.2, g);
  for (const [x, z, r] of [[-0.55, -0.7, 0], [0.55, -0.7, 0], [-0.55, 0.7, Math.PI], [0.55, 0.7, Math.PI]]) K.at(K.chair(), tx + x, 0, 1.2 + z, g).rotation.y = r;
  C.block(tx - 1.0, 0.3, tx + 1.0, 2.1);
  K.at(K.pendant(h - 2.0, "#1f1f1f"), tx, h, 1.2, g);
}

/** Bedrooms: a bed against the back wall, nightstands, a wardrobe, a TV on the front wall. */
function bedroomCore(C, { width = 1.6, duvet = "#4b5b73", head = null, canopy = false, rugTex = null }) {
  const { K, g, w, d, doors } = C;
  const bx = w / 4 + 0.2, bz = -d / 2 + T + 1.12;
  K.at(bed(K, width, duvet, "#3b2a1d", head), bx, 0, bz, g);
  C.block(bx - width / 2 - 0.1, -d / 2, bx + width / 2 + 0.1, bz + 1.1);
  for (const sx of [-1, 1]) K.at(nightstand(K), bx + sx * (width / 2 + 0.4), 0, -d / 2 + T + 0.3, g);
  if (canopy) {
    for (const x of [-1, 1]) for (const z of [-1, 1]) K.at(K.cyl(0.05, 0.05, 2.4, "#d4af37", 8, { metalness: 0.9, roughness: 0.3 }), bx + x * (width / 2 + 0.1), 1.2, bz + z * 1.05, g);
    K.at(K.box(width + 0.3, 0.06, 2.2, "#f5efe3", { transparent: true, opacity: 0.6, roughness: 1 }), bx, 2.4, bz, g);
  }
  rug(C, rugTex || K.rugTexture("#e7dcc8", "#8b6f4e", "#5b4636"), width + 1.4, 1.8, bx, bz + 1.5);
  K.at(K.box(1.5, 2.2, 0.6, "#e5e0d6", { roughness: 0.6 }), -w / 4 - 0.3, 1.1, -d / 2 + T + 0.3, g);
  for (const x of [-0.04, 0.04]) K.at(K.box(0.02, 0.4, 0.02, "#a3a3a3", { metalness: 0.8 }), -w / 4 - 0.3 + x, 1.1, -d / 2 + T + 0.61, g);
  C.block(-w / 4 - 1.05, -d / 2, -w / 4 + 0.45, -d / 2 + 0.75);
  // a dresser with a TV over it, facing the bed
  K.at(K.box(1.4, 0.8, 0.45, "#2a1d14"), bx, 0.4, d / 2 - T - 0.24, g);
  C.block(bx - 0.7, d / 2 - 0.6, bx + 0.7, d / 2);
  onWall(C, screen(C, 1.3, 0.75, K.textTexture("Netflix & chill", { w: 512, h: 288, bg: "#111", fg: "#e50914", font: "bold 54px Arial" })), "front", bx, 1.55);
  // an armchair and a lamp in the free corner, a window on an outside wall
  K.at(K.sofa(0.95, "#a16207"), -w / 2 + 1.0, 0, d / 2 - 1.1, g).rotation.y = Math.PI * 0.75;
  C.block(-w / 2 + 0.4, d / 2 - 1.6, -w / 2 + 1.6, d / 2 - 0.5);
  K.at(K.floorLamp("#f6e2bd"), -w / 2 + 0.5, 0, d / 2 - 2.0, g);
  if (!doors.right) window_(C, "right", -1.6);
  else if (!doors.left) window_(C, "left", -1.6);
  K.at(K.plant(), w / 2 - 0.6, 0, d / 2 - 0.6, g);
}
const bedroom = (C) => bedroomCore(C, { width: 1.5 });
function master(C) {
  const { K, g, w, d, h, lux } = C;
  bedroomCore(C, { width: 2.0, duvet: lux ? "#ece6da" : "#7a1f2b", head: lux ? "#c9b38a" : "#4a3221", canopy: lux, rugTex: lux ? K.rugTexture("#ece6da", "#c9a227", "#8b6f4e") : null });
  // a bench at the foot of the bed, a vanity, art over the bed
  K.at(K.box(1.6, 0.45, 0.45, lux ? "#c9a227" : "#5b4636", { roughness: 0.6 }), w / 4 + 0.2, 0.23, -d / 2 + T + 2.45, g);
  K.at(K.picture(1.8, 0.9, K.emojiArt(lux ? "🌅" : "🌊", "#fde68a")), w / 4 + 0.2, 2.1, -d / 2 + T + 0.03, g);
  K.at(K.table(1.1, 0.5, 0.75, "#f5f5f4"), -w / 2 + T + 0.3, 0, -0.4 - 1.3, g).rotation.y = Math.PI / 2;
  onWall(C, plane(0.9, 1.1, stdMat({ color: "#d6e2ea", metalness: 1, roughness: 0.05 })), "left", -1.7, 1.55);
  C.block(-w / 2, -2.3, -w / 2 + 0.7, -1.1);
  if (lux) K.at(chandelier(K, 0.55), w / 4, h - 0.6, -0.3, g);
}

function kids(C) {
  const { K, g, w, d } = C;
  rug(C, K.rugTexture("#fde68a", "#60a5fa", "#f472b6"), 3, 2.2, 0.4, 0.6);
  // bunk beds
  const bx = w / 4 + 0.4, bz = -d / 2 + T + 1.12;
  K.at(bed(K, 1.0, "#3b82f6", "#f5f5f4"), bx, 0, bz, g);
  K.at(bed(K, 1.0, "#f43f5e", "#f5f5f4"), bx, 1.35, bz, g);
  for (const x of [-0.58, 0.58]) for (const z of [-1.08, 1.08]) K.at(K.box(0.08, 2.3, 0.08, "#f5f5f4"), bx + x, 1.15, bz + z, g);
  for (let i = 0; i < 5; i++) K.at(K.box(0.4, 0.04, 0.04, "#d4d4d4"), bx + 0.75, 0.35 + i * 0.35, bz + 0.9, g);
  C.block(bx - 0.7, -d / 2, bx + 0.9, bz + 1.15);
  // toys everywhere, a teddy, a little table
  const toyCols = ["#ef4444", "#3b82f6", "#22c55e", "#facc15", "#a855f7"];
  for (let i = 0; i < 12; i++) K.at(K.box(0.18, 0.18, 0.18, toyCols[i % 5]), -1 + (i % 4) * 0.35 + Math.sin(i) * 0.1, 0.09 + (i >= 8 ? 0.18 : 0), 0.6 + Math.floor(i / 4) * 0.3, g).rotation.y = i;
  const teddy = new THREE.Group();
  K.at(K.sphere(0.22, "#a16207"), 0, 0.22, 0, teddy);
  K.at(K.sphere(0.15, "#a16207"), 0, 0.52, 0, teddy);
  for (const x of [-0.1, 0.1]) K.at(K.sphere(0.06, "#a16207"), x, 0.64, 0, teddy);
  K.at(teddy, -w / 2 + 0.7, 0, -d / 2 + 0.8, g);
  K.at(K.table(0.9, 0.6, 0.45, "#fbbf24"), -w / 4, 0, d / 2 - 1.4, g);
  for (const x of [-0.5, 0.5]) K.at(K.chair("#60a5fa"), -w / 4 + x, 0, d / 2 - 1.4, g).scale.setScalar(0.65);
  C.block(-w / 4 - 0.8, d / 2 - 1.9, -w / 4 + 0.8, d / 2 - 0.9);
  // posters, a star night light
  onWall(C, K.picture(0.8, 1.1, K.emojiArt("🦖", "#bbf7d0")), "back", -w / 4 - 0.6, 1.8);
  onWall(C, K.picture(0.8, 1.1, K.emojiArt("🚀", "#bfdbfe")), "back", -w / 4 + 0.6, 1.8);
  onWall(C, K.picture(0.9, 1.2, K.poster("CHAMP", "IN TRAINING", "#1d4ed8", "#fde68a")), "front", w / 4, 1.7);
  K.at(new THREE.Mesh(new THREE.OctahedronGeometry(0.12), glow("#fde047")), bx - 0.9, 0.85, -d / 2 + T + 0.3, g);
  window_(C, "left", -1.8, false, "#fbcfe8");
}

function bathCore(C, { lux = false, gold = false }) {
  const { K, g, w, d } = C;
  const white = lux ? "#f5f5f4" : "#f8fafc";
  // the tub along the back wall, water in it
  const tx = -w / 4;
  K.at(K.box(1.8, 0.58, 0.85, white, { roughness: 0.15 }), tx, 0.29, -d / 2 + T + 0.45, g);
  K.at(plane(1.6, 0.65, stdMat({ map: K.tiled(waterTex(K), 1, 0.4), color: "#bae6fd", transparent: true, opacity: 0.75, roughness: 0.05 })), tx, 0.5, -d / 2 + T + 0.45, g).rotation.x = -Math.PI / 2;
  K.at(K.cyl(0.02, 0.02, 0.3, "#c0c4ca", 8, { metalness: 0.9 }), tx - 0.75, 0.8, -d / 2 + T + 0.1, g);
  C.block(tx - 0.95, -d / 2, tx + 0.95, -d / 2 + 0.95);
  // the toilet (a golden one, in the mansion)
  const tm = gold ? K.mat("#d4af37", { metalness: 1, roughness: 0.18 }) : white;
  const toilet = new THREE.Group();
  K.at(K.cyl(0.2, 0.16, 0.42, tm, 16), 0, 0.21, 0.1, toilet);
  K.at(new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.04, 8, 20), typeof tm === "string" ? K.mat(tm) : tm), 0, 0.44, 0.1, toilet).rotation.x = Math.PI / 2;
  K.at(K.box(0.45, 0.4, 0.2, tm), 0, 0.62, -0.2, toilet);
  K.at(toilet, w / 4 + 0.6, 0, -d / 2 + T + 0.35, g);
  C.block(w / 4 + 0.3, -d / 2, w / 4 + 0.9, -d / 2 + 0.8);
  // the vanity with a mirror, towels, a plant
  K.at(K.counter(1.6, lux ? "#1f2937" : "#e7e5e4", lux ? "#f5f5f4" : "#d6d3d1"), w / 4 - 0.2, 0, d / 2 - T - 0.36, g).rotation.y = Math.PI;
  K.at(K.cyl(0.22, 0.16, 0.12, white, 16), w / 4 - 0.2, 1.1, d / 2 - T - 0.36, g);
  onWall(C, plane(1.4, 0.9, stdMat({ color: "#d6e2ea", metalness: 1, roughness: 0.04 })), "front", w / 4 - 0.2, 1.75);
  C.block(w / 4 - 1.0, d / 2 - 0.8, w / 4 + 0.6, d / 2);
  for (let i = 0; i < 3; i++) K.at(K.box(0.4, 0.6, 0.06, ["#f5f5f4", "#93c5fd", "#fca5a5"][i], { roughness: 1 }), -w / 2 + T + 0.04, 1.3, -0.1 + i * 0.5 - 1.6, g).rotation.y = Math.PI / 2;
  // a glass shower in the front corner
  const sx = -w / 2 + 1.0, sz = d / 2 - 1.0;
  K.at(K.box(1.5, 2.1, 1.5, "#cfe8f5", { transparent: true, opacity: 0.18, roughness: 0.05 }), sx, 1.05, sz, g);
  K.at(K.cyl(0.18, 0.18, 0.03, "#c0c4ca", 16, { metalness: 0.9 }), sx, 2.05, sz, g);
  C.block(sx - 0.8, sz - 0.8, sx + 0.8, d / 2);
  K.at(K.plant(0.9), w / 2 - 0.6, 0, d / 2 - 0.6, g);
}
const bath = (C) => bathCore(C, {});

function spa(C) {
  const { K, g, w } = C;
  bathCore(C, { lux: true, gold: C.tier >= 4 });
  // a round jacuzzi that bubbles
  const jx = w / 4 - 0.4, jz = -0.4;
  K.at(K.cyl(1.05, 1.05, 0.55, "#e7e5e4", 28, { roughness: 0.3 }), jx, 0.28, jz, g);
  const water = K.at(new THREE.Mesh(new THREE.CircleGeometry(0.95, 28), stdMat({ map: K.tiled(waterTex(K), 1, 1), color: "#99f6e4", transparent: true, opacity: 0.85, roughness: 0.05 })), jx, 0.56, jz, g);
  water.rotation.x = -Math.PI / 2;
  const bubbles = [];
  for (let i = 0; i < 14; i++) bubbles.push(K.at(new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), glow("#ecfeff")), jx + Math.cos(i) * 0.6 * Math.random(), 0.57, jz + Math.sin(i) * 0.6 * Math.random(), g));
  C.tick((dt, t) => {
    bubbles.forEach((b, i) => { b.position.y = 0.57 + Math.abs(Math.sin(t * 3 + i)) * 0.05; });
    water.material.map.offset.x = (t * 0.03) % 1;
  });
  C.block(jx - 1.1, jz - 1.1, jx + 1.1, jz + 1.1);
  // a sauna cabin in the corner: slats, a glass door, glowing stones inside
  const sx = -w / 2 + 1.4, sz = 0.5;
  const cab = new THREE.Group();
  const slat = stdMat({ map: K.tiled(K.slatTexture("#b07d4f"), 1.2, 1.2), roughness: 0.8 });
  for (const [x, z, ry, len] of [[0, -1, 0, 2.2], [-1.1, 0, Math.PI / 2, 2], [1.1, 0, Math.PI / 2, 2]]) K.at(new THREE.Mesh(new THREE.BoxGeometry(len, 2.3, 0.08), slat), x, 1.15, z, cab).rotation.y = ry;
  K.at(K.box(2.2, 0.08, 2, "#8a5a33"), 0, 2.3, 0, cab);
  K.at(K.box(2.2, 2.3, 0.04, "#fed7aa", { transparent: true, opacity: 0.3, roughness: 0.05 }), 0, 1.15, 1, cab);
  K.at(K.box(1.8, 0.4, 0.6, "#b07d4f"), 0, 0.45, -0.6, cab);
  for (let i = 0; i < 6; i++) K.at(new THREE.Mesh(new THREE.DodecahedronGeometry(0.09), glow(i % 2 ? "#f97316" : "#fb923c")), 0.6 + (i % 3) * 0.12, 0.55, 0.35 + Math.floor(i / 3) * 0.12, cab);
  K.at(cab, sx, 0, sz, g);
  C.block(sx - 1.15, sz - 1.05, sx + 1.15, sz + 1.05);
  K.at(K.sign("SAUNA", 1.0, 0.3, { bg: "#3b2414", fg: "#fed7aa", font: "bold 70px Georgia" }), sx, 2.55, sz + 1.03, g);
  // candles
  for (let i = 0; i < 5; i++) {
    K.at(K.cyl(0.04, 0.04, 0.12, "#fef3c7", 8), jx - 0.9 + i * 0.4, 0.62, jz + 1.0, g);
    K.at(new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 4), glow("#ffb347")), jx - 0.9 + i * 0.4, 0.71, jz + 1.0, g);
  }
}

function gaming(C) {
  const { K, g, w, d, h } = C;
  // RGB everywhere, cycling
  const rgb = ["#ff3cac", "#784ba0", "#2b86c5", "#00f5d4", "#fee440"];
  const strips = [];
  for (const [len, side, along] of [[w - 0.6, "back", 0], [w - 0.6, "front", 0]]) for (const y of [0.25, h - 0.2]) strips.push(onWall(C, K.neon(len, rgb[0]), side, along, y, T + 0.05));
  C.tick((dt, t) => strips.forEach((s, i) => s.material.color.set(rgb[Math.floor(t * 1.5 + i) % rgb.length])));
  // the battle station: desk, three monitors, a racing chair
  const dx = -w / 4;
  K.at(K.box(2.6, 0.06, 0.8, "#111"), dx, 0.76, -d / 2 + T + 0.45, g);
  for (const x of [-1.2, 1.2]) K.at(K.box(0.06, 0.76, 0.7, "#111"), dx + x, 0.38, -d / 2 + T + 0.45, g);
  [-0.82, 0, 0.82].forEach((x, i) => {
    const m = K.at(screen(C, 0.72, 0.42, gameTex(K, i)), dx + x, 1.2, -d / 2 + T + 0.25, g);
    m.rotation.y = -x * 0.35;
  });
  K.at(K.box(0.5, 0.03, 0.16, "#111"), dx, 0.8, -d / 2 + T + 0.65, g);
  K.at(K.neon(0.48, "#00f5d4"), dx, 0.82, -d / 2 + T + 0.73, g);
  const chairG = new THREE.Group();
  K.at(K.box(0.6, 0.12, 0.6, "#111"), 0, 0.5, 0, chairG);
  K.at(K.box(0.6, 0.9, 0.12, "#dc2626"), 0, 1.0, 0.28, chairG);
  for (const x of [-0.26, 0.26]) K.at(K.box(0.1, 0.9, 0.14, "#111"), x, 1.0, 0.3, chairG);
  K.at(K.cyl(0.04, 0.04, 0.44, "#444", 8), 0, 0.24, 0, chairG);
  K.at(chairG, dx, 0, -d / 2 + T + 1.3, g);
  C.block(dx - 1.3, -d / 2, dx + 1.3, -d / 2 + 1.6);
  // arcade cabinets along the front wall
  [["FIGHT CLUB", "#f43f5e"], ["SPACE PUNCH", "#22d3ee"]].forEach(([name, c], i) => {
    const cab = new THREE.Group();
    K.at(K.box(0.8, 1.8, 0.75, "#111827"), 0, 0.9, 0, cab);
    const scr = K.at(plane(0.62, 0.48, new THREE.MeshBasicMaterial({ map: gameTex(K, i * 2), toneMapped: false })), 0, 1.25, 0.32, cab);
    scr.rotation.x = -0.25;
    K.at(K.sign(name, 0.78, 0.2, { bg: "#000", fg: c, font: "bold 64px Arial" }), 0, 1.68, 0.38, cab);
    for (let b = 0; b < 4; b++) K.at(K.sphere(0.03, ["#ef4444", "#facc15", "#22c55e", "#3b82f6"][b]), -0.15 + b * 0.1, 0.98, 0.38, cab);
    cab.rotation.y = Math.PI;
    K.at(cab, w / 4 - 0.6 + i * 1.1, 0, d / 2 - T - 0.4, g);
  });
  C.block(w / 4 - 1.1, d / 2 - 0.8, w / 4 + 1.1, d / 2);
  // a console corner: big TV, a couch, bean bags
  onWall(C, screen(C, 2.0, 1.12, gameTex(K, 1)), "back", w / 4 + 0.3, 1.5);
  K.at(K.sofa(2.0, "#312e81"), w / 4 + 0.3, 0, 0.4, g).rotation.y = Math.PI;
  C.block(w / 4 - 0.8, -0.1, w / 4 + 1.4, 0.9);
  for (const [x, z, c] of [[-0.6, 1.4, "#a855f7"], [0.4, 1.8, "#f59e0b"]]) {
    const bb = K.at(new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 10), K.mat(c, { roughness: 0.9 })), x, 0.25, z, g);
    bb.scale.set(1, 0.6, 1);
  }
  onWall(C, K.sign("GG EZ", 1.6, 0.55, { bg: "#0b0710", fg: "#00f5d4", font: "bold 110px Arial" }), "front", -w / 4, 2.3);
}

function gym(C) {
  const { K, g, w, d, h } = C;
  onWall(C, plane(w * 0.5, 2.2, stdMat({ color: "#cfd8e3", metalness: 1, roughness: 0.05 })), "back", -w / 5, 1.3);
  K.at(K.squatRack(), w / 4 + 0.4, 0, -d / 2 + 1.4, g);
  C.block(w / 4 - 0.5, -d / 2, w / 4 + 1.3, -d / 2 + 2.1);
  K.at(K.bench(), -w / 5, 0, -0.6, g);
  C.block(-w / 5 - 0.25, -1.2, -w / 5 + 0.25, 0);
  K.at(K.kettlebells(6), -w / 2 + 0.6, 0, d / 2 - 0.5, g);
  K.at(K.treadmill(), w / 2 - 0.9, 0, d / 2 - 1.6, g);
  C.block(w / 2 - 1.4, d / 2 - 2.6, w / 2 - 0.4, d / 2 - 0.6);
  const bag = K.at(K.cyl(0.2, 0.2, 1.2, "#7f1d1d", 14), -w / 4, h - 1.9, d / 4, g);
  K.at(K.cyl(0.01, 0.01, 1.2, "#9ca3af", 4, { metalness: 0.9 }), -w / 4, h - 0.7, d / 4, g);
  C.tick((dt, t) => { bag.rotation.z = Math.sin(t * 2) * 0.05; });
  C.block(-w / 4 - 0.3, d / 4 - 0.3, -w / 4 + 0.3, d / 4 + 0.3);
  const mats = plane(3, 2.4, K.mat("#b91c1c", { roughness: 0.85 }));
  mats.rotation.x = -Math.PI / 2;
  K.at(mats, -w / 5, 0.012, -0.6, g);
  K.at(K.box(0.6, 0.5, 0.6, "#3a2a1d"), w / 4, 0.25, 0.6, g);
  onWall(C, K.sign("NO DAYS OFF", 3, 0.6, { bg: "rgba(0,0,0,0)", fg: "#f4b942", font: "italic 900 90px Arial" }), "front", 0, h - 0.8);
}

function cinema(C) {
  const { K, g, w, d, h } = C;
  // the screen, flickering with the film, red curtains either side
  const sw = w - 2.4, sh = Math.min(h - 1.2, sw * 0.42);
  const scr = onWall(C, plane(sw, sh, new THREE.MeshBasicMaterial({ map: movieTex(K), toneMapped: false })), "back", 0, 0.6 + sh / 2 + 0.3, T + 0.03);
  C.tick((dt, t) => scr.material.color.setScalar(0.8 + 0.2 * Math.sin(t * 9) * Math.sin(t * 2.3)));
  for (const sx of [-1, 1]) K.at(K.curtains(0.6, h - 0.3, "#7f1d1d"), sx * (sw / 2 + 0.5), 0, -d / 2 + T + 0.08, g);
  // tiered recliners
  // (the band between the side doorways stays clear as the aisle)
  for (let r = 0; r < 2; r++) {
    const z = 1.4 + r * 1.35, y = r * 0.25;
    if (r) K.at(K.box(w - 1.4, y, 1.35, "#2a0f14"), 0, y / 2, z, g);
    for (let i = 0; i < 4; i++) {
      const x = -1.95 + i * 1.3;
      const s = new THREE.Group();
      K.at(K.box(0.8, 0.42, 0.75, "#991b1b", { roughness: 0.5 }), 0, 0.21, 0, s);
      K.at(K.box(0.8, 0.75, 0.18, "#991b1b", { roughness: 0.5 }), 0, 0.6, 0.32, s).rotation.x = 0.2;
      for (const ax of [-0.45, 0.45]) K.at(K.box(0.12, 0.58, 0.75, "#450a0a"), ax, 0.29, 0, s);
      K.at(s, x, y, z, g);
    }
    C.block(-w / 2 + 0.7, z - 0.5, w / 2 - 0.7, z + 0.5);
  }
  // a popcorn machine glowing in the corner
  const pc = new THREE.Group();
  K.at(K.box(0.6, 0.8, 0.5, "#b91c1c"), 0, 0.4, 0, pc);
  K.at(K.box(0.6, 0.7, 0.5, "#fde68a", { transparent: true, opacity: 0.35, roughness: 0.05 }), 0, 1.15, 0, pc);
  for (let i = 0; i < 18; i++) K.at(new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), glow("#fff7d6")), (Math.random() - 0.5) * 0.45, 0.85 + Math.random() * 0.2, (Math.random() - 0.5) * 0.35, pc);
  K.at(K.sign("POPCORN", 0.6, 0.16, { bg: "#7f1d1d", fg: "#fde68a", font: "bold 70px Arial" }), 0, 1.6, 0.26, pc);
  K.at(pc, -w / 2 + 0.8, 0, -d / 2 + 1.2, g);
  C.block(-w / 2 + 0.4, -d / 2 + 0.8, -w / 2 + 1.2, -d / 2 + 1.6);
  // a ceiling of stars
  const pts = [];
  for (let i = 0; i < 260; i++) pts.push((Math.random() - 0.5) * (w - 0.5), h - 0.02, (Math.random() - 0.5) * (d - 0.5));
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  g.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: "#fffbe6", size: 0.05, toneMapped: false })));
  // the projector's beam, from the back to the screen
  const bm = new THREE.Mesh(new THREE.ConeGeometry(sw * 0.45, d - 0.6, 4, 1, true), new THREE.MeshBasicMaterial({ color: "#c7d2fe", transparent: true, opacity: 0.04, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide }));
  bm.rotation.x = -Math.PI / 2;
  bm.rotation.y = Math.PI / 4;
  K.at(bm, 0, h - 0.7, 0, g);
  for (const side of ["left", "right"]) for (const z of [-1, 1.5]) onWall(C, new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8, 0, TAU, 0, Math.PI / 2), stdMat({ color: "#ffe2b0", emissive: "#ff9f43", emissiveIntensity: 1.2 })), side, z, 2.2).rotation.x = -Math.PI / 2;
}

function pool(C) {
  const { K, g, w, d, h } = C;
  // the pool fills the back; between the doorways a walkway, loungers along the front
  const pw = w - 2, pd = d / 2 - 1.8, pz = -d / 2 + 0.5 + pd / 2;
  const rimM = K.mat("#e7e5e4", { roughness: 0.4 });
  for (const [bw, bd, x, z] of [[pw + 0.4, 0.2, 0, pz - pd / 2 - 0.1], [pw + 0.4, 0.2, 0, pz + pd / 2 + 0.1], [0.2, pd, -pw / 2 - 0.1, pz], [0.2, pd, pw / 2 + 0.1, pz]]) K.at(K.box(bw, 0.45, bd, rimM), x, 0.22, z, g);
  const water = K.at(plane(pw, pd, stdMat({ map: K.tiled(waterTex(K), pw / 3, pd / 3), color: "#7dd3fc", transparent: true, opacity: 0.88, roughness: 0.04, metalness: 0.1 })), 0, 0.38, pz, g);
  water.rotation.x = -Math.PI / 2;
  const under = K.at(plane(pw, pd, glow("#0284c7")), 0, 0.02, pz, g);
  under.rotation.x = -Math.PI / 2;
  C.tick((dt, t) => { water.material.map.offset.set((t * 0.02) % 1, (t * 0.013) % 1); });
  C.block(-pw / 2 - 0.2, pz - pd / 2 - 0.2, pw / 2 + 0.2, pz + pd / 2 + 0.2);
  // an inflatable flamingo bobbing on the water
  const fl = new THREE.Group();
  K.at(new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.16, 10, 24), K.mat("#f472b6", { roughness: 0.3 })), 0, 0, 0, fl).rotation.x = Math.PI / 2;
  K.at(K.cyl(0.07, 0.09, 0.7, "#f472b6", 10), 0.35, 0.35, 0, fl);
  K.at(K.sphere(0.12, "#f472b6"), 0.35, 0.72, 0, fl);
  K.at(new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 8), K.mat("#111")), 0.46, 0.7, 0, fl).rotation.z = -Math.PI / 2;
  K.at(fl, -0.6, 0.42, pz, g);
  C.tick((dt, t) => { fl.position.y = 0.42 + Math.sin(t * 1.6) * 0.03; fl.rotation.y = Math.sin(t * 0.3) * 0.8; fl.position.x = -0.6 + Math.sin(t * 0.2) * 1.2; });
  // loungers, an umbrella, palms; a skylight
  for (const x of [-w / 4 - 0.6, -w / 4 + 0.6, w / 4 - 0.6, w / 4 + 0.6]) {
    const l = new THREE.Group();
    K.at(K.box(0.6, 0.12, 1.4, "#f5f5f4"), 0, 0.3, 0.2, l);
    K.at(K.box(0.6, 0.1, 0.7, "#f5f5f4"), 0, 0.55, -0.6, l).rotation.x = -0.6;
    K.at(K.box(0.58, 0.04, 1.9, "#0ea5e9", { roughness: 1 }), 0, 0.38, 0, l);
    K.at(l, x, 0, d / 2 - 1.4, g);
  }
  C.block(-w / 2, d / 2 - 2.4, -w / 4 + 1, d / 2);
  C.block(w / 4 - 1, d / 2 - 2.4, w / 2, d / 2);
  for (const sx of [-1, 1]) K.at(K.plant(1.6), sx * (w / 2 - 0.6), 0, 1.5, g);
  const sky = K.at(plane(w * 0.5, d * 0.35, glow("#e0f2fe")), 0, h - 0.01, pz, g);
  sky.rotation.x = Math.PI / 2;
}

function wine(C) {
  const { K, g, w, d, h } = C;
  // the wall of wine: a lattice of bottle ends
  const rw = w - 1.2, rh = h - 0.6;
  K.at(K.box(rw, rh, 0.4, "#3b2414"), 0, rh / 2, -d / 2 + T + 0.2, g);
  const cols = Math.floor(rw / 0.15), rows = Math.floor(rh / 0.15);
  instanced(C, new THREE.CylinderGeometry(0.035, 0.035, 0.06, 8), K.mat("#ffffff", { roughness: 0.15 }), cols * rows, (o, i, col) => {
    o.position.set(-rw / 2 + 0.08 + (i % cols) * 0.15, 0.12 + Math.floor(i / cols) * 0.15, -d / 2 + T + 0.42);
    o.rotation.x = Math.PI / 2;
    col.set(["#14532d", "#3f0d12", "#1e3a1e", "#4a1d1d", "#d4b483"][(i * 7) % 5]);
    return true;
  });
  C.block(-rw / 2, -d / 2, rw / 2, -d / 2 + 0.7);
  // barrels as tables, stools, a bar with pendants
  for (const x of [-w / 4, w / 4]) {
    const z = 1.6;
    K.at(K.cyl(0.42, 0.42, 1.0, "#7c4a24", 18), x, 0.5, z, g);
    for (const y of [0.15, 0.85]) K.at(new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.025, 6, 24), K.mat("#2b2b2b", { metalness: 0.6 })), x, y, z, g).rotation.x = Math.PI / 2;
    for (let i = 0; i < 2; i++) K.at(K.cyl(0.03, 0.035, 0.28, "#3f0d12", 8, { roughness: 0.1 }), x - 0.1 + i * 0.2, 1.14, z, g);
    for (const sx of [-0.7, 0.7]) K.at(K.stool("#3b2414"), x + sx, 0, z, g);
    C.block(x - 0.5, z - 0.5, x + 0.5, z + 0.5);
    K.at(K.pendant(h - 2.0, "#7c4a24", "#ffb860"), x, h, z, g);
  }
  K.at(new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.0), stdMat({ map: K.chalkTexture("Tasting", ["Red  ·  Bordeaux 1998", "White  ·  Chablis", "Champagne on ice"]), roughness: 0.9 })), 0, 1.8, d / 2 - T - 0.03, g).rotation.y = Math.PI;
}

function closet(C) {
  const { K, g, w, d, h } = C;
  const cols = ["#111827", "#f5f5f4", "#7f1d1d", "#1e3a8a", "#a16207", "#d4d4d8", "#14532d", "#f472b6"];
  // rails of clothes along the back wall and the outer side wall
  const rail = (len, place) => {
    const n = Math.floor(len / 0.16);
    for (let i = 0; i < n; i++) {
      const it = K.box(0.04, 0.9 + (i % 3) * 0.12, 0.5, cols[(i * 5) % cols.length], { roughness: 0.95 });
      place(it, -len / 2 + 0.08 + i * 0.16);
      it.rotation.y += (Math.random() - 0.5) * 0.2;
    }
  };
  K.at(K.cyl(0.015, 0.015, w - 1.4, "#d4af37", 8, { metalness: 0.9 }), 0, 1.95, -d / 2 + T + 0.35, g).rotation.z = Math.PI / 2;
  rail(w - 1.6, (it, a) => { it.rotation.y = Math.PI / 2; K.at(it, a, 1.5, -d / 2 + T + 0.35, g); });
  C.block(-w / 2, -d / 2, w / 2, -d / 2 + 0.7);
  // shoe shelves along the outer wall, lit from below
  for (let s = 0; s < 4; s++) {
    K.at(K.box(0.4, 0.04, d - 3, "#e7e5e4"), w / 2 - T - 0.22, 0.3 + s * 0.45, 0.5, g);
    for (let i = 0; i < Math.floor((d - 3.2) / 0.35); i++) {
      const sh = new THREE.Group();
      K.at(K.box(0.12, 0.05, 0.3, "#f5f5f4"), 0, 0.03, 0, sh);
      K.at(K.box(0.11, 0.1, 0.22, cols[(i + s) % cols.length]), 0, 0.1, -0.03, sh);
      K.at(sh, w / 2 - T - 0.22, 0.32 + s * 0.45, -d / 2 + 2.3 + i * 0.35, g);
    }
    K.at(K.neon(d - 3, "#fff1d6", true), w / 2 - T - 0.04, 0.33 + s * 0.45, 0.5, g).rotation.x = Math.PI / 2;
  }
  C.block(w / 2 - 0.5, -d / 2 + 2, w / 2, d / 2 - 0.6);
  // the island: a glass top over watches; a mirror; a chandelier; an ottoman
  K.at(K.box(1.8, 0.9, 0.9, "#f5f5f4"), -0.4, 0.45, 0.6, g);
  K.at(K.box(1.82, 0.04, 0.92, "#cfe8f5", { transparent: true, opacity: 0.4, roughness: 0.03 }), -0.4, 0.92, 0.6, g);
  for (let i = 0; i < 6; i++) K.at(K.cyl(0.05, 0.05, 0.02, i % 2 ? "#d4af37" : "#c0c4ca", 14, { metalness: 0.95, roughness: 0.15 }), -1.0 + i * 0.24, 0.89, 0.6, g);
  C.block(-1.35, 0.1, 0.55, 1.1);
  onWall(C, plane(0.9, 2.0, stdMat({ color: "#d6e2ea", metalness: 1, roughness: 0.04 })), "front", -w / 4, 1.2);
  K.at(chandelier(K, 0.45), -0.4, h - 0.6, 0.6, g);
  K.at(K.cyl(0.4, 0.4, 0.45, "#c9a227", 18, { roughness: 0.8 }), w / 4 - 1.2, 0.23, d / 2 - 1.4, g);
}

function recovery(C) {
  const { K, g, w, d, h } = C;
  // the cryo chamber, vapour pouring out of it
  const cx = -w / 4 - 0.4, cz = -d / 2 + 1.3;
  K.at(K.cyl(0.6, 0.6, 2.2, "#e5e7eb", 24, { metalness: 0.7, roughness: 0.25 }), cx, 1.1, cz, g);
  K.at(K.cyl(0.5, 0.5, 2.0, glow("#a5f3fc"), 24), cx, 1.1, cz + 0.12, g);
  K.at(K.sign("CRYO  -110°C", 1.0, 0.24, { bg: "#0c4a6e", fg: "#e0f2fe", font: "bold 60px Arial" }), cx, 2.45, cz + 0.62, g);
  const mist = [];
  const mistM = new THREE.MeshBasicMaterial({ color: "#e0f7ff", transparent: true, opacity: 0.09, depthWrite: false });
  for (let i = 0; i < 8; i++) mist.push(K.at(new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), mistM), cx, 0.2, cz + 0.6, g));
  C.tick((dt, t) => mist.forEach((m, i) => {
    const k = (t * 0.25 + i / 8) % 1;
    m.position.set(cx + Math.sin(i * 2.3) * k * 0.5, 0.12 + k * 0.15, cz + 0.6 + k * 0.6);
    m.scale.setScalar(0.5 + k * 0.7);
  }));
  C.block(cx - 0.7, -d / 2, cx + 0.7, cz + 0.7);
  // the ice bath
  const ix = w / 4 - 0.4;
  K.at(K.box(1.6, 0.7, 0.9, "#1f2937", { roughness: 0.3 }), ix, 0.35, -d / 2 + T + 0.5, g);
  K.at(plane(1.45, 0.75, stdMat({ color: "#67e8f9", transparent: true, opacity: 0.8, roughness: 0.03 })), ix, 0.62, -d / 2 + T + 0.5, g).rotation.x = -Math.PI / 2;
  for (let i = 0; i < 12; i++) K.at(K.box(0.12, 0.12, 0.12, "#ecfeff", { transparent: true, opacity: 0.8, roughness: 0.05 }), ix - 0.6 + (i % 6) * 0.24, 0.64, -d / 2 + T + 0.3 + Math.floor(i / 6) * 0.35, g).rotation.set(i, i * 2, 0);
  K.at(K.sign("ICE BATH  3°C", 1.2, 0.26, { bg: "#0f172a", fg: "#67e8f9", font: "bold 60px Arial" }), ix, 1.5, -d / 2 + T + 0.02, g);
  C.block(ix - 0.85, -d / 2, ix + 0.85, -d / 2 + 1.05);
  // a massage table, a red-light panel, a hyperbaric pod
  const mt = new THREE.Group();
  K.at(K.box(0.75, 0.12, 2.0, "#e5e7eb", { roughness: 0.6 }), 0, 0.72, 0, mt);
  for (const x of [-0.3, 0.3]) for (const z of [-0.85, 0.85]) K.at(K.box(0.05, 0.7, 0.05, "#9ca3af", { metalness: 0.6 }), x, 0.35, z, mt);
  K.at(K.box(0.7, 0.04, 0.6, "#bae6fd", { roughness: 1 }), 0, 0.8, 0.5, mt);
  K.at(mt, -w / 4, 0, d / 4, g);
  C.block(-w / 4 - 0.4, d / 4 - 1.05, -w / 4 + 0.4, d / 4 + 1.05);
  onWall(C, plane(1.2, 2.0, glow("#ff2a2a")), "front", w / 4 + 0.8, 1.3, T + 0.05);
  K.at(K.box(1.3, 2.1, 0.08, "#111"), w / 4 + 0.8, 1.3, d / 2 - T - 0.02, g);
  const pod = K.at(new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 1.8, 6, 16), stdMat({ color: "#e0f2fe", transparent: true, opacity: 0.35, roughness: 0.05 })), w / 4 - 0.2, 0.62, 2.2, g);
  pod.rotation.z = Math.PI / 2;
  K.at(K.box(2.6, 0.12, 0.8, "#9ca3af", { metalness: 0.6 }), w / 4 - 0.2, 0.08, 2.2, g);
  C.block(w / 4 - 1.6, 1.7, w / 4 + 1.2, 2.7);
  for (const [x, c] of [[-w / 2 + 0.6, "#22d3ee"], [-w / 2 + 1.3, "#a3e635"]]) K.at(K.sphere(0.32, c, { roughness: 0.5 }), x, 0.32, d / 2 - 0.6, g);
  onWall(C, K.sign("RECOVERY LAB", 2.4, 0.45, { bg: "#0b1220", fg: "#22d3ee", font: "bold 76px Arial" }), "back", 0, h - 0.6);
}

function trophies(C) {
  const { K, g, w, d } = C;
  // a red carpet between the doors, velvet ropes
  const carpet = plane(w, 1.4, K.mat("#991b1b", { roughness: 1 }));
  carpet.rotation.x = -Math.PI / 2;
  K.at(carpet, 0, 0.012, 0, g);
  for (const z of [-0.95, 0.95]) for (let i = 0; i < 5; i++) {
    const x = -w / 2 + 1.5 + i * ((w - 3) / 4);
    K.at(K.cyl(0.05, 0.08, 0.95, "#d4af37", 10, { metalness: 0.95, roughness: 0.2 }), x, 0.48, z, g);
    if (i < 4) K.at(K.cyl(0.03, 0.03, (w - 3) / 4, "#7f1d1d", 6), x + (w - 3) / 8, 0.85, z, g).rotation.z = Math.PI / 2;
  }
  // plinths under spotlights: belts and cups
  for (let i = 0; i < 4; i++) {
    const x = -w / 2 + 1.4 + i * ((w - 2.8) / 3), z = -d / 2 + 1.0;
    K.at(K.box(0.8, 1.0, 0.8, "#f5f5f4", { roughness: 0.25 }), x, 0.5, z, g);
    if (i % 2 === 0) {
      K.at(K.box(0.7, 0.18, 0.06, "#111"), x, 1.25, z, g);
      K.at(K.cyl(0.17, 0.17, 0.05, "#d4af37", 20, { metalness: 1, roughness: 0.15 }), x, 1.25, z + 0.04, g).rotation.x = Math.PI / 2;
    } else {
      K.at(K.cyl(0.16, 0.07, 0.35, "#d4af37", 16, { metalness: 1, roughness: 0.15 }), x, 1.2, z, g);
      for (const sx of [-1, 1]) K.at(new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.015, 6, 14), K.mat("#d4af37", { metalness: 1, roughness: 0.15 })), x + sx * 0.18, 1.25, z, g).rotation.y = Math.PI / 2;
      K.at(K.box(0.3, 0.08, 0.3, "#111"), x, 1.04, z, g);
    }
    beam(C, x, z, 0.7);
    C.block(x - 0.45, z - 0.45, x + 0.45, z + 0.45);
  }
  // fight posters, and a giant golden glove
  ["GRUDGE MATCH", "TITLE NIGHT", "THE RETURN"].forEach((t, i) => onWall(C, K.picture(1.0, 1.4, K.poster(t.split(" ")[0], t.split(" ")[1] || "", ["#7f1d1d", "#111827", "#1e3a8a"][i], "#f4b942")), "front", -w / 3 + i * (w / 3), 1.9));
  const glove = new THREE.Group();
  const gold = K.mat("#d4af37", { metalness: 1, roughness: 0.2 });
  K.at(K.box(0.8, 1.2, 0.8, "#111"), 0, 0.6, 0, glove);
  const fist = K.at(new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 14), gold), 0, 1.75, 0, glove);
  fist.scale.set(1, 1.15, 0.9);
  K.at(K.cyl(0.38, 0.42, 0.45, gold, 18), 0, 1.25, 0, glove);
  K.at(glove, w / 2 - 1.2, 0, d / 2 - 1.3, g);
  C.block(w / 2 - 1.7, d / 2 - 1.8, w / 2 - 0.7, d / 2 - 0.8);
}

function octagon(C) {
  const { K, g, w, d, h } = C;
  const blueMat = plane(w, d, K.mat("#1e3a8a", { roughness: 0.9 }));
  blueMat.rotation.x = -Math.PI / 2;
  K.at(blueMat, 0, 0.01, 0, g);
  // your own cage
  const R = Math.min(3, d / 2 - 0.9), ox = -0.8;
  const mat0 = new THREE.Mesh(new THREE.CircleGeometry(R, 8), stdMat({ map: K.textTexture("HOME OCTAGON", { w: 512, h: 512, bg: "#e7e2d6", fg: "#c8102e", font: "italic 900 64px Arial" }), roughness: 0.85 }));
  mat0.rotation.set(-Math.PI / 2, 0, Math.PI / 8);
  K.at(K.cyl(R + 0.2, R + 0.2, 0.3, "#0e0f12", 8), ox, 0.15, 0, g).rotation.y = Math.PI / 8;
  K.at(mat0, ox, 0.31, 0, g);
  const fence = K.canvasTex("fence", 64, 64, (x) => {
    x.strokeStyle = "#9aa0a8"; x.lineWidth = 3;
    x.beginPath(); x.moveTo(0, 0); x.lineTo(64, 64); x.moveTo(64, 0); x.lineTo(0, 64); x.stroke();
  });
  const fenceM = stdMat({ map: K.tiled(fence, 5, 3), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.4 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU, a2 = ((i + 1) / 8) * TAU;
    const x1 = Math.cos(a) * R, z1 = Math.sin(a) * R, x2 = Math.cos(a2) * R, z2 = Math.sin(a2) * R;
    K.at(K.cyl(0.06, 0.06, 1.7, "#111", 8), ox + x1, 1.15, z1, g);
    const p = K.at(plane(Math.hypot(x2 - x1, z2 - z1), 1.6, fenceM), ox + (x1 + x2) / 2, 1.1, (z1 + z2) / 2, g);
    p.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
  }
  C.block(ox - R - 0.3, -R - 0.3, ox + R + 0.3, R + 0.3);
  // heavy bags and a banner
  for (const z of [-d / 2 + 1.0, d / 2 - 1.0]) {
    K.at(K.cyl(0.2, 0.2, 1.2, "#111", 14), w / 2 - 1.0, h - 2.0, z, g);
    K.at(K.cyl(0.01, 0.01, 1.4, "#9ca3af", 4), w / 2 - 1.0, h - 0.7, z, g);
    C.block(w / 2 - 1.3, z - 0.3, w / 2 - 0.7, z + 0.3);
  }
  onWall(C, K.sign("CHAMPION'S HOUSE", 4, 0.8, { w: 1024, bg: "#7f1d1d", fg: "#f4b942", font: "italic 900 110px Arial" }), "back", ox, h - 0.9);
  beam(C, ox, 0, R * 0.8, "#fff7e0");
}

function studio(C) {
  const { K, g, w, d, h } = C;
  // the desk: faders, meters, a screen of waveforms, monitor speakers
  K.at(K.box(2.8, 0.85, 1.0, "#1f1f23"), 0, 0.43, -d / 2 + 1.4, g);
  const desk = K.at(K.box(2.8, 0.06, 1.0, "#2b2d33"), 0, 0.88, -d / 2 + 1.4, g);
  desk.rotation.x = -0.15;
  for (let i = 0; i < 24; i++) K.at(K.box(0.04, 0.03, 0.12, i % 6 ? "#9ca3af" : "#ef4444"), -1.2 + i * 0.104, 0.94, -d / 2 + 1.4 + (i % 2) * 0.1, g);
  const meters = [];
  for (let i = 0; i < 12; i++) meters.push(K.at(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.02), glow(i < 8 ? "#22c55e" : "#f59e0b")), -0.6 + i * 0.11, 1.2, -d / 2 + 0.95, g));
  C.tick((dt, t) => meters.forEach((m, i) => { m.scale.y = 0.2 + Math.abs(Math.sin(t * 6 + i * 0.7)) * 0.9; }));
  const wave = K.canvasTex("wave", 512, 200, (x, cw, ch) => {
    x.fillStyle = "#0b1020"; x.fillRect(0, 0, cw, ch);
    for (let tr = 0; tr < 4; tr++) {
      x.strokeStyle = ["#22d3ee", "#a855f7", "#f472b6", "#a3e635"][tr]; x.beginPath();
      for (let px = 0; px < cw; px++) x.lineTo(px, 25 + tr * 48 + Math.sin(px * 0.08 * (tr + 1)) * Math.random() * 18);
      x.stroke();
    }
  }, false);
  onWall(C, screen(C, 2.2, 0.85, wave), "back", 0, 1.8);
  for (const sx of [-1, 1]) {
    K.at(K.cyl(0.03, 0.03, 1.1, "#111", 8), sx * 1.7, 0.55, -d / 2 + 1.0, g);
    K.at(K.box(0.3, 0.45, 0.3, "#111"), sx * 1.7, 1.33, -d / 2 + 1.0, g);
    K.at(K.cyl(0.09, 0.09, 0.02, "#f5f5f4", 14), sx * 1.7, 1.38, -d / 2 + 1.16, g).rotation.x = Math.PI / 2;
  }
  C.block(-1.9, -d / 2, 1.9, -d / 2 + 2.0);
  // the vocal booth: a mic with a pop filter behind glass
  const bx = -w / 2 + 1.5, bz = d / 2 - 1.5;
  K.at(K.box(2.6, 2.4, 0.06, "#bae6fd", { transparent: true, opacity: 0.2, roughness: 0.05 }), bx + 0.2, 1.2, bz - 1.2, g);
  K.at(K.cyl(0.015, 0.015, 1.5, "#111", 6), bx, 0.75, bz, g);
  K.at(K.cyl(0.05, 0.05, 0.18, "#c0c4ca", 10, { metalness: 0.9 }), bx, 1.55, bz, g);
  K.at(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.01, 6, 18), K.mat("#111")), bx, 1.55, bz - 0.18, g);
  K.at(new THREE.Mesh(new THREE.CircleGeometry(0.11, 18), stdMat({ color: "#111", transparent: true, opacity: 0.5, side: THREE.DoubleSide })), bx, 1.55, bz - 0.18, g);
  C.block(bx - 1.1, bz - 1.3, bx + 1.5, d / 2);
  // guitars, platinum records, an ON AIR sign, a couch
  for (let i = 0; i < 2; i++) {
    const gt = new THREE.Group();
    const body = K.at(K.sphere(0.25, ["#b91c1c", "#f5f5f4"][i]), 0, 0, 0, gt);
    body.scale.set(1, 1.3, 0.25);
    K.at(K.box(0.06, 0.8, 0.04, "#3b2414"), 0, 0.65, 0, gt);
    onWall(C, gt, "right", -d / 2 + 1.4 + i * 0.9, 1.4, T + 0.08);
  }
  for (let i = 0; i < 3; i++) onWall(C, K.picture(0.6, 0.6, (x, cw, ch) => { x.fillStyle = "#111"; x.fillRect(0, 0, cw, ch); x.fillStyle = i ? "#e5e7eb" : "#d4af37"; x.beginPath(); x.arc(cw / 2, ch / 2, cw * 0.38, 0, TAU); x.fill(); x.fillStyle = "#7f1d1d"; x.beginPath(); x.arc(cw / 2, ch / 2, cw * 0.1, 0, TAU); x.fill(); }), "front", w / 4 - 0.8 + i * 0.8, 1.9);
  onWall(C, K.sign("ON AIR", 1.2, 0.4, { bg: "#1a0505", fg: "#ff2a2a", font: "bold 110px Arial" }), "back", -w / 2 + 1.5, h - 0.6);
  K.at(K.sofa(2.0, "#3b2416"), w / 4, 0, d / 2 - 1.0, g).rotation.y = Math.PI;
  C.block(w / 4 - 1.0, d / 2 - 1.5, w / 4 + 1.0, d / 2 - 0.5);
}

function vault(C) {
  const { K, g, w, d, h } = C;
  const gold = K.mat("#d4af37", { metalness: 1, roughness: 0.22 });
  // the vault door, open on the back wall
  const vd = new THREE.Group();
  K.at(K.cyl(1.4, 1.4, 0.4, "#9ca3af", 36, { metalness: 0.9, roughness: 0.3 }), 0, 0, 0, vd).rotation.x = Math.PI / 2;
  K.at(new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.05, 8, 24), K.mat("#e5e7eb", { metalness: 0.95, roughness: 0.2 })), 0, 0, 0.25, vd);
  for (let i = 0; i < 4; i++) K.at(K.box(1.3, 0.06, 0.06, "#e5e7eb", { metalness: 0.95 }), 0, 0, 0.25, vd).rotation.z = (i / 4) * Math.PI;
  for (let i = 0; i < 12; i++) K.at(K.cyl(0.06, 0.06, 0.12, "#6b7280", 8, { metalness: 0.9 }), Math.cos((i / 12) * TAU) * 1.2, Math.sin((i / 12) * TAU) * 1.2, 0.22, vd).rotation.x = Math.PI / 2;
  onWall(C, vd, "back", -w / 4, 1.6, T + 0.25);
  // a mountain of gold coins, with a diving board into it
  const mound = K.at(new THREE.Mesh(new THREE.SphereGeometry(2.0, 28, 14, 0, TAU, 0, Math.PI / 2), gold), w / 4 - 0.2, -0.6, -0.6, g);
  mound.scale.set(1, 0.65, 1);
  instanced(C, new THREE.CylinderGeometry(0.07, 0.07, 0.015, 12), gold, 160, (o, i) => {
    const a = Math.random() * TAU, r = 1.4 + Math.random() * 1.0;
    o.position.set(w / 4 - 0.2 + Math.cos(a) * r, 0.01 + Math.random() * 0.03, -0.6 + Math.sin(a) * r);
    o.rotation.set(Math.random() * 0.4, Math.random() * TAU, Math.random() * 0.4);
  });
  C.block(w / 4 - 2.3, -2.7, w / 4 + 1.9, 1.5);
  const db = new THREE.Group();
  K.at(K.box(0.5, 0.05, 2.2, "#f5f5f4", { roughness: 0.6 }), 0, 1.5, 0, db);
  K.at(K.box(0.4, 1.5, 0.4, "#60a5fa"), 0, 0.75, 0.8, db);
  for (let i = 0; i < 5; i++) K.at(K.box(0.5, 0.04, 0.04, "#d4d4d4"), 0, 0.3 * i + 0.2, 1.05, db);
  K.at(db, w / 4 - 0.2, 0, 2.6, g);
  C.block(w / 4 - 0.5, 1.4, w / 4 + 0.1, 3.8);
  // pallets of cash and a pyramid of gold bars
  instanced(C, new THREE.BoxGeometry(0.32, 0.12, 0.16), K.mat("#4d7c0f", { roughness: 0.9 }), 120, (o, i) => {
    const layer = Math.floor(i / 30), k = i % 30;
    o.position.set(-w / 2 + 0.8 + (k % 6) * 0.34, 0.2 + layer * 0.125, d / 2 - 2.6 + Math.floor(k / 6) * 0.18);
  });
  K.at(K.box(2.2, 0.14, 1.0, "#a16207"), -w / 2 + 1.65, 0.07, d / 2 - 2.24, g);
  C.block(-w / 2 + 0.5, d / 2 - 2.8, -w / 2 + 2.8, d / 2 - 1.6);
  const bars = [];
  for (let layer = 0; layer < 4; layer++) for (let k = 0; k < 4 - layer; k++) for (const z of [0, 0.16]) bars.push([-w / 4 - 1 + k * 0.32 + layer * 0.16, 0.05 + layer * 0.1, 1.2 + z]);
  instanced(C, new THREE.BoxGeometry(0.3, 0.1, 0.14), gold, bars.length, (o, i) => o.position.set(...bars[i]));
  C.block(-w / 4 - 1.2, 1.0, -w / 4 + 0.4, 1.6);
  onWall(C, K.sign("$$$  THE VAULT  $$$", 3.6, 0.6, { w: 1024, bg: "#14100c", fg: "#fde68a", font: "bold 100px Arial" }), "front", -w / 4 - 0.6, h - 0.7);
}

function aquarium(C) {
  const { K, g, w, d, h } = C;
  // the whole back wall is a tank
  const aw = w - 1.0, ah = h - 0.8;
  const tank = K.canvasTex("tank", 512, 256, (x, cw, ch) => {
    const s = x.createLinearGradient(0, 0, 0, ch); s.addColorStop(0, "#38bdf8"); s.addColorStop(1, "#0c4a6e");
    x.fillStyle = s; x.fillRect(0, 0, cw, ch);
    x.fillStyle = "#e9d5a1"; x.beginPath(); x.moveTo(0, ch); for (let px = 0; px <= cw; px += 16) x.lineTo(px, ch - 20 - Math.sin(px * 0.03) * 8); x.lineTo(cw, ch); x.fill();
    for (let i = 0; i < 14; i++) { x.strokeStyle = "#15803d"; x.lineWidth = 4; x.beginPath(); const px = Math.random() * cw; x.moveTo(px, ch - 18); x.quadraticCurveTo(px + 15, ch - 60, px - 5, ch - 90 - Math.random() * 40); x.stroke(); }
    x.fillStyle = "rgba(255,255,255,0.12)"; for (let i = 0; i < 8; i++) x.fillRect(i * 70, 0, 18, ch);
  }, false);
  onWall(C, plane(aw, ah, new THREE.MeshBasicMaterial({ map: tank, toneMapped: false })), "back", 0, 0.4 + ah / 2, T + 0.03);
  K.at(K.box(aw + 0.2, 0.3, 0.3, "#111"), 0, 0.2, -d / 2 + T + 0.15, g);
  K.at(K.box(aw + 0.2, 0.2, 0.3, "#111"), 0, h - 0.3, -d / 2 + T + 0.15, g);
  // fish and a shark swimming in front of the painted water
  const fish = [];
  for (let i = 0; i < 14; i++) {
    const f = K.at(K.sphere(0.07, ["#f97316", "#facc15", "#ec4899", "#22d3ee"][i % 4]), 0, 0.9 + (i % 7) * 0.32, -d / 2 + T + 0.2, g);
    f.scale.set(1.6, 0.8, 0.5);
    fish.push(f);
  }
  const shark = new THREE.Group();
  const sb = K.at(K.sphere(0.35, "#94a3b8", { roughness: 0.4 }), 0, 0, 0, shark);
  sb.scale.set(3.2, 0.9, 0.7);
  K.at(new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.4, 6), K.mat("#94a3b8")), 0, 0.42, 0, shark);
  K.at(new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 6), K.mat("#94a3b8")), -1.15, 0.05, 0, shark).rotation.z = Math.PI / 2;
  K.at(shark, 0, h * 0.5, -d / 2 + T + 0.3, g);
  C.tick((dt, t) => {
    fish.forEach((f, i) => { const k = ((t * (0.08 + (i % 3) * 0.03) + i * 0.13) % 1) * 2 - 1; const dir = i % 2 ? 1 : -1; f.position.x = k * dir * (aw / 2 - 0.3); f.rotation.y = dir > 0 ? 0 : Math.PI; f.position.y = 0.9 + (i % 7) * 0.32 + Math.sin(t * 2 + i) * 0.05; });
    const k = Math.sin(t * 0.18);
    shark.position.x = k * (aw / 2 - 1.2);
    shark.rotation.y = Math.cos(t * 0.18) > 0 ? Math.PI : 0;
  });
  C.block(-aw / 2, -d / 2, aw / 2, -d / 2 + 0.6);
  // the lounge facing it
  for (const x of [-w / 4, w / 4]) {
    K.at(K.sofa(2.4, "#0c4a6e"), x, 0, 2.1, g).rotation.y = Math.PI;
    C.block(x - 1.2, 1.6, x + 1.2, 2.6);
  }
  K.at(K.table(1.2, 0.6, 0.4, "#111"), 0, 0, 1.1, g);
  C.block(-0.6, 0.8, 0.6, 1.4);
  K.at(K.plant(1.4), w / 2 - 0.7, 0, d / 2 - 0.7, g);
}

function ballpit(C) {
  const { K, g, w, d, h } = C;
  const pw = w - 3, pd = d / 2 + 0.5, pz = -d / 2 + 0.4 + pd / 2;
  const rim = K.mat("#f43f5e", { roughness: 0.6 });
  for (const [bw, bd, x, z] of [[pw + 0.3, 0.15, 0, pz - pd / 2], [pw + 0.3, 0.15, 0, pz + pd / 2], [0.15, pd, -pw / 2, pz], [0.15, pd, pw / 2, pz]]) K.at(K.box(bw, 0.65, bd, rim), x, 0.33, z, g);
  const cols = ["#ef4444", "#facc15", "#22c55e", "#3b82f6", "#a855f7", "#f97316"].map((c) => new THREE.Color(c));
  instanced(C, new THREE.SphereGeometry(0.11, 10, 8), K.mat("#ffffff", { roughness: 0.35 }), 650, (o, i, col) => {
    o.position.set((Math.random() - 0.5) * (pw - 0.25), 0.1 + Math.random() * 0.45, pz + (Math.random() - 0.5) * (pd - 0.25));
    col.copy(cols[i % cols.length]);
    return true;
  });
  C.block(-pw / 2 - 0.1, pz - pd / 2 - 0.1, pw / 2 + 0.1, pz + pd / 2 + 0.1);
  // a slide into it
  const sl = new THREE.Group();
  K.at(K.box(0.9, 0.08, 0.9, "#3b82f6"), 0, 1.8, 0, sl);
  for (const x of [-0.4, 0.4]) for (const z of [-0.4, 0.4]) K.at(K.box(0.08, 1.8, 0.08, "#facc15"), x, 0.9, z, sl);
  const ramp = K.at(K.box(0.8, 0.06, 2.6, "#facc15", { roughness: 0.3 }), 0, 0.95, -1.5, sl);
  ramp.rotation.x = -0.7;
  for (let i = 0; i < 6; i++) K.at(K.box(0.8, 0.04, 0.04, "#22c55e"), 0, 0.3 * i + 0.2, 0.45, sl);
  K.at(sl, -pw / 2 + 0.8, 0, pz + pd / 2 + 0.6, g);
  C.block(-pw / 2 + 0.3, pz + pd / 2, -pw / 2 + 1.3, pz + pd / 2 + 1.1);
  onWall(C, K.sign("BALL PIT", 2.4, 0.6, { bg: "#1e1b4b", fg: "#fde047", font: "bold 120px Arial" }), "back", 0, h - 0.7);
  for (const [x, c] of [[-1, "#f472b6"], [1.2, "#60a5fa"], [2.6, "#fde047"]]) {
    K.at(K.sphere(0.25, c, { roughness: 0.3 }), x, h - 1.2 - Math.abs(x) * 0.1, d / 2 - 1.3, g);
    K.at(K.cyl(0.004, 0.004, 1.0, "#e5e7eb", 4), x, h - 0.6, d / 2 - 1.3, g);
  }
}

function sneakers(C) {
  const { K, g, w, d, h } = C;
  const cols = ["#ef4444", "#111827", "#f5f5f4", "#3b82f6", "#22c55e", "#facc15", "#a855f7", "#f97316"];
  const sneaker = (c) => {
    const s = new THREE.Group();
    K.at(K.box(0.13, 0.05, 0.32, "#f5f5f4"), 0, 0.025, 0, s);
    const up = K.at(K.box(0.12, 0.11, 0.24, c, { roughness: 0.6 }), 0, 0.1, -0.03, s);
    up.rotation.x = 0.1;
    K.at(K.box(0.125, 0.03, 0.1, "#f5f5f4"), 0, 0.12, 0.08, s);
    return s;
  };
  // walls of lit cubbies
  for (const [side, len] of [["back", w - 1.2], ["right", d - 1.2]]) {
    const nc = Math.floor(len / 0.6), nr = 4;
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
      const cub = new THREE.Group();
      K.at(K.box(0.56, 0.42, 0.04, glow("#fff7ed")), 0, 0, -0.18, cub);
      K.at(K.box(0.56, 0.03, 0.4, "#111"), 0, -0.21, 0, cub);
      const sn = K.at(sneaker(cols[(r * 3 + c) % cols.length]), 0, -0.19, 0.02, cub);
      sn.rotation.y = Math.PI / 2 + 0.3;
      onWall(C, cub, side, -len / 2 + 0.3 + c * 0.6, 0.6 + r * 0.48, T + 0.2);
    }
  }
  C.block(-w / 2, -d / 2, w / 2, -d / 2 + 0.6);
  C.block(w / 2 - 0.6, -d / 2, w / 2, d / 2);
  // the grail: a golden pair turning in a glass case
  K.at(K.box(0.9, 1.0, 0.9, "#111"), -0.6, 0.5, 0.4, g);
  K.at(K.box(0.86, 0.7, 0.86, "#e0f2fe", { transparent: true, opacity: 0.2, roughness: 0.03 }), -0.6, 1.35, 0.4, g);
  const grail = K.at(new THREE.Group(), -0.6, 1.05, 0.4, g);
  for (const x of [-0.1, 0.1]) {
    const s = K.at(sneaker("#d4af37"), x, 0, 0, grail);
    s.children.forEach((m) => { m.material = K.mat("#d4af37", { metalness: 1, roughness: 0.2 }); });
  }
  C.tick((dt) => { grail.rotation.y += dt * 0.6; });
  beam(C, -0.6, 0.4, 0.6);
  C.block(-1.1, -0.1, -0.1, 0.9);
  K.at(K.box(1.6, 0.42, 0.5, "#e7e5e4", { roughness: 0.6 }), -0.6, 0.21, d / 2 - 1.4, g);
  onWall(C, K.sign("HEAT CHECK", 2.4, 0.5, { bg: "#0b0710", fg: "#f97316", font: "bold 100px Arial" }), "front", 0, h - 0.7);
}

function office(C) {
  const { K, g, w, d } = C;
  K.at(K.table(1.8, 0.8, 0.76, "#3d2b1f"), 0, 0, -d / 2 + 1.2, g);
  K.at(screen(C, 0.9, 0.5, K.textTexture("📈 FIGHT STATS", { w: 512, h: 288, bg: "#0f172a", fg: "#22d3ee", font: "bold 48px Arial" })), 0.2, 1.15, -d / 2 + 0.95, g);
  K.at(K.floorLamp("#fff1d6", 0.42), -0.7, 0.79, -d / 2 + 1.0, g);
  K.at(K.chair("#111"), 0, 0, -d / 2 + 1.9, g).rotation.y = Math.PI;
  C.block(-0.9, -d / 2, 0.9, -d / 2 + 2.2);
  K.at(K.bookshelf(1.6, 2.2), -w / 2 + T + 1.0, 0, -d / 2 + T + 0.2, g);
  C.block(-w / 2, -d / 2, -w / 2 + 1.9, -d / 2 + 0.5);
  const wb = K.canvasTex("whiteboard", 512, 320, (x, cw, ch) => {
    x.fillStyle = "#f8fafc"; x.fillRect(0, 0, cw, ch);
    x.fillStyle = "#1d4ed8"; x.font = "bold 34px Arial"; x.fillText("GAME PLAN", 24, 50);
    x.font = "26px Arial"; x.fillStyle = "#111";
    ["1. Jab, jab, cross", "2. Check the leg kick", "3. Takedown in R3", "4. Belt 🏆"].forEach((l, i) => x.fillText(l, 30, 100 + i * 48));
    x.strokeStyle = "#dc2626"; x.lineWidth = 4; x.beginPath(); x.arc(400, 200, 60, 0, TAU); x.stroke();
  }, false);
  onWall(C, plane(1.8, 1.1, stdMat({ map: wb, roughness: 0.4 })), "front", 0, 1.6);
  const globe = new THREE.Group();
  K.at(K.cyl(0.18, 0.2, 0.7, "#3b2414", 10), 0, 0.35, 0, globe);
  K.at(K.sphere(0.28, "#1d4ed8", { roughness: 0.4 }), 0, 0.98, 0, globe);
  K.at(globe, w / 2 - 0.8, 0, d / 2 - 0.9, g);
  K.at(K.plant(1.2), w / 2 - 0.7, 0, -d / 2 + 0.7, g);
  window_(C, "left", 1.5);
}

function laundry(C) {
  const { K, g, w, d } = C;
  const drums = [];
  for (let i = 0; i < 2; i++) {
    const x = -0.5 + i * 0.75;
    K.at(K.box(0.7, 0.9, 0.65, "#f8fafc", { roughness: 0.3 }), x, 0.45, -d / 2 + T + 0.34, g);
    K.at(new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.03, 8, 24), K.mat("#c0c4ca", { metalness: 0.8 })), x, 0.5, -d / 2 + T + 0.68, g);
    const drum = K.at(new THREE.Mesh(new THREE.CircleGeometry(0.2, 20), stdMat({ map: K.tiled(K.rugTexture("#1e3a8a", "#bfdbfe", "#f472b6"), 1, 1), roughness: 0.3 })), x, 0.5, -d / 2 + T + 0.67, g);
    drums.push(drum);
  }
  C.tick((dt) => drums[0].rotation.z += dt * 4);
  C.block(-0.9, -d / 2, 0.9, -d / 2 + 0.8);
  K.at(K.box(1.6, 0.04, 0.3, "#8b5a3c"), 0, 1.6, -d / 2 + T + 0.15, g);
  for (let i = 0; i < 5; i++) K.at(K.box(0.14, 0.26, 0.12, ["#f97316", "#22d3ee", "#a3e635", "#f472b6", "#facc15"][i]), -0.6 + i * 0.3, 1.75, -d / 2 + T + 0.15, g);
  K.at(K.cyl(0.25, 0.2, 0.4, "#d6c3a3", 14), 1.4, 0.2, -d / 2 + 0.6, g);
  // a washing line of fight shorts
  K.at(K.cyl(0.006, 0.006, w - 2, "#e5e7eb", 4), 0, 2.1, 0.6, g).rotation.z = Math.PI / 2;
  for (let i = 0; i < 6; i++) K.at(K.box(0.4, 0.42, 0.02, ["#dc2626", "#111", "#1d4ed8", "#f4b942", "#f5f5f4", "#16a34a"][i], { roughness: 1 }), -w / 2 + 1.6 + i * ((w - 3.2) / 5), 1.85, 0.6, g);
  const ib = new THREE.Group();
  K.at(K.box(1.3, 0.04, 0.38, "#93c5fd"), 0, 0.9, 0, ib);
  for (const x of [-0.4, 0.4]) K.at(K.box(0.03, 0.9, 0.03, "#9ca3af"), x, 0.45, 0, ib).rotation.z = x > 0 ? 0.35 : -0.35;
  K.at(ib, w / 4, 0, d / 2 - 1.2, g);
  C.block(w / 4 - 0.7, d / 2 - 1.5, w / 4 + 0.7, d / 2 - 0.9);
  window_(C, "right", -1.4);
}

/** Every room type: name, finishes, lighting and mood, and what goes in it. */
const ROOMS = {
  living: { name: "Living room", floor: (K, lux) => K.floorTexture(lux ? "#6e4527" : "#a87b4f", "planks"), rough: 0.55, wall: "#ddd2bf", build: living },
  kitchen: { name: "Kitchen", floor: (K, lux) => tileTex(K, lux ? "#e7e5e4" : "#c9c2b6"), rough: 0.4, wall: "#ece6dc", build: kitchen },
  bedroom: { name: "Bedroom", floor: (K) => K.floorTexture("#9c7a56", "planks"), rough: 0.6, wall: "#d7dee6", build: bedroom, look: { warmth: 0.8 } },
  master: { name: "Master suite", floor: (K, lux) => K.floorTexture(lux ? "#5a3a24" : "#9c7a56", "planks"), rough: 0.5, wall: "#e6dccb", build: master, look: { warmth: 0.85 } },
  kids: { name: "Kids' room", floor: (K) => carpetTex(K, "#93c5fd", "#ffffff"), rough: 1, wall: "#fde8f1", build: kids, look: { saturation: 1.25 } },
  bath: { name: "Bathroom", floor: (K) => tileTex(K, "#b9c4cf"), rough: 0.45, wallTex: (K) => tileTex(K, "#dfe7ee"), build: bath, light: "#f5f9ff", power: 8, exposure: 0.76, look: { warmth: 0.3, bloom: [0.3, 0.45, 0.9] } },
  spa: { name: "Spa bathroom", floor: (K) => tileTex(K, "#d6d3d1"), rough: 0.35, wallTex: (K) => K.slatTexture("#a37a52"), build: spa, light: "#ffe7c4", power: 10, look: { warmth: 0.9, bloom: [0.45, 0.5, 0.8] } },
  gaming: { name: "Gaming room", floor: (K) => carpetTex(K, "#2a2540", "#7c3aed"), rough: 1, wall: "#2a2438", build: gaming, light: "#c4b5fd", power: 16, exposure: 1.05, bg: "#120a1f",
    look: { bloom: [0.8, 0.6, 0.55], contrast: 1.16, saturation: 1.3, warmth: 0.1, vignette: 0.42, grain: 0.03 } },
  gym: { name: "Home gym", floor: (K) => K.rubberTexture(), rough: 0.85, wallTex: (K) => K.brickTexture("#7d7a75", "#4a4845"), build: gym, light: "#ffffff", look: { warmth: 0.3, contrast: 1.15 } },
  cinema: { name: "Cinema", floor: (K) => carpetTex(K, "#3f0d12", "#d4af37"), rough: 1, wall: "#1c1012", build: cinema, light: "#ffb860", power: 2.5, exposure: 1.0, bg: "#0a0506",
    look: { bloom: [0.6, 0.55, 0.6], contrast: 1.18, warmth: 0.6, vignette: 0.5, grain: 0.03 } },
  pool: { name: "Indoor pool", floor: (K) => tileTex(K, "#c8d8e0"), rough: 0.45, wall: "#cfe6f3", build: pool, light: "#f0f9ff", power: 10, exposure: 0.76, look: { warmth: 0.25, saturation: 1.18, bloom: [0.3, 0.45, 0.9] } },
  wine: { name: "Wine bar", floor: (K) => tileTex(K, "#6b5a48"), rough: 0.6, wallTex: (K) => K.brickTexture("#6b3a2a", "#2a1d17"), build: wine, light: "#ffb860", power: 6, exposure: 0.92, bg: "#1d120b",
    look: { bloom: [0.5, 0.5, 0.7], warmth: 0.95, vignette: 0.42 } },
  closet: { name: "Walk-in closet", floor: (K) => K.floorTexture("#d6c7b0", "planks"), rough: 0.4, wall: "#f3ede3", build: closet, look: { warmth: 0.7 } },
  recovery: { name: "Recovery lab", floor: (K) => tileTex(K, "#c9d3d8"), rough: 0.45, wall: "#dde8ec", build: recovery, light: "#e0f7ff", power: 8, exposure: 0.74, look: { warmth: 0.15, saturation: 1.05, bloom: [0.3, 0.45, 0.9] } },
  trophies: { name: "Trophy hall", floor: (K) => K.concreteTexture("#2a2a2e"), rough: 0.35, wall: "#1f1d22", build: trophies, light: "#fff1d6", power: 7, exposure: 0.98, bg: "#0e0d10",
    look: { bloom: [0.7, 0.55, 0.62], contrast: 1.15, vignette: 0.48 } },
  octagon: { name: "Private octagon", floor: (K) => K.rubberTexture(), rough: 0.85, wall: "#1f2937", build: octagon, light: "#ffffff", power: 10, look: { contrast: 1.16, vignette: 0.42 } },
  studio: { name: "Recording studio", floor: (K) => K.floorTexture("#4a3424", "planks"), rough: 0.5, wallTex: (K) => foamTex(K), build: studio, light: "#ffcf8a", power: 9, exposure: 0.98, bg: "#120f0c",
    look: { bloom: [0.55, 0.5, 0.65], warmth: 0.7, vignette: 0.44 } },
  vault: { name: "Money vault", floor: (K) => K.concreteTexture("#4a4a50"), rough: 0.4, wall: "#3e4149", build: vault, light: "#fde68a", power: 20, exposure: 0.98,
    look: { bloom: [0.65, 0.55, 0.6], warmth: 0.9, contrast: 1.15, vignette: 0.45 } },
  aquarium: { name: "Shark tank lounge", floor: (K) => carpetTex(K, "#0c2a3d", "#38bdf8"), rough: 1, wall: "#0b2233", build: aquarium, light: "#7dd3fc", power: 3, exposure: 0.98, bg: "#04121c",
    look: { bloom: [0.6, 0.55, 0.6], warmth: 0.05, saturation: 1.2, vignette: 0.45 } },
  ballpit: { name: "Ball pit", floor: (K) => playTilesTex(K), rough: 0.7, wall: "#fef3c7", build: ballpit, look: { saturation: 1.35, warmth: 0.4 } },
  sneakers: { name: "Sneaker vault", floor: (K) => K.concreteTexture("#55575c"), rough: 0.35, wall: "#18181b", build: sneakers, light: "#ffffff", power: 11, exposure: 0.95, bg: "#0d0d0f",
    look: { bloom: [0.55, 0.5, 0.65], contrast: 1.14, vignette: 0.42 } },
  office: { name: "Office", floor: (K) => K.floorTexture("#7a5236", "planks"), rough: 0.55, wall: "#e4e9e3", build: office },
  laundry: { name: "Laundry", floor: (K) => tileTex(K, "#aab6c0"), rough: 0.45, wall: "#dfe6ec", build: laundry, light: "#f5f9ff", power: 8, exposure: 0.78, look: { warmth: 0.35, bloom: [0.3, 0.45, 0.9] } },
};

// ------------------------------------------------------------------ the house

/** A room's floor, ceiling, walls (with doorways) and its light fitting. */
function shell(K, g, w, d, h, spec, doors, lux) {
  const ft = K.tiled(spec.floor(K, lux), w / 4, d / 4);
  const fl = plane(w, d, stdMat({ map: ft, roughness: spec.rough ?? 0.6 }));
  fl.rotation.x = -Math.PI / 2;
  fl.receiveShadow = true;
  g.add(fl);
  const ceiling = spec.ceiling || (/^#[0-3]/.test(spec.wall || "") ? "#141217" : "#f4f1ea");
  const ce = plane(w, d, K.mat(ceiling));
  ce.rotation.x = Math.PI / 2;
  ce.position.y = h;
  g.add(ce);
  const wt = K.tiled(spec.wallTex ? spec.wallTex(K) : K.plasterTexture(spec.wall || "#e9e2d4"), spec.wallTex ? w / 2.5 : 3, spec.wallTex ? h / 2.5 : 1.5);
  const wallM = stdMat({ map: wt, roughness: spec.wallTex ? 0.75 : 0.92 });
  const seg = (len, x, z, ry, y0 = 0, hh = h) => {
    const m = plane(len, hh, wallM);
    m.position.set(x, y0 + hh / 2, z);
    m.rotation.y = ry;
    m.receiveShadow = true;
    g.add(m);
    if (y0 === 0) {
      const sk = K.box(len, 0.12, 0.03, "#3b332b");
      sk.position.set(x, 0.06, z);
      sk.rotation.y = ry;
      g.add(sk);
    }
  };
  const wall = (len, door, ox, oz, ry, ax, az) => {
    if (!door) return seg(len, ox, oz, ry);
    const s = (len - DOOR) / 2, o = DOOR / 2 + s / 2;
    seg(s, ox - ax * o, oz - az * o, ry);
    seg(s, ox + ax * o, oz + az * o, ry);
    seg(DOOR, ox, oz, ry, DOOR_H, h - DOOR_H);
  };
  wall(w, doors.back, 0, -d / 2 + T, 0, 1, 0);
  wall(w, doors.front, 0, d / 2 - T, Math.PI, 1, 0);
  wall(d, doors.left, -w / 2 + T, 0, Math.PI / 2, 0, 1);
  wall(d, doors.right, w / 2 - T, 0, -Math.PI / 2, 0, 1);
  // the light fitting in the middle of the ceiling
  if (!spec.noFixture) {
    K.at(K.cyl(0.34, 0.34, 0.04, "#d1d5db", 20, { metalness: 0.6, roughness: 0.3 }), 0, h - 0.02, 0, g);
    K.at(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 20), glow(spec.light || "#fff1dc")), 0, h - 0.03, 0, g);
  }
}

/** Builds the home for ctx.house (0 apartment … 4 mega-mansion). Same shape as any interior, plus rooms. */
export function buildHouse(K, ctx = {}) {
  const tier = Math.max(0, Math.min(PLANS.length - 1, ctx.house || 0));
  const P = PLANS[tier];
  const { cw, cd, h } = P;
  const rows = P.rows.length, cols = P.rows[0].length, mid = (cols - 1) / 2;
  const w = cols * cw, d = rows * cd;
  const lux = tier >= 3;
  const g = new THREE.Group();
  const solids = [], people = [], ticks = [], cells = [];
  // one light walks with you from room to room (switching lights on and off would make every
  // material recompile); the rooms you can't see are hidden
  const lamp = new THREE.PointLight("#fff1dc", 12, Math.max(cw, cd) * 1.5, 1.6);
  lamp.castShadow = true;
  lamp.shadow.mapSize.set(512, 512);
  lamp.shadow.bias = -0.002;
  g.add(lamp);
  g.add(new THREE.HemisphereLight("#fff6ea", "#5d5045", 0.22));

  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const id = P.rows[r][c], spec = ROOMS[id];
    const cx = (c - mid) * cw, cz = d / 2 - cd / 2 - r * cd;
    // rooms open onto their neighbours in the row; the middle column also front to back
    const doors = { left: c > 0, right: c < cols - 1, back: c === mid && r < rows - 1, front: c === mid };
    const cg = new THREE.Group();
    cg.position.set(cx, 0, cz);
    g.add(cg);
    shell(K, cg, cw, cd, h, spec, doors, lux);
    const C = {
      K, g: cg, w: cw, d: cd, h, lux, tier, doors, ctx,
      block: (x0, z0, x1, z1) => solids.push([cx + Math.min(x0, x1), cz + Math.min(z0, z1), cx + Math.max(x0, x1), cz + Math.max(z0, z1)]),
      tick: (fn) => ticks.push(fn),
      person: (x, z, ry, opts = {}) => {
        const p = K.randomPerson(opts.seed || id + x + z);
        const f = K.npc(p.look, { ...opts, female: opts.female ?? p.female });
        f.root.position.set(x, 0, z);
        f.root.rotation.y = ry;
        cg.add(f.root);
        people.push({ f });
        return f;
      },
    };
    spec.build(C);
    cells.push({
      id, name: spec.name, r, c, cx, cz, group: cg, bounds: [cx - cw / 2, cz - cd / 2, cx + cw / 2, cz + cd / 2],
      exposure: spec.exposure ?? 0.86, look: look(spec.look), bg: spec.bg || "#1a1612", light: spec.light || "#fff1dc", power: spec.power ?? 11,
    });
  }

  // the walls between rooms are solid except at the doorways; each doorway gets a frame and a
  // plaque over it naming the room beyond
  const frame = lux ? "#f5f1ea" : "#4a3b2c";
  const plaque = (name, x, z, ry) => {
    const s = K.sign(name, 1.3, 0.24, { w: 512, h: 96, bg: "#14110e", fg: "#f4e3c1", font: "bold 50px Georgia" });
    s.position.set(x, DOOR_H + 0.3, z);
    s.rotation.y = ry;
    g.add(s);
  };
  const doorway = (x, z, alongX) => {
    for (const s of [-1, 1]) {
      const j = K.box(alongX ? 0.1 : 2 * T + 0.04, DOOR_H, alongX ? 2 * T + 0.04 : 0.1, frame);
      j.position.set(x + (alongX ? s * DOOR / 2 : 0), DOOR_H / 2, z + (alongX ? 0 : s * DOOR / 2));
      g.add(j);
    }
    const l = K.box(alongX ? DOOR + 0.1 : 2 * T + 0.04, 0.1, alongX ? 2 * T + 0.04 : DOOR + 0.1, frame);
    l.position.set(x, DOOR_H + 0.05, z);
    g.add(l);
  };
  for (const cell of cells) {
    const { r, c, cx, cz } = cell;
    if (c < cols - 1) {
      const x = cx + cw / 2, nb = cells[r * cols + c + 1];
      solids.push([x - T, cz - cd / 2, x + T, cz - DOOR / 2], [x - T, cz + DOOR / 2, x + T, cz + cd / 2]);
      doorway(x, cz, false);
      plaque(nb.name, x - T - 0.02, cz, -Math.PI / 2);
      plaque(cell.name, x + T + 0.02, cz, Math.PI / 2);
    }
    if (r < rows - 1) {
      const z = cz - cd / 2, nb = cells[(r + 1) * cols + c];
      if (c === mid) {
        solids.push([cx - cw / 2, z - T, cx - DOOR / 2, z + T], [cx + DOOR / 2, z - T, cx + cw / 2, z + T]);
        doorway(cx, z, true);
        plaque(nb.name, cx, z + T + 0.02, 0);
        plaque(cell.name, cx, z - T - 0.02, Math.PI);
      } else solids.push([cx - cw / 2, z - T, cx + cw / 2, z + T]);
    }
  }
  // the front door
  const door = plane(1.6, 2.3, glow("#cfe6ff"));
  door.position.set(0, 1.15, d / 2 + 0.02);
  door.rotation.y = Math.PI;
  g.add(door);
  doorway(0, d / 2, true);

  const cellAt = (lx, lz) => {
    const c = Math.floor((lx + w / 2) / cw), r = Math.floor((d / 2 - lz) / cd);
    return c >= 0 && c < cols && r >= 0 && r < rows ? r * cols + c : -1;
  };
  /** Walking into room i: the lamp follows, and only rooms you could see from here are drawn. */
  const enterCell = (i) => {
    const cur = cells[i];
    lamp.position.set(cur.cx, h - 0.5, cur.cz);
    lamp.color.set(cur.light);
    lamp.intensity = cur.power;
    for (const x of cells) x.group.visible = x.r === cur.r || x.c === cur.c || (Math.abs(x.r - cur.r) <= 1 && Math.abs(x.c - cur.c) <= 1);
  };
  const front = mid;
  enterCell(front);
  const tick = (dt, t) => {
    for (const fn of ticks) fn(dt, t);
    for (const p of people) p.f.update(dt);
  };
  const L = cells[front];
  return { group: g, w, d, h, solids, people, tick, cells, cellAt, enterCell, exposure: L.exposure, look: L.look, bg: L.bg };
}

/** For checks: the rooms each house has. */
export const HOUSE_ROOMS = PLANS.map((p) => p.rows.flat().map((id) => ROOMS[id].name));
