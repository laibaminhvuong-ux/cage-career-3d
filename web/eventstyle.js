// Serializable event editions: stable across saves and spectator replays.
export const SPECIAL_EVENTS = {
  legacy: { id: "legacy", name: "Legacy Anniversary", canvas: "#263043", tint: "#c8d2e5", accent: "#e7c56a", gloves: { body: "#c3a151", panel: "#f3d889", metal: 0.45 } },
  ice: { id: "ice", name: "Ice Championship", canvas: "#e2ecf4", tint: "#e5efff", accent: "#36c4f0", gloves: { body: "#e8eef5", panel: "#4fc9ee", metal: 0.1 } },
  neon: { id: "neon", name: "Neon Fight Night", canvas: "#242238", tint: "#cbbfe0", accent: "#c17bff", gloves: { body: "#63329d", panel: "#cf9aff", metal: 0.15 } },
  gold: { id: "gold", name: "Championship Gold", canvas: "#302b22", tint: "#e6d4ad", accent: "#e9b94e", gloves: { body: "#ad8435", panel: "#ead183", metal: 0.5 } },
};
export function specialEventFor(org, number, title = false) {
  if (org === "Contender Series") return null;
  const n = Number(number);
  const edition = n > 0 && n % 25 === 0 ? SPECIAL_EVENTS.legacy : n > 0 && n % 10 === 0 ? SPECIAL_EVENTS.ice : n > 0 && n % 5 === 0 ? SPECIAL_EVENTS.neon : title ? SPECIAL_EVENTS.gold : null;
  return edition ? { ...edition, gloves: { ...edition.gloves } } : null;
}
