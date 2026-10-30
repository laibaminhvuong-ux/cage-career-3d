// Additive set dressing for the three interiors web/venue-details3d.js leaves alone: the
// nightclub, the tattoo studio and the realtor's office. Call it on the object buildInterior()
// returns, next to decorateVenue():
//   I = decorateVenue(id, I);  I = decorateVenueExtras(id, I);
// Everything is boxes, cylinders and canvas-drawn signs — no new lights (the room's own lights
// and its captured reflection map do the work), no external assets, no game rules. Idempotent,
// and the room's own tick keeps running.
import * as THREE from "./vendor/three.module.min.js";

export const EXTRAS_VENUES = ["club", "ink", "realty"];

export function decorateVenueExtras(id, interior) {
  if (!EXTRAS_VENUES.includes(id) || !interior || !interior.group || interior.extras) return interior;
  const root = new THREE.Group();
  root.name = `venue-extras-${id}`;
  const geos = new Map();
  const mats = new Map();
  const signs = new Map();
  const anims = [];

  // ---- shared resources: one geometry/material per shape, reused by every prop
  const cached = (map, key, make) => {
    let v = map.get(key);
    if (!v) map.set(key, (v = make()));
    return v;
  };
  const boxG = (w, h, d) => cached(geos, `b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
  const cylG = (rt, rb, h, seg = 12) => cached(geos, `c${rt},${rb},${h},${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg));
  const sphG = (r, seg = 10) => cached(geos, `s${r},${seg}`, () => new THREE.SphereGeometry(r, seg, Math.max(6, seg - 4)));
  const planeG = (w, h) => cached(geos, `p${w},${h}`, () => new THREE.PlaneGeometry(w, h));
  const torusG = (r, tube) => cached(geos, `t${r},${tube}`, () => new THREE.TorusGeometry(r, tube, 6, 18));
  const standard = (color, metal = 0, rough = 0.7) =>
    cached(mats, `m${color},${metal},${rough}`, () => new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough }));
  const glow = (color) => cached(mats, `g${color}`, () => new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  const glassMat = cached(mats, "glass", () => new THREE.MeshStandardMaterial({ color: "#d7eef7", metalness: 0, roughness: 0.06, transparent: true, opacity: 0.32 }));
  const paperMat = cached(mats, "paper", () => new THREE.MeshStandardMaterial({ color: "#f3efe4", roughness: 0.9 }));

  const mesh = (parent, geometry, material, x = 0, y = 0, z = 0) => {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  };
  const bx = (parent, w, h, d, color, x = 0, y = 0, z = 0, metal = 0, rough = 0.7) =>
    mesh(parent, boxG(w, h, d), standard(color, metal, rough), x, y, z);
  const cy = (parent, rt, rb, h, color, x = 0, y = 0, z = 0, metal = 0, rough = 0.7) =>
    mesh(parent, cylG(rt, rb, h), standard(color, metal, rough), x, y, z);
  const sph = (parent, r, color, x = 0, y = 0, z = 0, metal = 0, rough = 0.7) =>
    mesh(parent, sphG(r), standard(color, metal, rough), x, y, z);
  const plate = (parent, w, h, material, x = 0, y = 0, z = 0, ry = 0) => {
    const m = mesh(parent, planeG(w, h), material, x, y, z);
    m.rotation.y = ry;
    return m;
  };

  /** A printed sign: one canvas, drawn once, reused for the same text. */
  const signMat = (text, { w = 512, h = 128, bg = "#111014", fg = "#f2e6cd", font = "bold 54px Arial", frame = fg } = {}) => {
    const key = `${text}|${w}|${h}|${bg}|${fg}|${font}|${frame}`;
    if (signs.has(key)) return signs.get(key);
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d");
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    if (frame) {
      g.strokeStyle = frame;
      g.lineWidth = Math.max(2, h * 0.035);
      const i = h * 0.07;
      g.strokeRect(i, i, w - i * 2, h - i * 2);
    }
    g.fillStyle = fg;
    g.font = font;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(text, w / 2, h / 2, w - h * 0.3);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.88 });
    signs.set(key, m);
    return m;
  };

  /** Every prop is a group tagged with how it stands, so geometry stays inspectable. */
  const prop = (kind, name) => {
    const g = new THREE.Group();
    g.name = name;
    g.userData.prop = kind;
    root.add(g);
    return g;
  };
  const solid = (x0, z0, x1, z1) => interior.solids.push([Math.min(x0, x1), Math.min(z0, z1), Math.max(x0, x1), Math.max(z0, z1)]);

  // ================================================================= nightclub
  // Layout to respect (web/world3d.js): 16 × 12, door centred at z = +6, dance floor
  // x −2.9…2.1 / z −2.7…1.8, DJ booth x −1.4…1.4 at the back, bar x ≈ 6.4…7.2 / z −0.9…3.3,
  // VIP booths against the left wall with the aisle at x ≈ −5.4…−5.
  function club() {
    const h = 4.2;
    // speaker stacks braced either side of the DJ booth: sub, pole, top cab, drivers
    for (const sx of [-1, 1]) {
      const s = prop("floor", "speaker-stack");
      const x = sx * 2.4;
      const z = -5.55;
      bx(s, 0.94, 0.9, 0.8, "#14121a", x, 0.45, z);
      bx(s, 0.98, 0.04, 0.84, "#0b0a0f", x, 0.02, z);
      bx(s, 0.5, 0.3, 0.02, "#08070b", x, 0.58, z + 0.41);
      cy(s, 0.17, 0.17, 0.04, "#20202c", x, 0.42, z + 0.4, 0.2, 0.8).rotation.x = Math.PI / 2;
      for (const by of [0.16, 0.86]) bx(s, 0.94, 0.03, 0.82, "#0d0c11", x, by, z);
      cy(s, 0.035, 0.035, 0.34, "#3c424c", x, 1.07, z, 0.8, 0.35);
      bx(s, 0.8, 0.66, 0.62, "#16131c", x, 1.55, z);
      cy(s, 0.2, 0.2, 0.03, "#26243a", x, 1.57, z + 0.32, 0.1, 0.9).rotation.x = Math.PI / 2;
      cy(s, 0.08, 0.08, 0.03, "#0a0910", x, 1.33, z + 0.32).rotation.x = Math.PI / 2;
      for (const by of [1.24, 1.86]) bx(s, 0.78, 0.03, 0.64, "#0d0c11", x, by, z);
      solid(x - 0.48, z - 0.42, x + 0.48, z + 0.42);
    }

    // a lighting truss with four moving heads hanging over the floor, lenses pulsing
    const truss = prop("ceiling", "light-truss");
    for (const y of [h - 0.52, h - 0.26]) bx(truss, 10.4, 0.05, 0.05, "#2b2f36", 0, y, -4.1, 0.6, 0.4);
    for (let i = -4; i <= 4; i++) bx(truss, 0.045, 0.26, 0.045, "#2b2f36", i * 1.3, h - 0.39, -4.1, 0.6, 0.4);
    const sweep = ["#ff3cac", "#2b86c5", "#00f5d4", "#fee440"];
    const coneG = cached(geos, "beam", () => new THREE.CylinderGeometry(0.07, 0.85, 3.1, 14, 1, true));
    // the beam fades out along its length instead of ending in a hard disc on the floor
    const fade = cached(geos, "beam-fade", () => {
      const c = document.createElement("canvas");
      c.width = 4;
      c.height = 64;
      const g = c.getContext("2d");
      const grad = g.createLinearGradient(0, 0, 0, 64);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.55, "#777777");
      grad.addColorStop(1, "#000000");
      g.fillStyle = grad;
      g.fillRect(0, 0, 4, 64);
      return new THREE.CanvasTexture(c);
    });
    [-3.45, -1.15, 1.15, 3.45].forEach((x, i) => {
      bx(truss, 0.18, 0.07, 0.07, "#1b1e24", x, h - 0.55, -4.1, 0.6, 0.4);
      const head = new THREE.Group();
      head.position.set(x, h - 0.76, -4.1);
      truss.add(head);
      const lens = new THREE.MeshBasicMaterial({ color: sweep[i], toneMapped: false });
      // the visible beam is the fixture's own colour, so the light has a source you can see
      const beam = new THREE.MeshBasicMaterial({
        color: sweep[i], toneMapped: false, transparent: true, opacity: 0.2, alphaMap: fade,
        depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      });
      cy(head, 0.15, 0.12, 0.32, "#171a20", 0, 0, 0, 0.55, 0.45);
      mesh(head, cylG(0.12, 0.12, 0.02), lens, 0, -0.17, 0);
      for (const ax of [-0.19, 0.19]) bx(head, 0.045, 0.24, 0.045, "#262a31", ax, 0.2, 0, 0.6, 0.4);
      mesh(head, coneG, beam, 0, -1.72, 0);
      anims.push((t) => {
        // tilt into the room (+z), not at the back wall behind the booth
        head.rotation.set(-(0.3 + Math.cos(t * 0.5 + i) * 0.12), Math.sin(t * 0.62 + i * 1.7) * 0.5, 0);
        const c = sweep[Math.floor(t * 0.7 + i) % sweep.length];
        lens.color.set(c);
        beam.color.set(c);
      });
    });

    // beer tower, drip tray, cocktail tools and a card reader along the bar top
    const bar = prop("surface", "bar-back");
    bx(bar, 0.2, 0.06, 0.66, "#9aa3ad", 6.8, 1.05, 2.42, 0.9, 0.25);
    for (let i = 0; i < 3; i++) {
      const z = 2.2 + i * 0.22;
      cy(bar, 0.03, 0.03, 0.2, "#c8ced6", 6.8, 1.18, z, 0.9, 0.2);
      bx(bar, 0.045, 0.17, 0.03, "#f0d9a8", 6.8, 1.34, z);
      bx(bar, 0.03, 0.02, 0.1, "#1a1f24", 6.8, 1.26, z + 0.06, 0.8, 0.4);
      bx(bar, 0.02, 0.03, 0.06, "#1a1f24", 6.8, 1.1, z + 0.05);
    }
    bx(bar, 0.36, 0.02, 0.72, "#2b3036", 6.68, 1.03, 2.42, 0.8, 0.35);
    // a colour strip under the counter lip picks the bar out of the dark
    mesh(bar, boxG(0.03, 0.035, 3.9), glow("#ff3cac"), 6.45, 0.93, 1.2);
    for (let i = 0; i < 5; i++) bx(bar, 0.3, 0.006, 0.02, "#3a4048", 6.68, 1.042, 2.14 + i * 0.14, 0.6, 0.5);
    cy(bar, 0.055, 0.055, 0.2, "#b9c2cc", 6.78, 1.13, 0.62, 0.95, 0.18);
    cy(bar, 0.045, 0.05, 0.04, "#aab4bf", 6.78, 1.25, 0.62, 0.95, 0.18);
    for (let i = 0; i < 3; i++) cy(bar, 0.035, 0.028, 0.11, "#d7eef7", 6.74 + i * 0.09, 1.08, 0.95, 0.05, 0.1);
    bx(bar, 0.2, 0.04, 0.15, "#2a2f36", 6.78, 1.05, 1.42, 0.5, 0.5);
    for (const [i, c] of ["#c1121f", "#e9c46a", "#2a9d8f"].entries()) sph(bar, 0.028, c, 6.72 + i * 0.055, 1.08, 1.42);
    bx(bar, 0.17, 0.09, 0.12, "#f4efe3", 6.76, 1.07, 1.72);
    cy(bar, 0.065, 0.06, 0.16, "#d7eef7", 6.76, 1.1, 0.18, 0.05, 0.1);
    cy(bar, 0.062, 0.062, 0.02, "#2a2f36", 6.76, 1.19, 0.18, 0.6, 0.4);
    const reader = bx(bar, 0.13, 0.05, 0.17, "#20252b", 6.74, 1.07, 3.02, 0.4, 0.5);
    reader.rotation.set(-0.32, 0.22, 0);
    const readerLight = mesh(reader, planeG(0.1, 0.12), glow("#63e6be"), 0, 0.026, 0);
    readerLight.rotation.x = -Math.PI / 2;

    // a rail of glasses hanging over the bar
    const rack = prop("ceiling", "glass-rack");
    for (const z of [0.55, 1.85]) cy(rack, 0.014, 0.014, 1.62, "#7b838d", 6.8, 3.39, z, 0.8, 0.3);
    bx(rack, 0.38, 0.05, 1.62, "#7b838d", 6.8, 2.56, 1.2, 0.8, 0.3);
    for (let i = 0; i < 8; i++) {
      const z = 0.52 + i * 0.19;
      cy(rack, 0.045, 0.045, 0.11, "#d7eef7", 6.8, 2.46, z, 0.05, 0.1);
      cy(rack, 0.008, 0.008, 0.1, "#cfe4ef", 6.8, 2.55, z, 0.05, 0.1);
      cy(rack, 0.05, 0.05, 0.012, "#cfe4ef", 6.8, 2.51, z, 0.05, 0.1);
    }

    // bottle service between the two VIP booths, roped off from the aisle
    const svc = prop("floor", "vip-bottle-service");
    cy(svc, 0.3, 0.34, 0.07, "#241a2e", -6.45, 0.9, -0.5, 0.35, 0.5);
    cy(svc, 0.05, 0.06, 0.9, "#1b1620", -6.45, 0.45, -0.5, 0.5, 0.6);
    cy(svc, 0.24, 0.28, 0.04, "#181320", -6.45, 0.02, -0.5, 0.5, 0.6);
    cy(svc, 0.05, 0.05, 0.24, "#1d3a24", -6.56, 1.05, -0.56, 0.1, 0.35);
    cy(svc, 0.02, 0.03, 0.1, "#c8a24a", -6.56, 1.22, -0.56, 0.9, 0.25);
    cy(svc, 0.062, 0.055, 0.16, "#9aa3ad", -6.36, 1.01, -0.44, 0.95, 0.2);
    for (let i = 0; i < 3; i++) cy(svc, 0.03, 0.024, 0.1, "#d7eef7", -6.34 - i * 0.06, 0.99, -0.34 + i * 0.03, 0.05, 0.1);
    const candle = sph(svc, 0.03, "#ffb347", -6.45, 0.97, -0.5);
    anims.push((t) => { candle.position.y = 0.97 + Math.sin(t * 2.2) * 0.012; });
    solid(-6.75, -0.8, -6.15, -0.2);

    const rope = prop("floor", "vip-rope");
    const posts = [-4.35, -1.85, 0.65, 3.15];
    for (const z of posts) {
      cy(rope, 0.15, 0.17, 0.04, "#2a2230", -5.15, 0.02, z, 0.55, 0.4);
      cy(rope, 0.022, 0.022, 0.94, "#b9a05c", -5.15, 0.49, z, 0.9, 0.28);
      sph(rope, 0.045, "#c8ad63", -5.15, 0.98, z, 0.9, 0.25);
      solid(-5.3, z - 0.15, -5, z + 0.15);
    }
    for (let i = 0; i < posts.length - 1; i++) {
      const a = posts[i] + 0.07;
      const b = posts[i + 1] - 0.07;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-5.15, 0.9, a),
        new THREE.Vector3(-5.15, 0.72, (a + b) / 2),
        new THREE.Vector3(-5.15, 0.9, b),
      ]);
      mesh(rope, new THREE.TubeGeometry(curve, 10, 0.022, 6, false), standard("#6b1f2e", 0.1, 0.55));
    }

    // the way out, tonight's lineup, a bin by the bar and the room's services
    const exit = prop("wall", "exit-sign");
    bx(exit, 0.96, 0.3, 0.07, "#101014", 0, 2.72, 5.9);
    plate(exit, 0.88, 0.24, signMat("EXIT", { bg: "#0d3f1f", fg: "#8effa8", font: "bold 62px Arial", frame: null }), 0, 2.72, 5.85, Math.PI);

    const poster = prop("wall", "lineup-poster");
    plate(poster, 1.05, 1.4, signMat("TONIGHT", { w: 384, h: 512, bg: "#150d1c", fg: "#ff3cac", font: "bold 78px Arial" }), 3.5, 1.95, 5.93, Math.PI);
    plate(poster, 0.86, 0.34, signMat("DJ NOVA · 23:00", { w: 512, h: 160, bg: "#150d1c", fg: "#f2e6cd", font: "bold 46px Arial", frame: null }), 3.5, 1.1, 5.92, Math.PI);
    bx(poster, 1.1, 1.47, 0.04, "#241a2e", 3.5, 1.6, 5.96);

    const bin = prop("floor", "bar-bin");
    cy(bin, 0.21, 0.19, 0.62, "#2b3038", 5.72, 0.31, 3.88, 0.7, 0.35);
    cy(bin, 0.215, 0.215, 0.03, "#454c55", 5.72, 0.63, 3.88, 0.8, 0.3);
    cy(bin, 0.19, 0.19, 0.02, "#141419", 5.72, 0.65, 3.88);
    solid(5.48, 3.64, 5.96, 4.12);

    const ducts = prop("ceiling", "services");
    bx(ducts, 1.2, 0.34, 0.7, "#3a3f47", 4.6, h - 0.19, 2.2, 0.5, 0.5);
    for (let i = 0; i < 5; i++) bx(ducts, 1.0, 0.02, 0.05, "#262a31", 4.6, h - 0.36, 1.94 + i * 0.13, 0.5, 0.5);
    cy(ducts, 0.075, 0.075, 0.04, "#e7e3d6", 1.9, h - 0.02, 3.3);
    cy(ducts, 0.028, 0.028, 0.03, "#c0392b", 1.9, h - 0.05, 3.3);

    // four uplights marking the corners of the dance floor (nothing to walk into)
    for (const [x, z] of [[-3.05, -2.85], [2.25, -2.85], [-3.05, 1.95], [2.25, 1.95]]) {
      const can = prop("floor", "floor-can");
      cy(can, 0.07, 0.09, 0.08, "#1b1e24", x, 0.04, z, 0.6, 0.4);
      mesh(can, cylG(0.055, 0.055, 0.012), glow("#00f5d4"), x, 0.085, z);
    }
  }

  // ================================================================ ink studio
  // 10 × 8, door centred at z = +4, chair bay x −1.6…−0.8 / z −2.2…−0.2, counter x 3.4…4.2 /
  // z 0.8…3.2, waiting sofa against the left wall, ink shelves on the back wall at x ≈ −3.6.
  function ink() {
    const h = 3.2;
    // the artist's tray: ink caps, machines, gloves, towels, spray bottle
    const cart = prop("floor", "artist-tray");
    cy(cart, 0.03, 0.03, 1.02, "#8d949d", -2.45, 0.51, -1.35, 0.85, 0.3);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      bx(cart, 0.05, 0.03, 0.24, "#6f767f", -2.45 + Math.cos(a) * 0.17, 0.02, -1.35 + Math.sin(a) * 0.17, 0.7, 0.4).rotation.y = a;
    }
    bx(cart, 0.56, 0.04, 0.42, "#9aa1a9", -2.45, 1.03, -1.35, 0.8, 0.3);
    for (const z of [-1.2, -1.5]) bx(cart, 0.5, 0.02, 0.03, "#7d848c", -2.45, 1.06, z, 0.7, 0.4);
    for (let i = 0; i < 6; i++) {
      const x = -2.66 + (i % 3) * 0.09;
      const z = -1.24 + Math.floor(i / 3) * 0.1;
      cy(cart, 0.022, 0.022, 0.035, "#1f2937", x, 1.07, z, 0.1, 0.3);
      cy(cart, 0.019, 0.019, 0.006, ["#111", "#7f1d1d", "#1e3a8a", "#14532d"][i % 4], x, 1.089, z);
      bx(cart, 0.034, 0.012, 0.034, "#c9ced6", x, 1.098, z, 0.5, 0.4);
    }
    for (let i = 0; i < 2; i++) {
      const m = bx(cart, 0.055, 0.045, 0.17, "#1a1a1e", -2.35 + i * 0.09, 1.075, -1.4 - i * 0.04, 0.55, 0.4);
      m.rotation.y = 0.22 - i * 0.44;
      bx(m, 0.02, 0.02, 0.05, "#c0c0c0", 0, 0.03, 0.09, 0.9, 0.2);
      const cord = mesh(cart, torusG(0.05, 0.006), standard("#0f0f12", 0, 0.8), -2.3 + i * 0.09, 1.05, -1.28);
      cord.rotation.x = Math.PI / 2;
    }
    bx(cart, 0.17, 0.06, 0.11, "#e8e4da", -2.62, 1.08, -1.5);
    bx(cart, 0.17, 0.012, 0.11, "#3b82f6", -2.62, 1.114, -1.5);
    const roll = cy(cart, 0.055, 0.055, 0.2, "#f4f1ea", -2.62, 1.1, -1.16, 0, 0.9);
    roll.rotation.z = Math.PI / 2;
    cy(cart, 0.04, 0.04, 0.15, "#dfe6e9", -2.28, 1.12, -1.18, 0, 0.4);
    bx(cart, 0.03, 0.05, 0.05, "#39424e", -2.28, 1.21, -1.18);
    solid(-2.72, -1.58, -2.18, -1.12);

    // the wash station: cabinet, basin, tap, soap and a towel dispenser
    const sink = prop("floor", "wash-station");
    bx(sink, 0.5, 0.78, 0.7, "#2a2d33", -4.72, 0.39, -2.6);
    bx(sink, 0.54, 0.05, 0.74, "#e6e2d8", -4.72, 0.8, -2.6);
    cy(sink, 0.15, 0.13, 0.06, "#c9ced6", -4.72, 0.83, -2.6, 0.9, 0.2);
    cy(sink, 0.055, 0.04, 0.02, "#2b3038", -4.72, 0.845, -2.6);
    cy(sink, 0.018, 0.018, 0.3, "#b0b7bf", -4.9, 1.0, -2.6, 0.9, 0.2);
    cy(sink, 0.016, 0.016, 0.14, "#b0b7bf", -4.84, 1.14, -2.6, 0.9, 0.2).rotation.z = Math.PI / 2;
    cy(sink, 0.035, 0.035, 0.14, "#e4e0d6", -4.55, 0.9, -2.3, 0, 0.6);
    bx(sink, 0.03, 0.08, 0.03, "#cfd6dd", -4.55, 1.0, -2.3, 0.6, 0.3);
    // a mirror over the basin, the paper towel dispenser beside it
    bx(sink, 0.04, 0.66, 0.52, "#8d949d", -4.98, 1.85, -2.6, 0.6, 0.35);
    plate(sink, 0.46, 0.6, cached(mats, "mirror", () => new THREE.MeshStandardMaterial({ color: "#b7c8d1", metalness: 0.6, roughness: 0.16 })), -4.95, 1.85, -2.6, Math.PI / 2);
    bx(sink, 0.06, 0.34, 0.28, "#d9d5cb", -4.93, 1.74, -2.2);
    bx(sink, 0.02, 0.2, 0.22, "#f4f1ea", -4.9, 1.62, -2.2);
    bx(sink, 0.008, 0.06, 0.16, "#e8e4da", -4.895, 1.5, -2.2);
    solid(-4.99, -2.95, -4.45, -2.25);

    // autoclave on a steel stand, sharps bin beside it
    // autoclave on a steel stand (door, window, controls, gauge) with the sharps bin beside it
    const steril = prop("floor", "sterilisation");
    bx(steril, 0.52, 0.05, 0.46, "#6f767f", -4.7, 0.72, -0.85, 0.8, 0.35);
    for (const [dx, dz] of [[-0.2, -0.18], [0.2, -0.18], [-0.2, 0.18], [0.2, 0.18]]) cy(steril, 0.016, 0.016, 0.7, "#8d949d", -4.7 + dx, 0.36, -0.85 + dz, 0.8, 0.3);
    bx(steril, 0.44, 0.36, 0.44, "#c9ced6", -4.7, 0.93, -0.85, 0.85, 0.22);
    bx(steril, 0.02, 0.24, 0.3, "#b3b9c0", -4.47, 0.95, -0.85, 0.8, 0.3);
    bx(steril, 0.01, 0.14, 0.18, "#20252b", -4.455, 0.97, -0.85, 0.5, 0.35);
    bx(steril, 0.02, 0.02, 0.26, "#9aa1a9", -4.45, 0.84, -0.85, 0.9, 0.2);
    for (let i = 0; i < 3; i++) bx(steril, 0.012, 0.03, 0.03, "#5c636b", -4.455, 1.04, -0.78 + i * 0.06, 0.7, 0.3);
    mesh(steril, cylG(0.012, 0.012, 0.012), glow("#38d17a"), -4.45, 1.04, -0.99).rotation.z = Math.PI / 2;
    const gauge = cy(steril, 0.045, 0.045, 0.02, "#e8e5db", -4.7, 1.12, -1.05, 0.4, 0.4);
    gauge.rotation.z = Math.PI / 2;
    bx(steril, 0.004, 0.008, 0.03, "#b91c1c", -4.48, 1.12, -1.05);
    bx(steril, 0.3, 0.34, 0.24, "#b02a25", -4.7, 0.17, -0.3);
    bx(steril, 0.3, 0.03, 0.24, "#f2efe6", -4.7, 0.35, -0.3);
    bx(steril, 0.2, 0.06, 0.02, "#f2efe6", -4.7, 0.24, -0.185);
    solid(-4.99, -1.12, -4.41, -0.14);

    // appointment desk: reader, diary, pens, cards, tip jar
    const desk = prop("surface", "desk");
    const reader = bx(desk, 0.1, 0.04, 0.14, "#22262b", 3.56, 1.06, 1.05, 0.4, 0.5);
    reader.rotation.set(-0.3, 0.3, 0);
    const readerScreen = mesh(reader, planeG(0.08, 0.1), glow("#63e6be"), 0, 0.021, 0);
    readerScreen.rotation.x = -Math.PI / 2;
    bx(desk, 0.34, 0.035, 0.26, "#2f2f34", 3.75, 1.04, 1.5);
    bx(desk, 0.32, 0.004, 0.24, "#f4f1ea", 3.75, 1.06, 1.5);
    bx(desk, 0.02, 0.008, 0.16, "#b91c1c", 3.82, 1.062, 1.5);
    cy(desk, 0.045, 0.045, 0.1, "#3b3f46", 3.6, 1.07, 1.85, 0.3, 0.5);
    for (let i = 0; i < 3; i++) {
      const pen = bx(desk, 0.012, 0.15, 0.012, ["#1e293b", "#b91c1c", "#f59e0b"][i], 3.6 + (i - 1) * 0.015, 1.1, 1.85 + (i - 1) * 0.012);
      pen.rotation.z = (i - 1) * 0.18;
    }
    bx(desk, 0.13, 0.02, 0.09, "#20252b", 3.72, 1.03, 2.25, 0.4, 0.5).rotation.y = 0.4;
    for (let i = 0; i < 3; i++) bx(desk, 0.11, 0.004, 0.07, "#f7f4ec", 3.72 + i * 0.004, 1.036 + i * 0.004, 2.25, 0, 0.9).rotation.y = 0.4;
    cy(desk, 0.05, 0.045, 0.13, "#d7eef7", 3.62, 1.085, 2.6, 0.05, 0.1);
    bx(desk, 0.03, 0.06, 0.03, "#c9a227", 3.62, 1.1, 2.6, 0.8, 0.3);

    // framed certificates on the left wall: paper, header, ruled lines and a seal
    const certs = prop("wall", "certificates");
    for (const z of [1.5, 0.55]) {
      const frame = new THREE.Group();
      frame.position.set(-4.98, 1.9, z);
      frame.rotation.y = Math.PI / 2;
      certs.add(frame);
      bx(frame, 0.68, 0.88, 0.05, "#2b2118", 0, 0, 0);
      plate(frame, 0.62, 0.82, paperMat, 0, 0, 0.03);
      plate(frame, 0.56, 0.09, signMat("CERTIFIED ARTIST", { w: 512, h: 96, bg: "#f4f1ea", fg: "#2b2118", font: "bold 46px Georgia", frame: null }), 0, 0.26, 0.035);
      for (let i = 0; i < 4; i++) bx(frame, 0.4 - i * 0.02, 0.006, 0.004, "#8a8578", 0, 0.1 - i * 0.08, 0.032);
      plate(frame, 0.3, 0.05, signMat("HEALTH DEPT · 2019", { w: 512, h: 96, bg: "#f4f1ea", fg: "#6b6455", font: "bold 34px Georgia", frame: null }), 0, -0.3, 0.035);
      const seal = cy(frame, 0.055, 0.055, 0.006, "#c9a227", 0.19, -0.13, 0.035, 0.7, 0.35);
      seal.rotation.x = Math.PI / 2;
      cy(frame, 0.022, 0.022, 0.008, "#8a1c1c", 0.19, -0.13, 0.042, 0.2, 0.5).rotation.x = Math.PI / 2;
    }

    const bin = prop("floor", "bin");
    cy(bin, 0.18, 0.16, 0.52, "#3b3f46", 4.45, 0.26, -1.6, 0.6, 0.4);
    cy(bin, 0.185, 0.185, 0.025, "#5a616a", 4.45, 0.53, -1.6, 0.7, 0.3);
    solid(4.25, -1.8, 4.65, -1.4);

    const cooler = prop("floor", "water-cooler");
    bx(cooler, 0.36, 1.0, 0.36, "#e8e5db", 4.35, 0.5, -3.45);
    bx(cooler, 0.14, 0.2, 0.03, "#c9ced6", 4.35, 0.84, -3.26, 0.7, 0.4);
    for (const dx of [-0.035, 0.035]) {
      bx(cooler, 0.04, 0.04, 0.04, "#5a616a", 4.35 + dx, 0.9, -3.24, 0.6, 0.4);
      bx(cooler, 0.04, 0.04, 0.04, "#5a616a", 4.35 + dx, 0.78, -3.24, 0.6, 0.4);
    }
    cy(cooler, 0.14, 0.16, 0.34, "#cfe6f2", 4.35, 1.2, -3.45, 0, 0.15);
    cy(cooler, 0.06, 0.14, 0.06, "#b9d8e6", 4.35, 1.4, -3.45, 0, 0.15);
    solid(4.15, -3.65, 4.55, -3.25);

    // extraction over the chair, aprons by the door, and the house rules
    const vent = prop("ceiling", "extraction");
    bx(vent, 0.7, 0.2, 0.5, "#3a3f47", 2.6, h - 0.11, -2.2, 0.6, 0.4);
    for (let i = 0; i < 5; i++) bx(vent, 0.6, 0.015, 0.04, "#252a31", 2.6, h - 0.22, -2.4 + i * 0.1, 0.6, 0.4);
    const fan = new THREE.Group();
    fan.position.set(2.6, h - 0.24, -2.2);
    vent.add(fan);
    for (let i = 0; i < 4; i++) {
      const blade = bx(fan, 0.26, 0.008, 0.09, "#8d949d", 0, 0, 0, 0.7, 0.35);
      blade.rotation.y = (i * Math.PI) / 2;
      blade.position.set(Math.cos((i * Math.PI) / 2) * 0.13, 0, Math.sin((i * Math.PI) / 2) * 0.13);
    }
    anims.push((t) => { fan.rotation.y = t * 2.4; });

    // a work hoodie and a towel on the hook rail by the door, one hook left empty
    const hooks = prop("wall", "aprons");
    bx(hooks, 1.0, 0.05, 0.05, "#8d949d", 2.5, 1.85, 3.95, 0.8, 0.3);
    for (let i = 0; i < 3; i++) {
      bx(hooks, 0.06, 0.012, 0.012, "#8d949d", 2.16 + i * 0.34, 1.82, 3.92, 0.9, 0.2);
      cy(hooks, 0.01, 0.01, 0.08, "#aab4bf", 2.16 + i * 0.34, 1.82, 3.88, 0.9, 0.2).rotation.x = Math.PI / 2;
    }
    const hoodie = new THREE.Group();
    hoodie.position.set(2.5, 1.48, 3.93);
    hoodie.rotation.y = 0.04;
    hooks.add(hoodie);
    bx(hoodie, 0.3, 0.6, 0.05, "#33475a", 0, 0, 0);
    for (const ax of [-0.17, 0.17]) {
      bx(hoodie, 0.08, 0.46, 0.05, "#2a3a4a", ax, 0.06, 0.005).rotation.z = ax > 0 ? -0.06 : 0.06;
    }
    bx(hoodie, 0.16, 0.11, 0.06, "#263342", 0, 0.34, 0);
    bx(hoodie, 0.06, 0.06, 0.02, "#44607a", 0, 0.2, 0.03);
    bx(hoodie, 0.26, 0.02, 0.06, "#3b5266", 0, -0.3, 0);
    const towel = new THREE.Group();
    towel.position.set(2.16, 1.62, 3.93);
    hooks.add(towel);
    bx(towel, 0.26, 0.42, 0.045, "#d9d5cb", 0, 0, 0, 0, 0.95);
    bx(towel, 0.26, 0.01, 0.05, "#b9b4a8", 0, 0.14, 0);
    bx(towel, 0.26, 0.01, 0.05, "#b9b4a8", 0, -0.02, 0);
    bx(towel, 0.24, 0.02, 0.05, "#c9c4b8", 0, 0.19, 0);
    const rules = prop("wall", "house-rules");
    plate(rules, 0.5, 0.3, signMat("18+ · ID", { w: 512, h: 256, bg: "#12100e", fg: "#f2e6cd", font: "bold 92px Arial" }), -2.55, 1.95, 3.96, Math.PI);
  }

  // ============================================================ realtor's office
  // 12 × 9, door centred at z = +4.5, desk x −1.2…1.2 / z −2.05…−0.95, model stand at x ≈ 4.5 /
  // z 1.5, sofa against the left wall, bookcase at x ≈ 5.5 / z −2.8.
  function realty() {
    const h = 3.2;    // the desk's own top is 0.76 m with a 6 cm lip, so everything stands at 0.79
    const desk = prop("surface", "desk");
    bx(desk, 0.04, 0.1, 0.06, "#2b2118", 0, 0.84, -1.02);
    bx(desk, 0.46, 0.12, 0.05, "#3d2b1f", 0, 0.92, -1.02);
    plate(desk, 0.42, 0.07, signMat("A. LANE · REALTOR", { w: 512, h: 96, bg: "#3d2b1f", fg: "#e8d9b5", font: "bold 44px Georgia", frame: null }), 0, 0.92, -0.99);
    // loose paperwork: a thin pile, a folder with a few sheets showing
    for (let i = 0; i < 6; i++) {
      bx(desk, 0.3, 0.004, 0.22, i % 2 ? "#f7f3e8" : "#efe9da", -0.85, 0.793 + i * 0.005, -1.65, 0, 0.9).rotation.y = 0.08 + i * 0.008;
    }
    bx(desk, 0.27, 0.012, 0.2, "#c9b48d", -0.86, 0.828, -1.64).rotation.y = 0.16;
    for (let i = 0; i < 3; i++) bx(desk, 0.24, 0.004, 0.18, "#f7f3e8", -0.64, 0.795 + i * 0.005, -1.88, 0, 0.9).rotation.y = -0.12;
    bx(desk, 0.26, 0.02, 0.2, "#c9b48d", -0.64, 0.81, -1.88).rotation.y = -0.12;
    cy(desk, 0.045, 0.045, 0.11, "#2f3f4b", -0.45, 0.845, -1.2);
    for (let i = 0; i < 3; i++) bx(desk, 0.012, 0.16, 0.012, ["#111827", "#7f1d1d", "#1e3a8a"][i], -0.45 + (i - 1) * 0.016, 0.95, -1.2 + (i - 1) * 0.014).rotation.z = (i - 1) * 0.16;
    // the SOLD stamp: red base, dark body, a printed label and its handle
    const stamp = new THREE.Group();
    stamp.position.set(-1.0, 0.79, -1.2);
    stamp.rotation.y = 0.5;
    desk.add(stamp);
    bx(stamp, 0.15, 0.03, 0.1, "#8a2020", 0, 0.015, 0, 0.2, 0.5);
    bx(stamp, 0.13, 0.09, 0.08, "#2b2118", 0, 0.075, 0);
    bx(stamp, 0.03, 0.07, 0.03, "#c9b48d", 0, 0.155, 0);
    plate(stamp, 0.11, 0.06, signMat("SOLD", { w: 384, h: 192, bg: "#8a2020", fg: "#f8f5ec", font: "bold 84px Arial", frame: null }), 0, 0.075, 0.041);
    // listing cards standing at the corner of the desk
    for (const [i, x] of [0.62, 0.72].entries()) {
      const card = new THREE.Group();
      card.position.set(x, 0.79, -1.62 + i * 0.02);
      card.rotation.y = -0.3 - i * 0.06;
      desk.add(card);
      bx(card, 0.16, 0.22, 0.006, "#f4f1ea", 0, 0.11, 0, 0, 0.8).rotation.x = -0.12;
      plate(card, 0.14, 0.18, signMat(["24 HOMES", "OPEN SAT"][i], { w: 384, h: 512, bg: "#f4f1ea", fg: "#1f3a33", font: "bold 62px Arial", frame: null }), 0, 0.11, 0.006).rotation.x = -0.12;
    }
    const phone = bx(desk, 0.16, 0.05, 0.14, "#22262b", 0.85, 0.815, -1.15, 0.3, 0.5);
    phone.rotation.y = 0.3;
    bx(desk, 0.05, 0.03, 0.18, "#2b3038", 0.82, 0.855, -1.15, 0.3, 0.5).rotation.y = 0.3;
    for (let i = 0; i < 4; i++) bx(desk, 0.02, 0.006, 0.016, "#5a616a", 0.83 + (i % 2) * 0.03, 0.841, -1.18 + Math.floor(i / 2) * 0.03, 0.4, 0.5);
    cy(desk, 0.035, 0.045, 0.11, "#2b2118", 1.02, 0.845, -1.88);
    sph(desk, 0.11, "#3f7d4a", 1.02, 0.96, -1.88);
    sph(desk, 0.08, "#4f9a5b", 1.05, 1.02, -1.86);

    // key board on the back wall, below the listings
    const keys = prop("wall", "key-board");
    bx(keys, 1.4, 0.62, 0.05, "#3d2b1f", -4.1, 1.06, -4.44);
    plate(keys, 1.26, 0.5, signMat("KEYS", { w: 512, h: 200, bg: "#c8b48c", fg: "#3d2b1f", font: "bold 84px Georgia", frame: null }), -4.1, 1.16, -4.41);
    for (let i = 0; i < 6; i++) {
      const x = -4.6 + i * 0.2;
      cy(keys, 0.008, 0.008, 0.05, "#8d949d", x, 0.99, -4.39, 0.8, 0.3).rotation.x = Math.PI / 2;
      const ring = mesh(keys, torusG(0.026, 0.005), standard("#c8ad63", 0.9, 0.25), x, 0.94, -4.38);
      ring.rotation.y = 0.4;
      bx(keys, 0.022, 0.09, 0.006, ["#c8ad63", "#aab4bf", "#c8ad63"][i % 3], x + 0.02, 0.87, -4.38, 0.9, 0.25).rotation.z = 0.18;
    }
    bx(keys, 1.3, 0.03, 0.09, "#2b2118", -4.1, 0.74, -4.4);

    // market whiteboard on the stretch of wall past the window, with markers on its tray
    const board = prop("wall", "market-board");
    const wallBoard = new THREE.Group();
    wallBoard.position.set(-5.95, 1.7, -2.55);
    wallBoard.rotation.y = Math.PI / 2;
    board.add(wallBoard);
    bx(wallBoard, 2.04, 1.19, 0.05, "#8d949d", 0, 0, 0);
    plate(wallBoard, 1.94, 1.09, paperMat, 0, 0, 0.03);
    plate(wallBoard, 1.8, 0.96, signMat("TOWN AVERAGE  $312k", { w: 512, h: 288, bg: "#f7f5ef", fg: "#1f3a33", font: "bold 44px Arial", frame: null }), 0, 0.02, 0.045);
    bx(wallBoard, 1.9, 0.04, 0.1, "#5a616a", 0, -0.62, 0.05, 0.6, 0.4);
    for (let i = 0; i < 3; i++) bx(wallBoard, 0.1, 0.02, 0.02, ["#b91c1c", "#1e3a8a", "#111827"][i], -0.7 + i * 0.06, -0.58, 0.09);
    bx(wallBoard, 0.12, 0.05, 0.06, "#2f3f4b", 0.32, -0.58, 0.09);

    // filing cabinet by the bookcase, a printer on a stand near the window wall
    const files = prop("floor", "filing-cabinet");
    bx(files, 0.55, 1.32, 0.7, "#3b4148", 5.55, 0.66, -1.2, 0.4, 0.5);
    for (let i = 0; i < 3; i++) {
      bx(files, 0.5, 0.38, 0.02, "#4a5158", 5.55, 0.28 + i * 0.42, -0.84, 0.4, 0.5);
      bx(files, 0.18, 0.025, 0.03, "#aab4bf", 5.55, 0.38 + i * 0.42, -0.82, 0.9, 0.2);
      bx(files, 0.14, 0.06, 0.01, "#e8e5db", 5.55, 0.2 + i * 0.42, -0.83);
    }
    solid(5.25, -1.58, 5.85, -0.82);

    const printer = prop("floor", "printer");
    bx(printer, 0.62, 0.68, 0.5, "#3b4148", 5.3, 0.34, 3.4, 0.4, 0.5);
    bx(printer, 0.66, 0.06, 0.54, "#4a5158", 5.3, 0.7, 3.4, 0.4, 0.5);
    bx(printer, 0.6, 0.3, 0.46, "#dcd8cd", 5.3, 0.88, 3.4, 0.1, 0.6);
    bx(printer, 0.52, 0.03, 0.3, "#252a31", 5.3, 1.04, 3.4);
    bx(printer, 0.34, 0.02, 0.24, "#f7f5ee", 5.3, 1.06, 3.36);
    mesh(printer, cylG(0.016, 0.016, 0.008), glow("#38d17a"), 5.05, 0.9, 3.18);
    solid(4.97, 3.15, 5.63, 3.65);

    // coat rack by the door, water cooler, "for sale" sign leaning against the wall
    const coats = prop("floor", "coat-rack");
    cy(coats, 0.18, 0.2, 0.04, "#2b2118", -2.5, 0.02, 4.05, 0.3, 0.5);
    cy(coats, 0.024, 0.024, 1.72, "#3d2b1f", -2.5, 0.88, 4.05, 0.3, 0.5);
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const hook = bx(coats, 0.03, 0.03, 0.16, "#6b5236", -2.5 + Math.sin(a) * 0.08, 1.68, 4.05 + Math.cos(a) * 0.08, 0.4, 0.5);
      hook.rotation.y = a;
    }
    bx(coats, 0.3, 1.0, 0.16, "#25313b", -2.62, 1.14, 4.05).rotation.y = 0.2;
    bx(coats, 0.22, 0.3, 0.26, "#1f2a33", -2.62, 1.6, 4.05).rotation.y = 0.2;
    solid(-2.72, 3.85, -2.28, 4.25);

    const cooler = prop("floor", "water-cooler");
    bx(cooler, 0.36, 1.02, 0.36, "#e8e5db", -5.4, 0.51, 3.95);
    cy(cooler, 0.14, 0.16, 0.34, "#cfe6f2", -5.4, 1.21, 3.95, 0, 0.15);
    cy(cooler, 0.06, 0.14, 0.06, "#b9d8e6", -5.4, 1.41, 3.95, 0, 0.15);
    for (const dx of [-0.08, 0.08]) cy(cooler, 0.004, 0.004, 0.1, "#9aa1a9", -5.4 + dx * 2, 0.84, 3.77);
    bx(cooler, 0.14, 0.03, 0.02, "#c9ced6", -5.4, 0.76, 3.76, 0.7, 0.4);
    solid(-5.6, 3.75, -5.2, 4.15);

    const yard = prop("floor", "yard-sign");
    const stand = new THREE.Group();
    stand.position.set(3.5, 0, 4.12);
    stand.rotation.set(0, -0.35, 0.14);
    yard.add(stand);
    for (const dx of [-0.26, 0.26]) bx(stand, 0.05, 1.0, 0.05, "#d9d4c7", dx, 0.5, 0, 0.3, 0.6);
    bx(stand, 0.78, 0.52, 0.03, "#f4f1ea", 0, 1.14, 0.01, 0.1, 0.7);
    bx(stand, 0.82, 0.56, 0.02, "#b91c1c", 0, 1.14, 0);
    plate(stand, 0.74, 0.44, signMat("FOR SALE", { w: 512, h: 288, bg: "#f4f1ea", fg: "#b91c1c", font: "bold 84px Arial", frame: null }), 0, 1.14, 0.03);
    solid(3.2, 3.92, 3.8, 4.32);

    // the model's price tag, the wall clock and the room's services
    // the model's price card standing on the corner of its table (top at 0.93)
    const tag = prop("surface", "model-tag");
    bx(tag, 0.05, 0.12, 0.045, "#2b2118", 4.2, 0.99, 1.92);
    bx(tag, 0.34, 0.2, 0.01, "#2b2118", 4.2, 1.15, 1.92);
    plate(tag, 0.3, 0.16, signMat("$312,000", { w: 512, h: 256, bg: "#f4f1ea", fg: "#1f3a33", font: "bold 80px Arial", frame: null }), 4.2, 1.15, 1.935);

    const clock = prop("wall", "clock");
    cy(clock, 0.24, 0.24, 0.04, "#2b2118", 5.94, 2.3, 1.3, 0.3, 0.5).rotation.z = Math.PI / 2;
    cy(clock, 0.21, 0.21, 0.01, "#f4f1ea", 5.9, 2.3, 1.3, 0, 0.8).rotation.z = Math.PI / 2;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      bx(clock, 0.012, 0.012, 0.03, "#2b2118", 5.88, 2.3 + Math.cos(a) * 0.17, 1.3 + Math.sin(a) * 0.17);
    }
    // hands pivot on the middle of the face, so they sweep instead of spinning in place
    const hourPivot = new THREE.Group();
    hourPivot.position.set(5.88, 2.3, 1.3);
    clock.add(hourPivot);
    bx(hourPivot, 0.006, 0.008, 0.11, "#2b2118", 0, 0, 0.05);
    const minutePivot = new THREE.Group();
    minutePivot.position.set(5.87, 2.3, 1.3);
    clock.add(minutePivot);
    bx(minutePivot, 0.005, 0.006, 0.16, "#2b2118", 0, 0, 0.075);
    const now = new Date();
    const mins = now.getMinutes() + now.getSeconds() / 60;
    const hrs = (now.getHours() % 12) + mins / 60;
    // 12 o'clock is +y and clockwise runs toward −z seen from the room, so the offset hand
    // (pointing +z at rest) starts at −90° and sweeps on from there, at real clock speed
    anims.push((t) => {
      hourPivot.rotation.x = -Math.PI / 2 - hrs * (Math.PI / 6) - t * 0.000145;
      minutePivot.rotation.x = -Math.PI / 2 - mins * (Math.PI / 30) - t * 0.001745;
    });

    const services = prop("ceiling", "services");
    bx(services, 1.0, 0.3, 0.6, "#c9c6bd", 1.2, h - 0.18, 1.2);
    for (let i = 0; i < 4; i++) bx(services, 0.86, 0.02, 0.05, "#8d8a82", 1.2, h - 0.34, 0.98 + i * 0.12);
    cy(services, 0.07, 0.07, 0.035, "#efece3", -1.6, h - 0.02, -1.2);
    cy(services, 0.025, 0.025, 0.02, "#b91c1c", -1.6, h - 0.045, -1.2);

    const welcome = prop("floor", "doormat");
    const rugMat = mesh(welcome, planeG(1.5, 0.9), standard("#2f3a32", 0, 1), 0, 0.012, 3.9);
    rugMat.rotation.x = -Math.PI / 2;
    const welcomeText = plate(welcome, 1.1, 0.3, signMat("WELCOME", { w: 512, h: 160, bg: "#2f3a32", fg: "#d9cdb2", font: "bold 72px Georgia", frame: null }), 0, 0.018, 3.9);
    welcomeText.rotation.x = -Math.PI / 2;
  }

  const builders = { club, ink, realty };
  builders[id]();

  interior.group.add(root);
  interior.extras = root;
  // keep the room's own animation, then run ours off our own clock (the room's tick is
  // called with performance.now()/1000, which is not necessarily zero-based)
  const previous = interior.tick;
  let elapsed = 0;
  interior.tick = (dt, t) => {
    previous?.(dt, t);
    elapsed += Math.max(0, dt || 0);
    for (const animate of anims) animate(elapsed);
  };
  for (const animate of anims) animate(0);
  return interior;
}
