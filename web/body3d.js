// Smooth, muscular bodies. Every body part is a shape (a tapered capsule or an ellipsoid) on a
// bone; the shapes are blended into one surface with a smooth union of their distance fields and
// meshed with marching cubes, then skinned to the bones so the body bends at the joints instead of
// being a stack of balls and tubes. Clothes are the same surface pushed outward and trimmed.
import * as THREE from "./vendor/three.module.min.js";
import { edgeTable, triTable } from "./vendor/mc-tables.js";

// body types: how big the frame is, how much muscle, how much fat
export const BODY_TYPES = [
  { name: "Lean", girth: 0.93, muscle: 0.85, fat: 0.15 },
  { name: "Athletic", girth: 1.0, muscle: 1.0, fat: 0.25 },
  { name: "Muscular", girth: 1.07, muscle: 1.3, fat: 0.2 },
  { name: "Stocky", girth: 1.12, muscle: 1.05, fat: 0.65 },
];
// ab definition: how much the six-pack and obliques show through
export const ABS = [
  { name: "Soft", show: 0, belly: 1.0 },
  { name: "Toned", show: 0.45, belly: 0.55 },
  { name: "Defined", show: 0.8, belly: 0.3 },
  { name: "Shredded", show: 1.0, belly: 0.1 },
];

function smin(a, b, k) {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
}

/**
 * The body as shapes on bones. bones: { hips, spine, chest, neck, head, shL, elL, shR, elR, hipL, knL, hipR, knR }.
 * w = overall width, opts: { body, abs, feet (include bare feet), hands (include bare hands), ref }.
 */
function bodyShapes(w, opts) {
  const B = BODY_TYPES[opts.body ?? 1], A = ABS[opts.abs ?? 1];
  const g = w * B.girth, m = B.muscle, fat = B.fat * (0.4 + A.belly);
  const P = [];
  // e = ellipsoid [bone, center, radii, blend], c = capsule [bone, a, b, ra, rb, blend]; tag marks parts clothes use
  const e = (bone, c, r, k = 0.05, tag) => P.push({ t: "e", bone, c: new THREE.Vector3(...c), r: new THREE.Vector3(...r), k, tag });
  const c = (bone, a, b, ra, rb, k = 0.05, tag) => P.push({ t: "c", bone, a: new THREE.Vector3(...a), b: new THREE.Vector3(...b), ra, rb, k, tag });
  // torso
  e("hips", [0, 0.0, 0], [0.155 * g, 0.105, 0.1 * (1 + fat * 0.15)], 0.06);
  e("spine", [0, 0.09, 0.008 + fat * 0.02], [0.13 * g * (1 + fat * 0.08), 0.13, 0.09 * (1 + fat * 0.3)], 0.07);
  e("chest", [0, 0.12, 0], [0.16 * g, 0.155, 0.1], 0.07);
  e("chest", [0, 0.25, -0.025], [0.105 * g * m, 0.055, 0.055], 0.06); // traps
  for (const s of [-1, 1]) {
    e("chest", [s * 0.068 * g, 0.165, 0.058], [0.072 * g * m, 0.052 * m, 0.038 * m], 0.03); // pecs
    e("chest", [s * 0.12 * g, 0.07, -0.015], [0.05 * g * m, 0.12, 0.055], 0.05); // lats
    e("hips", [s * 0.058 * g, -0.045, -0.055], [0.07 * g, 0.078, 0.062 * (1 + fat * 0.2)], 0.04); // glutes
    // obliques show on lean, defined fighters
    if (A.show > 0) e("spine", [s * 0.1 * g, 0.06, 0.04], [0.035, 0.075, 0.03 * A.show], 0.02);
  }
  // the six-pack: three rows either side of the line down the middle
  if (A.show > 0) {
    const bump = 0.012 + 0.016 * A.show;
    for (const s of [-1, 1]) for (const [i, y] of [-0.01, 0.055, 0.12].entries()) {
      e("spine", [s * 0.03, y, 0.083 + fat * 0.012], [0.028, 0.026 + (i === 0 ? 0.008 : 0), bump], 0.012 + 0.012 * (1 - A.show));
    }
  }
  // neck and head
  c("neck", [0, -0.02, 0], [0, 0.1, 0.012], 0.052 * g * (0.95 + m * 0.05), 0.047 * g, 0.04);
  e("neck", [0, -0.005, -0.03], [0.06 * g * m, 0.04, 0.035], 0.04); // back of the neck
  for (const s of [-1, 1]) {
    const sh = s > 0 ? "shL" : "shR", el = s > 0 ? "elL" : "elR", hip = s > 0 ? "hipL" : "hipR", kn = s > 0 ? "knL" : "knR";
    // arms
    e(sh, [0, -0.02, 0], [0.07 * g * m, 0.075, 0.068 * g * m], 0.05, "arm"); // deltoid
    c(sh, [0, -0.03, 0], [0, -0.26, 0], 0.052 * g, 0.043 * g, 0.04, "arm");
    e(sh, [0, -0.135, 0.022], [0.04 * g * m, 0.072, 0.04 * g * m], 0.03, "arm"); // biceps
    e(sh, [0, -0.12, -0.024], [0.04 * g * m, 0.085, 0.036 * g * m], 0.03, "arm"); // triceps
    c(el, [0, 0, 0], [0, -0.215, 0], 0.045 * g, 0.031 * g, 0.035, "forearm");
    e(el, [0, -0.06, 0.01], [0.044 * g * m, 0.072, 0.04 * g], 0.03, "forearm");
    if (opts.hands) e(el, [0, -0.265, 0.005], [0.034, 0.05, 0.024], 0.03, "hand");
    // legs
    c(hip, [0, -0.02, 0], [0, -0.4, 0], 0.088 * g, 0.054 * g, 0.05, "leg");
    e(hip, [s * 0.008, -0.17, 0.028], [0.068 * g * m, 0.15, 0.062 * g * m], 0.04, "leg"); // quads
    e(hip, [-s * 0.03, -0.12, 0.01], [0.04 * g, 0.12, 0.045 * g], 0.04, "leg"); // inner thigh
    e(hip, [0, -0.2, -0.03], [0.058 * g, 0.14, 0.05 * g * m], 0.04, "leg"); // hamstrings
    c(kn, [0, 0, 0], [0, -0.405, 0], 0.05 * g, 0.03 * g, 0.035, "shin");
    e(kn, [0, -0.12, -0.034], [0.046 * g * m, 0.095, 0.045 * g * m], 0.035, "shin"); // calf
    if (opts.feet) e(kn, [0, -0.455, 0.045], [0.038, 0.03, 0.105], 0.03, "foot");
  }
  return P;
}

