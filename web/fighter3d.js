// Procedural 3D fighters: a jointed low-poly body built from primitives, a pose library,
// and an animator that blends between poses so every move flows into the next.
import * as THREE from "./vendor/three.module.min.js";
import { ABS, BIND_POSE, BODY_TYPES, FACES, buildBody, buildHeadGeo } from "./body3d.js";
import { TATTOO_DESIGNS, TATTOO_REGIONS, addTattoos } from "./tattoo3d.js";

export const LOOK_OPTIONS = {
  skin: ["#f2d2b6", "#e3b48e", "#c98e64", "#a96c45", "#7c4b2c", "#4f301d"],
  hair: ["Bald", "Buzz", "Short", "Mohawk", "Man bun", "Long", "Afro", "Braids", "Dreadlocks"],
  hairColor: ["#15120f", "#3b2416", "#6e4524", "#c9a25a", "#9c3a1a", "#9b9b9b"],
  beard: ["None", "Stubble", "Goatee", "Full"],
  shorts: ["#c8102e", "#1d4ed8", "#151515", "#f2f2f2", "#15803d", "#e8a91c", "#7c3aed", "#f97316"],
  body: BODY_TYPES.map((b) => b.name),
  abs: ABS.map((a) => a.name),
  ...Object.fromEntries(TATTOO_REGIONS.map((r) => [r.key, TATTOO_DESIGNS])),
  face: FACES.map((f) => f.name),
};
export { TATTOO_REGIONS };
export const SHORTS_NAMES = ["Red", "Blue", "Black", "White", "Green", "Gold", "Purple", "Orange"];
const KEYS = ["skin", "hair", "hairColor", "beard", "shorts", "body", "abs", ...TATTOO_REGIONS.map((r) => r.key), "face"];
// looks saved before body type and abs existed are athletic and toned
const LOOK_DEFAULTS = { body: 1, abs: 1 };

export function parseLook(str) {
  const parts = String(str || "").split(",").map(Number);
  const look = {};
  KEYS.forEach((k, i) => {
    const n = LOOK_OPTIONS[k].length;
    look[k] = Number.isInteger(parts[i]) ? ((parts[i] % n) + n) % n : LOOK_DEFAULTS[k] ?? 0;
  });
  return look;
}
export function lookString(look) {
  return KEYS.map((k) => look[k]).join(",");
}

