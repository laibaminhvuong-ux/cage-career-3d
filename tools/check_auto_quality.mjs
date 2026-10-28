// Exercise the real stage Auto tuner without a GPU, browser, or wall-clock delays.
// Run: node tools/check_auto_quality.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = fs.readFileSync(new URL('../web/arena3d.js', import.meta.url), 'utf8');
const start = source.indexOf('export function createStage()');
const end = source.indexOf('/** A promotion', start);
assert(start >= 0 && end > start, 'Stage controller boundaries exist');
const body = source.slice(start, end).replace('export function', 'function');
function fixture({ dpr = 1, phone = false, saved, blocked = false } = {}) {
  let now = 0, loop, renderer, mode = 'auto', level = 'high';
  const store = new Map(saved === undefined ? [] : [['cc3d_autostep', String(saved)]]);
  const canvas = { style: {}, addEventListener() {} };
  class View {
    constructor() { this.camera = { updateProjectionMatrix() {} }; this.scene = {}; }
    update() {} enter() {}
  }
  class Renderer {
    constructor() { renderer = this; this.shadowMap = {}; this.domElement = canvas; this.pr = 1; }
    setPixelRatio(pr) { this.pr = pr; } getPixelRatio() { return this.pr; }
    setSize() {} setAnimationLoop(fn) { loop = fn; } render() {}
  }
  const storage = {
    getItem(key) { if (blocked) throw Error('storage blocked'); return store.get(key) ?? null; },
    setItem(key, value) { if (blocked) throw Error('storage blocked'); store.set(key, String(value)); },
  };
  const context = {
    THREE: { WebGLRenderer: Renderer,
      PMREMGenerator: class { fromScene() { return { texture: {} }; } fromEquirectangular() { return { texture: {} }; } dispose() {} },
      Clock: class { getDelta() { return 0.016; } },
      MathUtils: { radToDeg: x => x * 180 / Math.PI, degToRad: x => x * Math.PI / 180 } },
    RoomEnvironment: class { dispose() {} }, setFighterEnv() {}, PreviewView: View, ArenaView: View, WorldView: View,
    ResizeObserver: class { observe() {} unobserve() {} },
    window: { devicePixelRatio: dpr, localStorage: storage, addEventListener() {} },
    screen: { width: phone ? 390 : 1440, height: phone ? 844 : 900 },
    matchMedia: () => ({ matches: phone }), localStorage: storage,
    performance: { now: () => now }, document: { hidden: false }, console,
    createPost: () => ({ getQuality: () => mode, getLevel: () => level,
      setQuality(q) { mode = q; if (q !== 'auto') level = q; },
      setLevel(q) { level = q; }, setSize() {}, render() {} }),
  };
  vm.createContext(context);
  vm.runInContext(body + ';globalThis.stage = createStage()', context);
  const stage = context.stage;
  assert.equal(typeof stage.autoTick, 'function', 'Auto tuner test hook is available');
  assert.equal(typeof stage.autoStep, 'function', 'Auto status test hook is available');
  stage.show({ clientWidth: 1100, clientHeight: 800, isConnected: true, offsetParent: {}, appendChild() {} }, 'arena');
  return { stage, store, context, renderer,
    tick(ms = 16) { now += ms; stage.autoTick(now, ms); },
    run(ms = 16, duration = 2000, render = false) { const until = now + duration; while (now < until) { now += ms; if (render) loop(now); else stage.autoTick(now, ms); } },
  };
}
for (const dpr of [1, 1.25, 2]) {
  const f = fixture({ dpr });
  assert.equal(f.stage.autoStep().index, 0, `Desktop ${dpr}x starts at richest rung`);
  assert.equal(f.stage.getAutoStatus().level, 'high');
  assert.equal(f.stage.getAutoStatus().scale, 100, 'Readout uses the released contract: share of device maximum');
  f.run(25); // 40 fps: slow enough for one rung, not the emergency two-rung drop.
  assert.equal(f.stage.autoStep().index, 1, 'Moderate pressure preserves High at lower resolution');
  assert.equal(f.stage.getAutoStatus().level, 'high');
  assert(Math.abs(f.renderer.pr - Math.min(dpr, 1.75) * 0.85) < 0.001);
}
console.log('PASS: 1x/1.25x/retina desktops start High; first downstep preserves effects and reduces pixels');
{
  const f = fixture(); f.run(100);
  assert.equal(f.stage.autoStep().index, 2, 'Severe slowness drops two rungs');
  f.run(16, 12000);
  assert.equal(f.stage.autoStep().index, 1, 'Sustained headroom climbs one rung');
}
{
  const f = fixture();
  f.run(25); assert.equal(f.stage.autoStep().index, 1);
  f.run(16, 12000); assert.equal(f.stage.autoStep().index, 0);
  f.run(25); assert.equal(f.stage.autoStep().index, 1);
  f.run(16, 30000); assert.equal(f.stage.autoStep().index, 1, 'Twice-failed rung is not retried');
}
{
  const f = fixture({ dpr: 3, phone: true });
  const initial = f.stage.autoStep().index;
  assert.equal(f.stage.getAutoStatus().level, 'medium');
  f.run(16, 50000);
  assert.equal(f.stage.autoStep().index, initial, 'Phone cannot climb into High');
  f.run(25); assert(f.stage.autoStep().index > initial);
  f.run(16, 50000); assert.equal(f.stage.autoStep().index, initial, 'Phone recovers only to its ceiling');
}
console.log('PASS: slow/fast adaptation, two-rung emergency drop, twice-failed retry limit, phone ceiling');
{
  const f = fixture(); f.run(25);
  assert.equal(f.store.has('cc3d_autostep'), false, 'Transient downstep is not persisted');
  f.run(16, 10000);
  const saved = f.store.get('cc3d_autostep');
  assert.notEqual(saved, undefined, 'Auto persists its chosen rung');
  const restored = fixture({ saved });
  assert.equal(restored.stage.autoStep().index, f.stage.autoStep().index, 'Restart honours saved rung');
  assert(fixture({ saved: -999 }).stage.autoStep().index >= 0);
  const max = fixture({ saved: 999 }).stage.autoStep();
  assert(max.index >= 0 && max.index < max.ladder.length, 'Out-of-range save cannot break stage');
  assert.equal(fixture({ saved: 'invalid' }).stage.autoStep().index, 0);
  assert.equal(fixture({ saved: 0, phone: true }).stage.autoStep().index, 2, 'Saved desktop High cannot bypass phone ceiling');
  assert.doesNotThrow(() => fixture({ blocked: true }).run(25), 'Storage denial cannot break adaptation');
}
{
  const f = fixture(); const initial = f.stage.autoStep().index;
  for (let i = 0; i < 20; i++) f.tick(2000);
  assert.equal(f.stage.autoStep().index, initial, 'Long tab gaps are ignored');
  f.context.document.hidden = true; f.run(100, 10000, true);
  assert.equal(f.stage.autoStep().index, initial, 'Hidden stage does not tune');
  f.context.document.hidden = false; f.run(16, 2200, true);
  assert.equal(f.stage.autoStep().index, initial, 'Resume does not count hidden time');
}
for (const mode of ['low', 'medium', 'high']) {
  const f = fixture({ saved: 5 }); f.stage.setQuality(mode);
  const initial = f.stage.autoStep().index;
  f.run(100, 10000); f.run(16, 20000);
  assert.equal(f.stage.getQuality(), mode); assert.equal(f.stage.getAutoStatus().level, mode);
  assert.equal(f.stage.autoStep().index, initial, 'Fixed quality disables tuner');
  assert.equal(f.renderer.pr, 1, 'Fixed setting restores full device resolution');
}
{
  const f = fixture(); f.stage.setFps(30); f.run(1000 / 30, 15000, true);
  assert.equal(f.stage.autoStep().index, 0, 'Intentional 30 FPS cap is not mistaken for poor performance');
}
console.log('PASS: saved rung, invalid/blocked storage, long gaps, hidden/resumed tabs, fixed modes and FPS cap');
