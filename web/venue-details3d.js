// Additive non-home set dressing. No game rules, extra lights, or external assets.
import * as THREE from './vendor/three.module.min.js';
const SUPPORTED = new Set(['cafe', 'gym', 'cars', 'pets']);
export function decorateVenue(id, interior) {
  if (!SUPPORTED.has(id) || interior.venueDetails) return interior;
  const group = new THREE.Group(); group.name = `venue-details-${id}`;
  const materials = new Map(), geometries = new Map(), animations = [];
  const material = (color, metal = 0, rough = 0.6) => {
    const key = [color, metal, rough].join('|');
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough }));
    return materials.get(key);
  };
  const geometry = (key, make) => { if (!geometries.has(key)) geometries.set(key, make()); return geometries.get(key); };
  const mesh = (geo, mat, x, y, z, parent = group) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  const box = (w, h, d, color, x, y, z, parent = group, metal = 0) => mesh(geometry(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d)), material(color, metal), x, y, z, parent);
  const cyl = (r, h, color, x, y, z, parent = group, metal = 0) => mesh(geometry(`c${r},${h}`, () => new THREE.CylinderGeometry(r, r, h, 12)), material(color, metal), x, y, z, parent);
  const ball = (r, color, x, y, z, parent = group) => mesh(geometry(`s${r}`, () => new THREE.SphereGeometry(r, 10, 7)), material(color), x, y, z, parent);
  const ring = (r, tube, color, x, y, z, parent = group, metal = 0) => mesh(geometry(`t${r},${tube}`, () => new THREE.TorusGeometry(r, tube, 6, 20)), material(color, metal), x, y, z, parent);
  const label = (text, w, h, x, y, z, parent = group, fg = '#f0d7ab') => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const g = c.getContext('2d'); g.fillStyle = '#17202a'; g.fillRect(0, 0, 512, 128);
    g.strokeStyle = fg; g.lineWidth = 4; g.strokeRect(8, 8, 496, 112);
    g.fillStyle = fg; g.font = '700 48px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 256, 64, 470);
    const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace;
    return mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.8 }), x, y, z, parent);
  };
  const block = (x0, z0, x1, z1) => interior.solids.push([x0, z0, x1, z1]);
  if (id === 'cafe') {
    // Give the existing espresso-machine block proper controls, a group head and drip tray.
    box(0.73, 0.05, 0.52, '#252a2e', -1.6, 1.08, -3.04);
    box(0.62, 0.05, 0.18, '#bcc4ca', -1.6, 1.18, -2.92, group, 0.8);
    for (const x of [-1.77, -1.43]) {
      cyl(0.055, 0.1, '#bdc5ca', x, 1.34, -2.89, group, 0.8);
      box(0.045, 0.045, 0.2, '#20262a', x, 1.32, -2.8);
      cyl(0.045, 0.07, '#fff2d5', x, 1.24, -2.9);
      const dial = cyl(0.04, 0.018, '#1b252b', x, 1.48, -2.94); dial.rotation.x = Math.PI / 2;
      ball(0.012, '#63cdb0', x + 0.065, 1.48, -2.925);
    }
    // Grinder, sealed bean hopper, takeaway cups and folded napkins on the bar.
    box(0.28, 0.3, 0.27, '#26373a', -0.89, 1.2, -3.15);
    cyl(0.13, 0.22, '#73543b', -0.89, 1.46, -3.15);
    cyl(0.145, 0.025, '#222b2c', -0.89, 1.58, -3.15);
    for (let i = 0; i < 4; i++) { cyl(0.06, 0.12, '#efe3c7', -0.38 + i * 0.14, 1.11, -3.12); cyl(0.065, 0.015, '#40352a', -0.38 + i * 0.14, 1.18, -3.12); }
    box(0.23, 0.07, 0.22, '#e8d8b9', 0.32, 1.08, -3.1);
    label('SMALL BATCH / FRESH DAILY', 1.6, 0.25, 0, 0.9, -2.84);
    // A few pooled wisps rise from the steam wand; no canvas updates or lights.
    for (let i = 0; i < 5; i++) {
      const steam = mesh(geometry('steam', () => new THREE.SphereGeometry(0.035, 8, 5)), new THREE.MeshBasicMaterial({ color: '#fff5e3', transparent: true, opacity: 0, depthWrite: false }), -1.16, 1.5, -2.92);
      animations.push(t => { const phase = (t * 0.35 + i / 5) % 1; steam.position.set(-1.16 + Math.sin(phase * 5 + i) * 0.04, 1.42 + phase * 0.55, -2.92); steam.scale.setScalar(0.6 + phase * 2); steam.material.opacity = Math.sin(phase * Math.PI) * 0.13; });
    }
  } else if (id === 'gym') {
    // A physical segmented interval clock; segment visibility changes once per second.
    const timer = new THREE.Group(); timer.position.set(0, 3.5, -6.84); group.add(timer);
    box(2.8, 0.94, 0.1, '#121820', 0, 0, 0, timer);
    label('INTERVAL TRAINING', 2.1, 0.27, 0, 0.66, 0.06, timer);
    const digitSegments = [];
    const bright = new THREE.MeshBasicMaterial({ color: '#ef665c', toneMapped: false });
    const positions = [[0, .24, true], [.14, .12, false], [.14, -.12, false], [0, -.24, true], [-.14, -.12, false], [-.14, .12, false], [0, 0, true]];
    for (let n = 0; n < 4; n++) {
      const segments = positions.map(([x, y, horizontal]) => mesh(geometry(horizontal ? 'segment-h' : 'segment-v', () => new THREE.BoxGeometry(horizontal ? .22 : .045, horizontal ? .045 : .17, .025)), bright, x + [-.94, -.48, .28, .74][n], y, .07, timer));
      digitSegments.push(segments);
    }
    for (const y of [-.1, .1]) mesh(geometry('colon', () => new THREE.SphereGeometry(.028, 6, 5)), bright, -.08, y, .08, timer);
    const patterns = ['1111110','0110000','1101101','1111001','0110011','1011011','1011111','1110000','1111111','1111011'];
    let last = -1;
    animations.push(t => { const remaining = 180 - Math.floor(t % 180); if (remaining === last) return; last = remaining; const digits = `${Math.floor(remaining / 60)}${String(remaining % 60).padStart(2, '0')}`.padStart(4, '0'); digitSegments.forEach((parts, i) => parts.forEach((p, s) => { p.visible = patterns[Number(digits[i])][s] === '1'; })); });
    // Speed-bag platform and a tidy towel/glove shelf in the unused back-wall bay.
    cyl(0.48, 0.09, '#98734e', 0.4, 2.62, -6.25);
    box(0.09, 0.5, 0.65, '#313b45', 0.4, 2.88, -6.5, group, 0.6);
    const bag = ball(.14, '#a94632', .4, 2.28, -6.25); bag.scale.set(.75, 1.4, .75);
    cyl(.018, .15, '#8d949d', .4, 2.49, -6.25, group, .8);
    animations.push(t => { bag.rotation.z = Math.sin(t * 3.5) * .08; });
    box(2.1, .07, .42, '#343d45', .1, 1.12, -6.62);
    for (let i = 0; i < 3; i++) box(.3, .07, .24, ['#d8d5cc','#b9c9d4','#ddd9c8'][i], -.55, 1.2 + i * .07, -6.6);
    for (const x of [.2, .46]) { const glove = ball(.12, '#b73636', x, 1.3, -6.6); glove.scale.set(.8, 1.1, 1); }
    block(-1.05, -7, 1.25, -5.9);
  } else if (id === 'cars') {
    // A rear-wall alloy gallery and a detailing trolley, clear of the rotating vehicle stands.
    label('PRECISION / PERFORMANCE', 4.8, .42, 0, 2.7, -6.82);
    for (const [i, x] of [-2, 0, 2].entries()) {
      ring(.43, .09, '#171c22', x, 1.65, -6.64);
      ring(.31, .035, '#a4b4c3', x, 1.65, -6.53, group, .9);
      for (let j = 0; j < 5 + i; j++) {
        const spoke = box(.035, .55, .04, '#b5bec7', x, 1.65, -6.54, group, .9); spoke.rotation.z = j * Math.PI / (5 + i);
      }
      ball(.065, '#e1c575', x, 1.65, -6.5);
      label(['TOURING', 'SPORT', 'FORGED'][i], 1.05, .22, x, .95, -6.52);
    }
    const cart = new THREE.Group(); cart.position.set(8.65, 0, 4.85); group.add(cart);
    for (const y of [.3, .85]) box(.8, .055, .52, '#29333d', 0, y, 0, cart, .5);
    for (const x of [-.35, .35]) for (const z of [-.21, .21]) { cyl(.022, .64, '#a0a9b0', x, .55, z, cart, .8); const wheel = cyl(.065, .04, '#171b20', x, .12, z, cart); wheel.rotation.x = Math.PI / 2; }
    for (const [i, color] of ['#25acbe','#deb867','#7194cf'].entries()) { cyl(.055, .21, color, -.24 + i * .2, .98, -.05, cart); box(.09, .025, .04, '#252d34', -.24 + i * .2, 1.1, -.05, cart); }
    box(.3, .08, .22, '#bed0d1', .14, .37, .04, cart);
    block(8.15, 4.45, 9.15, 5.25);
  } else if (id === 'pets') {
    // Wall-mounted leashes and enrichment toys; keep animals and the exit corridor free.
    box(.38, .06, 2, '#8b684b', 5.72, 1.25, -1.9);
    for (let i = 0; i < 4; i++) {
      const color = ['#efb253','#63a6b0','#c384a9','#90ae6d'][i];
      const leash = ring(.15, .025, color, 5.65, 1.72, -2.6 + i * .45); leash.rotation.y = Math.PI / 2;
      ball(.08, color, 5.65, 1.36, -2.6 + i * .45);
    }
    const sign = label('PLAY / WALK / REPEAT', 1.8, .3, 5.87, 2.25, -1.9); sign.rotation.y = -Math.PI / 2;
    block(5.35, -3.05, 6, -.85);
    // Food station with inset bowls, a scratching pad and toy mice near the existing cat tree.
    box(.95, .025, .48, '#709184', -4.55, .025, 2.45);
    for (const x of [-4.8, -4.3]) { cyl(.16, .08, '#b6c8ce', x, .075, 2.45, group, .7); cyl(.115, .008, x < -4.5 ? '#a7d9e6' : '#765130', x, .119, 2.45); }
    box(.65, .06, .36, '#ae9270', -4.5, .06, 1.65);
    for (let i = 0; i < 6; i++) box(.025, .015, .32, '#d1bc97', -4.76 + i * .1, .1, 1.65);
    for (const [i, x] of [-4.9, -4.35].entries()) { const toy = ball(.055, i ? '#b99da9' : '#b3b6aa', x, .06, 3.1); toy.scale.set(1, .7, 1.5); ring(.07, .009, '#c4b6a3', x, .025, 3.22).rotation.x = Math.PI / 2; }
  }
  interior.group.add(group); interior.venueDetails = group;
  const previous = interior.tick; let elapsed = 0;
  interior.tick = (dt, t) => { previous?.(dt, t); elapsed += Math.max(0, dt); for (const animate of animations) animate(elapsed); };
  for (const animate of animations) animate(0);
  return interior;
}
