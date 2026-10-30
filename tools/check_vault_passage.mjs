// Build the actual mansion and walk its real collision map through the vault side doors.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as THREE from '../web/vendor/three.module.min.js';
import { buildHouse } from '../web/house3d.js';
import { LOOK_OPTIONS, parseLook, lookFromName } from '../web/fighter3d.js';
const sticky=new Proxy(function(){},{get:(_,k)=>k===Symbol.toPrimitive?()=>0:k==='then'?undefined:sticky,apply:()=>sticky});
const document={createElement:()=>({width:512,height:256,style:{},getContext:()=>sticky})};
globalThis.document=document;
class FighterStub {constructor(){this.root=new THREE.Group();return new Proxy(this,{get:(t,k)=>k in t?t[k]:()=>{}});}}
const context={THREE,document,console,performance,LOOK_OPTIONS,parseLook,lookFromName,Fighter3D:FighterStub,buildHouse,attack:()=>({frames:[]}),setInterval:()=>0,clearInterval(){}};
vm.createContext(context);
const source=fs.readFileSync(new URL('../web/world3d.js',import.meta.url),'utf8').replace(/^import .*$/gm,'').replace(/^export /gm,'');
vm.runInContext(source+';globalThis.qa={KIT,WorldView};',context);
const house=buildHouse(context.qa.KIT,{house:4});house.origin=new THREE.Vector3();
const world=Object.create(context.qa.WorldView.prototype);world.inside={I:house};
const vault=house.cells.find(c=>c.id==='vault'),sharks=house.cells.find(c=>c.id==='aquarium');
assert(vault&&sharks&&sharks.cx>vault.cx&&sharks.cz===vault.cz);
// Forward and return routes through both vault side doors, including either side of door centre.
for(const offset of [-.5,0,.5])for(const direction of [1,-1]){
 const left=vault.bounds[0]+.5,right=sharks.bounds[0]+2; // stop beyond the door, before lounge furniture
 for(let i=0;i<=160;i++){
  const x=direction===1?left+(right-left)*i/160:right-(right-left)*i/160;
  assert.equal(world.blocked(x,vault.cz+offset,.4),false,`Door passage blocked at x=${x.toFixed(2)} z=${(vault.cz+offset).toFixed(2)}`);
 }
}
const dive=house.spots.find(s=>s.kind==='dive');assert(dive&&dive.to);
assert(house.cellAt(dive.x,dive.z)===house.cellAt(dive.to.x,dive.to.z),'Dive remains in vault');
let reachable=false;
for(let x=-1;x<=4;x+=.2)for(let z=-1.8;z<=1.8;z+=.2){
 const px=vault.cx+x,pz=vault.cz+z;
 if(!world.blocked(px,pz,.4)&&Math.hypot(px-dive.x,pz-dive.z)<dive.dist-.1)reachable=true;
}
assert(reachable,'Gold dive prompt remains reachable from clear floor');
console.log('PASS: actual mansion collision map allows both directions through vault side doors at .4m fighter radius; full doorway approach stays clear; gold dive remains reachable and within vault');