/** NPCs have no stored look, so it is derived from their name (the same fighter always looks the same). */
export function lookFromName(name) {
  let h = 2166136261;
  for (const c of String(name)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const r = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
  const pick = (k) => Math.floor(r() * LOOK_OPTIONS[k].length);
  return { skin: pick("skin"), hair: pick("hair"), hairColor: Math.floor(r() * 5), beard: pick("beard"), shorts: pick("shorts"), body: pick("body"), abs: pick("abs"),
    ...Object.fromEntries(TATTOO_REGIONS.map((t) => [t.key, r() < 0.3 ? 1 + Math.floor(r() * (TATTOO_DESIGNS.length - 1)) : 0])),
    face: 1 + Math.floor(r() * (FACES.length - 1)) };
}

export function randomLook() {
  return lookFromName(Math.random().toString(36));
}

// ------------------------------------------------------------------ poses
// A pose is a set of joint rotations (radians, XYZ order) plus a hip offset.
// Fighters face +z; their left is +x. Arms and legs hang along -y, so a negative
// shoulder x swings an arm forward, a negative elbow x bends the forearm up, and a
// positive knee x bends the shin back.

const JOINTS = ["hips", "spine", "chest", "neck", "shL", "elL", "shR", "elR", "hipL", "knL", "hipR", "knR"];

function pose(base, o = {}) {
  const p = { hipsPos: [0, 0, 0] };
  for (const j of JOINTS) p[j] = [0, 0, 0];
  for (const src of [base, o]) {
    if (!src) continue;
    for (const k in src) p[k] = src[k].slice();
  }
  return p;
}

/** Swap left and right (a left hook becomes a right hook). */
export function mirror(p) {
  const m = {};
  for (const k in p) {
    const v = p[k];
    const key = k.endsWith("L") ? k.slice(0, -1) + "R" : k.endsWith("R") ? k.slice(0, -1) + "L" : k;
    m[key] = k === "hipsPos" ? [-v[0], v[1], v[2]] : [v[0], -v[1], -v[2]];
  }
  return m;
}

const STANCE = pose(null, {
  hipsPos: [0, -0.07, 0],
  hips: [0, -0.45, 0],
  spine: [0.08, 0.15, 0],
  chest: [0.06, 0.18, 0],
  neck: [0.12, 0.1, 0],
  shL: [-0.85, 0, 0.18], elL: [-1.75, 0, 0],
  shR: [-0.45, 0, -0.2], elR: [-2.3, 0, 0],
  hipL: [-0.32, 0.45, 0.1], knL: [0.42, 0, 0],
  hipR: [0.22, 0.35, -0.12], knR: [0.36, 0, 0],
});

export const POSES = {
  stance: STANCE,
  relaxed: pose(null, {
    hipsPos: [0, -0.01, 0], neck: [0.05, 0, 0], chest: [0.02, 0, 0],
    shL: [0.05, 0, 0.14], elL: [-0.35, 0, 0], shR: [0.05, 0, -0.14], elR: [-0.35, 0, 0],
    hipL: [0, 0, 0.06], knL: [0.04, 0, 0], hipR: [0, 0, -0.06], knR: [0.04, 0, 0],
  }),
  dejected: pose(null, {
    hipsPos: [0, -0.02, 0], spine: [0.15, 0, 0], neck: [0.55, 0, 0],
    shL: [0.1, 0, 0.08], elL: [-0.25, 0, 0], shR: [-0.6, 0, -0.1], elR: [-2.1, 0, 0],
    hipL: [0, 0, 0.05], knL: [0.05, 0, 0], hipR: [0, 0, -0.05], knR: [0.05, 0, 0],
  }),
  victory: pose(null, {
    hipsPos: [0, 0, 0], chest: [-0.15, 0, 0], neck: [-0.35, 0, 0],
    shL: [-2.75, 0, 0.45], elL: [-0.25, 0, 0], shR: [-2.75, 0, -0.45], elR: [-0.25, 0, 0],
    hipL: [0, 0, 0.12], hipR: [0, 0, -0.12],
  }),
  // kneeling in the opponent's guard, leaning over them
  top: pose(null, {
    hipsPos: [0, -0.46, 0],
    spine: [0.55, 0, 0], chest: [0.3, 0, 0], neck: [-0.35, 0, 0],
    shL: [-1.2, 0, 0.35], elL: [-0.7, 0, 0], shR: [-1.2, 0, -0.35], elR: [-0.7, 0, 0],
    hipL: [-0.1, 0, 0.3], knL: [1.75, 0, 0], hipR: [-0.1, 0, -0.3], knR: [1.75, 0, 0],
  }),
  // flat on the back with the legs wrapped up in guard
  bottom: pose(null, {
    hipsPos: [0, -0.8, 0],
    hips: [-1.42, 0, 0], spine: [-0.05, 0, 0], neck: [0.55, 0, 0],
    shL: [-1.5, 0, 0.3], elL: [-0.9, 0, 0], shR: [-1.5, 0, -0.3], elR: [-0.9, 0, 0],
    hipL: [-1.15, 0, 0.5], knL: [1.45, 0, 0], hipR: [-1.15, 0, -0.5], knR: [1.45, 0, 0],
  }),
  // knocked down / out
  down: pose(null, {
    hipsPos: [0, -0.84, 0],
    hips: [-1.52, 0.1, 0], neck: [0.1, 0.5, 0],
    shL: [-0.4, 0, 1.25], elL: [-0.4, 0, 0], shR: [-0.3, 0, -1.1], elR: [-0.9, 0, 0],
    hipL: [-0.15, 0, 0.18], knL: [0.25, 0, 0], hipR: [-0.45, 0, -0.1], knR: [0.9, 0, 0],
  }),
  // sitting up, dazed (between a knockdown and getting up)
  sitting: pose(null, {
    hipsPos: [0, -0.78, 0],
    hips: [-0.35, 0, 0], spine: [0.25, 0, 0], neck: [0.3, 0, 0],
    shL: [0.6, 0, 0.35], elL: [-0.2, 0, 0], shR: [0.6, 0, -0.35], elR: [-0.2, 0, 0],
    hipL: [-1.0, 0, 0.2], knL: [1.6, 0, 0], hipR: [-1.0, 0, -0.2], knR: [1.6, 0, 0],
  }),
  ref: pose(null, {
    hipsPos: [0, -0.02, 0], neck: [0.05, 0, 0],
    shL: [-0.15, 0, 0.12], elL: [-1.3, 0, 0], shR: [-0.15, 0, -0.12], elR: [-1.3, 0, 0],
    hipL: [0, 0, 0.08], knL: [0.08, 0, 0], hipR: [0, 0, -0.08], knR: [0.08, 0, 0],
  }),
};

// referee holding the winner's hand up
POSES.refRaise = pose(POSES.ref, { shR: [-2.75, 0, -0.45], elR: [-0.2, 0, 0], neck: [-0.1, 0, 0] });

const S = STANCE;
// Attacks. Each is a list of [pose, seconds to hold the key, blend speed].
const JAB_EXT = pose(S, { shL: [-1.6, 0.05, 0.02], elL: [-0.05, 0, 0], chest: [0.08, -0.12, 0], spine: [0.12, 0.05, 0] });
const CROSS_EXT = pose(S, { shR: [-1.62, -0.1, 0.05], elR: [-0.05, 0, 0], chest: [0.12, 0.55, 0], spine: [0.15, 0.35, 0], hipR: [0.3, 0.6, -0.1], hipsPos: [0, -0.09, 0.06] });
const HOOK_L = pose(S, { shL: [-0.25, 0, 1.45], elL: [-1.55, 0, 0], chest: [0.1, -0.45, -0.05], spine: [0.1, -0.2, 0] });
const HOOK_L_LOAD = pose(S, { chest: [0.1, 0.35, 0], shL: [-0.5, 0, 0.9], elL: [-1.6, 0, 0] });
const UPPER_R_LOAD = pose(S, { hipsPos: [0, -0.14, 0], shR: [0.25, 0, -0.15], elR: [-1.5, 0, 0], chest: [0.25, 0.3, 0] });
const UPPER_R = pose(S, { hipsPos: [0, -0.04, 0.04], shR: [-1.15, 0, -0.05], elR: [-1.85, 0, 0], chest: [-0.12, 0.45, 0] });
const OVERHAND_LOAD = pose(S, { shR: [-1.6, 0, -0.9], elR: [-1.2, 0, 0], chest: [0, -0.2, 0.15] });
const OVERHAND = pose(S, { shR: [-2.05, 0.2, -0.25], elR: [-0.35, 0, 0], chest: [0.4, 0.6, -0.1], spine: [0.25, 0.3, 0], hipsPos: [0, -0.12, 0.1] });
const KICK_LOAD = pose(S, { hips: [0, 0.2, 0], hipR: [-0.4, 0.3, -0.5], knR: [1.4, 0, 0], shR: [0.4, 0, -0.5], elR: [-0.6, 0, 0] });
const BODY_KICK = pose(S, {
  hipsPos: [0, -0.04, 0], hips: [0, 0.75, -0.15], spine: [0, 0, 0.25], chest: [0.05, -0.3, 0.12],
  hipL: [0, 0.4, 0.06], knL: [0.12, 0, 0], hipR: [-0.2, 0.85, -1.35], knR: [0.15, 0, 0],
  shR: [0.6, 0, -0.55], elR: [-0.4, 0, 0], shL: [-0.9, 0, 0.3], elL: [-2.0, 0, 0],
});
const HEAD_KICK = pose(BODY_KICK, { hips: [0, 0.75, -0.35], spine: [0, 0, 0.45], hipR: [-0.2, 0.85, -1.95], knR: [0.05, 0, 0] });
const LEG_KICK = pose(S, {
  hipsPos: [0, -0.1, 0], hips: [0, 0.55, 0], chest: [0.1, -0.25, 0.05],
  hipR: [-0.3, 0.9, -0.75], knR: [0.25, 0, 0], shR: [0.5, 0, -0.4], elR: [-0.6, 0, 0],
});
const KNEE = pose(S, {
  hipsPos: [0, 0, 0.12], hips: [0, -0.1, 0], spine: [-0.15, 0, 0], neck: [0.3, 0, 0],
  shL: [-1.55, 0, -0.15], elL: [-1.15, 0, 0], shR: [-1.55, 0, 0.15], elR: [-1.15, 0, 0],
  hipR: [-1.75, 0, 0], knR: [1.9, 0, 0], hipL: [0, 0, 0.06], knL: [0.08, 0, 0],
});
const FLYING_KNEE = pose(KNEE, { hipsPos: [0, 0.38, 0.25], hipL: [0.5, 0, 0.1], knL: [1.4, 0, 0], shL: [-0.4, 0, 0.6], elL: [-1.2, 0, 0] });
const SLIP = pose(S, { hipsPos: [0, -0.15, 0], spine: [0.2, 0, -0.35], chest: [0.15, 0, -0.2], neck: [0.15, 0, -0.2] });
const SHOOT = pose(null, {
  hipsPos: [0, -0.42, 0.25], hips: [0.25, 0, 0], spine: [0.75, 0, 0], chest: [0.25, 0, 0], neck: [-0.7, 0, 0],
  shL: [-1.35, 0, 0.25], elL: [-0.55, 0, 0], shR: [-1.35, 0, -0.25], elR: [-0.55, 0, 0],
  hipL: [-1.15, 0, 0.12], knL: [1.65, 0, 0], hipR: [0.35, 0, -0.1], knR: [1.6, 0, 0],
});
const SPRAWL = pose(null, {
  hipsPos: [0, -0.55, -0.15], hips: [0.95, 0, 0], spine: [0.2, 0, 0], neck: [-0.6, 0, 0],
  shL: [-1.7, 0, 0.3], elL: [-0.4, 0, 0], shR: [-1.7, 0, -0.3], elR: [-0.4, 0, 0],
  hipL: [0.35, 0, 0.3], knL: [0.25, 0, 0], hipR: [0.35, 0, -0.3], knR: [0.25, 0, 0],
});
const CLINCH = pose(S, { shL: [-1.7, 0, -0.2], elL: [-1.3, 0, 0], shR: [-1.7, 0, 0.2], elR: [-1.3, 0, 0], spine: [0.35, 0, 0], neck: [0.25, 0, 0], hipsPos: [0, -0.1, 0.1] });
const TOUCH = pose(S, { shL: [-1.45, 0, 0.0], elL: [-0.15, 0, 0], shR: [-1.45, 0, 0.0], elR: [-0.15, 0, 0], chest: [0.1, 0, 0] });
const T = POSES.top, B = POSES.bottom;
const TAP_A = (base) => pose(base, { shL: [-0.6, 0, 1.0], elL: [-0.3, 0, 0] });
const TAP_B = (base) => pose(base, { shL: [-0.2, 0, 1.25], elL: [-0.1, 0, 0] });
const BLOCK_TOP = pose(B, { shL: [-1.2, 0, -0.2], elL: [-2.1, 0, 0], shR: [-1.2, 0, 0.2], elR: [-2.1, 0, 0], neck: [0.3, 0, 0] });

function hand(p, flip) {
  return flip ? mirror(p) : p;
}

/** A copy of a pose with some joints nudged by the given amounts (instead of replaced). */
function nudge(base, d) {
  const p = pose(base);
  for (const k in d) for (let i = 0; i < 3; i++) p[k][i] += d[k][i];
  return p;
}

// ---------------------------------------------------------------- highlight-reel strikes
// Spins turn the hips all the way round (y goes down by 2π); the animator unwinds the
// angle afterwards so the fighter never spins back the other way.
const FULL = -0.45 - Math.PI * 2;
const GUARD_UP = { shL: [-0.85, 0, 0.18], elL: [-1.75, 0, 0], shR: [-0.45, 0, -0.2], elR: [-2.3, 0, 0] };
const turn = (y, o = {}) => pose(S, { spine: [0.1, 0, 0], chest: [0.05, 0, 0], ...GUARD_UP, hips: [0, y, 0], ...o });
const LAND = pose(S, { hips: [0, FULL, 0] });

const SPIN_BACK_KICK = (head) => [
  [turn(-1.7, { neck: [0.1, 1.2, 0], hipsPos: [0, -0.06, 0] }), 0.08, 24],
  [turn(-2.7, { spine: [0.35, 0, 0], neck: [0, 1.1, 0], hipR: [-1.3, 0, 0], knR: [2.0, 0, 0], hipL: [-0.1, 0, 0], knL: [0.3, 0, 0] }), 0.08, 26],
  [turn(-Math.PI, {
    spine: [head ? 0.85 : 0.55, 0, 0], chest: [0.2, 0, 0], neck: [head ? -0.9 : -0.5, 0, 0],
    hipR: [head ? 1.85 : 1.4, 0, 0], knR: [0.04, 0, 0], hipL: [-0.15, 0, 0], knL: [0.25, 0, 0],
  }), 0.22, 30, head ? "head" : "body"],
  [turn(-4.4, { hipR: [-0.9, 0, 0], knR: [1.8, 0, 0] }), 0.1, 18],
  [turn(-5.6), 0.07, 18],
  [LAND, 0.08, 16],
];
const SPIN_HEEL_KICK = [
  [turn(-1.7, { neck: [0.1, 1.2, 0] }), 0.08, 24],
  [turn(-3.1, { hips: [0, -3.1, 0.25], hipR: [0.1, 0, -1.0], knR: [0.7, 0, 0], neck: [0, 1.0, 0] }), 0.08, 24],
  [turn(-4.5, { hips: [0, -4.5, 0.5], spine: [0, 0, 0.2], hipR: [-0.1, 0, -1.85], knR: [0.04, 0, 0], hipL: [0, 0, 0.1], knL: [0.25, 0, 0] }), 0.14, 28, "hook"],
  [turn(-5.5, { hipR: [0.1, 0, -0.6], knR: [0.6, 0, 0] }), 0.09, 18],
  [LAND, 0.1, 16],
];
const SPIN_FIST_FRAMES = (jump) => {
  const up = jump ? { hipsPos: [0, 0.3, 0.1], hipL: [-1.0, 0, 0], knL: [1.6, 0, 0], hipR: [-0.6, 0, 0], knR: [1.4, 0, 0] } : {};
  return [
    [turn(-1.8, { neck: [0.1, 1.2, 0], hipsPos: [0, jump ? -0.18 : -0.05, 0] }), 0.08, 24],
    [turn(-3.2, { ...up, neck: [0, 1.0, 0], shR: [-0.6, 0, -0.9], elR: [-1.2, 0, 0] }), 0.07, 26],
    [turn(-4.6, { ...up, shR: [-0.1, 0, -1.55], elR: [-0.1, 0, 0], chest: [0, -0.2, 0] }), 0.16, 30, "hook"],
    [turn(-5.7), 0.08, 18],
    [LAND, 0.08, 16],
  ];
};
const SPIN_ELBOW = [
  [turn(-1.8, { neck: [0.1, 1.2, 0] }), 0.08, 24],
  [turn(-3.3, { neck: [0, 1.0, 0], shR: [-0.2, 0, -1.2], elR: [-2.4, 0, 0] }), 0.07, 26],
  [turn(-4.3, { shR: [-0.15, 0.4, -1.5], elR: [-2.55, 0, 0], chest: [0.1, -0.25, 0] }), 0.16, 30, "hook"],
  [turn(-5.6), 0.08, 18],
  [LAND, 0.08, 16],
];
const TORNADO = [
  [turn(-1.6, { hipsPos: [0, -0.15, 0], knL: [0.7, 0, 0], knR: [0.7, 0, 0] }), 0.08, 22],
  [turn(-3.0, { hipsPos: [0, 0.3, 0.1], hipL: [-1.3, 0, 0.1], knL: [1.9, 0, 0], hipR: [-0.3, 0, 0], knR: [1.0, 0, 0] }), 0.08, 24],
  [turn(-4.5, { hipsPos: [0, 0.42, 0.15], hipL: [-1.0, 0, 0.1], knL: [1.9, 0, 0], hipR: [-1.2, 0, -0.9], knR: [0.5, 0, 0] }), 0.08, 24],
  [turn(-5.9, { hipsPos: [0, 0.38, 0.2], spine: [-0.15, 0, 0.2], hipL: [-0.6, 0, 0.1], knL: [1.8, 0, 0], hipR: [-2.1, 0, -0.55], knR: [0.04, 0, 0] }), 0.14, 28, "hook"],
  [turn(-6.5, { hipsPos: [0, 0.05, 0], hipR: [-0.6, 0, 0], knR: [0.8, 0, 0] }), 0.1, 18],
  [LAND, 0.08, 16],
];
// cartwheel: turn side-on, roll over the hands toward the opponent and chop the leg down
const wheel = (r, o = {}) => pose(null, { hips: [0, -1.57, r], ...o });
const CARTWHEEL = [
  [pose(S, { hips: [0, -1.4, 0], hipsPos: [0, -0.12, 0], shL: [-2.9, 0, 0.2], shR: [-2.9, 0, -0.2], elL: [-0.1, 0, 0], elR: [-0.1, 0, 0] }), 0.1, 18],
  [wheel(-1.5, { hipsPos: [0, -0.05, 0], shL: [0, 0, 2.9], shR: [0, 0, -2.9], hipL: [0, 0, 0.6], hipR: [0, 0, -0.9] }), 0.1, 22],
  [wheel(-3.1, { hipsPos: [0, 0.05, 0], shL: [0, 0, 2.95], shR: [0, 0, -2.95], hipL: [0, 0, 1.0], hipR: [0, 0, -1.0] }), 0.1, 22],
  [wheel(-4.3, { hipsPos: [0, 0.05, 0], shL: [0, 0, 2.2], shR: [0, 0, -2.6], hipL: [0, 0, 1.25], knL: [0.04, 0, 0], hipR: [0, 0, -0.5] }), 0.16, 28, "head"],
  [wheel(-5.6, { hipsPos: [0, -0.15, 0], hipL: [0, 0, 0.5], knL: [0.6, 0, 0], shL: [-1, 0, 0.6], shR: [-1, 0, -0.6] }), 0.1, 18],
  [pose(S, { hips: [0, -0.45, -Math.PI * 2] }), 0.1, 16],
];
// rolling thunder: a forward flip that brings the heel down on the head
const flip = (x, o = {}) => pose(null, { hips: [x, -0.2, 0], ...o });
const ROLLING_THUNDER = [
  [pose(S, { hipsPos: [0, -0.2, 0], spine: [0.4, 0, 0], knL: [0.8, 0, 0], knR: [0.8, 0, 0] }), 0.1, 18],
  [flip(1.5, { hipsPos: [0, -0.3, 0.1], shL: [-2.8, 0, 0.3], shR: [-2.8, 0, -0.3], hipL: [0.3, 0, 0], hipR: [0.3, 0, 0] }), 0.1, 22],
  [flip(3.0, { hipsPos: [0, -0.2, 0.2], shL: [-2.9, 0, 0.3], shR: [-2.9, 0, -0.3], hipL: [-0.3, 0, 0.2], hipR: [0.1, 0, -0.2] }), 0.1, 22],
  [flip(4.3, { hipsPos: [0, -0.05, 0.3], hipR: [-0.5, 0, -0.1], knR: [0.04, 0, 0], hipL: [-1.4, 0, 0.1], knL: [1.6, 0, 0], shL: [-1.2, 0, 0.8], shR: [-1.2, 0, -0.8] }), 0.16, 28, "head"],
  [flip(5.6, { hipsPos: [0, -0.2, 0.2], hipL: [-0.4, 0, 0], knL: [0.8, 0, 0], hipR: [-0.6, 0, 0], knR: [0.9, 0, 0] }), 0.1, 18],
  [pose(S, { hips: [Math.PI * 2, -0.45, 0] }), 0.1, 16],
];
const SUPERMAN = [
  [pose(S, { hipsPos: [0, -0.1, 0], hipR: [-1.2, 0.2, 0], knR: [1.5, 0, 0], shR: [0.2, 0, -0.3], elR: [-1.4, 0, 0] }), 0.12, 20],
  [pose(CROSS_EXT, {
    hipsPos: [0, 0.22, 0.2], spine: [0.35, 0.35, 0], chest: [0.15, 0.5, 0],
    hipR: [0.8, 0.3, -0.1], knR: [0.7, 0, 0], hipL: [-0.4, 0, 0.1], knL: [0.9, 0, 0],
  }), 0.2, 26, "head"],
];
const FRONT_KICK = (face) => [
  [pose(S, { hips: [0, -0.1, 0], spine: [-0.05, 0, 0], chest: [0, 0, 0], hipR: [-1.7, 0, 0], knR: [2.0, 0, 0] }), 0.1, 22],
  [pose(S, {
    hips: [face ? -0.3 : -0.12, -0.05, 0], spine: [face ? -0.15 : 0, 0, 0], chest: [0, 0, 0],
    hipR: [face ? -2.25 : -1.55, 0, 0], knR: [0.03, 0, 0], hipL: [0.15, 0, 0.05], knL: [0.15, 0, 0],
  }), 0.2, 28, face ? "head" : "body"],
];
const TEEP = [
  [pose(S, { hipL: [-1.6, 0, 0], knL: [1.9, 0, 0], hipsPos: [0, -0.05, 0] }), 0.1, 22],
  [pose(S, { hips: [-0.12, -0.35, 0], hipL: [-1.55, 0, 0], knL: [0.03, 0, 0], hipR: [0.2, 0.35, -0.1], knR: [0.1, 0, 0] }), 0.2, 28, "body"],
];
const OBLIQUE = [
  [pose(S, { hipL: [-0.9, 0, 0.1], knL: [1.3, 0, 0] }), 0.09, 22],
  [pose(S, { hips: [-0.1, -0.2, 0], hipL: [-0.75, -0.6, 0.1], knL: [0.04, 0, 0], spine: [0, 0, 0] }), 0.18, 28, "leg"],
];
const AXE = [
  [pose(S, { hips: [-0.3, -0.2, 0], spine: [-0.15, 0, 0], hipR: [-2.85, 0, -0.35], knR: [0.1, 0, 0], hipL: [0.15, 0, 0], knL: [0.1, 0, 0] }), 0.2, 14],
  [pose(S, { hips: [0.15, -0.2, 0], spine: [0.35, 0, 0], hipR: [-1.1, 0, 0], knR: [0.04, 0, 0] }), 0.18, 26, "head"],
];
const HOOK_KICK = [
  [pose(S, { hips: [0, -0.9, -0.35], hipL: [-1.3, 0, 0.5], knL: [1.7, 0, 0], spine: [0, 0, -0.2] }), 0.1, 22],
  [pose(S, { hips: [0, -1.1, -0.45], hipL: [-1.0, 0, 1.75], knL: [0.04, 0, 0], spine: [0, 0, -0.25] }), 0.08, 26],
  [pose(S, { hips: [0, -0.8, -0.45], hipL: [-1.5, 0, 1.55], knL: [1.3, 0, 0], spine: [0, 0, -0.25] }), 0.16, 26, "hook"],
];
const QUESTION_MARK = [
  [pose(S, { hips: [0, 0.35, 0], hipR: [-0.5, 0.6, -0.45], knR: [1.3, 0, 0] }), 0.12, 20],
  [pose(BODY_KICK, { hips: [0, 0.95, -0.55], hipR: [-0.55, 0.85, -2.1], knR: [1.1, 0, 0] }), 0.08, 22],
  [pose(HEAD_KICK, { hips: [0, 0.9, -0.55], hipR: [-0.45, 0.85, -2.25], knR: [0.04, 0, 0] }), 0.22, 30, "hook"],
];
const SWITCH = pose(mirror(S), { hipsPos: [0, -0.04, 0] });
const SWITCH_KICK = (jump) => [
  [jump ? pose(SWITCH, { hipsPos: [0, -0.2, 0], knL: [0.9, 0, 0], knR: [0.9, 0, 0] }) : SWITCH, 0.1, 22],
  [jump ? pose(mirror(HEAD_KICK), { hipsPos: [0, 0.35, 0.1], hipR: [-1.2, 0, 0], knR: [1.8, 0, 0] }) : mirror(BODY_KICK), 0.24, 24, jump ? "hook" : "body"],
];
const SHOWTIME = [
  [pose(S, { hipsPos: [0, 0.2, 0.1], hipL: [-1.4, 0, 0], knL: [1.6, 0, 0], shL: [-0.6, 0, 0.5], elL: [-1, 0, 0] }), 0.14, 18],
  [pose(HEAD_KICK, { hipsPos: [0, 0.5, 0.2], hipL: [0.5, 0, 0.1], knL: [1.2, 0, 0] }), 0.24, 26, "hook"],
];

/**
 * Builds the keyframes for a named technique: { frames, fwd, lungeFor }. Each frame is
 * [pose, seconds, blend speed, hit] where hit names the target ("head", "hook", "body", "leg", "ground")
 * on the frames that land. For ground strikes, base is the pose of the position they are thrown from.
 */
export function attack(move, n = 1, ground = false, base = null) {
  const m = String(move || "").toLowerCase();
  if (ground) return groundStrikes(m, n, base || POSES.top);
  const jab = [JAB_EXT, 0.14, 26, "head"], cross = [CROSS_EXT, 0.18, 26, "head"], hook = [HOOK_L, 0.18, 24, "hook"];
  const reset = [S, 0.06, 26];
  if (m.includes("spinning back kick")) return { frames: SPIN_BACK_KICK(!m.includes("body")), fwd: 0.25 };
  if (m.includes("spinning heel kick")) return { frames: SPIN_HEEL_KICK, fwd: 0.15 };
  if (m.includes("spinning back elbow")) return { frames: SPIN_ELBOW, fwd: 0.3 };
  if (m.includes("spinning back fist") || m.includes("spinning")) return { frames: SPIN_FIST_FRAMES(m.includes("jumping")), fwd: m.includes("jumping") ? 0.45 : 0.2 };
  if (m.includes("tornado")) return { frames: TORNADO, fwd: 0.3, lungeFor: 0.5 };
  if (m.includes("cartwheel")) return { frames: CARTWHEEL, fwd: 0.55, lungeFor: 0.7 };
  if (m.includes("rolling thunder")) return { frames: ROLLING_THUNDER, fwd: 0.6, lungeFor: 0.7 };
  if (m.includes("superman")) return { frames: SUPERMAN, fwd: 0.6, lungeFor: 0.4 };
  if (m.includes("front kick to the face")) return { frames: FRONT_KICK(true), fwd: 0.1 };
  if (m.includes("front kick")) return { frames: FRONT_KICK(false), fwd: 0.1 };
  if (m.includes("teep")) return { frames: TEEP, fwd: 0.05 };
  if (m.includes("oblique")) return { frames: OBLIQUE, fwd: 0.05 };
  if (m.includes("axe kick")) return { frames: AXE, fwd: 0.1 };
  if (m.includes("hook kick")) return { frames: HOOK_KICK, fwd: 0.1 };
  if (m.includes("question mark")) return { frames: QUESTION_MARK, fwd: 0.1 };
  if (m.includes("showtime")) return { frames: SHOWTIME, fwd: 0.5, lungeFor: 0.45 };
  if (m.includes("jumping switch kick")) return { frames: SWITCH_KICK(true), fwd: 0.35, lungeFor: 0.4 };
  if (m.includes("switch kick")) return { frames: SWITCH_KICK(false), fwd: 0.1 };
  if (m.includes("head kick")) return { frames: [[KICK_LOAD, 0.12, 16], [HEAD_KICK, 0.3, 20, "hook"]], fwd: 0.1 };
  if (m.includes("body kick")) return { frames: [[KICK_LOAD, 0.12, 16], [BODY_KICK, 0.3, 20, "body"]], fwd: 0.1 };
  if (m.includes("leg kick") || m.includes("calf kick")) return { frames: [[KICK_LOAD, 0.1, 16], [LEG_KICK, 0.26, 20, "leg"]] };
  if (m.includes("flying knee")) return { frames: [[pose(S, { hipsPos: [0, -0.2, 0] }), 0.15, 16], [FLYING_KNEE, 0.35, 16, "head"]], fwd: 0.55 };
  if (m.includes("knee")) return { frames: [[CLINCH, 0.2, 14], [KNEE, 0.24, 20, "body"]], fwd: 0.35 };
  if (m.includes("uppercut")) return { frames: [[UPPER_R_LOAD, 0.14, 18], [UPPER_R, 0.22, 24, "head"]], fwd: 0.15 };
  if (m.includes("overhand") || m.includes("right hand")) return { frames: [[OVERHAND_LOAD, 0.16, 16], [OVERHAND, 0.24, 24, "head"]], fwd: 0.3 };
  if (m.includes("1-2")) return { frames: [jab, reset, cross, reset, [HOOK_L_LOAD, 0.08, 20], hook], fwd: 0.2 };
  if (m.includes("hook")) return { frames: [[HOOK_L_LOAD, 0.12, 18], hook], fwd: 0.15 };
  if (m.includes("straight left")) return { frames: [[mirror(CROSS_EXT), 0.2, 24, "head"]], fwd: 0.25 };
  if (m.includes("jab") && !m.includes("cross") && n < 2) return { frames: [[JAB_EXT, 0.16, 28, "head"]], fwd: 0.15 };
  const frames = [jab, reset, cross];
  for (let i = 2; i < Math.min(n, 5); i++) frames.push(reset, i % 2 ? hook : cross);
  return { frames, fwd: 0.25 };
}

/** Punches and elbows from whatever position the striker is in. */
function groundStrikes(m, n, base) {
  const isSide = base === POSES.sideTop, isBack = base === POSES.backTop;
  let load, hit;
  if (isBack) {
    load = nudge(base, { chest: [0, -0.3, 0] });
    Object.assign(load, pose(load, { shR: [-1.0, 0, -1.3], elR: [-1.5, 0, 0] }));
    hit = nudge(base, { chest: [0.1, 0.35, 0] });
    Object.assign(hit, pose(hit, { shR: [-1.6, 0, -0.15], elR: [-0.3, 0, 0] }));
  } else if (isSide || m.includes("elbow")) {
    load = pose(nudge(base, { spine: [-0.25, 0, 0] }), { shR: [-2.9, 0, -0.5], elR: [-2.6, 0, 0] });
    hit = pose(nudge(base, { spine: [0.25, 0, 0], chest: [0.15, 0.3, 0] }), { shR: [-1.3, 0, -0.3], elR: [-2.6, 0, 0] });
    return { frames: [[load, 0.2, 14], [hit, 0.16, 26, "ground"]] };
  } else {
    load = pose(nudge(base, { spine: [-0.35, 0, 0] }), { shR: [-2.6, 0, -0.3], elR: [-1.6, 0, 0] });
    hit = pose(nudge(base, { spine: [0.3, 0, 0], chest: [0.15, 0.25, 0] }), { shR: [-1.05, 0, -0.1], elR: [-0.1, 0, 0] });
  }
  const frames = [];
  for (let i = 0; i < Math.min(Math.max(n, 1), 4); i++) {
    const f = i % 2 === 1;
    frames.push([hand(load, f), 0.13, 18], [hand(hit, f), 0.12, 28, "ground"]);
  }
  return { frames };
}

/** What a hit looks like on the receiving end, as a pose offset that fades out. */
export function hitOffset(kind, strength = 1) {
  const s = strength;
  switch (kind) {
    case "body": return { chest: [0.45 * s, 0, 0], spine: [0.25 * s, 0, 0], neck: [0.2 * s, 0, 0], hipsPos: [0, -0.05 * s, -0.08 * s] };
    case "leg": return { knL: [0.6 * s, 0, 0], hipL: [0.2 * s, 0, 0], hipsPos: [0, -0.07 * s, 0] };
    case "ground": return { neck: [0, 0.7 * s, 0], chest: [0, 0.2 * s, 0] };
    case "hook": return { neck: [-0.15 * s, 0.75 * s, 0.25 * s], chest: [-0.1 * s, 0.25 * s, 0], hipsPos: [0, 0, -0.05 * s] };
    default: return { neck: [-0.6 * s, 0.15 * s, 0], chest: [-0.28 * s, 0, 0], spine: [-0.12 * s, 0, 0], hipsPos: [0, 0, -0.1 * s] };
  }
}

// ---------------------------------------------------------------- ground positions
// Each position has a pose for the fighter on top and the one underneath; the arena
// places the two bodies (see GROUND in arena3d.js).
Object.assign(POSES, {
  halfTop: pose(T, {
    hipsPos: [0, -0.5, 0.05], spine: [0.85, 0.2, 0], chest: [0.25, 0, 0], neck: [-0.4, 0, 0],
    shL: [-1.4, 0, 0.5], elL: [-0.9, 0, 0], shR: [-1.0, 0, -0.6], elR: [-1.3, 0, 0],
    hipL: [-0.3, 0, 0.35], knL: [1.8, 0, 0], hipR: [0.1, 0, -0.25], knR: [1.5, 0, 0],
  }),
  halfBottom: pose(B, {
    hips: [-1.42, 0.35, 0.15], shL: [-1.7, 0, 0.4], elL: [-1.6, 0, 0], shR: [-1.2, 0, -0.2], elR: [-2.0, 0, 0],
    hipL: [-0.9, 0, 0.35], knL: [1.7, 0, 0], hipR: [-0.5, 0, -0.2], knR: [1.5, 0, 0],
  }),
  mountTop: pose(null, {
    hipsPos: [0, -0.52, 0], spine: [0.15, 0, 0], chest: [0.05, 0, 0], neck: [0.15, 0, 0],
    shL: [-0.9, 0, 0.35], elL: [-1.2, 0, 0], shR: [-0.9, 0, -0.35], elR: [-1.2, 0, 0],
    hipL: [-0.4, 0, 0.62], knL: [1.7, 0, 0], hipR: [-0.4, 0, -0.62], knR: [1.7, 0, 0],
  }),
  mountBottom: pose(null, {
    hipsPos: [0, -0.83, 0], hips: [-1.52, 0, 0], neck: [0.45, 0, 0],
    shL: [-1.8, 0, 0.25], elL: [-1.9, 0, 0], shR: [-1.8, 0, -0.25], elR: [-1.9, 0, 0],
    hipL: [-0.7, 0, 0.25], knL: [1.4, 0, 0], hipR: [-0.7, 0, -0.25], knR: [1.4, 0, 0],
  }),
  sideTop: pose(null, {
    hipsPos: [0, -0.5, 0], spine: [1.15, 0, 0], chest: [0.3, 0, 0], neck: [-0.6, 0, 0],
    shL: [-1.0, 0, -0.5], elL: [-1.0, 0, 0], shR: [-1.2, 0, 0.4], elR: [-1.4, 0, 0],
    hipL: [-0.1, 0, 0.35], knL: [1.75, 0, 0], hipR: [0.25, 0, -0.25], knR: [1.5, 0, 0],
  }),
  sideBottom: pose(null, {
    hipsPos: [0, -0.83, 0], hips: [-1.5, 0.2, 0], neck: [0.4, 0.4, 0],
    shL: [-1.9, 0, -0.2], elL: [-2.2, 0, 0], shR: [-1.6, 0, -0.3], elR: [-1.8, 0, 0],
    hipL: [-0.9, 0, 0.2], knL: [1.6, 0, 0], hipR: [-0.5, 0, -0.2], knR: [1.2, 0, 0],
  }),
  backTop: pose(null, {
    hipsPos: [0, -0.75, 0], hips: [-0.55, 0, 0], spine: [0.4, 0, 0], chest: [0.2, 0, 0], neck: [0.1, 0, 0],
    shL: [-1.5, 0, -0.35], elL: [-1.7, 0, 0], shR: [-1.5, 0, 0.35], elR: [-1.7, 0, 0],
    hipL: [-1.0, 0, 0.6], knL: [1.2, 0, 0], hipR: [-1.0, 0, -0.6], knR: [1.2, 0, 0],
  }),
  backBottom: pose(null, {
    hipsPos: [0, -0.78, 0], hips: [-0.3, 0, 0], spine: [0.15, 0, 0], neck: [0.1, 0, 0],
    shL: [-1.9, 0, -0.3], elL: [-1.9, 0, 0], shR: [-1.9, 0, 0.3], elR: [-1.9, 0, 0],
    hipL: [-1.2, 0, 0.15], knL: [1.0, 0, 0], hipR: [-1.2, 0, -0.15], knR: [1.0, 0, 0],
  }),
  headlockTop: pose(null, {
    hipsPos: [0, -0.32, 0], hips: [0.3, 0, 0], spine: [0.55, 0, 0], chest: [0.2, 0, 0], neck: [-0.5, 0, 0],
    shL: [-1.0, 0, -0.45], elL: [-1.7, 0, 0], shR: [-1.0, 0, 0.45], elR: [-1.7, 0, 0],
    hipL: [-1.3, 0, 0.25], knL: [1.75, 0, 0], hipR: [0.4, 0, -0.2], knR: [1.65, 0, 0],
  }),
  headlockBottom: pose(null, {
    hipsPos: [0, -0.5, 0], hips: [0.2, 0, 0], spine: [1.05, 0, 0], chest: [0.25, 0, 0], neck: [-0.2, 0, 0],
    shL: [-1.1, 0, 0.2], elL: [-1.2, 0, 0], shR: [-1.1, 0, -0.2], elR: [-1.2, 0, 0],
    hipL: [-0.25, 0, 0.15], knL: [1.75, 0, 0], hipR: [-0.25, 0, -0.15], knR: [1.75, 0, 0],
  }),
  legsTop: pose(null, {
    hipsPos: [0, -0.78, 0], hips: [-0.45, 0, 0], spine: [0.2, 0, 0], neck: [0.2, 0, 0],
    shL: [0.5, 0, 0.4], elL: [-0.3, 0, 0], shR: [0.5, 0, -0.4], elR: [-0.3, 0, 0],
    hipL: [-0.9, 0, 0.4], knL: [1.7, 0, 0], hipR: [-1.15, 0, -0.05], knR: [0.05, 0, 0],
  }),
  legsBottom: pose(null, {
    hipsPos: [0, -0.8, 0], hips: [-1.35, 0.3, 0], neck: [0.5, 0, 0],
    shL: [-1.2, 0, -0.4], elL: [-2.0, 0, 0], shR: [-1.2, 0, 0.4], elR: [-2.0, 0, 0],
    hipL: [-1.3, 0, 0.6], knL: [1.2, 0, 0], hipR: [-0.9, 0, -0.2], knR: [1.5, 0, 0],
  }),
  // top fighter fallen back for an armbar, legs across the chest
  armbarTop: pose(null, {
    hipsPos: [0, -0.82, 0], hips: [-1.45, 0, 0], neck: [0.5, 0, 0],
    shL: [-1.3, 0, -0.3], elL: [-1.3, 0, 0], shR: [-1.3, 0, 0.3], elR: [-1.3, 0, 0],
    hipL: [-0.75, 0, 0.25], knL: [0.35, 0, 0], hipR: [-0.75, 0, -0.25], knR: [0.35, 0, 0],
  }),
});
POSES.armbarBottom = pose(POSES.mountBottom, { shL: [-1.6, 0, 0.5], elL: [-0.05, 0, 0], shR: [-1.6, 0, -0.4], elR: [-1.2, 0, 0], hipL: [-0.2, 0, 0.2], knL: [0.4, 0, 0] });

/** Base poses for each ground position: [top, bottom]. */
export const GROUND_POSES = {
  guard: ["top", "bottom"], half: ["halfTop", "halfBottom"], side: ["sideTop", "sideBottom"], mount: ["mountTop", "mountBottom"],
  back: ["backTop", "backBottom"], headlock: ["headlockTop", "headlockBottom"], legs: ["legsTop", "legsBottom"], armbar: ["armbarTop", "armbarBottom"],
};

// ---------------------------------------------------------------- submissions
// Each hold has the attacker's grip and squeeze and the defender's reaction; the two
// "hold" poses stay as the bases until the next event, so a tap happens inside the hold.
function holdPair(name, att, attSq, def, defSq) {
  POSES[name + "Att"] = att;
  POSES[name + "Def"] = def;
  return {
    att: [[att, 0.3, 8], [attSq, 0.35, 6], [att, 0.25, 8], [attSq, 0.45, 6]],
    def: [[def, 0.3, 9], [defSq, 0.3, 9], [def, 0.3, 9], [defSq, 0.35, 9]],
    attHold: name + "Att", defHold: name + "Def",
  };
}
const P_ = (name, o) => pose(POSES[name], o);
const SUBS = {
  rnc: (() => {
    const att = P_("backTop", { shR: [-1.5, 0, 0.75], elR: [-2.2, 0, 0], shL: [-1.7, 0, -0.45], elL: [-2.4, 0, 0], neck: [0.3, -0.4, 0] });
    const def = P_("backBottom", { shL: [-2.4, 0, -0.6], elL: [-1.6, 0, 0], shR: [-2.4, 0, 0.6], elR: [-1.6, 0, 0], neck: [-0.4, 0, 0] });
    return { layout: "back", ...holdPair("rnc", att, nudge(att, { hips: [-0.2, 0, 0], spine: [-0.2, 0, 0] }), def, nudge(def, { neck: [-0.2, 0, 0], hipL: [0.5, 0, 0], knL: [-0.6, 0, 0] })) };
  })(),
  armTriangle: (() => {
    const att = P_("sideTop", { spine: [1.35, 0, 0], neck: [0.4, 0, 0], shL: [-1.3, 0, -0.7], elL: [-2.1, 0, 0], shR: [-1.3, 0, 0.7], elR: [-2.1, 0, 0] });
    const def = P_("sideBottom", { shL: [-2.9, 0, -0.6], elL: [-0.4, 0, 0], shR: [-1.5, 0, -0.3], elR: [-1.2, 0, 0], neck: [0.3, 0.6, 0] });
    return { layout: "side", ...holdPair("armTri", att, nudge(att, { hipsPos: [0, -0.05, 0], hipL: [-0.4, 0, 0], hipR: [-0.3, 0, 0] }), def, nudge(def, { hipL: [0.4, 0, 0], neck: [-0.2, 0, 0] })) };
  })(),
  kimuraTop: (() => {
    const att = P_("sideTop", { spine: [0.8, 0, 0], shL: [-1.0, 0, -0.2], elL: [-1.6, 0, 0], shR: [-1.0, 0, 0.4], elR: [-1.6, 0, 0] });
    const def = P_("sideBottom", { shL: [-0.6, 0, 1.3], elL: [-1.8, 0, 0] });
    return { layout: "side", ...holdPair("kimT", att, nudge(att, { chest: [0, 0.4, 0], spine: [-0.2, 0, 0] }), def, pose(def, { shL: [0.3, 0, 1.4], hips: [-1.5, -0.3, 0] })) };
  })(),
  americana: (() => {
    const att = P_("sideTop", { spine: [1.1, 0, 0], shL: [-1.4, 0, -0.2], elL: [-0.6, 0, 0], shR: [-1.4, 0, 0.3], elR: [-0.8, 0, 0] });
    const def = P_("sideBottom", { shL: [-0.2, 0, 1.5], elL: [-1.6, 0, 0] });
    return { layout: "side", ...holdPair("amer", att, nudge(att, { spine: [0.15, 0, 0], chest: [0, 0.25, 0] }), def, pose(def, { shL: [0, 0, 1.75] })) };
  })(),
  darce: (() => {
    const att = P_("headlockTop", { hips: [0.3, 0.5, 0], spine: [1.0, 0, 0], shL: [-1.2, 0, -0.6], elL: [-2.0, 0, 0], shR: [-1.2, 0, 0.6], elR: [-2.0, 0, 0] });
    const def = P_("headlockBottom", { shL: [-2.6, 0, -0.4], elL: [-0.8, 0, 0], neck: [0.2, 0.4, 0] });
    return { layout: "headlock", ...holdPair("darce", att, nudge(att, { chest: [-0.2, 0.4, 0], hipsPos: [0, -0.1, 0] }), def, nudge(def, { spine: [0.2, 0, 0] })) };
  })(),
  guillotineTop: (() => {
    const att = P_("headlockTop", { hipsPos: [0, -0.15, 0], spine: [0.5, 0, 0], shL: [-1.0, 0, -0.6], elL: [-2.1, 0, 0], shR: [-1.0, 0, 0.6], elR: [-2.1, 0, 0] });
    const def = P_("headlockBottom", { spine: [0.8, 0, 0], neck: [-0.2, 0, 0], shL: [-1.6, 0, -0.4], elL: [-1.6, 0, 0], shR: [-1.6, 0, 0.4], elR: [-1.6, 0, 0] });
    return { layout: "headlock", ...holdPair("guilT", att, nudge(att, { hips: [-0.35, 0, 0], spine: [-0.3, 0, 0], hipsPos: [0, 0.08, 0] }), def, nudge(def, { spine: [-0.2, 0, 0], hipsPos: [0, 0.08, 0] })) };
  })(),
  armbarTop: (() => {
    const att = POSES.armbarTop;
    const def = POSES.armbarBottom;
    return { layout: "armbar", ...holdPair("abT", att, nudge(att, { hips: [-0.15, 0, 0], hipsPos: [0, 0.05, 0], neck: [0.2, 0, 0] }), def, nudge(def, { hips: [0, 0.2, 0], knR: [0.5, 0, 0] })) };
  })(),
  triangle: (() => {
    const att = P_("bottom", { hips: [-1.35, 0, 0], hipL: [-1.85, 0, 0.35], knL: [1.75, 0, 0], hipR: [-1.6, 0, -0.3], knR: [1.3, 0, 0], shL: [-1.9, 0, -0.1], elL: [-1.2, 0, 0], shR: [-1.9, 0, 0.1], elR: [-1.2, 0, 0] });
    const def = P_("top", { hipsPos: [0, -0.42, 0], spine: [0.95, 0, 0], chest: [0.3, 0, 0], neck: [0.5, 0, 0], shL: [-0.6, 0, 0.3], elL: [-1.2, 0, 0], shR: [-1.3, 0, -0.4], elR: [-0.2, 0, 0] });
    return { layout: "guard", ...holdPair("tri", att, nudge(att, { hipL: [-0.2, 0, 0], knL: [0.15, 0, 0], hips: [0.15, 0, 0] }), def, nudge(def, { spine: [-0.25, 0, 0], neck: [-0.2, 0, 0] })) };
  })(),
  armbarBottom: (() => {
    const att = P_("bottom", { hips: [-1.4, 0.6, 0], hipL: [-2.2, 0, 0.35], knL: [0.6, 0, 0], hipR: [-1.3, 0, -0.5], knR: [1.6, 0, 0], shL: [-1.6, 0, 0.2], elL: [-0.8, 0, 0], shR: [-1.6, 0, -0.2], elR: [-0.8, 0, 0] });
    const def = P_("top", { spine: [0.5, 0, 0], neck: [0.3, 0, 0], shR: [-1.4, 0, 0], elR: [0, 0, 0] });
    return { layout: "guard", ...holdPair("abB", att, nudge(att, { hips: [-0.15, 0, 0], hipsPos: [0, 0.08, 0] }), def, nudge(def, { spine: [0.4, 0, 0] })) };
  })(),
  guillotineBottom: (() => {
    const att = P_("bottom", { hips: [-1.2, 0, 0], spine: [0.3, 0, 0], neck: [0.4, 0, 0], shL: [-1.4, 0, -0.6], elL: [-2.1, 0, 0], shR: [-1.4, 0, 0.6], elR: [-2.1, 0, 0], hipL: [-1.2, 0, 0.5], knL: [1.5, 0, 0], hipR: [-1.2, 0, -0.5], knR: [1.5, 0, 0] });
    const def = P_("top", { hipsPos: [0, -0.48, 0], spine: [1.1, 0, 0], chest: [0.35, 0, 0], neck: [0.5, 0, 0], shL: [-1.2, 0, 0.1], elL: [-1.6, 0, 0], shR: [-1.2, 0, -0.1], elR: [-1.6, 0, 0] });
    return { layout: "guard", ...holdPair("guilB", att, nudge(att, { hips: [-0.25, 0, 0], spine: [-0.4, 0, 0] }), def, nudge(def, { spine: [0.15, 0, 0] })) };
  })(),
  kimuraBottom: (() => {
    const att = P_("bottom", { hips: [-0.8, 0.5, 0], spine: [0.3, 0, 0], shL: [-1.1, 0, -0.3], elL: [-1.7, 0, 0], shR: [-1.3, 0, 0.4], elR: [-1.6, 0, 0] });
    const def = P_("top", { spine: [0.8, 0, 0], hips: [0, 0, 0.2], shR: [0.6, 0, -0.9], elR: [-1.6, 0, 0] });
    return { layout: "guard", ...holdPair("kimB", att, nudge(att, { hips: [-0.4, 0.3, 0] }), def, pose(def, { shR: [0.9, 0, -1.1] })) };
  })(),
  omoplata: (() => {
    const att = P_("bottom", { hips: [-0.6, 1.0, 0], hipL: [-1.5, 0, 0.8], knL: [1.7, 0, 0], hipR: [-1.0, 0, -0.2], knR: [1.6, 0, 0], shL: [-1.0, 0, -0.4], elL: [-0.6, 0, 0], shR: [-1.0, 0, 0.3], elR: [-0.6, 0, 0] });
    const def = P_("top", { hipsPos: [0, -0.55, 0], spine: [1.45, 0, 0], chest: [0.2, 0, 0], neck: [0.1, 0, 0], shR: [0.9, 0, -0.5], elR: [-1.2, 0, 0], shL: [-1.4, 0, 0.4], elL: [-0.2, 0, 0] });
    return { layout: "guard", ...holdPair("omo", att, nudge(att, { spine: [0.5, 0, 0] }), def, pose(def, { shR: [1.3, 0, -0.6] })) };
  })(),
  heelHook: (() => {
    const att = POSES.legsBottom;
    const def = P_("legsTop", { hips: [-0.7, 0, 0], shL: [-0.3, 0, 0.9], elL: [-0.4, 0, 0] });
    return { layout: "legs", ...holdPair("hh", att, nudge(att, { hips: [0, -0.6, 0] }), def, nudge(def, { hips: [-0.3, 0, 0], shR: [-1.8, 0, 0] })) };
  })(),
};

/** The animation for a submission attempt: { layout, att, def, attHold, defHold }. */
export function submission(name, fromBottom) {
  const m = String(name || "").toLowerCase();
  if (m.includes("rear-naked")) return SUBS.rnc;
  if (m.includes("arm-triangle")) return SUBS.armTriangle;
  if (m.includes("d'arce") || m.includes("darce")) return SUBS.darce;
  if (m.includes("americana")) return SUBS.americana;
  if (m.includes("heel hook")) return SUBS.heelHook;
  if (m.includes("omoplata")) return SUBS.omoplata;
  if (m.includes("triangle")) return SUBS.triangle;
  if (m.includes("armbar")) return fromBottom ? SUBS.armbarBottom : SUBS.armbarTop;
  if (m.includes("guillotine")) return fromBottom ? SUBS.guillotineBottom : SUBS.guillotineTop;
  if (m.includes("kimura")) return fromBottom ? SUBS.kimuraBottom : SUBS.kimuraTop;
  return fromBottom ? SUBS.triangle : SUBS.rnc;
}

// ---------------------------------------------------------------- takedowns
// { att, def, mat (seconds until they hit the canvas), fwd, dFwd, big }
const FALL_BACK = pose(null, { hipsPos: [0, -0.45, -0.1], hips: [-0.9, 0, 0], neck: [0.5, 0, 0], shL: [-1.6, 0, 0.7], elL: [-0.4, 0, 0], shR: [-1.6, 0, -0.7], elR: [-0.4, 0, 0], hipL: [-0.9, 0, 0.1], knL: [0.6, 0, 0], hipR: [-0.7, 0, -0.1], knR: [0.5, 0, 0] });
const LEGS_GRABBED = pose(S, {
  hips: [0, 0, 0], hipsPos: [0, 0.03, 0], spine: [-0.3, 0, 0], chest: [-0.2, 0, 0], neck: [0.35, 0, 0],
  shL: [-1.4, 0, 0.7], elL: [-0.5, 0, 0], shR: [-1.4, 0, -0.7], elR: [-0.5, 0, 0],
  hipL: [0, 0, 0.04], knL: [0.05, 0, 0], hipR: [0, 0, -0.04], knR: [0.05, 0, 0],
});
const DRIVE = pose(SHOOT, {
  hipsPos: [0, -0.3, 0.2], spine: [0.85, 0, 0], neck: [-0.6, 0, 0],
  shL: [-0.9, 0, -0.35], elL: [-1.2, 0, 0], shR: [-0.9, 0, 0.35], elR: [-1.2, 0, 0],
  hipL: [-1.0, 0, 0.1], knL: [1.3, 0, 0], hipR: [0.7, 0, -0.1], knR: [0.4, 0, 0],
});
const BODY_LOCK = pose(CLINCH, { hips: [0, 0, 0], shL: [-1.25, 0, -0.65], elL: [-1.5, 0, 0], shR: [-1.25, 0, 0.65], elR: [-1.5, 0, 0], spine: [0.25, 0, 0], neck: [0.1, 0.6, 0] });
const LEAN_BACK = pose(CLINCH, { hips: [0, 0, 0], spine: [-0.15, 0, 0], neck: [0.3, -0.5, 0], shL: [-1.5, 0, 0.5], elL: [-1.3, 0, 0], shR: [-1.5, 0, -0.5], elR: [-1.3, 0, 0] });
const LIFTED = (y, z, x, o = {}) => pose(null, {
  hipsPos: [0, y, z], hips: [x, 0, 0], neck: [0.3, 0, 0], shL: [-1.2, 0, 0.6], elL: [-0.6, 0, 0], shR: [-1.2, 0, -0.6], elR: [-0.6, 0, 0],
  hipL: [-0.5, 0, 0.15], knL: [0.9, 0, 0], hipR: [-0.2, 0, -0.15], knR: [0.5, 0, 0], ...o,
});
const TD = {
  "double-leg": {
    att: [[pose(S, { hipsPos: [0, -0.22, 0] }), 0.1, 18], [SHOOT, 0.3, 14], [DRIVE, 0.4, 10]],
    def: [[S, 0.32, 9], [LEGS_GRABBED, 0.3, 12], [FALL_BACK, 0.3, 9]], mat: 0.85, fwd: 0.6, dFwd: 0.1,
  },
  "reactive takedown": {
    att: [[SHOOT, 0.25, 18], [DRIVE, 0.35, 12]],
    def: [[pose(S, { hips: [0, 0.4, 0], hipR: [-0.6, 0.6, -0.6], knR: [1.0, 0, 0] }), 0.22, 14], [LEGS_GRABBED, 0.25, 12], [FALL_BACK, 0.3, 9]], mat: 0.7, fwd: 0.65, dFwd: 0.05,
  },
  "single-leg": {
    att: [[SHOOT, 0.3, 14], [pose(S, { hips: [0, 0.3, 0], hipsPos: [0, -0.2, 0], spine: [0.55, 0, 0], neck: [-0.3, 0, 0], shL: [-0.9, 0, -0.5], elL: [-1.4, 0, 0], shR: [-0.9, 0, 0.2], elR: [-1.4, 0, 0] }), 0.7, 9]],
    def: [[S, 0.28, 9],
      [pose(S, { hips: [0, 0, 0], hipL: [-1.1, 0, 0.1], knL: [0.35, 0, 0], hipR: [0.05, 0, -0.05], knR: [0.2, 0, 0], hipsPos: [0, 0.06, 0], spine: [-0.15, 0, 0], shL: [-0.4, 0, 1.2], shR: [-0.4, 0, -1.2] }), 0.18, 14],
      [pose(S, { hips: [0, 0, 0], hipL: [-1.1, 0, 0.1], knL: [0.35, 0, 0], hipR: [0.05, 0, -0.05], knR: [0.55, 0, 0], hipsPos: [0, -0.04, 0], spine: [-0.1, 0, 0], shL: [-0.6, 0, 1.0], shR: [-0.6, 0, -1.0] }), 0.16, 14],
      [pose(S, { hips: [0, 0, 0], hipL: [-1.1, 0, 0.1], knL: [0.35, 0, 0], hipR: [0.05, 0, -0.05], knR: [0.2, 0, 0], hipsPos: [0, 0.08, 0], spine: [-0.2, 0, 0], shL: [-0.4, 0, 1.3], shR: [-0.4, 0, -1.3] }), 0.16, 14],
      [FALL_BACK, 0.3, 9]], mat: 1.1, fwd: 0.55, dFwd: 0.1,
  },
  "body lock": {
    att: [[CLINCH, 0.25, 12], [BODY_LOCK, 0.4, 10], [pose(BODY_LOCK, { hipR: [-0.5, 0.3, 0.45], knR: [0.1, 0, 0], spine: [0.5, 0, 0] }), 0.3, 12]],
    def: [[CLINCH, 0.3, 12], [LEAN_BACK, 0.35, 10], [FALL_BACK, 0.3, 9]], mat: 0.95, fwd: 0.35, dFwd: 0.3,
  },
  trip: {
    att: [[CLINCH, 0.3, 12], [pose(BODY_LOCK, { hipR: [-0.6, 0.4, 0.5], knR: [0.1, 0, 0], spine: [0.4, 0.3, 0] }), 0.35, 12]],
    def: [[CLINCH, 0.3, 12], [pose(LEAN_BACK, { hipL: [-0.6, 0, 0.3], knL: [0.1, 0, 0] }), 0.25, 12], [FALL_BACK, 0.3, 9]], mat: 0.8, fwd: 0.35, dFwd: 0.3,
  },
  "ankle pick": {
    att: [[pose(S, { hipsPos: [0, -0.3, 0], spine: [0.7, 0, 0], neck: [-0.5, 0, 0], shL: [-0.7, 0, 0.1], elL: [-0.2, 0, 0], shR: [-1.5, 0, -0.2], elR: [-0.6, 0, 0], knL: [1.0, 0, 0], knR: [0.9, 0, 0] }), 0.35, 14],
      [pose(S, { hipsPos: [0, -0.25, 0], spine: [0.35, 0, 0], shL: [0.3, 0, 0.2], elL: [-0.3, 0, 0], shR: [-1.6, 0, -0.1], elR: [-0.1, 0, 0] }), 0.3, 12]],
    def: [[S, 0.3, 9], [pose(S, { hips: [0, 0, 0], hipL: [-0.9, 0, 0], knL: [0.1, 0, 0], spine: [-0.4, 0, 0], neck: [0.3, 0, 0], shL: [-1.2, 0, 0.8], shR: [-1.2, 0, -0.8] }), 0.22, 14], [FALL_BACK, 0.3, 9]], mat: 0.8, fwd: 0.45, dFwd: 0.15,
  },
  suplex: {
    att: [[CLINCH, 0.25, 12], [pose(BODY_LOCK, { hipsPos: [0, -0.18, 0], knL: [0.8, 0, 0], knR: [0.8, 0, 0] }), 0.25, 12],
      [pose(BODY_LOCK, { hipsPos: [0, -0.05, 0], hips: [-0.5, 0, 0], spine: [-0.35, 0, 0], neck: [-0.4, 0, 0], shL: [-2.3, 0, -0.4], shR: [-2.3, 0, 0.4] }), 0.25, 12],
      [pose(BODY_LOCK, { hipsPos: [0, -0.4, -0.1], hips: [-1.2, 0, 0], spine: [-0.4, 0, 0], neck: [-0.5, 0, 0], shL: [-2.8, 0, -0.3], shR: [-2.8, 0, 0.3] }), 0.25, 12]],
    def: [[CLINCH, 0.28, 12], [LIFTED(0.12, 0.1, 0.1), 0.22, 12], [LIFTED(0.55, 0.45, 0.9), 0.22, 12], [LIFTED(0.2, 0.95, 2.2, { neck: [0.6, 0, 0] }), 0.22, 12]],
    mat: 0.95, fwd: 0.35, dFwd: 0.35, big: true,
  },
  slam: {
    att: [[pose(SHOOT, { hipsPos: [0, -0.3, 0.1] }), 0.25, 14],
      [pose(S, { hips: [0, 0, 0], hipsPos: [0, 0, 0], spine: [-0.1, 0, 0], neck: [-0.2, 0, 0], shL: [-2.4, 0, 0.3], elL: [-1.0, 0, 0], shR: [-2.4, 0, -0.3], elR: [-1.0, 0, 0], hipL: [0, 0, 0.1], knL: [0.1, 0, 0], hipR: [0, 0, -0.1], knR: [0.1, 0, 0] }), 0.4, 8],
      [pose(S, { hips: [0, 0, 0], hipsPos: [0, -0.35, 0.1], spine: [0.95, 0, 0], shL: [-1.4, 0, 0.2], elL: [-0.4, 0, 0], shR: [-1.4, 0, -0.2], elR: [-0.4, 0, 0], knL: [1.1, 0, 0], knR: [1.1, 0, 0] }), 0.25, 18]],
    def: [[LEGS_GRABBED, 0.25, 12], [LIFTED(0.6, 0.35, -1.35, { hipL: [-0.7, 0, 0.2], knL: [1.2, 0, 0], hipR: [-0.3, 0, -0.2], knR: [0.6, 0, 0], shL: [-2.0, 0, 0.8], shR: [-2.0, 0, -0.8] }), 0.4, 7],
      [LIFTED(-0.6, 0.35, -1.5), 0.25, 22]],
    mat: 0.85, fwd: 0.55, dFwd: 0.15, big: true,
  },
  "judo throw": {
    att: [[pose(CLINCH, { hips: [0, -1.6, 0], neck: [0, 1.0, 0] }), 0.2, 14],
      [pose(S, { hips: [0, -2.9, 0], hipsPos: [0, -0.18, 0], spine: [0.35, 0, 0], neck: [0, 0.9, 0], shL: [-1.4, 0, 0.3], elL: [-0.8, 0, 0], shR: [-1.0, 0, -0.5], elR: [-1.4, 0, 0], knL: [0.6, 0, 0], knR: [0.6, 0, 0] }), 0.25, 14],
      [pose(S, { hips: [0, -3.0, 0], hipsPos: [0, -0.25, 0], spine: [1.1, 0, 0], chest: [0.3, 0, 0], shL: [-0.6, 0, 0.6], shR: [-0.8, 0, -0.6], knL: [0.7, 0, 0], knR: [0.4, 0, 0] }), 0.3, 12]],
    def: [[CLINCH, 0.3, 12], [LIFTED(0.35, 0.35, 0.4, { hips: [0.4, 0, 1.2] }), 0.25, 12], [LIFTED(0.1, 0.7, 0.2, { hips: [0.2, 0, 2.6] }), 0.22, 12]],
    mat: 0.85, fwd: 0.3, dFwd: 0.35, big: true,
  },
};
TD["shoot"] = TD["double-leg"];

/** The animation for a takedown, by technique (older fights only have the log text). */
export function takedown(tech, text = "") {
  const t = String(tech || "").toLowerCase();
  if (TD[t]) return TD[t];
  const s = String(text).toLowerCase();
  for (const k of Object.keys(TD)) if (s.includes(k.split(" ")[0])) return TD[k];
  if (s.includes("slams")) return TD.slam;
  return TD["double-leg"];
}

/** Small adjustments while the fighters jockey for position on the mat. */
export function groundShift(baseName) {
  const b = POSES[baseName] || POSES.top;
  return [[nudge(b, { spine: [0.15, 0.2, 0], shL: [-0.25, 0, 0.2], shR: [0.2, 0, -0.1], hipL: [0.1, 0, 0.1] }), 0.45, 6]];
}

export const SEQUENCES = {
  slip: [[SLIP, 0.25, 22]],
  shoot: [[pose(S, { hipsPos: [0, -0.22, 0] }), 0.1, 18], [SHOOT, 0.45, 12]],
  sprawl: [[SPRAWL, 0.55, 14]],
  touch: [[TOUCH, 0.5, 8]],
  // waving off a glove touch and shaking the head
  refuse: [[pose(S, { shR: [-1.1, 0, -0.5], elR: [-0.4, 0, 0], neck: [0.05, 0.35, 0], chest: [0, -0.15, 0] }), 0.3, 12],
    [pose(S, { shR: [-1.0, 0, 0.3], elR: [-0.3, 0, 0], neck: [0.05, -0.35, 0], chest: [0, 0.15, 0] }), 0.25, 12],
    [pose(S, { neck: [0.1, 0.3, 0] }), 0.25, 10], [pose(S, { neck: [0.1, -0.3, 0] }), 0.25, 10]],
  block: [[BLOCK_TOP, 0.4, 14]],
  getUp: [[POSES.sitting, 0.5, 6], [pose(S, { hipsPos: [0, -0.35, 0], spine: [0.6, 0, 0], knL: [1.2, 0, 0], knR: [1.2, 0, 0] }), 0.4, 6]],
  rocked: [[pose(S, { hipsPos: [0, -0.16, -0.05], knL: [0.85, 0, 0], knR: [0.75, 0, 0], spine: [0.1, 0, 0.25], neck: [0.25, 0.3, 0.3], shL: [-0.3, 0, 0.5], shR: [-0.3, 0, -0.5] }), 0.55, 7],
    [pose(S, { hipsPos: [0, -0.12, 0], spine: [0.1, 0, -0.2], neck: [0.3, -0.2, -0.2] }), 0.45, 6]],
  celebrate: [[POSES.victory, 0.35, 8], [pose(POSES.victory, { hipsPos: [0, 0.18, 0], knL: [0.6, 0, 0], knR: [0.6, 0, 0] }), 0.22, 10], [POSES.victory, 0.35, 8],
    [pose(POSES.victory, { hipsPos: [0, 0.18, 0], knL: [0.6, 0, 0], knR: [0.6, 0, 0] }), 0.22, 10]],

  waveOff: [[pose(POSES.ref, { shL: [-1.55, 0, 1.0], elL: [-0.1, 0, 0], shR: [-1.55, 0, -1.0], elR: [-0.1, 0, 0] }), 0.3, 10],
    [pose(POSES.ref, { shL: [-1.55, 0, 0.1], elL: [-0.1, 0, 0], shR: [-1.55, 0, -0.1], elR: [-0.1, 0, 0] }), 0.3, 10],
    [pose(POSES.ref, { shL: [-1.55, 0, 1.0], elL: [-0.1, 0, 0], shR: [-1.55, 0, -1.0], elR: [-0.1, 0, 0] }), 0.4, 10]],
  tap: (baseName) => {
    const base = POSES[baseName] || POSES.bottom;
    return [[TAP_A(base), 0.16, 22], [TAP_B(base), 0.16, 22], [TAP_A(base), 0.16, 22], [TAP_B(base), 0.16, 22], [TAP_A(base), 0.16, 22], [TAP_B(base), 0.2, 22]];
  },
};

// ------------------------------------------------------------------ model

const shared = {};
function geo(key, make) {
  return shared[key] || (shared[key] = make());
}

let envMap = null;
/** The stage hands over a soft studio reflection map once the renderer exists. */
export function setFighterEnv(tex) {
  envMap = tex;
}

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.02, envMap, envMapIntensity: 0.35, ...opts });
}

