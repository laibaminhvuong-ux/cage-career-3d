// The open world: a small city the fighter walks (or drives) around between fights. Home changes
// with the house they own, their cars sit in the driveway, pets follow them around, and their
// partner and kids wait at home. Every place in town opens a screen in the app.
import * as THREE from "./vendor/three.module.min.js";
import { Fighter3D, LOOK_OPTIONS, attack, parseLook, lookFromName } from "./fighter3d.js";
import { buildHouse } from "./house3d.js";
import { decorateVenue } from "./venue-details3d.js";
import { decorateVenueExtras } from "./venue-extras3d.js";

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
  at(cyl(0.16, 0.28, 2.6, "#5d4128", 8), 0, 1.3, 0, g);
  // branches up into the crown, then leafy clumps in a few shades
  for (let i = 0; i < 3; i++) {
    const br = at(cyl(0.05, 0.09, 1.3, "#5d4128", 6), Math.cos(i * 2.1) * 0.3, 2.7, Math.sin(i * 2.1) * 0.3, g);
    br.rotation.set(Math.sin(i * 2.1) * 0.6, 0, -Math.cos(i * 2.1) * 0.6);
  }
  const greens = kind === "dark" ? ["#285f33", "#2f6d3a", "#22532c"] : ["#3f8f4a", "#4c9c50", "#357d40"];
  const R = 1.3 + Math.random() * 0.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + Math.random() * 0.5;
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(R * (0.6 + Math.random() * 0.25), 1), mat(greens[i % 3], { roughness: 0.9, flatShading: true }));
    leaf.position.set(Math.cos(a) * R * 0.55, 3.2 + Math.random() * 0.8, Math.sin(a) * R * 0.55);
    leaf.castShadow = true;
    g.add(leaf);
  }
  const top = new THREE.Mesh(new THREE.IcosahedronGeometry(R * 0.75, 1), mat(greens[1], { roughness: 0.9, flatShading: true }));
  top.position.y = 4.3;
  top.castShadow = true;
  g.add(top);
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

/** Floorboards (light = true) or tiles, as a texture tiled every 4 m. */
function floorTexture(color, kind = "planks") {
  const key = "floor" + color + kind;
  if (texCache[key]) return texCache[key];
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const base = new THREE.Color(color);
  const shade = (k) => base.clone().multiplyScalar(k).getStyle();
  if (kind === "planks") {
    for (let row = 0; row < 8; row++) {
      for (let x = -(row % 2) * 64; x < 256; x += 128) {
        g.fillStyle = shade(0.86 + Math.random() * 0.24);
        g.fillRect(x, row * 32, 128, 32);
        // grain
        g.strokeStyle = shade(0.75);
        g.globalAlpha = 0.25;
        for (let k = 0; k < 4; k++) {
          g.beginPath();
          g.moveTo(x, row * 32 + 4 + k * 7 + Math.random() * 3);
          g.bezierCurveTo(x + 40, row * 32 + Math.random() * 30, x + 90, row * 32 + Math.random() * 30, x + 128, row * 32 + 4 + k * 7);
          g.stroke();
        }
        g.globalAlpha = 1;
        g.fillStyle = shade(0.55);
        g.fillRect(x, row * 32, 2, 32);
      }
      g.fillStyle = shade(0.5);
      g.fillRect(0, row * 32, 256, 1.5);
    }
  } else {
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      g.fillStyle = shade(0.92 + Math.random() * 0.12);
      g.fillRect(i * 64, j * 64, 64, 64);
    }
    g.strokeStyle = shade(0.6);
    g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 256); g.stroke();
      g.beginPath(); g.moveTo(0, i * 64); g.lineTo(256, i * 64); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return (texCache[key] = t);
}

/** Painted plaster: a faint mottle so walls don't look like flat plastic. */
function plasterTexture(color) {
  const key = "plaster" + color;
  if (texCache[key]) return texCache[key];
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = color;
  g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 900; i++) {
    g.fillStyle = Math.random() < 0.5 ? "rgba(0,0,0,0.018)" : "rgba(255,255,255,0.025)";
    g.fillRect(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 4, 2 + Math.random() * 4);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return (texCache[key] = t);
}

