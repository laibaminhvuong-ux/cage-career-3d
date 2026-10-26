// The open world: a small city the fighter walks (or drives) around between fights. Home changes
// with the house they own, their cars sit in the driveway, pets follow them around, and their
// partner and kids wait at home. Every place in town opens a screen in the app.
import * as THREE from "./vendor/three.module.min.js";
import { Fighter3D, LOOK_OPTIONS, attack, parseLook, lookFromName } from "./fighter3d.js";

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
  const glass = new THREE.MeshPhysicalMaterial({ color: "#1c2a3a", roughness: 0.05, metalness: 0.2, clearcoat: 1, transparent: true, opacity: 0.38, depthWrite: false });
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
  // a seat and a steering wheel behind the glass (the driver sits on the left)
  const seatX = W * 0.22, seatZ = cz - 0.25;
  at(box(0.5, 0.12, 0.5, "#1d1d1f"), seatX, clear + 0.28, seatZ, g);
  at(box(0.5, 0.6, 0.12, "#1d1d1f"), seatX, clear + 0.48, seatZ - 0.27, g).rotation.x = -0.15;
  const wheelRing = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.025, 8, 20), black);
  wheelRing.position.set(seatX, belt + 0.12, seatZ + 0.55);
  wheelRing.rotation.x = -0.45;
  g.add(wheelRing);
  at(box(W * 0.9, 0.18, 0.4, "#202124"), 0, belt - 0.02, seatZ + 0.85, g); // dashboard
  // everything but the wheels leans in corners and dips under braking
  const shell = new THREE.Group();
  for (const c of [...g.children]) if (!wheels.includes(c)) shell.add(c);
  g.add(shell);
  g.userData.wheels = wheels;
  g.userData.front = wheels.filter((w) => w.position.z > 0);
  g.userData.shell = shell;
  g.userData.wheelRing = wheelRing;
  g.userData.radius = s.wheel;
  g.userData.seat = new THREE.Vector3(seatX, clear + 0.34, seatZ);
  g.userData.wheelBase = L * 0.64;
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
  { id: "arena", name: "The Arena", icon: "🏆", color: "#f4b942", door: [30, 9] },
];

// ------------------------------------------------------------------ interiors
// Every door in town opens into a furnished room you walk around in: built the first time you go
// in, far away from the town (so it never shows through a window), with its own lights and people.

/** An empty room facing -z from its door at +z: floor, walls, ceiling, skirting, ceiling lights. */
function room(w, d, h, { floor = "#9a7b58", floorTex = null, wall = "#e9e2d4", ceiling = "#f4f1ea", light = "#fff1dc", lights = 2, power = 14 } = {}) {
  const g = new THREE.Group();
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorTex ? new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.55 }) : mat(floor, { roughness: 0.5 }));
  fl.rotation.x = -Math.PI / 2;
  fl.receiveShadow = true;
  g.add(fl);
  const ce = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat(ceiling));
  ce.rotation.x = Math.PI / 2;
  ce.position.y = h;
  g.add(ce);
  const wallM = mat(wall, { roughness: 0.9 });
  const wallAt = (ww, x, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(ww, h), wallM);
    m.position.set(x, h / 2, z);
    m.rotation.y = ry;
    m.receiveShadow = true;
    g.add(m);
    const sk = box(ww, 0.12, 0.03, "#3b332b");
    sk.position.set(x, 0.06, z);
    sk.rotation.y = ry;
    g.add(sk);
  };
  wallAt(w, 0, -d / 2, 0);
  wallAt(d, -w / 2, 0, Math.PI / 2);
  wallAt(d, w / 2, 0, -Math.PI / 2);
  // the front wall has the door you came in through
  const side = (w - 1.6) / 2;
  wallAt(side, -w / 2 + side / 2, d / 2, Math.PI);
  wallAt(side, w / 2 - side / 2, d / 2, Math.PI);
  const lintel = new THREE.Mesh(new THREE.PlaneGeometry(1.6, h - 2.3), wallM);
  lintel.position.set(0, 2.3 + (h - 2.3) / 2, d / 2);
  lintel.rotation.y = Math.PI;
  g.add(lintel);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.3), new THREE.MeshBasicMaterial({ color: "#cfe6ff", toneMapped: false }));
  door.position.set(0, 1.15, d / 2 + 0.02);
  door.rotation.y = Math.PI;
  g.add(door);
  for (const x of [-0.85, 0.85]) at(box(0.1, 2.35, 0.14, "#4a3b2c"), x, 1.17, d / 2 - 0.05, g);
  at(box(1.8, 0.1, 0.14, "#4a3b2c"), 0, 2.33, d / 2 - 0.05, g);
  // soft light from above, plus fittings you can see
  g.add(new THREE.HemisphereLight("#fff6ea", "#5d5045", 0.55));
  for (let i = 0; i < lights; i++) {
    const x = lights === 1 ? 0 : -w / 4 + (i * w) / 2 / Math.max(1, lights - 1);
    const p = new THREE.PointLight(light, power, Math.max(w, d) * 1.4, 1.6);
    p.position.set(x, h - 0.4, 0);
    if (i === 0) {
      p.castShadow = true;
      p.shadow.mapSize.set(512, 512);
    }
    g.add(p);
    at(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 16), new THREE.MeshBasicMaterial({ color: light, toneMapped: false })), x, h - 0.03, 0, g);
  }
  return g;
}

/** A framed picture: a canvas drawing on the wall. draw(g, w, h) paints it. */
function picture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = Math.round((256 * h) / w);
  draw(c.getContext("2d"), c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const grp = new THREE.Group();
  at(box(w + 0.1, h + 0.1, 0.04, "#2b2118"), 0, 0, -0.02, grp);
  grp.add(at(new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 })), 0, 0, 0.005));
  return grp;
}
const poster = (title, sub, bg, fg = "#fff") => (g, w, h) => {
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = fg;
  g.textAlign = "center";
  g.font = `900 ${Math.round(w / 6)}px Arial`;
  g.fillText(title, w / 2, h * 0.45);
  g.font = `bold ${Math.round(w / 14)}px Arial`;
  g.fillText(sub, w / 2, h * 0.62);
};
const emojiArt = (emoji, bg) => (g, w, h) => {
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.font = `${Math.round(Math.min(w, h) * 0.6)}px serif`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(emoji, w / 2, h / 2 + 6);
};

