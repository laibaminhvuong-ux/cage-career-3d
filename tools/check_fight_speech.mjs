// Exercise the actual app lifecycle functions, without a renderer or real speech device.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync(new URL('../web/app.js',import.meta.url),'utf8');
function section(from,to){const a=source.indexOf(from),b=source.indexOf(to,a);assert(a>=0&&b>a);return source.slice(a,b);}
const events=[],screen={hidden:false,classList:{contains(){return screen.hidden;},add(name){if(name==='hidden')screen.hidden=true;},remove(){}}};
let reject=false;
class GameError extends Error {}
const context={GameError,console,busy:false,state:{fight:{round:0}},watching:null,playing:false,fightShown:3,headSnapshot:{},
 game:{call(path){events.push('api:'+path);if(reject)throw new GameError('Not ready');return {fight:path==='fight/close'?null:{round:1},ok:true};}},
 audio:{say(lines){assert.equal(lines.length,0);events.push('cancel-speech');},music(){throw Error('Speech cancellation must not stop music');}},
 presentation:{replaying:false,cancelAll(){events.push('cancel-presentation');}},
 $:()=>screen,toast(){},render(){events.push('render');},updateMusic(){events.push('update-music');},openModal(){events.push('modal');},
};
vm.createContext(context);
vm.runInContext(section('async function api(', '/** In-page')+section('async function stopWatching()', '// ------------------------------------------------------------------ fight screen')+section('function renderFightScreen()', 'function introHtml(')+section('function resetFightScreen()', '$("modal").addEventListener')+';globalThis.qa={api,stopWatching,renderFightScreen,resetFightScreen};',context);
for(const path of ['fight/manual','fight/round','fight/close']){
 events.length=0;await context.qa.api(path);
 assert.deepEqual(events,['api:'+path,'cancel-speech'],`${path} clears old speech on success`);
}
events.length=0;await context.qa.api('action',{type:'rest'});assert.deepEqual(events,['api:action'],'Ordinary career actions do not cancel speech');
reject=true;events.length=0;assert.equal(await context.qa.api('fight/manual'),null);assert.deepEqual(events,['api:fight/manual'],'Rejected starts keep introductions');reject=false;
context.state={fight:null};events.length=0;context.qa.renderFightScreen();
assert.deepEqual(events,['cancel-presentation','cancel-speech']);assert(screen.hidden);assert.equal(context.fightShown,0);assert.equal(context.headSnapshot,null);
events.length=0;context.qa.renderFightScreen();assert.deepEqual(events,[],'Unrelated renders outside a fight leave speech alone');
context.watching={back:null};events.length=0;await context.qa.stopWatching();assert.equal(context.watching,null);
assert(events.indexOf('cancel-speech')<events.indexOf('api:card/watch'),'Spectator exit cancels speech immediately');
events.length=0;context.qa.resetFightScreen();assert.deepEqual(events,['cancel-presentation','cancel-speech'],'Career switch/import cancels delayed intro callbacks and speech');
console.log('PASS: successful manual/plan starts, fight close, spectator exit and save switch/reset clear announcements; failed starts and normal actions preserve speech; music untouched');
