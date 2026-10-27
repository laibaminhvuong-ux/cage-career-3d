// Post-processing: what turns a plain render into a finished frame. Ambient occlusion darkens
// contact points and creases (High), bloom makes lights, neon and sweat glints glow, then filmic
// tone mapping and a grade (contrast, saturation, warm highlights / cool shadows, vignette and a
// little film grain). Each view brings its own look (view.look); Low renders directly.
import * as THREE from "./vendor/three.module.min.js";
import { EffectComposer } from "./vendor/post/EffectComposer.js";
import { RenderPass } from "./vendor/post/RenderPass.js";
import { ShaderPass } from "./vendor/post/ShaderPass.js";
import { UnrealBloomPass } from "./vendor/post/UnrealBloomPass.js";
import { OutputPass } from "./vendor/post/OutputPass.js";
import { GTAOPass } from "./vendor/post/GTAOPass.js";

const STORE_KEY = "cc3d_quality";
export const QUALITIES = ["low", "medium", "high"];
/** What the Settings offer: Auto picks a level (and a render resolution) to keep each device smooth. */
export const QUALITY_MODES = ["auto", ...QUALITIES];

const GRADE = {
  uniforms: {
    tDiffuse: { value: null }, contrast: { value: 1.06 }, saturation: { value: 1.06 }, warmth: { value: 0.5 },
    vignette: { value: 0.3 }, grain: { value: 0.025 }, time: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float contrast, saturation, warmth, vignette, grain, time;
    varying vec2 vUv;
    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      col = (col - 0.5) * contrast + 0.5;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      // split toning: warm highlights, cool shadows
      col += warmth * (vec3(0.05, 0.02, -0.035) * smoothstep(0.45, 1.0, l) + vec3(-0.02, 0.0, 0.035) * (1.0 - smoothstep(0.0, 0.35, l)));
      vec2 d = vUv - 0.5;
      col *= 1.0 - vignette * dot(d, d) * 2.4;
      float n = fract(sin(dot(vUv * 1024.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * grain;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
};

const DEFAULT_LOOK = { bloom: [0.3, 0.4, 0.93], ao: 0.4, contrast: 1.06, saturation: 1.06, warmth: 0.5, vignette: 0.3, grain: 0.02 };

/** Phones and small screens start on Medium, everything else on High. */
function defaultQuality() {
  const small = Math.min(screen.width, screen.height) < 700 || matchMedia("(pointer: coarse)").matches;
  return small ? "medium" : "high";
}

export function createPost(renderer) {
  let mode = null;
  try { mode = localStorage.getItem(STORE_KEY); } catch { /* storage blocked */ }
  if (!QUALITY_MODES.includes(mode)) mode = "auto";
  // the level actually drawn: the chosen one, or Auto's current pick
  let quality = mode === "auto" ? defaultQuality() : mode;
  const size = new THREE.Vector2(1, 1);
  const chains = new Map(); // view -> { composer, bloom, ao, grade }

  const build = (view) => {
    const look = { ...DEFAULT_LOOK, ...(view.look || {}) };
    // debugging aid: ?post=nobloom / noao / nograde switches parts off
    const dbg = new URLSearchParams(location.search).get("post") || "";
    const pr = renderer.getPixelRatio();
    // a multisampled HDR target: smooth edges and room for bright lights to bloom
    const target = new THREE.WebGLRenderTarget(size.x * pr, size.y * pr, { type: THREE.HalfFloatType, samples: 4 });
    const composer = new EffectComposer(renderer, target);
    composer.setPixelRatio(pr);
    composer.setSize(size.x, size.y);
    composer.addPass(new RenderPass(view.scene, view.camera));
    let ao = null;
    if (quality === "high" && look.ao && !dbg.includes("noao")) {
      ao = new GTAOPass(view.scene, view.camera, size.x, size.y);
      ao.output = GTAOPass.OUTPUT.Default;
      ao.blendIntensity = 1;
      ao.updateGtaoMaterial({ radius: look.ao, distanceExponent: 1.5, thickness: 1, scale: 1, samples: 12 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      composer.addPass(ao);
    }
    // tone map first, then bloom on the display image: only what is near white (lamps, neon,
    // sweat highlights) glows, not a whole brightly lit canvas
    composer.addPass(new OutputPass());
    const bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), ...look.bloom);
    if (!dbg.includes("nobloom")) composer.addPass(bloom);
    const grade = new ShaderPass(GRADE);
    for (const k of ["contrast", "saturation", "warmth", "vignette", "grain"]) grade.uniforms[k].value = look[k];
    if (!dbg.includes("nograde")) composer.addPass(grade);
    // every pass we made, attached or not, so changing quality frees all of them
    const c = { composer, bloom, ao, grade, owned: [...composer.passes, bloom, grade].filter((p, i, a) => a.indexOf(p) === i) };
    chains.set(view, c);
    return c;
  };

  const drop = () => {
    for (const c of chains.values()) {
      c.composer.renderTarget1.dispose();
      c.composer.renderTarget2.dispose();
      if (c.composer.copyPass && c.composer.copyPass.dispose) c.composer.copyPass.dispose();
      for (const p of c.owned) if (p.dispose) p.dispose();
      // materials the vendored passes forget in their own dispose()
      if (c.bloom.materialHighPassFilter) c.bloom.materialHighPassFilter.dispose();
      if (c.ao && c.ao.gtaoMaterial) c.ao.gtaoMaterial.dispose();
    }
    chains.clear();
  };

  return {
    render(view, dt) {
      if (quality === "low") {
        renderer.render(view.scene, view.camera);
        return;
      }
      const c = chains.get(view) || build(view);
      c.grade.uniforms.time.value = (c.grade.uniforms.time.value + dt * 60) % 1000;
      c.composer.render(dt);
    },
    setSize(w, h) {
      size.set(w, h);
      for (const c of chains.values()) {
        c.composer.setPixelRatio(renderer.getPixelRatio());
        c.composer.setSize(w, h);
        c.bloom.resolution.set(w / 2, h / 2);
      }
    },
    /** The setting ("auto", "low", "medium", "high"). */
    getQuality: () => mode,
    /** The level being drawn right now. */
    getLevel: () => quality,
    setQuality(q) {
      if (!QUALITY_MODES.includes(q)) return;
      mode = q;
      try { localStorage.setItem(STORE_KEY, q); } catch { /* ignore */ }
      if (q !== "auto") this.setLevel(q);
    },
    /** Auto (or a fixed setting) switches the drawn level; the old effect chains are freed. */
    setLevel(q) {
      if (!QUALITIES.includes(q) || q === quality) return;
      quality = q;
      drop();
    },
  };
}