/** A private copy of a shared geometry with a white vertex color per vertex (bruises are painted on top). */
function withColors(g) {
  const c = g.clone();
  c.setAttribute("color", new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 3).fill(1), 3));
  return c;
}

// Bruises: [x, y, z, radius, how hurt before it shows, color]. Face spots are in the head's space,
// body spots in the body's (bind pose) space, scaled by the fighter's width where it matters.
const PURPLE = [0.48, 0.24, 0.36], RED = [0.86, 0.38, 0.36], DARK = [0.36, 0.2, 0.32];
const FACE_BRUISES = [
  [0.02, 0.07, 0.09, 0.032, 0.22, RED], // forehead
  [-0.034, 0.022, 0.09, 0.028, 0.28, DARK], // black eye
  [0, 0.005, 0.11, 0.018, 0.33, RED], // nose
  [-0.052, -0.005, 0.08, 0.032, 0.4, PURPLE], // cheekbone
  [0.034, 0.022, 0.09, 0.028, 0.55, DARK], // the other eye
  [0.045, -0.055, 0.07, 0.034, 0.6, PURPLE], // jaw
  [0.052, -0.005, 0.08, 0.032, 0.7, PURPLE], // other cheek
  [0, -0.045, 0.1, 0.02, 0.5, RED], // split lip
];
const BODY_BRUISES = (w, cy) => [
  [0.12 * w, cy + 0.06, 0.06, 0.08, 0.15, RED, "body"], // ribs, left side
  [-0.11 * w, cy - 0.06, 0.07, 0.07, 0.35, PURPLE, "body"], // liver
  [-0.12 * w, cy + 0.06, 0.06, 0.08, 0.5, RED, "body"], // ribs, right side
  [0.14 * w, 0.68, 0.02, 0.09, 0.12, RED, "leg"], // outside of the lead thigh
  [0.1 * w, 0.42, -0.02, 0.07, 0.4, PURPLE, "leg"], // lead calf
  [0.12 * w, 0.72, 0.05, 0.07, 0.6, PURPLE, "leg"], // deep thigh bruise
  [-0.14 * w, 0.68, 0.02, 0.08, 0.55, RED, "leg"], // the other thigh
];