/** Shapes placed in model space at the bind pose, ready to evaluate. */
function prepare(P, bones) {
  const tmp = new THREE.Matrix4();
  return P.map((p) => {
    const bone = bones[p.bone];
    const inv = tmp.copy(bone.matrixWorld).invert().clone();
    let center, radius;
    if (p.t === "e") {
      center = p.c.clone().applyMatrix4(bone.matrixWorld);
      radius = Math.max(p.r.x, p.r.y, p.r.z);
    } else {
      const a = p.a.clone().applyMatrix4(bone.matrixWorld), b = p.b.clone().applyMatrix4(bone.matrixWorld);
      center = a.clone().add(b).multiplyScalar(0.5);
      radius = a.distanceTo(b) / 2 + Math.max(p.ra, p.rb);
    }
    return { ...p, inv: inv.elements, center, bound: radius + p.k + 0.02 };
  });
}

const L = new THREE.Vector3();
function primDist(p, x, y, z) {
  const m = p.inv;
  // into the bone's own space
  const lx = m[0] * x + m[4] * y + m[8] * z + m[12];
  const ly = m[1] * x + m[5] * y + m[9] * z + m[13];
  const lz = m[2] * x + m[6] * y + m[10] * z + m[14];
  if (p.t === "e") {
    const qx = (lx - p.c.x) / p.r.x, qy = (ly - p.c.y) / p.r.y, qz = (lz - p.c.z) / p.r.z;
    const k0 = Math.sqrt(qx * qx + qy * qy + qz * qz);
    const k1 = Math.sqrt((qx / p.r.x) ** 2 + (qy / p.r.y) ** 2 + (qz / p.r.z) ** 2);
    return k1 > 1e-6 ? (k0 * (k0 - 1)) / k1 : -Math.min(p.r.x, p.r.y, p.r.z);
  }
  const ax = p.a.x, ay = p.a.y, az = p.a.z;
  const bx = p.b.x - ax, by = p.b.y - ay, bz = p.b.z - az;
  const px = lx - ax, py = ly - ay, pz = lz - az;
  const t = Math.max(0, Math.min(1, (px * bx + py * by + pz * bz) / (bx * bx + by * by + bz * bz)));
  const dx = px - bx * t, dy = py - by * t, dz = pz - bz * t;
  return Math.sqrt(dx * dx + dy * dy + dz * dz) - (p.ra + (p.rb - p.ra) * t);
}

