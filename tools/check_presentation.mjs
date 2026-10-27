// Node 22+: node tools/check_presentation.mjs.
import assert from "node:assert/strict";
import { getPresentation15Plus, setPresentation15Plus } from "../web/ringcard3d.js";
const saved = new Map();
globalThis.localStorage = { getItem: k => saved.get(k) ?? null, setItem: (k, v) => saved.set(k, v) };
assert.equal(getPresentation15Plus(), false, "Sports outfit must be the default");
setPresentation15Plus(true); assert.equal(getPresentation15Plus(), true);
assert.equal(saved.get("cc3d_presentation15plus"), "1");
setPresentation15Plus(false); assert.equal(getPresentation15Plus(), false);
globalThis.localStorage = { getItem() { throw Error("blocked"); }, setItem() { throw Error("blocked"); } };
setPresentation15Plus(true); assert.equal(getPresentation15Plus(), true, "Memory setting survives unavailable storage");
setPresentation15Plus(false); assert.equal(getPresentation15Plus(), false);
console.log("PASS: sport default, persistent explicit opt-in/out, blocked-storage fallback");
