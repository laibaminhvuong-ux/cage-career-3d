// Original entrance loops, synthesized with the shared audio engine. No downloads.
export const EXTRA_WALKOUT_MUSIC = {
  street: 'Street kings · hip-hop',
  iron: 'Iron charge · heavy rock',
  midnight: 'Midnight menace · phonk',
  conquest: 'Conquest · cinematic orchestra',
  brazil: 'Rio rhythm · Brazilian percussion',
  machine: 'Machine mode · industrial techno',
};
export function createExtraWalkoutTracks({ kick, snare, hat, crash, bassNote, pad, pluck, lead }) {
  const track = (bpm, swing, play) => ({ bpm, swing, play(step, t, intensity, dest) { play(step % 16, Math.floor(step / 16) % 8, t, 60 / bpm / 4, dest); } });
  return {
    'walkout-street': track(92, .12, (s, bar, t, sd, d) => {
      const root = [36,36,32,34][bar % 4];
      if ([0,6,10].includes(s)) kick(t,.92,d);
      if (s===4 || s===12) snare(t,.7,d);
      if (s%2===0 || (bar%2 && s===15)) hat(t,s%4===0?.1:.055,d);
      if ([0,3,8,11].includes(s)) bassNote(t,root,sd*2.5,.32,d,true);
      if ([2,7,14].includes(s)) pluck(t,root+24+[0,7,3][[2,7,14].indexOf(s)],sd*1.6,.09,d,'triangle');
    }),
    'walkout-iron': track(156,0,(s,bar,t,sd,d)=>{
      const root=[38,38,34,36][bar%4];
      if ([0,2,6,8,10,14].includes(s)) kick(t,.86,d);
      if(s===4 || s===12)snare(t,.82,d);
      if(s%2===0)hat(t,.1,d,s===14);
      if(s===0 && bar%2===0)crash(t,.18,d);
      if(s%2===0){bassNote(t,root,sd*1.5,.26,d,true);pluck(t,root+12,sd*1.3,.085,d,'sawtooth');pluck(t,root+19,sd*1.3,.045,d,'sawtooth');}
      if([3,7,11,15].includes(s))lead(t,root+24+[0,3,7,5][Math.floor(s/4)],sd*1.1,.035,d);
    }),
    'walkout-midnight': track(140,.04,(s,bar,t,sd,d)=>{
      const root=[33,33,29,31][bar%4];
      if([0,7,10].includes(s))kick(t,.96,d);
      if(s===8)snare(t,.84,d);
      if(s%2===0 || (s>=13 && bar%2))hat(t,s%2?.04:.09,d);
      if([0,6,10,14].includes(s))bassNote(t,root+(s===14?12:0),sd*2.6,.31,d,true);
      if([0,3,6,8,11,14].includes(s))pluck(t,root+36+[0,7,3,0,10,7][[0,3,6,8,11,14].indexOf(s)],sd*.8,.065,d,'square');
    }),
    'walkout-conquest': track(108,0,(s,bar,t,sd,d)=>{
      const root=[38,34,41,36][bar%4];
      if([0,3,8,11].includes(s))kick(t,.88,d);
      if(s===12)snare(t,.7,d);
      if(s===0){pad(t,[root+12,root+19,root+24],sd*14,.075,d,1800);bassNote(t,root,sd*12,.26,d);if(bar%2===0)crash(t,.18,d);}
      if([0,4,6,8,12,14].includes(s))pluck(t,root+24+[0,7,12,7][Math.floor(s/4)],sd*1.5,.07,d,'sawtooth');
      if(s===0 || s===8)lead(t,root+36,sd*5,.04,d);
    }),
    'walkout-brazil': track(126,.06,(s,bar,t,sd,d)=>{
      const root=[43,43,39,41][bar%4];
      if([0,3,8,11].includes(s))kick(t,.75,d);
      if([2,6,10,14].includes(s))snare(t,s===6 || s===14?.5:.3,d);
      if(s%2===1)hat(t,.1,d,s===15);
      if([0,3,6,10,12,15].includes(s))pluck(t,root+24+(s%3)*5,sd*.65,.075,d,'triangle');
      if([0,6,8,14].includes(s))bassNote(t,root+(s===6?7:0),sd*1.7,.25,d);
    }),
    'walkout-machine': track(150,0,(s,bar,t,sd,d)=>{
      const root=[36,36,37,34][bar%4];
      if(s%4===0)kick(t,.94,d);
      if(s===4 || s===12)snare(t,.52,d);
      if(s%2===0)hat(t,s%4===2?.12:.06,d,s===14);
      if(s%4===2)bassNote(t,root,sd*1.6,.3,d,true);
      if([1,6,9,14].includes(s))pluck(t,root+24+(bar%2?1:0),sd*.6,.07,d,'sawtooth');
      if(s===15 && bar%2)lead(t,root+36,sd*.5,.035,d);
    }),
  };
}
