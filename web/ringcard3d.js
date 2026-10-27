// Adult event presentation. Swimwear is opt-in; sport outfits are the default.
import * as THREE from "./vendor/three.module.min.js";
import { Fighter3D, parseLook } from "./fighter3d.js";
const KEY = "cc3d_presentation15plus";
let preference = false;
export function getPresentation15Plus() {
  try { const value = localStorage.getItem(KEY); return value === null ? preference : value === "1"; }
  catch { return preference; }
}
export function setPresentation15Plus(enabled) {
  preference = enabled === true;
  try { localStorage.setItem(KEY, preference ? "1" : "0"); } catch { /* memory preference still works */ }
  return preference;
}

export class RingCardPresenter {
  constructor({ org = "GFC", event = null, bikini = getPresentation15Plus() } = {}) {
    this.root = new THREE.Group();
    this.root.name = "adult-ring-card-presenter";
    this.root.userData = { age: 26, role: "Ring-card presenter" };
    this.org = org; this.event = event; this.bikini = !!bikini; this.time = 0;
    this.canvas = document.createElement("canvas"); this.canvas.width = 512; this.canvas.height = 384;
    this.texture = new THREE.CanvasTexture(this.canvas); this.texture.colorSpace = THREE.SRGBColorSpace;
    this.card = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.43, 0.025), new THREE.MeshStandardMaterial({ color: "#171a24", roughness: 0.5 }));
    const faceMat = new THREE.MeshBasicMaterial({ map: this.texture, toneMapped: false });
    this.cardFace = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.40), faceMat); this.cardFace.position.z = 0.014;
    this.card.add(this.cardFace); this.root.add(this.card);
    this.rebuild(); this.setCard(1); this.root.visible = false;
  }
  rebuild() {
    if (this.fighter) this.fighter.dispose();
    const look = parseLook("1,5,1,0,0,0,1");
    this.fighter = new Fighter3D({ look, female: true, presenter: true, bikini: this.bikini, outfit: this.event ? this.event.accent : "#be2745", weightClass: 2, detail: "low", faceSeed: "Maya event presenter, adult 26", shoes: "#191b25" });
    this.root.add(this.fighter.root);
    if (this.bikini) {
      const strapMaterial = new THREE.MeshStandardMaterial({ color: this.event?.accent || "#be2745", roughness: 0.65 });
      for (const sx of [-1, 1]) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(sx * 0.063, 0.155, 0.115), new THREE.Vector3(sx * 0.135, 0.255, 0.02), new THREE.Vector3(sx * 0.072, 0.13, -0.10),
        ]);
        this.fighter.j.chest.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.004, 5, false), strapMaterial));
      }
    }
    this.fighter.setBase("relaxed"); this.fighter.snap();
    this.card.position.set(0, 2.04 * this.fighter.root.scale.y, 0.02);
    this.root.userData.outfit = this.bikini ? "bikini" : "sports-bra-and-shorts";
    this.update(0);
  }
  setOutfit(bikini) {
    if (this.bikini === !!bikini) return;
    this.bikini = !!bikini; this.rebuild();
  }
  configure(org, event) {
    if (this.org === org && this.event?.id === event?.id) return;
    this.org = org; this.event = event || null; this.rebuild(); this.cardKey = null;
  }
  setCard(round, media = false) {
    const key = [round, media, this.org, this.event?.id].join("|");
    if (this.cardKey === key) return;
    this.cardKey = key; this.round = Math.max(1, Math.min(5, Math.trunc(round || 1))); this.media = media;
    const g = this.canvas.getContext("2d"), accent = this.event?.accent || "#edc66b";
    g.fillStyle = "#10141d"; g.fillRect(0, 0, 512, 384);
    g.strokeStyle = accent; g.lineWidth = 12; g.strokeRect(8, 8, 496, 368);
    g.fillStyle = accent; g.font = "900 35px Arial"; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText(this.org.toUpperCase(), 256, 53, 440);
    g.fillStyle = "#ffffff"; g.font = media ? "900 68px Arial" : "900 170px Arial";
    g.fillText(media ? "MEDIA DAY" : String(this.round), 256, 191, 450);
    g.fillStyle = accent; g.font = "800 29px Arial";
    g.fillText(media ? (this.event?.name || "FIGHT WEEK").toUpperCase() : "ROUND", 256, 317, 440);
    this.texture.needsUpdate = true;
    this.root.userData.round = this.round; this.root.userData.media = media;
  }
  show(round, media = false) { this.setOutfit(getPresentation15Plus()); this.setCard(round, media); this.root.visible = true; }
  hide() { this.root.visible = false; }
  update(dt) {
    this.time += dt;
    const f = this.fighter;
    f.update(dt);
    // Hold the card at its lower corners, with arms above shoulder height.
    f.cur.shL = [-2.98, 0, 0.13]; f.cur.shR = [-2.98, 0, -0.13];
    f.cur.elL = [-0.10, 0, 0]; f.cur.elR = [-0.10, 0, 0];
    f.cur.chest[1] *= 0.2;
    f.applyPose(f.cur);
    this.card.rotation.z = Math.sin(this.time * 1.5) * 0.015;
  }
  dispose() {
    this.fighter.dispose();
    this.card.geometry.dispose(); this.card.material.dispose();
    this.cardFace.geometry.dispose(); this.cardFace.material.dispose(); this.texture.dispose();
    this.root.removeFromParent();
  }
}

/** A small independent stage, so a media modal never steals the fight/world canvas. */
export function mountMediaPresenter(host, { org = "GFC", event = null } = {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch { host.textContent = "Ring-card presenter · Media day"; return { dispose() {} }; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor("#10141b", 1);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
  const presenter = new RingCardPresenter({ org, event }); scene.add(presenter.root); presenter.show(1, true);
  camera.position.set(0, 1.25, 4.4); camera.lookAt(0, 1.15, 0);
  const key = new THREE.DirectionalLight("#fff1dd", 3); key.position.set(-2, 4, 3);
  scene.add(key, new THREE.HemisphereLight("#dae8ff", "#3c3543", 1.6));
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-label", "Adult ring-card presenter at media day");
  const resize = () => { const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight); renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  let last = 0;
  renderer.setAnimationLoop((now) => {
    if (document.hidden || !host.isConnected || now - last < 33) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    presenter.update(dt); renderer.render(scene, camera);
  });
  return { dispose() { renderer.setAnimationLoop(null); observer.disconnect(); presenter.dispose(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); } };
}
