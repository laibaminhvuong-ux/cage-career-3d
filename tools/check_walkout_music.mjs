import assert from 'node:assert/strict';
import { createExtraWalkoutTracks, EXTRA_WALKOUT_MUSIC } from '../web/walkout-music.js';
import { WALKOUT_OPTIONS, walkoutPreferences, saveWalkout, npcWalkout } from '../web/fightfeatures.js';
import { walkoutSettingsHtml } from '../web/fightfeatures-ui.js';
import { Game, packCareer, unpackCareer } from '../web/engine.js';
const signatures=new Set(),dest={};let calls=[];
const instruments=Object.fromEntries(['kick','snare','hat','crash','bassNote','pad','pluck','lead'].map(name=>[name,(...args)=>{
 assert(args.includes(dest),`${name} uses the track gain`);
 const flat=args.flat().filter(v=>typeof v==='number');assert(flat.every(Number.isFinite));
 assert(args[0]>=0,'Scheduled time is nonnegative');
 if(['bassNote','pad','pluck','lead'].includes(name)){assert(args[2]>0&&args[2]<10);assert(args[3]>0&&args[3]<=1);}
 else assert(args[1]>0&&args[1]<=1);
 calls.push([name,...args.filter(v=>v!==dest)]);
}]));
const tracks=createExtraWalkoutTracks(instruments);
assert.equal(Object.keys(tracks).length,6);assert.equal(Object.keys(WALKOUT_OPTIONS.music).length,9);
const game=new Game({kind:'mem',getProfile:async()=>null,setProfile(){},getCareer:async()=>null,setCareer(){},deleteCareer(){},getHallOfFame:async()=>[],addHallOfFame(){}});
await game.load();game.call('new',{name:'Music QA',weightClass:3,style:'Striker',country:'USA'});
for(const id of Object.keys(EXTRA_WALKOUT_MUSIC)){
 const track=tracks['walkout-'+id];assert(track&&track.bpm>=80&&track.bpm<=180);assert(track.swing>=0&&track.swing<=.2);
 calls=[];for(let s=0;s<128;s++)track.play(s,s*60/track.bpm/4,.8,dest);
 assert(calls.length>100,`${id} has a full 8-bar arrangement`);signatures.add(JSON.stringify(calls));
 const preference={music:id,lighting:'gold',entrance:'focused',celebration:'triumph'};
 saveWalkout(game.active(),preference);assert.equal(unpackCareer(packCareer(game.active())).walkoutPreferences.music,id);
 assert.equal(walkoutPreferences(preference).music,id);
 assert(walkoutSettingsHtml({features:{walkout:preference}}).includes(`value="${id}" selected`));
}
assert.equal(signatures.size,6,'All new arrangements differ');
for(const id of ['anthem','thunder','neon'])assert.equal(walkoutPreferences({music:id}).music,id,'Old selections remain valid');
assert.equal(walkoutPreferences({music:'missing'}).music,'anthem');
const npcMusic=new Set();for(let i=0;i<200;i++){const result=npcWalkout('Entrant '+i,'Striker');assert(WALKOUT_OPTIONS.music[result.music]);npcMusic.add(result.music);}
assert.equal(npcMusic.size,9,'NPC entrances can use every style');
console.log('PASS: 9 selectable styles; 6 unique playable 8-bar arrangements, valid scheduling/gain/durations, save/load and selected UI, old preferences and NPC variety');
