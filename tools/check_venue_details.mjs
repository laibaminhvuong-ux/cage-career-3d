import assert from 'node:assert/strict';
import * as THREE from '../web/vendor/three.module.min.js';
import { decorateVenue } from '../web/venue-details3d.js';
globalThis.document = { createElement: () => ({ getContext: () => ({ fillRect(){}, strokeRect(){}, fillText(){} }) }) };
for (const [id, w, d] of [['cafe',12,9],['gym',18,14],['cars',20,14],['pets',12,9]]) {
  let originalTicks = 0;
  const I = { group:new THREE.Group(), solids:[], tick(){originalTicks++;} };
  assert.equal(decorateVenue(id, I), I);
  const detail = I.venueDetails;
  const count = detail.children.length, blocks = I.solids.length;
  assert(count > 5, `${id} has concrete set dressing`);
  decorateVenue(id,I);assert.equal(detail.children.length,count);assert.equal(I.solids.length,blocks);assert.equal(I.group.children.length,1,'Repeated entry does not duplicate props');
  for (const b of I.solids) {
    assert(b[0] >= -w/2 && b[2] <= w/2 && b[1] >= -d/2 && b[3] <= d/2);
    assert(!(b[0]<.5 && b[2]>-.5 && b[1]<d/2 && b[3]>d/2-3.1),'Entrance corridor remains open');
  }
  let lights=0;const textureVersions=[];
  detail.traverse(o=>{if(o.isLight)lights++;if(o.material?.map)textureVersions.push([o.material.map,o.material.map.version]);});
  assert.equal(lights,0);
  for(let n=0;n<600;n++)I.tick(1/60,n/60);
  assert.equal(originalTicks,600,'Original room animation is preserved');
  for(const [texture,version]of textureVersions)assert.equal(texture.version,version,'No animated canvas uploads');
  I.group.updateMatrixWorld(true);
  detail.traverse(o=>{assert(o.position.toArray().every(Number.isFinite));assert(o.rotation.toArray().slice(0,3).every(Number.isFinite));});
  console.log(`PASS: ${id} decor, idempotent integration, bounded collisions/open exit, original ticks preserved, no added lights or per-frame uploads`);
}
for(const id of ['home','unknown']){const I={group:new THREE.Group(),solids:[],tick(){}};const fn=I.tick;decorateVenue(id,I);assert.equal(I.group.children.length,0);assert.equal(I.tick,fn);}
console.log('PASS: house and unsupported interiors untouched');