function field(prims, x, y, z) {
  let d = 1e9;
  for (const p of prims) {
    const cx = x - p.center.x, cy = y - p.center.y, cz = z - p.center.z;
    if (cx * cx + cy * cy + cz * cz > p.bound * p.bound && d < 0.5) continue;
    d = smin(d, primDist(p, x, y, z), p.k);
  }
  return d;
}

/** Marching cubes over a box; f(x, y, z) < 0 inside. Returns an indexed BufferGeometry. */
function polygonize(f, min, max, step) {
  const nx = Math.ceil((max.x - min.x) / step) + 1, ny = Math.ceil((max.y - min.y) / step) + 1, nz = Math.ceil((max.z - min.z) / step) + 1;
  const vals = new Float32Array(nx * ny * nz);
  const idx = (i, j, k) => i + nx * (j + ny * k);
  for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    vals[idx(i, j, k)] = f(min.x + i * step, min.y + j * step, min.z + k * step);
  }
  const pos = [], index = [], edgeVert = new Map();
  // corner offsets (Bourke order) and edges as [corner, corner]
  const C = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]];
  const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  const cv = new Float32Array(8), ev = new Int32Array(12);
  for (let k = 0; k < nz - 1; k++) for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    let cube = 0;
    for (let c = 0; c < 8; c++) {
      cv[c] = vals[idx(i + C[c][0], j + C[c][1], k + C[c][2])];
      if (cv[c] < 0) cube |= 1 << c;
    }
    const edges = edgeTable[cube];
    if (!edges) continue;
    for (let e = 0; e < 12; e++) {
      if (!(edges & (1 << e))) continue;
      const [a, b] = E[e];
      const ia = idx(i + C[a][0], j + C[a][1], k + C[a][2]), ib = idx(i + C[b][0], j + C[b][1], k + C[b][2]);
      const key = ia < ib ? ia * 4 + (ib - ia === 1 ? 0 : ib - ia === nx ? 1 : 2) : ib * 4 + (ia - ib === 1 ? 0 : ia - ib === nx ? 1 : 2);
      let v = edgeVert.get(key);
      if (v === undefined) {
        const t = cv[a] / (cv[a] - cv[b]);
        v = pos.length / 3;
        pos.push(
          min.x + (i + C[a][0] + (C[b][0] - C[a][0]) * t) * step,
          min.y + (j + C[a][1] + (C[b][1] - C[a][1]) * t) * step,
          min.z + (k + C[a][2] + (C[b][2] - C[a][2]) * t) * step,
        );
        edgeVert.set(key, v);
      }
      ev[e] = v;
    }
    const base = cube << 4;
    for (let t = 0; triTable[base + t] !== -1; t += 3) {
      // inside is negative here, so flip the winding to face outward
      index.push(ev[triTable[base + t]], ev[triTable[base + t + 2]], ev[triTable[base + t + 1]]);
    }
  }
  // smooth normals straight from the shape's gradient (no faceting from the grid)
  const nrm = new Float32Array(pos.length), h = step * 0.5;
  for (let v = 0; v < pos.length; v += 3) {
    const x = pos[v], y = pos[v + 1], z = pos[v + 2];
    let nx = f(x + h, y, z) - f(x - h, y, z), ny = f(x, y + h, z) - f(x, y - h, z), nz = f(x, y, z + h) - f(x, y, z - h);
    const l = Math.hypot(nx, ny, nz) || 1;
    nrm[v] = nx / l;
    nrm[v + 1] = ny / l;
    nrm[v + 2] = nz / l;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  g.setIndex(index);
  return g;
}

/** Bone weights per vertex: each shape pulls its vertices toward its bone, nearer shapes pull harder. */
function skin(geo, prims, boneIndex) {
  const n = geo.attributes.position.count;
  const P = geo.attributes.position.array;
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  const acc = new Map();
  for (let v = 0; v < n; v++) {
    const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    acc.clear();
    for (const p of prims) {
      const cx = x - p.center.x, cy = y - p.center.y, cz = z - p.center.z;
      if (cx * cx + cy * cy + cz * cz > (p.bound + 0.05) ** 2) continue;
      const d = Math.max(0, primDist(p, x, y, z));
      const wgt = Math.exp(-d / 0.014);
      const b = boneIndex[p.bone];
      acc.set(b, (acc.get(b) || 0) + wgt);
    }
    const top = [...acc.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4);
    const sum = top.reduce((s, t) => s + t[1], 0) || 1;
    top.forEach(([b, wgt], i) => {
      si[v * 4 + i] = b;
      sw[v * 4 + i] = wgt / sum;
    });
    if (!top.length) sw[v * 4] = 1;
  }
  geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(si, 4));
  geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(sw, 4));
}