function paint(geo, spots, amount, base) {
  const P = geo.attributes.position.array, C = geo.attributes.color;
  const col = C.array;
  const start = [1, 1, 1];
  for (let v = 0, n = P.length / 3; v < n; v++) {
    const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    if (base) base(x, y, z, start);
    let r = start[0], g = start[1], b = start[2];
    for (const [sx, sy, sz, rad, from, tint, region] of spots) {
      const a = amount(region);
      if (a <= from) continue;
      const d2 = ((x - sx) ** 2 + (y - sy) ** 2 + (z - sz) ** 2) / (rad * rad);
      if (d2 >= 1) continue;
      const k = Math.min(0.85, ((a - from) / (1 - from)) * 2.2) * (1 - d2) * (1 - d2);
      r += (tint[0] - r) * k;
      g += (tint[1] - g) * k;
      b += (tint[2] - b) * k;
    }
    col[v * 3] = r;
    col[v * 3 + 1] = g;
    col[v * 3 + 2] = b;
  }
  C.needsUpdate = true;
}

/** Skin: a soft sheen at grazing angles and a thin clearcoat for sweat. */
function skinMat(color) {
  return new THREE.MeshPhysicalMaterial({
    color, roughness: 0.5, metalness: 0, envMap, envMapIntensity: 0.4,
    sheen: 0.5, sheenRoughness: 0.6, sheenColor: new THREE.Color("#ff9c84"), clearcoat: 0.12, clearcoatRoughness: 0.55,
  });
}

