// Drive the real audio module's music scheduler with a deterministic audio clock.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createExtraWalkoutTracks} from '../web/walkout-music.js';
const code=fs.readFileSync(new URL('../web/audio.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'').replace(/export /g,'');
let now=0;const gestures={},events=[];
const parameter=()=>({value:1,setValueAtTime(...a){events.push(['set',...a]);},exponentialRampToValueAtTime(...a){events.push(['ramp',...a]);},setTargetAtTime(...a){events.push(['target',...a]);},cancelScheduledValues(){}});
const audio={get currentTime(){return now;},state:'running',createGain(){return {gain:parameter(),connect(){},disconnect(){}};},resume(){this.state='running';}};
const context={createExtraWalkoutTracks,console,localStorage:{getItem(){return null;},setItem(){}},window:{addEventListener(type,fn,options){gestures[type]={fn,options};}},setTimeout(){},clearTimeout(){},setInterval(){},clearInterval(){},performance:{now:()=>now*1000}};
vm.createContext(context);
// Keep one context so functions, private state, and test instrumentation share lexical bindings.
context.fakeAudio=audio;
vm.runInContext(code+`;ctx=fakeAudio;musicBus={};globalThis.qa={music, schedule, get:()=>current, setStyle:setMusicStyle, setOn, setVolume, unlock};`,context);
const q=context.qa, notes=[];
vm.runInContext(`for(const tr of Object.values(TRACKS)) tr.play=function(step,time,intensity,dest){globalThis.note(step,time,intensity,dest);};`,Object.assign(context,{note:(...a)=>notes.push(a)}));
q.music('camp');
assert(notes.length>0,'Track is primed immediately, without waiting for timer');
let current=q.get();assert(current.next>=now+1,'Enough audio is scheduled ahead of a UI update');
const first=current, gain=current.gain;
for(const duration of [.3,.75,.2,.55]){
 gestures.pointerdown.fn();
 assert(q.get().next>now+duration,'Gesture fills audio before expensive action');
 now+=duration;
 assert(q.get().next>now,'Simulated action finishes before queued music runs out');
 q.music('camp');q.schedule();
 assert.equal(q.get(),first,'Rerender keeps same track instance');
 assert.equal(q.get().gain,gain,'Rerender keeps original audio gain');
}
const steps=notes.map(n=>n[0]);assert(steps.every((step,i)=>!i||step>steps[i-1]),'No repeated/restarted beats after actions');
assert.equal(gestures.pointerdown.options.capture,true,'Audio is primed before action handlers');
const nextStep=q.get().step,expectedNext=q.get().next;now+=5;q.schedule();
assert(q.get().step>nextStep+10,'A long stall skips missed beats, preserving musical position');
assert(notes.at(-1)[1]>=now,'Recovery schedules future audio, not overdue bursts');
const skipped=Math.ceil((now+.05-expectedNext)/(60/140/4));assert(q.get().step>=nextStep+skipped);
q.setStyle('chill');assert.equal(q.get().name,'camp-chill');const chill=q.get();q.music('camp');assert.equal(q.get(),chill,'Chill selection also stays continuous');
q.music('walkout-machine');assert.equal(q.get().name,'walkout-machine');const walkout=q.get();q.music('walkout-machine',.6);assert.equal(q.get(),walkout);assert.equal(walkout.intensity,.6);
q.music(null);assert.equal(q.get(),null,'Explicit stop still works');
console.log('PASS: immediate priming, action headroom, same-track/beat continuity, long-stall phase recovery, capture gestures, chill selection, walkout transitions and explicit stop');