function plant(s = 1) {
  const g = new THREE.Group();
  at(cyl(0.2 * s, 0.15 * s, 0.4 * s, "#8b5a3c", 10), 0, 0.2 * s, 0, g);
  for (let i = 0; i < 5; i++) at(sphere(0.22 * s, "#2f7d3c"), Math.sin(i) * 0.12 * s, (0.55 + i * 0.08) * s, Math.cos(i * 2) * 0.12 * s, g);
  return g;
}
function chair(color = "#5b4636") {
  const g = new THREE.Group();
  at(box(0.45, 0.06, 0.45, color), 0, 0.46, 0, g);
  at(box(0.45, 0.5, 0.06, color), 0, 0.72, -0.2, g);
  for (const x of [-0.19, 0.19]) for (const z of [-0.19, 0.19]) at(box(0.05, 0.46, 0.05, "#2a221c"), x, 0.23, z, g);
  return g;
}
function table(w, d, h = 0.75, top = "#7b5a3e") {
  const g = new THREE.Group();
  at(box(w, 0.06, d, top), 0, h, 0, g);
  for (const x of [-1, 1]) for (const z of [-1, 1]) at(box(0.06, h, 0.06, "#2a221c"), x * (w / 2 - 0.08), h / 2, z * (d / 2 - 0.08), g);
  return g;
}
function roundTable(r = 0.45) {
  const g = new THREE.Group();
  at(cyl(r, r, 0.05, "#d9d2c5", 20), 0, 0.74, 0, g);
  at(cyl(0.05, 0.05, 0.72, "#2b2b2b"), 0, 0.37, 0, g);
  at(cyl(0.28, 0.28, 0.03, "#2b2b2b", 16), 0, 0.015, 0, g);
  return g;
}
function sofa(w, color) {
  const g = new THREE.Group();
  at(box(w, 0.42, 0.9, color), 0, 0.21, 0, g);
  at(box(w, 0.55, 0.22, color), 0, 0.62, -0.34, g);
  for (const x of [-1, 1]) at(box(0.22, 0.6, 0.9, color), x * (w / 2 - 0.11), 0.3, 0, g);
  for (let i = 0; i < Math.round(w / 0.8); i++) at(box(w / Math.round(w / 0.8) - 0.06, 0.12, 0.62, color), -w / 2 + (i + 0.5) * (w / Math.round(w / 0.8)), 0.48, 0.06, g);
  return g;
}
function counter(w, color = "#3b3f46", top = "#d8d4cc") {
  const g = new THREE.Group();
  at(box(w, 1.0, 0.7, color), 0, 0.5, 0, g);
  at(box(w + 0.06, 0.05, 0.76, top), 0, 1.02, 0, g);
  return g;
}
function npc(look, opts = {}) {
  const f = new Fighter3D({ casual: true, look, shirt: opts.shirt || "#1f2937", pants: opts.pants || "#334155", weightClass: 2, detail: "low", faceSeed: opts.seed || "", female: !!opts.female });
  if (opts.base) f.setBase(opts.base);
  if (opts.sit) f.setBase("sit");
  return f;
}
const randomPerson = (seed) => {
  const f = lookFromName(seed);
  return { look: f, female: seed.length % 2 === 0 };
};