function mesh(g, m, parent, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}

/**
 * Build a fighter. opts: { look, weightClass (0-7), style, glove: corner color, ref: true for the referee }.
 * The returned object animates itself through update(dt).
 */
export class Fighter3D {
  constructor(opts = {}) {
    const look = typeof opts.look === "string" ? parseLook(opts.look) : opts.look || lookFromName(opts.name || "x");
    this.look = look;
    const wc = opts.weightClass ?? 3;
    const styleW = { Wrestler: 0.05, "Jiu-Jitsu": 0.01, Striker: -0.03 }[opts.style] || 0;
    // referees and people around town wear clothes instead of fight shorts and gloves
    const civ = opts.ref || opts.casual;
    const width = opts.ref ? 0.98 : 0.9 + wc * 0.035 + styleW;
    const height = opts.ref ? 1.0 : 0.95 + wc * 0.016;
    this.width = width;

    const skin = skinMat(LOOK_OPTIONS.skin[look.skin]);
    this.skinM = skin;
    this.skinBase = skin.color.clone();
    const hairM = mat(LOOK_OPTIONS.hairColor[look.hairColor], { roughness: 0.9 });
    const shortsM = mat(civ ? opts.pants || "#3c3f46" : LOOK_OPTIONS.shorts[look.shorts], { roughness: 0.75 });
    const gloveM = mat("#161616", { roughness: 0.42 });
    const bandM = mat(opts.glove || "#c8102e", { roughness: 0.5 });
    const shirtM = mat(opts.shirt || "#17181c", { roughness: 0.8 });
    const dark = mat("#120d0b", { roughness: 0.4 });

    const root = new THREE.Group();
    this.root = root;

    // the skeleton
    const bone = (parent, x, y, z) => {
      const b = new THREE.Bone();
      b.position.set(x, y, z);
      parent.add(b);
      return b;
    };
    const hips = bone(root, 0, 0.95, 0);
    this.hipsHome = 0.95;
    const spine = bone(hips, 0, 0.08, 0);
    const chest = bone(spine, 0, 0.18, 0);
    const neck = bone(chest, 0, 0.29, 0);
    const head = bone(neck, 0, 0.12, 0.01);
    const arms = {}, legs = {};
    for (const side of ["L", "R"]) {
      const sx = side === "L" ? 1 : -1;
      const sh = bone(chest, sx * 0.19 * width, 0.2, -0.01);
      arms["sh" + side] = sh;
      arms["el" + side] = bone(sh, 0, -0.27, 0);
      arms["hand" + side] = arms["el" + side];
      const hp = bone(hips, sx * 0.085 * width, -0.06, 0);
      legs["hip" + side] = hp;
      legs["kn" + side] = bone(hp, 0, -0.42, 0);
    }
    this.j = { hips, spine, chest, neck, ...arms, ...legs };

    // one smooth skin over the whole skeleton (built in a relaxed A-pose, then bound)
    const order = ["hips", "spine", "chest", "neck", "head", "shL", "elL", "shR", "elR", "hipL", "knL", "hipR", "knR"];
    const bones = { ...this.j, head };
    for (const [k, r] of Object.entries(BIND_POSE)) bones[k].rotation.set(...r);
    root.updateMatrixWorld(true);
    const kind = opts.ref ? "ref" : opts.casual ? "casual" : "fighter";
    const body = buildBody(bones, order, width, kind, { body: look.body, abs: look.abs, step: opts.detail === "low" ? 0.022 : undefined });
    const skeleton = new THREE.Skeleton(order.map((n) => bones[n]));
    const skinned = (g, m) => {
      const sm = new THREE.SkinnedMesh(g, m);
      sm.castShadow = sm.receiveShadow = true;
      sm.frustumCulled = false;
      root.add(sm);
      sm.bind(skeleton);
      return sm;
    };
    skin.vertexColors = true;
    this.bodyMesh = skinned(withColors(body.skin), skin);
    if (body.shorts) {
      shortsM.side = THREE.DoubleSide;
      skinned(body.shorts, shortsM);
    }
    if (body.shirt) skinned(body.shirt, shirtM);
    if (body.pants) skinned(body.pants, shortsM);
    // tattoos are cut from the skin while the skeleton is still in the bind pose
    const wp = (b, y = 0) => b.localToWorld(new THREE.Vector3(0, y, 0));
    this.tattoos = addTattoos({
      root, skeleton, skinGeo: body.skin, look, text: opts.tattooText, envMap,
      cacheKey: [width.toFixed(3), kind, look.body, look.abs, opts.detail || ""].join("|"),
      frame: {
        width, chestY: wp(chest).y,
        axes: { tArmL: [wp(arms.shL), wp(arms.elL, -0.24)], tArmR: [wp(arms.shR), wp(arms.elR, -0.24)], tLegs: [wp(legs.hipL), wp(legs.knL, -0.4)] },
      },
    });
    for (const k of Object.keys(BIND_POSE)) bones[k].rotation.set(0, 0, 0);
    root.scale.setScalar(height);

    // the face is its own finer mesh on the head bone
    const face = new THREE.Mesh(withColors(buildHeadGeo(look.face || 0)), skin);
    this.faceMesh = face;
    this.bruiseBase = { width, chestY: chest.getWorldPosition(new THREE.Vector3()).y };
    face.castShadow = face.receiveShadow = true;
    head.add(face);
    this.head = head;
    this.buildHead(head, skin, hairM, dark, look, opts.ref);

    for (const side of ["L", "R"]) {
      const el = arms["el" + side];
      if (!civ) {
        // open-finger MMA glove: padded knuckles over curled fingers, a wrist strap in the corner's color
        const glove = mesh(geo("glove", () => new THREE.SphereGeometry(0.058, 16, 12)), gloveM, el, 0, -0.27, 0.008);
        glove.scale.set(0.95, 1.12, 1.15);
        const knuckle = mesh(geo("knuckle", () => new THREE.CapsuleGeometry(0.03, 0.05, 4, 10)), gloveM, el, 0, -0.3, 0.035);
        knuckle.rotation.z = Math.PI / 2;
        const band = mesh(geo("band", () => new THREE.CylinderGeometry(0.046, 0.046, 0.05, 14)), bandM, el, 0, -0.205, 0);
        band.scale.z = 1.05;
        const thumb = mesh(geo("thumb", () => withColors(new THREE.CapsuleGeometry(0.014, 0.035, 4, 8))), skin, el, (side === "L" ? -1 : 1) * 0.035, -0.255, 0.035);
        thumb.rotation.x = 0.6;
      }
    }
    for (const side of ["L", "R"]) {
      if (!civ) continue;
      // shoes
      const shoe = new THREE.BoxGeometry(0.085, 0.06, 0.22);
      shoe.translate(0, -0.03, 0.05);
      const f = mesh(shoe, opts.ref ? dark : mat(opts.shoes || "#e8e8e8", { roughness: 0.7 }), legs["kn" + side], 0, -0.43, 0);
      f.scale.x = width;
    }

    this.cur = pose(POSES[opts.ref ? "ref" : opts.casual ? "relaxed" : "stance"]);
    this.base = opts.ref ? "ref" : opts.casual ? "relaxed" : "stance";
    this.queue = null;   // { frames, i, t }
    this.offsets = [];   // fading hit reactions
    this.time = Math.random() * 10;
    this.walk = 0;       // walking phase
    this.speed = 0;
    this.lastPos = new THREE.Vector3();
    if (!civ) this.buildBelt(width);
    this.setDamage(0, 0, 0);
    this.applyPose(this.cur);
  }

