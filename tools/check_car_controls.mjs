// Car keys: W drives forward, S brakes and then reverses, A turns left, D turns right (as seen from
// the chase camera behind the car). Runs the real WorldView.update on an open road.  node tools/check_car_controls.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as THREE from '../web/vendor/three.module.min.js';
const sticky=new Proxy(function(){},{get:(_,k)=>k===Symbol.toPrimitive?()=>0:k==='then'?undefined:sticky,apply:()=>sticky});
const document={createElement:()=>({width:512,height:256,style:{},getContext:()=>sticky})};
class FighterStub {constructor(){this.root=new THREE.Group();return new Proxy(this,{get:(t,k)=>k in t?t[k]:()=>{}});}}
const context={THREE,document,console,performance,Fighter3D:FighterStub,buildHouse:()=>({}),LOOK_OPTIONS:{},parseLook:()=>({}),lookFromName:()=>({}),attack:()=>({frames:[]}),setInterval:()=>0,clearInterval(){},addEventListener(){}};
vm.createContext(context);
const source=fs.readFileSync(new URL('../web/world3d.js',import.meta.url),'utf8').replace(/^import .*$/gm,'').replace(/^export /gm,'');
vm.runInContext(source+';globalThis.qa={makeCar,WorldView};',context);
const {makeCar,WorldView}=context.qa;

function road(){
  const w=Object.create(WorldView.prototype);
  Object.assign(w,{keys:new Set(),pos:new THREE.Vector3(),heading:0,speedNow:0,steer:0,camYaw:Math.PI,camPitch:.4,
    driving:makeCar('sedan','#333'),player:new FighterStub(),activity:null,moveTarget:null,py:0,vy:0,
    camera:new THREE.PerspectiveCamera(),sun:{position:new THREE.Vector3(),target:{position:new THREE.Vector3()}},
    pets:[],traffic:[],npcs:[],family:[],garage:[],spots:[],doors:[],places:[],blocked:()=>false});
  return new Proxy(w,{get:(t,k)=>k in t?t[k]:undefined});
}
const run=(w,keys,secs)=>{w.keys=new Set(keys);for(let i=0;i<secs*60;i++){try{WorldView.prototype.update.call(w,1/60);}catch(e){if(!(e.name==='TypeError'))throw e; /* scenery past the car isn't built here */}}};
// "left" as the chase camera sees it: camera behind the car looking along +z has screen-left at +x
const leftOf=(h)=>Math.sin(h); // sideways component toward +x when the car started facing +z

let w=road();
run(w,['w'],3);
assert(w.speedNow>8,`W accelerates forward (${w.speedNow.toFixed(1)} m/s)`);
assert(w.pos.z>5&&Math.abs(w.pos.x)<.01,'W drives straight ahead');
const fast=w.speedNow;
run(w,['s'],.4);
assert(w.speedNow<fast-5&&w.speedNow>=0,'S brakes first while rolling forward');
run(w,['s'],3);
assert(w.speedNow<-3,`then S reverses (${w.speedNow.toFixed(1)} m/s)`);
run(w,[],4);
assert(Math.abs(w.speedNow)<.05,'letting go rolls to a stop');

w=road();run(w,['w','a'],2);
assert(leftOf(w.heading)>.3,'W+A turns left');
w=road();run(w,['w','d'],2);
assert(leftOf(w.heading)<-.3,'W+D turns right');
w=road();run(w,['a'],2);
assert(Math.abs(w.heading)<1e-6,'A alone does not spin a parked car');
w=road();run(w,['s','a'],2);
assert(w.speedNow<0&&leftOf(w.heading)<0,'reversing with A swings the nose the other way, like a real car');
console.log('PASS: W gas, S brake then reverse, A left, D right, no spinning on the spot, coasting stops');