const cache = new Map();

/**
 * Builds the skin (and clothes) for a skeleton in its bind pose.
 * bones: name -> Bone (matrixWorld up to date, in the fighter's own space), order: bone names in skeleton order.
 * kind: "fighter" (shorts), "casual" (shirt + trousers), "ref" (shirt + trousers).
 * Returns { skin, shorts?, shirt?, pants? } geometries (shared between fighters with the same build).
 */
export function buildBody(bones, order, w, kind, opts = {}) {
  const key = [w.toFixed(3), kind, opts.body ?? 1, opts.abs ?? 1, opts.step || 0].join("|");
  if (cache.has(key)) return cache.get(key);
  const civ = kind !== "fighter";
  const shapes = prepare(bodyShapes(w, { ...opts, feet: !civ, hands: civ }), bones);
  const boneIndex = Object.fromEntries(order.map((n, i) => [n, i]));
  const step = opts.step || (civ ? 0.02 : 0.015);
  const min = new THREE.Vector3(-0.62, -0.06, -0.3), max = new THREE.Vector3(0.62, 1.82, 0.3);
  const out = {};
  out.skin = polygonize((x, y, z) => field(shapes, x, y, z), min, max, step);
  skin(out.skin, shapes, boneIndex);
  const hipY = bones.hipL.getWorldPosition(L).y, kneeY = bones.knL.getWorldPosition(L).y;
  const sub = (filter) => shapes.filter(filter);
  const clothes = (parts, off, lo, hi) => {
    const g = polygonize((x, y, z) => Math.max(field(parts, x, y, z) - off, lo - y, y - hi), min, max, step);
    skin(g, shapes, boneIndex);
    return g;
  };
  const torsoBones = new Set(["hips", "spine", "chest"]);
  if (!civ) {
    // loose fight shorts: from the waist to mid-thigh
    out.shorts = clothes(sub((p) => p.bone === "hips" || p.bone === "spine" || p.tag === "leg"), 0.016, kneeY + (hipY - kneeY) * 0.42, hipY + 0.14);
  } else {
    out.shirt = clothes(sub((p) => torsoBones.has(p.bone) || p.tag === "arm" || (p.bone === "neck" && p.t === "c")), 0.012, hipY + 0.02, 2);
    out.pants = clothes(sub((p) => p.bone === "hips" || p.bone === "spine" || p.tag === "leg" || p.tag === "shin"), 0.013, 0.1, hipY + 0.12);
  }
  cache.set(key, out);
  return out;
}

/** Puts a skeleton into the pose the body is built in (arms out a little so they don't merge with the torso). */
export const BIND_POSE = { shL: [0, 0, 0.55], shR: [0, 0, -0.55], hipL: [0, 0, 0.07], hipR: [0, 0, -0.07] };

/** The head, in the head bone's own space: skull, cheekbones, brow, nose, lips, chin and ears, with eye sockets. */
// Face shapes by ancestry. Each is a set of adjustments to the classic head: how high and narrow the
// nose bridge is, how wide the nose and cheekbones are, lip fullness, eye-socket depth, jaw and face length.
export const FACES = [
  { name: "Classic" },
  { name: "East Asian", bridgeZ: -0.008, bridgeTop: -0.012, tipW: 1.12, cheekX: 1.1, cheekR: 1.15, faceW: 1.04, browZ: -0.004, socket: 0.55, lid: 0.55, jawW: 1.02 },
  { name: "South Asian", tipW: 1.1, lips: 1.1, socket: 1.1, faceL: 1.02, brow: 1.05 },
  { name: "African", bridgeZ: -0.006, tipW: 1.35, wingX: 1.35, lips: 1.45, jawW: 1.06, cheekR: 1.05, socket: 0.95 },
  { name: "European", bridgeZ: 0.005, tipW: 0.88, wingX: 0.9, lips: 0.85, socket: 1.35, brow: 1.2, browZ: 0.003, faceL: 1.05, jawW: 0.97 },
  { name: "Latino", tipW: 1.08, cheekX: 1.04, lips: 1.12, jawW: 1.02 },
  { name: "Middle Eastern", bridgeZ: 0.008, bridgeTop: 0.004, hump: true, tipW: 1.05, brow: 1.25, browZ: 0.004, socket: 1.3, faceL: 1.04 },
];

