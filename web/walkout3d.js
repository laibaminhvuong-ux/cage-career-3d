// Two sequential entrances, entirely presentation-only; skip never starts combat.
import * as THREE from "./vendor/three.module.min.js";
import { attack } from "./fighter3d.js";
import { walkoutPreferences, npcWalkout, WALKOUT_COLORS } from "./fightfeatures.js";

export class WalkoutDirector {
  constructor(arena) {
    this.arena = arena; this.active = false;
    this.lane = new THREE.Group(); this.lane.visible = false; this.lane.name = "walkout-entrance-aisle";
    const material = new THREE.MeshStandardMaterial({ color: "#12151f", roughness: 0.7 });
    const mesh = (w, h, d, x, y, z, mat = material) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); this.lane.add(m); return m; };
    mesh(6.2, 0.1, 1.9, -7.1, -0.07, 0);
    this.trim = new THREE.MeshBasicMaterial({ color: "#e64455", toneMapped: false });
    for (const z of [-0.92, 0.92]) { mesh(6.2, 0.025, 0.035, -7.1, 0, z, this.trim); mesh(0.16, 2.6, 0.16, -9.6, 1.3, z); }
    mesh(0.16, 0.16, 2.0, -9.6, 2.6, 0);
    arena.scene.add(this.lane);
    this.spot = new THREE.SpotLight("#e64455", 75, 16, 0.5, 0.8, 1.1); this.spot.visible = false;
    arena.scene.add(this.spot, this.spot.target);
  }
  start(preferences, onPhase, onDone) {
    this.stop(false);
    this.preferences = walkoutPreferences(preferences); this.onPhase = onPhase; this.onDone = onDone;
    this.active = true; this.phase = -1; this.elapsed = 0; this.lane.visible = this.spot.visible = true;
    this.arena.presenter.hide(); this.arena.mode = "intro";
    for (const side of [this.arena.P, this.arena.O]) { side.f.root.visible = false; if (side.ring) side.ring.visible = false; side.f.stopActions(); }
    this.next();
  }
  next() {
    this.phase++; this.elapsed = 0;
    if (this.phase > 1) { this.stop(true); return; }
    const side = this.phase === 0 ? this.arena.P : this.arena.O;
    this.side = side;
    this.options = this.phase === 0 ? this.preferences : npcWalkout(this.arena.O.fighterName || "Blue corner", this.arena.O.fighterStyle || "Balanced");
    const color = WALKOUT_COLORS[this.options.lighting]; this.trim.color.set(color); this.spot.color.set(color);
    this.startPos = new THREE.Vector3(-9.5, 0, 0); this.gate = new THREE.Vector3(-3.9, 0, 0);
    this.endPos = this.arena.cornerSpot[side.tag].clone().multiplyScalar(0.9);
    side.pos.copy(this.startPos); side.target.copy(this.startPos); side.f.root.position.copy(this.startPos); side.f.root.visible = true;
    side.f.lastPos.copy(this.startPos); side.yaw = Math.PI / 2;
    side.f.setBase(this.options.entrance === "salute" ? "victory" : this.options.entrance === "bounce" ? "stance" : "relaxed");
    if (this.options.entrance === "bounce") side.f.play(attack("jab-cross").frames, "relaxed");
    this.onPhase?.({ side: side.tag, options: this.options, index: this.phase + 1, name: side.fighterName });
  }
  update(dt) {
    if (!this.active) return;
    this.elapsed += dt;
    const side = this.side, u = Math.max(0, Math.min(1, (this.elapsed - 1) / 4.5));
    if (this.elapsed > 1.1) side.f.setBase("relaxed");
    if (u < 0.6) side.target.copy(this.startPos).lerp(this.gate, u / 0.6);
    else side.target.copy(this.gate).lerp(this.endPos, (u - 0.6) / 0.4);
    side.fixedYaw = u < 0.6 ? Math.PI / 2 : Math.atan2(this.endPos.x - this.gate.x, this.endPos.z - this.gate.z);
    this.arena.ref.target.set(0, 0, -0.8);
    this.spot.position.set(side.pos.x - 1, 4.5, 1.5); this.spot.target.position.copy(side.pos).y = 1;
    if (this.elapsed >= 6) { side.pos.copy(this.endPos); side.target.copy(this.endPos); this.next(); }
  }
  stop(notify = false) {
    const callback = this.active ? this.onDone : null;
    this.active = false; this.lane.visible = this.spot.visible = false;
    for (const side of [this.arena.P, this.arena.O].filter(Boolean)) {
      side.f.root.visible = true; if (side.ring) side.ring.visible = true;
      if (notify) {
        side.pos.copy(this.arena.cornerSpot[side.tag]).multiplyScalar(0.9); side.target.copy(side.pos);
        side.f.root.position.copy(side.pos); side.f.lastPos.copy(side.pos); side.f.setBase("relaxed"); side.f.stopActions();
      }
    }
    this.onPhase = this.onDone = null;
    if (notify) { this.arena.presenter.show(1); callback?.(); }
  }
}