/** An empty room facing -z from its door at +z: floor, walls, ceiling, skirting, ceiling lights. */
function room(w, d, h, { floor = "#9a7b58", floorTex = null, floorRough = null, wall = "#e9e2d4", wallTex = null, backTex = null, ceiling = "#f4f1ea", light = "#fff1dc", lights = 2, power = 14, windows = "both",
  view = "day", wainscot = null, ceilingStyle = "flat", hemi = 0.18 } = {}) {
  const g = new THREE.Group();
  // floors get boards (warm colors) or large tiles; walls get painted plaster
  const warm = new THREE.Color(floor).getHSL({}).h < 0.15 && new THREE.Color(floor).getHSL({}).l > 0.25;
  const ft = (floorTex || floorTexture(floor, warm ? "planks" : "tiles")).clone();
  ft.needsUpdate = true;
  ft.repeat.set(w / 4, d / 4);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: ft, roughness: floorRough ?? (warm ? 0.6 : 0.5) }));
  fl.rotation.x = -Math.PI / 2;
  fl.receiveShadow = true;
  g.add(fl);
  const ce = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat(ceiling));
  ce.rotation.x = Math.PI / 2;
  ce.position.y = h;
  g.add(ce);
  // walls: painted plaster, or brick / slats (tiled about every 2.5 m); the back wall can differ
  const wallMat = (tex) => {
    const t = (tex || plasterTexture(wall)).clone();
    t.needsUpdate = true;
    t.repeat.set(tex ? w / 2.5 : 3, tex ? h / 2.5 : 1.5);
    return new THREE.MeshStandardMaterial({ map: t, roughness: tex ? 0.85 : 0.92 });
  };
  const wallM = wallMat(wallTex);
  const backM = backTex ? wallMat(backTex) : wallM;
  const wallAt = (ww, x, z, ry, m0 = wallM) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(ww, h), m0);
    m.position.set(x, h / 2, z);
    m.rotation.y = ry;
    m.receiveShadow = true;
    g.add(m);
    const sk = box(ww, 0.12, 0.03, "#3b332b");
    sk.position.set(x, 0.06, z);
    sk.rotation.y = ry;
    g.add(sk);
    // crown molding where the wall meets the ceiling
    const cm = box(ww, 0.08, 0.08, new THREE.Color(ceiling).multiplyScalar(0.92).getStyle());
    cm.position.set(x, h - 0.04, z);
    cm.rotation.y = ry;
    g.add(cm);
    // wainscoting: panelled lower wall with a rail
    if (wainscot) {
      const p = box(ww, 1.0, 0.03, wainscot, { roughness: 0.55 });
      p.position.set(x, 0.5, z);
      p.rotation.y = ry;
      p.translateZ(0.015);
      g.add(p);
      const rail = box(ww, 0.06, 0.06, new THREE.Color(wainscot).multiplyScalar(0.8).getStyle(), { roughness: 0.5 });
      rail.position.set(x, 1.02, z);
      rail.rotation.y = ry;
      rail.translateZ(0.03);
      g.add(rail);
    }
  };
  // ceilings: plain, timber beams, or an industrial roof of steel trusses
  if (ceilingStyle === "beams") {
    for (let x = -w / 2 + 1.2; x < w / 2; x += 2.2) at(box(0.22, 0.26, d, "#4a3221", { roughness: 0.8 }), x, h - 0.13, 0, g);
  } else if (ceilingStyle === "industrial") {
    ce.material = mat("#24262b", { roughness: 0.9 });
    for (let z = -d / 2 + 1.5; z < d / 2; z += 3) {
      at(box(w, 0.3, 0.14, "#3a3f47", { metalness: 0.6, roughness: 0.45 }), 0, h - 0.4, z, g);
      for (let x = -w / 2 + 1; x < w / 2; x += 2.5) at(box(0.06, 0.4, 0.06, "#3a3f47", { metalness: 0.6 }), x, h - 0.2, z, g);
    }
    for (const x of [-w / 4, w / 4]) at(cyl(0.18, 0.18, d, "#9ca3af", 12, { metalness: 0.8, roughness: 0.35 }), x, h - 0.75, 0, g).rotation.x = Math.PI / 2;
  }
  // windows in the side walls: bright daylight with frames and a mullion
  const daylight = new THREE.MeshBasicMaterial({ map: viewTexture(view === "night"), color: view === "night" ? "#ffffff" : "#e8f2ff", toneMapped: false });
  const sides = { both: [-1, 1], left: [-1], right: [1], none: [] }[windows] || [];
  for (const sx of sides) for (const wz of d > 9 ? [-d / 4, d / 5] : [0]) {
    const win = new THREE.Group();
    win.add(new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.2), daylight));
    at(box(1.75, 0.08, 0.06, "#e8e4dc"), 0, 0.64, 0, win);
    at(box(1.75, 0.08, 0.06, "#e8e4dc"), 0, -0.64, 0, win);
    for (const x of [-0.84, 0, 0.84]) at(box(0.06, 1.3, 0.06, "#e8e4dc"), x, 0, 0, win);
    at(box(1.8, 0.05, 0.18, "#e8e4dc"), 0, -0.68, 0.08, win);
    win.position.set(sx * (w / 2 - 0.02), Math.min(1.75, h - 1.0), wz);
    win.rotation.y = -sx * Math.PI / 2;
    g.add(win);
  }
  wallAt(w, 0, -d / 2, 0, backM);
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
  g.add(new THREE.HemisphereLight("#fff6ea", "#5d5045", hemi));
  for (let i = 0; i < lights; i++) {
    const x = lights === 1 ? 0 : -w / 4 + (i * w) / 2 / Math.max(1, lights - 1);
    const p = new THREE.PointLight(light, power, Math.max(w, d) * 1.4, 1.6);
    p.position.set(x, h - 0.4, 0);
    if (i === 0) {
      p.castShadow = true;
      p.shadow.mapSize.set(512, 512);
    }
    g.add(p);
    // the fitting: a trim ring around a glowing diffuser
    at(cyl(0.34, 0.34, 0.04, "#d1d5db", 20, { metalness: 0.6, roughness: 0.3 }), x, h - 0.02, 0, g);
    at(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 20), new THREE.MeshBasicMaterial({ color: light, toneMapped: false })), x, h - 0.03, 0, g);
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
// ---- interior materials: drawn once on a canvas, cached, tiled
function canvasTex(key, w, h, draw, repeat = true) {
  if (texCache[key]) return texCache[key];
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return (texCache[key] = t);
}
const tiled = (t, rx, ry) => {
  const c = t.clone();
  c.needsUpdate = true;
  c.repeat.set(rx, ry);
  return c;
};
/** Brick, each one a slightly different shade, with mortar lines. */
const brickTexture = (color = "#8a4a36", mortar = "#c9bba6") => canvasTex("brick" + color + mortar, 256, 256, (g) => {
  g.fillStyle = mortar;
  g.fillRect(0, 0, 256, 256);
  const base = new THREE.Color(color);
  for (let r = 0; r < 8; r++) for (let x = -(r % 2) * 32; x < 256; x += 64) {
    const k = 0.78 + Math.random() * 0.4;
    g.fillStyle = base.clone().multiplyScalar(k).getStyle();
    g.fillRect(x + 2, r * 32 + 2, 60, 28);
    g.fillStyle = "rgba(0,0,0,0.08)";
    for (let i = 0; i < 12; i++) g.fillRect(x + 2 + Math.random() * 58, r * 32 + 2 + Math.random() * 26, 2, 2);
  }
});
/** Vertical wood slats, for feature walls. */
const slatTexture = (color = "#5a3b24") => canvasTex("slat" + color, 256, 256, (g) => {
  const base = new THREE.Color(color);
  for (let x = 0; x < 256; x += 16) {
    g.fillStyle = base.clone().multiplyScalar(0.85 + Math.random() * 0.3).getStyle();
    g.fillRect(x, 0, 13, 256);
    g.fillStyle = "rgba(0,0,0,0.55)";
    g.fillRect(x + 13, 0, 3, 256);
  }
});
/** A rug: a field, a border and a repeating motif. */
const rugTexture = (field, border, motif) => canvasTex("rug" + field + border + motif, 256, 256, (g, w, h) => {
  g.fillStyle = border;
  g.fillRect(0, 0, w, h);
  g.fillStyle = field;
  g.fillRect(22, 22, w - 44, h - 44);
  g.strokeStyle = motif;
  g.lineWidth = 3;
  g.strokeRect(12, 12, w - 24, h - 24);
  g.strokeRect(30, 30, w - 60, h - 60);
  for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) {
    g.save();
    g.translate(54 + i * 37, 54 + j * 37);
    g.rotate(Math.PI / 4);
    g.strokeRect(-7, -7, 14, 14);
    g.restore();
  }
  g.fillStyle = "rgba(0,0,0,0.05)";
  for (let i = 0; i < 1500; i++) g.fillRect(Math.random() * w, Math.random() * h, 1, 1);
}, false);
/** Rubber gym flooring: dark with flecks. */
const rubberTexture = () => canvasTex("rubber", 256, 256, (g) => {
  g.fillStyle = "#1c1f24";
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = ["#3a3f47", "#2a2e35", "#4b5563", "#7f1d1d"][Math.floor(Math.random() * (i % 23 ? 3 : 4))];
    g.fillRect(Math.random() * 256, Math.random() * 256, 1.5, 1.5);
  }
  g.strokeStyle = "rgba(0,0,0,0.6)";
  g.lineWidth = 2;
  g.strokeRect(0, 0, 256, 256);
});
/** Polished concrete. */
const concreteTexture = (tone = "#8d8f93") => canvasTex("concrete" + tone, 256, 256, (g) => {
  g.fillStyle = tone;
  g.fillRect(0, 0, 256, 256);
  // soft clouds, blurred and wrapped so the tile repeats seamlessly
  g.filter = "blur(18px)";
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * 256, y = Math.random() * 256, r = 30 + Math.random() * 50;
    g.fillStyle = Math.random() < 0.5 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.04)";
    for (const ox of [-256, 0, 256]) for (const oy of [-256, 0, 256]) {
      g.beginPath();
      g.arc(x + ox, y + oy, r, 0, TAU);
      g.fill();
    }
  }
  g.filter = "none";
  for (let i = 0; i < 3000; i++) {
    g.fillStyle = Math.random() < 0.5 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)";
    g.fillRect(Math.random() * 256, Math.random() * 256, 1, 1);
  }
});
/** A chalkboard menu. */
const chalkTexture = (title, lines) => canvasTex("chalk" + title + lines.join(), 512, 384, (g, w, h) => {
  g.fillStyle = "#1d2420";
  g.fillRect(0, 0, w, h);
  g.fillStyle = "rgba(255,255,255,0.04)";
  for (let i = 0; i < 300; i++) g.fillRect(Math.random() * w, Math.random() * h, 8, 2);
  g.fillStyle = "#f4efe2";
  g.textAlign = "center";
  g.font = "italic bold 52px Georgia";
  g.fillText(title, w / 2, 64);
  g.font = "30px Georgia";
  lines.forEach((l, i) => {
    g.fillStyle = i % 2 ? "#ffd59a" : "#f4efe2";
    g.fillText(l, w / 2, 130 + i * 48);
  });
  g.strokeStyle = "#8b6b46";
  g.lineWidth = 16;
  g.strokeRect(0, 0, w, h);
}, false);
/** What you see through a window: a skyline at golden hour, or by day. */
const viewTexture = (night) => canvasTex("view" + night, 512, 256, (g, w, h) => {
  const sky = g.createLinearGradient(0, 0, 0, h);
  if (night) { sky.addColorStop(0, "#1b2140"); sky.addColorStop(0.55, "#a8507a"); sky.addColorStop(1, "#ffb36b"); }
  else { sky.addColorStop(0, "#8ec5ff"); sky.addColorStop(1, "#e8f4ff"); }
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);
  for (let x = 0; x < w;) {
    const bw = 18 + Math.random() * 40, bh = 40 + Math.random() * 130;
    g.fillStyle = night ? "#1a1726" : "#9fb3c8";
    g.fillRect(x, h - bh, bw, bh);
    if (night) for (let wy = h - bh + 6; wy < h - 6; wy += 9) for (let wx = x + 4; wx < x + bw - 4; wx += 7) if (Math.random() < 0.45) {
      g.fillStyle = Math.random() < 0.8 ? "#ffd27a" : "#9fd3ff";
      g.fillRect(wx, wy, 3, 4);
    }
    x += bw + 2;
  }
}, false);