/** The head, in the head bone's own space: skull, cheekbones, brow, nose, lips, chin and ears, with eye sockets. */
function headShapes(F = FACES[0]) {
  const add = [], sub = [];
  const v = (k, d = 1) => (F[k] === undefined ? d : F[k]);
  const e = (list, c, r, k) => list.push({ t: "e", c: new THREE.Vector3(...c), r: new THREE.Vector3(...r), k, inv: new THREE.Matrix4().elements, center: new THREE.Vector3(...c), bound: 9 });
  const c = (list, a, b, ra, rb, k) => list.push({ t: "c", a: new THREE.Vector3(...a), b: new THREE.Vector3(...b), ra, rb, k, inv: new THREE.Matrix4().elements, center: new THREE.Vector3(...a), bound: 9 });
  const fw = v("faceW"), fl = v("faceL"), jw = v("jawW"), lips = v("lips"), bz = v("bridgeZ", 0), bt = v("bridgeTop", 0);
  e(add, [0, 0.025, -0.005], [0.09, 0.105, 0.1], 0.03); // cranium
  e(add, [0, -0.005, 0.03], [0.074 * fw, 0.085 * fl, 0.075], 0.03); // face
  e(add, [0, -0.05 * fl, 0.03], [0.068 * jw, 0.05, 0.07], 0.025); // jaw
  e(add, [0, -0.083 * fl, 0.068], [0.026 * jw, 0.02, 0.022], 0.015); // chin
  e(add, [0, 0.052, 0.076 + v("browZ", 0)], [0.07, 0.017 * v("brow"), 0.025 * v("brow")], 0.015); // brow ridge
  c(add, [0, 0.04 + bt, 0.093 + bz], [0, -0.004, 0.107 + bz * 0.5], 0.009, 0.011, 0.01); // nose bridge
  if (F.hump) e(add, [0, 0.018, 0.103 + bz], [0.01, 0.012, 0.009], 0.008);
  e(add, [0, -0.008, 0.106 + bz * 0.4], [0.016 * v("tipW"), 0.014, 0.014], 0.008); // nose tip
  e(add, [0, -0.035, 0.094], [0.024, 0.008 * lips, 0.012 * (0.9 + lips * 0.1)], 0.006); // upper lip
  e(add, [0, -0.047, 0.092], [0.021, 0.009 * lips, 0.012 * (0.9 + lips * 0.1)], 0.006); // lower lip
  for (const s of [-1, 1]) {
    e(add, [s * 0.05 * v("cheekX"), 0.0, 0.068], [0.028 * v("cheekR"), 0.02 * v("cheekR"), 0.024], 0.015); // cheekbones
    e(add, [s * 0.012 * v("wingX"), -0.012, 0.099 + bz * 0.3], [0.009 * v("wingX"), 0.008, 0.009], 0.006); // nostril wings
    e(add, [s * 0.091, 0.01, -0.008], [0.012, 0.03, 0.022], 0.008); // ears
    e(sub, [s * 0.034, 0.03, 0.095], [0.021, 0.015, 0.014 * v("socket")], 0.01); // eye sockets
  }
  return { add, sub };
}

const headGeos = new Map();
/** One shared head mesh per face shape (geometry only), detailed enough to read as a face. */
export function buildHeadGeo(face = 0) {
  if (headGeos.has(face)) return headGeos.get(face);
  const { add, sub } = headShapes(FACES[face] || FACES[0]);
  const f = (x, y, z) => {
    let d = 1e9;
    for (const p of add) d = smin(d, primDist(p, x, y, z), p.k);
    for (const p of sub) {
      const s = -primDist(p, x, y, z), k = p.k;
      const h = Math.max(k - Math.abs(d - s), 0) / k;
      d = Math.max(d, s) + h * h * k * 0.25;
    }
    return d;
  };
  const g = polygonize(f, new THREE.Vector3(-0.12, -0.12, -0.13), new THREE.Vector3(0.12, 0.15, 0.14), 0.005);
  headGeos.set(face, g);
  return g;
}
