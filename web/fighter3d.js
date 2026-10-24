// Procedural 3D fighters: a jointed low-poly body built from primitives, a pose library,
// and an animator that blends between poses so every move flows into the next.
import * as THREE from "./vendor/three.module.min.js";

export const LOOK_OPTIONS = {
  skin: ["#f2d2b6", "#e3b48e", "#c98e64", "#a96c45", "#7c4b2c", "#4f301d"],
  hair: ["Bald", "Buzz", "Short", "Mohawk", "Man bun", "Long", "Afro", "Braids", "Dreadlocks"],
  hairColor: ["#15120f", "#3b2416", "#6e4524", "#c9a25a", "#9c3a1a", "#9b9b9b"],
  beard: ["None", "Stubble", "Goatee", "Full"],
  shorts: ["#c8102e", "#1d4ed8", "#151515", "#f2f2f2", "#15803d", "#e8a91c", "#7c3aed", "#f97316"],
};
export const SHORTS_NAMES = ["Red", "Blue", "Black", "White", "Green", "Gold", "Purple", "Orange"];
const KEYS = ["skin", "hair", "hairColor", "beard", "shorts"];

export function parseLook(str) {
  const parts = String(str || "").split(",").map(Number);
  const look = {};
  KEYS.forEach((k, i) => {
    const n = LOOK_OPTIONS[k].length;
    look[k] = Number.isInteger(parts[i]) ? ((parts[i] % n) + n) % n : 0;
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
  return { skin: pick("skin"), hair: pick("hair"), hairColor: Math.floor(r() * 5), beard: pick("beard"), shorts: pick("shorts") };
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
const SPIN_FIST = pose(S, { shR: [-0.05, 0, -1.5], elR: [-0.1, 0, 0], chest: [0, -0.3, 0], neck: [0, -0.6, 0] });
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
const GNP_LOAD = pose(T, { spine: [0.15, 0, 0], neck: [0.1, 0, 0], shR: [-2.6, 0, -0.3], elR: [-1.6, 0, 0], shL: [-1.4, 0, 0.4], elL: [-0.3, 0, 0] });
const GNP_HIT = pose(T, { spine: [0.7, 0, 0], chest: [0.4, 0.25, 0], shR: [-1.05, 0, -0.1], elR: [-0.1, 0, 0], shL: [-1.3, 0, 0.45], elL: [-0.4, 0, 0] });
const ELBOW_LOAD = pose(T, { spine: [0.2, 0, 0], shR: [-2.8, 0, -0.5], elR: [-2.6, 0, 0] });
const ELBOW_HIT = pose(T, { spine: [0.8, 0, 0], chest: [0.45, 0.35, 0], shR: [-1.3, 0, -0.3], elR: [-2.6, 0, 0] });
const TOP_SUB = pose(T, { spine: [0.85, 0, 0], chest: [0.4, 0, 0], neck: [-0.1, 0.3, 0], shL: [-1.55, 0, -0.25], elL: [-1.9, 0, 0], shR: [-1.55, 0, 0.25], elR: [-1.9, 0, 0] });
const TOP_SUB_SQUEEZE = pose(TOP_SUB, { chest: [0.25, 0, 0], shL: [-1.4, 0, -0.35], elL: [-2.2, 0, 0], shR: [-1.4, 0, 0.35], elR: [-2.2, 0, 0] });
const BOTTOM_SUB = pose(B, { hipL: [-1.35, 0, 0.25], knL: [1.65, 0, 0], hipR: [-1.35, 0, -0.25], knR: [1.65, 0, 0], shL: [-1.7, 0, -0.1], elL: [-1.4, 0, 0], shR: [-1.7, 0, 0.1], elR: [-1.4, 0, 0] });
const BOTTOM_SUB_SQUEEZE = pose(BOTTOM_SUB, { hips: [-1.25, 0, 0], hipL: [-1.55, 0, 0.15], hipR: [-1.55, 0, -0.15], elL: [-1.8, 0, 0], elR: [-1.8, 0, 0] });
const TRAPPED_TOP = pose(T, { spine: [0.95, 0, 0], neck: [0.3, 0, 0], shL: [-1.0, 0, 0.6], elL: [-0.2, 0, 0], shR: [-1.9, 0, -0.2], elR: [-0.4, 0, 0] });
const TRAPPED_BOTTOM = pose(B, { shL: [-2.0, 0, -0.2], elL: [-1.3, 0, 0], shR: [-2.0, 0, 0.2], elR: [-1.3, 0, 0], neck: [0.2, 0.5, 0] });
const TAP_A = (base) => pose(base, { shL: [-0.6, 0, 1.0], elL: [-0.3, 0, 0] });
const TAP_B = (base) => pose(base, { shL: [-0.2, 0, 1.25], elL: [-0.1, 0, 0] });
const BLOCK_TOP = pose(B, { shL: [-1.2, 0, -0.2], elL: [-2.1, 0, 0], shR: [-1.2, 0, 0.2], elR: [-2.1, 0, 0], neck: [0.3, 0, 0] });

function hand(p, flip) {
  return flip ? mirror(p) : p;
}

/**
 * Builds the keyframes for a named technique: { frames, fwd }. Each frame is
 * [pose, seconds, blend speed, hit] where hit names the target ("head", "hook", "body", "leg", "ground")
 * on the frames that land.
 */
export function attack(move, n = 1, ground = false) {
  const m = String(move || "").toLowerCase();
  if (ground) {
    if (m.includes("elbow")) return { frames: [[ELBOW_LOAD, 0.22, 14], [ELBOW_HIT, 0.16, 26, "ground"]] };
    const frames = [];
    for (let i = 0; i < Math.min(Math.max(n, 1), 4); i++) {
      const f = i % 2 === 1;
      frames.push([hand(GNP_LOAD, f), 0.13, 18], [hand(GNP_HIT, f), 0.12, 28, "ground"]);
    }
    return { frames };
  }
  const jab = [JAB_EXT, 0.14, 26, "head"], cross = [CROSS_EXT, 0.18, 26, "head"], hook = [HOOK_L, 0.18, 24, "hook"];
  const reset = [S, 0.06, 26];
  if (m.includes("head kick")) return { frames: [[KICK_LOAD, 0.12, 16], [HEAD_KICK, 0.3, 20, "hook"]], fwd: 0.1 };
  if (m.includes("body kick")) return { frames: [[KICK_LOAD, 0.12, 16], [BODY_KICK, 0.3, 20, "body"]], fwd: 0.1 };
  if (m.includes("leg kick") || m.includes("calf kick")) return { frames: [[KICK_LOAD, 0.1, 16], [LEG_KICK, 0.26, 20, "leg"]] };
  if (m.includes("flying knee")) return { frames: [[pose(S, { hipsPos: [0, -0.2, 0] }), 0.15, 16], [FLYING_KNEE, 0.35, 16, "head"]], fwd: 0.55 };
  if (m.includes("knee")) return { frames: [[CLINCH, 0.2, 14], [KNEE, 0.24, 20, "body"]], fwd: 0.35 };
  if (m.includes("spinning")) return { frames: [[pose(S, { chest: [0, 0.5, 0] }), 0.14, 18], [SPIN_FIST, 0.28, 18, "hook"]], spin: true };
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

export const SEQUENCES = {
  slip: [[SLIP, 0.25, 22]],
  shoot: [[pose(S, { hipsPos: [0, -0.22, 0] }), 0.1, 18], [SHOOT, 0.45, 12]],
  sprawl: [[SPRAWL, 0.55, 14]],
  touch: [[TOUCH, 0.5, 8]],
  topSub: [[TOP_SUB, 0.3, 8], [TOP_SUB_SQUEEZE, 0.35, 6], [TOP_SUB, 0.25, 8], [TOP_SUB_SQUEEZE, 0.4, 6]],
  bottomSub: [[BOTTOM_SUB, 0.3, 8], [BOTTOM_SUB_SQUEEZE, 0.35, 6], [BOTTOM_SUB, 0.25, 8], [BOTTOM_SUB_SQUEEZE, 0.4, 6]],
  trappedTop: [[TRAPPED_TOP, 1.4, 6]],
  trappedBottom: [[TRAPPED_BOTTOM, 0.35, 10], [pose(TRAPPED_BOTTOM, { hipL: [-0.4, 0, 0.4], hipR: [-1.0, 0, -0.5] }), 0.35, 10], [TRAPPED_BOTTOM, 0.35, 10], [pose(TRAPPED_BOTTOM, { hipL: [-1.0, 0, 0.5], hipR: [-0.4, 0, -0.4] }), 0.35, 10]],
  block: [[BLOCK_TOP, 0.4, 14]],
  topShift: [[pose(T, { spine: [0.75, 0.2, 0], shL: [-1.4, 0, 0.6], shR: [-1.0, 0, -0.2] }), 0.45, 6]],
  bottomShift: [[pose(B, { hips: [-1.4, 0.25, 0.1], hipL: [-0.4, 0, 0.55], hipR: [-1.0, 0, -0.3] }), 0.45, 6]],
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

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.02, ...opts });
}

function mesh(g, m, parent, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}

/** A limb segment hanging down from its joint. */
function limb(parent, r1, r2, len, material) {
  const g = new THREE.CylinderGeometry(r1, r2, len, 10, 1);
  g.translate(0, -len / 2, 0);
  const m = mesh(g, material, parent);
  const cap = geo("cap" + r2.toFixed(3), () => new THREE.SphereGeometry(r2, 10, 8));
  mesh(cap, material, parent, 0, -len, 0);
  return m;
}

function joint(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
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
    const width = opts.ref ? 0.98 : 0.9 + wc * 0.035 + styleW;
    const height = opts.ref ? 1.0 : 0.95 + wc * 0.016;
    this.width = width;

    const skin = mat(LOOK_OPTIONS.skin[look.skin], { roughness: 0.55 });
    const hairM = mat(LOOK_OPTIONS.hairColor[look.hairColor], { roughness: 0.9 });
    const shortsM = mat(opts.ref ? "#3c3f46" : LOOK_OPTIONS.shorts[look.shorts], { roughness: 0.75 });
    const trimM = mat(opts.ref ? "#2a2c31" : look.shorts === 3 ? "#151515" : "#f2f2f2", { roughness: 0.7 });
    const gloveM = mat("#161616", { roughness: 0.42 });
    const bandM = mat(opts.glove || "#c8102e", { roughness: 0.5 });
    const shirtM = mat("#17181c", { roughness: 0.8 });
    const dark = mat("#120d0b", { roughness: 0.4 });
    const torsoM = opts.ref ? shirtM : skin;
    const armM = opts.ref ? skin : skin;

    const root = new THREE.Group();
    root.scale.setScalar(height);
    this.root = root;
    const hips = joint(root, 0, 0.95, 0);
    this.hipsHome = 0.95;

    // pelvis / shorts
    mesh(new THREE.CylinderGeometry(0.15 * width, 0.165 * width, 0.2, 14), shortsM, hips, 0, -0.02, 0).scale.z = 0.72;
    mesh(new THREE.CylinderGeometry(0.152 * width, 0.152 * width, 0.035, 14), opts.ref ? mat("#111") : trimM, hips, 0, 0.085, 0).scale.z = 0.72;

    const spine = joint(hips, 0, 0.08, 0);
    const abs = mesh(new THREE.SphereGeometry(0.14, 16, 12), torsoM, spine, 0, 0.1, 0);
    abs.scale.set(1.0 * width, 1.15, 0.7);
    const chest = joint(spine, 0, 0.18, 0);
    const ribs = mesh(new THREE.SphereGeometry(0.17, 18, 14), torsoM, chest, 0, 0.1, 0);
    ribs.scale.set(1.12 * width, 1.05, 0.68);
    if (!opts.ref) {
      // pecs and traps give the torso some shape
      for (const sx of [-1, 1]) {
        const pec = mesh(geo("pec", () => new THREE.SphereGeometry(0.09, 12, 10)), skin, chest, sx * 0.075 * width, 0.15, 0.06);
        pec.scale.set(1.15 * width, 0.75, 0.55);
      }
      const traps = mesh(geo("traps", () => new THREE.SphereGeometry(0.12, 12, 10)), skin, chest, 0, 0.23, -0.02);
      traps.scale.set(1.25 * width, 0.5, 0.6);
    } else {
      // referee shirt collar
      mesh(new THREE.TorusGeometry(0.06, 0.015, 6, 14), shirtM, chest, 0, 0.27, 0).rotation.x = Math.PI / 2;
    }

    const neck = joint(chest, 0, 0.29, 0);
    mesh(geo("neck" + width.toFixed(2), () => new THREE.CylinderGeometry(0.05 * width, 0.058 * width, 0.09, 10)), skin, neck, 0, 0.03, 0);
    const head = joint(neck, 0, 0.12, 0.01);
    this.head = head;
    this.buildHead(head, skin, hairM, dark, look, opts.ref);

    // arms
    const arms = {};
    for (const side of ["L", "R"]) {
      const sx = side === "L" ? 1 : -1;
      const sh = joint(chest, sx * 0.19 * width, 0.2, -0.01);
      mesh(geo("delt" + width.toFixed(2), () => new THREE.SphereGeometry(0.07 * width, 12, 10)), opts.ref ? shirtM : skin, sh, 0, -0.01, 0);
      if (opts.ref) {
        const sleeve = new THREE.CylinderGeometry(0.058, 0.052, 0.14, 10);
        sleeve.translate(0, -0.07, 0);
        mesh(sleeve, shirtM, sh);
      }
      limb(sh, 0.06 * width, 0.047 * width, 0.27, armM);
      const el = joint(sh, 0, -0.27, 0);
      limb(el, 0.047 * width, 0.037 * width, 0.23, armM);
      if (opts.ref) {
        mesh(geo("fist", () => new THREE.SphereGeometry(0.045, 10, 8)), skin, el, 0, -0.26, 0);
      } else {
        const glove = mesh(geo("glove", () => new THREE.SphereGeometry(0.062, 14, 10)), gloveM, el, 0, -0.27, 0.005);
        glove.scale.set(0.95, 1.15, 1.1);
        const band = mesh(geo("band", () => new THREE.CylinderGeometry(0.047, 0.047, 0.045, 12)), bandM, el, 0, -0.2, 0);
        band.scale.z = 1.05;
      }
      arms["sh" + side] = sh;
      arms["el" + side] = el;
      arms["hand" + side] = el;
    }

    // legs
    const legs = {};
    for (const side of ["L", "R"]) {
      const sx = side === "L" ? 1 : -1;
      const hp = joint(hips, sx * 0.085 * width, -0.06, 0);
      const sleeve = new THREE.CylinderGeometry(0.088 * width, 0.08 * width, 0.2, 12);
      sleeve.translate(0, -0.08, 0);
      mesh(sleeve, opts.ref ? shortsM : shortsM, hp);
      if (opts.ref) {
        limb(hp, 0.075 * width, 0.055, 0.42, shortsM);
      } else {
        limb(hp, 0.085 * width, 0.058 * width, 0.42, skin);
      }
      const kn = joint(hp, 0, -0.42, 0);
      limb(kn, opts.ref ? 0.055 : 0.058 * width, 0.04, 0.42, opts.ref ? shortsM : skin);
      const foot = new THREE.BoxGeometry(0.075, 0.05, 0.2);
      foot.translate(0, -0.025, 0.05);
      const f = mesh(foot, opts.ref ? dark : skin, kn, 0, -0.44, 0);
      f.scale.x = width;
      legs["hip" + side] = hp;
      legs["kn" + side] = kn;
    }

    this.j = { hips, spine, chest, neck, ...arms, ...legs };
    this.cur = pose(POSES[opts.ref ? "ref" : "stance"]);
    this.base = opts.ref ? "ref" : "stance";
    this.queue = null;   // { frames, i, t }
    this.offsets = [];   // fading hit reactions
    this.time = Math.random() * 10;
    this.walk = 0;       // walking phase
    this.speed = 0;
    this.lastPos = new THREE.Vector3();
    this.applyPose(this.cur);
  }

  buildHead(head, skin, hairM, dark, look, ref) {
    const skull = mesh(geo("skull", () => new THREE.SphereGeometry(0.1, 20, 16)), skin, head, 0, 0.02, 0);
    skull.scale.set(0.92, 1.12, 1.02);
    const jaw = mesh(geo("jaw", () => new THREE.SphereGeometry(0.075, 14, 10)), skin, head, 0, -0.045, 0.03);
    jaw.scale.set(1.0, 0.8, 1.0);
    const nose = mesh(geo("nose", () => new THREE.ConeGeometry(0.018, 0.045, 6)), skin, head, 0, 0.0, 0.1);
    nose.rotation.x = Math.PI / 2;
    for (const sx of [-1, 1]) {
      mesh(geo("eye", () => new THREE.SphereGeometry(0.011, 8, 6)), dark, head, sx * 0.034, 0.03, 0.085);
      const brow = mesh(geo("brow", () => new THREE.BoxGeometry(0.036, 0.009, 0.012)), mat(LOOK_OPTIONS.hairColor[look.hairColor]), head, sx * 0.035, 0.052, 0.088);
      brow.rotation.z = -sx * 0.12;
      const ear = mesh(geo("ear", () => new THREE.SphereGeometry(0.022, 8, 6)), skin, head, sx * 0.092, 0.01, -0.005);
      ear.scale.set(0.5, 1.0, 0.8);
    }
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
    const b = LOOK_OPTIONS.beard[look.beard];
    if (b !== "None") {
      const beardM = b === "Stubble" ? mat(LOOK_OPTIONS.hairColor[look.hairColor], { transparent: true, opacity: 0.45, roughness: 1 }) : hairM;
      if (b === "Goatee") {
        mesh(new THREE.SphereGeometry(0.03, 10, 8), beardM, head, 0, -0.085, 0.075).scale.set(1.0, 1.2, 0.7);
      } else {
        const beard = mesh(new THREE.SphereGeometry(0.079, 14, 10, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55), beardM, head, 0, -0.035, 0.032);
        beard.scale.set(1.04, b === "Full" ? 1.1 : 0.95, 1.03);
      }
    }
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
    } else if (this.base === "top" || this.base === "bottom") {
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