  /** The championship belt: worn around the waist, or carried over the shoulder on the walk out. */
  buildBelt(width) {
    const gold = mat("#e8b93a", { roughness: 0.25, metalness: 0.85 });
    const leather = mat("#141414", { roughness: 0.6 });
    const gem = mat("#c8102e", { roughness: 0.2, metalness: 0.3 });
    const plate = (parent, x, y, z, big) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      parent.add(g);
      const p = mesh(geo(big ? "beltPlate" : "beltSide", () => new THREE.CylinderGeometry(big ? 0.085 : 0.045, big ? 0.085 : 0.045, 0.018, big ? 20 : 12)), gold, g);
      p.rotation.x = Math.PI / 2;
      p.scale.set(1, 1, big ? 0.78 : 1);
      if (big) {
        const inner = mesh(geo("beltGem", () => new THREE.CylinderGeometry(0.03, 0.03, 0.022, 14)), gem, g, 0, 0, 0.004);
        inner.rotation.x = Math.PI / 2;
        mesh(geo("beltRim", () => new THREE.TorusGeometry(0.075, 0.008, 6, 24)), gold, g, 0, 0, 0.011).scale.set(1, 0.78, 1);
      }
      return g;
    };
    // around the waist, over the shorts
    const waist = new THREE.Group();
    waist.position.y = 0.035;
    this.j.hips.add(waist);
    const strap = new THREE.CylinderGeometry(0.172 * width, 0.172 * width, 0.075, 24, 1, true);
    mesh(strap, leather, waist).scale.z = 0.76;
    plate(waist, 0, 0, 0.172 * width * 0.76 + 0.006, true);
    for (const sx of [-1, 1]) {
      const side = plate(waist, sx * 0.13 * width, 0, 0.09, false);
      side.rotation.y = sx * 0.85;
    }
    // over the left shoulder and across the chest
    const sash = new THREE.Group();
    sash.position.set(0, 0.1, 0);
    sash.rotation.z = 0.55;
    this.j.chest.add(sash);
    const loop = new THREE.TorusGeometry(0.26, 0.024, 6, 30);
    loop.scale(0.66, 1, 1.6);
    mesh(loop, leather, sash).rotation.y = Math.PI / 2;
    // the gold plate rides on the chest where the strap crosses it
    const front = plate(this.j.chest, -0.02, 0.1, 0.125 * width + 0.01, true);
    front.rotation.z = 0.55;
    sash.userData.plate = front;
    waist.visible = sash.visible = front.visible = false;
    this.belt = { waist, sash };
  }

  /**
   * Visible fight damage, 0 (fresh) to 1 (a mess): cuts that open and bleed, a swelling eye,
   * bruised cheekbones, blood running down the face onto the chest, and sweat on the skin.
   */
  setDamage(d, body = this.bodyDamage || 0, leg = this.legDamage || 0) {
    d = Math.max(0, Math.min(1, d));
    const changed = Math.abs(d - (this.damage || 0)) + Math.abs(body - (this.bodyDamage || 0)) + Math.abs(leg - (this.legDamage || 0));
    if (changed < 0.01 && this.wounds) return;
    this.damage = d;
    this.bodyDamage = body;
    this.legDamage = leg;
    if (this.faceMesh) {
      paint(this.faceMesh.geometry, FACE_BRUISES, () => d, (x, y, z, out) => {
        // facial hair: skin color is multiplied by this, so darken toward the hair color
        const k = this.beardShade(x, y, z);
        if (!k) return (out[0] = out[1] = out[2] = 1);
        const c = this.beardColor, sk = this.skinBase;
        out[0] = 1 + (Math.min(1, c.r / Math.max(0.05, sk.r)) - 1) * k;
        out[1] = 1 + (Math.min(1, c.g / Math.max(0.05, sk.g)) - 1) * k;
        out[2] = 1 + (Math.min(1, c.b / Math.max(0.05, sk.b)) - 1) * k;
      });
      const amt = { body, leg };
      paint(this.bodyMesh.geometry, BODY_BRUISES(this.bruiseBase.width, this.bruiseBase.chestY), (region) => amt[region]);
    }
    if (!this.wounds) this.buildWounds();
    const w = this.wounds;
    const show = (m, from) => {
      m.visible = d >= from;
      return m.visible;
    };
    show(w.forehead, 0.22);
    show(w.foreheadDrip, 0.32);
    if (show(w.noseBlood, 0.3)) w.noseBlood.scale.y = 0.6 + d;
    show(w.browCut, 0.42);
    if (show(w.cheekDrip, 0.48)) w.cheekDrip.scale.y = 0.5 + d * 0.9;
    show(w.mouth, 0.55);
    show(w.browCut2, 0.72);
    if (show(w.swell, 0.35)) w.swell.scale.set(0.9 + d * 0.4, 0.55 + (d - 0.35) * 0.9, 0.45 + d * 0.3);
    for (const [i, c] of w.chest.entries()) if (show(c, 0.55 + i * 0.1)) c.scale.y = 0.6 + d;
    // skin flushes and gets slick with sweat and blood
    if (this.skinM) {
      this.skinM.color.copy(this.skinBase).lerp(new THREE.Color("#b5534a"), d * 0.1);
      this.skinM.roughness = 0.55 - d * 0.12;
    }
  }

  buildWounds() {
    // a little self-glow keeps blood reading as red under the arena lights
    const blood = mat("#b3120f", { roughness: 0.22, metalness: 0.05, emissive: "#4a0000" });
    const fresh = mat("#d4201a", { roughness: 0.18, metalness: 0.05, emissive: "#5a0000" });
    const H = this.head, C = this.j.chest;
    const piece = (parent, w, h, d, x, y, z, m = blood, rz = 0) => {
      // a thin drip, rounded and tapering toward the bottom
      const g = new THREE.CylinderGeometry(w / 2, w / 5, h, 6, 1);
      g.scale(1, 1, d / w);
      g.translate(0, -h / 2, 0); // hangs down from its top, so scaling makes it drip longer
      const o = new THREE.Mesh(g, m);
      o.position.set(x, y, z);
      o.rotation.z = rz;
      o.visible = false;
      parent.add(o);
      return o;
    };
    this.wounds = {
      forehead: piece(H, 0.034, 0.006, 0.006, 0.015, 0.082, 0.088, fresh, 0.25),
      foreheadDrip: piece(H, 0.006, 0.05, 0.005, 0.022, 0.08, 0.091),
      browCut: piece(H, 0.026, 0.007, 0.006, 0.036, 0.06, 0.09, fresh, -0.3),
      cheekDrip: piece(H, 0.007, 0.07, 0.005, 0.045, 0.055, 0.084),
      browCut2: piece(H, 0.024, 0.006, 0.006, -0.034, 0.06, 0.09, fresh, 0.3),
      noseBlood: piece(H, 0.007, 0.022, 0.004, 0.004, -0.019, 0.108),
      mouth: piece(H, 0.006, 0.03, 0.004, 0.012, -0.048, 0.1),
      swell: (() => {
        // a puffy, discoloured upper lid closing over the eye
        const m = new THREE.Mesh(withColors(new THREE.SphereGeometry(0.016, 14, 10)), this.skinM);
        const c = m.geometry.attributes.color.array;
        for (let i = 0; i < c.length; i += 3) [c[i], c[i + 1], c[i + 2]] = [0.72, 0.48, 0.6];
        m.position.set(-0.034, 0.036, 0.088);
        m.visible = false;
        H.add(m);
        return m;
      })(),
      chest: [piece(C, 0.006, 0.12, 0.003, 0.02, 0.27, 0.118), piece(C, 0.005, 0.09, 0.003, -0.03, 0.26, 0.115), piece(C, 0.006, 0.15, 0.003, 0.06, 0.22, 0.104)],
    };
  }

  /** Out of the cage while injured: a head bandage and a strip of tape over the nose. */
  setInjured(on) {
    if (on && !this.bandage) {
      const white = mat("#f4f1ea", { roughness: 0.9 });
      const g = new THREE.Group();
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.098, 0.016, 6, 24), white);
      band.rotation.x = Math.PI / 2 - 0.15;
      band.position.y = 0.06;
      band.scale.set(0.95, 1.05, 1);
      g.add(band);
      const tape = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.01), white);
      tape.position.set(0, 0.01, 0.105);
      g.add(tape);
      this.head.add(g);
      this.bandage = g;
    }
    if (this.bandage) this.bandage.visible = !!on;
    this.injured = !!on;
  }

  /** null, "waist" or "shoulder". */
  setBelt(mode) {
    if (!this.belt) return;
    this.belt.waist.visible = mode === "waist";
    this.belt.sash.visible = this.belt.sash.userData.plate.visible = mode === "shoulder";
  }

  buildHead(head, skin, hairM, dark, look, ref) {
    const white = mat("#f1ece4", { roughness: 0.25 });
    const iris = mat(["#3b2416", "#2a1a10", "#4a6b3a", "#3a5a7a"][(look.skin + look.hair) % 4], { roughness: 0.2 });
    const pupil = mat("#050505", { roughness: 0.1 });
    const browM = mat(LOOK_OPTIONS.hairColor[look.hairColor], { roughness: 0.9 });
    const lipM = mat(new THREE.Color(LOOK_OPTIONS.skin[look.skin]).multiplyScalar(0.72).getStyle(), { roughness: 0.45 });
    for (const sx of [-1, 1]) {
      mesh(geo("eyeWhite", () => new THREE.SphereGeometry(0.0118, 14, 10)), white, head, sx * 0.034, 0.029, 0.083);
      mesh(geo("iris", () => new THREE.SphereGeometry(0.0062, 12, 8)), iris, head, sx * 0.034, 0.029, 0.0905).scale.z = 0.45;
      mesh(geo("pupil", () => new THREE.SphereGeometry(0.0032, 8, 6)), pupil, head, sx * 0.034, 0.029, 0.0935).scale.z = 0.4;
      const lid = mesh(geo("lid", () => withColors(new THREE.SphereGeometry(0.0128, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.42))), skin, head, sx * 0.034, 0.0305, 0.083);
      // heavier upper lids for monolid eyes
      const F = FACES[look.face || 0];
      lid.rotation.x = 0.35 + (1 - (F.lid ?? 1)) * 0.7;
      const brow = mesh(geo("brow", () => new THREE.CapsuleGeometry(0.0045, 0.03, 3, 6)), browM, head, sx * 0.035, 0.056, 0.0985 + (F.browZ || 0));
      brow.rotation.z = Math.PI / 2 - sx * 0.12;
    }
    const lips = mesh(geo("lips", () => new THREE.CapsuleGeometry(0.006, 0.03, 3, 8)), lipM, head, 0, -0.041, 0.1);
    lips.rotation.z = Math.PI / 2;
    if (ref) {
      // short, neat grey hair for the referee
      const cap = mesh(new THREE.SphereGeometry(0.104, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.45), mat("#8d8d8d", { roughness: 0.9 }), head, 0, 0.03, -0.004);
      cap.scale.set(0.95, 1.12, 1.05);
      return;
    }
    const h = LOOK_OPTIONS.hair[look.hair];
    const capGeo = (cover) => new THREE.SphereGeometry(0.105, 18, 12, 0, Math.PI * 2, 0, Math.PI * cover);
    if (h === "Buzz" || h === "Short" || h === "Man bun" || h === "Long") {
      const cap = mesh(capGeo(h === "Buzz" ? 0.42 : 0.48), hairM, head, 0, 0.03, -0.006);
      cap.scale.set(h === "Buzz" ? 0.94 : 0.99, h === "Buzz" ? 1.12 : 1.2, h === "Buzz" ? 1.05 : 1.1);
      cap.rotation.x = -0.25;
    }
    if (h === "Short") {
      const fringe = mesh(new THREE.BoxGeometry(0.15, 0.03, 0.05), hairM, head, 0, 0.1, 0.06);
      fringe.rotation.x = -0.4;
    }
    if (h === "Mohawk") {
      const strip = mesh(new THREE.BoxGeometry(0.04, 0.07, 0.2), hairM, head, 0, 0.1, -0.015);
      strip.rotation.x = -0.2;
      const sides = mesh(capGeo(0.4), mat(LOOK_OPTIONS.hairColor[look.hairColor], { transparent: true, opacity: 0.4, roughness: 1 }), head, 0, 0.03, -0.006);
      sides.scale.set(0.95, 1.12, 1.05);
    }
    if (h === "Man bun") mesh(new THREE.SphereGeometry(0.04, 10, 8), hairM, head, 0, 0.1, -0.1);
    if (h === "Long") {
      const back = mesh(new THREE.CylinderGeometry(0.085, 0.06, 0.2, 12, 1, false, Math.PI * 0.5, Math.PI), hairM, head, 0, -0.04, -0.03);
      back.rotation.x = 0.1;
    }
    if (h === "Afro") {
      // a full rounded afro sitting on top and back, hairline just above the brows
      const fro = mesh(new THREE.SphereGeometry(0.13, 20, 16), hairM, head, 0, 0.09, -0.035);
      fro.scale.set(1.12, 0.95, 1.0);
    }
    if (h === "Braids") {
      // cornrows: tight rows running from the hairline to the nape
      // scalp shows between the rows
      const cap = mesh(capGeo(0.5), mat(LOOK_OPTIONS.hairColor[look.hairColor], { transparent: true, opacity: 0.35, roughness: 1 }), head, 0, 0.03, -0.006);
      cap.scale.set(0.94, 1.13, 1.04);
      cap.rotation.x = -0.3;
      const rowGeo = (r) => new THREE.TorusGeometry(r, 0.0125, 6, 28, Math.PI * 1.05);
      for (const x of [-0.066, -0.044, -0.022, 0, 0.022, 0.044, 0.066]) {
        const g = new THREE.Group();
        g.position.set(x, 0.02, 0);
        g.scale.set(1, 1.12, 1.02);
        g.rotation.x = -0.45;
        head.add(g);
        const row = mesh(rowGeo(0.1 * Math.sqrt(Math.max(0.2, 1 - (x / 0.095) ** 2)) + 0.004), hairM, g);
        row.rotation.y = -Math.PI / 2;
      }
    }
    if (h === "Dreadlocks") {
      // shoulder-length locs all around the sides and back, a few shorter ones falling over the forehead
      const cap = mesh(capGeo(0.5), hairM, head, 0, 0.03, -0.006);
      cap.scale.set(0.99, 1.2, 1.1);
      cap.rotation.x = -0.25;
      const locGeo = (len) => geo("loc" + len, () => {
        const g = new THREE.CylinderGeometry(0.0125, 0.011, len, 6, 1);
        g.translate(0, -len / 2, 0);
        return g;
      });
      const tipGeo = geo("loctip", () => new THREE.SphereGeometry(0.0115, 6, 5));
      const loc = (angle, y, ring, len, tilt) => {
        const g = new THREE.Group();
        g.position.set(Math.sin(angle) * ring * 0.95, y, Math.cos(angle) * ring * 1.05 - 0.006);
        g.rotation.y = angle;
        head.add(g);
        const strand = mesh(locGeo(len), hairM, g);
        strand.rotation.x = -tilt;
        mesh(tipGeo, hairM, strand, 0, -len, 0);
      };
      // lower ring: sides and back only, longest at the back
      for (let i = 0; i < 20; i++) {
        const a = 0.95 + (i / 19) * (Math.PI * 2 - 1.9);
        const back = Math.abs(Math.cos(a)) * (Math.cos(a) < 0 ? 1 : 0);
        loc(a, 0.06, 0.098, back > 0.5 ? 0.24 : 0.2, 0.22);
      }
      // upper ring adds volume on top
      for (let i = 0; i < 14; i++) {
        const a = 0.7 + (i / 13) * (Math.PI * 2 - 1.4);
        loc(a, 0.105, 0.08, 0.2, 0.42);
      }
      // a few shorter locs swept over the forehead
      for (const a of [-0.45, -0.15, 0.2, 0.5]) loc(a, 0.115, 0.075, 0.085, 0.75);
    }
    // facial hair is painted into the skin (see beardShade)
    this.beardType = LOOK_OPTIONS.beard[look.beard];
    this.beardColor = new THREE.Color(LOOK_OPTIONS.hairColor[look.hairColor]);
  }

  /** How much facial hair covers a point of the face (head space), 0..1. */
  beardShade(x, y, z) {
    const t = this.beardType;
    if (!t || t === "None" || z < -0.01) return 0;
    const fade = (v, a, b) => Math.max(0, Math.min(1, (v - a) / (b - a)));
    // soft-edged zones so the hair blends into the skin
    const lips = fade(0.03 - Math.abs(x), 0, 0.006) * fade(y, -0.056, -0.05) * fade(-y, 0.028, 0.034);
    const moustache = fade(0.036 - Math.abs(x), 0, 0.01) * fade(y, -0.034, -0.028) * fade(-y, 0.012, 0.018);
    const chin = fade(0.036 - Math.abs(x), 0, 0.012) * fade(-y, 0.048, 0.06);
    const jaw = fade(-y, 0.008, 0.04) * fade(z, -0.01, 0.03) * (1 - lips);
    if (lips > 0.9) return 0;
    if (t === "Goatee") return Math.max(moustache, chin) * 0.85;
    if (t === "Stubble") return Math.max(moustache * 0.6, jaw * 0.5);
    return Math.max(moustache, jaw) * 0.9;
  }

  setBase(name) {
    this.base = name;
  }

  /** Play keyframes, then settle back into the base pose. */
  play(frames, after) {
    if (!frames || !frames.length) return;
    this.queue = { frames, i: 0, t: 0 };
    if (after) this.base = after;
  }

  get busy() {
    return !!this.queue;
  }

  hit(kind, strength = 1) {
    this.offsets.push({ o: hitOffset(kind, strength), t: 0, dur: 0.38 + 0.2 * strength });
  }

  stopActions() {
    this.queue = null;
  }

  /** Jump straight to the base pose (used when restoring a fight mid-way). */
  snap() {
    this.queue = null;
    this.offsets = [];
    this.cur = pose(POSES[this.base]);
    this.applyPose(this.cur);
  }

  /** World position of a hand or the head, for hit sparks and camera framing. */
  worldPoint(part) {
    const v = new THREE.Vector3();
    const node = part === "head" ? this.head : this.j[part] || this.j.chest;
    if (part === "handL" || part === "handR") v.set(0, -0.27, 0);
    node.localToWorld(v);
    return v;
  }

  update(dt) {
    this.time += dt;
    let target;
    let rate = 9;
    if (this.queue) {
      const q = this.queue;
      q.t += dt;
      while (q.i < q.frames.length && q.t > q.frames[q.i][1]) {
        q.t -= q.frames[q.i][1];
        q.i++;
      }
      if (q.i >= q.frames.length) {
        this.queue = null;
      } else {
        target = pose(q.frames[q.i][0]);
        rate = q.frames[q.i][2];
      }
    }
    if (!target) target = this.idlePose();

    // a finished spin or flip leaves the hips a whole turn away from where they are headed:
    // drop the extra turn instead of unwinding it
    for (let i = 0; i < 3; i++) {
      const d = target.hips[i] - this.cur.hips[i];
      if (Math.abs(d) > Math.PI) this.cur.hips[i] += Math.PI * 2 * Math.round(d / (Math.PI * 2));
    }

    // fading hit reactions add on top
    this.offsets = this.offsets.filter((h) => (h.t += dt) < h.dur);
    for (const h of this.offsets) {
      const k = Math.sin(Math.min(1, h.t / h.dur) * Math.PI) * (h.t < 0.08 ? 1.4 : 1);
      for (const key in h.o) for (let i = 0; i < 3; i++) target[key][i] += h.o[key][i] * k;
    }

    // footwork when the whole fighter is sliding around
    const pos = this.root.position;
    const moved = this.lastPos.distanceTo(pos);
    this.lastPos.copy(pos);
    const sp = dt > 0 ? moved / dt : 0;
    this.speed += (sp - this.speed) * Math.min(1, dt * 8);
    if (this.speed > 0.15 && (this.base === "stance" || this.base === "relaxed" || this.base === "ref" || this.base === "dejected") && !this.queue) {
      this.walk += moved * 9;
      const a = Math.min(1, this.speed / 1.2) * 0.42;
      target.hipL[0] += Math.sin(this.walk) * a;
      target.knL[0] += Math.max(0, Math.cos(this.walk)) * a * 1.2;
      target.hipR[0] -= Math.sin(this.walk) * a;
      target.knR[0] += Math.max(0, -Math.cos(this.walk)) * a * 1.2;
      target.hipsPos[1] += Math.abs(Math.cos(this.walk)) * 0.02;
      if (this.injured) {
        // favouring one leg
        target.hips[2] += Math.max(0, Math.sin(this.walk)) * 0.12;
        target.spine[0] += 0.12;
      }
    }

    const k = 1 - Math.exp(-dt * rate);
    for (const key in target) for (let i = 0; i < 3; i++) this.cur[key][i] += (target[key][i] - this.cur[key][i]) * k;
    this.applyPose(this.cur);
  }

  idlePose() {
    const p = pose(POSES[this.base] || STANCE);
    const t = this.time;
    if (this.base === "stance") {
      const b = Math.sin(t * 5.2);
      p.hipsPos[1] += b * 0.018;
      p.knL[0] += b * 0.05;
      p.knR[0] += b * 0.05;
      p.shL[0] += Math.sin(t * 2.6) * 0.06;
      p.shR[0] += Math.sin(t * 2.6 + 1.3) * 0.05;
      p.chest[1] += Math.sin(t * 1.3) * 0.06;
      p.neck[1] += Math.sin(t * 0.9) * 0.05;
    } else if (/top$|bottom$|Att$|Def$/i.test(this.base)) {
      const b = Math.sin(t * 2.2);
      p.spine[0] += b * 0.04;
      p.shL[0] += Math.sin(t * 1.7) * 0.08;
      p.shR[0] += Math.sin(t * 1.9 + 1) * 0.08;
      p.hipL[2] += Math.sin(t * 1.3) * 0.05;
    } else if (this.base === "victory") {
      p.shL[2] += Math.sin(t * 4) * 0.12;
      p.shR[2] -= Math.sin(t * 4) * 0.12;
    } else if (this.base === "relaxed" || this.base === "ref" || this.base === "dejected") {
      p.chest[0] += Math.sin(t * 1.6) * 0.02;   // breathing
      p.hipsPos[1] += Math.sin(t * 1.6) * 0.004;
    } else if (this.base === "down") {
      p.neck[1] += Math.sin(t * 0.7) * 0.08;
    }
    return p;
  }

  applyPose(p) {
    const j = this.j;
    j.hips.position.set(p.hipsPos[0], this.hipsHome + p.hipsPos[1], p.hipsPos[2]);
    for (const name of JOINTS) j[name].rotation.set(p[name][0], p[name][1], p[name][2]);
  }

  dispose() {
    const keep = new Set(Object.values(shared));
    this.root.traverse((o) => {
      if (!o.isMesh) return;
      if (!keep.has(o.geometry)) o.geometry.dispose();
      o.material.dispose();
    });
    this.root.removeFromParent();
  }
}
