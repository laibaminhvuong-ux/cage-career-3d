// Run with Node: node tools/check_stage.cjs
// Exercise the real stage controller with a deterministic clock and GPU-free views.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const source = fs.readFileSync(path.join(__dirname, "../web/arena3d.js"), "utf8");
const start = source.indexOf("export function createStage()");
const end = source.indexOf("/** A promotion", start);
assert(start >= 0 && end > start, "Stage controller boundaries must exist");
const body = source.slice(start, end).replace("export function", "function");
let resize, loop, now = 0;
const handlers = {};
const canvas = { style: {}, addEventListener: (type, fn) => { handlers[type] = fn; } };
class View {
  constructor() { this.camera = { updateProjectionMatrix() {} }; this.scene = {}; this.updates = 0; }
  update() { this.updates++; }
  enter() {}
}
class Renderer {
  constructor() { this.shadowMap = {}; this.domElement = canvas; }
  setPixelRatio() {}
  setSize() {}
  setAnimationLoop(fn) { loop = fn; }
  render() {}
}
let generatorDisposed = false, roomDisposed = false;
const context = {
  THREE: {
    WebGLRenderer: Renderer,
    PMREMGenerator: class {
      fromScene() { return { texture: {} }; }
      fromEquirectangular() { return { texture: {} }; }
      dispose() { generatorDisposed = true; }
    },
    Clock: class { getDelta() { return 0.016; } },
    MathUtils: { radToDeg: x => x * 180 / Math.PI, degToRad: x => x * Math.PI / 180 },
  },
  RoomEnvironment: class { dispose() { roomDisposed = true; } },
  setFighterEnv() {}, PreviewView: View, ArenaView: View, WorldView: View,
  ResizeObserver: class { constructor(fn) { resize = fn; } observe() {} unobserve() {} },
  window: { devicePixelRatio: 1, addEventListener() {} },
  performance: { now: () => now }, document: { hidden: false }, console,
};
vm.createContext(context);
vm.runInContext(body + ";globalThis.stage = createStage()", context);
const { stage } = context;
const host = { clientWidth: 390, clientHeight: 844, isConnected: true, offsetParent: {}, appendChild() {} };
stage.show(host, "arena");
assert(stage.arena.camera.fov > 70, "Portrait should widen the arena field of view");
host.clientWidth = 1280; host.clientHeight = 800; resize();
assert.equal(stage.arena.camera.fov, 42, "Desktop should restore the original field of view");
const fps = [];
stage.watchFps(value => fps.push(value));
for (now = 16; now <= 512; now += 16) loop(now);
const visibleUpdates = stage.arena.updates;
context.document.hidden = true;
for (; now <= 2512; now += 16) loop(now);
assert.equal(stage.arena.updates, visibleUpdates, "Hidden tabs must not animate");
context.document.hidden = false;
for (; now <= 3056; now += 16) loop(now);
assert(fps.length >= 2 && fps.at(-1) > 50, "Hidden time must not depress resumed FPS");
stage.world.drag = { x: 1, y: 1, moved: 0 };
stage.world.moveTarget = null;
handlers.pointercancel();
assert.equal(stage.world.drag, null, "Pointer cancellation must clear world dragging");
assert.equal(stage.world.moveTarget, null, "Cancellation must not create a walk target");
stage.world.drag = {};
handlers.lostpointercapture();
assert.equal(stage.world.drag, null, "Lost capture must clear world dragging");
assert(generatorDisposed && roomDisposed, "Temporary reflection resources must be disposed");
console.log("PASS: portrait/desktop framing, hidden-tab animation and FPS, pointer cancellation, reflection cleanup");
