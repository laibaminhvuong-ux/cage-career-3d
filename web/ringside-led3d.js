// Reusable, event-driven LED boards: one shared texture, no lights or per-frame canvas uploads.
import * as THREE from './vendor/three.module.min.js';
export class RingsideLED {
  constructor(scene) {
    this.root = new THREE.Group(); this.root.name = 'ringside-led-boards';
    this.canvas = document.createElement('canvas'); this.canvas.width = 1024; this.canvas.height = 128;
    this.texture = new THREE.CanvasTexture(this.canvas); this.texture.colorSpace = THREE.SRGBColorSpace;
    this.material = new THREE.MeshBasicMaterial({ map: this.texture, toneMapped: false, side: THREE.DoubleSide });
    const face = new THREE.PlaneGeometry(3.8, 0.48);
    const shell = new THREE.BoxGeometry(3.96, 0.66, 0.16);
    const housing = new THREE.MeshStandardMaterial({ color: '#10131c', metalness: 0.55, roughness: 0.6 });
    this.trim = new THREE.MeshBasicMaterial({ color: '#6388ba', transparent: true, opacity: 0.25, toneMapped: false });
    const strip = new THREE.BoxGeometry(3.86, 0.025, 0.025);
    // Keep the negative-X walkout aisle clear.
    for (const angle of [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI, 5 * Math.PI / 4, 7 * Math.PI / 4]) {
      const board = new THREE.Group(); board.position.set(Math.sin(angle) * 6.2, 0.68, Math.cos(angle) * 6.2);
      board.rotation.y = angle + Math.PI;
      board.add(new THREE.Mesh(shell, housing));
      const screen = new THREE.Mesh(face, this.material); screen.position.z = 0.09; board.add(screen);
      for (const y of [-0.28, 0.28]) { const rail = new THREE.Mesh(strip, this.trim); rail.position.set(0, y, 0.1); board.add(rail); }
      this.root.add(board);
    }
    scene.add(this.root); this.reset({});
  }
  reset(fight) {
    this.org = String(fight.org || 'FIGHT NIGHT').toUpperCase();
    this.rounds = Number(fight.rounds) || 3;
    this.round = Number(fight.round) || 0;
    this.hold = 0; this.energy = 0;
    // Restore may receive a completed fight during replay setup: don't reveal its result.
    this.base = this.round > 0 ? (this.round === this.rounds ? 'FINAL ROUND' : `ROUND ${this.round}`) : 'FIGHT NIGHT';
    this.draw(this.base, this.round === this.rounds ? '#f3c568' : '#b4c9e8');
  }
  draw(label, color) {
    const key = `${this.org}|${label}|${color}`;
    if (key === this.key) return;
    this.key = key; this.label = label;
    const g = this.canvas.getContext('2d');
    g.fillStyle = '#080e1b'; g.fillRect(0, 0, 1024, 128);
    g.fillStyle = color; g.fillRect(0, 0, 7, 128); g.fillRect(1017, 0, 7, 128);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '800 24px system-ui, sans-serif'; g.fillText(this.org.slice(0, 52), 512, 26, 930);
    g.font = '900 59px system-ui, sans-serif'; g.fillText(label, 512, 82, 940);
    // Fine scanlines give the physical panels an LED texture without animated flicker.
    g.fillStyle = 'rgba(0,0,0,0.16)'; for (let y = 0; y < 128; y += 4) g.fillRect(0, y, 1024, 1);
    this.texture.needsUpdate = true; this.trim.color.set(color);
  }
  event(e) {
    if (e.type === 'info' && e.side === 'n') {
      const match = String(e.text || '').match(/Round (\d+)/i);
      if (!match) return;
      this.round = Number(match[1]);
      this.base = this.round === this.rounds ? 'FINAL ROUND' : `ROUND ${this.round}`;
      this.hold = 0; this.draw(this.base, this.round === this.rounds ? '#f3c568' : '#b4c9e8');
    } else {
      const labels = { kd: 'KNOCKDOWN', subatt: 'SUBMISSION THREAT', finish: 'FIGHT FINISHED', round: 'BACK TO YOUR CORNER', decision: 'OFFICIAL DECISION' };
      if (!labels[e.type]) return;
      this.hold = e.type === 'round' || e.type === 'finish' || e.type === 'decision' ? Infinity : 3.2;
      this.energy = 1;
      this.draw(e.type === 'finish' && /judges score/i.test(e.text || '') ? 'OFFICIAL DECISION' : labels[e.type], e.type === 'finish' || e.type === 'decision' ? '#f3c568' : e.side === 'p' ? '#f28a85' : e.side === 'o' ? '#81b3ff' : '#b4c9e8');
    }
  }
  update(dt) {
    this.energy *= Math.exp(-Math.max(0, dt) * 1.8);
    this.trim.opacity = 0.25 + this.energy * 0.55;
    if (this.hold > 0 && Number.isFinite(this.hold)) {
      this.hold = Math.max(0, this.hold - Math.max(0, dt));
      if (!this.hold) this.draw(this.base, this.round === this.rounds ? '#f3c568' : '#b4c9e8');
    }
  }
}