/** Builds the inside of a place. Returns { group, w, d, h, solids, npcs, tick(dt, t) }. */
function buildInterior(id, ctx) {
  const people = [];
  const solids = [];
  const block = (x0, z0, x1, z1) => solids.push([Math.min(x0, x1), Math.min(z0, z1), Math.max(x0, x1), Math.max(z0, z1)]);
  const person = (x, z, ry, opts = {}) => {
    const p = randomPerson(opts.seed || id + x + z);
    const f = npc(p.look, { ...opts, female: opts.female ?? p.female });
    f.root.position.set(x, 0, z);
    f.root.rotation.y = ry;
    g.add(f.root);
    people.push({ f, ...opts, x, z, ry, t: Math.random() * 10 });
    block(x - 0.3, z - 0.3, x + 0.3, z + 0.3);
    return f;
  };
  const ticks = [];
  let g, w, d, h;

  if (id === "home") {
    const tier = ctx.house || 0;
    w = [10, 12, 14, 16, 20][tier];
    d = [8, 9, 10, 11, 14][tier];
    h = tier >= 3 ? 4 : 3;
    const lux = tier >= 3;
    g = room(w, d, h, {
      floorTex: lux ? noiseTexture("#e8e4dc", "#cfc8bb", "#f7f5f0", 6) : noiseTexture("#9a6f47", "#7c5534", "#b48558", 5),
      wall: lux ? "#f2efe8" : tier === 1 ? "#d9cdb8" : "#e8dfcf", lights: lux ? 3 : 2,
    });
    // living area: sofa facing the TV, a rug, a coffee table
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.4), mat(lux ? "#7a1f2b" : "#4b5b73"));
    rug.rotation.x = -Math.PI / 2;
    at(rug, -w / 4, 0.01, 0.2, g);
    at(sofa(2.6, lux ? "#ece6da" : "#55606e"), -w / 4, 0, 1.5, g).rotation.y = Math.PI;
    block(-w / 4 - 1.3, 1.0, -w / 4 + 1.3, 2.0);
    at(table(1.2, 0.6, 0.42, "#3a2c20"), -w / 4, 0, 0.2, g);
    block(-w / 4 - 0.6, -0.1, -w / 4 + 0.6, 0.5);
    at(box(2.2, 0.5, 0.45, "#2a2420"), -w / 4, 0.25, -d / 2 + 0.3, g);
    const tv = at(box(2.0, 1.15, 0.06, "#0b0b0d"), -w / 4, 1.25, -d / 2 + 0.12, g);
    tv.add(at(new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.05), new THREE.MeshBasicMaterial({ map: textTexture("🥊 FIGHT NIGHT LIVE", { w: 512, h: 288, bg: "#0e1a33", fg: "#f4b942", font: "bold 44px Arial" }), toneMapped: false })), 0, 0, 0.035));
    block(-w / 4 - 1.1, -d / 2, -w / 4 + 1.1, -d / 2 + 0.55);
    // kitchen along the back wall on the other side, a dining table
    at(counter(3.2, lux ? "#f5f5f5" : "#6b4e37", lux ? "#222" : "#d8d4cc"), w / 4 + 0.4, 0, -d / 2 + 0.4, g);
    at(box(0.8, 1.9, 0.7, "#d9dde2", { metalness: 0.6, roughness: 0.3 }), w / 4 + 2.4, 0.95, -d / 2 + 0.4, g);
    block(w / 4 - 1.3, -d / 2, w / 4 + 2.9, -d / 2 + 0.8);
    at(table(1.6, 0.9), w / 4 + 0.6, 0, 0.6, g);
    for (const [x, z, r] of [[-0.45, -0.6, 0], [0.45, -0.6, 0], [-0.45, 0.6, Math.PI], [0.45, 0.6, Math.PI]]) at(chair(), w / 4 + 0.6 + x, 0, 0.6 + z, g).rotation.y = r;
    block(w / 4 - 0.4, -0.2, w / 4 + 1.6, 1.4);
    // pictures: a fight poster, family art
    at(picture(1.0, 1.4, poster("CAGE", "CAREER 3D", "#7f1d1d")), -w / 2 + 0.03, 1.7, -1, g).rotation.y = Math.PI / 2;
    at(picture(1.4, 1.0, emojiArt("🏔️", "#bfdbfe")), w / 2 - 0.03, 1.7, 0.8, g).rotation.y = -Math.PI / 2;
    at(plant(), -w / 2 + 0.6, 0, d / 2 - 0.8, g);
    at(plant(1.2), w / 2 - 0.6, 0, d / 2 - 0.8, g);
    if (lux) {
      // a chandelier and a trophy cabinet
      const ch = new THREE.Group();
      at(cyl(0.6, 0.3, 0.4, "#d4af37", 12, { metalness: 0.9, roughness: 0.25 }), 0, 0, 0, ch);
      for (let i = 0; i < 8; i++) at(new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: "#fff3c4", toneMapped: false })), Math.cos(i) * 0.6, -0.22, Math.sin(i) * 0.6, ch);
      at(ch, 0, h - 0.6, 0, g);
      const cab = at(box(1.6, 2.0, 0.45, "#2a1d14"), w / 2 - 0.3, 1.0, -1.8, g);
      cab.rotation.y = -Math.PI / 2;
      for (let i = 0; i < 3; i++) at(cyl(0.08, 0.12, 0.35, "#d4af37", 10, { metalness: 0.9, roughness: 0.2 }), w / 2 - 0.35, 1.35, -2.4 + i * 0.6, g);
      block(w / 2 - 0.6, -2.7, w / 2, -0.9);
    }
    if (ctx.partner) person(-w / 4 + 0.4, 1.6, Math.PI, { seed: ctx.partner.name, female: (ctx.partner.gender || "F") === "F", shirt: "#e11d48", sit: true });
  } else if (id === "club") {
    w = 16; d = 12; h = 4.2;
    g = room(w, d, h, { floor: "#141017", wall: "#1d1626", ceiling: "#0c0a10", light: "#b46cff", lights: 2, power: 9 });
    // the dance floor: tiles that pulse with the beat
    const tiles = [];
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) {
      const m = new THREE.MeshBasicMaterial({ color: "#ff3cac", toneMapped: false });
      const t = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95), m);
      t.rotation.x = -Math.PI / 2;
      at(t, -2.4 + i * 1.0, 0.012, -2.2 + j * 1.0, g);
      tiles.push({ m, i, j });
    }
    const cols = ["#ff3cac", "#784ba0", "#2b86c5", "#00f5d4", "#fee440"];
    ticks.push((dt, t) => tiles.forEach((x) => x.m.color.set(cols[Math.floor(t * 2 + x.i + x.j * 2) % cols.length]).multiplyScalar(0.55 + 0.45 * Math.sin(t * 6 + x.i))));
    // a disco ball and sweeping colored lights
    const ball = at(new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 12), new THREE.MeshStandardMaterial({ color: "#ddd", metalness: 1, roughness: 0.15, flatShading: true })), 0, h - 0.7, -0.8, g);
    const spots = ["#ff3cac", "#2b86c5", "#00f5d4"].map((c, i) => {
      const s = new THREE.SpotLight(c, 30, 14, 0.35, 0.5, 1.2);
      s.position.set(-4 + i * 4, h - 0.2, -d / 2 + 1);
      g.add(s, s.target);
      return s;
    });
    ticks.push((dt, t) => {
      ball.rotation.y += dt * 0.8;
      spots.forEach((s, i) => s.target.position.set(Math.sin(t * 0.9 + i * 2) * 4, 0, Math.cos(t * 0.7 + i) * 3 - 1));
    });
    // DJ booth with the DJ, a bar with stools and bottles
    at(box(2.6, 1.1, 0.9, "#2a2135"), 0, 0.55, -d / 2 + 0.8, g);
    for (const x of [-0.7, 0.7]) at(cyl(0.25, 0.25, 0.06, "#111", 18), x, 1.13, -d / 2 + 0.8, g);
    at(sign("DJ NOVA", 2.4, 0.5, { bg: "#0b0710", fg: "#ff3cac", font: "bold 80px Arial" }), 0, 2.2, -d / 2 + 0.05, g);
    block(-1.4, -d / 2, 1.4, -d / 2 + 1.3);
    person(0, -d / 2 + 0.2, 0, { seed: "DJ Nova", shirt: "#111", dance: 0.5 });
    const bar = at(counter(4.2, "#3a1f47", "#111"), w / 2 - 1.2, 0, 1.2, g);
    bar.rotation.y = -Math.PI / 2;
    block(w / 2 - 1.6, -0.9, w / 2 - 0.8, 3.3);
    for (let i = 0; i < 12; i++) at(cyl(0.04, 0.05, 0.3, ["#3fa34d", "#c2410c", "#2563eb", "#facc15"][i % 4], 8, { roughness: 0.15 }), w / 2 - 0.15, 1.45 + (i % 2) * 0.45, -0.6 + Math.floor(i / 2) * 0.7, g);
    at(box(0.3, 0.05, 4.4, "#2a2135"), w / 2 - 0.15, 1.3, 1.2, g);
    at(box(0.3, 0.05, 4.4, "#2a2135"), w / 2 - 0.15, 1.75, 1.2, g);
    for (let i = 0; i < 4; i++) at(cyl(0.2, 0.2, 0.75, "#888", 12, { metalness: 0.8, roughness: 0.3 }), w / 2 - 2.2, 0.38, -0.3 + i * 1.0, g);
    person(w / 2 - 0.5, 1.2, -Math.PI / 2, { seed: "Bartender", shirt: "#000" });
    // people dancing
    for (const [x, z] of [[-1.5, -1], [0.6, -1.6], [1.4, -0.4], [-0.6, 0.2], [-2, -2.2]]) person(x, z, Math.random() * TAU, { seed: "dancer" + x, shirt: cols[Math.floor(Math.abs(x * 3)) % 5], dance: 1 });
  } else if (id === "ink") {
    w = 10; d = 8; h = 3.2;
    g = room(w, d, h, { floor: "#2b2b2e", wall: "#3a3a40", ceiling: "#222226", light: "#ffe2c0", lights: 2, power: 12 });
    // the tattoo chair, the artist's stool and a work lamp
    const ch = new THREE.Group();
    at(box(0.7, 0.5, 1.9, "#111"), 0, 0.5, 0, ch);
    const back = at(box(0.7, 0.9, 0.12, "#111"), 0, 1.05, -0.85, ch);
    back.rotation.x = -0.5;
    at(cyl(0.2, 0.3, 0.3, "#888", 12, { metalness: 0.8 }), 0, 0.15, 0, ch);
    at(ch, -1.2, 0, -1.2, g);
    block(-1.6, -2.2, -0.8, -0.2);
    const arm = at(cyl(0.02, 0.02, 1.6, "#999", 6, { metalness: 0.9 }), -0.2, 0.8, -1.8, g);
    at(cyl(0.16, 0.05, 0.12, "#e5e5e5", 12), -0.2, 1.62, -1.4, g);
    void arm;
    person(-0.1, -0.9, -Math.PI / 2, { seed: "Rook the artist", shirt: "#0f0f0f", base: "relaxed" });
    // walls covered in flash art, a neon sign, a counter with a portfolio
    const flash = ["🐉", "💀", "🌹", "🦅", "⚔️", "🐍", "☯️", "🔥", "🌙"];
    flash.forEach((e, i) => at(picture(0.7, 0.7, emojiArt(e, "#f1e9d8")), -3.6 + (i % 5) * 1.0 + (i >= 5 ? 0.5 : 0), 2.3 - Math.floor(i / 5) * 0.85, -d / 2 + 0.04, g));
    at(sign("INK", 1.6, 0.6, { bg: "#000", fg: "#3cf7ff", font: "bold 90px Arial" }), w / 2 - 0.05, 2.2, 0.5, g).rotation.y = -Math.PI / 2;
    const c = at(counter(2.2, "#1f1f22", "#6b4e37"), w / 2 - 1.2, 0, 2, g);
    c.rotation.y = -Math.PI / 2;
    block(w / 2 - 1.6, 0.8, w / 2 - 0.8, 3.2);
    at(plant(), -w / 2 + 0.6, 0, d / 2 - 0.7, g);
  } else if (id === "cafe") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floorTex: noiseTexture("#c9a27a", "#b08560", "#dcbb98", 5), wall: "#f3e2c7", light: "#ffd9a0", lights: 3, power: 10 });
    const bar = at(counter(5, "#5b3a24", "#e9e2d6"), 0, 0, -d / 2 + 1.3, g);
    void bar;
    block(-2.6, -d / 2 + 0.8, 2.6, -d / 2 + 1.7);
    at(box(0.8, 0.6, 0.5, "#c0c0c0", { metalness: 0.9, roughness: 0.25 }), -1.6, 1.35, -d / 2 + 1.3, g); // espresso machine
    at(box(1.4, 0.45, 0.6, "#cfe8f5", { transparent: true, opacity: 0.35, roughness: 0.05 }), 1.2, 1.27, -d / 2 + 1.3, g); // pastry case
    for (let i = 0; i < 6; i++) at(sphere(0.08, ["#c47a2c", "#f0c27b", "#7b3f1d"][i % 3]), 0.7 + i * 0.2, 1.12, -d / 2 + 1.3, g);
    at(sign("MENU  ·  Espresso $3  ·  Latte $4  ·  Protein shake $6", 6, 0.6, { w: 1024, bg: "#1c1c1c", fg: "#f5f5f5", font: "bold 44px Arial" }), 0, 2.4, -d / 2 + 0.03, g);
    person(0, -d / 2 + 0.5, 0, { seed: "Barista Mai", shirt: "#6b3e26" });
    for (const [x, z] of [[-3.5, 0.5], [-1.8, 1.9], [1.8, 0.4], [3.8, 1.8], [-3.6, 2.9]]) {
      at(roundTable(), x, 0, z, g);
      at(chair("#4a3626"), x - 0.7, 0, z, g).rotation.y = Math.PI / 2;
      at(chair("#4a3626"), x + 0.7, 0, z, g).rotation.y = -Math.PI / 2;
      at(cyl(0.05, 0.04, 0.1, "#fff", 10), x, 0.82, z, g);
      block(x - 1, z - 0.5, x + 1, z + 0.5);
    }
    person(-2.5, 1.9, Math.PI / 2, { seed: "Cafe guest", shirt: "#2563eb", sit: true });
    for (let i = 0; i < 3; i++) {
      const l = at(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.25, 14, 1, true), mat("#2b2b2b", { side: THREE.DoubleSide })), -2 + i * 2, h - 0.8, 0.8, g);
      at(cyl(0.005, 0.005, 0.7, "#111"), 0, 0.45, 0, l);
    }
    at(plant(), w / 2 - 0.6, 0, d / 2 - 0.7, g);
  } else if (id === "gym") {
    w = 18; d = 14; h = 5;
    g = room(w, d, h, { floor: "#1d2a44", wall: "#d8d8d8", light: "#ffffff", lights: 3, power: 16 });
    // puzzle mats, the ring, heavy bags, a weights rack, a mirror wall
    const mats1 = new THREE.Mesh(new THREE.PlaneGeometry(7, 6), mat("#b91c1c", { roughness: 0.8 }));
    mats1.rotation.x = -Math.PI / 2;
    at(mats1, 4.5, 0.01, 1.5, g);
    const ring = new THREE.Group();
    at(box(5, 0.6, 5, "#20242c"), 0, 0.3, 0, ring);
    at(box(4.8, 0.05, 4.8, "#e9e3d5"), 0, 0.62, 0, ring);
    for (const x of [-2.4, 2.4]) for (const z of [-2.4, 2.4]) at(cyl(0.08, 0.08, 1.6, "#c8102e", 10), x, 1.4, z, ring);
    for (let r = 0; r < 3; r++) {
      const y = 1.05 + r * 0.35;
      for (const [x, z, len, ry] of [[0, -2.4, 4.8, 0], [0, 2.4, 4.8, 0], [-2.4, 0, 4.8, Math.PI / 2], [2.4, 0, 4.8, Math.PI / 2]]) {
        const rope = at(cyl(0.025, 0.025, len, "#f2f2f2", 6), x, y, z, ring);
        rope.rotation.set(0, ry, Math.PI / 2);
      }
    }
    at(ring, -4.5, 0, -2.5, g);
    block(-7.1, -5.1, -1.9, 0.1);
    for (const [x, z] of [[3, -4.2], [5, -4.2], [7, -4.2]]) {
      at(cyl(0.005, 0.005, 1.4, "#555"), x, h - 0.7, z, g);
      const bag = at(cyl(0.2, 0.2, 1.2, "#7f1d1d", 14), x, h - 2.0, z, g);
      ticks.push((dt, t) => { bag.rotation.z = Math.sin(t * 2 + x) * 0.05; });
      block(x - 0.3, z - 0.3, x + 0.3, z + 0.3);
    }
    const rack = new THREE.Group();
    at(box(2.8, 0.06, 0.5, "#333"), 0, 0.5, 0, rack);
    at(box(2.8, 0.06, 0.5, "#333"), 0, 0.95, 0, rack);
    for (let i = 0; i < 8; i++) {
      const db = at(cyl(0.07, 0.07, 0.35, "#1a1a1a", 10), -1.2 + (i % 4) * 0.8, i < 4 ? 0.6 : 1.05, 0, rack);
      db.rotation.z = Math.PI / 2;
    }
    at(rack, -w / 2 + 0.4, 0, 3.5, g).rotation.y = Math.PI / 2;
    block(-w / 2, 2, -w / 2 + 0.8, 5);
    const mirror = at(new THREE.Mesh(new THREE.PlaneGeometry(8, 2.4), new THREE.MeshStandardMaterial({ color: "#cfd8e3", metalness: 1, roughness: 0.05 })), 4.5, 1.6, -d / 2 + 0.03, g);
    void mirror;
    at(picture(1.2, 1.6, poster("TRAIN", "HARD", "#111", "#f4b942")), w / 2 - 0.03, 2.4, -2, g).rotation.y = -Math.PI / 2;
    // fighters training: shadowboxing on the mats, sparring in the ring
    person(3.5, 1.2, Math.PI * 0.8, { seed: "gym rat", shirt: "#111", base: "stance", shadowbox: true });
    person(5.8, 2.2, -Math.PI * 0.6, { seed: "coach", shirt: "#c8102e" });
    for (const [x, ry] of [[-5.3, Math.PI / 2], [-3.7, -Math.PI / 2]]) {
      const f = person(x, -2.5, ry, { seed: "sparring" + x, shirt: x < -4 ? "#1d4ed8" : "#b91c1c", base: "stance", shadowbox: true });
      f.root.position.y = 0.62;
    }
  } else if (id === "cars") {
    w = 20; d = 14; h = 5;
    g = room(w, d, h, { floor: "#d6d9de", wall: "#eef1f5", light: "#ffffff", lights: 3, power: 16 });
    // a showroom floor that reflects the cars, three on slowly turning stands
    g.children[0].material = new THREE.MeshStandardMaterial({ color: "#e4e7eb", roughness: 0.12, metalness: 0.3 });
    const cars = (ctx.cars || []).slice(-3);
    cars.forEach((c, i) => {
      const disc = at(cyl(2.8, 2.8, 0.1, "#2b2f36", 32, { metalness: 0.6, roughness: 0.3 }), -6 + i * 6, 0.05, -1.5, g);
      const car = makeCar(c.id, c.color);
      car.position.set(0, 0.05, 0);
      disc.add(car);
      ticks.push((dt) => { disc.rotation.y += dt * 0.25; });
      block(-6 + i * 6 - 2.8, -4.3, -6 + i * 6 + 2.8, 1.3);
      at(sign(c.name, 3, 0.5, { bg: "#111", fg: "#f4b942", font: "bold 56px Arial" }), -6 + i * 6, 3.5, -d / 2 + 0.03, g);
    });
    at(sign("SALE  ·  0% FINANCE", 6, 0.8, { w: 1024, bg: "#c8102e", fg: "#fff", font: "bold 72px Arial" }), 0, 4.2, -d / 2 + 0.03, g);
    at(table(2, 0.9, 0.78, "#f5f5f5"), w / 2 - 3, 0, 4, g);
    block(w / 2 - 4.1, 3.4, w / 2 - 1.9, 4.6);
    person(w / 2 - 3, 3.2, Math.PI, { seed: "Sales Rep", shirt: "#1e3a8a" });
    at(plant(1.3), -w / 2 + 0.8, 0, d / 2 - 0.8, g);
    at(plant(1.3), w / 2 - 0.8, 0, d / 2 - 0.8, g);
  } else if (id === "realty") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floorTex: noiseTexture("#8f8a80", "#7d786e", "#a19c92", 6), wall: "#eef2ee", light: "#fffaf0", lights: 2, power: 12 });
    at(table(2.4, 1.1, 0.76, "#3d2b1f"), 0, 0, -1.5, g);
    block(-1.3, -2.1, 1.3, -0.9);
    at(chair("#222"), 0, 0, -2.5, g);
    for (const x of [-0.6, 0.6]) at(chair("#7a7a7a"), x, 0, -0.5, g).rotation.y = Math.PI;
    person(0, -2.5, 0, { seed: "Agent Lane", shirt: "#0f766e", sit: true });
    at(box(0.5, 0.3, 0.03, "#111"), 0.6, 0.95, -1.7, g); // laptop
    // houses for sale on the walls, a little model house on a stand
    const homes = ["🏚️", "🏠", "🏡", "🏘️", "🏰"];
    homes.forEach((e, i) => at(picture(1.1, 0.8, emojiArt(e, "#dbeafe")), -4.4 + i * 2.2, 1.8, -d / 2 + 0.04, g));
    const model = makeHouse(Math.min(4, (ctx.house || 0) + 1));
    model.scale.setScalar(0.07);
    at(table(1, 1, 0.9, "#fff"), w / 2 - 1.5, 0, 1.5, g);
    at(model, w / 2 - 1.5, 0.95, 1.5, g);
    block(w / 2 - 2.1, 0.9, w / 2 - 0.9, 2.1);
    at(plant(1.2), -w / 2 + 0.6, 0, -d / 2 + 0.7, g);
    at(sofa(2, "#1f4e5f"), -w / 2 + 1.6, 0, 2.6, g).rotation.y = Math.PI / 2;
    block(-w / 2 + 1.1, 1.6, -w / 2 + 2.1, 3.6);
  } else if (id === "pets") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floor: "#d9cbb5", wall: "#fff3d6", light: "#fff4e0", lights: 2, power: 12 });
    // shelves of food and toys, cages, a fish tank, animals wandering around
    for (let s = 0; s < 3; s++) {
      at(box(4, 0.05, 0.5, "#8b5a3c"), -2, 0.6 + s * 0.7, -d / 2 + 0.3, g);
      for (let i = 0; i < 8; i++) at(box(0.35, 0.4, 0.3, ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b"][(i + s) % 4]), -3.7 + i * 0.48, 0.83 + s * 0.7, -d / 2 + 0.3, g);
    }
    block(-4.1, -d / 2, 0.1, -d / 2 + 0.6);
    const wire = new THREE.MeshStandardMaterial({ color: "#9ca3af", wireframe: true });
    for (let i = 0; i < 3; i++) {
      at(new THREE.Mesh(new THREE.BoxGeometry(1, 0.8, 0.8, 6, 5, 5), wire), 2 + i * 1.2, 0.4, -d / 2 + 0.5, g);
    }
    block(1.4, -d / 2, 5.4, -d / 2 + 1);
    const tank = at(box(2, 1, 0.6, "#38bdf8", { transparent: true, opacity: 0.35, roughness: 0.05 }), -w / 2 + 0.5, 1.3, 0, g);
    tank.rotation.y = Math.PI / 2;
    at(box(0.6, 0.8, 2.1, "#3f3f46"), -w / 2 + 0.5, 0.4, 0, g);
    const fish = [];
    for (let i = 0; i < 6; i++) {
      const f = at(sphere(0.05, ["#f97316", "#facc15", "#ec4899"][i % 3]), -w / 2 + 0.5, 1.1 + (i % 3) * 0.2, -0.8 + i * 0.3, g);
      f.scale.set(0.6, 0.8, 1.4);
      fish.push(f);
    }
    ticks.push((dt, t) => fish.forEach((f, i) => { f.position.z = Math.sin(t * 0.8 + i) * 0.8; f.rotation.y = Math.cos(t * 0.8 + i) > 0 ? 0 : Math.PI; }));
    block(-w / 2, -1.2, -w / 2 + 1, 1.2);
    const c = at(counter(2.4, "#7c5a3a"), w / 2 - 1.3, 0, 2.2, g);
    c.rotation.y = -Math.PI / 2;
    block(w / 2 - 1.7, 1, w / 2 - 0.9, 3.4);
    person(w / 2 - 0.5, 2.2, -Math.PI / 2, { seed: "Pet shop Pia", shirt: "#16a34a" });
    for (const [kind, x, z] of [["dog", -1, 1], ["cat", 1.5, 0.5], ["dog", 0, -1.5], ["parrot", 2.5, 2.5]]) {
      const p = makePet(kind);
      p.root.position.set(x, kind === "parrot" ? 1.6 : 0, z);
      g.add(p.root);
      const home = new THREE.Vector3(x, 0, z);
      let tgt = home.clone(), wait = 0;
      ticks.push((dt) => {
        if (kind === "parrot") return p.step(dt, 0);
        const r = p.root;
        if ((wait -= dt) < 0 && r.position.distanceTo(tgt) < 0.2) {
          tgt = home.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, 0, (Math.random() - 0.5) * 2.5));
          wait = 1 + Math.random() * 3;
        }
        const dv = tgt.clone().sub(r.position).setY(0);
        const v = dv.length() > 0.1 && wait < 0 ? 1.2 : 0;
        if (v) {
          r.position.addScaledVector(dv.normalize(), v * dt);
          r.rotation.y = angleLerp(r.rotation.y, Math.atan2(dv.x, dv.z), damp(6, dt));
        }
        p.step(dt, v);
      });
    }
  } else {
    // the arena: an empty hall with the cage in the middle, stands all around and the big screen
    w = 26; d = 22; h = 9;
    g = room(w, d, h, { floor: "#141519", wall: "#191b22", ceiling: "#08090c", light: "#ffffff", lights: 3, power: 26 });
    const R = 4.2;
    const mat0 = new THREE.Mesh(new THREE.CircleGeometry(R, 8), new THREE.MeshStandardMaterial({ map: textTexture(ctx.org || "GFC", { w: 512, h: 512, bg: "#e7e2d6", fg: "#c8102e", font: "italic 900 150px Arial" }), roughness: 0.8 }));
    mat0.rotation.set(-Math.PI / 2, 0, Math.PI / 8);
    at(box(2 * R + 0.6, 0.8, 2 * R + 0.6, "#0e0f12"), 0, 0.4, -1, g);
    at(mat0, 0, 0.81, -1, g);
    const fenceTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const x = c.getContext("2d");
      x.strokeStyle = "#9aa0a8";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(0, 0); x.lineTo(64, 64); x.moveTo(64, 0); x.lineTo(0, 64);
      x.stroke();
      const t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(6, 3);
      return t;
    })();
    const fenceM = new THREE.MeshStandardMaterial({ map: fenceTex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.4 });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU, a2 = ((i + 1) / 8) * TAU;
      const x1 = Math.cos(a) * R, z1 = Math.sin(a) * R, x2 = Math.cos(a2) * R, z2 = Math.sin(a2) * R;
      at(cyl(0.08, 0.08, 1.9, "#111", 8), x1, 1.75, z1 - 1, g);
      const panel = at(new THREE.Mesh(new THREE.PlaneGeometry(Math.hypot(x2 - x1, z2 - z1), 1.8), fenceM), (x1 + x2) / 2, 1.7, (z1 + z2) / 2 - 1, g);
      panel.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
      at(cyl(0.1, 0.1, Math.hypot(x2 - x1, z2 - z1), "#222", 8), (x1 + x2) / 2, 2.65, (z1 + z2) / 2 - 1, g).rotation.set(0, -Math.atan2(z2 - z1, x2 - x1), Math.PI / 2);
    }
    block(-R - 0.4, -R - 1.4, R + 0.4, R - 0.6);
    // stands: rising rows of seats on three sides
    for (let r = 0; r < 5; r++) {
      at(box(w - 2, 0.5, 0.9, r % 2 ? "#7f1d1d" : "#991b1b"), 0, 0.25 + r * 0.5, -d / 2 + 1 + r * -0.0 + (4 - r) * 0.9, g).position.y = 0.25 + (4 - r) * 0.0 + r * 0.5;
    }
    for (const sx of [-1, 1]) for (let r = 0; r < 5; r++) {
      const s = at(box(0.9, 0.5, d - 6, r % 2 ? "#1e3a8a" : "#1d4ed8"), sx * (w / 2 - 1 - r * 0.9), 0.25 + r * 0.5, -1, g);
      void s;
    }
    block(-w / 2, -d / 2, w / 2, -d / 2 + 5.4);
    for (const sx of [-1, 1]) block(sx > 0 ? w / 2 - 5.4 : -w / 2, -d / 2, sx > 0 ? w / 2 : -w / 2 + 5.4, d / 2 - 3);
    const screen = at(sign((ctx.org || "GFC") + "  ·  FIGHT NIGHT", 8, 2.2, { w: 1024, h: 280, bg: "#0b0c12", fg: "#f4b942", font: "italic 900 110px Arial" }), 0, h - 2.4, -1, g);
    screen.rotation.x = 0.0;
    const spot = new THREE.SpotLight("#fff7e8", 60, 20, 0.5, 0.5, 1.2);
    spot.position.set(0, h - 0.5, -1);
    spot.target.position.set(0, 0.8, -1);
    g.add(spot, spot.target);
    person(2, 3.4, Math.PI, { seed: "Matchmaker", shirt: "#111", pants: "#111" });
  }

  const tick = (dt, t) => {
    for (const fn of ticks) fn(dt, t);
    for (const p of people) {
      p.t += dt;
      const f = p.f;
      if (p.dance) {
        f.root.position.y = Math.abs(Math.sin(p.t * 4)) * 0.06 * p.dance;
        f.root.rotation.y = p.ry + Math.sin(p.t * 1.3) * 0.6 * p.dance;
      }
      if (p.shadowbox && !f.queue && Math.random() < dt * 0.8) f.play(attack(["jab", "jab-cross", "left hook", "body kick", "uppercut"][Math.floor(Math.random() * 5)]).frames, "stance");
      f.update(dt);
    }
  };
  return { group: g, w, d, h, solids, people, tick };
}

