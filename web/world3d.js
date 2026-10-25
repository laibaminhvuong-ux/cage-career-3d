// The open world: a small city the fighter walks (or drives) around between fights. Home changes
// with the house they own, their cars sit in the driveway, pets follow them around, and their
// partner and kids wait at home. Every place in town opens a screen in the app.
import * as THREE from "./vendor/three.module.min.js";
import { Fighter3D, LOOK_OPTIONS, parseLook, lookFromName } from "./fighter3d.js";

const TAU = Math.PI * 2;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const angleLerp = (a, b, k) => {
  let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return a + d * k;
};

// ------------------------------------------------------------------ shared helpers

const mats = {};
function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  return mats[key] || (mats[key] = new THREE.MeshStandardMaterial({ color, roughness: 0.75, ...opts }));
}
function box(w, h, d, color, opts) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof color === "string" ? mat(color, opts) : color);
  m.castShadow = m.receiveShadow = true;
  return m;
}
function at(obj, x, y, z, parent) {
  obj.position.set(x, y, z);
  if (parent) parent.add(obj);
  return obj;
}
function cyl(rt, rb, h, color, seg = 12, opts) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof color === "string" ? mat(color, opts) : color);
  m.castShadow = m.receiveShadow = true;
  return m;
}
function sphere(r, color, opts) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), typeof color === "string" ? mat(color, opts) : color);
  m.castShadow = true;
  return m;
}
function textTexture(text, { w = 512, h = 128, bg = "#111", fg = "#fff", font = "bold 72px Arial", border = null } = {}) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  if (border) {
    g.strokeStyle = border;
    g.lineWidth = 10;
    g.strokeRect(5, 5, w - 10, h - 10);
  }
  g.fillStyle = fg;
  g.font = font;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function sign(text, w, h, opts) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: textTexture(text, opts), toneMapped: false }));
  return m;
}
/** A floating label that always faces the camera. */
function label(text, color = "#ffffff") {
  const tex = textTexture(text, { w: 512, h: 128, bg: "rgba(10,12,16,0.78)", fg: color, font: "bold 60px Arial", border: color });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false, toneMapped: false }));
  s.scale.set(5, 1.25, 1);
  return s;
}
function windowsTexture(cols, rows, lit = "#ffe9a8", dark = "#2a3340", frame = "#d9d4c7") {
  const c = document.createElement("canvas");
  c.width = cols * 32;
  c.height = rows * 40;
  const g = c.getContext("2d");
  g.fillStyle = frame;
  g.fillRect(0, 0, c.width, c.height);
  for (let x = 0; x < cols; x++) for (let y = 0; y < rows; y++) {
    g.fillStyle = Math.random() < 0.3 ? lit : dark;
    g.fillRect(x * 32 + 6, y * 40 + 8, 20, 26);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
/** A triangular roof (a prism) of width w, depth d and height h. */
function roof(w, h, d, color) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false });
  g.translate(0, 0, -d / 2);
  const m = new THREE.Mesh(g, mat(color));
  m.castShadow = m.receiveShadow = true;
  return m;
}
function tree(kind = "round") {
  const g = new THREE.Group();
  if (kind === "palm") {
    const trunk = cyl(0.14, 0.22, 5, "#8a6a43", 8);
    trunk.position.y = 2.5;
    trunk.rotation.z = 0.08;
    g.add(trunk);
    for (let i = 0; i < 7; i++) {
      const leaf = box(2.6, 0.06, 0.5, "#2f8f46");
      leaf.geometry.translate(1.3, 0, 0);
      leaf.position.set(0.2, 5, 0);
      leaf.rotation.set(0, (i / 7) * TAU, -0.35);
      g.add(leaf);
    }
    return g;
  }
  at(cyl(0.18, 0.26, 2, "#6b4a2b", 8), 0, 1, 0, g);
  const leaf = sphere(1.4 + Math.random() * 0.5, kind === "dark" ? "#2d6a3a" : "#3f8f4a");
  leaf.position.y = 3;
  leaf.scale.y = 1.15;
  g.add(leaf);
  return g;
}
function lamp() {
  const g = new THREE.Group();
  at(cyl(0.07, 0.09, 4.2, "#2a2d33", 8), 0, 2.1, 0, g);
  at(box(0.9, 0.08, 0.12, "#2a2d33"), 0.4, 4.15, 0, g);
  at(new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: "#fff3c4" })), 0.8, 4.05, 0, g);
  return g;
}

// ------------------------------------------------------------------ textures

/** A sky: deep blue overhead fading to a hazy horizon, with soft clouds. */
function skyTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 512;
  const g = c.getContext("2d");
  const gr = g.createLinearGradient(0, 0, 0, 512);
  gr.addColorStop(0, "#3d7fd1");
  gr.addColorStop(0.55, "#8cc0ee");
  gr.addColorStop(1, "#e6f0f7");
  g.fillStyle = gr;
  g.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * 1024, y = 60 + Math.random() * 260, r = 30 + Math.random() * 70;
    for (let k = 0; k < 7; k++) {
      const cg = g.createRadialGradient(x + k * r * 0.4, y + Math.sin(k) * 10, 0, x + k * r * 0.4, y + Math.sin(k) * 10, r);
      cg.addColorStop(0, "rgba(255,255,255,0.55)");
      cg.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = cg;
      g.fillRect(x + k * r * 0.4 - r, y - r, r * 2, r * 2);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.mapping = THREE.EquirectangularReflectionMapping;
  return t;
}

const texCache = {};
/** Mottled noise (grass, asphalt). repeat = how many times it tiles across 260 m. */
function noiseTexture(base, dark, light, repeat) {
  const key = base + dark + light;
  if (!texCache[key]) {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d");
    g.fillStyle = base;
    g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) {
      g.fillStyle = Math.random() < 0.5 ? dark : light;
      g.globalAlpha = 0.12 + Math.random() * 0.25;
      g.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    g.globalAlpha = 1;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    texCache[key] = t;
  }
  const t = texCache[key];
  t.repeat.set(repeat, repeat);
  return t;
}

