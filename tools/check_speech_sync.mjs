// Voice and subtitles stay together: the subtitle shows when the voice starts, an interrupted line's
// late "ended" doesn't skip the next one, and a slow line keeps its subtitle until the voice stops.
// Runs audio.js against a fake speech engine that starts late, ends interrupted lines late and reads
// slower than expected.  node tools/check_speech_sync.mjs
import assert from "node:assert/strict";

const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
globalThis.window = globalThis;
globalThis.addEventListener = () => {};

// the fake engine: one utterance at a time, queued like the real one
const clock = () => performance.now();
let current = null, queue = [], log = [];
const SLOW = { value: 1 };
function startNext() {
  if (current || !queue.length) return;
  current = queue.shift();
  const u = current;
  setTimeout(() => {
    if (current !== u) return;
    u.startedAt = clock();
    log.push(["start", u.text, clock()]);
    if (u.onstart) u.onstart();
    setTimeout(() => {
      if (current !== u) return;
      log.push(["end", u.text, clock()]);
      current = null;
      if (u.onend) u.onend();
      startNext();
    }, u.text.length * 6 * SLOW.value);
  }, 60); // a voice that takes a moment to start
}
globalThis.speechSynthesis = {
  get speaking() { return !!current || queue.length > 0; },
  speak(u) { queue.push(u); startNext(); },
  cancel() {
    const was = [current, ...queue].filter(Boolean);
    current = null;
    queue = [];
    // interrupted lines report back late
    for (const u of was) setTimeout(() => u.onerror && u.onerror({ error: "interrupted" }), 30);
  },
  getVoices: () => [],
};
globalThis.SpeechSynthesisUtterance = class { constructor(t) { this.text = t; this.rate = 1; this.pitch = 1; this.volume = 1; } };

const audio = await import("../web/audio.js");
audio.setOn(true);
const subs = [];
audio.onSay((t) => subs.push([t, clock()]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const until = async (fn, ms = 20000) => { const t0 = clock(); while (!fn()) { if (clock() - t0 > ms) throw new Error("timed out"); await sleep(10); } };

// 1. a sequence: each subtitle appears when its voice starts, and lines never overlap
audio.say([{ t: "Ladies and gentlemen!" }, { t: "This contest is scheduled for three rounds!" }, { t: "It's time!" }]);
await until(() => subs.length && subs[subs.length - 1][0] === null);
const starts = log.filter((e) => e[0] === "start");
assert.deepEqual(starts.map((e) => e[1]), ["Ladies and gentlemen!", "This contest is scheduled for three rounds!", "It's time!"], "every line is spoken, in order");
for (const [, text, at] of starts) {
  const sub = subs.find((s) => s[0] === text);
  assert.ok(sub, "each spoken line gets its subtitle: " + text);
  assert.ok(Math.abs(sub[1] - at) < 40, `the subtitle shows when the voice starts (${Math.round(sub[1] - at)} ms apart): ${text}`);
}

// 2. interrupting: the cut-off line's late "ended" must not skip a line of the new sequence
log = []; subs.length = 0;
audio.say([{ t: "First old line that runs a while" }, { t: "Second old line" }]);
await until(() => log.some((e) => e[0] === "start"));
audio.say([{ t: "New line one" }, { t: "New line two" }, { t: "New line three" }]);
await until(() => subs.length && subs[subs.length - 1][0] === null);
const spokenNew = log.filter((e) => e[0] === "start" && e[1].startsWith("New")).map((e) => e[1]);
assert.deepEqual(spokenNew, ["New line one", "New line two", "New line three"], "no line of the new sequence is skipped");
const shownAfter = subs.map((s) => s[0]).slice(subs.findIndex((s) => s[0] === "New line one"));
assert.deepEqual(shownAfter, ["New line one", "New line two", "New line three", null], "subtitles follow the new sequence exactly");
assert.ok(!shownAfter.includes("Second old line"), "the interrupted sequence never comes back");

// 3. a slow, dramatic line outlasts its time estimate: its subtitle stays until the voice stops
log = []; subs.length = 0;
SLOW.value = 40; // far slower than the game's estimate
const long = "We are LIVE... and we are READY!";
audio.say([{ t: long }, { t: "TIIIME!!!" }]);
await until(() => subs.length && subs[subs.length - 1][0] === null, 30000);
const endLong = log.find((e) => e[0] === "end" && e[1] === long)[2];
const subNext = subs.find((s) => s[0] === "TIIIME!!!")[1];
assert.ok(subNext >= endLong, "the next subtitle waits for the slow line to finish");
SLOW.value = 1;

console.log("PASS: subtitles appear when the voice starts, interrupted lines don't skip the next sequence, slow lines keep their subtitle until the voice stops");
process.exit(0);