/** The way back out, while indoors. */
const EXIT = { id: "exit", name: "outside", icon: "🚪" };

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
    this.interiors = {}; // built rooms, by place and what's in them
    this.inside = null;  // { id, I } while indoors

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
    const gfc = sign("FIGHT ARENA", 10, 2, { bg: "#111", fg: "#f4b942", font: "bold 80px Arial", border: "#d62828" });
    gfc.position.set(0, 4.4, -11.05);
    gfc.rotation.y = Math.PI;
    arena.add(gfc);
    at(box(3, 3, 0.4, "#111"), 0, 1.5, -10.9, arena);
    this.scene.add(arena);
    this.solid(19, 11, 41, 33);
    const al = label("🏆 The Arena", "#f4b942");
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
    const key = JSON.stringify([info.look, !!info.female, info.weightClass, L.house, L.cars, L.driving, L.pets.map((p) => p.kind + p.name), L.partner && [L.partner.look, L.partner.stage], L.kids.map((k) => k.look + k.age)]);
    if (key === this.key) return;
    this.key = key;
    const S = this.scene;
    if (!this.player || this.playerLook !== info.look + !!info.female) {
      if (this.player) this.player.dispose();
      this.player = new Fighter3D({ casual: true, look: parseLook(info.look), weightClass: info.weightClass, style: info.style, shirt: "#111111", pants: "#2b3a55", tattooText: info.ink, faceSeed: info.seed || "", female: !!info.female });
      this.playerLook = info.look + !!info.female;
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
      const f = new Fighter3D({ casual: true, look, shirt: shirts[look.shorts % 8], pants: "#1f2937", weightClass: 1, detail: "low", faceSeed: L.partner.name, female: (L.partner.gender || "F") === "F" });
      f.root.position.set(famX, 0, doorZ + 2.4);
      f.root.rotation.y = -0.5;
      S.add(f.root);
      this.family.push(f);
    }
    L.kids.forEach((k, i) => {
      const look = parseLook(k.look);
      const f = new Fighter3D({ casual: true, look: { ...look, beard: 0, body: 0, abs: 0 }, shirt: shirts[(look.shorts + i + 2) % 8], pants: "#334155", weightClass: 0, detail: "low", female: k.gender === "F" });
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
    return !!this.drivingId && !this.inside;
  }

  /** Walk in through a door. ctx: what the room shows ({ house, partner, cars, org }). */
  enterPlace(id, ctx = {}) {
    if (this.inside && this.inside.id === id) return;
    if (this.inside) this.leavePlace();
    if (this.driving) this.stopDriving();
    const key = id + "|" + JSON.stringify(ctx);
    let I = this.interiors[key];
    if (!I) {
      // a room built for an older life (smaller house, other cars) is replaced
      for (const k of Object.keys(this.interiors)) {
        if (!k.startsWith(id + "|")) continue;
        this.scene.remove(this.interiors[k].group);
        for (const p of this.interiors[k].people) p.f.dispose();
        delete this.interiors[k];
      }
      I = buildInterior(id, ctx);
      I.origin = new THREE.Vector3(1000 + PLACES.findIndex((p) => p.id === id) * 80, 0, 0);
      I.group.position.copy(I.origin);
      this.scene.add(I.group);
      this.interiors[key] = I;
    }
    for (const x of Object.values(this.interiors)) x.group.visible = x === I;
    const place = PLACES.find((p) => p.id === id);
    this.inside = { id, I, door: place.door, name: place.name, icon: place.icon };
    // a few steps in from the door, so the camera behind you has room
    this.pos.set(I.origin.x, 0, I.origin.z + I.d / 2 - 3.1);
    this.heading = Math.PI;
    this.camYaw = 0;
    this.camPitch = 0.26;
    this.camera.fov = 64;
    this.camera.updateProjectionMatrix();
    this.moveTarget = null;
    this.snapCam = true;
    // indoor light: no sun or sky
    this.outdoor ||= { bg: this.scene.background, fog: this.scene.fog, sun: this.sun.intensity, exposure: this.exposure };
    this.sun.intensity = 0;
    this.scene.fog = null;
    this.scene.background = new THREE.Color("#050506");
    this.exposure = 0.95;
    this.bringPets();
    this.near = null;
    if (this.onNear) this.onNear(null);
  }

  /** Step back out onto the street in front of the door. */
  leavePlace() {
    if (!this.inside) return;
    const [dx, dz] = this.inside.door;
    this.inside.I.group.visible = false;
    this.inside = null;
    const out = dz < 0 ? 1 : -1; // toward the street
    this.pos.set(dx, 0, dz + out * 2.2);
    this.heading = out > 0 ? 0 : Math.PI;
    this.camYaw = this.heading + Math.PI;
    this.camPitch = 0.42;
    this.camera.fov = 55;
    this.camera.updateProjectionMatrix();
    this.moveTarget = null;
    this.snapCam = true;
    if (this.outdoor) {
      this.scene.background = this.outdoor.bg;
      this.scene.fog = this.outdoor.fog;
      this.sun.intensity = this.outdoor.sun;
      this.exposure = this.outdoor.exposure;
    }
    this.bringPets();
  }

  /** Pets come along through doors. */
  bringPets() {
    this.pets.forEach((p, i) => p.root.position.set(this.pos.x + 0.8 + i * 0.5, 0, this.pos.z + 0.8));
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
    this.player.setBase("drive");
    this.steer = 0;
    this.speedNow = 0;
    return true;
  }

  stopDriving() {
    if (!this.driving) return false;
    this.scene.remove(this.driving);
    this.driving = null;
    this.player.setBase("relaxed");
    // step out beside the car
    this.pos.x += Math.cos(this.heading) * 1.6;
    this.pos.z -= Math.sin(this.heading) * 1.6;
    this.pos.copy(this.free(this.pos.x, this.pos.z, this.pos));
    return false;
  }

  /** Teleport home (opening the world). */
  goHome() {
    if (this.inside) this.leavePlace();
    this.pos.set(-38, 0, -6);
    this.heading = Math.PI;
    this.camYaw = 0;
    this.moveTarget = null;
    if (this.driving) this.stopDriving();
  }

  blocked(x, z, r) {
    if (this.inside) {
      const I = this.inside.I, lx = x - I.origin.x, lz = z - I.origin.z;
      if (Math.abs(lx) > I.w / 2 - 0.35 || Math.abs(lz) > I.d / 2 - 0.35) return true;
      for (const s of I.solids) if (lx > s[0] - r && lx < s[2] + r && lz > s[1] - r && lz < s[3] + r) return true;
      return false;
    }
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
    let want = dir ? maxV : 0;
    if (this.driving) {
      // a car turns by steering its front wheels while it rolls: it can't spin on the spot
      let diff = 0;
      if (dir) {
        diff = Math.atan2(dir.x, dir.z) - this.heading;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        // slow down for tight turns
        want *= Math.max(0.3, Math.min(1, Math.cos(diff) * 1.2));
      }
      const steerTo = Math.max(-0.6, Math.min(0.6, diff * 1.4));
      this.steer += (steerTo - this.steer) * damp(6, dt);
      const before = this.speedNow;
      this.speedNow += (want - this.speedNow) * damp(want > this.speedNow ? 1.6 : 2.6, dt);
      this.accel = (this.speedNow - before) / Math.max(dt, 1e-3);
      this.heading += (this.speedNow / this.driving.userData.wheelBase) * Math.tan(this.steer) * dt;
    } else {
      this.speedNow += (want - this.speedNow) * damp(10, dt);
      if (dir) this.heading = angleLerp(this.heading, Math.atan2(dir.x, dir.z), damp(12, dt));
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
      const car = this.driving, U = car.userData;
      car.position.copy(P);
      car.rotation.y = this.heading;
      for (const w of U.wheels) w.children.forEach((c) => (c.rotation.x += (this.speedNow * dt) / U.radius));
      for (const w of U.front) w.rotation.y = this.steer;
      U.wheelRing.rotation.z = -this.steer * 2.2;
      // body roll in corners, dip under braking, squat under power
      const roll = Math.max(-0.07, Math.min(0.07, -Math.tan(this.steer) * this.speedNow * this.speedNow * 0.0016));
      const pitch = Math.max(-0.04, Math.min(0.04, -(this.accel || 0) * 0.006));
      U.shell.rotation.z += (roll - U.shell.rotation.z) * damp(5, dt);
      U.shell.rotation.x += (pitch - U.shell.rotation.x) * damp(5, dt);
      // the driver sits in the seat and leans with the car
      car.updateMatrixWorld(true);
      const seat = U.shell.localToWorld(U.seat.clone());
      this.player.root.position.set(seat.x, seat.y - 0.46 * this.player.root.scale.y, seat.z);
      this.player.root.rotation.set(0, this.heading, 0);
      this.player.update(dt);
    } else {
      this.player.root.position.copy(P);
      this.player.root.rotation.y = this.heading;
      this.player.update(dt);
    }

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

    // closest door in reach (indoors: the way out)
    let near = null, best = 3.6;
    if (this.inside) {
      const I = this.inside.I;
      I.tick(dt, performance.now() / 1000);
      best = 0;
      if (Math.hypot(P.x - I.origin.x, P.z - (I.origin.z + I.d / 2 - 0.5)) < 1.4) near = EXIT;
    }
    for (const p of best ? PLACES : []) {
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
    const dist = this.driving ? 11 : this.inside ? 3.4 : 7.5;
    const c = this.camera;
    const tgt = new THREE.Vector3(P.x, this.driving ? 1.2 : 1.5, P.z);
    let cx = tgt.x + Math.sin(this.camYaw) * Math.cos(this.camPitch) * dist;
    let cz = tgt.z + Math.cos(this.camYaw) * Math.cos(this.camPitch) * dist;
    let cyp = tgt.y + Math.sin(this.camPitch) * dist;
    if (this.inside) {
      // keep the camera inside the walls
      const I = this.inside.I, m = 0.25;
      cx = Math.max(I.origin.x - I.w / 2 + m, Math.min(I.origin.x + I.w / 2 - m, cx));
      cz = Math.max(I.origin.z - I.d / 2 + m, Math.min(I.origin.z + I.d / 2 - m, cz));
      cyp = Math.min(I.h - 0.3, cyp);
    }
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