/** Concrete sidewalk slabs. */
function tiles() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = "#c7c3b9";
  g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 500; i++) {
    g.fillStyle = `rgba(80,75,65,${Math.random() * 0.12})`;
    g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
  }
  g.strokeStyle = "rgba(70,66,58,0.55)";
  g.lineWidth = 2;
  g.strokeRect(1, 1, 126, 126);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** A building wall: rendered plaster with rows of windows and a darker base. */
function facade(color, w, h) {
  const c = document.createElement("canvas");
  const pxw = Math.round(w * 40), pxh = Math.round(h * 40);
  c.width = pxw;
  c.height = pxh;
  const g = c.getContext("2d");
  g.fillStyle = color;
  g.fillRect(0, 0, pxw, pxh);
  for (let i = 0; i < pxw * pxh * 0.004; i++) {
    g.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`;
    g.fillRect(Math.random() * pxw, Math.random() * pxh, 2, 2);
  }
  g.fillStyle = "rgba(0,0,0,0.25)";
  g.fillRect(0, pxh - 26, pxw, 26);
  for (let y = 40; y < pxh - 120; y += 110) {
    for (let x = 30; x < pxw - 60; x += 90) {
      g.fillStyle = "#2a3644";
      g.fillRect(x, y, 50, 64);
      g.fillStyle = "rgba(170,210,240,0.35)";
      g.fillRect(x + 4, y + 4, 20, 56);
      g.strokeStyle = "rgba(255,255,255,0.5)";
      g.lineWidth = 3;
      g.strokeRect(x, y, 50, 64);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ------------------------------------------------------------------ cars

const CAR_SHAPES = {
  hatch: { L: 3.8, W: 1.7, H: 0.75, cab: [2.2, 0.62, -0.25], wheel: 0.33 },
  pickup: { L: 5.3, W: 1.95, H: 0.95, cab: [1.9, 0.78, 0.55], wheel: 0.42, bed: true },
  sedan: { L: 4.7, W: 1.85, H: 0.7, cab: [2.4, 0.6, -0.1], wheel: 0.35 },
  muscle: { L: 4.9, W: 1.95, H: 0.72, cab: [2.0, 0.55, -0.35], wheel: 0.38, stripes: true, scoop: true },
  suv: { L: 4.9, W: 2.0, H: 1.0, cab: [3.2, 0.8, -0.2], wheel: 0.42 },
  super: { L: 4.5, W: 2.0, H: 0.55, cab: [1.9, 0.5, -0.1], wheel: 0.36, wedge: true },
  hyper: { L: 4.7, W: 2.05, H: 0.5, cab: [1.7, 0.48, -0.05], wheel: 0.37, wedge: true, wing: true },
};

/** A car facing +z: a side profile with curves, extruded across the width, with a glass cabin on top. */
export function makeCar(id, color) {
  const s = CAR_SHAPES[id] || CAR_SHAPES.sedan;
  const g = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({ color, roughness: 0.28, metalness: 0.55, clearcoat: 1, clearcoatRoughness: 0.08 });
  const glass = new THREE.MeshPhysicalMaterial({ color: "#16202c", roughness: 0.05, metalness: 0.3, clearcoat: 1 });
  const black = mat("#121212", { roughness: 0.8 });
  const clear = s.wheel + 0.08, L = s.L, W = s.W, belt = clear + s.H;
  const [cl, ch, cz] = s.cab;
  const front = L / 2, rear = -L / 2;
  // lower body: bumper to bumper along the belt line, with a sloped nose
  const side = new THREE.Shape();
  side.moveTo(rear + 0.1, clear);
  side.lineTo(front - 0.15, clear);
  side.quadraticCurveTo(front, clear, front, clear + s.H * (s.wedge ? 0.35 : 0.5));
  side.quadraticCurveTo(front - 0.05, belt - (s.wedge ? 0.05 : 0), front - (s.wedge ? 0.9 : 0.5), belt);
  side.lineTo(rear + 0.25, belt);
  side.quadraticCurveTo(rear, belt, rear, belt - s.H * 0.35);
  side.lineTo(rear, clear + 0.1);
  side.quadraticCurveTo(rear, clear, rear + 0.1, clear);
  const bodyGeo = new THREE.ExtrudeGeometry(side, { depth: W - 0.12, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3, curveSegments: 8 });
  bodyGeo.translate(0, 0, -(W - 0.12) / 2);
  bodyGeo.rotateY(-Math.PI / 2);
  const body = new THREE.Mesh(bodyGeo, paint);
  body.castShadow = body.receiveShadow = true;
  g.add(body);
  // the cabin: sloped windscreen and rear window
  const c0 = cz - cl / 2, c1 = cz + cl / 2;
  const cab = new THREE.Shape();
  cab.moveTo(c0 - 0.15, belt);
  cab.lineTo(c1 + 0.35, belt);
  cab.lineTo(c1 - 0.15, belt + ch);
  cab.lineTo(c0 + 0.2, belt + ch);
  cab.closePath();
  const cabGeo = new THREE.ExtrudeGeometry(cab, { depth: W * 0.84, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
  cabGeo.translate(0, 0, -W * 0.42);
  cabGeo.rotateY(-Math.PI / 2);
  const cabin = new THREE.Mesh(cabGeo, glass);
  cabin.castShadow = true;
  g.add(cabin);
  const roofM = new THREE.Mesh(new THREE.BoxGeometry(W * 0.82, 0.05, Math.max(0.4, cl - 0.55)), paint);
  roofM.position.set(0, belt + ch + 0.02, (c0 + c1) / 2 - 0.02);
  g.add(roofM);
  if (s.bed) {
    for (const x of [-1, 1]) at(box(0.08, 0.4, L * 0.38, paint), x * (W / 2 - 0.04), belt + 0.2, -L * 0.28, g);
    at(box(W, 0.4, 0.08, paint), 0, belt + 0.2, -L * 0.47, g);
  }
  if (s.stripes) for (const x of [-0.18, 0.18]) at(box(0.18, 0.02, L * 0.95, "#f2f2f2"), x, belt + 0.035, 0, g);
  if (s.scoop) at(box(0.6, 0.12, 0.8, black), 0, belt + 0.06, L * 0.25, g);
  if (s.wing) {
    at(box(W * 0.95, 0.05, 0.36, black), 0, belt + 0.42, rear + 0.3, g);
    for (const x of [-0.6, 0.6]) at(box(0.05, 0.4, 0.1, black), x, belt + 0.2, rear + 0.3, g);
  }
  // mirrors and a grille
  for (const x of [-1, 1]) at(box(0.18, 0.1, 0.1, paint), x * (W / 2 + 0.05), belt + 0.1, c1 + 0.2, g);
  at(box(W * 0.5, s.H * 0.25, 0.04, black), 0, clear + s.H * 0.35, front + 0.03, g);
  const wheelGeo = new THREE.CylinderGeometry(s.wheel, s.wheel, 0.26, 24);
  wheelGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(s.wheel * 0.62, s.wheel * 0.62, 0.28, 10);
  rimGeo.rotateZ(Math.PI / 2);
  const rimM = new THREE.MeshStandardMaterial({ color: "#d4d7dc", metalness: 0.95, roughness: 0.25 });
  const wheels = [];
  for (const x of [-1, 1]) for (const z of [-1, 1]) {
    const w = new THREE.Group();
    w.position.set(x * (W / 2 - 0.1), s.wheel, z * L * 0.32);
    const t = new THREE.Mesh(wheelGeo, black);
    t.castShadow = true;
    const rim = new THREE.Mesh(rimGeo, rimM);
    w.add(t, rim);
    // spokes, so turning wheels read as turning
    for (let k = 0; k < 5; k++) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.29, s.wheel * 1.1, 0.04), rimM);
      sp.rotation.x = (k / 5) * Math.PI;
      w.add(sp);
    }
    g.add(w);
    wheels.push(w);
  }
  const lights = new THREE.MeshBasicMaterial({ color: "#fff7d6" });
  const tail = new THREE.MeshBasicMaterial({ color: "#d01818" });
  for (const x of [-1, 1]) {
    at(new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.1, 0.05), lights), x * (W / 2 - 0.3), clear + s.H * 0.62, front - 0.02, g);
    at(new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.09, 0.05), tail), x * (W / 2 - 0.3), belt - s.H * 0.3, rear - 0.01, g);
  }
  g.userData.wheels = wheels;
  g.userData.radius = s.wheel;
  return g;
}

// ------------------------------------------------------------------ pets

/** A four-legged animal (dog, cat, tiger) or a parrot. Returns { root, step(dt, speed) }. */
export function makePet(kind) {
  const root = new THREE.Group();
  if (kind === "parrot") {
    const body = sphere(0.14, "#27a845");
    body.scale.set(0.8, 1, 1.3);
    root.add(body);
    at(sphere(0.09, "#d62828"), 0, 0.1, 0.13, root);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 6), mat("#f4b942"));
    beak.rotation.x = Math.PI / 2;
    at(beak, 0, 0.09, 0.24, root);
    const tail = box(0.08, 0.02, 0.3, "#1d4ed8");
    at(tail, 0, -0.03, -0.25, root);
    const wings = [];
    for (const x of [-1, 1]) {
      const w = box(0.3, 0.02, 0.16, "#1f8f3a");
      w.geometry.translate(x * 0.15, 0, 0);
      at(w, x * 0.06, 0.03, 0, root);
      wings.push(w);
    }
    let t = Math.random() * 10;
    return {
      root, fly: true,
      step(dt) {
        t += dt;
        wings[0].rotation.z = Math.sin(t * 22) * 0.7;
        wings[1].rotation.z = -Math.sin(t * 22) * 0.7;
      },
    };
  }
  const spec = {
    dog: { s: 1, fur: "#8a5a2b", belly: "#c99b67", ear: "drop" },
    cat: { s: 0.6, fur: "#d8893a", belly: "#f2d1a8", ear: "point" },
    tiger: { s: 2.0, fur: "#e0781e", belly: "#f4ead8", ear: "round", stripes: true },
  }[kind] || { s: 1, fur: "#8a5a2b", belly: "#c99b67", ear: "drop" };
  const g = new THREE.Group();
  g.scale.setScalar(spec.s);
  root.add(g);
  const fur = mat(spec.fur);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.36, 6, 12), fur);
  body.rotation.x = Math.PI / 2;
  body.position.y = 0.38;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Group();
  head.position.set(0, 0.52, 0.27);
  g.add(head);
  const skull = sphere(0.12, spec.fur);
  head.add(skull);
  const snout = box(0.1, 0.08, 0.12, spec.belly);
  at(snout, 0, -0.03, 0.11, head);
  at(sphere(0.022, "#111"), 0, 0.0, 0.18, head);
  for (const x of [-1, 1]) {
    at(sphere(0.018, "#111"), x * 0.05, 0.04, 0.1, head);
    if (spec.ear === "point") {
      const e = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 4), fur);
      at(e, x * 0.07, 0.12, 0, head);
    } else if (spec.ear === "round") {
      at(sphere(0.04, spec.fur), x * 0.08, 0.1, -0.01, head);
    } else {
      const e = box(0.04, 0.12, 0.07, "#5c3a1b");
      at(e, x * 0.11, 0.02, 0, head).rotation.z = x * 0.3;
    }
  }
  if (spec.stripes) {
    for (let i = 0; i < 5; i++) {
      const st = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.015, 4, 16, Math.PI), mat("#1a1209"));
      st.rotation.set(0, Math.PI / 2, 0);
      at(st, 0, 0.38, -0.18 + i * 0.09, g);
    }
  }
  const tail = box(0.03, 0.03, 0.26, spec.fur);
  tail.geometry.translate(0, 0, -0.13);
  at(tail, 0, 0.45, -0.28, g);
  tail.rotation.x = kind === "cat" ? -1.0 : -0.5;
  const legs = [];
  for (const x of [-1, 1]) for (const z of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(x * 0.08, 0.32, z * 0.17);
    const m = box(0.06, 0.32, 0.06, spec.fur);
    m.position.y = -0.16;
    leg.add(m);
    g.add(leg);
    legs.push({ leg, ph: (x === z ? 0 : Math.PI) });
  }
  let t = Math.random() * 10;
  return {
    root, fly: false,
    step(dt, speed) {
      t += dt * (4 + speed * 3);
      const a = Math.min(0.7, speed * 0.35);
      for (const l of legs) l.leg.rotation.x = Math.sin(t + l.ph) * a;
      tail.rotation.y = Math.sin(t * 1.5) * 0.4;
      head.rotation.y = Math.sin(t * 0.3) * 0.15;
    },
  };
}

// ------------------------------------------------------------------ houses

/** The fighter's home for each house tier, facing +z (toward the street). */
function makeHouse(tier) {
  const g = new THREE.Group();
  const door = (x, z, h = 2.2) => at(box(1.1, h, 0.12, "#5a3a22"), x, h / 2, z, g);
  if (tier === 0) {
    const b = box(13, 13, 10, new THREE.MeshStandardMaterial({ map: windowsTexture(10, 9), roughness: 0.8 }));
    b.position.y = 6.5;
    g.add(b);
    for (let y = 2.5; y < 13; y += 3.2) at(box(13.2, 0.15, 1, "#9aa0a8"), 0, y, 5.4, g);
    door(0, 5.07);
    const s = sign("APARTMENTS", 4, 0.8, { bg: "#20252c", fg: "#e7e2d6" });
    at(s, 0, 3, 5.08, g);
    return g;
  }
  if (tier === 1) {
    at(box(8, 3.4, 7, "#e8dcc3"), 0, 1.7, 0, g);
    at(roof(9, 2.4, 7.6, "#8b3a2b"), 0, 3.4, 0, g);
    door(0, 3.56);
    for (const x of [-2.6, 2.6]) at(box(1.4, 1.1, 0.1, "#7fb3d5", { roughness: 0.1 }), x, 1.8, 3.56, g);
    for (let x = -6; x <= 6; x += 1) if (Math.abs(x) > 1.5) at(box(0.12, 0.9, 0.12, "#f4f4f4"), x, 0.45, 7.5, g);
    at(box(12.2, 0.1, 0.1, "#f4f4f4"), 0, 0.8, 7.5, g);
    return g;
  }
  if (tier === 2) {
    at(box(11, 6.2, 8, "#d9e1e8"), 0, 3.1, 0, g);
    at(roof(12, 3, 8.6, "#3d4a5c"), 0, 6.2, 0, g);
    at(box(5, 3.2, 6, "#c7cfd8"), 8, 1.6, 1, g);
    at(box(4.2, 2.6, 0.1, "#ffffff"), 8, 1.3, 4.02, g);
    at(box(11.4, 0.25, 2.2, "#b8a48a"), 0, 0.12, 5.1, g);
    for (const x of [-5, -1.5, 1.5, 5]) at(cyl(0.12, 0.12, 3, "#ffffff"), x, 1.6, 5.9, g);
    at(box(11.6, 0.2, 2.6, "#ffffff"), 0, 3.15, 5.1, g);
    door(0, 4.06);
    for (const x of [-3.5, 3.5]) for (const y of [1.6, 4.4]) at(box(1.6, 1.2, 0.1, "#7fb3d5", { roughness: 0.1 }), x, y, 4.06, g);
    at(box(1.6, 1.2, 0.1, "#7fb3d5", { roughness: 0.1 }), 0, 4.4, 4.06, g);
    return g;
  }
  const glass = mat("#9ccbe6", { roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.75 });
  const pool = (w, d, x, z) => {
    at(box(w + 0.8, 0.3, d + 0.8, "#e9e4da"), x, 0.15, z, g);
    const water = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), mat("#2ab0e0", { roughness: 0.05, metalness: 0.2 }));
    at(water, x, 0.31, z, g);
  };
  if (tier === 3) {
    at(box(14, 3.6, 9, "#f5f5f2"), 0, 1.8, -1, g);
    at(box(10, 3.4, 8, "#f5f5f2"), -2, 5.3, -1.5, g);
    at(box(14.6, 0.3, 9.6, "#2b2b2b"), 0, 3.65, -1, g);
    at(box(10.6, 0.3, 8.6, "#2b2b2b"), -2, 7.1, -1.5, g);
    const front = new THREE.Mesh(new THREE.BoxGeometry(12, 3.2, 0.1), glass);
    at(front, 0, 1.8, 3.52, g);
    at(new THREE.Mesh(new THREE.BoxGeometry(8, 3, 0.1), glass), -2, 5.3, 2.52, g);
    pool(8, 3.6, 3, 7);
    for (const x of [-8, 9]) at(tree("palm"), x, 0, 6, g);
    door(-5.5, 3.6);
    return g;
  }
  // the mega-mansion
  at(box(18, 7, 11, "#f2ead9"), 0, 3.5, -2, g);
  for (const x of [-12.5, 12.5]) at(box(7, 5.5, 9, "#eee4d0"), x, 2.75, -1, g);
  at(roof(19, 3.2, 11.6, "#5b4636"), 0, 7, -2, g);
  for (const x of [-12.5, 12.5]) at(roof(7.6, 2.4, 9.6, "#5b4636"), x, 5.5, -1, g);
  for (const x of [-5, -2.5, 0, 2.5, 5]) at(cyl(0.3, 0.35, 6.4, "#ffffff", 14), x, 3.2, 4.6, g);
  at(box(12, 0.5, 2.6, "#ffffff"), 0, 6.6, 4.6, g);
  at(roof(12.4, 1.6, 2.8, "#ffffff"), 0, 6.85, 4.6, g);
  at(box(12, 0.4, 3.2, "#e0d6c2"), 0, 0.2, 4.8, g);
  for (const x of [-6.5, -3.5, 3.5, 6.5]) for (const y of [1.8, 4.8]) at(box(1.4, 1.8, 0.1, "#7fb3d5", { roughness: 0.1 }), x, y, 3.56, g);
  door(0, 3.56, 3);
  pool(10, 4, -9, 9);
  // fountain
  at(cyl(1.8, 2, 0.6, "#e9e4da", 20), 9, 0.3, 9, g);
  at(new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.05, 20), mat("#2ab0e0", { roughness: 0.05 })), 9, 0.58, 9, g);
  at(cyl(0.2, 0.3, 1.6, "#e9e4da"), 9, 1.1, 9, g);
  at(sphere(0.35, "#e9e4da"), 9, 2.0, 9, g);
  for (const x of [-16, -14, 15, 17]) at(tree("palm"), x, 0, 9, g);
  // gate
  for (const x of [-3, 3]) at(box(0.6, 2.6, 0.6, "#e0d6c2"), x, 1.3, 13.5, g);
  return g;
}

// ------------------------------------------------------------------ town layout

/** Places you can walk into. door = where you stand to go in. */
export const PLACES = [
  { id: "home", name: "Home", icon: "🏠", color: "#f4b942", door: [-38, -9] },
  { id: "club", name: "Nightclub", icon: "🪩", color: "#c084fc", door: [-12, -9] },
  { id: "ink", name: "Ink Studio", icon: "🖋️", color: "#94a3b8", door: [-1.5, -9] },
  { id: "cafe", name: "Café", icon: "☕", color: "#fca5a5", door: [8, -9] },
  { id: "gym", name: "Gym", icon: "🥊", color: "#f87171", door: [28, -9] },
  { id: "cars", name: "Car Dealer", icon: "🚗", color: "#60a5fa", door: [-34, 9] },
  { id: "realty", name: "Realtor", icon: "🏡", color: "#34d399", door: [-12, 9] },
  { id: "pets", name: "Pet Shop", icon: "🐾", color: "#fbbf24", door: [8, 9] },
  { id: "arena", name: "GFC Arena", icon: "🏆", color: "#f4b942", door: [30, 9] },
];

export class WorldView {
  constructor() {
    const scene = (this.scene = new THREE.Scene());
    scene.background = skyTexture();
    scene.fog = new THREE.Fog("#b8d6f0", 45, 110);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 300);
    // the sky reflection (scene.environment, set by the stage) provides most of the fill light
    scene.add(new THREE.HemisphereLight("#dff0ff", "#5a6b43", 0.3));
    const sun = (this.sun = new THREE.DirectionalLight("#fff1d6", 1.9));
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = sc.bottom = -30;
    sc.right = sc.top = 30;
    sc.near = 1;
    sc.far = 120;
    sun.shadow.bias = -0.0005;
    scene.add(sun, sun.target);

    this.exposure = 0.78; // daylight plus sky reflections: a touch darker than the arena
    this.solids = []; // [minX, minZ, maxX, maxZ] rectangles you can't walk through
    this.buildTown();

    this.player = null;
    this.pos = new THREE.Vector3(-38, 0, -5);
    this.heading = Math.PI;
    this.moveTarget = null;
    this.keys = new Set();
    this.driving = null; // car model while driving
    this.speedNow = 0;
    this.camYaw = 0;
    this.camPitch = 0.42;
    this.active = false;
    this.near = null;
    this.onNear = null;
    this.onEnter = null;
    this.key = "";
    this.pets = [];
    this.home = null;
    this.family = [];
    this.garage = [];

    addEventListener("keydown", (e) => {
      if (!this.active || /INPUT|TEXTAREA|SELECT/.test((e.target && e.target.tagName) || "")) return;
      const k = e.key.toLowerCase();
      if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "shift"].includes(k)) {
        this.keys.add(k);
        this.moveTarget = null;
        e.preventDefault();
      }
      if ((k === "e" || k === "enter") && this.near && this.onEnter) this.onEnter(this.near.id);
    });
    addEventListener("keyup", (e) => this.keys.delete(e.key.toLowerCase()));
    addEventListener("blur", () => this.keys.clear());
  }

  solid(x0, z0, x1, z1) {
    this.solids.push([Math.min(x0, x1), Math.min(z0, z1), Math.max(x0, x1), Math.max(z0, z1)]);
  }

  buildTown() {
    const S = this.scene;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(260, 260), new THREE.MeshStandardMaterial({ map: noiseTexture("#5f9a45", "#4f8a3a", "#78ae58", 60), roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    S.add(ground);
    this.ground = ground;
    // main street with sidewalks, and two side streets
    const road = (w, d, x, z) => {
      const tex = noiseTexture("#3b3e44", "#2f3237", "#4a4d53", 1).clone();
      tex.needsUpdate = true;
      tex.repeat.set(w / 6, d / 6);
      const r = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92 }));
      r.rotation.x = -Math.PI / 2;
      r.position.set(x, 0.01, z);
      r.receiveShadow = true;
      S.add(r);
    };
    road(130, 10, 0, 0);
    road(10, 90, -54, 0);
    road(10, 90, 54, 0);
    for (const z of [-6.2, 6.2]) {
      const swTex = tiles();
      swTex.repeat.set(130 / 1.2, 2);
      const sw = box(130, 0.15, 2.4, new THREE.MeshStandardMaterial({ map: swTex, roughness: 0.9 }));
      sw.position.set(0, 0.075, z);
      S.add(sw);
    }
    for (let x = -60; x < 60; x += 6) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.18), new THREE.MeshBasicMaterial({ color: "#f2e7b6" }));
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.02, 0);
      S.add(dash);
    }
    for (let x = -60; x <= 60; x += 12) for (const z of [-7, 7]) {
      const l = lamp();
      l.position.set(x, 0, z);
      l.rotation.y = z < 0 ? -Math.PI / 2 : Math.PI / 2;
      S.add(l);
    }

    const place = (id) => PLACES.find((p) => p.id === id);
    const shop = (id, w, h, d, cx, cz, color, text, signBg, extra) => {
      const g = new THREE.Group();
      g.position.set(cx, 0, cz);
      const front = cz < 0 ? 1 : -1; // faces the street
      const b = box(w, h, d, new THREE.MeshStandardMaterial({ map: facade(color, w, h), roughness: 0.85 }));
      b.position.y = h / 2;
      g.add(b);
      const sg = sign(text, Math.min(w - 1, 9), 1.4, { bg: signBg, fg: "#fff", font: "bold 64px Arial" });
      sg.position.set(0, h - 1.1, front * (d / 2 + 0.06));
      if (front < 0) sg.rotation.y = Math.PI;
      g.add(sg);
      const doorM = box(1.6, 2.5, 0.15, "#2b2b2b");
      doorM.position.set(0, 1.25, front * (d / 2 + 0.02));
      g.add(doorM);
      for (const x of [-w / 2 + 2, w / 2 - 2]) {
        const win = box(2.2, 1.8, 0.1, "#9ccbe6", { roughness: 0.1, metalness: 0.3 });
        win.position.set(x, 1.6, front * (d / 2 + 0.03));
        g.add(win);
      }
      if (extra) extra(g, front);
      S.add(g);
      this.solid(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2);
      const lb = label(place(id).icon + " " + place(id).name, place(id).color);
      lb.position.set(cx, h + 2.2, cz);
      S.add(lb);
      return g;
    };
    shop("club", 12, 6, 10, -12, -15, "#2a1f3d", "NIGHTCLUB", "#7c3aed", (g, f) => {
      for (let i = 0; i < 6; i++) {
        const neon = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: i % 2 ? "#f0abfc" : "#22d3ee" }));
        neon.position.set(0, 0.6 + i * 0.9, f * 5.06);
        g.add(neon);
      }
    });
    shop("cafe", 10, 4.5, 9, 8, -14.5, "#f1e3cf", "CAFÉ & DINING", "#9a3412", (g, f) => {
      const awning = box(9.6, 0.15, 2.2, "#c2410c");
      awning.position.set(0, 3.1, f * 5.4);
      awning.rotation.x = f * 0.25;
      g.add(awning);
      for (const x of [-3, 3]) {
        const t = new THREE.Group();
        at(cyl(0.6, 0.6, 0.06, "#ffffff", 16), 0, 0.85, 0, t);
        at(cyl(0.05, 0.05, 0.85, "#333"), 0, 0.42, 0, t);
        t.position.set(x, 0, f * 6.4);
        g.add(t);
      }
    });
    shop("gym", 16, 7, 12, 28, -16, "#30343b", "IRON GYM", "#b91c1c");
    shop("ink", 7, 4.2, 8, -1.5, -14, "#1f2329", "INK STUDIO", "#334155");
    shop("cars", 18, 6, 12, -34, 16, "#dbe7f3", "LUXURY MOTORS", "#1d4ed8", (g) => {
      // showroom cars
      [["super", "#f97316"], ["suv", "#111111"], ["muscle", "#1d4ed8"]].forEach(([id, c], i) => {
        const car = makeCar(id, c);
        car.position.set(-5 + i * 5, 0, -10 + 2);
        car.position.z = -9 + 3; // in front of the showroom
        car.position.set(-5 + i * 5, 0, -9);
        car.rotation.y = 0.5;
        g.add(car);
      });
    });
    shop("realty", 10, 5, 9, -12, 15, "#e6efe9", "PRIME REALTY", "#047857");
    shop("pets", 10, 4.5, 9, 8, 14.5, "#fff3d6", "PAWS PET SHOP", "#d97706", (g, f) => {
      const d = makePet("dog");
      d.root.position.set(-3, 0, f * 5.4);
      g.add(d.root);
      this.shopPet = d;
    });
    // the GFC arena: a big dome
    const arena = new THREE.Group();
    arena.position.set(30, 0, 22);
    const base = cyl(11, 11, 6, "#1f2937", 32);
    base.position.y = 3;
    arena.add(base);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(11, 32, 12, 0, TAU, 0, Math.PI / 2), mat("#cbd5e1", { metalness: 0.4, roughness: 0.35 }));
    dome.position.y = 6;
    dome.scale.y = 0.45;
    dome.castShadow = true;
    arena.add(dome);
    const gfc = sign("GFC ARENA", 10, 2, { bg: "#111", fg: "#f4b942", font: "bold 80px Arial", border: "#d62828" });
    gfc.position.set(0, 4.4, -11.05);
    gfc.rotation.y = Math.PI;
    arena.add(gfc);
    at(box(3, 3, 0.4, "#111"), 0, 1.5, -10.9, arena);
    this.scene.add(arena);
    this.solid(19, 11, 41, 33);
    const al = label("🏆 GFC Arena", "#f4b942");
    al.position.set(30, 13, 22);
    S.add(al);

    // trees and greenery around the edges
    const spots = [];
    for (let x = -64; x <= 64; x += 9) spots.push([x, -40], [x, 40]);
    for (let z = -32; z <= 32; z += 9) spots.push([-66, z], [66, z]);
    spots.push([18, -16], [-24, 18], [0, 18], [18, 18], [-22, -30], [40, -30], [-2, 30], [42, 36]);
    for (const [x, z] of spots) {
      const t = tree(Math.random() < 0.5 ? "round" : "dark");
      t.position.set(x + (Math.random() - 0.5) * 2, 0, z + (Math.random() - 0.5) * 2);
      S.add(t);
    }

    // the home lot (the house itself is swapped with the house you own)
    this.homeLot = new THREE.Group();
    this.homeLot.position.set(-38, 0, -25);
    S.add(this.homeLot);
    const drive = new THREE.Mesh(new THREE.PlaneGeometry(22, 9), mat("#b9b3a6", { roughness: 0.95 }));
    drive.rotation.x = -Math.PI / 2;
    drive.position.set(-38, 0.02, -12.5);
    drive.receiveShadow = true;
    S.add(drive);
    const hl = label("🏠 Home", "#f4b942");
    hl.position.set(-38, 15, -25);
    S.add(hl);
    this.homeLabel = hl;

    // people walking the sidewalks and traffic on the main street
    this.walkers = [];
    const shirts = ["#e11d48", "#2563eb", "#16a34a", "#f59e0b", "#6b7280", "#111827", "#f5f5f5", "#7c3aed"];
    for (let i = 0; i < 8; i++) {
      // pedestrians share one body build (meshing a body takes a moment)
      const f = new Fighter3D({ casual: true, look: { ...lookFromName("walker" + i), body: 1, abs: 1 }, shirt: shirts[i], pants: i % 2 ? "#1f2937" : "#3b5b8a", weightClass: 2, detail: "low" });
      const side = i % 2 ? 1 : -1;
      const w = { f, x: -55 + Math.random() * 110, z: side * 6.6, dir: side, v: 1.1 + Math.random() * 0.6 };
      f.root.position.set(w.x, 0, w.z);
      S.add(f.root);
      this.walkers.push(w);
    }
    this.traffic = [];
    [["sedan", "#9ca3af"], ["pickup", "#b45309"], ["hatch", "#0ea5e9"], ["suv", "#111827"]].forEach(([id, c], i) => {
      const car = makeCar(id, c);
      const dir = i % 2 ? 1 : -1;
      const t = { car, x: -60 + i * 30, z: dir * 2.4, dir, v: 8 + i * 1.5 };
      car.rotation.y = dir > 0 ? Math.PI / 2 : -Math.PI / 2;
      S.add(car);
      this.traffic.push(t);
    });
  }

  /** Rebuilds the fighter, home, garage, pets and family when the life changes. info: { look, weightClass, style, life } */
  setLife(info) {
    const L = info.life;
    this.injured = !!info.injured;
    if (this.player) this.player.setInjured(this.injured);
    const key = JSON.stringify([info.look, info.weightClass, L.house, L.cars, L.driving, L.pets.map((p) => p.kind + p.name), L.partner && [L.partner.look, L.partner.stage], L.kids.map((k) => k.look + k.age)]);
    if (key === this.key) return;
    this.key = key;
    const S = this.scene;
    if (!this.player || this.playerLook !== info.look) {
      if (this.player) this.player.dispose();
      this.player = new Fighter3D({ casual: true, look: parseLook(info.look), weightClass: info.weightClass, style: info.style, shirt: "#111111", pants: "#2b3a55", tattooText: info.ink });
      this.playerLook = info.look;
      this.player.setInjured(this.injured);
      S.add(this.player.root);
    }
    // home
    if (this.homeTier !== L.house) {
      if (this.home) this.homeLot.remove(this.home);
      this.home = makeHouse(L.house);
      this.homeLot.add(this.home);
      this.homeTier = L.house;
      this.solids = this.solids.filter((r) => !r.home);
      const half = [[6.5, 5], [4, 3.5], [8, 4], [7.5, 5.5], [16, 6.5]][L.house];
      const r = [-38 - half[0], -25 - half[1] - 1, -38 + half[0], -25 + half[1]];
      r.home = true;
      this.solids.push(r);
      this.homeLabel.position.y = [15, 8, 11, 10, 12][L.house];
    }
    // cars in the driveway
    for (const c of this.garage) S.remove(c);
    this.garage = [];
    const cat = info.carCatalog || [];
    L.cars.forEach((id, i) => {
      const spec = cat.find((c) => c.id === id) || { color: "#888" };
      const car = makeCar(id, spec.color);
      car.position.set(-48 + i * 2.7, 0, -12.5);
      car.rotation.y = Math.PI * 0.98;
      car.userData.id = id;
      S.add(car);
      this.garage.push(car);
    });
    // pets follow you around town
    for (const p of this.pets) S.remove(p.root);
    this.pets = L.pets.map((p, i) => {
      const m = makePet(p.kind);
      m.root.position.copy(this.pos).add(new THREE.Vector3(1 + i, 0, 1));
      m.slot = i;
      S.add(m.root);
      return m;
    });
    // partner and kids wait at home
    for (const f of this.family) f.dispose();
    this.family = [];
    const shirts = ["#e11d48", "#2563eb", "#16a34a", "#f59e0b", "#a855f7", "#0ea5e9", "#f97316", "#ec4899"];
    const doorZ = -25 + [5.6, 4.2, 6.2, 4.4, 6.3][L.house];
    // family stands in the yard beside the driveway (clear of the cars, and of the mansion's fountain)
    const famX = L.house === 4 ? -35.5 : -30.5;
    if (L.partner) {
      const look = parseLook(L.partner.look);
      const f = new Fighter3D({ casual: true, look, shirt: shirts[look.shorts], pants: "#1f2937", weightClass: 1, detail: "low" });
      f.root.position.set(famX, 0, doorZ + 2.4);
      f.root.rotation.y = -0.5;
      S.add(f.root);
      this.family.push(f);
    }
    L.kids.forEach((k, i) => {
      const look = parseLook(k.look);
      const f = new Fighter3D({ casual: true, look: { ...look, beard: 0, body: 0, abs: 0 }, shirt: shirts[(look.shorts + i + 2) % 8], pants: "#334155", weightClass: 0, detail: "low" });
      const s = Math.min(0.85, 0.42 + k.age * 0.035);
      f.root.scale.multiplyScalar(s);
      f.root.position.set(famX + 1.4 + i * 1.0, 0, doorZ + 3.2 + (i % 2) * 0.6);
      f.root.rotation.y = -0.4;
      S.add(f.root);
      this.family.push(f);
    });
    // a car you're driving
    if (this.driving && this.driving.userData.id !== L.driving) this.stopDriving();
    this.carCatalog = cat;
    this.drivingId = L.driving;
  }

  canDrive() {
    return !!this.drivingId;
  }

  isDriving() {
    return !!this.driving;
  }

  toggleDrive() {
    if (this.driving) return this.stopDriving();
    if (!this.drivingId) return false;
    const spec = (this.carCatalog || []).find((c) => c.id === this.drivingId) || { color: "#888" };
    this.driving = makeCar(this.drivingId, spec.color);
    this.driving.userData.id = this.drivingId;
    this.scene.add(this.driving);
    this.player.root.visible = false;
    this.speedNow = 0;
    return true;
  }

  stopDriving() {
    if (!this.driving) return false;
    this.scene.remove(this.driving);
    this.driving = null;
    this.player.root.visible = true;
    // step out beside the car
    this.pos.x += Math.cos(this.heading) * 1.6;
    this.pos.z -= Math.sin(this.heading) * 1.6;
    this.pos.copy(this.free(this.pos.x, this.pos.z, this.pos));
    return false;
  }

  /** Teleport home (opening the world). */
  goHome() {
    this.pos.set(-38, 0, -6);
    this.heading = Math.PI;
    this.camYaw = 0;
    this.moveTarget = null;
    if (this.driving) this.stopDriving();
  }

  blocked(x, z, r) {
    if (Math.abs(x) > 64 || Math.abs(z) > 40) return true;
    for (const s of this.solids) if (x > s[0] - r && x < s[2] + r && z > s[1] - r && z < s[3] + r) return true;
    return false;
  }

  free(x, z, fallback) {
    return this.blocked(x, z, 0.4) ? fallback.clone() : new THREE.Vector3(x, 0, z);
  }

  /** Pointer input from the stage: drag to look around, tap the ground to walk there. */
  pointer(type, e, canvas) {
    if (type === "down") {
      this.drag = { x: e.clientX, y: e.clientY, moved: 0 };
      canvas.setPointerCapture(e.pointerId);
    } else if (type === "move" && this.drag) {
      const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
      this.drag.moved += Math.abs(dx) + Math.abs(dy);
      this.camYaw -= dx * 0.008;
      this.camPitch = Math.max(0.12, Math.min(1.2, this.camPitch + dy * 0.004));
      this.drag.x = e.clientX;
      this.drag.y = e.clientY;
    } else if (type === "up" && this.drag) {
      if (this.drag.moved < 8) {
        const r = canvas.getBoundingClientRect();
        const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        const ray = new THREE.Raycaster();
        ray.setFromCamera(ndc, this.camera);
        const hit = ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), new THREE.Vector3());
        if (hit) this.moveTarget = hit;
      }
      this.drag = null;
    }
  }

  update(dt) {
    if (!this.player) return;
    const P = this.pos;
    // input direction relative to the camera
    const k = this.keys;
    let ix = 0, iz = 0;
    if (k.has("w") || k.has("arrowup")) iz -= 1;
    if (k.has("s") || k.has("arrowdown")) iz += 1;
    if (k.has("a") || k.has("arrowleft")) ix -= 1;
    if (k.has("d") || k.has("arrowright")) ix += 1;
    let dir = null;
    if (ix || iz) {
      const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
      dir = new THREE.Vector3(ix * cy + iz * sy, 0, -ix * sy + iz * cy).normalize();
    } else if (this.moveTarget) {
      const d = this.moveTarget.clone().sub(P).setY(0);
      if (d.length() < (this.driving ? 1.5 : 0.4)) this.moveTarget = null;
      else dir = d.normalize();
    }
    const maxV = this.driving ? 16 : (k.has("shift") ? 7 : 4.2) * (this.injured ? 0.55 : 1);
    const want = dir ? maxV : 0;
    this.speedNow += (want - this.speedNow) * damp(this.driving ? 2.2 : 10, dt);
    if (dir) {
      const h = Math.atan2(dir.x, dir.z);
      this.heading = angleLerp(this.heading, h, damp(this.driving ? 3.5 : 12, dt));
    }
    if (this.speedNow > 0.01) {
      const step = this.speedNow * dt;
      const vx = Math.sin(this.heading) * step, vz = Math.cos(this.heading) * step;
      const r = this.driving ? 1.3 : 0.4;
      if (!this.blocked(P.x + vx, P.z, r)) P.x += vx;
      else if (this.driving) this.speedNow *= 0.5;
      if (!this.blocked(P.x, P.z + vz, r)) P.z += vz;
      else if (this.driving) this.speedNow *= 0.5;
    }
    if (this.driving) {
      this.driving.position.copy(P);
      this.driving.rotation.y = this.heading;
      for (const w of this.driving.userData.wheels) w.children.forEach((c) => (c.rotation.x += (this.speedNow * dt) / this.driving.userData.radius));
    }
    this.player.root.position.copy(P);
    this.player.root.rotation.y = this.heading;
    this.player.update(dt);

    // pets trot behind
    this.pets.forEach((pet, i) => {
      const side = i % 2 ? 1 : -1;
      const back = 1.4 + Math.floor(i / 2) * 1.1;
      const tx = P.x - Math.sin(this.heading) * back + Math.cos(this.heading) * side * 0.9;
      const tz = P.z - Math.cos(this.heading) * back - Math.sin(this.heading) * side * 0.9;
      const r = pet.root;
      const d = new THREE.Vector3(tx - r.position.x, 0, tz - r.position.z);
      const dist = d.length();
      const v = Math.min(dist * 2.5, this.driving ? 18 : 8);
      if (dist > 0.05) {
        r.position.addScaledVector(d.normalize(), v * dt);
        r.rotation.y = angleLerp(r.rotation.y, Math.atan2(d.x, d.z), damp(8, dt));
      }
      r.position.y = pet.fly ? 1.9 + Math.sin(performance.now() / 300 + i) * 0.15 : 0;
      pet.step(dt, dist > 0.3 ? v : 0);
    });
    if (this.shopPet) this.shopPet.step(dt, 0);
    for (const f of this.family) f.update(dt);

    for (const w of this.walkers) {
      w.x += w.dir * w.v * dt;
      if (w.x > 62) w.x = -62;
      if (w.x < -62) w.x = 62;
      w.f.root.position.set(w.x, 0, w.z);
      w.f.root.rotation.y = w.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
      w.f.update(dt);
    }
    for (const t of this.traffic) {
      t.x += t.dir * t.v * dt;
      if (t.x > 66) t.x = -66;
      if (t.x < -66) t.x = 66;
      t.car.position.set(t.x, 0, t.z);
      for (const w of t.car.userData.wheels) w.children.forEach((c) => (c.rotation.x += (t.v * dt) / t.car.userData.radius));
    }

    // closest door in reach
    let near = null, best = 3.6;
    for (const p of PLACES) {
      const d = Math.hypot(P.x - p.door[0], P.z - p.door[1]);
      if (d < best) {
        best = d;
        near = p;
      }
    }
    if (near !== this.near) {
      this.near = near;
      if (this.onNear) this.onNear(near);
    }

    // shadows follow the player
    this.sun.position.set(P.x + 25, 40, P.z + 18);
    this.sun.target.position.copy(P);

    // behind the wheel the camera swings round behind the car
    if (this.driving && this.speedNow > 2 && !this.drag) this.camYaw = angleLerp(this.camYaw, this.heading + Math.PI, damp(2.5, dt));
    // third-person camera
    const dist = this.driving ? 11 : 7.5;
    const c = this.camera;
    const tgt = new THREE.Vector3(P.x, this.driving ? 1.2 : 1.5, P.z);
    const cx = tgt.x + Math.sin(this.camYaw) * Math.cos(this.camPitch) * dist;
    const cz = tgt.z + Math.cos(this.camYaw) * Math.cos(this.camPitch) * dist;
    const cyp = tgt.y + Math.sin(this.camPitch) * dist;
    c.position.lerp(new THREE.Vector3(cx, cyp, cz), this.snapCam ? 1 : damp(8, dt));
    this.snapCam = false;
    c.lookAt(tgt);
  }

  /** Called when the world becomes visible. */
  enter() {
    this.snapCam = true;
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
}

export { LOOK_OPTIONS };
