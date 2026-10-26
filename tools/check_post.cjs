// Run: node tools/check_post.cjs. Tests controller ownership, not WebGL visuals.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const source = fs.readFileSync(path.join(__dirname, "../web/post3d.js"), "utf8")
  .replace(/^import .*;\n/gm, "").replace(/export /g, "");
function check(search) {
  const resources = [];
  class Resource {
    constructor(label) { this.label = label; this.disposed = false; resources.push(this); }
    dispose() { this.disposed = true; }
  }
  class Vector2 {
    constructor(x, y) { this.set(x, y); }
    set(x, y) { this.x = x; this.y = y; return this; }
  }
  class Target extends Resource { constructor() { super("render target"); } }
  class Pass extends Resource {
    constructor() { super(new.target.name); this.uniforms = {}; this.resolution = new Vector2(1, 1); }
    setSize() {} updateGtaoMaterial() {} updatePdMaterial() {}
  }
  class ShaderPass extends Pass {
    constructor(shader) { super(); this.uniforms = JSON.parse(JSON.stringify(shader.uniforms)); }
  }
  class EffectComposer {
    constructor(renderer, target) {
      this.renderTarget1 = target; this.renderTarget2 = new Target();
      this.copyPass = new Resource("composer copyPass"); this.passes = [];
    }
    setPixelRatio() {} setSize() {} render() {}
    addPass(pass) { this.passes.push(pass); }
    dispose() { this.renderTarget1.dispose(); this.renderTarget2.dispose(); this.copyPass.dispose(); }
  }
  class GTAOPass extends Pass { static OUTPUT = { Default: 0 }; }
  const context = {
    THREE: { Vector2, WebGLRenderTarget: Target }, EffectComposer,
    RenderPass: class RenderPass extends Pass {}, ShaderPass,
    UnrealBloomPass: class UnrealBloomPass extends Pass {},
    OutputPass: class OutputPass extends Pass {}, GTAOPass,
    localStorage: { getItem: () => "high", setItem() {} },
    screen: { width: 1280, height: 800 }, matchMedia: () => ({ matches: false }),
    location: { search }, URLSearchParams,
  };
  vm.createContext(context);
  vm.runInContext(source + ";globalThis.post=createPost({getPixelRatio:()=>1,render(){}})", context);
  context.post.setSize(640, 360);
  context.post.render({ scene: {}, camera: {} }, 0.016);
  context.post.setQuality("low");
  return resources.filter(r => !r.disposed).map(r => r.label);
}
let failures = 0;
for (const search of ["", "?post=nobloom,nograde"]) {
  const leaked = check(search);
  try { assert.deepEqual(leaked, []); console.log("PASS: quality cleanup", search || "normal"); }
  catch { failures++; console.error("FAIL: quality cleanup", search || "normal", "leaves allocated:", leaked.join(", ")); }
}
process.exitCode = failures ? 1 : 0;