/** A bookcase full of books. */
function bookshelf(w = 1.6, h = 2.1, wood = "#3b2a1d") {
  const g = new THREE.Group();
  at(box(w, h, 0.36, wood), 0, h / 2, 0, g);
  const rows = Math.floor((h - 0.2) / 0.42);
  const cols = ["#7f1d1d", "#1e3a8a", "#14532d", "#a16207", "#e5e7eb", "#111827", "#9a3412", "#4c1d95"];
  for (let r = 0; r < rows; r++) {
    const y = 0.12 + r * 0.42;
    for (let x = -w / 2 + 0.08; x < w / 2 - 0.12;) {
      const bw = 0.04 + Math.random() * 0.05, bh = 0.24 + Math.random() * 0.12;
      if (Math.random() < 0.1) { x += 0.12; continue; }
      at(box(bw, bh, 0.24, cols[Math.floor(Math.random() * cols.length)]), x + bw / 2, y + bh / 2 + 0.02, 0.04, g).castShadow = false;
      x += bw + 0.005;
    }
  }
  // carcass front faces: shelves and sides
  for (let r = 0; r <= rows; r++) at(box(w, 0.04, 0.36, wood), 0, 0.1 + r * 0.42, 0.01, g);
  return g;
}
/** A glowing lamp shade on a stand: no real light, it glows and blooms. */
function floorLamp(shade = "#f6e7c8", h = 1.6) {
  const g = new THREE.Group();
  at(cyl(0.18, 0.2, 0.04, "#1f1f1f", 18, { metalness: 0.6, roughness: 0.35 }), 0, 0.02, 0, g);
  at(cyl(0.015, 0.015, h, "#1f1f1f", 8, { metalness: 0.7, roughness: 0.3 }), 0, h / 2, 0, g);
  at(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.26, 0.32, 20, 1, true), new THREE.MeshStandardMaterial({ color: shade, emissive: shade, emissiveIntensity: 1.3, side: THREE.DoubleSide, roughness: 0.9 })), 0, h, 0, g);
  return g;
}
/** A pendant: cord, shade and a hot bulb. */
function pendant(drop = 0.8, shade = "#1f1f1f", bulb = "#ffd59a") {
  const g = new THREE.Group();
  at(cyl(0.006, 0.006, drop, "#111", 4), 0, -drop / 2, 0, g);
  at(new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.22, 20, 1, true), mat(shade, { side: THREE.DoubleSide, metalness: 0.5, roughness: 0.35 })), 0, -drop - 0.06, 0, g);
  at(new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshBasicMaterial({ color: bulb, toneMapped: false })), 0, -drop - 0.15, 0, g);
  return g;
}
/** Curtains either side of a window. */
function curtains(width, height, color) {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.95, side: THREE.DoubleSide });
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const fold = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, height, 8, 1, true, 0, Math.PI), m);
      fold.position.set(sx * (width / 2 + 0.05 + i * 0.13), height / 2, 0.05);
      fold.rotation.y = Math.PI;
      g.add(fold);
    }
  }
  at(cyl(0.02, 0.02, width + 1.4, "#2b2b2b", 8, { metalness: 0.7 }), 0, height + 0.05, 0.05, g).rotation.z = Math.PI / 2;
  return g;
}
/** A strip of neon (glows, blooms). */
function neon(len, color, vertical = false) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, len, 8), new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  if (!vertical) m.rotation.z = Math.PI / 2;
  return m;
}
function cushion(color) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), mat(color, { roughness: 0.95 }));
  m.scale.set(1, 0.85, 0.42);
  m.castShadow = true;
  return m;
}
function stool(seat = "#1f1f1f") {
  const g = new THREE.Group();
  at(cyl(0.2, 0.2, 0.06, seat, 16), 0, 0.76, 0, g);
  at(cyl(0.025, 0.025, 0.74, "#9ca3af", 8, { metalness: 0.8, roughness: 0.3 }), 0, 0.37, 0, g);
  at(new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 20), mat("#9ca3af", { metalness: 0.8, roughness: 0.3 })), 0, 0.3, 0, g).rotation.x = Math.PI / 2;
  at(cyl(0.18, 0.2, 0.02, "#9ca3af", 16, { metalness: 0.8 }), 0, 0.01, 0, g);
  return g;
}
/** A fireplace with a living fire. Returns { group, tick }. */
function fireplace(withLight = true) {
  const g = new THREE.Group();
  at(box(2.2, 1.3, 0.5, "#e9e5dc", { roughness: 0.6 }), 0, 0.65, 0, g);
  at(box(1.3, 0.75, 0.52, "#0d0b0a"), 0, 0.5, 0.01, g);
  at(box(2.5, 0.08, 0.6, "#d6d0c4"), 0, 1.33, 0.02, g);
  const flames = [];
  for (let i = 0; i < 5; i++) {
    const f = at(new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 8), new THREE.MeshBasicMaterial({ color: i % 2 ? "#ffb347" : "#ff6a1a", toneMapped: false, transparent: true, opacity: 0.9 })), -0.32 + i * 0.16, 0.38, 0.12, g);
    flames.push(f);
  }
  for (let i = 0; i < 3; i++) at(cyl(0.05, 0.05, 0.6, "#3b2414", 6), -0.15 + i * 0.15, 0.17, 0.12, g).rotation.z = Math.PI / 2;
  const light = new THREE.PointLight("#ff8a3d", 3, 6, 1.8);
  light.position.set(0, 0.6, 0.6);
  if (withLight) g.add(light);
  const tick = (dt, t) => {
    flames.forEach((f, i) => { f.scale.y = 0.8 + Math.abs(Math.sin(t * (7 + i) + i * 2)) * 0.6; f.scale.x = 0.9 + Math.sin(t * 5 + i) * 0.15; });
    light.intensity = 2.6 + Math.sin(t * 13) * 0.4 + Math.sin(t * 7.3) * 0.3;
  };
  return { group: g, tick };
}
// ---- gym equipment
function squatRack() {
  const g = new THREE.Group();
  const steel = mat("#2b2f36", { metalness: 0.7, roughness: 0.35 });
  for (const x of [-0.6, 0.6]) for (const z of [-0.5, 0.5]) at(box(0.08, 2.3, 0.08, steel), x, 1.15, z, g);
  for (const z of [-0.5, 0.5]) at(box(1.28, 0.08, 0.08, steel), 0, 2.3, z, g);
  const bar = at(cyl(0.025, 0.025, 2.2, "#c0c4ca", 8, { metalness: 0.9, roughness: 0.2 }), 0, 1.45, 0.5, g);
  bar.rotation.z = Math.PI / 2;
  for (const x of [-0.85, 0.85]) for (let i = 0; i < 2; i++) at(cyl(0.22 - i * 0.04, 0.22 - i * 0.04, 0.05, i ? "#c8102e" : "#111", 20), x + Math.sign(x) * i * 0.06, 1.45, 0.5, g).rotation.z = Math.PI / 2;
  return g;
}
function bench() {
  const g = new THREE.Group();
  at(box(0.32, 0.1, 1.2, "#111", { roughness: 0.5 }), 0, 0.45, 0, g);
  for (const z of [-0.45, 0.45]) at(box(0.4, 0.42, 0.06, "#2b2f36", { metalness: 0.6 }), 0, 0.21, z, g);
  return g;
}
function kettlebells(n = 6) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const s = 0.11 + i * 0.012;
    at(sphere(s, "#151515", { roughness: 0.5, metalness: 0.4 }), i * 0.36, s, 0, g);
    at(new THREE.Mesh(new THREE.TorusGeometry(s * 0.6, 0.018, 6, 14, Math.PI), mat("#151515", { metalness: 0.4 })), i * 0.36, s * 1.8, 0, g);
  }
  return g;
}
function treadmill() {
  const g = new THREE.Group();
  at(box(0.8, 0.18, 1.8, "#1f2328"), 0, 0.09, 0, g);
  at(box(0.62, 0.02, 1.5, "#0b0b0b"), 0, 0.19, 0.05, g);
  for (const x of [-0.36, 0.36]) at(box(0.05, 1.1, 0.05, "#3a3f47", { metalness: 0.6 }), x, 0.65, -0.75, g);
  at(box(0.78, 0.3, 0.12, "#2b2f36"), 0, 1.25, -0.78, g);
  at(new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.18), new THREE.MeshBasicMaterial({ color: "#38bdf8", toneMapped: false })), 0, 1.27, -0.71, g);
  return g;
}
/** A U-shaped club booth with a table. */
function booth(color) {
  const g = new THREE.Group();
  at(sofa(2.4, color), 0, 0, -0.6, g);
  for (const sx of [-1, 1]) at(sofa(1.4, color), sx * 1.4, 0, 0.3, g).rotation.y = -sx * Math.PI / 2;
  at(roundTable(0.5), 0, 0, 0.3, g);
  for (let i = 0; i < 3; i++) at(cyl(0.035, 0.045, 0.32, ["#d4af37", "#14532d", "#ddd"][i], 8, { roughness: 0.1, metalness: 0.3 }), -0.15 + i * 0.15, 0.93, 0.3, g);
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

// the building blocks a house (house3d.js) furnishes its rooms with
const KIT = {
  box, at, mat, cyl, sphere, textTexture, sign, picture, poster, emojiArt, plant, chair, table, roundTable, sofa, counter, npc, randomPerson,
  floorTexture, plasterTexture, canvasTex, tiled, brickTexture, slatTexture, rugTexture, rubberTexture, concreteTexture, chalkTexture, viewTexture,
  bookshelf, floorLamp, pendant, curtains, neon, cushion, stool, fireplace, squatRack, bench, kettlebells, treadmill, booth,
};

/** Builds the inside of a place. Returns { group, w, d, h, solids, npcs, tick(dt, t) }. */
function buildInterior(id, ctx) {
  // a home is a whole floor plan of rooms
  if (id === "home") return buildHouse(KIT, ctx);
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
  // each room's mood: exposure, post-processing look, the color its reflections are captured on
  let exposure = 0.9, look = null, bg = "#15130f", fog = null;

  if (id === "club") {
    w = 16; d = 12; h = 4.2;
    g = room(w, d, h, { floorTex: concreteTexture("#1a1620"), floorRough: 0.42, wall: "#1d1626", wallTex: brickTexture("#2b2035", "#100c15"), ceiling: "#0c0a10", light: "#b46cff", lights: 2, power: 9, windows: "none", hemi: 0.08, ceilingStyle: "industrial" });
    exposure = 0.95;
    bg = "#1a0f24";
    fog = new THREE.FogExp2("#1a0d26", 0.035);
    look = { bloom: [0.85, 0.6, 0.55], ao: 0.5, contrast: 1.16, saturation: 1.3, warmth: 0.1, vignette: 0.45, grain: 0.03 };
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
    // neon running round the walls at two heights, pulsing through the colors
    const strips = [];
    for (const [len, x, z, ry] of [[w - 0.4, 0, -d / 2 + 0.06, 0], [d - 0.4, -w / 2 + 0.06, 0, Math.PI / 2], [d - 0.4, w / 2 - 0.06, 0, Math.PI / 2]]) {
      for (const [y, c] of [[0.35, "#ff3cac"], [h - 0.3, "#2b86c5"]]) {
        const n = at(neon(len, c), x, y, z, g);
        n.rotation.y = ry;
        strips.push(n);
      }
    }
    ticks.push((dt, t) => strips.forEach((n, i) => n.material.color.set(cols[Math.floor(t * 0.8 + i * 0.5) % cols.length])));
    // lasers fanning out from the DJ booth
    const lasers = [];
    for (let i = 0; i < 6; i++) {
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 14, 4), new THREE.MeshBasicMaterial({ color: i % 2 ? "#00f5d4" : "#ff3cac", toneMapped: false, transparent: true, opacity: 0.7 }));
      l.geometry.translate(0, 7, 0);
      const pivot = at(new THREE.Group(), 0, 2.6, -d / 2 + 0.9, g);
      pivot.add(l);
      lasers.push(pivot);
    }
    ticks.push((dt, t) => lasers.forEach((p, i) => p.rotation.set(1.25 + Math.sin(t * 0.9 + i) * 0.2, 0, -0.9 + i * 0.36 + Math.sin(t * 1.7 + i * 2) * 0.25)));
    // the bar's back shelf glows from below
    at(neon(4.2, "#fee440", true), w / 2 - 0.08, 1.38, 1.2, g).rotation.x = Math.PI / 2;
    at(neon(4.2, "#fee440", true), w / 2 - 0.08, 1.83, 1.2, g).rotation.x = Math.PI / 2;
    // VIP booths on the left, under a sign
    for (const z of [-2.6, 1.6]) {
      at(booth("#4c1d95"), -w / 2 + 1.5, 0, z, g).rotation.y = Math.PI / 2;
      block(-w / 2, z - 1.6, -w / 2 + 2.6, z + 1.6);
    }
    at(sign("VIP", 1.6, 0.6, { bg: "#0b0710", fg: "#fee440", font: "bold 90px Arial" }), -w / 2 + 0.05, 2.6, -0.5, g).rotation.y = Math.PI / 2;
  } else if (id === "ink") {
    w = 10; d = 8; h = 3.2;
    g = room(w, d, h, { floorTex: concreteTexture("#4a4a4f"), floorRough: 0.6, wall: "#3a3a40", wallTex: brickTexture("#5c3a2e", "#2a2422"), backTex: plasterTexture("#e9e1cf"), ceiling: "#1c1c20", light: "#ffe2c0", lights: 2, power: 10, windows: "none", hemi: 0.1, ceilingStyle: "industrial" });
    exposure = 0.92;
    bg = "#1d1714";
    look = { bloom: [0.55, 0.5, 0.7], ao: 0.6, contrast: 1.14, saturation: 1.05, warmth: 0.65, vignette: 0.42, grain: 0.03 };
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
    // the waiting corner: a leather sofa on a rug, a lamp
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.8), new THREE.MeshStandardMaterial({ map: rugTexture("#5b1a1a", "#1a1a1a", "#c9a227"), roughness: 1 }));
    rug.rotation.x = -Math.PI / 2;
    at(rug, -w / 2 + 1.8, 0.01, 2.2, g);
    at(sofa(2.2, "#3b2416"), -w / 2 + 0.75, 0, 2.2, g).rotation.y = Math.PI / 2;
    block(-w / 2, 1.1, -w / 2 + 1.3, 3.3);
    at(floorLamp("#ffcf8a"), -w / 2 + 0.6, 0, 0.7, g);
    // shelves of ink bottles beside the chair
    for (let s2 = 0; s2 < 3; s2++) {
      at(box(1.6, 0.04, 0.25, "#2a1d14"), -3.6, 0.9 + s2 * 0.45, -d / 2 + 0.15, g);
      for (let i = 0; i < 9; i++) at(cyl(0.035, 0.035, 0.14, ["#111", "#7f1d1d", "#1e3a8a", "#14532d", "#a16207", "#6b21a8"][(i + s2) % 6], 8, { roughness: 0.15 }), -4.25 + i * 0.16, 0.99 + s2 * 0.45, -d / 2 + 0.15, g);
    }
    // a work light over the chair and neon trim on the walls
    for (const x of [-1.6, -0.6]) at(pendant(1.2, "#111", "#fff1d6"), x, h, -1.2, g);
    at(neon(d - 1, "#3cf7ff"), w / 2 - 0.06, h - 0.25, 0, g).rotation.y = Math.PI / 2;
    at(neon(w - 1, "#ff3cac"), 0, h - 0.25, -d / 2 + 0.06, g);
  } else if (id === "cafe") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floorTex: floorTexture("#9c6b43", "planks"), floorRough: 0.62, wall: "#e6d3b3", backTex: brickTexture("#9a5638", "#d9cbb2"), light: "#ffd9a0", lights: 3, power: 9, wainscot: "#4a6b5d", ceilingStyle: "beams", hemi: 0.14 });
    exposure = 0.86;
    bg = "#2a1d12";
    look = { bloom: [0.4, 0.5, 0.8], ao: 0.7, contrast: 1.1, saturation: 1.12, warmth: 0.85, vignette: 0.34, grain: 0.02 };
    const bar = at(counter(5, "#5b3a24", "#e9e2d6"), 0, 0, -d / 2 + 1.3, g);
    void bar;
    block(-2.6, -d / 2 + 0.8, 2.6, -d / 2 + 1.7);
    at(box(0.8, 0.6, 0.5, "#c0c0c0", { metalness: 0.9, roughness: 0.25 }), -1.6, 1.35, -d / 2 + 1.3, g); // espresso machine
    at(box(1.4, 0.45, 0.6, "#cfe8f5", { transparent: true, opacity: 0.35, roughness: 0.05 }), 1.2, 1.27, -d / 2 + 1.3, g); // pastry case
    for (let i = 0; i < 6; i++) at(sphere(0.08, ["#c47a2c", "#f0c27b", "#7b3f1d"][i % 3]), 0.7 + i * 0.2, 1.12, -d / 2 + 1.3, g);
    at(new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.8), new THREE.MeshStandardMaterial({ map: chalkTexture("Menu", ["Espresso  $3", "Flat white  $4", "Iced latte  $5", "Protein shake  $6", "Acai bowl  $9"]), roughness: 0.9 })), -2.6, 2.05, -d / 2 + 0.04, g);
    // open shelves of cups and jars, a sign over the counter
    for (let s2 = 0; s2 < 2; s2++) {
      at(box(2.4, 0.05, 0.28, "#5b3a24"), 2.4, 1.75 + s2 * 0.5, -d / 2 + 0.16, g);
      for (let i = 0; i < 8; i++) (i % 3 === 2 ? at(cyl(0.07, 0.07, 0.22, "#d9f0ff", 10, { transparent: true, opacity: 0.55, roughness: 0.05 }), 1.35 + i * 0.3, 1.89 + s2 * 0.5, -d / 2 + 0.16, g)
        : at(cyl(0.05, 0.04, 0.09, ["#f5f5f4", "#1f2937", "#b45309"][(i + s2) % 3], 10), 1.35 + i * 0.3, 1.82 + s2 * 0.5, -d / 2 + 0.16, g));
    }
    at(sign("BEAN THERE ☕", 2.6, 0.45, { bg: "#14100c", fg: "#ffcf8a", font: "bold 64px Georgia" }), 2.4, 2.85, -d / 2 + 0.04, g);
    person(0, -d / 2 + 0.5, 0, { seed: "Barista Mai", shirt: "#6b3e26" });
    for (const [x, z] of [[-3.5, 0.5], [-1.8, 1.9], [1.8, 0.4], [3.8, 1.8], [-3.6, 2.9]]) {
      at(roundTable(), x, 0, z, g);
      at(chair("#4a3626"), x - 0.7, 0, z, g).rotation.y = Math.PI / 2;
      at(chair("#4a3626"), x + 0.7, 0, z, g).rotation.y = -Math.PI / 2;
      at(cyl(0.05, 0.04, 0.1, "#fff", 10), x, 0.82, z, g);
      block(x - 1, z - 0.5, x + 1, z + 0.5);
    }
    person(-2.5, 1.9, Math.PI / 2, { seed: "Cafe guest", shirt: "#2563eb", sit: true });
    // Edison-bulb pendants over the tables, wall lamps between the windows
    for (const [x, z] of [[-3.5, 0.5], [-1.8, 1.9], [1.8, 0.4], [3.8, 1.8], [-3.6, 2.9]]) at(pendant(1.1, "#2b2b2b", "#ffb860"), x, h, z, g);
    for (const z of [-1.2, 2.6]) for (const sx of [-1, 1]) {
      const wl = at(new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8, 0, TAU, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: "#ffe2b0", emissive: "#ffb860", emissiveIntensity: 1.4 })), sx * (w / 2 - 0.08), 2.3, z, g);
      wl.rotation.z = sx * Math.PI / 2;
    }
    at(plant(), w / 2 - 0.6, 0, d / 2 - 0.7, g);
    at(plant(1.3), -w / 2 + 0.6, 0, d / 2 - 0.7, g);
    at(plant(0.8), 2.6, 2.32, -d / 2 + 0.2, g);
  } else if (id === "gym") {
    w = 18; d = 14; h = 5;
    g = room(w, d, h, { floorTex: rubberTexture(), floorRough: 0.85, wall: "#d8d8d8", wallTex: brickTexture("#7d7a75", "#4a4845"), backTex: plasterTexture("#e5e5e5"), light: "#ffffff", lights: 3, power: 15, ceilingStyle: "industrial", hemi: 0.12 });
    exposure = 0.88;
    bg = "#1c1d20";
    look = { bloom: [0.3, 0.45, 0.85], ao: 0.9, contrast: 1.16, saturation: 1.08, warmth: 0.35, vignette: 0.36, grain: 0.022 };
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
    // the strength corner: squat racks, benches, kettlebells, a row of treadmills
    for (const z of [3.2, 5.4]) {
      at(squatRack(), w / 2 - 1.1, 0, z, g).rotation.y = Math.PI / 2;
      block(w / 2 - 1.8, z - 0.8, w / 2 - 0.4, z + 0.8);
    }
    for (const z of [2.6, 4.2]) {
      at(bench(), -4.2, 0, z, g);
      block(-4.4, z - 0.6, -4.0, z + 0.6);
    }
    at(kettlebells(7), -w / 2 + 4.6, 0, d / 2 - 0.4, g);
    for (let i = 0; i < 3; i++) {
      at(treadmill(), -w / 2 + 1.6 + i * 1.0, 0, d / 2 - 1.8, g);
      block(-w / 2 + 1.2 + i * 1.0, d / 2 - 2.7, -w / 2 + 2.0 + i * 1.0, d / 2 - 0.9);
    }
    // the gym's name painted big on the brick, and high-bay lamps under the trusses
    const logo = at(new THREE.Mesh(new THREE.PlaneGeometry(7, 1.6), new THREE.MeshStandardMaterial({ map: textTexture("IRON GYM", { w: 1024, h: 232, bg: "rgba(0,0,0,0)", fg: "#e8e2d6", font: "italic 900 190px Arial" }), transparent: true, roughness: 0.95 })), -w / 2 + 0.03, 3.6, 2.2, g);
    logo.rotation.y = Math.PI / 2;
    for (const x of [-5, 0, 5]) for (const z of [-3, 3]) at(pendant(1.3, "#3a3f47", "#f5f9ff"), x, h - 0.4, z, g);
    // chains on the heavy bags
    for (const x of [3, 5, 7]) at(cyl(0.012, 0.012, 0.9, "#9ca3af", 4, { metalness: 0.9 }), x, h - 1.0, -4.2, g);
    person(3.5, 1.2, Math.PI * 0.8, { seed: "gym rat", shirt: "#111", base: "stance", shadowbox: true });
    person(5.8, 2.2, -Math.PI * 0.6, { seed: "coach", shirt: "#c8102e" });
    for (const [x, ry] of [[-5.3, Math.PI / 2], [-3.7, -Math.PI / 2]]) {
      const f = person(x, -2.5, ry, { seed: "sparring" + x, shirt: x < -4 ? "#1d4ed8" : "#b91c1c", base: "stance", shadowbox: true });
      f.root.position.y = 0.62;
    }
  } else if (id === "cars") {
    w = 20; d = 14; h = 5;
    g = room(w, d, h, { floor: "#d6d9de", wall: "#e9ecf0", backTex: slatTexture("#2a2d33"), light: "#ffffff", lights: 3, power: 14, hemi: 0.12, view: "day" });
    exposure = 0.86;
    bg = "#202328";
    look = { bloom: [0.35, 0.4, 0.85], ao: 0.6, contrast: 1.14, saturation: 1.12, warmth: 0.2, vignette: 0.3, grain: 0.014 };
    // a dark polished floor that reflects the cars, three on slowly turning stands
    g.children[0].material = new THREE.MeshStandardMaterial({ map: tiled(concreteTexture("#3a3d42"), w / 4, d / 4), roughness: 0.48, metalness: 0.1 });
    // LED strips across the ceiling
    for (let z = -d / 2 + 1.5; z < d / 2; z += 2.2) at(neon(w - 2, "#f5f9ff"), 0, h - 0.06, z, g);
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
    // a tyre and rim display, a customer lounge
    for (let i = 0; i < 4; i++) {
      const t = at(new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.13, 10, 24), mat("#111", { roughness: 0.8 })), -w / 2 + 0.4, 0.5 + i * 0.85, -2 + (i % 2) * 0.1, g);
      t.rotation.y = Math.PI / 2;
      at(cyl(0.3, 0.3, 0.2, "#c0c4ca", 16, { metalness: 0.95, roughness: 0.15 }), -w / 2 + 0.4, 0.5 + i * 0.85, -2 + (i % 2) * 0.1, g).rotation.z = Math.PI / 2;
    }
    block(-w / 2, -2.6, -w / 2 + 0.8, -1.4);
    at(sofa(2.2, "#1f2937"), -w / 2 + 3.4, 0, d / 2 - 1.8, g).rotation.y = Math.PI;
    at(table(1, 0.6, 0.42, "#111"), -w / 2 + 3.4, 0, d / 2 - 2.9, g);
    block(-w / 2 + 2.2, d / 2 - 3.3, -w / 2 + 4.6, d / 2 - 1.3);
  } else if (id === "realty") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floorTex: floorTexture("#7a5236", "planks"), floorRough: 0.58, wall: "#e4e9e3", light: "#fffaf0", lights: 2, power: 10, wainscot: "#1f3a33", hemi: 0.14 });
    exposure = 0.86;
    bg = "#22201c";
    look = { bloom: [0.3, 0.45, 0.85], ao: 0.7, contrast: 1.1, saturation: 1.08, warmth: 0.6, vignette: 0.32, grain: 0.016 };
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
    // bookcases behind the desk, a desk lamp, a rug, lit listings
    at(bookshelf(1.5, 2.3, "#2a1d14"), w / 2 - 0.25, 0, -2.8, g).rotation.y = -Math.PI / 2;
    block(w / 2 - 0.5, -3.6, w / 2, -2);
    at(floorLamp("#fff1d6", 0.45), -0.8, 0.79, -1.7, g);
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.4), new THREE.MeshStandardMaterial({ map: rugTexture("#20403a", "#0f1f1c", "#c9b38a"), roughness: 1 }));
    rug.rotation.x = -Math.PI / 2;
    at(rug, 0, 0.01, -1.2, g);
    for (const x of [-4.4, 0, 4.4]) {
      const sp = new THREE.SpotLight("#fff1d6", 4, 3.5, 0.5, 0.6, 1.5);
      sp.position.set(x, h - 0.1, -d / 2 + 1.2);
      sp.target.position.set(x, 1.8, -d / 2);
      g.add(sp, sp.target);
    }
    at(plant(1.4), w / 2 - 0.6, 0, -d / 2 + 0.7, g);
  } else if (id === "pets") {
    w = 12; d = 9; h = 3.2;
    g = room(w, d, h, { floorTex: floorTexture("#d8cdb8", "tiles"), floorRough: 0.5, wall: "#f6e7c4", light: "#fff4e0", lights: 2, power: 10, windows: "right", wainscot: "#5f8f6d", hemi: 0.16 });
    exposure = 0.86;
    bg = "#2a2418";
    look = { bloom: [0.35, 0.45, 0.85], ao: 0.7, contrast: 1.08, saturation: 1.18, warmth: 0.6, vignette: 0.3, grain: 0.016 };
    // the aquarium glows, a cat tree, a painted sign
    const glow = new THREE.PointLight("#38bdf8", 2.5, 5, 1.6);
    glow.position.set(-w / 2 + 1.2, 1.4, 0);
    g.add(glow);
    const tree = new THREE.Group();
    at(box(0.8, 0.08, 0.8, "#c9b38a"), 0, 0.04, 0, tree);
    at(cyl(0.08, 0.08, 1.8, "#b89b6c", 10), 0, 0.9, 0, tree);
    for (const [y, x] of [[0.7, 0.25], [1.25, -0.2], [1.8, 0.15]]) at(cyl(0.28, 0.28, 0.06, "#8b6b8f", 16), x, y, 0, tree);
    at(tree, -3.2, 0, 3, g);
    block(-3.6, 2.6, -2.8, 3.4);
    at(sign("PAWS & CLAWS", 3.2, 0.6, { bg: "#1f3a2c", fg: "#fde68a", font: "bold 76px Georgia" }), 3.2, 2.5, -d / 2 + 0.04, g);
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
    g = room(w, d, h, { floorTex: concreteTexture("#26282d"), floorRough: 0.6, wall: "#191b22", ceiling: "#08090c", light: "#ffffff", lights: 3, power: 18, windows: "none", hemi: 0.06, ceilingStyle: "industrial" });
    exposure = 0.95;
    bg = "#0b0c10";
    fog = new THREE.FogExp2("#0d0f14", 0.018);
    look = { bloom: [0.7, 0.55, 0.62], ao: 0.6, contrast: 1.18, saturation: 1.12, warmth: 0.45, vignette: 0.5, grain: 0.028 };
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
    // LED ribbon boards along the front of the stands, scrolling the promotion's name
    const ribbon = textTexture(((ctx.org || "GFC") + "  ★  FIGHT NIGHT  ★  ").repeat(3), { w: 2048, h: 64, bg: "#05060a", fg: "#f4b942", font: "bold 44px Arial" });
    ribbon.wrapS = THREE.RepeatWrapping;
    const ribbonM = new THREE.MeshBasicMaterial({ map: ribbon, toneMapped: false });
    ticks.push((dt) => { ribbon.offset.x = (ribbon.offset.x + dt * 0.05) % 1; });
    at(new THREE.Mesh(new THREE.PlaneGeometry(w - 2, 0.4), ribbonM), 0, 0.3, -d / 2 + 5.45, g);
    for (const sx of [-1, 1]) {
      const r = at(new THREE.Mesh(new THREE.PlaneGeometry(d - 6, 0.4), ribbonM), sx * (w / 2 - 5.45), 0.3, -1, g);
      r.rotation.y = -sx * Math.PI / 2;
    }
    // a lighting rig over the cage, beams of light falling through the haze
    const rig = new THREE.Group();
    for (const [x, z, ry] of [[0, -3.6, 0], [0, 1.6, 0], [-2.6, -1, Math.PI / 2], [2.6, -1, Math.PI / 2]]) at(box(5.6, 0.25, 0.25, "#2b2f36", { metalness: 0.7 }), x, 0, z, rig).rotation.y = ry;
    at(rig, 0, h - 1.4, 0, g);
    const beamM = new THREE.MeshBasicMaterial({ color: "#fff3d6", transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide });
    for (const [x, z] of [[-2.2, -3.2], [2.2, -3.2], [-2.2, 1.2], [2.2, 1.2]]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.6, h - 1.6, 24, 1, true), beamM);
      at(cone, x, (h - 1.6) / 2, z, g);
      at(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.3, 14), new THREE.MeshBasicMaterial({ color: "#fff7e0", toneMapped: false })), x, h - 1.55, z, g);
    }
    // fight banners hanging from the roof
    ["FIGHT NIGHT", "CHAMPIONS", ctx.org || "GFC"].forEach((t, i) => {
      at(new THREE.Mesh(new THREE.PlaneGeometry(1.4, 3), new THREE.MeshStandardMaterial({ map: textTexture(t, { w: 256, h: 548, bg: i % 2 ? "#7f1d1d" : "#111827", fg: "#f4b942", font: "bold 40px Arial", border: "#f4b942" }), side: THREE.DoubleSide, roughness: 0.9 })), -6 + i * 6, h - 2.4, -d / 2 + 0.6, g);
    });
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
  return { group: g, w, d, h, solids, people, tick, exposure, look, bg, fog };
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
    // daylight look: clean and saturated, a soft vignette, wide ambient occlusion for buildings
    this.look = { bloom: [0.06, 0.3, 0.99], ao: 1.2, contrast: 1.1, saturation: 1.18, warmth: 0.4, vignette: 0.22, grain: 0.012 };
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
        // walking off gets you up (except in the pool, where you swim)
        if (k !== "shift" && this.activity && !this.activity.spot.area) this.stopActivity();
      }
      if (k === " ") {
        e.preventDefault();
        if (!e.repeat) this.jump();
      }
      if (k === "e" || k === "enter") {
        if (this.activity || this.nearSpot) this.useActivity();
        else if (this.near && this.onEnter) this.onEnter(this.near.id);
      }
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
      // a cornice and parapet along the roofline, and machinery up top
      const trim = new THREE.Color(color).multiplyScalar(0.72).getStyle();
      at(box(w + 0.5, 0.35, d + 0.5, trim), 0, h + 0.05, 0, g);
      at(box(w + 0.2, 0.5, 0.15, trim), 0, h + 0.45, front * (d / 2 + 0.1), g);
      at(box(1.6, 0.9, 1.2, "#b8bcc2", { metalness: 0.5, roughness: 0.4 }), -w / 4, h + 0.6, -front * d / 5, g);
      at(cyl(0.35, 0.35, 0.5, "#9ca3af", 12, { metalness: 0.6 }), w / 4, h + 0.45, -front * d / 6, g);
      at(box(w, 0.25, 0.3, trim), 0, 0.12, front * (d / 2 + 0.1), g); // plinth
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
        at(box(2.5, 0.1, 0.3, "#e5e2da"), x, 0.68, front * (d / 2 + 0.12), g); // sill
        at(box(2.4, 0.12, 0.12, "#2b2b2b"), x, 2.55, front * (d / 2 + 0.08), g); // lintel
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
    this.dressTown();
  }

  /**
   * Street-level detail on top of the basic town: curbs, crosswalks and side-street sidewalks,
   * benches, bins, hydrants and a bus stop, hedges, flower beds and grass, cars parked at the
   * curb, and hills on the horizon. Repeated small things are instanced (one draw call each).
   */
  dressTown() {
    const S = this.scene;
    const concrete = mat("#a9a59c", { roughness: 0.95 });
    // raised curbs along the main street, sidewalks and curbs on the side streets
    for (const z of [-5.0, 5.0]) at(box(130, 0.18, 0.22, concrete), 0, 0.09, z, S);
    for (const x of [-54, 54]) for (const s of [-1, 1]) {
      const swTex = tiles();
      swTex.repeat.set(2, 76 / 1.2);
      at(box(2.4, 0.15, 76, new THREE.MeshStandardMaterial({ map: swTex, roughness: 0.9 })), x + s * 6.2, 0.075, 0, S);
      at(box(0.22, 0.18, 76, concrete), x + s * 5.0, 0.09, 0, S);
    }
    // zebra crossings
    const white = new THREE.MeshStandardMaterial({ color: "#f3f1ea", roughness: 0.7 });
    for (const cx of [-30, 0, 30]) for (let i = 0; i < 8; i++) {
      const st = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 9), white);
      st.rotation.x = -Math.PI / 2;
      st.position.set(cx - 2.1 + i * 0.6, 0.021, 0);
      S.add(st);
    }
    // manhole covers
    for (const x of [-42, -18, 12, 40]) at(new THREE.Mesh(new THREE.CircleGeometry(0.45, 18), mat("#2a2a2a", { metalness: 0.6, roughness: 0.5 })), x, 0.022, x % 2 ? 1.8 : -1.8, S).rotation.x = -Math.PI / 2;

    // street furniture on both sidewalks
    const bench = () => {
      const g = new THREE.Group();
      const wood = mat("#8a5a34", { roughness: 0.8 }), iron = mat("#22252b", { metalness: 0.6, roughness: 0.4 });
      for (let i = 0; i < 3; i++) at(box(1.8, 0.05, 0.12, wood), 0, 0.46, -0.16 + i * 0.16, g);
      for (let i = 0; i < 2; i++) at(box(1.8, 0.12, 0.04, wood), 0, 0.68 + i * 0.16, -0.26, g).rotation.x = -0.15;
      for (const x of [-0.75, 0.75]) {
        at(box(0.06, 0.46, 0.5, iron), x, 0.23, 0, g);
        at(box(0.06, 0.45, 0.06, iron), x, 0.7, -0.27, g);
      }
      return g;
    };
    const bin = () => {
      const g = new THREE.Group();
      at(cyl(0.25, 0.22, 0.85, "#2f4f3a", 14, { roughness: 0.6 }), 0, 0.43, 0, g);
      at(cyl(0.27, 0.27, 0.06, "#1f2a22", 14), 0, 0.88, 0, g);
      return g;
    };
    const hydrant = () => {
      const g = new THREE.Group();
      at(cyl(0.12, 0.14, 0.6, "#c81e1e", 12, { roughness: 0.5 }), 0, 0.3, 0, g);
      at(sphere(0.13, "#c81e1e"), 0, 0.62, 0, g);
      for (const x of [-1, 1]) at(cyl(0.05, 0.05, 0.12, "#c81e1e", 8), x * 0.15, 0.4, 0, g).rotation.z = Math.PI / 2;
      return g;
    };
    for (let x = -57; x <= 57; x += 12) {
      for (const z of [-1, 1]) {
        const e = z * 7.15;
        if (Math.abs(x + 1.5) < 4 || Math.abs(x - 8) < 4) continue; // keep shop doors clear
        const b = at(bench(), x + 3, 0.15, e, S);
        b.rotation.y = z < 0 ? 0 : Math.PI;
        at(bin(), x + 5, 0.15, e, S);
      }
      if ((x / 12) % 2 === 0) at(hydrant(), x - 2, 0.15, -5.45, S);
    }
    // a bus stop with a shelter and a timetable
    const stop = new THREE.Group();
    const glassM = new THREE.MeshPhysicalMaterial({ color: "#cfe8f7", transparent: true, opacity: 0.3, roughness: 0.05, depthWrite: false });
    at(box(3.4, 0.08, 1.4, "#3a3f47"), 0, 2.4, 0, stop);
    at(new THREE.Mesh(new THREE.PlaneGeometry(3.3, 2.2), glassM), 0, 1.25, -0.65, stop);
    for (const x of [-1.65, 1.65]) at(cyl(0.05, 0.05, 2.4, "#3a3f47", 8), x, 1.2, -0.62, stop);
    at(bench(), 0, 0, -0.3, stop);
    at(sign("BUS 12 · CITY CENTER", 1.6, 0.4, { bg: "#0f3d91", fg: "#fff", font: "bold 50px Arial" }), 0, 2.15, 0.71, stop);
    at(stop, 18, 0.15, 7.2, S).rotation.y = Math.PI;

    // hedges and flower beds in front of the buildings, grass tufts everywhere green
    const hedgeGeo = new THREE.SphereGeometry(0.5, 10, 7);
    const hedges = [];
    for (const [x0, x1, z] of [[-17.5, -6.5, -9.6], [13.5, 22, -9.6], [-6.5, -17.5, 9.6], [13, 3, 9.6], [-42, -26, 9.6]]) {
      for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x += 0.75) hedges.push([x, z, 0.75 + Math.random() * 0.25]);
    }
    const hedgeMesh = new THREE.InstancedMesh(hedgeGeo, mat("#2f6b34", { roughness: 0.9 }), hedges.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    hedges.forEach(([x, z, s], i) => hedgeMesh.setMatrixAt(i, m4.compose(v.set(x, 0.35 * s, z), q.identity(), sc.set(s, 0.8 * s, s))));
    hedgeMesh.castShadow = hedgeMesh.receiveShadow = true;
    S.add(hedgeMesh);
    const flowerCols = ["#f43f5e", "#facc15", "#a855f7", "#fb923c", "#f9fafb"];
    const flowers = [];
    for (const [cx, cz] of [[-2, 28], [20, -26], [-50, 26], [46, -24], [-20, -32], [0, -30]]) {
      at(box(5, 0.25, 2.2, "#6b4a33"), cx, 0.12, cz, S);
      for (let i = 0; i < 40; i++) flowers.push([cx - 2.3 + Math.random() * 4.6, cz - 0.95 + Math.random() * 1.9, i % flowerCols.length]);
    }
    const flowerGeo = new THREE.IcosahedronGeometry(0.12, 0);
    flowerCols.forEach((c, k) => {
      const list = flowers.filter((f) => f[2] === k);
      const fm = new THREE.InstancedMesh(flowerGeo, mat(c, { roughness: 0.7 }), list.length);
      list.forEach(([x, z], i) => fm.setMatrixAt(i, m4.compose(v.set(x, 0.32 + Math.random() * 0.12, z), q.identity(), sc.set(1, 1, 1))));
      S.add(fm);
    });
    // grass tufts: thin cones scattered over the lawns, never on roads, sidewalks or lots
    const onHard = (x, z) => Math.abs(z) < 8.4 || Math.abs(Math.abs(x) - 54) < 8.4 || this.solids.some((r) => x > r[0] - 1 && x < r[2] + 1 && z > r[1] - 1 && z < r[3] + 1)
      || (x > -50 && x < -26 && z > -17 && z < -8);
    const tuftGeo = new THREE.ConeGeometry(0.035, 0.24, 3);
    tuftGeo.translate(0, 0.12, 0);
    const tufts = [];
    for (let i = 0; i < 16000 && tufts.length < 7000; i++) {
      const x = (Math.random() - 0.5) * 150, z = (Math.random() - 0.5) * 96;
      if (!onHard(x, z)) tufts.push([x, z]);
    }
    const tuftMesh = new THREE.InstancedMesh(tuftGeo, mat("#4f8f3c", { roughness: 1 }), tufts.length);
    const col = new THREE.Color();
    tufts.forEach(([x, z], i) => {
      q.setFromAxisAngle(v.set(Math.random() - 0.5, 0, Math.random() - 0.5).normalize(), Math.random() * 0.35);
      const s = 0.7 + Math.random() * 0.8;
      tuftMesh.setMatrixAt(i, m4.compose(v.set(x, 0, z), q, sc.set(s, s, s)));
      tuftMesh.setColorAt(i, col.setHSL(0.26 + Math.random() * 0.06, 0.42, 0.36 + Math.random() * 0.14));
    });
    S.add(tuftMesh);

    // cars parked along the curb
    [["sedan", "#7f1d1d", -46], ["hatch", "#e5e7eb", -21], ["suv", "#1e3a8a", 40], ["pickup", "#3f6212", 46], ["muscle", "#ca8a04", -4]].forEach(([id, c, x], i) => {
      const car = makeCar(id, c);
      const z = i % 2 ? 4.1 : -4.1;
      car.position.set(x, 0, z);
      car.rotation.y = z < 0 ? Math.PI / 2 : -Math.PI / 2;
      S.add(car);
      this.solid(x - 2.6, z - 1.1, x + 2.6, z + 1.1);
    });

    // rolling hills on the horizon, softened by the haze
    const hillM = mat("#5c8a55", { roughness: 1 });
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * TAU + Math.random() * 0.2, r = 118 + Math.random() * 10;
      const hill = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 8, 0, TAU, 0, Math.PI / 2), hillM);
      hill.scale.set(18 + Math.random() * 16, 7 + Math.random() * 10, 14 + Math.random() * 10);
      hill.position.set(Math.cos(a) * r, -0.5, Math.sin(a) * r);
      S.add(hill);
    }
    this.scene.fog.far = 170;
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
    this.playerInfo = info;
    if (!this.player || this.playerLook !== info.look + !!info.female) {
      this.stopActivity();
      if (this.bareBody) {
        S.remove(this.bareBody.root);
        this.bareBody.dispose();
        this.bareBody = null;
      }
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
    this.stopActivity();
    this.nearSpot = null;
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
        if (this.interiors[k].env) this.interiors[k].env.dispose();
        for (const c of this.interiors[k].cells || []) if (c.env) c.env.dispose();
        delete this.interiors[k];
      }
      // extra set dressing (Codex: café, gym, cars, pets; Freebuff: club, ink, realty), before the
      // room captures its reflections
      I = decorateVenueExtras(id, decorateVenue(id, buildInterior(id, ctx)));
      I.origin = new THREE.Vector3(1000 + PLACES.findIndex((p) => p.id === id) * 80, 0, 0);
      // the room lights itself: a 360° capture from eye height in the middle of the room becomes
      // its reflections and bounce light
      if (this.makeEnv && !I.cells) {
        const snap = new THREE.Scene();
        snap.background = new THREE.Color(I.bg || "#15130f");
        I.group.position.set(0, -1.6, 0);
        snap.add(I.group);
        I.env = this.makeEnv(snap);
      }
      I.group.position.copy(I.origin);
      this.scene.add(I.group);
      this.interiors[key] = I;
    }
    for (const x of Object.values(this.interiors)) x.group.visible = x === I;
    const place = PLACES.find((p) => p.id === id);
    this.inside = { id, I, door: place.door, name: place.name, icon: place.icon, cell: -1 };
    // a few steps in from the door, so the camera behind you has room
    this.pos.set(I.origin.x, 0, I.origin.z + I.d / 2 - 3.1);
    this.heading = Math.PI;
    this.camYaw = 0;
    this.camPitch = 0.26;
    this.camera.fov = 64;
    this.camera.updateProjectionMatrix();
    this.moveTarget = null;
    this.snapCam = true;
    // indoor light: no sun or sky; the room's own reflections, exposure and grade
    this.outdoor ||= { bg: this.scene.background, fog: this.scene.fog, sun: this.sun.intensity, exposure: this.exposure, env: this.scene.environment, look: this.look };
    this.sun.intensity = 0;
    this.scene.fog = I.fog || null;
    this.scene.background = new THREE.Color("#050506");
    if (I.env) this.scene.environment = I.env;
    this.exposure = I.exposure || 0.9;
    this.look = I.look || { bloom: [0.22, 0.45, 0.9], ao: 0.6, contrast: 1.08, saturation: 1.1, warmth: 0.55, vignette: 0.3, grain: 0.018 };
    this.bringPets();
    this.near = null;
    if (this.onNear) this.onNear(null);
  }

  // ---------------------------------------------------------------- jumping and activities

  jump() {
    if (this.activity) return this.stopActivity();
    if (this.driving || !this.player || (this.py || 0) > 0.001) return;
    this.vy = 5.4;
    this.py = 0.001;
    this.player.setBase("jump");
  }

  /** The prompt for the activity button: what E does here, or null. */
  activityPrompt() {
    if (this.activity) return { icon: "⬆️", label: this.activity.spot.stopLabel || (this.activity.spot.kind === "swim" ? "Get out" : "Get up") };
    const s = this.nearSpot;
    if (!s) return null;
    return { icon: s.icon || "👉", label: typeof s.label === "function" ? s.label() : s.label };
  }

  /** E: start what you're next to, stop what you're doing, or flip a switch. */
  useActivity() {
    if (this.activity) return this.stopActivity();
    const s = this.nearSpot;
    if (!s || !this.inside || this.driving) return;
    if (s.kind === "toggle") {
      s.use();
      if (this.onNear) this.onNear(this.near);
      return;
    }
    if (s.bare) this.undress();
    const o = this.inside.I.origin;
    this.activity = { spot: s, back: this.pos.clone(), t: 0, y: null };
    this.vy = this.py = 0;
    this.speedNow = 0;
    this.moveTarget = null;
    if (s.area) {
      // slip into the water at the nearest edge
      const a = s.area;
      this.pos.set(Math.max(o.x + a[0], Math.min(o.x + a[2], this.pos.x)), 0, Math.max(o.z + a[1], Math.min(o.z + a[3], this.pos.z)));
    } else {
      this.pos.set(o.x + s.x, 0, o.z + s.z);
      this.heading = s.ry;
    }
    const base = { sit: "sit", soak: "sit", lie: "lie", shower: "shower", swim: "tread", box: "stance", dive: "jump" }[s.kind] || "relaxed";
    this.player.setBase(base);
    if (s.onStart) s.onStart();
    if (this.onNear) this.onNear(this.near);
  }

  stopActivity() {
    const A = this.activity;
    if (!A) return;
    this.activity = null;
    if (A.spot.onStop) A.spot.onStop();
    this.player.stopActions();
    this.player.setBase("relaxed");
    if (A.spot.bare) this.dress();
    this.pos.copy(A.back);
    this.player.root.position.set(this.pos.x, 0, this.pos.z);
    if (this.onNear) this.onNear(this.near);
  }

  /** Clothes off (shower, pool, sauna…): the fighter in swimwear, barefoot. */
  undress() {
    if (this.clothed || !this.player || !this.playerInfo) return;
    if (!this.bareBody) {
      const i = this.playerInfo;
      this.bareBody = new Fighter3D({ presenter: true, barefoot: true, bikini: !!i.female, outfit: i.female ? "#e11d48" : "#1d4ed8", look: parseLook(i.look), weightClass: i.weightClass,
        style: i.style, tattooText: i.ink, faceSeed: i.seed || "", female: !!i.female });
      this.scene.add(this.bareBody.root);
    }
    this.clothed = this.player;
    this.clothed.root.visible = false;
    this.player = this.bareBody;
    this.player.root.visible = true;
    this.player.setInjured(this.injured);
    this.player.root.position.copy(this.clothed.root.position);
  }

  dress() {
    if (!this.clothed) return;
    this.player.root.visible = false;
    this.player = this.clothed;
    this.clothed = null;
    this.player.root.visible = true;
  }

  /** Where the fighter is while doing something: seated, lying, swimming, diving… */
  placeActivity(A, dt) {
    const s = A.spot, f = this.player, P = this.pos;
    A.t += dt;
    let y = s.y;
    if (s.kind === "swim") {
      const moving = this.speedNow > 0.3;
      f.setBase(moving ? "swim" : "tread");
      const target = s.water - (moving ? 0.1 : 1.3);
      A.y = A.y === null ? target : A.y + (target - A.y) * damp(5, dt);
      y = A.y + Math.sin(A.t * 2) * 0.02;
    } else if (s.kind === "dive") {
      // off the board in an arc, then sunk to the chest in gold
      const T = 0.9, k = Math.min(1, A.t / T), o = this.inside.I.origin;
      P.set(o.x + s.x + (s.to.x - s.x) * k, 0, o.z + s.z + (s.to.z - s.z) * k);
      y = s.y + (s.to.y - s.y) * k + 2.2 * k * (1 - k);
      f.setBase(k < 1 ? "jump" : "tread");
    } else if (s.kind === "box" && !f.busy) {
      f.play(attack(["jab", "jab-cross", "left hook", "body kick", "uppercut"][Math.floor(Math.random() * 5)]).frames, "stance");
    }
    f.root.position.set(P.x, y, P.z);
    f.root.rotation.set(0, this.heading, 0);
  }

  /** The nearest thing in this room you could use. */
  findSpot(P) {
    const I = this.inside && this.inside.I;
    if (!I || !I.spots || this.activity || this.driving) return null;
    let best = null, bd = Infinity;
    for (const s of I.spots) {
      const d = Math.hypot(P.x - I.origin.x - s.x, P.z - I.origin.z - s.z);
      if (d < s.dist && d < bd) { best = s; bd = d; }
    }
    return best;
  }

  /** Walking from room to room in a house: that room's light, reflections and look take over. */
  houseRoom(I, P) {
    const ci = I.cellAt(P.x - I.origin.x, P.z - I.origin.z);
    if (ci < 0 || ci === this.inside.cell) return;
    this.inside.cell = ci;
    const cell = I.cells[ci];
    I.enterCell(ci);
    if (!cell.env && this.makeEnv) {
      // first time in this room: capture it from eye height in its middle
      const snap = new THREE.Scene();
      snap.background = new THREE.Color(cell.bg || "#15130f");
      I.group.position.set(-cell.cx, -1.6, -cell.cz);
      snap.add(I.group);
      cell.env = this.makeEnv(snap);
      I.group.position.copy(I.origin);
      this.scene.add(I.group);
    }
    if (cell.env) this.scene.environment = cell.env;
    this.exposure = cell.exposure;
    this.look = cell.look;
    this.scene.fog = cell.fog || null;
    if (this.onRoom) this.onRoom(cell.name);
  }

  /** Step back out onto the street in front of the door. */
  leavePlace() {
    if (!this.inside) return;
    this.stopActivity();
    this.nearSpot = null;
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
      this.scene.environment = this.outdoor.env;
      this.look = this.outdoor.look;
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
    this.stopActivity();
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
    // tapping the ground to walk away also gets you up
    if (this.activity && !this.activity.spot.area && this.moveTarget) this.stopActivity();
    const A = this.activity;
    let dir = null;
    // behind the wheel the keys work the car itself: W forward, S backward (brakes first), A/D turn
    const keyDrive = this.driving && (ix || iz);
    if (keyDrive) this.moveTarget = null;
    if (A && !A.spot.area) {
      // seated, lying, showering: no walking
    } else if (keyDrive) {
      // handled below
    } else if (ix || iz) {
      const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
      dir = new THREE.Vector3(ix * cy + iz * sy, 0, -ix * sy + iz * cy).normalize();
    } else if (this.moveTarget) {
      const d = this.moveTarget.clone().sub(P).setY(0);
      if (d.length() < (this.driving ? 1.5 : 0.4)) this.moveTarget = null;
      else dir = d.normalize();
    }
    const maxV = this.driving ? 16 : A ? 1.7 : (k.has("shift") ? 7 : 4.2) * (this.injured ? 0.55 : 1);
    let want = dir ? maxV : 0;
    if (keyDrive) {
      const U = this.driving.userData, v = this.speedNow;
      const steerTo = -ix * 0.55 * (1 - Math.min(0.5, Math.abs(v) / 40)); // less lock at speed
      this.steer += (steerTo - this.steer) * damp(ix ? 5 : 8, dt);
      let a;
      if (iz < 0) a = v < -0.3 ? 18 : 9 * (1 - Math.max(0, v) / maxV); // gas (brakes first if rolling back)
      else if (iz > 0) a = v > 0.3 ? -22 : -8 * (1 + Math.min(0, v) / 8); // brake, then back up to 8 m/s
      else a = -Math.sign(v) * Math.min(Math.abs(v) / dt, 2.5); // coasting slows the car down
      const before = v;
      this.speedNow = v + a * dt;
      if ((iz < 0 && before < 0 && this.speedNow > 0) || (iz > 0 && before > 0 && this.speedNow < 0)) this.speedNow = 0; // stop before changing direction
      this.accel = (this.speedNow - before) / Math.max(dt, 1e-3);
      // A/D always turn, even standing still (the car pivots on the spot when slow)
      const pivot = -ix * 1.6 * Math.max(0, 1 - Math.abs(this.speedNow) / 4);
      this.heading += ((this.speedNow / U.wheelBase) * Math.tan(this.steer) + pivot) * dt;
    } else if (this.driving) {
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
      if (this.speedNow < 0) want = 0; // let go of reverse: roll to a stop
      this.speedNow += (want - this.speedNow) * damp(want > this.speedNow ? 1.6 : 2.6, dt);
      this.accel = (this.speedNow - before) / Math.max(dt, 1e-3);
      this.heading += (this.speedNow / this.driving.userData.wheelBase) * Math.tan(this.steer) * dt;
    } else {
      this.speedNow += (want - this.speedNow) * damp(10, dt);
      if (dir) this.heading = angleLerp(this.heading, Math.atan2(dir.x, dir.z), damp(12, dt));
    }
    if (Math.abs(this.speedNow) > 0.01) {
      const step = this.speedNow * dt;
      const vx = Math.sin(this.heading) * step, vz = Math.cos(this.heading) * step;
      const r = this.driving ? 1.3 : 0.4;
      if (A && A.spot.area) {
        // swimming: anywhere in the water
        const a = A.spot.area, o = this.inside.I.origin;
        P.x = Math.max(o.x + a[0], Math.min(o.x + a[2], P.x + vx));
        P.z = Math.max(o.z + a[1], Math.min(o.z + a[3], P.z + vz));
      } else if (!this.blocked(P.x + vx, P.z, r)) P.x += vx;
      else if (this.driving) this.speedNow *= 0.5;
      if (A && A.spot.area) { /* moved above */ } else if (!this.blocked(P.x, P.z + vz, r)) P.z += vz;
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
    } else if (A) {
      this.placeActivity(A, dt);
      this.player.update(dt);
    } else {
      // a jump: up, gravity, land
      if (this.py > 0) {
        this.vy -= 16 * dt;
        this.py += this.vy * dt;
        if (this.py <= 0) {
          this.py = this.vy = 0;
          this.player.setBase("relaxed");
        }
      }
      this.player.root.position.set(P.x, this.py || 0, P.z);
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
      if (I.cells) this.houseRoom(I, P);
      const spot = this.findSpot(P);
      if (spot !== this.nearSpot) {
        this.nearSpot = spot;
        if (this.onNear) this.onNear(this.near);
      }
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
    if (this.driving && Math.abs(this.speedNow) > 2 && !this.drag) this.camYaw = angleLerp(this.camYaw, this.heading + Math.PI, damp(2.5, dt));
    // third-person camera
    const dist = this.driving ? 11 : this.inside ? 3.4 : 7.5;
    const c = this.camera;
    const tgt = new THREE.Vector3(P.x, (this.driving ? 1.2 : 1.5) + (this.py || 0) * 0.5, P.z);
    let cx = tgt.x + Math.sin(this.camYaw) * Math.cos(this.camPitch) * dist;
    let cz = tgt.z + Math.cos(this.camYaw) * Math.cos(this.camPitch) * dist;
    let cyp = tgt.y + Math.sin(this.camPitch) * dist;
    if (this.inside) {
      // keep the camera inside the walls (in a house: inside the room you're in)
      const I = this.inside.I, m = 0.25;
      const b = I.cells && this.inside.cell >= 0 ? I.cells[this.inside.cell].bounds : [-I.w / 2, -I.d / 2, I.w / 2, I.d / 2];
      cx = Math.max(I.origin.x + b[0] + m, Math.min(I.origin.x + b[2] - m, cx));
      cz = Math.max(I.origin.z + b[1] + m, Math.min(I.origin.z + b[3] - m, cz));
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
