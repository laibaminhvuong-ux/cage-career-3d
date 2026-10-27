// The game engine: a JavaScript port of the Java backend (Fighter, Staff, TrashTalk, Fight,
// Career and the API in Main), so the whole game runs in the browser with no server.
// Every action returns the same state object the Java API returned.

import { specialEventFor } from "./eventstyle.js";

export class GameError extends Error {}

// ------------------------------------------------------------------ random helpers

const rnd = () => Math.random();
const nextInt = (n) => Math.floor(Math.random() * n);
const nextBool = () => Math.random() < 0.5;
function gauss() {
  let u = 0;
  while (u === 0) u = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
}
const pickOf = (arr) => arr[nextInt(arr.length)];
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const commas = (n) => Math.round(n).toLocaleString("en-US");
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = nextInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function newId() {
  let s = "";
  for (let i = 0; i < 32; i++) s += nextInt(16).toString(16);
  return s;
}

// ------------------------------------------------------------------ fighters

export const STATS = ["striking", "power", "speed", "wrestling", "grappling", "cardio", "chin"];
export const STYLES = ["Striker", "Wrestler", "Jiu-Jitsu", "Balanced"];
// women's divisions
const FIRST_F = [
  "Valentina", "Amanda", "Rose", "Zhang", "Jessica", "Holly", "Ronda", "Joanna", "Carla", "Tatiana",
  "Yan", "Mackenzie", "Erin", "Marina", "Alexa", "Manon", "Kayla", "Julianna", "Raquel", "Irene",
  "Miesha", "Cris", "Liz", "Ketlen", "Tracy", "Polyana", "Viviane", "Aspen", "Mayra", "Linh",
  "Ayaka", "Seo-yeon", "Priya", "Amara", "Sofia", "Elena", "Nina", "Dara", "Leah", "Mei",
];
export const WOMEN_CLASSES = ["Strawweight", "Flyweight", "Bantamweight", "Featherweight"];

const FIRST = [
  "Marcus", "Diego", "Ivan", "Kenji", "Tariq", "Lucas", "Mateo", "Andre", "Sergei", "Malik",
  "Rafael", "Connor", "Jamal", "Tomasz", "Kai", "Darius", "Elijah", "Bruno", "Nikolai", "Omar",
  "Viktor", "Hiroshi", "Leon", "Caleb", "Arman", "Zane", "Felipe", "Yusuf", "Dmitri", "Jae-won",
  "Mason", "Tyrell", "Santiago", "Emeka", "Rustam", "Liam", "Paulo", "Gabe", "Anton", "Quinn",
];
const LAST = [
  "Silva", "Petrov", "Okafor", "Tanaka", "Reyes", "Kowalski", "Brennan", "Haddad", "Volkov", "Santos",
  "Mendes", "Novak", "Adeyemi", "Kim", "Duarte", "Morales", "Ivanov", "Walsh", "Nakamura", "Costa",
  "Abdullaev", "Fischer", "Okoye", "Lindqvist", "Moreau", "Gutierrez", "Tsarukyan", "Barros", "Hughes", "Nguyen",
  "Castillo", "Yamamoto", "Kruger", "Dvorak", "Ferreira", "O'Rourke", "Bakr", "Salazar", "Jensen", "Popescu",
];
const NICKS = [
  "The Hammer", "Iceman", "The Machine", "Bulldozer", "The Python", "Lights Out", "Storm", "The Reaper",
  "Mad Dog", "The Surgeon", "Thunder", "The Wolf", "Cyclone", "The Anaconda", "Dynamite", "Ghost",
  "The Butcher", "Smooth", "The Natural", "Venom", "Tank", "Kid Danger", "The Professor", "Wildfire",
];
export const COUNTRIES = [
  "USA", "Brazil", "Russia", "Mexico", "Ireland", "Japan", "Nigeria", "Poland", "Australia", "Canada",
  "Georgia", "Sweden", "England", "South Korea", "France", "Kazakhstan", "Netherlands", "Cuba", "Vietnam", "Philippines",
];

export class Fighter {
  constructor(name, nickname, style, country, age) {
    this.id = newId().slice(0, 12);
    this.name = name;
    this.nickname = nickname || "";
    this.style = style;
    this.country = country;
    this.age = age;
    this.stats = {};
    for (const s of STATS) this.stats[s] = 40;
    this.wins = this.losses = this.draws = this.koWins = this.subWins = this.decWins = 0;
    this.streak = 0;
    this.player = false;
    this.look = null;
  }
  get(stat) { return this.stats[stat] ?? 0; }
  set(stat, v) { this.stats[stat] = clamp(v, 1, 99); }
  add(stat, d) { this.set(stat, this.get(stat) + d); }
  overall() {
    let sum = 0;
    for (const s of STATS) sum += this.get(s);
    return Math.round(sum / STATS.length);
  }
  record() { return `${this.wins}-${this.losses}-${this.draws}`; }
  lastName() { return this.name.slice(this.name.lastIndexOf(" ") + 1); }
  displayName() {
    if (!this.nickname.trim()) return this.name;
    const i = this.name.lastIndexOf(" ");
    if (i < 0) return `${this.name} "${this.nickname}"`;
    return `${this.name.slice(0, i)} "${this.nickname}" ${this.name.slice(i + 1)}`;
  }
  /** result is W, L or D; method is KO, SUB or DEC. */
  recordResult(result, method) {
    if (result === "W") {
      this.wins++;
      this.streak = this.streak > 0 ? this.streak + 1 : 1;
      if (method === "KO") this.koWins++;
      else if (method === "SUB") this.subWins++;
      else this.decWins++;
    } else if (result === "L") {
      this.losses++;
      this.streak = this.streak < 0 ? this.streak - 1 : -1;
    } else {
      this.draws++;
      this.streak = 0;
    }
  }
  static bias(style, stat) {
    const t = {
      Striker: { striking: 12, power: 8, speed: 6, wrestling: -8, grappling: -10 },
      Wrestler: { wrestling: 14, cardio: 7, grappling: 3, power: 2, striking: -6, speed: -3 },
      "Jiu-Jitsu": { grappling: 16, wrestling: 3, cardio: 3, striking: -8, power: -6 },
    }[style];
    return (t && t[stat]) || 0;
  }
  /** Heavier divisions hit harder but move slower. */
  static weightAdj(wc, stat) {
    const w = wc - 3.5;
    if (stat === "power") return w * 1.6;
    if (stat === "speed") return -w * 1.6;
    if (stat === "chin") return w * 0.6;
    return 0;
  }
  static generate(target, wc, gender = "M") {
    const style = pickOf(STYLES);
    const name = pickOf(gender === "F" ? FIRST_F : FIRST) + " " + pickOf(LAST);
    const nick = rnd() < 0.6 ? pickOf(NICKS) : "";
    const f = new Fighter(name, nick, style, pickOf(COUNTRIES), 22 + nextInt(13));
    for (const s of STATS) f.set(s, target + Fighter.bias(style, s) + Fighter.weightAdj(wc, s) + gauss() * 4);
    f.wins = Math.max(0, Math.trunc((target - 30) / 3.5) + nextInt(4));
    f.losses = nextInt(2 + Math.floor(f.wins / 4));
    f.draws = rnd() < 0.15 ? 1 : 0;
    f.koWins = Math.floor(nextInt(f.wins + 1) / 2);
    f.subWins = Math.floor(nextInt(f.wins - f.koWins + 1) / 2);
    f.decWins = f.wins - f.koWins - f.subWins;
    f.streak = nextInt(4);
    f.gender = gender;
    return f;
  }
  toJson() {
    return {
      name: this.name, nickname: this.nickname, displayName: this.displayName(), style: this.style,
      country: this.country, age: this.age, record: this.record(), overall: this.overall(),
      koWins: this.koWins, subWins: this.subWins, decWins: this.decWins, streak: this.streak,
      stats: { ...this.stats }, look: this.look, gender: this.gender || "M",
    };
  }
}
Fighter.tag = "Fighter";

function pinFighter(f, target) {
  const vals = STATS.map((s) => Math.round(target + Fighter.bias(f.style, s) * 0.5));
  // nudge the stats until they average exactly the target
  let diff = target * STATS.length - vals.reduce((a, b) => a + b, 0);
  for (let i = 0; diff !== 0; i = (i + 1) % vals.length) {
    const d = Math.sign(diff);
    vals[i] += d;
    diff -= d;
  }
  STATS.forEach((s, i) => f.set(s, vals[i]));
}

/** What to call a fighter holding n belts at once. */
function beltWord(n) {
  return ["Champion", "Champion", "Champ-champ", "Triple champ", "Quadruple champ"][n] || n + "-belt champion";
}

// ------------------------------------------------------------------ staff

const ROLES = ["head", "striking", "wrestling", "bjj", "snc", "physio", "manager"];
const SALARY = [0, 100, 250, 600, 1500, 3500];
const STAFF_FIRST = ["Greg", "Rafa", "Mike", "Duke", "Javier", "Firas", "Trevor", "Eddie", "Mark", "Henri",
  "Ray", "Sam", "Bas", "Andre", "Lou", "Teo", "Frankie", "Coach Kim", "Pat", "Oleg"];
const STAFF_LAST = ["Jacobsen", "Cordova", "Winkler", "Rourke", "Mendez", "Haddadi", "Whitlock", "Bravo", "Delgado", "Dunmore",
  "Lombardi", "Kearney", "Tatum", "Mirkovic", "Sauer", "Benítez", "Reed", "Holmberg", "Okafor", "Varga"];
const ROLE_TITLES = { head: "Head Coach", striking: "Striking Coach", wrestling: "Wrestling Coach", bjj: "BJJ Coach",
  snc: "Strength & Conditioning", physio: "Physio", manager: "Manager" };

export class Staff {
  constructor(role, name, stars) {
    this.role = role;
    this.name = name;
    this.stars = stars;
  }
  salary() { return SALARY[this.stars]; }
  signingFee() { return this.salary() * 4; }
  fameRequired() { return (this.stars - 1) * 12; }
  static title(role) { return ROLE_TITLES[role] || role; }
  static perk(role, s) {
    switch (role) {
      case "head": return `+${3 * s}% all training, +${2 * s} stamina between rounds` + (s >= 3 ? ", scouts the opponent's game plan" : "");
      case "striking": return `+${10 * s}% striking, power & speed training`;
      case "wrestling": return `+${10 * s}% wrestling training`;
      case "bjj": return `+${10 * s}% grappling training`;
      case "snc": return `+${10 * s}% cardio & chin training, -${s} energy per session`;
      case "physio": return `-${15 * s}% injury risk, faster healing, +${3 * s} energy on rest weeks`;
      case "manager": return `+${5 * s}% purses, extra fame from media & trash talk`;
      default: return "";
    }
  }
  static generate() {
    const role = pickOf(ROLES);
    const r = rnd();
    const stars = r < 0.3 ? 1 : r < 0.6 ? 2 : r < 0.82 ? 3 : r < 0.94 ? 4 : 5;
    return new Staff(role, pickOf(STAFF_FIRST) + " " + pickOf(STAFF_LAST), stars);
  }
  toJson() {
    return { role: this.role, title: Staff.title(this.role), name: this.name, stars: this.stars, salary: this.salary(),
      fee: this.signingFee(), fameRequired: this.fameRequired(), perk: Staff.perk(this.role, this.stars) };
  }
}
Staff.tag = "Staff";

// ------------------------------------------------------------------ trash talk ({o} = target, {m} = player)

const TT = {
  RESPECT: [
    "{o} is a tough fighter and I respect the grind. But respect ends when the cage door closes.",
    "Nothing but respect for {o}. May the best fighter win.",
    "{o} has earned this. I'm just going to be better on the night.",
    "I've studied {o} for years. Great fighter. That's why beating them will mean something.",
  ],
  TRASH: [
    "{o} fights like they learned MMA from a video game. I'm going to expose that.",
    "I watched {o}'s highlight reel. Didn't take long.",
    "Tell {o} to enjoy the walkout. It's the best part of the night for them.",
    "{o}'s chin has been writing checks the rest of that body can't cash.",
    "I'm going to put {o} on a poster — the 'before' picture.",
    "{o} has a great ground game. That's where they'll be looking at the lights from.",
  ],
  PERSONAL: [
    "{o} is a fraud, the whole gym knows it, and I'm going to prove it in front of everyone.",
    "When I'm done, {o} will be teaching seminars on how to lose.",
    "{o}'s coach should be charged with negligence for letting them take this fight.",
    "I don't just want to beat {o}. I want {o} to retire.",
  ],
  REPLY_RESPECT: [
    "Respect to {m}. It's going to be a great fight.",
    "{m} is the real deal. I'm ready for war.",
    "Class act, that {m}. Still putting them down, though.",
  ],
  REPLY_CALM: [
    "{m} talks a lot for someone who hasn't fought anybody.",
    "I'll let my hands do the talking on fight night.",
    "Keep my name in your mouth, {m}. It's the closest you'll get to a win.",
    "Words don't win fights. See you in the cage.",
  ],
  REPLY_ANGRY: [
    "Say that to my face, {m}. Oh wait — you will. And then you'll be asleep.",
    "This is personal now. {m} is leaving on a stretcher.",
    "I'm going to make {m} regret every single word.",
    "I've never wanted to hurt someone this badly. {m} just made my whole camp easy.",
  ],
  CALLOUTS: [
    "{o} is hiding from me. Everyone knows I'm the better fighter.",
    "Still waiting on {o} to sign the contract. Scared?",
    "{o} got lucky last time and the whole world knows it.",
    "I'll fight {o} anywhere, any time. Their team keeps saying no.",
  ],
};
// ------------------------------------------------------------------ meeting other fighters ({o} = them, {m} = you)
const MEET = {
  RESPECT: [
    "Big respect, {o}. That last fight was a clinic.",
    "Saw your camp footage, {o}. You're working. Respect.",
    "{o}, you're one of the realest in this sport. Keep going.",
    "Congrats on the win, {o}. You earned every second of it.",
  ],
  WARM: [
    "Appreciate that, {o}. Means a lot coming from you.",
    "Respect back, {o}. Let's both keep winning.",
    "Thanks, brother. We should train sometime.",
    "Love that. The sport needs more of this.",
  ],
  COLD: [
    "Nice words. Doesn't change anything, {o}.",
    "Save it. I haven't forgotten what you said.",
    "Hm. We'll see if you mean that.",
  ],
  HANGOUT: [
    "Dinner's on me tonight, {o}. No cameras, no trash talk.",
    "Let's grab food and talk about anything but fighting.",
    "Want to catch the fights at my place this weekend, {o}?",
  ],
  HANGOUT_REPLY: [
    "Man, I needed a night off. Thanks, {o}.",
    "This was fun. Same time next month?",
    "Best steak I've had all camp. Don't tell my nutritionist.",
    "Real talk, {o}: you're good people.",
  ],
  TRAIN_REPLY: [
    "Watch my hips when I set up the {s}. That's the whole secret.",
    "You're picking this up fast. My {s} took me years.",
    "Again. Again. Now you've got it.",
    "Don't tell anyone I showed you that.",
  ],
  ACCEPT: [
    "You want it? You got it. Sign the contract, {o}.",
    "Finally someone with guts. I accept.",
    "Be careful what you ask for, {o}. Let's do it.",
    "Book it. I'll see you in the cage.",
  ],
};

// the weight cut: easy (no risk, no edge), standard, extreme (big edge, risky and draining)
const CUTS = {
  easy: { miss: 0, mods: { power: -1 }, drain: 0, text: "An easy cut: you'll feel fresh but give up a little size.", after: "You feel fresh." },
  standard: { miss: 0.04, mods: { power: 1, chin: 1 }, drain: 4, text: "A standard cut: a small size edge on fight night.", after: "You rehydrate well and walk in a little bigger." },
  extreme: { miss: 0.22, mods: { power: 3, chin: 2, cardio: -3 }, drain: 12, text: "An extreme cut: much bigger on the night, but it drains your tank and you might miss weight.", after: "You look drained on the scale, but you'll be the much bigger fighter." },
};

// fight-week media day: questions for you ({o} = your opponent, {m} = you), with three ways to answer
const MEDIA_Q = [
  { q: "How do you see this fight going?", respect: "{o} is tough. I expect a war and I've prepared for every second of it.",
    confident: "I see my hand getting raised. However it happens, it happens.", trash: "{o} goes to sleep early. Book your flights home tonight, folks." },
  { q: "{o} says you're overrated. Your response?", respect: "Everyone's entitled to an opinion. I'll show mine in the cage.",
    confident: "Overrated fighters don't get booked on cards like this. I earned it.", trash: "{o} has been rated by nobody, for nothing, ever." },
  { q: "What does a win on this card mean for you?", respect: "Everything. My team sacrificed a lot to get me here.",
    confident: "It puts me in the title picture. Simple as that.", trash: "It means {o} becomes a highlight on my reel." },
  { q: "Anything to say to {o} directly?", respect: "Good luck. Let's give the fans a show.",
    confident: "Enjoy the walk out. It's the best part of your night.", trash: "Look at me when I'm talking to you, {o}. Saturday you won't be able to." },
  { q: "Who's next after this one?", respect: "One fight at a time. {o} deserves my full focus.",
    confident: "Whoever the promotion puts in front of me. I'm fighting for the belt next.", trash: "{o} isn't even a fight to me. Get me a real name next." },
  { q: "There were rumors of a tough weight cut. How are you feeling?", respect: "Feeling great. Long camp, smart cut. Ready.",
    confident: "Never felt better. I'll make weight easy and I'll be the bigger fighter in there.", trash: "Worry about {o}. I've seen the cut — it's ugly." },
];
// what the rest of the card says at media day ({o} = their opponent, {m} = them)
const MEDIA_NPC = {
  respect: ["{o} is a great fighter. It's an honor to share the cage.", "Big respect to {o}'s team. Should be a fun one.", "Nothing personal. Just two people chasing a dream."],
  confident: ["I'm the better fighter everywhere. You'll see it Saturday.", "This is my moment. I'm not letting {o} take it.", "I've been finishing people all year. {o} is next."],
  trash: ["{o} is a tomato can with a good manager.", "I'm going to break {o}'s face and their heart in the same night.", "{o} talks a lot for someone who's about to get finished."],
};

const fill = (line, target, me) => line.replaceAll("{o}", target).replaceAll("{m}", me);

// ------------------------------------------------------------------ fight engine

const ROUND_SECONDS = 300;
const PLANS = {
  BALANCED: [1.0, 1.0], STRIKE: [1.2, 1.0], WRESTLE: [1.1, 1.3], SUBMIT: [1.0, 1.15], COUNTER: [0.6, 0.65], ALLOUT: [1.6, 1.9],
};
const aggression = (plan) => PLANS[plan][0];
const drainOf = (plan) => PLANS[plan][1];
const COMBOS = ["jab-cross", "stiff jab", "overhand right", "left hook", "body kick", "leg kick", "uppercut",
  "spinning back fist", "knee up the middle", "1-2-hook combination", "straight left", "calf kick",
  "teep to the body", "oblique kick", "switch kick to the body", "spinning back kick to the body", "superman punch", "front kick"];
const BIG_SHOTS = ["crushing overhand right", "perfectly timed left hook", "head kick", "flying knee", "short uppercut", "counter right hand"];
// the highlight-reel techniques: rarer, and the better the striker the more of them they throw
const FLASHY = ["spinning back kick", "spinning heel kick", "spinning back elbow", "superman punch", "front kick to the face",
  "question mark kick", "cartwheel kick", "tornado kick", "rolling thunder kick", "Showtime kick", "axe kick", "hook kick",
  "jumping switch kick", "jumping spinning back fist", "flying knee", "spinning back fist"];
// [what the log says, the technique]
const TAKEDOWNS = [["shoots a double-leg", "double-leg"], ["hits a single-leg", "single-leg"], ["secures a body lock", "body lock"],
  ["times a reactive takedown", "reactive takedown"], ["trips from the clinch", "trip"], ["hits a huge suplex", "suplex"],
  ["picks up and SLAMS", "slam"], ["launches a judo hip toss on", "judo throw"], ["snatches an ankle pick on", "ankle pick"]];
// where each submission is finished from: top subs move to their position first
const SUB_POS = {
  "rear-naked choke": "back", "arm-triangle choke": "side", "kimura": "side", "D'Arce choke": "headlock", "armbar": "mount",
  "guillotine choke": "headlock", "americana": "side",
};
const SUBS_TOP = Object.keys(SUB_POS);
const SUBS_BOTTOM = ["triangle choke", "armbar", "guillotine choke", "kimura", "heel hook", "omoplata"];
// hands-on fighting: what each choice does. kind: attack | takedown | move | dodge. acc = base
// accuracy, dmg = damage, ko = knockdown power, punch/kick/low = how it's defended, cost = stamina
const STAND_ACTIONS = {
  jab: { kind: "attack", punch: true, acc: 0.6, dmg: 2.5, ko: 0, cost: 1.5, names: ["jab", "stiff jab"] },
  cross: { kind: "attack", punch: true, acc: 0.48, dmg: 4.5, ko: 0.15, cost: 2.5, names: ["jab-cross", "straight right", "counter right hand"] },
  hook: { kind: "attack", punch: true, acc: 0.42, dmg: 6, ko: 0.3, cost: 3.5, names: ["left hook", "1-2-hook combination", "overhand right"] },
  uppercut: { kind: "attack", punch: true, acc: 0.4, dmg: 6, ko: 0.3, cost: 3.5, names: ["uppercut", "short uppercut"] },
  body: { kind: "attack", kick: true, acc: 0.5, dmg: 4.5, ko: 0, cost: 4, drain: 7, names: ["body kick", "switch kick to the body", "teep to the body"] },
  leg: { kind: "attack", kick: true, low: true, acc: 0.58, dmg: 3.5, ko: 0, cost: 3, slow: true, names: ["leg kick", "calf kick", "oblique kick"] },
  head: { kind: "attack", kick: true, acc: 0.3, dmg: 9, ko: 0.6, cost: 6, names: ["head kick"] },
  flashy: { kind: "attack", kick: true, acc: 0.24, dmg: 10, ko: 0.65, cost: 7.5, names: FLASHY },
  takedown: { kind: "takedown", cost: 6 },
  slip: { kind: "dodge", cost: 1 },
  block: { kind: "dodge", cost: 0.5 },
  check: { kind: "dodge", cost: 1 },
  sprawl: { kind: "dodge", cost: 1.5 },
  in: { kind: "move", cost: 1 },
  out: { kind: "move", cost: -3 },
  circle: { kind: "move", cost: -1 },
};
const TOP_ACTIONS = { gnp: { cost: 3 }, pass: { cost: 3 }, sub: { cost: 4 }, standup: { cost: 0 } };
const BOTTOM_ACTIONS = { sweep: { cost: 4 }, getup: { cost: 5 }, guardsub: { cost: 4 }, tieup: { cost: 1 } };

// ground positions, worst to best for the fighter on top
const POSITIONS = ["guard", "half", "side", "mount", "back"];
const POS_TEXT = {
  half: " passes into half guard.", side: " passes to side control.", mount: " climbs to full mount!", back: " takes the back!",
  headlock: " snaps down into a front headlock.",
};

// the third man in the cage
const REFEREES = ["Mario Delgado", "Keith 'The Sheriff' Morrow", "Dana Whitfield", "Hector Vargas", "Lena Kowalski", "Big Jim Callahan", "Yuki Tanaka", "Andre Baptiste"];

const an = (noun) => ("aeiou".includes(noun[0].toLowerCase()) ? "an " : "a ") + noun;
const fmt = (sec) => Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");

export class Corner {
  constructor(f, tag) {
    this.f = f;
    this.tag = tag;
    this.damage = 0;
    this.stamina = 100;
    this.bonus = 0;
    this.plan = "BALANCED";
    this.sig = this.td = this.kd = this.control = this.subAtt = 0;
    this.dealt = 0;
    this.totSig = this.totTd = this.totKd = 0;
    this.mods = {}; // fight-night adjustments: the weight cut, the camp
    this.cut = 0;   // 0 none, 1 a cut, 2 bad, 3 pouring
  }
  s(stat) { return Math.min(99, this.f.get(stat) + this.bonus + ((this.mods && this.mods[stat]) || 0) - (stat === "speed" ? (this.legHits || 0) * 1.5 : 0)); }
  /** Stamina factor: gassed fighters are less effective. */
  sf() { return 0.45 + this.stamina / 180; }
  n() { return this.f.lastName(); }
  newRound() {
    this.sig = this.td = this.kd = this.control = this.subAtt = 0;
    this.dealt = 0;
  }
  toJson() {
    return {
      name: this.f.displayName(), record: this.f.record(), overall: this.f.overall(), style: this.f.style,
      look: this.f.look, realName: this.f.name, nickname: this.f.nickname, country: this.f.country, gender: this.f.gender || "M", health: Math.max(0, 100 - this.damage), stamina: Math.max(0, this.stamina),
      sig: this.totSig, td: this.totTd, kd: this.totKd, plan: this.plan, cut: this.cut || 0,
    };
  }
}
Corner.tag = "Corner";

export class Fight {
  constructor(player, opponent, rounds, title, oppBonus, coachStars) {
    this.p = new Corner(player, "p");
    this.o = new Corner(opponent, "o");
    this.o.bonus = oppBonus;
    this.rounds = rounds;
    this.title = title;
    this.coachStars = coachStars;
    this.round = 0;
    this.finished = false;
    this.winner = this.methodType = this.method = this.endTime = null;
    this.endRound = 0;
    this.judges = [[0, 0], [0, 0], [0, 0]];
    this.logs = [];
    this.current = null;
    this.ground = false;
    this.topTag = null;
    this.pos = null; // ground position (see POSITIONS) while on the mat
    this.referee = pickOf(REFEREES);
    this.clock = 0;
    this.oppNext = this.aiPlan(1);
  }
  get top() { return this.topTag === "p" ? this.p : this.topTag === "o" ? this.o : null; }
  set top(c) { this.topTag = c ? c.tag : null; }

  playerDamage() { return this.p.damage; }

  simulateRound(plan, touch = true) {
    if (this.manual) {
      // hands-on round: let the game plan play out the rest of it
      this.manual = null;
      this.p.plan = PLANS[plan] ? plan : "BALANCED";
    } else {
      this.simulateOpening(touch);
      this.p.plan = plan;
    }
    while (!this.finished) {
      const step = 10 + nextInt(16);
      if (this.clock + step >= ROUND_SECONDS) {
        if (this.ground) this.top.control += ROUND_SECONDS - this.clock;
        this.clock = ROUND_SECONDS;
        break;
      }
      this.clock += step;
      if (this.ground) {
        this.top.control += step;
        this.groundExchange();
      } else {
        this.standExchange();
      }
    }
    if (!this.finished) this.closeRound();
  }

  // ---------------------------------------------------------------- hands-on mode
  // The player picks every exchange: move, attack or dodge (on the ground: strike, pass, submit,
  // escape...). The opponent picks too, and the two choices are resolved against each other like
  // reads in a real fight: a slip beats a punch, a check beats a kick, a sprawl beats a shot.

  /** Opens a round in hands-on mode: the bell, the glove touch, then it waits for the player's moves. */
  startManualRound(touch = true) {
    if (this.manual) throw new GameError("The round is already on.");
    this.simulateOpening(touch);
    this.manual = { turn: 0 };
    this.range = "out";
    this.edge = null; // a read that paid off: the next attack lands more often
  }

  /** The opening of a round, shared by both modes. */
  simulateOpening(touch) {
    if (this.finished) throw new GameError("The fight is over.");
    this.round++;
    let opening = "Round " + this.round + " — touch gloves and let's go!", gloves = this.round === this.rounds && this.rounds > 1 ? "both" : null;
    if (this.round === 1) {
      const theyRefuse = rnd() < 0.12 + (this.o.bonus > 0 ? 0.4 : 0);
      const p = this.p.n(), o = this.o.n();
      if (!touch) {
        gloves = "o";
        this.o.bonus += 1;
        opening = "Round 1 — " + p + " refuses to touch gloves! The crowd boos and " + o + " looks furious.";
      } else if (theyRefuse) {
        gloves = "p";
        this.p.stamina = Math.min(100, this.p.stamina + 3);
        opening = "Round 1 — " + o + " leaves " + p + " hanging! No glove touch. This is personal.";
      } else {
        gloves = "both";
        opening = "Round 1 — they touch gloves, a sign of respect, and we're underway!";
      }
      this.touch = gloves;
    }
    this.p.plan = "BALANCED";
    this.o.plan = this.oppNext;
    this.p.newRound();
    this.o.newRound();
    this.ground = false;
    this.top = null;
    this.pos = null;
    this.clock = 0;
    this.current = [];
    this.logs.push(this.current);
    this.ev("info", null, opening);
    if (gloves) this.current[this.current.length - 1].touch = gloves;
  }

  /** What the player can do right now. */
  manualOptions() {
    if (!this.manual || this.finished) return null;
    if (!this.ground) return { where: "stand", range: this.range, actions: Object.keys(STAND_ACTIONS) };
    return { where: this.topTag === "p" ? "top" : "bottom", pos: this.pos || "guard", actions: Object.keys(this.topTag === "p" ? TOP_ACTIONS : BOTTOM_ACTIONS) };
  }

  /** The opponent's choice, from their style, the range, the score and how they feel. */
  aiAction() {
    const o = this.o, st = o.f.style, low = o.stamina < 30, hurt = o.damage > 60;
    const w = {};
    const add = (k, v) => { w[k] = (w[k] || 0) + Math.max(0, v); };
    if (!this.ground) {
      // fight IQ: repeat yourself and they start reading it
      const hist = (this.manual && this.manual.hist) || [];
      const counts = {};
      for (const h of hist) counts[h] = (counts[h] || 0) + 1;
      const [habit, n] = Object.entries(counts).sort((x, y) => y[1] - x[1])[0] || [null, 0];
      if (habit && n >= 3) {
        const counter = { jab: "slip", cross: "slip", hook: "slip", uppercut: "block", leg: "check", body: "block", head: "block", flashy: "block", takedown: "sprawl" }[habit];
        add(counter, 2 + n * 1.2 + o.s("striking") / 50);
        this.manual.read ||= {};
        if (!this.manual.read[habit]) {
          this.manual.read[habit] = true;
          this.ev("info", o, o.n() + " is starting to read the " + (STAND_ACTIONS[habit].names ? habit === "leg" ? "leg kick" : habit === "body" ? "body kick" : habit === "head" ? "head kick" : habit : "takedown") + "! Mix it up!");
        }
      }
      const striker = st === "Striker" ? 1.6 : 1, grappler = st === "Wrestler" || st === "Jiu-Jitsu" ? 2 : 0.7;
      add("jab", 3 * striker); add("cross", 2.5 * striker); add("hook", 2 * striker); add("uppercut", this.range === "in" ? 1.5 : 0.4);
      add("leg", 1.6 * striker); add("body", 1.3 * striker); add("head", 0.7 * striker); add("flashy", 0.25 + (o.s("striking") + o.s("speed") - 120) / 80);
      add("takedown", 2 * grappler + (this.range === "in" ? 1 : 0));
      add("slip", 1.4); add("block", 1.4 + (hurt ? 2 : 0)); add("check", 0.8); add("sprawl", st === "Striker" ? 1.2 : 0.6);
      add("in", this.range === "out" ? 1.5 : 0.2); add("out", (this.range === "in" ? 1 : 0.3) + (low ? 2.5 : 0) + (hurt ? 1.5 : 0)); add("circle", 0.7);
      if (low) for (const k of ["head", "flashy", "takedown"]) w[k] *= 0.4;
    } else if (this.topTag === "o") {
      add("gnp", 3 + (st === "Wrestler" ? 2 : 0)); add("pass", this.position() < 3 ? 2.2 : 0.6);
      add("sub", st === "Jiu-Jitsu" ? 3 : 1); add("standup", st === "Striker" ? 1.5 : 0.3);
    } else {
      add("sweep", 2 + (st === "Jiu-Jitsu" ? 1.5 : 0)); add("getup", st === "Striker" ? 3.5 : 2);
      add("guardsub", st === "Jiu-Jitsu" ? 2.5 : 0.6); add("tieup", 1.5 + (hurt ? 2 : 0));
    }
    let r = rnd() * Object.values(w).reduce((a, b) => a + b, 0);
    for (const [k, v] of Object.entries(w)) if ((r -= v) <= 0) return k;
    return Object.keys(w)[0];
  }

  /**
   * One exchange in hands-on mode. Events go to the round's log. quick = real-time play: a beat
   * of a few seconds instead of half a minute, with damage, stamina and knockdown power scaled
   * down to match, so a round still adds up to about the same fight.
   */
  manualTurn(action, quick = false) {
    if (!this.manual || this.finished) throw new GameError("The round isn't on.");
    const opts = this.manualOptions();
    if (!opts.actions.includes(action)) throw new GameError("You can't do that right now.");
    this.manual.turn++;
    this.scale = quick ? 0.38 : 1;
    try {
      this.exchange(action, quick);
    } finally {
      this.scale = 1;
    }
  }

  exchange(action, quick) {
    const step = quick ? 7 + nextInt(5) : 18 + nextInt(12);
    if (this.ground) this.top.control += step;
    this.clock = Math.min(ROUND_SECONDS, this.clock + step);
    // in real time the opponent breathes too: some beats are just footwork and feints
    const idle = { stand: "circle", top: "pass", bottom: "tieup" }[!this.ground ? "stand" : this.topTag === "o" ? "top" : "bottom"];
    const mine = action;
    if (!this.ground && STAND_ACTIONS[mine] && (STAND_ACTIONS[mine].kind === "attack" || STAND_ACTIONS[mine].kind === "takedown")) {
      (this.manual.hist ||= []).push(mine);
      if (this.manual.hist.length > 8) this.manual.hist.shift();
    }
    const theirs = quick && rnd() < 0.42 ? idle : this.aiAction();
    if (!this.ground) this.standTurn(mine, theirs);
    else if (this.topTag === "p") this.groundTurn(this.p, mine, this.o, theirs);
    else this.groundTurn(this.o, theirs, this.p, mine);
    // a breather while moving around: stamina comes back a little every exchange
    for (const c of [this.p, this.o]) c.stamina = Math.min(100, c.stamina + (1.2 + c.s("cardio") / 60) * this.scale);
    if (!this.finished && this.clock >= ROUND_SECONDS) {
      this.manual = null;
      this.closeRound();
    }
  }

  standTurn(pa, oa) {
    const p = this.p, o = this.o;
    const acts = [[p, pa, o, oa], [o, oa, p, pa]];
    // movement first: it changes the range for everyone
    for (const [c, a] of acts) {
      if (a === "in") this.range = "in";
      if (a === "out") this.range = "out";
      const cost = STAND_ACTIONS[a].cost * (this.scale || 1);
      c.stamina = Math.max(0, Math.min(100, c.stamina - cost));
    }
    const moves = acts.filter(([, a]) => STAND_ACTIONS[a].kind === "move");
    const attacks = acts.filter(([, a]) => STAND_ACTIONS[a].kind === "attack" || STAND_ACTIONS[a].kind === "takedown");
    if (!attacks.length) {
      // nobody committed: feints, footwork, a read for whoever dodged into nothing
      const [c, a] = moves[0] || acts[0];
      if ((this.scale || 1) < 1 && rnd() < 0.55) {
        // real time: footwork mostly shows in the cage, not in the log
        this.ev("info", c, "");
        const e = this.current[this.current.length - 1];
        e.mv = a;
        e.quiet = true;
        return;
      }
      const text = a === "in" ? c.n() + " walks " + this.other(c).n() + " down and cuts off the cage."
        : a === "out" ? c.n() + " backs off to the outside and breathes."
        : a === "circle" ? c.n() + " circles away from the fence, feinting."
        : "Both fighters wait for the other to commit. Lots of feints.";
      this.ev("info", c, text);
      this.current[this.current.length - 1].mv = a;
      return;
    }
    // the faster fighter's attack goes first when both commit
    attacks.sort(([a], [b]) => (b.s("speed") + rnd() * 30) - (a.s("speed") + rnd() * 30));
    for (const [a, act, d, dact] of attacks) {
      if (this.finished || this.ground) break;
      this.resolveAttack(a, act, d, dact, attacks.length === 2);
    }
  }

  resolveAttack(a, act, d, dact, trading) {
    const A = STAND_ACTIONS[act], D = STAND_ACTIONS[dact];
    if (A.kind === "takedown") {
      let ch = 0.3 + (a.s("wrestling") - d.s("wrestling")) * 0.008 + (this.range === "in" ? 0.1 : -0.05);
      if (dact === "sprawl") ch -= 0.35;
      if (D.kind === "attack") ch += 0.12; // shot under a strike
      if (dact === "out") ch -= 0.12;
      if (this.edge === a.tag) ch += 0.12;
      this.edge = null;
      ch = clamp(ch * a.sf() + (d.stamina < 35 ? 0.1 : 0), 0.03, 0.85);
      if (rnd() < ch) {
        a.td++;
        a.totTd++;
        const [verb, tech] = pickOf(TAKEDOWNS);
        this.ground = true;
        this.top = a;
        this.pos = rnd() < 0.15 ? "side" : rnd() < 0.4 ? "half" : "guard";
        this.ev("td", a, /SLAMS|on$/.test(verb) ? a.n() + " " + verb + " " + d.n() + "!" : a.n() + " " + verb + " and takes " + d.n() + " down.", tech, 0);
      } else {
        this.ev("stuff", d, dact === "sprawl" ? d.n() + " reads it and sprawls hard on the shot! " + a.n() + " is spent." : d.n() + " stuffs the takedown from " + a.n() + ".");
        if (dact === "sprawl") {
          a.stamina = Math.max(0, a.stamina - 6);
          this.edge = d.tag;
        }
      }
      return;
    }
    let acc = A.acc + (a.s("striking") - d.s("striking")) * 0.004 + (a.s("speed") - d.s("speed")) * 0.002 + d.damage / 500 - (a.cut || 0) * 0.035;
    if (A.punch && this.range === "out") acc -= 0.1;
    if (A.kick && this.range === "in") acc -= 0.12;
    if (A.punch && this.range === "in") acc += 0.05;
    if (trading && D.kind === "attack") acc += 0.08; // both open
    if (this.edge === a.tag) acc += 0.15;
    this.edge = null;
    // the right read takes the shot away; the wrong one leaves you open
    const read = (dact === "slip" && A.punch) || (dact === "check" && A.kick && A.low) || (dact === "block" && !A.low) || (dact === "out" && A.punch);
    if (dact === "slip" || dact === "check" || dact === "sprawl") acc += read ? 0 : 0.1;
    if (read) acc -= dact === "block" ? 0.05 : 0.3;
    acc = clamp(acc * a.sf(), 0.05, 0.9);
    const name = A.names ? pickOf(A.names) : act;
    if (rnd() >= acc) {
      if (dact === "slip" && read) {
        this.edge = d.tag;
        this.ev("miss", a, d.n() + " slips the " + name + " — and " + a.n() + " is open for the counter!", name, 0);
      } else if (dact === "check" && read) {
        a.damage += 2;
        this.ev("miss", a, d.n() + " checks the " + name + "! That hurt " + a.n() + "'s shin.", name, 0);
      } else if (dact === "block") {
        this.ev("miss", a, d.n() + " eats the " + name + " on the gloves.", name, 0);
      } else {
        this.ev("miss", a, a.n() + " throws " + an(name) + " but misses.", name, 0);
      }
      return;
    }
    let dmg = A.dmg * (0.6 + a.s("power") / 70) * (0.75 + rnd() * 0.5);
    if (dact === "block" && !A.low) dmg *= 0.45;
    if (A.drain) d.stamina = Math.max(0, d.stamina - A.drain * (this.scale || 1));
    if (A.slow) d.legHits = (d.legHits || 0) + 1;
    const landed = A.hits || 1;
    a.sig += landed;
    a.totSig += landed;
    this.hit(a, d, dmg);
    const kdChance = (A.ko ? A.ko * (a.s("power") / 100) * (1.25 - d.s("chin") / 100) + d.damage / 300 - (dact === "block" ? 0.15 : 0) : 0) * (0.35 + 0.65 * (this.scale || 1));
    if (rnd() < kdChance) {
      a.kd++;
      a.totKd++;
      this.ev("kd", a, "DOWN GOES " + d.n().toUpperCase() + "! " + a.n() + " lands " + an(name) + " flush!", name, landed);
      if (rnd() < 0.25 + d.damage / 160 - d.s("chin") / 400) {
        this.finish(a, "KO", "KO (" + name + ")");
        return;
      }
      d.damage += 4;
      this.ev("info", d, d.n() + " survives and gets back up!");
    } else if (dmg > 9) {
      this.ev("big", a, a.n() + " lands " + an(name) + "! " + d.n() + " is hurt.", name, landed);
    } else {
      this.ev("strike", a, a.n() + " lands " + an(name) + (dact === "block" ? " through the guard." : "."), name, landed);
    }
    this.checkStoppage(a, d, "punches");
  }

  /** A ground exchange: t is on top with action ta, b underneath with ba. */
  groundTurn(t, ta, b, ba) {
    t.stamina = Math.max(0, t.stamina - (TOP_ACTIONS[ta] || {}).cost * (this.scale || 1));
    b.stamina = Math.max(0, b.stamina - (BOTTOM_ACTIONS[ba] || {}).cost * (this.scale || 1));
    const tie = ba === "tieup";
    // escapes first: if the bottom fighter gets out, the top fighter's plan is gone
    if (ba === "sweep" || ba === "getup") {
      let ch = 0.25 + (b.s(ba === "sweep" ? "grappling" : "wrestling") - t.s(ba === "sweep" ? "grappling" : "wrestling")) * 0.007 - this.position() * 0.04;
      if (ta === "gnp" || ta === "sub") ch += 0.08; // they gave up a little control to attack
      ch = clamp(ch * b.sf(), 0.04, 0.7);
      if (rnd() < ch) {
        if (ba === "sweep") {
          this.top = b;
          this.pos = rnd() < 0.3 ? "mount" : "guard";
          this.ev("sweep", b, b.n() + " hits a slick sweep and ends up " + (this.pos === "mount" ? "in full mount!" : "on top!"));
        } else {
          this.ground = false;
          this.top = null;
          this.pos = null;
          this.range = "in";
          this.ev("info", b, b.n() + " scrambles back to the feet.");
        }
        return;
      }
      this.ev("ground", t, t.n() + " shuts down the " + (ba === "sweep" ? "sweep" : "stand-up") + " and keeps " + b.n() + " pinned.");
    }
    if (ba === "guardsub" && ta !== "standup") {
      this.submission(b, t, true);
      if (this.finished || !this.ground) return;
    }
    if (ta === "gnp") {
      if (tie && rnd() < 0.55) this.ev("ground", b, b.n() + " ties up the arms — nothing gets through.");
      else this.groundAndPound(t, b);
    } else if (ta === "pass") {
      const ch = clamp(0.3 + (t.s("grappling") - b.s("grappling")) * 0.007 - (tie ? 0.05 : 0) - (ba === "guardsub" ? 0.1 : 0), 0.05, 0.7);
      if (this.position() < 4 && rnd() < ch * t.sf()) this.advance(t);
      else this.ev("ground", b, b.n() + " keeps the guard closed.");
    } else if (ta === "sub") {
      if (tie && rnd() < 0.4) this.ev("ground", b, b.n() + " hides the arms and defends the submission.");
      else this.submission(t, b, false);
    } else if (ta === "standup") {
      this.ground = false;
      this.top = null;
      this.pos = null;
      this.range = "out";
      this.ev("info", t, t.n() + " lets " + b.n() + " up and wants to strike.");
    }
  }

  aiPlan(forRound) {
    const base = { Striker: "STRIKE", Wrestler: "WRESTLE", "Jiu-Jitsu": "SUBMIT" }[this.o.f.style] || "BALANCED";
    const r = rnd();
    if (forRound === this.rounds && this.rounds > 1 && this.cardLead() > 0 && r < 0.6) return "ALLOUT";
    if (this.o.damage > 60 && r < 0.4) return this.o.f.style === "Striker" ? "COUNTER" : "WRESTLE";
    if (r < 0.2) return "BALANCED";
    return base;
  }
  cardLead() {
    let lead = 0;
    for (const j of this.judges) lead += j[0] - j[1];
    return lead;
  }
  other(c) { return c === this.p ? this.o : this.p; }
  drain(c) { return 3.5 * (1.6 - c.s("cardio") / 100) * drainOf(c.plan); }

  standExchange() {
    const p = this.p, o = this.o;
    const wp = aggression(p.plan) * (p.s("speed") + 50) * p.sf();
    const wo = aggression(o.plan) * (o.s("speed") + 50) * o.sf();
    const a = rnd() * (wp + wo) < wp ? p : o;
    const d = this.other(a);
    const tdChance = {
      STRIKE: 0.08, WRESTLE: 0.55, SUBMIT: 0.45, COUNTER: 0.15, ALLOUT: 0.05,
    }[a.plan] ?? clamp(0.22 + ((a.s("wrestling") - d.s("wrestling")) - (a.s("striking") - d.s("striking"))) / 150, 0.05, 0.6);
    if (rnd() < tdChance) this.takedown(a, d);
    else this.strike(a, d, false);
    if (!this.finished && !this.ground) {
      const fireBack = d.plan === "COUNTER" ? 0.5 : 0.2;
      if (rnd() < fireBack) this.strike(d, a, true);
    }
  }

  strike(a, d, counter) {
    const thrown = 2 + nextInt(4) + (a.plan === "ALLOUT" ? 2 : 0);
    let acc = 0.38 + (a.s("striking") - d.s("striking")) * 0.004 + (a.s("speed") - d.s("speed")) * 0.002;
    acc = acc * a.sf() + (counter ? 0.06 : 0) - (d.plan === "COUNTER" ? 0.05 : 0) + d.damage / 500 - (a.cut || 0) * 0.035;
    acc = clamp(acc, 0.1, 0.75);
    let landed = 0, dmg = 0, big = false;
    for (let i = 0; i < thrown; i++) {
      if (rnd() < acc) {
        landed++;
        dmg += (0.6 + a.s("power") / 60) * (0.5 + rnd()) * (a.plan === "ALLOUT" ? 1.25 : 1);
        if (!big && rnd() < 0.012 + a.s("power") / 3000) big = true;
      }
    }
    a.stamina = Math.max(0, a.stamina - this.drain(a));
    // how often a fighter goes for the spectacular stuff
    const flash = 0.05 + Math.max(0, a.s("striking") + a.s("speed") - 110) / 300;
    if (landed === 0) {
      if (rnd() < 0.35) {
        const combo = rnd() < flash * 2 ? pickOf(FLASHY) : pickOf(COMBOS);
        this.ev("miss", a, a.n() + " throws " + an(combo) + " but " + d.n() + " slips it.", combo, 0);
      }
      return;
    }
    a.sig += landed;
    a.totSig += landed;
    if (big) {
      dmg += 6 + a.s("power") / 8;
      this.hit(a, d, dmg);
      const shot = rnd() < 0.25 + flash ? pickOf(FLASHY) : pickOf(BIG_SHOTS);
      const kdChance = (a.s("power") / 100) * 0.55 * (1.25 - d.s("chin") / 100) + d.damage / 250;
      if (rnd() < kdChance) {
        a.kd++;
        a.totKd++;
        this.ev("kd", a, "DOWN GOES " + d.n().toUpperCase() + "! A " + shot + " from " + a.n() + " puts " + d.n() + " on the canvas!", shot, landed);
        const finishChance = 0.2 + d.damage / 180 - d.s("chin") / 400 + (a.plan === "ALLOUT" ? 0.1 : 0);
        if (rnd() < finishChance) {
          if (nextBool()) this.finish(a, "KO", "KO (" + shot + ")");
          else this.finish(a, "KO", "TKO (punches)");
          return;
        }
        d.damage += 4;
        this.ev("info", d, d.n() + " survives the follow-up and makes it back to the feet!");
      } else {
        this.ev("big", a, a.n() + " lands " + an(shot) + "! " + d.n() + " is rocked.", shot, landed);
      }
    } else {
      this.hit(a, d, dmg);
      const combo = rnd() < flash ? pickOf(FLASHY) : pickOf(COMBOS);
      let text;
      if (counter) text = a.n() + " fires back with " + an(combo) + ".";
      else if (landed >= 4) text = a.n() + " unloads a flurry — " + landed + " strikes land on " + d.n() + ".";
      else if (landed >= 2) text = a.n() + " connects with " + an(combo) + ".";
      else text = a.n() + " lands " + an(combo) + ".";
      this.ev("strike", a, text, combo, landed);
    }
    this.checkStoppage(a, d, "punches");
  }

  takedown(a, d) {
    let ch = 0.32 + (a.s("wrestling") - d.s("wrestling")) * 0.008;
    ch = clamp(ch * a.sf() + (d.stamina < 35 ? 0.1 : 0), 0.05, 0.85);
    a.stamina = Math.max(0, a.stamina - this.drain(a) * 1.4);
    if (rnd() < ch) {
      a.td++;
      a.totTd++;
      const [verb, tech] = pickOf(TAKEDOWNS);
      this.ground = true;
      this.top = a;
      const r = rnd();
      // big throws land in a dominant spot more often
      const good = tech === "slam" || tech === "suplex" || tech === "judo throw" ? 0.35 : 0;
      this.pos = r < 0.08 + good / 3 ? "mount" : r < 0.2 + good ? "side" : r < 0.42 + good ? "half" : "guard";
      const text = /SLAMS|on$/.test(verb) ? a.n() + " " + verb + " " + d.n() + "!" : a.n() + " " + verb + " and takes " + d.n() + " down.";
      this.ev("td", a, text, tech, 0);
    } else {
      this.ev("stuff", d, d.n() + " stuffs a takedown attempt from " + a.n() + ".");
    }
  }

  groundExchange() {
    const t = this.top, b = this.other(t);
    const bottomActs = (b.plan === "SUBMIT" ? 0.45 : 0.3) + (b.s("grappling") > t.s("grappling") + 10 ? 0.1 : 0);
    if (rnd() < bottomActs) {
      const goesForSub = (b.plan === "SUBMIT" || (b.s("grappling") > 65 && rnd() < 0.35)) && rnd() < 0.5;
      if (goesForSub) {
        this.submission(b, t, true);
      } else {
        let ch = 0.28 + (b.s("wrestling") - t.s("wrestling")) * 0.006 + (b.s("grappling") - t.s("grappling")) * 0.003;
        ch = clamp(ch * b.sf(), 0.05, 0.7);
        if (rnd() < ch) {
          if (b.s("grappling") > t.s("grappling") && rnd() < 0.3) {
            this.top = b;
            this.pos = rnd() < 0.3 ? "mount" : "guard";
            this.ev("sweep", b, b.n() + " hits a slick sweep and ends up " + (this.pos === "mount" ? "in full mount!" : "on top!"));
          } else if (this.position() >= 2 && rnd() < 0.5) {
            // from the bad spots, escaping means getting back to guard first
            this.pos = "guard";
            this.ev("ground", b, b.n() + " shrimps out and recovers guard.");
          } else {
            this.ground = false;
            this.top = null;
            this.pos = null;
            this.ev("info", b, b.n() + " scrambles back to the feet.");
          }
        } else if (rnd() < 0.4) {
          this.ev("ground", t, t.n() + " keeps " + b.n() + " pinned against the fence.");
        }
      }
    } else {
      const goesForSub = (t.plan === "SUBMIT" || (t.s("grappling") > 70 && rnd() < 0.25)) && rnd() < 0.6;
      const pass = 0.18 + (t.s("grappling") - b.s("grappling")) * 0.006;
      if (goesForSub) this.submission(t, b, false);
      else if (this.position() < 4 && rnd() < clamp(pass, 0.05, 0.45)) this.advance(t);
      else this.groundAndPound(t, b);
    }
    t.stamina = Math.max(0, t.stamina - this.drain(t) * 0.8);
    b.stamina = Math.max(0, b.stamina - this.drain(b) * 1.1);
  }

  /** How dominant the top fighter's position is, 0 (guard) to 4 (back). */
  position() {
    return Math.max(0, POSITIONS.indexOf(this.pos || "guard"));
  }

  advance(t) {
    const i = this.position();
    // from half guard or side control a top fighter can also jump straight to the back
    const next = i >= 1 && i < 3 && rnd() < 0.2 ? "back" : POSITIONS[i + 1];
    this.pos = next;
    this.ev("ground", t, t.n() + POS_TEXT[next]);
  }

  groundAndPound(t, b) {
    const thrown = 2 + nextInt(4);
    let acc = 0.45 + (t.s("wrestling") + t.s("grappling") - b.s("wrestling") - b.s("grappling")) * 0.002;
    acc = clamp(acc * t.sf(), 0.2, 0.75);
    let landed = 0, dmg = 0;
    for (let i = 0; i < thrown; i++) {
      if (rnd() < acc) {
        landed++;
        dmg += (0.4 + t.s("power") / 80) * (0.5 + rnd()) * [1, 1.05, 1.1, 1.3, 1.2][this.position()];
      }
    }
    if (landed === 0) {
      if (rnd() < 0.5) this.ev("ground", b, t.n() + " postures up but " + b.n() + " ties up the arms.");
      return;
    }
    t.sig += landed;
    t.totSig += landed;
    this.hit(t, b, dmg);
    const from = { mount: " from full mount", back: " from back control", side: " from side control" }[this.pos] || "";
    if (landed >= 3) this.ev("gnp", t, t.n() + " rains down ground and pound" + from + " — " + landed + " shots land!", "punches", landed);
    else this.ev("gnp", t, t.n() + " lands " + (landed === 1 ? "a short elbow" : "short punches") + " from top.", landed === 1 ? "elbow" : "punches", landed);
    this.checkStoppage(t, b, "ground and pound");
  }

  submission(a, d, fromBottom) {
    a.subAtt++;
    const sub = pickOf(fromBottom ? SUBS_BOTTOM : SUBS_TOP);
    if (!fromBottom && SUB_POS[sub] !== this.pos) {
      // get to where the hold is finished from
      this.pos = SUB_POS[sub];
      this.ev("ground", a, a.n() + (POS_TEXT[this.pos] || " moves to " + this.pos + "."));
    }
    if (fromBottom) {
      // bottom submissions come from guard (or a dive on the legs)
      this.pos = sub === "heel hook" ? "legs" : "guard";
    }
    let ch = 0.07 + (a.s("grappling") - d.s("grappling")) * 0.006 + d.damage / 400 + (d.stamina < 35 ? 0.07 : 0);
    if (fromBottom) ch *= 0.7;
    ch = clamp(ch * a.sf(), 0.01, 0.55);
    a.stamina = Math.max(0, a.stamina - 3);
    this.ev("subatt", a, a.n() + " locks up " + an(sub) + (fromBottom ? " from the bottom!" : "!"), sub, 0);
    if (rnd() < ch) {
      this.finish(a, "SUB", "Submission (" + sub + ")");
      return;
    }
    this.ev("info", d, d.n() + " defends and escapes the " + sub + ".");
    if (this.pos === "legs" || this.pos === "headlock") this.pos = "guard";
    else if (!fromBottom && rnd() < 0.5) this.pos = POSITIONS[Math.max(0, this.position() - 2)];
    if (!fromBottom && rnd() < 0.25) {
      this.ground = false;
      this.top = null;
      this.pos = null;
      this.ev("info", d, d.n() + " uses the scramble to get back up.");
    }
  }

  hit(a, d, dmg) {
    dmg *= this.scale || 1;
    d.damage += dmg;
    a.dealt += dmg;
    // hard shots open cuts, and cuts get worse
    if ((d.cut || 0) < 3 && rnd() < Math.max(0, (dmg - 3.5) / 55)) {
      d.cut = (d.cut || 0) + 1;
      const where = pickOf(["over the left eye", "over the right eye", "on the eyebrow", "on the bridge of the nose"]);
      this.cutNote = [d, d.cut === 1 ? "A cut opens " + where + " of " + d.n() + "! Blood is coming down."
        : d.cut === 2 ? "That cut on " + d.n() + " is getting worse. It's running into the eye!" : d.n() + " is bleeding badly. The doctor is watching closely."];
    }
  }

  checkStoppage(a, d, how) {
    if (this.finished) return;
    if (d.damage >= 100 || (d.damage > 85 && rnd() < 0.2)) {
      this.ev("info", a, "The referee jumps in to save " + d.n() + "!");
      this.finish(a, "KO", "TKO (" + how + ")");
    }
  }

  score(c) {
    return c.sig + c.dealt * 0.6 + c.td * 3 + c.control / 25 + c.kd * 10 + c.subAtt * 2;
  }

  closeRound() {
    const p = this.p, o = this.o;
    const ps = this.score(p), os = this.score(o);
    for (const j of this.judges) {
      const pj = ps * (1 + gauss() * 0.12) + gauss() * 1.5;
      const oj = os * (1 + gauss() * 0.12) + gauss() * 1.5;
      const diff = pj - oj;
      let pp = 10, op = 10;
      if (diff >= 0.6) op = (p.kd - o.kd >= 2 || (pj > oj * 3 && diff > 30)) ? 8 : 9;
      else if (diff <= -0.6) pp = (o.kd - p.kd >= 2 || (oj > pj * 3 && -diff > 30)) ? 8 : 9;
      j[0] += pp;
      j[1] += op;
    }
    this.ev("round", null, "End of round " + this.round + ". Sig. strikes " + p.sig + "–" + o.sig
      + ", takedowns " + p.td + "–" + o.td + ", control " + fmt(p.control) + "–" + fmt(o.control) + ".");
    for (const c of [p, o]) {
      c.stamina = Math.min(100, c.stamina + 18 + c.s("cardio") / 5 + (c === p ? this.coachStars * 2 : 0));
      c.damage = Math.max(0, c.damage - 4);
    }
    for (const c of [p, o]) {
      if ((c.cut || 0) >= 2 && rnd() < (c.cut >= 3 ? 0.35 : 0.12)) {
        this.ev("info", c, "The cageside doctor checks the cut on " + c.n() + "... and waves it off!");
        this.finish(this.other(c), "KO", "TKO (doctor stoppage, cut)");
        return;
      }
      if (c.damage > 85 && rnd() < 0.15) {
        this.ev("info", c, "The cageside doctor takes a look at " + c.n() + " and waves it off!");
        this.finish(this.other(c), "KO", "TKO (doctor stoppage)");
        return;
      }
    }
    if (this.round === this.rounds) this.decision();
    else this.oppNext = this.aiPlan(this.round + 1);
  }

  decision() {
    let pw = 0, ow = 0;
    for (const j of this.judges) {
      if (j[0] > j[1]) pw++;
      else if (j[1] > j[0]) ow++;
    }
    this.finished = true;
    this.methodType = "DEC";
    this.endRound = this.rounds;
    this.endTime = "5:00";
    if (pw >= 2) {
      this.winner = "player";
      this.method = pw === 3 ? "Unanimous Decision" : ow === 1 ? "Split Decision" : "Majority Decision";
    } else if (ow >= 2) {
      this.winner = "opponent";
      this.method = ow === 3 ? "Unanimous Decision" : pw === 1 ? "Split Decision" : "Majority Decision";
    } else {
      this.winner = "draw";
      this.method = pw === 0 && ow === 0 ? "Unanimous Draw" : pw === 1 && ow === 1 ? "Split Draw" : "Majority Draw";
    }
    const w = this.winner === "player" ? this.p : this.winner === "opponent" ? this.o : null;
    const verdict = w ? "Winner by " + this.method + ": " + w.f.displayName() + "!" : "This one is a draw!";
    this.ev("finish", w, "The judges score it " + this.cards().join(", ") + ". " + verdict);
  }

  finish(w, type, detail) {
    this.finished = true;
    this.winner = w === this.p ? "player" : "opponent";
    this.methodType = type;
    this.method = detail;
    this.endRound = this.round;
    this.endTime = fmt(this.clock);
    this.ev("finish", w, "IT'S ALL OVER! " + w.f.displayName() + " wins by " + detail + " at " + this.endTime + " of round " + this.round + "!");
  }

  cards() { return this.judges.map((j) => j[0] + "-" + j[1]); }

  /** Each event also records where the fight is afterwards ("g": tag of the fighter on top, "" standing)
   *  and the technique and strikes landed, so the 3D arena can act it out. */
  ev(type, side, text, move = null, landed = 0) {
    const e = { t: fmt(this.clock), type, side: side ? side.tag : "n", text, g: this.ground && this.topTag ? this.topTag : "" };
    if (this.ground && this.topTag) e.p = this.pos || "guard";
    // health and stamina right after this moment, so the bars can drop as the fight plays out
    e.hp = [Math.max(0, Math.round(100 - this.p.damage)), Math.max(0, Math.round(100 - this.o.damage))];
    e.st = [Math.max(0, Math.round(this.p.stamina)), Math.max(0, Math.round(this.o.stamina))];
    e.sg = [this.p.totSig, this.o.totSig];
    if (move != null) e.move = move;
    if (landed > 0) e.n = landed;
    if (this.cutNote) {
      // the cut shows up right after the shot that opened it
      const [c, text] = this.cutNote;
      this.cutNote = null;
      this.current.push(e);
      this.ev("info", c, text);
      this.current[this.current.length - 1].cut = c.cut;
      return;
    }
    if (this.manual && !this.ground) e.r = this.range; // hands-on: how far apart they stand
    this.current.push(e);
  }

  toJson() {
    return {
      round: this.round, rounds: this.rounds, title: this.title, finished: this.finished, winner: this.winner,
      methodType: this.methodType, method: this.method, endRound: this.endRound, endTime: this.endTime,
      player: this.p.toJson(), opponent: this.o.toJson(), logs: this.logs, belt: this.belt || null,
      referee: this.referee || "Mario Delgado", touch: this.touch || null, org: this.org || "GFC",
      specialEvent: this.specialEvent || null,
      cards: this.finished ? this.cards() : null,
      scout: this.coachStars >= 3 && !this.finished ? this.oppNext : null,
      oppFiredUp: this.o.bonus > 0,
      manual: this.manualOptions(), clock: this.clock,
    };
  }
}
Fight.tag = "Fight";

// ------------------------------------------------------------------ career

export const WEIGHT_CLASSES = ["Flyweight", "Bantamweight", "Featherweight", "Lightweight", "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"];
const GYM_NAMES = ["Garage Gym", "Local MMA Club", "Regional Fight Team", "Elite Camp", "World-Class Academy"];
const GYM_COST = [0, 3000, 15000, 50000, 150000];
const GYM_MULT = [1.0, 1.25, 1.5, 1.8, 2.1];
const GYM_FEE = [50, 150, 400, 1000, 2500];
const CONTENDER_WINS = 3, CONTENDER_OVR = 52, RANKED = 16, DIVISION_COOLDOWN = 26;
const GRUDGE_HEAT = 60, GRUDGE_GAP = 20;
// a champion who goes this long without defending a belt is stripped of it (a year and a half)
const STRIP_WEEKS = 78, STRIP_WARN = 66;

export class Offer {
  constructor(opp, weeks, purse, winBonus, rounds, title, contender) {
    this.opp = opp;
    this.weeks = weeks;
    this.purse = purse;
    this.winBonus = winBonus;
    this.rounds = rounds;
    this.title = title;
    this.contender = contender;
    /** 0 = none, 1 = trash talk, 2 = personal. */
    this.talkLevel = 0;
    /** Stat bonus the opponent brings into the fight after being provoked. */
    this.oppBonus = 0;
    /** "title", "interim", "unify", "eliminator", "main" or null. */
    this.kind = title ? "title" : null;
  }
}
Offer.tag = "Offer";

// ------------------------------------------------------------------ life outside the cage

export const HOUSES = [
  { id: "apartment", name: "Rented apartment", price: 0, upkeep: 150, joy: 0 },
  { id: "starter", name: "Starter home", price: 250000, upkeep: 450, joy: 6 },
  { id: "family", name: "Family house", price: 900000, upkeep: 1200, joy: 12 },
  { id: "villa", name: "Luxury villa with pool", price: 4500000, upkeep: 4500, joy: 20 },
  { id: "mansion", name: "Hillside mega-mansion", price: 15000000, upkeep: 12000, joy: 28 },
];
export const CARS = [
  { id: "hatch", name: "Used hatchback", price: 8000, joy: 2, fame: 0, color: "#8d99a6" },
  { id: "pickup", name: "Pickup truck", price: 45000, joy: 4, fame: 0, color: "#2b4c7e" },
  { id: "sedan", name: "Sports sedan", price: 70000, joy: 5, fame: 1, color: "#1d1d1f" },
  { id: "muscle", name: "Muscle car", price: 95000, joy: 7, fame: 2, color: "#c8102e" },
  { id: "suv", name: "Luxury SUV", price: 160000, joy: 7, fame: 2, color: "#eeeeee" },
  { id: "super", name: "Italian supercar", price: 380000, joy: 12, fame: 4, color: "#f4b942" },
  { id: "hyper", name: "Hypercar", price: 2800000, joy: 16, fame: 6, color: "#7c3aed" },
];
export const PETS = [
  { id: "dog", name: "Dog", price: 1500, upkeep: 40, joy: 8 },
  { id: "cat", name: "Cat", price: 800, upkeep: 25, joy: 6 },
  { id: "parrot", name: "Parrot", price: 2500, upkeep: 20, joy: 5 },
  { id: "tiger", name: "Tiger", price: 250000, upkeep: 2500, joy: 10 },
];
export const LIFESTYLES = [
  { name: "Frugal", cost: 100, joy: -4 },
  { name: "Comfortable", cost: 600, joy: 2 },
  { name: "Lavish", cost: 4000, joy: 8 },
  { name: "Baller", cost: 25000, joy: 14 },
];
// Promotions above the regional circuit. level = how much stronger their fighters are than the GFC's
// (negative = weaker), pay = purse multiplier, need = what it takes before they offer a contract.
export const PROMOTIONS = [
  { id: "cwe", name: "Cage Warriors Europe", short: "CWE", level: -10, pay: 0.4, fights: 4, need: { fame: 10, wins: 3, ovr: 50 }, about: "Europe's proving ground." },
  { id: "pfl", name: "Pro Fighters League", short: "PFL", level: -7, pay: 0.55, fights: 5, need: { fame: 20, wins: 5, ovr: 55 }, about: "Seasons, playoffs and big cheques." },
  { id: "valor", name: "Valor Fighting Championships", short: "Valor FC", level: -5, pay: 0.68, fights: 6, need: { fame: 30, wins: 7, ovr: 59 }, about: "The number two promotion in the world." },
  { id: "dfc", name: "Dragon Fighting Championship", short: "DFC", level: -4, pay: 0.75, fights: 6, need: { fame: 35, wins: 8, ovr: 61 }, about: "Asia's biggest stage." },
  { id: "gfc", name: "Global Fighting Championship", short: "GFC", level: 0, pay: 1, fights: 8, need: { fame: 55, wins: 11, ovr: 66 }, about: "The big show. The best in the world." },
];

// sponsors: min = how big a name you need to be before they call
export const SPONSORS = [
  { id: "apex", name: "Apex Fightwear", cat: "Fightwear", min: 5 },
  { id: "ironwhey", name: "IronWhey", cat: "Supplements", min: 8 },
  { id: "volt", name: "VOLT Energy", cat: "Energy drink", min: 10 },
  { id: "zen", name: "ZenFit App", cat: "Fitness app", min: 12 },
  { id: "fistline", name: "Fistline Gloves", cat: "Fight gear", min: 15 },
  { id: "burger", name: "Burger Barn", cat: "Food", min: 20 },
  { id: "bass", name: "BassHead Audio", cat: "Headphones", min: 25 },
  { id: "rush", name: "Rush Cola", cat: "Energy drink", min: 30 },
  { id: "nova", name: "Nova Mobile", cat: "Phones", min: 35 },
  { id: "ronin", name: "Ronin Apparel", cat: "Fightwear", min: 40 },
  { id: "luxmotors", name: "Luxury Motors", cat: "Cars", min: 45 },
  { id: "peak", name: "Peak Sportsbook", cat: "Betting", min: 50 },
  { id: "chronos", name: "Chronos Watches", cat: "Watches", min: 58 },
  { id: "aurum", name: "Aurum Private Bank", cat: "Finance", min: 70 },
];
const CLAUSES = {
  none: "No strings attached.",
  post: "Post on social media at least every 3 weeks.",
  image: "Morals clause: any scandal ends the deal.",
  finish: "Double bonus for finishes.",
};
const PARTNER_NAMES = ["Linh", "Sofia", "Mia", "Chloe", "Ava", "Hana", "Lucia", "Maya", "Isabella", "Emma", "Yuki", "Amara", "Daniel", "Lucas",
  "Mateo", "Noah", "Kai", "Leo", "Ethan", "Minh Anh", "Thao", "Bao", "Camila", "Zara"];
const KID_NAMES = ["Max", "Luna", "Leo", "Mila", "Kai", "Nova", "An", "Bella", "Rocky", "Aria", "Tony", "Zoe", "Bao", "Lily"];
const MALE_NAMES = new Set(["Daniel", "Lucas", "Mateo", "Noah", "Kai", "Leo", "Ethan", "Bao", "Max", "Rocky", "Tony", "An"]);
const JOBS = ["nurse", "photographer", "lawyer", "chef", "model", "teacher", "architect", "personal trainer", "DJ", "doctor", "designer", "pilot"];
const PET_NAMES = {
  dog: ["Rocky", "Bruno", "Kimbo", "Tyson", "Luna", "Bella", "Max", "Ali"], cat: ["Mochi", "Kitty", "Simba", "Nala", "Tofu"],
  parrot: ["Kiwi", "Rio", "Mango", "Pickles"], tiger: ["Rajah", "Shere Khan", "Stripes", "Saber"],
};
const DATES = ["Dinner by the river", "A night at the movies", "Rooftop cocktails", "Sunset on a yacht", "A private chef dinner", "A weekend in Paris"];
const POSTS = { training: ["Another day, another 2-a-day 💪", "Camp is going crazy right now 🔥", "Sharpening the tools ⚔️", "5am roadwork. Who's up? 🏃", "Nobody's outworking me."] };
const FAN_HANDLES = ["mmafan", "cagefreak", "kofactory", "subhunter", "fightnerd", "gfcdaily", "octagonking", "bjjlife", "hypeman"];
const FAN_COMMENTS = {
  training: ["Champ mentality 🔥", "Can't wait for the next fight!", "Built different 💪", "Bro is locked in", "Future champ!"],
  flex: ["Sheeeesh 🤑", "Money fights!", "Teach me your ways", "That's a dream ride", "W lifestyle"],
  family: ["So wholesome ❤️", "Family first 🙏", "Goals!!", "Beautiful family", "The real champion"],
  callout: ["OH IT'S ON 🍿", "Bad blood!", "Sign it!! 🔥", "He's scared lol", "Make it happen GFC!"],
  selfie: ["Looking sharp 😎", "Fight face ready", "The drip 🔥", "Main character energy", "Handsome AND dangerous"],
  qa: ["Best answer ever 😂", "Respect for replying to fans 🙏", "Do another Q&A!", "Humble king", "Real one"],
  sponsor: ["Ordering now 🛒", "Sellout 😂 jk love it", "Partner of champions", "Code pls!", "Brand looks clean"],
};
const SELFIES = ["Fight face 😤", "Post-workout glow ✨", "Fresh cut, fresh mindset 💈", "Weigh-in ready 💪", "Sunday vibes ☀️"];
const QA = ["Fan Q&A — asked my toughest opponent, my walkout song and my cheat meal 🍕 Answers in the comments!",
  "You asked, I answered: how I cut weight, my favorite combo and who I want next 👀", "Live Q&A done! Thanks for 1,000 questions 🙏"];
// texting and calling: what people say back
const PARTNER_LINES = ["Miss you ❤️ come home safe", "Proud of you always 🥰", "Dinner tonight? I'm cooking 🍝", "Don't forget to stretch lol",
  "Saw your clip, you looked amazing 😍", "Love you. Go get 'em 💪"];
const MOM_LINES = ["Are you eating enough? 🍲", "I watched your last fight with my eyes closed 😅", "Call your grandma, she misses you!",
  "Proud of you, my champion ❤️", "Wear a jacket, it's cold out", "Don't get hit in the face, okay?"];
const ME_TO_PARTNER = ["Thinking about you ❤️", "Camp is brutal but I'm good 💪", "Can't wait to see you tonight", "You're my lucky charm 🍀"];
const fmtMoney = (n) => "$" + Math.round(n).toLocaleString("en-US");
function randomLookString() {
  return [nextInt(6), nextInt(9), nextInt(6), 0, nextInt(8)].join(",");
}

const addOnce = (arr, v) => { if (!arr.includes(v)) arr.push(v); };
const removeItem = (arr, v) => { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); };

export class Career {
  constructor(name, nickname, weightClass, style, country, gender = "M") {
    if (name === undefined) return; // restored from a save
    this.gender = gender === "F" ? "F" : "M";
    this.weightClass = weightClass;
    this.me = new Fighter(name, nickname, style, country, 21);
    this.me.player = true;
    this.me.gender = this.gender;
    for (const s of STATS) this.me.set(s, 38 + Fighter.bias(style, s) + Fighter.weightAdj(this.wcAdj(), s) + gauss() * 3);
    this.week = 1;
    this.energy = 100;
    this.fame = this.injuryWeeks = this.gym = this.offersAge = 0;
    this.money = 1500;
    this.earnings = 0;
    this.gfc = this.retired = this.inducted = false;
    this.regionalWins = this.titleDefenses = this.titlesWon = 0;
    this.peakOverall = this.me.overall();
    this.lastDivisionChange = -999;
    this.lastTalkWeek = -1;
    this.divisionsWon = [];
    this.divisionsFought = [this.classes()[weightClass]];
    this.rankings = [];
    this.offers = [];
    this.scheduled = null;
    this.fight = null;
    this.news = [];
    this.history = [];
    this.lastResult = this.lastTalk = null;
    this.team = {};
    this.market = [];
    this.marketAge = 0;
    this.rival = null;
    this.rivalHeat = this.rivalWins = this.rivalLosses = this.weeksWithoutRival = 0;
    this.lastRivalFight = -999;
    this.rivalries = [];
    this.migrate();
    this.buildDivision();
    this.log(this.me.name + " turns pro out of a " + GYM_NAMES[0] + ". The journey begins.");
    const r = this.gen(this.me.overall() + 1);
    r.age = 21 + nextInt(2);
    r.wins = r.losses = r.draws = r.koWins = r.subWins = r.decWins = r.streak = 0;
    this.setRival(r, 30, "came up in the same amateur scene and has been telling everyone you're overrated");
    this.refreshMarket();
    this.generateOffers();
  }

  /** Sets up your division: a stored list (when you move back to a division) or a fresh one. */
  buildDivision(list = null) {
    this.rankings = list || [];
    const lv = this.org ? this.orgLevel() : 0;
    for (let i = this.rankings.length; i < RANKED; i++) this.rankings.push(this.gen(88 - i * 1.2 + lv));
    this.interim = null;
    this.champOut = this.champOutStart = 0;
    this.nextInLine = false;
    if (!list || !(this.lineage[this.division()] || []).length) this.recordChamp(this.rankings[0], "Reigning champion");
    this.ensureDivs();
  }

  // ---------------------------------------------------------------- the belt
  // Like the UFC: one undisputed champion per division (rank 0). An injured or idle champion
  // leads to an interim title and then a unification bout; a champion who won't defend within a
  // year is stripped; a champion can move up or down and hold two belts at once.

  // ---------------------------------------------------------------- life outside the cage
  // An open-world life: a home, cars, pets, a partner and kids, a social media following and a
  // lifestyle. It all feeds happiness, and a happy fighter trains better; followers bring fame and
  // sponsorship money. Life actions don't use up the week (each can be done once a week).

  life() {
    return this.lifeState;
  }

  lifeReady(key) {
    const L = this.lifeState;
    if (this.retired) throw new GameError("Your career is over.");
    if (this.fight) throw new GameError("Not now — you're in the middle of a fight.");
    if (L.done[key] === this.week) throw new GameError("You already did that this week.");
  }

  spend(amount, what) {
    if (this.money < amount) throw new GameError("You can't afford " + what + " (" + fmtMoney(amount) + ").");
    this.money -= amount;
  }

  lifeJoy(d) {
    const L = this.lifeState;
    L.happiness = clamp(L.happiness + d, 0, 100);
  }

  /** Training multiplier from happiness: 0.85 (miserable) to 1.15 (on top of the world). */
  moodMult() {
    return 0.85 + (this.lifeState ? this.lifeState.happiness : 50) * 0.003;
  }

  /** Where happiness drifts each week, from everything in the fighter's life. */
  happinessTarget() {
    const L = this.lifeState;
    let t = 42 + HOUSES[L.house].joy + LIFESTYLES[L.lifestyle].joy;
    const cars = L.cars.map((id) => CARS.find((c) => c.id === id)).filter(Boolean).sort((a, b) => b.joy - a.joy);
    cars.forEach((c, i) => (t += i === 0 ? c.joy : Math.min(3, c.joy / 3)));
    for (const p of L.pets) t += (PETS.find((x) => x.id === p.kind) || { joy: 0 }).joy;
    if (L.partner) t += L.partner.affection / 6 + (L.partner.stage === "married" ? 4 : 0);
    t += Math.min(4, L.kids.length) * 5;
    if (this.money < 0) t -= 25;
    if (this.injuryWeeks > 0) t -= 6;
    if (this.me.streak >= 2) t += 4;
    if (this.me.streak <= -2) t -= 6;
    return clamp(t, 0, 100);
  }

  lifeWeek() {
    const L = this.lifeState;
    // bills
    const bills = HOUSES[L.house].upkeep + LIFESTYLES[L.lifestyle].cost + L.pets.reduce((s, p) => s + ((PETS.find((x) => x.id === p.kind) || {}).upkeep || 0), 0)
      + L.kids.length * 300;
    this.money -= bills;
    // sponsors pay by audience
    const sponsor = Math.round(L.followers / 1000) * 20;
    this.money += sponsor;
    this.earnings += sponsor;
    L.lastBills = bills;
    L.lastSponsor = sponsor;
    // organic growth from fame
    L.followers = Math.max(0, Math.round(L.followers + this.fame * this.fame * 0.6 + nextInt(40) + (this.gfc ? 150 : 10) - L.followers * 0.002));
    if (L.followers >= 1000000 && !L.milestone1m) {
      L.milestone1m = true;
      this.log("1 MILLION followers! Brands are lining up.");
    }
    // happiness drifts toward what the fighter's life gives them
    L.happiness = Math.round(L.happiness + (this.happinessTarget() - L.happiness) * 0.25);
    // a partner who's ignored drifts away
    const p = L.partner;
    if (p) {
      p.affection = clamp(p.affection - (L.done.family === this.week - 1 || L.done.date === this.week - 1 ? 0 : 2) + (L.house >= 2 ? 0.5 : 0), 0, 100);
      if (p.affection <= 0) this.breakUp(p.stage === "married" ? "files for divorce" : "breaks up with you");
      else if (p.affection <= 15 && p.warned !== this.week && rnd() < 0.3) {
        p.warned = this.week;
        this.log(p.name + " feels neglected. Spend some time together.");
      }
    }
    // babies
    if (p && p.stage === "married" && L.tryingForKids && rnd() < 0.06 && L.kids.length < 6) {
      const kname = pickOf(KID_NAMES);
      const kid = { name: kname, gender: MALE_NAMES.has(kname) ? "M" : "F", born: this.week, look: randomLookString() };
      L.kids.push(kid);
      this.lifeJoy(15);
      this.log("Congratulations! " + kid.name + " is born. Welcome to the family!");
      this.post("family", "Welcome to the world, " + kid.name + " ❤️ Best win of my life.", 3);
    }
  }

  breakUp(how) {
    const L = this.lifeState;
    const p = L.partner;
    if (!p) return;
    if (p.stage === "married") {
      const cost = Math.max(0, Math.round(this.money * 0.3));
      this.money -= cost;
      this.log(p.name + " " + how + ". The divorce costs " + fmtMoney(cost) + ".");
    } else this.log(p.name + " " + how + ".");
    L.exes.push(p.name);
    L.partner = null;
    L.tryingForKids = false;
    this.lifeJoy(-20);
  }

  /** Adds a line to a phone conversation ("me", "them" or "call"). */
  thread(id, from, text) {
    const M = (this.lifeState.msgs ||= {});
    const T = (M[id] ||= []);
    T.push({ from, text, date: this.dateLabel() });
    while (T.length > 30) T.shift();
  }

  /** Adds a post to the feed; reach depends on fame, followers and what the post shows. */
  post(kind, text, boost = 1) {
    const L = this.lifeState;
    const reach = (L.followers * (0.02 + rnd() * 0.05) + this.fame * 120 + 50) * boost;
    const likes = Math.round(reach);
    const gained = Math.round(reach * (0.1 + rnd() * 0.25));
    L.followers += gained;
    const comments = [];
    for (let i = 0; i < 3; i++) comments.push({ user: pickOf(FAN_HANDLES) + nextInt(99), text: pickOf(FAN_COMMENTS[kind] || FAN_COMMENTS.training) });
    L.feed.unshift({ week: this.week, date: this.dateLabel(), kind, text, likes, gained, comments });
    while (L.feed.length > 30) L.feed.pop();
    return gained;
  }

  lifeAction(type, p = {}) {
    const L = this.lifeState;
    const me = this.me;
    switch (type) {
      case "post": {
        this.lifeReady("post");
        const kind = String(p.kind || "training");
        let text, boost = 1;
        if (kind === "training") text = pickOf(POSTS.training);
        else if (kind === "flex") {
          const car = L.cars.map((id) => CARS.find((c) => c.id === id)).filter(Boolean).sort((a, b) => b.price - a.price)[0];
          if (!car && L.house === 0) throw new GameError("Nothing to flex yet. Buy a car or a house first.");
          text = car ? "New whip. " + car.name + " 🏎️ Hard work pays." : "Home sweet " + HOUSES[L.house].name.toLowerCase() + " 🏠";
          boost = 1.5 + (car ? car.fame / 3 : 0) + L.house * 0.3;
          this.fame = clamp(this.fame + 1, 0, 100);
        } else if (kind === "family") {
          if (!L.partner && !L.kids.length && !L.pets.length) throw new GameError("No family pics yet — get a partner, a kid or a pet.");
          text = L.kids.length ? "Family day with my little champ " + pickOf(L.kids).name + " 👶" : L.partner ? "Date night with " + L.partner.name + " ❤️" : "Me and " + L.pets[0].name + " 🐾";
          boost = 1.3;
          this.lifeJoy(3);
        } else if (kind === "callout") {
          const target = this.scheduled ? this.scheduled.opp : this.rival || (this.gfc ? this.rankings[0] : null);
          if (!target) throw new GameError("Nobody to call out.");
          text = "@" + target.lastName().toLowerCase() + " you're next. Sign the contract. 🥊";
          boost = 2;
          this.fame = clamp(this.fame + 2, 0, 100);
          if (target === this.rival) this.rivalHeat = Math.min(100, this.rivalHeat + 8);
          if (this.scheduled && target === this.scheduled.opp) this.scheduled.oppBonus = Math.min(6, (this.scheduled.oppBonus || 0) + 1);
        } else if (kind === "selfie") {
          text = pickOf(SELFIES);
          boost = 0.8;
          this.lifeJoy(1);
        } else if (kind === "qa") {
          text = pickOf(QA);
          boost = 1.2;
          this.fame = clamp(this.fame + 1, 0, 100);
        } else if (kind === "sponsor") {
          const d = pickOf(L.sponsors || []);
          if (!d) throw new GameError("No sponsor to shout out yet.");
          text = "Proud to rep " + d.name + " 🙌 #ad";
          boost = 0.9;
          const bonus = Math.round(d.weekly * 1.5);
          this.money += bonus;
          this.earnings += bonus;
          L.done.post = this.week;
          const g = this.post("sponsor", text, boost);
          return "Posted! +" + g.toLocaleString("en-US") + " followers, and " + d.name + " pays a " + fmtMoney(bonus) + " bonus.";
        } else throw new GameError("Unknown post.");
        L.done.post = this.week;
        const gained = this.post(kind, text, boost);
        return "Posted! +" + gained.toLocaleString("en-US") + " followers.";
      }
      case "buy": {
        const kind = p.kind, id = p.id;
        if (kind === "house") {
          const i = HOUSES.findIndex((h) => h.id === id);
          if (i < 0) throw new GameError("Unknown house.");
          if (i === L.house) throw new GameError("You already live there.");
          const trade = Math.round(HOUSES[L.house].price * 0.85);
          const cost = HOUSES[i].price - trade;
          if (cost > 0) this.spend(cost, "the " + HOUSES[i].name.toLowerCase());
          else this.money -= cost;
          L.house = i;
          this.lifeJoy(i > 0 ? 10 : -5);
          this.log("Moves into a " + HOUSES[i].name.toLowerCase() + ".");
          return "Welcome home! You moved into the " + HOUSES[i].name.toLowerCase() + (trade ? " (old place sold for " + fmtMoney(trade) + ")" : "") + ".";
        }
        if (kind === "car") {
          const c = CARS.find((x) => x.id === id);
          if (!c) throw new GameError("Unknown car.");
          if (L.cars.includes(id)) throw new GameError("You already own one.");
          if (L.cars.length >= 6) throw new GameError("Your garage is full. Sell a car first.");
          this.spend(c.price, "the " + c.name);
          L.cars.push(id);
          L.driving = id;
          this.fame = clamp(this.fame + c.fame, 0, 100);
          this.lifeJoy(c.joy);
          this.log("Buys a " + c.name + ".");
          return "The keys to your " + c.name + " are yours!";
        }
        if (kind === "pet") {
          const pt = PETS.find((x) => x.id === id);
          if (!pt) throw new GameError("Unknown pet.");
          if (L.pets.length >= 4) throw new GameError("Four pets is plenty.");
          this.spend(pt.price, "a " + pt.name.toLowerCase());
          const name = pickOf(PET_NAMES[pt.id] || PET_NAMES.dog);
          L.pets.push({ kind: pt.id, name, since: this.week });
          this.lifeJoy(pt.joy);
          this.log("Adopts a " + pt.name.toLowerCase() + " named " + name + ".");
          return "Meet " + name + ", your new " + pt.name.toLowerCase() + "!";
        }
        throw new GameError("Unknown purchase.");
      }
      case "sell": {
        if (p.kind === "car") {
          const i = L.cars.indexOf(p.id);
          const c = CARS.find((x) => x.id === p.id);
          if (i < 0 || !c) throw new GameError("You don't own that car.");
          L.cars.splice(i, 1);
          if (L.driving === p.id) L.driving = L.cars[0] || null;
          const back = Math.round(c.price * 0.6);
          this.money += back;
          return "Sold the " + c.name + " for " + fmtMoney(back) + ".";
        }
        throw new GameError("You can only sell cars here.");
      }
      case "drive": {
        if (p.id && !L.cars.includes(p.id)) throw new GameError("You don't own that car.");
        L.driving = p.id || null;
        return null;
      }
      case "signSponsor": {
        const o = L.sponsorOffers.find((x) => x.id === p.id);
        if (!o) throw new GameError("That offer is gone.");
        if (L.sponsors.length >= 4) throw new GameError("Four sponsors is the max. Drop one first.");
        if (L.sponsors.some((d) => d.cat === o.cat)) throw new GameError("You already have a " + o.cat.toLowerCase() + " sponsor.");
        L.sponsorOffers = L.sponsorOffers.filter((x) => x !== o);
        L.sponsors.push({ ...o, weeksLeft: o.weeks, since: this.week });
        this.money += o.signing;
        this.earnings += o.signing;
        if ((SPONSORS.find((b) => b.id === o.id) || {}).min >= 40) this.fame = clamp(this.fame + 1, 0, 100);
        this.log("Signs a sponsorship deal with " + o.name + ".");
        this.post("flex", "Proud to join the " + o.name + " family 🤝 #ad", 1.2);
        return "Signed with " + o.name + "! " + fmtMoney(o.signing) + " signing bonus.";
      }
      case "dropSponsor": {
        const d = L.sponsors.find((x) => x.id === p.id);
        if (!d) throw new GameError("You don't have that sponsor.");
        this.dropSponsor(d, "Ends the deal with " + d.name + ".");
        return "You ended the deal with " + d.name + ".";
      }
      case "tattoo": {
        const region = ["tChest", "tBack", "tArmL", "tArmR", "tLegs"].indexOf(p.region);
        const design = Math.trunc(Number(p.design));
        if (region < 0 || !(design >= 0 && design <= 7)) throw new GameError("Pick a spot and a design.");
        const parts = String(me.look || "1,2,0,0,0").split(",");
        while (parts.length < 12) parts.push(parts.length === 5 || parts.length === 6 ? "1" : "0");
        if (Number(parts[7 + region]) === design) throw new GameError("You already have that one there.");
        const cost = design === 0 ? 2500 : 1500 + this.fame * 40;
        this.spend(cost, design === 0 ? "laser removal" : "the tattoo");
        parts[7 + region] = String(design);
        me.look = parts.join(",");
        if (design) this.lifeJoy(3);
        return design === 0 ? "Tattoo removed with a laser. Ouch." : "Fresh ink! 🖋️ Looking good.";
      }
      case "lifestyle": {
        const i = Math.trunc(Number(p.level));
        if (!(i >= 0 && i < LIFESTYLES.length)) throw new GameError("Unknown lifestyle.");
        L.lifestyle = i;
        return "Lifestyle: " + LIFESTYLES[i].name + " (" + fmtMoney(LIFESTYLES[i].cost) + "/week).";
      }
      case "meet": {
        this.lifeReady("meet");
        if (L.partner && L.partner.stage === "married") throw new GameError("You're married!");
        L.done.meet = this.week;
        const chance = 0.35 + this.fame / 250 + L.house * 0.04 + (L.lifestyle >= 2 ? 0.1 : 0);
        if (rnd() > chance) return "You chat with a few people, but nobody clicks this time.";
        const pname = pickOf(PARTNER_NAMES);
        L.candidate = { name: pname, gender: MALE_NAMES.has(pname) ? "M" : "F", age: me.age - 3 + nextInt(7), look: randomLookString(), job: pickOf(JOBS), week: this.week };
        return "You hit it off with " + L.candidate.name + ", a " + L.candidate.age + "-year-old " + L.candidate.job + "!";
      }
      case "ask": {
        const c = L.candidate;
        if (!c || c.week !== this.week) throw new GameError("Meet someone first.");
        L.candidate = null;
        if (L.partner) {
          // cheating rarely ends well
          this.log("Caught flirting! " + L.partner.name + " finds out.");
          L.partner.affection = Math.max(0, L.partner.affection - 35);
          if (L.partner.affection <= 0) this.breakUp("leaves you");
          return "That was a bad idea. " + (L.partner ? L.partner.name + " is furious." : "You're single again.");
        }
        L.partner = { name: c.name, gender: c.gender || "F", age: c.age, look: c.look, job: c.job, stage: "dating", affection: 35, since: this.week };
        this.lifeJoy(8);
        this.log("Starts dating " + c.name + ".");
        return "You're dating " + c.name + "! ❤️";
      }
      case "date": {
        this.lifeReady("date");
        const P = L.partner;
        if (!P) throw new GameError("You're single. Meet someone at the café or the club.");
        const cost = [80, 400, 2500, 15000][L.lifestyle];
        this.spend(cost, "a date");
        L.done.date = this.week;
        const gain = 8 + nextInt(8) + L.lifestyle * 2;
        P.affection = clamp(P.affection + gain, 0, 100);
        this.lifeJoy(5);
        return pickOf(DATES) + " ❤️ (+" + gain + " affection)";
      }
      case "gift": {
        this.lifeReady("gift");
        const P = L.partner;
        if (!P) throw new GameError("No one to give a gift to.");
        const cost = Math.max(500, Math.round(this.money * 0.02));
        this.spend(cost, "a gift");
        L.done.gift = this.week;
        P.affection = clamp(P.affection + 10, 0, 100);
        return "You surprise " + P.name + " with a gift worth " + fmtMoney(cost) + ". 🎁";
      }
      case "propose": {
        const P = L.partner;
        if (!P || P.stage !== "dating") throw new GameError("You need to be dating someone.");
        this.lifeReady("propose");
        L.done.propose = this.week;
        const ring = Math.max(5000, Math.round(this.money * 0.05));
        this.spend(ring, "a ring");
        if (rnd() < (P.affection - 30) / 50) {
          P.stage = "engaged";
          this.lifeJoy(15);
          this.log("Engaged to " + P.name + "! 💍");
          this.post("family", P.name + " said YES 💍 Forever starts now.", 2.5);
          return P.name + " said YES! 💍";
        }
        P.affection = Math.max(0, P.affection - 10);
        return P.name + " says it's too soon. (Build more affection first.)";
      }
      case "wedding": {
        const P = L.partner;
        if (!P || P.stage !== "engaged") throw new GameError("Get engaged first.");
        const cost = [20000, 60000, 250000, 1500000][L.lifestyle];
        this.spend(cost, "the wedding");
        P.stage = "married";
        P.affection = clamp(P.affection + 20, 0, 100);
        this.lifeJoy(20);
        this.fame = clamp(this.fame + 3, 0, 100);
        this.log("Marries " + P.name + "! 💒");
        this.post("family", "Just married 💒 Partners for life.", 3);
        return "You married " + P.name + "! 💒";
      }
      case "kids": {
        const P = L.partner;
        if (!P || P.stage !== "married") throw new GameError("Get married first.");
        L.tryingForKids = !L.tryingForKids;
        return L.tryingForKids ? "You and " + P.name + " are trying for a baby. 👶" : "Not right now.";
      }
      case "text": {
        // a text to your partner: once a week
        this.lifeReady("text");
        if (!L.partner) throw new GameError("There's nobody to text yet.");
        L.done.text = this.week;
        L.partner.affection = clamp(L.partner.affection + 4, 0, 100);
        this.lifeJoy(1);
        this.thread("partner", "me", String(p.msg || pickOf(ME_TO_PARTNER)).slice(0, 120));
        this.thread("partner", "them", pickOf(PARTNER_LINES));
        return null;
      }
      case "call": {
        const who = String(p.who || "");
        if (who === "mom") {
          this.lifeReady("callmom");
          L.done.callmom = this.week;
          this.lifeJoy(3);
          this.thread("mom", "call", "📞 Call · " + (3 + nextInt(25)) + " min");
          this.thread("mom", "them", pickOf(MOM_LINES));
          return "You call your mom. You feel better already. (+3 happiness)";
        }
        if (who === "partner") {
          this.lifeReady("callpartner");
          if (!L.partner) throw new GameError("There's nobody to call.");
          L.done.callpartner = this.week;
          L.partner.affection = clamp(L.partner.affection + 6, 0, 100);
          this.lifeJoy(2);
          this.thread("partner", "call", "📞 Call · " + (5 + nextInt(40)) + " min");
          return "A long call with " + L.partner.name + ". (+6 affection)";
        }
        if (who === "coach") {
          // the coach's read on your next opponent
          const o = this.scheduled && this.scheduled.opp;
          let tip;
          if (!o) tip = "No fight booked. Stay sharp, keep training and I'll find you one.";
          else {
            const weak = [...STATS].sort((a, b) => o.get(a) - o.get(b))[0];
            const strong = [...STATS].sort((a, b) => o.get(b) - o.get(a))[0];
            const plan = { striking: "make it a fistfight", power: "make them carry your weight", speed: "pressure them, cut off the cage",
              wrestling: "take them down", grappling: "drag it to the mat", cardio: "push the pace and drown them late", chin: "hunt the head" }[weak];
            tip = o.lastName() + " is " + ({ Striker: "a striker", Wrestler: "a wrestler", "Jiu-Jitsu": "a jiu-jitsu ace" }[o.style] || "an all-rounder") + ". Their " + strong + " is dangerous, but their " + weak + " is the weak spot — " + plan + ".";
          }
          this.thread("coach", "call", "📞 Call · " + (2 + nextInt(10)) + " min");
          this.thread("coach", "them", tip);
          return null;
        }
        throw new GameError("Who are you calling?");
      }
      case "family": {
        this.lifeReady("family");
        if (!L.partner && !L.kids.length && !L.pets.length) throw new GameError("There's nobody at home yet.");
        L.done.family = this.week;
        if (L.partner) L.partner.affection = clamp(L.partner.affection + 8, 0, 100);
        this.lifeJoy(6 + L.kids.length * 2 + L.pets.length);
        this.energy = Math.min(100, this.energy + 10);
        return "Quality time at home. You feel recharged. (+10 energy)";
      }
      case "party": {
        this.lifeReady("party");
        L.done.party = this.week;
        this.spend([200, 1000, 8000, 40000][L.lifestyle], "the bottle service");
        this.lifeJoy(8);
        this.energy = Math.max(0, this.energy - 20);
        this.fame = clamp(this.fame + 1, 0, 100);
        if (rnd() < 0.12) {
          this.fame = clamp(this.fame - 4, 0, 100);
          L.followers = Math.round(L.followers * 0.97);
          if (L.partner) L.partner.affection = Math.max(0, L.partner.affection - 15);
          this.log("Scandal! Blurry club photos of " + me.lastName() + " go viral.");
          for (const d of L.sponsors.filter((x) => x.clause === "image")) this.dropSponsor(d, d.name + " invokes the morals clause and ends your deal.");
          return "Big night… but the photos leaked. Scandal! (−fame" + (L.partner ? ", " + L.partner.name + " is upset" : "") + ")";
        }
        return "What a night! VIP section, the whole city knows your name. (−20 energy)";
      }
      default:
        throw new GameError("Unknown life action.");
    }
  }

  // ---------------------------------------------------------------- sponsors

  /** How marketable the fighter is: fame, audience, promotion, belts and wins. */
  marketability() {
    const L = this.lifeState;
    return this.fame + Math.log10(L.followers + 1) * 6 + (this.gfc ? 15 : 0) + (this.isChamp() ? 25 : 0) + Object.keys(this.heldBelts || {}).length * 10 + this.me.wins * 0.5;
  }

  sponsorOffers() {
    const L = this.lifeState;
    L.sponsorAge = 0;
    const score = this.marketability();
    const taken = new Set(L.sponsors.map((d) => d.cat));
    const pool = shuffle(SPONSORS.filter((b) => b.min <= score && !taken.has(b.cat) && !L.sponsors.some((d) => d.id === b.id)));
    L.sponsorOffers = pool.slice(0, 3).map((b) => {
      const weekly = Math.round((150 * Math.pow(1 + score / 12, 1.7) * (0.8 + b.min / 80) * (0.85 + rnd() * 0.3)) / 50) * 50;
      return {
        id: b.id, name: b.name, cat: b.cat, weekly, signing: weekly * 4, winBonus: weekly * 2, weeks: rnd() < 0.5 ? 26 : 52,
        clause: pickOf(["none", "post", "image", "finish"]),
      };
    });
  }

  sponsorWeek() {
    const L = this.lifeState;
    for (const d of [...L.sponsors]) {
      this.money += d.weekly;
      this.earnings += d.weekly;
      d.weeksLeft--;
      if (d.clause === "post") {
        const quiet = this.week - (L.done.post || d.since);
        if (quiet === 3) this.log(d.name + " wants to see some posts. Get on your phone!");
        if (quiet >= 5) {
          this.dropSponsor(d, d.name + " drops you: you went quiet on social media.");
          continue;
        }
      }
      if (d.weeksLeft <= 0) this.dropSponsor(d, d.name + " deal is up. Check your offers to sign a new one.");
    }
    if (++L.sponsorAge >= 8 || (!L.sponsorOffers.length && L.sponsorAge >= 3)) this.sponsorOffers();
  }

  dropSponsor(d, why) {
    const L = this.lifeState;
    L.sponsors = L.sponsors.filter((x) => x !== d);
    if (why) this.log(why);
  }

  /** After a fight: win bonuses, and big brands nervous about a knockout loss. */
  sponsorsAfterFight(won, lost, method) {
    const L = this.lifeState;
    let paid = 0;
    for (const d of [...L.sponsors]) {
      if (won) paid += d.winBonus * (d.clause === "finish" && method !== "DEC" ? 2 : 1);
      if (lost && method === "KO" && (SPONSORS.find((b) => b.id === d.id) || {}).min >= 40 && rnd() < 0.25) {
        this.dropSponsor(d, d.name + " ends the deal after the knockout loss.");
      }
    }
    this.money += paid;
    this.earnings += paid;
    return paid;
  }

  /** Change how the fighter looks and presents mid-career. */
  editFighter(p) {
    const me = this.me;
    if (p.look !== undefined) {
      if (!/^\d{1,2}(,\d{1,2}){4,15}$/.test(String(p.look))) throw new GameError("That look isn't valid.");
      me.look = String(p.look);
    }
    if (p.nickname !== undefined) {
      const nick = String(p.nickname).trim();
      if (nick.length > 24) throw new GameError("Nickname is too long.");
      me.nickname = nick;
    }
    if (p.style !== undefined) {
      if (!STYLES.includes(p.style)) throw new GameError("Pick a fighting style.");
      me.style = p.style;
    }
    return "Fighter updated: " + me.displayName() + ".";
  }

  lifeJson() {
    const L = this.lifeState;
    return {
      happiness: L.happiness, target: Math.round(this.happinessTarget()), followers: L.followers, moodMult: +this.moodMult().toFixed(2),
      house: L.house, cars: [...L.cars], driving: L.driving, pets: L.pets.map((p) => ({ ...p })),
      partner: L.partner ? { ...L.partner } : null, candidate: L.candidate && L.candidate.week === this.week ? { ...L.candidate } : null,
      kids: L.kids.map((k) => ({ ...k, age: Math.floor((this.week - k.born) / 52) })), tryingForKids: L.tryingForKids,
      lifestyle: L.lifestyle, feed: L.feed.slice(0, 15), done: Object.fromEntries(Object.entries(L.done).map(([k, w]) => [k, w === this.week])),
      lastBills: L.lastBills || 0, lastSponsor: L.lastSponsor || 0, sponsorRate: Math.round(L.followers / 1000) * 20,
      msgs: JSON.parse(JSON.stringify(L.msgs || {})), postCount: L.feed.length,
      sponsors: L.sponsors.map((d) => ({ ...d, clauseText: CLAUSES[d.clause] })),
      sponsorOffers: L.sponsorOffers.map((d) => ({ ...d, clauseText: CLAUSES[d.clause] })),
      sponsorRefresh: Math.max(0, 8 - L.sponsorAge), marketability: Math.round(this.marketability()),
      catalog: { houses: HOUSES, cars: CARS, pets: PETS, lifestyles: LIFESTYLES },
      weddingCost: [20000, 60000, 250000, 1500000][L.lifestyle], dateCost: [80, 400, 2500, 15000][L.lifestyle],
    };
  }

  // ---------------------------------------------------------------- promotions

  promo() {
    return PROMOTIONS.find((p) => p.id === this.org) || null;
  }

  /** Short name of where the fighter competes. */
  orgShort() {
    const p = this.promo();
    return p ? p.short : "Iron Cage";
  }

  orgLevel() {
    const p = this.promo();
    return p ? p.level : 0;
  }

  meetsNeed(p) {
    return this.fame >= p.need.fame && this.me.wins >= p.need.wins && this.me.overall() >= p.need.ovr;
  }

  /** Promotions that have seen enough make contract offers (and the current one offers to re-sign). */
  promoWeek() {
    if (this.retired) return;
    if (++this.promoAge < 4) return;
    this.promoAge = 0;
    const cur = this.promo();
    for (const p of PROMOTIONS) {
      if (this.promoOffers.some((o) => o.org === p.id)) continue;
      const current = p.id === this.org;
      if (current && this.contractFights > 0) continue;
      // under contract, only a bigger promotion comes calling (you'd have to buy yourself out)
      if (!current && cur && this.contractFights > 0 && p.level <= cur.level) continue;
      if (!current && !this.meetsNeed(p)) continue;
      const star = this.fame / 100 + this.me.wins / 40;
      const bonus = Math.round((20000 + 180000 * p.pay * (0.5 + star)) / 1000) * 1000;
      this.promoOffers.push({ org: p.id, name: p.name, short: p.short, fights: p.fights, bonus, pay: p.pay, week: this.week });
      this.log((current ? p.short + " wants to re-sign you: " : p.name + " offers you a contract: ") + p.fights + " fights, " + fmtMoney(bonus) + " to sign.");
    }
    // old offers lapse
    this.promoOffers = this.promoOffers.filter((o) => this.week - o.week < 16);
  }

  signPromotion(id) {
    const o = this.promoOffers.find((x) => x.org === id);
    if (!o) throw new GameError("There's no offer from them right now.");
    if (this.scheduled || this.fight) throw new GameError("Finish your booked fight first.");
    const p = PROMOTIONS.find((x) => x.id === id);
    const cur = this.promo();
    let buyout = 0;
    if (cur && cur.id !== id && this.contractFights > 0) {
      buyout = Math.round(o.bonus * 0.4);
      if (this.money < buyout) throw new GameError("Buying out your " + cur.short + " contract costs " + fmtMoney(buyout) + ".");
      this.money -= buyout;
    }
    this.promoOffers = this.promoOffers.filter((x) => x !== o);
    this.money += o.bonus;
    this.earnings += o.bonus;
    this.contractFights = o.fights;
    this.contract = { ppv: (o.terms && o.terms.ppv) || 0, titleClause: !!(o.terms && o.terms.titleClause) };
    if (cur && cur.id === id) {
      this.promoOffers = [];
      this.log("Re-signs with " + p.short + " for " + o.fights + " more fights.");
      return "Re-signed with " + p.short + "! " + fmtMoney(o.bonus) + " bonus, " + o.fights + " fights.";
    }
    // a new promotion: the other offers are off the table, new rankings, and its belts aren't yours
    this.promoOffers = [];
    const champ = this.isChamp() || Object.keys(this.heldBelts).length;
    if (champ) this.log("Vacates the " + this.orgShort() + " title" + (Object.keys(this.heldBelts).length ? "s" : "") + " to sign with " + p.short + ".");
    this.heldBelts = {};
    const wasRival = this.rival;
    // the promotion you leave keeps its fighters (you're gone from its rankings); the one you join
    // is the same world you've been watching from outside
    this.ensureOrgs();
    const old = this.orgKey();
    this.orgDivs[old] = { ...this.otherDivs, [this.division()]: this.rankings.filter((f) => f !== this.me && f !== wasRival) };
    this.orgLineage[old] = this.lineage;
    const stored = this.orgDivs[id] || {};
    delete this.orgDivs[id];
    this.org = id;
    this.gfc = true;
    this.lineage = this.orgLineage[id] || {};
    delete this.orgLineage[id];
    this.otherDivs = { ...stored };
    delete this.otherDivs[this.division()];
    this.buildDivision(stored[this.division()] || null);
    // your name gets you a ranking right away
    const spot = Math.max(6, Math.min(RANKED - 1, 15 - Math.floor(this.fame / 10) - (cur ? Math.round((cur.level - p.level) / -3) : 0)));
    this.rankings.splice(spot, 0, this.me);
    this.trim();
    if (wasRival && !this.rankings.includes(wasRival) && rnd() < 0.5) {
      this.rankings.splice(Math.min(13, this.rankings.length), 0, wasRival);
      this.trim();
    }
    this.lastTitleWeek = this.week;
    this.offers = [];
    this.generateOffers();
    this.log("SIGNS WITH " + p.name.toUpperCase() + "!" + (buyout ? " (bought out the old contract for " + fmtMoney(buyout) + ")" : ""));
    return "Welcome to " + p.name + "! " + fmtMoney(o.bonus) + " signing bonus. You start at #" + this.rankings.indexOf(this.me) + ".";
  }

  /** Older saves predate the belt system and life outside the cage. */
  migrate() {
    if (!this.lifeState) {
      this.lifeState = {
        happiness: 60, followers: 200 + (this.fame || 0) * (this.fame || 0) * 20, house: 0, cars: [], driving: null, pets: [], partner: null,
        candidate: null, kids: [], tryingForKids: false, lifestyle: 1, feed: [], done: {}, exes: [],
      };
    }
    if (!this.lifeState.sponsors) {
      this.lifeState.sponsors = [];
      this.lifeState.sponsorOffers = [];
      this.lifeState.sponsorAge = 99;
    }
    if (!this.heldBelts) this.heldBelts = {};
    if (this.org === undefined) {
      this.org = this.gfc ? "gfc" : null;
      this.contractFights = this.gfc ? 6 : 0;
      this.promoOffers = [];
      this.promoAge = 0;
    }
    if (!this.lineage) this.lineage = {};
    if (this.interim === undefined) this.interim = null;
    if (this.champOut === undefined) this.champOut = this.champOutStart = 0;
    if (this.nextInLine === undefined) this.nextInLine = false;
    if (!this.lastTitleWeek) this.lastTitleWeek = this.week || 1;
    if (!this.rel) this.rel = {};
    if (!this.otherDivs && this.me) this.ensureDivs();
    if (!this.orgDivs && this.me) this.ensureOrgs();
    if (this.scheduled && !this.scheduled.card && this.me) this.buildCard(this.scheduled);
    if (this.scheduled && this.scheduled.card && this.scheduled.weeks <= 0) this.simulateCard();
  }

  /** The divisions this fighter competes in: men's or women's. */
  classes() { return this.gender === "F" ? WOMEN_CLASSES : WEIGHT_CLASSES; }

  /** Where a division sits on the men's size scale (women's strawweight sits just under flyweight). */
  wcAdj(wc = this.weightClass) { return this.gender === "F" ? wc - 1 : wc; }

  /** A new fighter for this fighter's world: same division, same gender. */
  gen(target) { return Fighter.generate(target, this.wcAdj(), this.gender || "M"); }

  division() { return this.classes()[this.weightClass]; }

  /** Adds a new champion to the division's lineage. */
  recordChamp(f, how, interim = false) {
    const L = (this.lineage[this.division()] ||= []);
    L.push({ name: f.displayName(), player: f === this.me, date: this.dateLabel(), how, interim, defenses: 0 });
    while (L.length > 40) L.shift();
  }

  addDefense(interim = false) {
    const L = this.lineage[this.division()] || [];
    for (let i = L.length - 1; i >= 0; i--) if (!!L[i].interim === interim) { L[i].defenses++; return; }
  }

  /** The NPC champion is out injured (an interim title is coming). */
  champOutNow() {
    return this.champOut > this.week && !this.isChamp();
  }

  /** A fight between two NPCs, decided by overall. Returns { w, l, how }. */
  npcBout(a, b) {
    const pa = 1 / (1 + Math.exp((b.overall() - a.overall()) / 5));
    const w = rnd() < pa ? a : b, l = w === a ? b : a;
    const r = rnd();
    const m = r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC";
    w.recordResult("W", m);
    l.recordResult("L", m);
    return { w, l, how: m === "KO" ? "KO/TKO" : m === "SUB" ? "submission" : "decision" };
  }

  /** Puts a fighter at a ranking spot (0 = champion, 1 = top contender / interim champion). */
  moveTo(f, i) {
    const R = this.rankings;
    removeItem(R, f);
    R.splice(Math.min(i, R.length), 0, f);
    this.trim();
  }

  /**
   * Weekly belt politics: interim titles, unification and stripping. A fighter can hold belts in
   * several divisions at once (heldBelts) — double, triple, any-number champion — but every belt
   * has to be defended within STRIP_WEEKS or the GFC strips it.
   */
  beltWeek() {
    const R = this.rankings, me = this.me;
    if (!this.gfc || R.length < 4) return;
    for (const d of Object.keys(this.heldBelts)) {
      const idle = this.week - this.heldBelts[d].since;
      if (idle === STRIP_WARN) this.log("Your " + d + " belt hasn't been defended in " + idle + " weeks. Defend it soon or it will be stripped.");
      if (idle >= STRIP_WEEKS) {
        delete this.heldBelts[d];
        this.log("STRIPPED! The " + this.orgShort() + " takes your " + d + " belt after a year and a half without a defense.");
        const L = (this.otherDivs || {})[d];
        if (L && L.length) (this.lineage[d] ||= []).push({ name: L[0].displayName(), player: false, date: this.dateLabel(), how: "Awarded the vacant title", interim: false, defenses: 0 });
      }
    }
    if (this.interim && this.interim !== me && !R.includes(this.interim)) this.interim = null;
    const booked = (f) => this.scheduled && this.scheduled.opp === f;
    if (this.isChamp()) {
      const idle = this.week - this.lastTitleWeek;
      const titleBooked = this.scheduled && this.scheduled.title;
      if (titleBooked) return;
      if (idle >= STRIP_WEEKS) return this.strip();
      if (idle === STRIP_WARN) this.log("The " + this.orgShort() + " wants a title defense soon — go a year and a half without one and you'll be stripped.");
      if (!this.interim && (this.injuryWeeks >= 8 || idle >= 30)) {
        const a = R[1], b = R[2];
        if (booked(a) || booked(b)) return;
        const { w, l, how } = this.npcBout(a, b);
        this.interim = w;
        this.moveTo(w, 1);
        this.recordChamp(w, "Won the interim title vs " + l.lastName() + " by " + how, true);
        this.log("INTERIM TITLE: " + w.displayName() + " def. " + l.lastName() + " by " + how + " while you were out. Next: unify the belts.");
        if (!this.scheduled) this.generateOffers();
      }
      return;
    }
    if (this.champOut) {
      if (this.week >= this.champOut) {
        // the champion is healthy again
        if (this.interim === me || !this.interim) {
          this.champOut = this.champOutStart = 0;
          if (this.interim === me && !this.scheduled) this.generateOffers();
        } else if (this.week >= this.champOut + 4 && !booked(R[0]) && !booked(this.interim)) {
          const champ = R[0], ic = this.interim;
          const { w, l, how } = this.npcBout(champ, ic);
          this.interim = null;
          this.champOut = this.champOutStart = 0;
          if (w === ic) {
            this.moveTo(ic, 0);
            this.recordChamp(ic, "Unified the belts vs " + l.lastName() + " by " + how);
            this.log("UNIFIED! Interim champ " + ic.displayName() + " def. " + champ.lastName() + " by " + how + " to become undisputed champion.");
          } else {
            this.addDefense();
            this.log("Champion " + champ.displayName() + " returns and unifies the belts, beating " + ic.lastName() + " by " + how + ".");
          }
        }
      } else if (!this.interim && this.week >= this.champOutStart + 6 && !(this.scheduled && this.scheduled.kind === "interim")) {
        const pair = R.slice(1).filter((f) => f !== me && !booked(f)).slice(0, 2);
        if (pair.length < 2) return;
        const { w, l, how } = this.npcBout(pair[0], pair[1]);
        this.interim = w;
        this.moveTo(w, 1);
        this.recordChamp(w, "Won the interim title vs " + l.lastName() + " by " + how, true);
        this.log("INTERIM TITLE: " + w.displayName() + " def. " + l.lastName() + " by " + how + " for the interim " + this.division() + " belt.");
      }
    } else if (rnd() < 0.008 && !booked(R[0])) {
      this.champOutStart = this.week;
      this.champOut = this.week + 18 + nextInt(14);
      this.log("Champion " + R[0].displayName() + " is injured and out for months. The " + this.orgShort() + " will crown an interim champion.");
      if (!this.scheduled) this.generateOffers();
    }
  }

  /** A champion who hasn't defended in a year and a half loses the belt. */
  strip() {
    const R = this.rankings, me = this.me;
    removeItem(R, me);
    let champ, how;
    if (this.interim && this.interim !== me && R.includes(this.interim)) {
      champ = this.interim;
      how = "Promoted from interim champion";
    } else {
      const b = this.npcBout(R[0], R[1]);
      champ = b.w;
      how = "Won the vacant title vs " + b.l.lastName() + " by " + b.how;
    }
    this.interim = null;
    this.moveTo(champ, 0);
    R.splice(1, 0, me);
    this.trim();
    this.recordChamp(champ, how);
    this.log("STRIPPED! The " + this.orgShort() + " takes the " + this.division() + " belt for inactivity. " + champ.displayName() + " is the new champion.");
    if (!this.scheduled) this.generateOffers();
  }

  // ---------------------------------------------------------------- weekly actions

  act(type, stat) {
    this.requireActive();
    const me = this.me;
    let msg;
    switch (type || "") {
      case "train": {
        if (!STATS.includes(stat)) throw new GameError("Unknown stat.");
        if (this.injuryWeeks > 0) throw new GameError("You're injured — rest up first.");
        if (this.energy < this.trainCost()) throw new GameError("Too exhausted to train. Take a rest week.");
        const before = me.get(stat);
        me.add(stat, this.trainGain(stat) * (stat === "chin" ? 0.5 : 1));
        const hurt = this.energy < 35 && rnd() < 0.06 * this.injuryRisk();
        this.energy -= this.trainCost();
        msg = `Trained ${stat}: +${(me.get(stat) - before).toFixed(1)}`;
        if (hurt) msg += this.injure(1 + nextInt(3), "overtraining");
        break;
      }
      case "spar":
        if (this.injuryWeeks > 0) throw new GameError("You're injured — rest up first.");
        if (this.energy < 30) throw new GameError("Too exhausted to spar. Take a rest week.");
        for (const s of ["striking", "wrestling", "grappling", "speed"]) me.add(s, this.trainGain(s) * 0.45);
        me.add("chin", -0.15);
        this.energy -= 30;
        msg = "Hard sparring — gains in striking, wrestling, grappling and speed.";
        if (rnd() < 0.08 * this.injuryRisk()) msg += this.injure(1 + nextInt(3), "sparring");
        break;
      case "rest":
        this.energy = Math.min(100, this.energy + 35 + 3 * this.stars("physio"));
        if (this.injuryWeeks > 0) this.injuryWeeks--;
        msg = "Rest week. Energy recovered.";
        break;
      case "media": {
        if (this.energy < 10) throw new GameError("Too exhausted even for interviews.");
        const gain = 1 + nextInt(this.gfc ? 5 : 3) + Math.floor(this.stars("manager") / 2);
        const pay = this.gfc ? 1500 + this.fame * 50 : 100;
        this.fame = Math.min(100, this.fame + gain);
        this.money += pay;
        this.energy -= 10;
        msg = "Media week: +" + gain + " fame, +$" + commas(pay) + ".";
        break;
      }
      case "work": {
        if (this.energy < 15) throw new GameError("Too exhausted to teach classes.");
        const pay = this.gfc ? 2000 + this.fame * 60 : 450;
        this.money += pay;
        this.energy -= 15;
        msg = (this.gfc ? "Ran a seminar" : "Taught classes at the gym") + ": +$" + commas(pay) + ".";
        break;
      }
      default:
        throw new GameError("Unknown action.");
    }
    this.advanceWeek();
    return msg;
  }

  trainCost() { return 22 - this.stars("snc"); }

  trainGain(stat) {
    const cur = this.me.get(stat);
    return 4.0 * GYM_MULT[this.gym] * this.staffMult(stat) * this.ageFactor() * this.moodMult() * Math.pow(Math.max(0.01, 1 - cur / 97.5), 1.6)
      * (0.4 + this.energy / 166) * (0.7 + rnd() * 0.6);
  }

  staffMult(stat) {
    const role = ["striking", "power", "speed"].includes(stat) ? "striking" : stat === "wrestling" ? "wrestling" : stat === "grappling" ? "bjj" : "snc";
    return 1 + 0.03 * this.stars("head") + 0.1 * this.stars(role);
  }

  ageFactor() {
    const a = this.me.age;
    if (a <= 24) return 1.15;
    if (a <= 28) return 1.0;
    if (a <= 31) return 0.8;
    if (a <= 34) return 0.55;
    return 0.35;
  }

  injuryRisk() { return 1 - 0.15 * this.stars("physio"); }

  injure(weeks, cause) {
    weeks = Math.max(1, weeks - Math.floor(this.stars("physio") / 2));
    this.injuryWeeks = Math.max(this.injuryWeeks, weeks);
    const w = weeks + " week" + (weeks === 1 ? "" : "s");
    this.log("Injured (" + cause + "): out " + w + ".");
    return " Ouch — injured for " + w + ".";
  }

  upgradeGym() {
    if (this.retired) throw new GameError("Your career is over.");
    if (this.gym >= GYM_NAMES.length - 1) throw new GameError("You're already at the best gym in the world.");
    const cost = GYM_COST[this.gym + 1];
    if (this.money < cost) throw new GameError("You need $" + commas(cost) + " to move to " + GYM_NAMES[this.gym + 1] + ".");
    this.money -= cost;
    this.gym++;
    this.log("Moved training camp to " + GYM_NAMES[this.gym] + ".");
    return "Welcome to " + GYM_NAMES[this.gym] + "! Training is now " + Math.round(GYM_MULT[this.gym] * 100) + "% effective.";
  }

  accept(index) {
    this.requireActive();
    if (this.scheduled) throw new GameError("You already have a fight booked.");
    if (!(index >= 0 && index < this.offers.length)) throw new GameError("That offer is no longer available.");
    const o = this.offers[index];
    if (this.injuryWeeks >= o.weeks) throw new GameError("You won't be healed in time for that fight.");
    this.scheduled = o;
    this.offers = [];
    this.buildCard(o);
    this.log("Booked: " + (o.title ? "TITLE FIGHT " : o.opp === this.rival ? "GRUDGE MATCH " : "") + "vs " + o.opp.displayName() + " in " + o.weeks + " weeks.");
    return "Fight booked! Get to work — fight night is in " + o.weeks + " weeks.";
  }

  retire() {
    if (this.retired) throw new GameError("You're already retired.");
    if (this.fight) throw new GameError("Finish your fight first.");
    this.endCareer(this.me.displayName() + " announces retirement at " + this.me.age + " with a record of " + this.me.record() + ".");
    return "You hang up the gloves. Legacy: " + this.legacyTier() + ".";
  }

  endCareer(headline) {
    this.retired = true;
    this.scheduled = null;
    this.offers = [];
    if (this.rival && this.rivalWins + this.rivalLosses > 0) this.rivalries.push(this.rivalSummary());
    this.log(headline);
  }

  requireActive() {
    if (this.retired) throw new GameError("Your career is over.");
    if (this.fight) throw new GameError("Finish your fight first.");
    if (this.fightNight()) throw new GameError("It's fight night! Head to the cage.");
  }

  fightNight() { return !!this.scheduled && this.scheduled.weeks <= 0; }

  // ---------------------------------------------------------------- team

  stars(role) {
    const s = this.team[role];
    return s ? s.stars : 0;
  }

  refreshMarket() {
    this.market = [];
    this.marketAge = 0;
    for (let i = 0; i < 6; i++) this.market.push(Staff.generate());
  }

  hire(index) {
    if (this.retired) throw new GameError("Your career is over.");
    if (!(index >= 0 && index < this.market.length)) throw new GameError("That person already signed elsewhere.");
    const s = this.market[index];
    if (this.fame < s.fameRequired()) throw new GameError(s.name + " only works with fighters with " + s.fameRequired() + "+ fame.");
    if (this.money < s.signingFee()) throw new GameError("You need $" + commas(s.signingFee()) + " to sign " + s.name + ".");
    this.money -= s.signingFee();
    this.market.splice(index, 1);
    const old = this.team[s.role];
    this.team[s.role] = s;
    this.log("Signed " + s.name + " (" + s.stars + "★ " + Staff.title(s.role) + ")" + (old ? ", replacing " + old.name : "") + ".");
    return s.name + " joins the team as " + Staff.title(s.role) + "!";
  }

  fire(role) {
    if (this.retired) throw new GameError("Your career is over.");
    const s = this.team[role || ""];
    if (!s) throw new GameError("Nobody in that role.");
    delete this.team[role];
    this.log("Parted ways with " + Staff.title(s.role) + " " + s.name + ".");
    return s.name + " has left the team.";
  }

  teamSalary() {
    let t = 0;
    for (const s of Object.values(this.team)) t += s.salary();
    return t;
  }

  // ---------------------------------------------------------------- rivals & trash talk

  setRival(f, heat, why) {
    this.rival = f;
    this.rivalHeat = heat;
    this.rivalWins = this.rivalLosses = 0;
    this.weeksWithoutRival = 0;
    this.log("RIVALRY: " + f.displayName() + " " + why + ".");
  }

  rivalSummary() {
    const n = this.rival.displayName();
    const sc = this.rivalWins + "-" + this.rivalLosses;
    if (this.rivalWins > this.rivalLosses) return "Beat " + n + " " + sc;
    if (this.rivalLosses > this.rivalWins) return "Lost to " + n + " " + sc;
    return "Even with " + n + " " + sc;
  }

  /**
   * A career can fix every other fighter at one overall rating (npcOverall). Their stats keep
   * their style's strengths and weaknesses but always add up to exactly that overall.
   * meOverall does the same for the player: training, age and injuries never move it.
   */
  pinOthers() {
    if (this.meOverall) for (const s of STATS) this.me.set(s, this.meOverall);
    const target = this.npcOverall;
    if (!target) return;
    const seen = new Set();
    const visit = (v) => {
      if (!v || typeof v !== "object" || seen.has(v)) return;
      seen.add(v);
      if (v instanceof Fighter) {
        if (v !== this.me) pinFighter(v, target);
        return;
      }
      for (const k of Object.keys(v)) visit(v[k]);
    };
    visit(this);
  }

  /** The rival keeps pace with the player's development, and keeps fighting. */
  rivalWeek() {
    const me = this.me;
    if (!this.rival) {
      if (++this.weeksWithoutRival >= 40 && !this.retired) {
        const r = this.rankings.indexOf(me);
        let f;
        if (this.gfc && r > 0) f = this.rankings[Math.max(1, Math.min(this.rankings.length - 1, r + (nextBool() ? 1 : -1)))];
        else f = this.gen(me.overall() + 1);
        if (f === me) return;
        this.setRival(f, 35, "calls you out in a viral interview");
      }
      return;
    }
    const rival = this.rival;
    if (this.week % 4 === 0) {
      const gap = me.overall() + 1 - rival.overall();
      for (const s of STATS) rival.add(s, gap * 0.25 + gauss() * 0.4);
    }
    if (!this.rankings.includes(rival) && rnd() < 0.12 && (!this.scheduled || this.scheduled.opp !== rival)) {
      const w = rnd() < 0.65;
      const r = rnd();
      rival.recordResult(w ? "W" : "L", r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC");
      if (w && rnd() < 0.5) this.log("Your rival " + rival.lastName() + " wins again (" + rival.record() + ") and says you're next.");
    }
    this.rivalHeat = Math.max(0, this.rivalHeat - 1);
    if (this.rivalHeat >= 50 && rnd() < 0.08) {
      const line = fill(pickOf(TT.CALLOUTS), me.lastName(), rival.lastName());
      this.log(rival.lastName() + ': "' + line + '"');
      this.thread("rival", "them", line);
      this.rivalHeat = Math.min(100, this.rivalHeat + 3);
    }
  }

  rivalFought(won, lost) {
    this.lastRivalFight = this.week;
    if (won) {
      this.rivalWins++;
      this.rivalHeat = 15;
    } else if (lost) {
      this.rivalLosses++;
      this.rivalHeat = 45;
    }
    if (Math.abs(this.rivalWins - this.rivalLosses) >= 2 || this.rivalWins + this.rivalLosses >= 5) {
      const s = this.rivalSummary();
      this.rivalries.push(s);
      this.log("Rivalry settled: " + s + ".");
      this.rival = null;
    }
  }

  talk(target, tone) {
    if (this.retired) throw new GameError("Your career is over.");
    if (this.fight) throw new GameError("Finish your fight first.");
    if (this.lastTalkWeek === this.week) throw new GameError("You've already said your piece this week.");
    let t;
    if (target === "rival") {
      if (!this.rival) throw new GameError("You don't have a rival right now.");
      t = this.rival;
    } else {
      if (!this.scheduled) throw new GameError("You don't have a fight booked.");
      t = this.scheduled.opp;
    }
    const booked = !!this.scheduled && this.scheduled.opp === t;
    const isRival = t === this.rival;
    const mine = this.me.lastName(), them = t.lastName();
    const mgr = this.stars("manager");
    const effects = [];
    let yours, reply, fameGain;
    switch (tone || "") {
      case "respect":
        yours = pickOf(TT.RESPECT);
        reply = pickOf(rnd() < 0.7 ? TT.REPLY_RESPECT : TT.REPLY_CALM);
        fameGain = 1;
        if (isRival) {
          this.rivalHeat = Math.max(0, this.rivalHeat - 5);
          effects.push("Rivalry heat -5");
        }
        break;
      case "trash":
        yours = pickOf(TT.TRASH);
        reply = pickOf(nextBool() ? TT.REPLY_CALM : TT.REPLY_ANGRY);
        fameGain = 2 + nextInt(3) + Math.floor(mgr / 2);
        if (isRival) {
          this.rivalHeat = Math.min(100, this.rivalHeat + 12);
          effects.push("Rivalry heat +12");
        }
        if (booked) this.hype(1, 0.08, effects);
        break;
      case "personal":
        yours = pickOf(TT.PERSONAL);
        reply = pickOf(TT.REPLY_ANGRY);
        if (rnd() < 0.2) {
          const fine = Math.max(200, Math.trunc(this.money / 20));
          this.money -= fine;
          fameGain = -3;
          effects.push("The commission fines you $" + commas(fine) + " for conduct");
        } else {
          fameGain = 4 + nextInt(5) + mgr;
        }
        if (isRival) {
          this.rivalHeat = Math.min(100, this.rivalHeat + 25);
          effects.push("Rivalry heat +25");
        }
        if (booked) this.hype(2, 0.15, effects);
        break;
      default:
        throw new GameError("Pick a tone.");
    }
    this.fame = clamp(this.fame + fameGain, 0, 100);
    effects.unshift("Fame " + (fameGain >= 0 ? "+" : "") + fameGain);
    this.lastTalkWeek = this.week;
    this.lastTalk = { you: fill(yours, them, mine), them: fill(reply, them, mine), target: t.displayName(), effects };
    this.log("Mic work vs " + them + ': "' + fill(yours, them, mine) + '"');
    return null;
  }

  hype(level, purseBump, effects) {
    const s = this.scheduled;
    s.talkLevel = Math.max(s.talkLevel, level);
    s.purse = Math.round(s.purse * (1 + purseBump));
    s.winBonus = Math.round(s.winBonus * (1 + purseBump));
    s.oppBonus = Math.min(4.5, s.oppBonus + 1.5 * level);
    effects.push("Purse +" + Math.round(purseBump * 100) + "% from the hype");
    effects.push("Opponent is fired up (+" + s.oppBonus + " to all stats on fight night)");
  }

  // ---------------------------------------------------------------- every division of the promotion
  // Your division lives in this.rankings; the promotion's other divisions keep their own rankings
  // here, with their own champions, fought out in the background.

  ensureDivs() {
    if (!this.otherDivs) this.otherDivs = {};
    if (!this.lineage) this.lineage = {};
    const lv = this.org ? this.orgLevel() : 0;
    this.classes().forEach((name, wc) => {
      if (wc === this.weightClass || this.otherDivs[name]) return;
      const L = [];
      for (let i = 0; i < RANKED; i++) L.push(Fighter.generate(88 - i * 1.2 + lv, this.wcAdj(wc), this.gender || "M"));
      if (this.npcOverall) for (const f of L) pinFighter(f, this.npcOverall);
      this.otherDivs[name] = L;
      if (!(this.lineage[name] || []).length) this.lineage[name] = [{ name: L[0].displayName(), player: false, date: this.dateLabel(), how: "Reigning champion", interim: false, defenses: 0 }];
    });
  }

  /** Which promotion's world this.rankings and this.otherDivs show (the GFC while on the regional circuit). */
  orgKey() { return this.org || "gfc"; }

  /**
   * Every other promotion keeps full rankings too: { promotionId: { division: [fighters] } },
   * champion first. They fight in the background, and you can meet anyone in them.
   */
  ensureOrgs() {
    if (!this.orgDivs) this.orgDivs = {};
    if (!this.orgLineage) this.orgLineage = {};
    for (const p of PROMOTIONS) {
      if (p.id === this.orgKey()) continue;
      const D = (this.orgDivs[p.id] ||= {});
      this.classes().forEach((name, wc) => {
        if (D[name]) return;
        const L = [];
        for (let i = 0; i < RANKED; i++) L.push(Fighter.generate(88 - i * 1.2 + p.level, this.wcAdj(wc), this.gender || "M"));
        if (this.npcOverall) for (const f of L) pinFighter(f, this.npcOverall);
        D[name] = L;
      });
    }
  }

  /** The other promotions' fighters fight each other; their title changes make the news now and then. */
  orgsWeek() {
    for (const p of PROMOTIONS) {
      const D = (this.orgDivs || {})[p.id];
      if (!D) continue;
      for (const [name, L] of Object.entries(D)) {
        const wc = this.classes().indexOf(name);
        while (L.length < RANKED) {
          const f = Fighter.generate(70 + nextInt(6) + p.level, this.wcAdj(wc), this.gender || "M");
          f.age = 23 + nextInt(4);
          if (this.npcOverall) pinFighter(f, this.npcOverall);
          L.push(f);
        }
        if (rnd() > 0.25) continue;
        const i = nextInt(L.length - 1), j = Math.min(L.length - 1, i + 1 + nextInt(3));
        const a = L[i], b = L[j];
        if (a === this.rival || b === this.rival) continue;
        const { w, how } = this.npcBout(a, b);
        if (w === b) {
          removeItem(L, b);
          L.splice(L.indexOf(a), 0, b);
          if (i === 0 && rnd() < 0.35) this.log(p.short + " " + name + ": NEW CHAMPION! " + b.displayName() + " beats " + a.lastName() + " by " + how + ".");
        }
      }
    }
  }

  /** The other divisions' fighters fight each other too; title changes make the news. */
  otherDivsWeek() {
    const lv = this.org ? this.orgLevel() : 0;
    for (const [name, L] of Object.entries(this.otherDivs || {})) {
      const wc = this.classes().indexOf(name);
      while (L.length < RANKED) {
        const f = Fighter.generate(70 + nextInt(6) + lv, this.wcAdj(wc), this.gender || "M");
        f.age = 23 + nextInt(4);
        if (this.npcOverall) pinFighter(f, this.npcOverall);
        L.push(f);
      }
      if (rnd() > 0.3) continue;
      const i = nextInt(L.length - 1), j = Math.min(L.length - 1, i + 1 + nextInt(3));
      const a = L[i], b = L[j];
      if (a === this.rival || b === this.rival) continue;
      const { w, l, how } = this.npcBout(a, b);
      if (w === b) {
        removeItem(L, b);
        L.splice(L.indexOf(a), 0, b);
      }
      const held = !!this.heldBelts[name];
      const lin = (this.lineage[name] ||= []);
      if (i === 0 && !held) {
        if (w === a) {
          if (lin.length) lin[lin.length - 1].defenses++;
          if (this.gfc && rnd() < 0.5) this.log(this.orgShort() + " " + name + ": champion " + a.displayName() + " defends vs " + b.lastName() + " by " + how + ".");
        } else {
          lin.push({ name: b.displayName(), player: false, date: this.dateLabel(), how: "Beat " + a.lastName() + " by " + how, interim: false, defenses: 0 });
          if (this.gfc) this.log(this.orgShort() + " " + name + ": NEW CHAMPION! " + b.displayName() + " dethrones " + a.lastName() + " by " + how + ".");
        }
      }
      while (lin.length > 40) lin.shift();
    }
  }

  /** Finds a fighter anywhere in the promotion (or your rival, opponents and offers) by id. */
  findFighter(id) {
    const all = [...this.rankings, ...Object.values(this.otherDivs || {}).flat(),
      ...Object.values(this.orgDivs || {}).flatMap((D) => Object.values(D).flat()), this.rival,
      this.scheduled && this.scheduled.opp, ...this.offers.map((o) => o.opp)];
    return all.find((f) => f && f.id === id && f !== this.me) || null;
  }

  /** Which division a fighter is ranked in, and where (-1 if unranked). */
  whereIs(f) {
    const r = this.rankings.indexOf(f);
    if (r >= 0) return { division: this.division(), rank: r, same: true };
    for (const [name, L] of Object.entries(this.otherDivs || {})) {
      const i = L.indexOf(f);
      if (i >= 0) return { division: name, rank: this.heldBelts[name] ? i + 1 : i, same: false };
    }
    for (const p of PROMOTIONS) {
      for (const [name, L] of Object.entries((this.orgDivs || {})[p.id] || {})) {
        const i = L.indexOf(f);
        if (i >= 0) return { division: name, rank: i, same: false, org: p.short };
      }
    }
    return { division: this.division(), rank: -1, same: true };
  }

  relOf(f) { return ((this.rel || {})[f.id] || { v: 0 }).v; }

  static relLabel(v) {
    return v >= 70 ? "Best friends" : v >= 40 ? "Friends" : v >= 15 ? "Friendly" : v > -15 ? "Neutral"
      : v > -40 ? "Tense" : v > -70 ? "Bad blood" : "Enemies";
  }

  /** Interact with another fighter: be nice, trash talk, hang out, train together, call them out or start a rivalry. */
  meetFighter(id, type) {
    this.requireActive();
    const f = this.findFighter(id);
    if (!f) throw new GameError("That fighter isn't around anymore.");
    this.rel ||= {};
    const R = (this.rel[f.id] ||= { v: 0, met: -1 });
    const mine = this.me.lastName(), them = f.lastName();
    const booked = !!this.scheduled && this.scheduled.opp === f;
    const where = this.whereIs(f);
    const effects = [];
    let you, reply;
    const once = () => {
      if (R.met === this.week) throw new GameError("You've already talked to " + them + " this week.");
      R.met = this.week;
    };
    const rel = (d) => {
      R.v = clamp(R.v + d, -100, 100);
      effects.push("Relationship " + (d >= 0 ? "+" : "") + d + " (" + Career.relLabel(R.v) + ")");
    };
    const fame = (d) => {
      this.fame = clamp(this.fame + d, 0, 100);
      effects.push("Fame " + (d >= 0 ? "+" : "") + d);
    };
    switch (type) {
      case "respect":
        once();
        you = pickOf(MEET.RESPECT);
        reply = pickOf(R.v <= -40 ? MEET.COLD : MEET.WARM);
        rel(R.v <= -40 ? 4 : 10);
        fame(1);
        if (f === this.rival) {
          this.rivalHeat = Math.max(0, this.rivalHeat - 5);
          effects.push("Rivalry heat -5");
        }
        break;
      case "trash": {
        once();
        you = pickOf(TT.TRASH);
        reply = pickOf(nextBool() ? TT.REPLY_ANGRY : TT.REPLY_CALM);
        rel(R.v >= 40 ? -25 : -15);
        if (R.v >= 15) effects.push("Your friendship takes a hit");
        fame(2 + nextInt(3) + Math.floor(this.stars("manager") / 2));
        if (f === this.rival) {
          this.rivalHeat = Math.min(100, this.rivalHeat + 10);
          effects.push("Rivalry heat +10");
        }
        if (booked) this.hype(1, 0.08, effects);
        if (R.v <= -60 && f !== this.rival && !this.rival) {
          this.setRival(f, 55, "swears to shut you up after your online feud");
          effects.push(them + " is now your RIVAL");
        }
        break;
      }
      case "hangout": {
        once();
        if (R.v <= -40) throw new GameError(them + " won't even pick up the phone.");
        if (booked) throw new GameError("Your camp won't let you hang out with your next opponent.");
        const cost = 300 + 200 * ((this.lifeState && this.lifeState.lifestyle) || 1);
        this.spend(cost, "dinner with " + them);
        you = pickOf(MEET.HANGOUT);
        reply = pickOf(MEET.HANGOUT_REPLY);
        rel(15);
        this.lifeJoy(3);
        effects.push("-" + fmtMoney(cost) + " · Happiness +3");
        if (R.v >= 40 && rnd() < 0.3) {
          fame(2);
          effects.push("Photos of you two go viral");
        }
        break;
      }
      case "train": {
        if (R.v < 30) throw new GameError(them + " doesn't trust you enough to share a camp yet (needs Friendly 30+).");
        if (booked) throw new GameError("You can't train with your next opponent!");
        if (this.injuryWeeks > 0) throw new GameError("You're injured — rest up first.");
        if (this.energy < 25) throw new GameError("Too exhausted to train. Take a rest week.");
        const best = [...STATS].sort((a, b) => f.get(b) - f.get(a)).slice(0, 2);
        const gains = best.map((s) => {
          const before = this.me.get(s);
          this.me.add(s, this.trainGain(s) * 1.3 * (s === "chin" ? 0.5 : 1));
          return s + " +" + (this.me.get(s) - before).toFixed(1);
        });
        this.energy -= 25;
        you = "Let's get some rounds in. Show me how you do it.";
        reply = pickOf(MEET.TRAIN_REPLY).replaceAll("{s}", best[0]);
        R.v = clamp(R.v + 5, -100, 100);
        effects.push("Trained with " + them + ": " + gains.join(", "));
        effects.push("Relationship +5 (" + Career.relLabel(R.v) + ")");
        this.lastMeet = { id: f.id, target: f.displayName(), you, them: reply, effects };
        this.log("Trains with " + f.displayName() + ". " + gains.join(", ") + ".");
        this.advanceWeek();
        return "A week in camp with " + them + ": " + gains.join(", ");
      }
      case "callout": {
        if (this.scheduled || this.fight) throw new GameError("You already have a fight booked.");
        if (this.lastCalloutWeek === this.week) throw new GameError("You've already called someone out this week.");
        if (where.org) throw new GameError(them + " fights in the " + where.org + ". You'd have to sign there first.");
        if (!where.same) throw new GameError(them + " fights at " + where.division + ". Move divisions to fight them.");
        if (!this.gfc && where.rank >= 0) throw new GameError(them + " fights in the GFC. Earn a contract first.");
        this.lastCalloutWeek = this.week;
        const me = this.rankings.indexOf(this.me);
        you = pickOf(TT.CALLOUTS);
        let ok, why = "";
        if (where.rank === 0) {
          ok = this.titleShotEligible() || (f === this.rival && me > 0 && me <= 5);
          why = "Get in line. Win some fights and the belt will be waiting.";
        } else {
          const gap = me < 0 ? (where.rank >= 0 ? 16 - where.rank : 0) : me - where.rank;
          let p = gap <= 0 ? 0.85 : gap <= 3 ? 0.65 : gap <= 6 ? 0.35 : 0.1;
          if (R.v <= -40 || f === this.rival) p += 0.35;
          if (R.v >= 40) p -= 0.4;
          ok = rnd() < p;
          why = R.v >= 40 ? "We're friends, man. I'm not fighting you." : gap > 3 ? "You're not on my level. Come back when you're ranked higher." : "Not right now. Maybe later.";
        }
        if (!ok) {
          reply = why;
          rel(-3);
          fame(1);
          effects.push(them + " turned you down");
          break;
        }
        reply = pickOf(MEET.ACCEPT);
        removeItem(this.offers, this.offers.find((o) => o.opp === f));
        let o;
        if (!this.gfc) {
          const p = this.managed(700 + this.fame * 30);
          o = new Offer(f, 4 + nextInt(3), p, p, 3, false, false);
        } else o = where.rank === 0 ? this.titleOffer(f) : this.gfcOffer(f);
        o.callout = true;
        this.offers.unshift(o);
        rel(-5);
        fame(2);
        effects.push("Fight offer added: vs " + them + (o.title ? " for the belt!" : ""));
        break;
      }
      case "rival": {
        if (f === this.rival) throw new GameError(them + " is already your rival.");
        once();
        if (this.rival) {
          if (this.rivalWins + this.rivalLosses > 0) this.rivalries.push(this.rivalSummary());
          this.log("Moves on from the rivalry with " + this.rival.displayName() + ".");
        }
        R.v = Math.min(R.v, -50);
        you = pickOf(TT.PERSONAL);
        reply = pickOf(TT.REPLY_ANGRY);
        this.setRival(f, 50, "is your new rival after you declared war in a viral video");
        fame(3 + nextInt(3));
        effects.push(them + " is now your RIVAL · heat 50");
        break;
      }
      default:
        throw new GameError("Pick something to do.");
    }
    you = fill(you, them, mine);
    reply = fill(reply, mine, them);
    this.lastMeet = { id: f.id, target: f.displayName(), you, them: reply, effects };
    this.log("With " + them + ': "' + you + '"');
    return null;
  }

  profileJson(id) {
    const f = id && this.findFighter(id);
    if (!f) return null;
    const w = this.whereIs(f), v = this.relOf(f);
    const booked = !!this.scheduled && this.scheduled.opp === f;
    const met = ((this.rel || {})[f.id] || {}).met === this.week;
    const orgShort = w.org || (this.gfc ? this.orgShort() : "GFC");
    return { ...f.toJson(), id: f.id, division: w.division, rank: w.rank, sameDivision: w.same, org: orgShort, otherOrg: !!w.org,
      champion: w.rank === 0, rel: v, relLabel: Career.relLabel(v), rival: f === this.rival, booked, met,
      canCallout: !this.scheduled && !this.fight && this.lastCalloutWeek !== this.week && w.same && (this.gfc || w.rank < 0),
      inPromo: this.gfc || w.rank < 0,
      h2h: this.history.filter((h) => h.opponent === f.displayName()).map((h) => h.result).join(" ") };
  }

  divisionsJson(orgId = this.orgKey()) {
    const away = orgId !== this.orgKey();
    const D = away ? (this.orgDivs || {})[orgId] || {} : null;
    return this.classes().map((name, wc) => {
      const cur = !away && wc === this.weightClass;
      let L = away ? D[name] || [] : cur ? this.rankings : (this.otherDivs || {})[name] || [];
      const held = !away && !cur && !!this.heldBelts[name];
      if (held) L = [this.me, ...L.slice(0, RANKED - 1)];
      return { name, current: cur, held, list: L.map((f, i) => ({ id: f.id, rank: i, name: f.displayName(), record: f.record(), overall: f.overall(),
        style: f.style, country: f.country, player: f === this.me, rival: f === this.rival, interim: cur && f === this.interim,
        rel: f === this.me ? 0 : this.relOf(f) })) };
    });
  }

  // ---------------------------------------------------------------- fight camp and the weight cut

  /** The camp for a booked fight: study tapes, bring in sparring partners, or go to war in the gym. */
  setCamp(kind) {
    const s = this.scheduled;
    if (!s || this.fight) throw new GameError("Book a fight first.");
    if (s.camp) throw new GameError("Your camp is already set.");
    if (s.weeks <= 0) throw new GameError("It's fight night.");
    const o = s.opp;
    if (kind === "tapes") {
      s.camp = { kind, text: "Film study: your coach will read " + o.lastName() + "'s game plan every round." };
    } else if (kind === "partners") {
      const cost = this.gfc ? Math.round(15000 * ((this.promo() || { pay: 1 }).pay)) : 1500;
      this.spend(cost, "sparring partners");
      const best = [...STATS].sort((a, b) => o.get(b) - o.get(a))[0];
      s.camp = { kind, best, text: "Partners who fight like " + o.lastName() + ": their " + best + " will hurt less (-4 on fight night). Cost " + fmtMoney(cost) + "." };
    } else if (kind === "hard") {
      s.camp = { kind, text: "A brutal camp: +2 to every stat on fight night." };
      if (rnd() < 0.18 - this.stars("physio") * 0.025) {
        const note = this.injure(1 + nextInt(3), "a hard sparring session in camp");
        s.camp.text += note;
      }
    } else throw new GameError("Pick a camp.");
    this.log("Fight camp vs " + o.lastName() + ": " + { tapes: "film study", partners: "specialist sparring partners", hard: "hard sparring camp" }[kind] + ".");
    return s.camp.text;
  }

  /** Fight week: how hard you cut weight. */
  setCut(kind) {
    const s = this.scheduled;
    if (!s || this.fight) throw new GameError("Book a fight first.");
    if (s.weeks > 1) throw new GameError("The weight cut starts in fight week.");
    if (!CUTS[kind]) throw new GameError("Pick a cut.");
    s.cut = kind;
    return CUTS[kind].text;
  }

  /** The weigh-in, on fight night before the walkout. Returns the line for the player. */
  weighIn() {
    const s = this.scheduled, f = this.fight;
    const kind = s.cut || "standard", C = CUTS[kind];
    const limits = this.gender === "F" ? [115, 125, 135, 145] : [125, 135, 145, 155, 170, 185, 205, 265];
    const limit = limits[this.weightClass] + (s.title ? 0 : 1);
    const missChance = Math.max(0, C.miss - this.stars("snc") * 0.03);
    const made = rnd() >= missChance;
    for (const [k, v] of Object.entries(C.mods)) f.p.mods[k] = (f.p.mods[k] || 0) + v;
    f.p.stamina = Math.max(40, 100 - C.drain);
    const notes = [];
    let mine = made ? limit - Math.round(rnd() * 8) / 10 : limit + 0.6 + Math.round(rnd() * 25) / 10;
    if (!made) {
      // missed weight: a chunk of the purse goes to the opponent and the body pays for it
      f.p.mods.cardio = (f.p.mods.cardio || 0) - 4;
      f.p.stamina = Math.max(35, f.p.stamina - 10);
      s.purse = Math.round(s.purse * 0.8);
      this.fame = clamp(this.fame - 3, 0, 100);
      notes.push("You MISSED WEIGHT at " + mine.toFixed(1) + " lbs. 20% of your purse goes to " + s.opp.lastName() + ".");
      this.log("Missed weight for " + (s.card ? s.card.name : "the fight") + " (" + mine.toFixed(1) + " lbs).");
    } else notes.push("You made weight: " + mine.toFixed(1) + " lbs. " + C.after);
    if (rnd() < 0.05) {
      const take = Math.round(s.purse * 0.2);
      s.purse += take;
      f.o.mods.power = (f.o.mods.power || 0) + 1;
      f.o.mods.cardio = (f.o.mods.cardio || 0) - 3;
      notes.push(s.opp.lastName() + " missed weight! You get " + fmtMoney(take) + " of their purse.");
      this.log(s.opp.displayName() + " missed weight against you.");
    }
    // the camp pays off on the night
    const camp = s.camp;
    if (camp && camp.kind === "tapes") f.coachStars = Math.max(f.coachStars || 0, 3);
    if (camp && camp.kind === "partners") f.o.mods[camp.best] = (f.o.mods[camp.best] || 0) - 4;
    if (camp && camp.kind === "hard") for (const k of STATS) f.p.mods[k] = (f.p.mods[k] || 0) + 2;
    s.weighIn = { made, weight: mine.toFixed(1), limit, notes };
    return notes.join(" ");
  }

  // ---------------------------------------------------------------- contracts and pay-per-view

  /** Push back on a contract offer: more money, PPV points, or a title-shot clause. */
  negotiate(org, ask) {
    const o = this.promoOffers.find((x) => x.org === org);
    if (!o) throw new GameError("There's no offer from them right now.");
    if (o.negotiated) throw new GameError("They've made their final offer.");
    const p = PROMOTIONS.find((x) => x.id === org);
    o.negotiated = true;
    o.terms ||= {};
    const leverage = this.fame / 100 + Math.max(0, this.me.wins - p.need.wins) / 20 + (this.isChamp() ? 0.25 : 0) + this.stars("manager") * 0.05;
    const hard = { money: 0, ppv: 0.1, title: 0.2 }[ask];
    if (hard === undefined) throw new GameError("Ask for something.");
    const ok = rnd() < clamp(0.3 + leverage * 0.5 - hard, 0.1, 0.9);
    let msg;
    if (ok) {
      if (ask === "money") {
        o.bonus = Math.round(o.bonus * 1.35 / 1000) * 1000;
        msg = p.short + " bumps the signing bonus to " + fmtMoney(o.bonus) + ".";
      } else if (ask === "ppv") {
        o.terms.ppv = 1;
        msg = p.short + " agrees: $1 for every pay-per-view buy when you headline.";
      } else {
        o.terms.titleClause = true;
        msg = p.short + " writes it in: win two in a row and you get a title shot.";
      }
    } else if (rnd() < 0.2) {
      this.promoOffers = this.promoOffers.filter((x) => x !== o);
      msg = p.short + " walks away from the table. The offer is gone.";
    } else {
      o.bonus = Math.round(o.bonus * 0.9 / 1000) * 1000;
      msg = p.short + " won't budge — and knocks the bonus down to " + fmtMoney(o.bonus) + ". Take it or leave it.";
    }
    this.log("Contract talks with " + p.short + ": " + msg);
    return msg;
  }

  /** Pay-per-view buys for a headliner, and your share of them. */
  ppvFor(o, won) {
    if (!this.gfc || o.contender) return null;
    const card = o.card, bt = card && card.bouts.find((b) => b.player);
    const headline = o.title || (card && card.bouts[0] === bt);
    if (!headline) return null;
    const pay = (this.promo() || { pay: 1 }).pay;
    const buys = Math.round((40000 + this.fame * this.fame * 40 + (o.title ? 220000 : 0) + (o.talkLevel || 0) * 60000 + (o.opp === this.rival ? 150000 : 0)
      + (o.trilogy ? 200000 : 0)) * pay * (0.8 + rnd() * 0.4) / 1000) * 1000;
    const rate = (o.title ? 0.5 : 0) + ((this.contract && this.contract.ppv) || 0);
    return { buys, rate, share: Math.round(buys * rate * (won ? 1 : 0.6)) };
  }

  // ---------------------------------------------------------------- legacy

  /** Your best wins, kept for the highlight reel (replays for the top three). */
  addHighlight(f, o, oppRank, bonuses) {
    const score = (f.methodType === "KO" ? 25 : f.methodType === "SUB" ? 22 : 6) + (o.title ? 45 : 0) + (oppRank > 0 ? (RANKED - oppRank) * 2 : oppRank === 0 ? 40 : 0)
      + bonuses.length * 10 + (o.opp === this.rival ? 15 : 0) + Math.max(0, 6 - f.endRound) * 2;
    const H = (this.highlights ||= []);
    H.push({ date: this.dateLabel(), text: "def. " + o.opp.displayName() + " — " + f.method + " (R" + f.endRound + " " + f.endTime + ")" + (o.title ? " for the title" : ""),
      score, json: { ...f.toJson(), wc: this.weightClass, cardName: o.card ? o.card.name : "", slot: "Highlight", division: this.division() } });
    H.sort((a, b) => b.score - a.score);
    while (H.length > 6) H.pop();
    H.forEach((h, i) => { if (i >= 3) delete h.json; });
    const R = (this.records ||= { longestStreak: 0, fastest: null });
    R.longestStreak = Math.max(R.longestStreak, this.me.streak);
    if (f.methodType !== "DEC") {
      const secs = (f.endRound - 1) * 300 + Number(f.endTime.split(":")[0]) * 60 + Number(f.endTime.split(":")[1]);
      if (!R.fastest || secs < R.fastest.secs) R.fastest = { secs, text: f.method + " in " + (f.endRound > 1 ? "round " + f.endRound + ", " : "") + f.endTime, vs: o.opp.displayName() };
    }
  }

  legacyJson() {
    if (!this.retired) return null;
    const me = this.me, R = this.records || {};
    const inducted = this.legacyScore() >= 200;
    const speech = inducted ? [
      "I came into this sport with nothing but a dream and a " + GYM_NAMES[0].toLowerCase() + ".",
      this.titlesWon ? "Holding that belt above my head... nothing will ever feel like that again." : "I never got the belt, but I never stopped chasing it.",
      this.rivalries.length ? "To my rivals — " + this.rivalries.map((r) => r.replace(/^(Beat|Lost to|Even with) /, "").replace(/ \d+-\d+$/, "")).slice(0, 2).join(" and ") + " — you made me better." : "To everyone I fought: thank you for the war.",
      "To the fans: every walkout, every roar... that was all for you. Thank you.",
    ] : null;
    return {
      tier: this.legacyTier(), score: this.legacyScore(), inducted, speech,
      highlights: (this.highlights || []).map((h, i) => ({ id: i, date: h.date, text: h.text, canWatch: !!h.json })),
      records: [
        ["Record", me.record()], ["KO / TKO wins", me.koWins], ["Submission wins", me.subWins],
        ["Titles won", this.titlesWon], ["Title defenses", this.titleDefenses], ["Belts in divisions", this.divisionsWon.join(", ") || "—"],
        ["Longest win streak", R.longestStreak || 0], ["Fastest finish", R.fastest ? R.fastest.text + " vs " + R.fastest.vs : "—"],
        ["Bonuses won", this.bonusCount || 0], ["Career earnings", fmtMoney(this.earnings)], ["Peak overall", this.peakOverall],
      ],
    };
  }

  // ---------------------------------------------------------------- coaching career

  openGym(name) {
    if (!this.retired) throw new GameError("Retire first — then open your gym.");
    if (this.coaching) throw new GameError("Your gym is already open.");
    this.coaching = { name: String(name || this.me.lastName() + " MMA").slice(0, 30), prospects: [], earnings: 0, graduates: [], last: null };
    this.log("Opens " + this.coaching.name + ". Time to build the next generation.");
    return "Welcome to " + this.coaching.name + "!";
  }

  coachWeek() {
    this.week++;
    for (const p of this.coaching.prospects) if (p.rest > 0) p.rest--;
    // classes and memberships pay the bills
    const income = 400 + this.fame * 30 + this.coaching.prospects.length * 150;
    this.money += income;
    this.coaching.earnings += income;
  }

  coach(action, i, extra) {
    const C = this.coaching;
    if (!C) throw new GameError("Open your gym first.");
    if (action === "recruit") {
      if (C.prospects.length >= 4) throw new GameError("Your gym is full (4 prospects).");
      this.spend(3000, "a scholarship");
      const f = Fighter.generate(44 + nextInt(10), this.wcAdj(nextInt(this.classes().length)), this.gender || "M");
      f.age = 19 + nextInt(5);
      f.wins = f.losses = f.draws = f.koWins = f.subWins = f.decWins = f.streak = 0;
      C.prospects.push({ f, rest: 0 });
      this.coachWeek();
      return "Signed prospect " + f.displayName() + " (" + f.style + ", OVR " + f.overall() + ").";
    }
    const P = C.prospects[i];
    if (!P) throw new GameError("That prospect isn't at your gym.");
    if (action === "train") {
      if (!STATS.includes(extra)) throw new GameError("Pick a stat.");
      const before = P.f.get(extra);
      P.f.add(extra, (2 + rnd() * 2) * Math.max(0.15, 1 - before / 92) * (1 + this.peakOverall / 200));
      this.coachWeek();
      return P.f.lastName() + " trained " + extra + ": +" + (P.f.get(extra) - before).toFixed(1);
    }
    if (action === "fight") {
      if (P.rest > 0) throw new GameError(P.f.lastName() + " needs " + P.rest + " more weeks before fighting again.");
      if (!PLANS[extra]) throw new GameError("Pick a game plan.");
      const lv = P.f.overall() - 3 + nextInt(7) + P.f.wins;
      const opp = Fighter.generate(lv, this.wcAdj(), this.gender || "M");
      const f = new Fight(P.f, opp, 3, false, 0, Math.min(5, 1 + Math.floor(this.peakOverall / 25)));
      f.org = "Iron Cage";
      for (let n = 0; !f.finished && n < 4; n++) f.simulateRound(extra, true);
      const won = f.winner === "player", lost = f.winner === "opponent";
      P.f.recordResult(won ? "W" : lost ? "L" : "D", f.methodType);
      opp.recordResult(won ? "L" : lost ? "W" : "D", f.methodType);
      const purse = won ? 2000 + P.f.wins * 800 : 600;
      this.money += Math.round(purse * 0.3);
      C.earnings += Math.round(purse * 0.3);
      P.rest = 4;
      C.last = { name: P.f.displayName(), text: (won ? "WON" : lost ? "lost" : "drew") + " vs " + opp.displayName() + " — " + f.method,
        json: { ...f.toJson(), wc: this.weightClass, cardName: C.name + " fight night", slot: "Your prospect", division: this.division() } };
      let note = "";
      if (P.f.wins >= 5 && P.f.losses <= 1) {
        // good enough for the big show
        C.prospects.splice(i, 1);
        C.graduates.push(P.f.displayName() + " (" + P.f.record() + ")");
        const fee = 25000;
        this.money += fee;
        C.earnings += fee;
        this.fame = clamp(this.fame + 3, 0, 100);
        note = " The GFC signs " + P.f.lastName() + "! Your gym earns " + fmtMoney(fee) + ".";
        this.log(C.name + " sends " + P.f.displayName() + " to the GFC!");
      }
      this.coachWeek();
      this.log(C.name + ": " + C.last.name + " " + C.last.text + ".");
      return C.last.name + " " + C.last.text + "." + note;
    }
    throw new GameError("Unknown coaching action.");
  }

  coachingJson() {
    const C = this.coaching;
    if (!C) return null;
    return {
      name: C.name, earnings: C.earnings, graduates: C.graduates, last: C.last ? { name: C.last.name, text: C.last.text } : null,
      prospects: C.prospects.map((p, i) => ({ i, rest: p.rest, ...p.f.toJson() })),
    };
  }

  // ---------------------------------------------------------------- event cards
  // Like a UFC event: your fight is one bout on a numbered card (main event, co-main, main card,
  // prelims). Every other bout is a real simulated fight between ranked fighters that moves the
  // rankings and can change belts. Fight week brings a media day with the whole card; after the
  // main event the promotion hands out Fight of the Night, KO of the Night and Submission of the
  // Night bonuses.

  cardOrg() {
    const s = this.scheduled;
    if (s && s.contender) return "Contender Series";
    return this.gfc ? this.orgShort() : "Iron Cage";
  }

  /** Builds the card around your booked fight. */
  buildCard(o) {
    const me = this.me, org = this.cardOrg();
    this.eventNum ||= {};
    const num = (this.eventNum[org] = (this.eventNum[org] || { GFC: 212, "Contender Series": 0, "Iron Cage": 36 }[org] || 40 + nextInt(30)) + 1);
    const name = org === "Contender Series" ? "Contender Series: Week " + num : org + " " + num;
    const big = this.gfc && !o.contender;
    const total = o.contender ? 5 : !this.gfc ? 6 : this.orgShort() === "GFC" ? 12 : 10;
    const mainCount = o.contender ? 5 : !this.gfc ? 3 : 5;
    // where you sit on the card
    const r = big ? this.rankings.indexOf(me) : -1;
    let slot = o.title || o.kind === "main" ? 0 : big && r > 0 && r <= 5 ? 1 : big && r > 0 && r <= 12 ? 2 + nextInt(mainCount - 2) : mainCount + nextInt(total - mainCount);
    if (!big) slot = o.contender ? nextInt(total) : nextInt(total);
    const used = new Set([me, o.opp, this.rival].filter(Boolean));
    const bouts = [];
    const wcIdx = this.weightClass;
    const pick = (list, from, to) => {
      for (let tries = 0; tries < 12; tries++) {
        const i = from + nextInt(Math.max(1, to - from));
        const j = Math.min(list.length - 1, i + 1 + nextInt(2));
        const a = list[i], b = list[j];
        if (a && b && a !== b && !used.has(a) && !used.has(b)) return [a, b, i];
      }
      return null;
    };
    for (let k = 0; k < total; k++) {
      if (k === slot) {
        bouts.push({ player: true, a: me, b: o.opp, wc: wcIdx, division: this.division(), rounds: o.rounds, title: !!o.title });
        continue;
      }
      let a, b, wc = wcIdx, title = false;
      if (big) {
        // ranked fighters from across the promotion; the top of the card gets the top names
        const divs = this.classes().map((name, i) => ({ name, i, list: i === wcIdx ? this.rankings : (this.otherDivs || {})[name] || [] }))
          .filter((d) => d.list.length > 6);
        for (let tries = 0; tries < 10 && !a; tries++) {
          const d = pickOf(divs);
          const top = k <= 1;
          const canTitle = top && d.list[0] !== me && !this.heldBelts[d.name] && !(d.i === wcIdx && this.isChamp());
          const got = canTitle && rnd() < 0.7 ? (used.has(d.list[0]) ? null : (() => {
            const c = d.list.slice(1, 4).find((f) => !used.has(f) && f !== me);
            return c ? [d.list[0], c, 0] : null;
          })()) : pick(d.list, top ? 1 : k < mainCount ? 2 : 6, top ? 6 : k < mainCount ? 11 : d.list.length - 1);
          if (got) {
            [a, b] = got;
            wc = d.i;
            title = got[2] === 0 && canTitle;
          }
        }
      }
      if (!a) {
        // regional and Contender Series cards: local prospects around your level
        wc = Math.max(0, Math.min(this.classes().length - 1, wcIdx + nextInt(3) - 1));
        const lv = me.overall() - 4 + nextInt(8);
        a = Fighter.generate(lv, this.wcAdj(wc), this.gender || "M");
        b = Fighter.generate(lv + nextInt(5) - 2, this.wcAdj(wc), this.gender || "M");
        if (this.npcOverall) { pinFighter(a, this.npcOverall); pinFighter(b, this.npcOverall); }
      }
      used.add(a);
      used.add(b);
      bouts.push({ player: false, a, b, wc, division: this.classes()[wc], rounds: title || k === 0 ? 5 : 3, title });
    }
    const rv = this.rival;
    if (big && rv && rv !== o.opp) {
      const lists = [this.rankings, ...Object.values(this.otherDivs || {})];
      const L = lists.find((x) => x.includes(rv));
      const ri = L ? L.indexOf(rv) : -1;
      const foe = L && [L[ri + 1], L[ri - 1], L[ri + 2]].find((f) => f && f !== me && f !== o.opp && !bouts.some((b) => b.a === f || b.b === f));
      const k = bouts.findIndex((b, i) => !b.player && !b.title && i >= 2);
      if (foe && k >= 0) {
        const wc = L === this.rankings ? this.weightClass : this.classes().indexOf(Object.entries(this.otherDivs).find(([, v]) => v === L)[0]);
        bouts[k] = { player: false, a: rv, b: foe, wc, division: this.classes()[wc], rounds: 3, title: false, rival: true };
      }
    }
    for (const bt of bouts) {
      bt.aRec = bt.a.record();
      bt.bRec = bt.b.record();
    }
    const card = { name, org, mainCount, bouts, specialEvent: specialEventFor(org, num, !!o.title), media: this.mediaPlan(o, bouts) };
    o.card = card;
    this.lastCard = null;
    this.watching = null;
    return card;
  }

  /** Fight night: every other bout on the card is fought (the ones after yours stay hidden until you're done). */
  simulateCard() {
    const card = this.scheduled && this.scheduled.card;
    if (!card || card.simmed) return;
    card.simmed = true;
    const planOf = (f) => ({ Striker: "STRIKE", Wrestler: "WRESTLE", "Jiu-Jitsu": "SUBMIT" }[f.style] || "BALANCED");
    for (const bt of card.bouts) {
      if (bt.player) continue;
      const f = new Fight(bt.a, bt.b, bt.rounds, bt.title, 0, 0);
      f.org = card.org;
      f.specialEvent = card.specialEvent || null;
      if (bt.title) f.belt = { kind: "title", label: card.org + " " + bt.division + " championship", champ: "p" };
      for (let n = 0; !f.finished && n < 6; n++) f.simulateRound(rnd() < 0.7 ? planOf(bt.a) : "BALANCED", true);
      if (f.winner === "draw" && rnd() < 0.85) {
        // real draws are rare: a judge leans one way and it becomes a split decision
        f.winner = rnd() < 0.5 ? "player" : "opponent";
        f.method = "Split Decision";
        const last = f.logs[f.logs.length - 1];
        const fin = last && last[last.length - 1];
        if (fin) fin.text = fin.text.replace(/This one is a draw!/, "Winner by Split Decision: " + (f.winner === "player" ? bt.a : bt.b).displayName() + "!");
      }
      const w = f.winner === "player" ? bt.a : f.winner === "opponent" ? bt.b : null;
      const l = w === bt.a ? bt.b : w === bt.b ? bt.a : null;
      if (w) {
        w.recordResult("W", f.methodType);
        l.recordResult("L", f.methodType);
      } else {
        bt.a.recordResult("D", "DEC");
        bt.b.recordResult("D", "DEC");
      }
      bt.result = { winner: w === bt.a ? "a" : w === bt.b ? "b" : "draw", method: f.method, methodType: f.methodType, round: f.endRound, time: f.endTime,
        kd: f.p.totKd + f.o.totKd, sig: f.p.totSig + f.o.totSig, split: /Split|Majority/.test(f.method || "") };
      bt.json = { ...f.toJson(), wc: bt.wc };
      if (w) this.cardRankings(bt, w, l);
      if (bt.rival && w) {
        const rv = bt.a;
        if (w === rv) this.thread("rival", "them", pickOf(["Did you watch that? You're next. 👊", "Another one. Still waiting on you, " + this.me.lastName() + ".", "That's what I do. Sign the contract."]));
        this.log("Your rival " + rv.displayName() + (w === rv ? " wins " : " LOSES ") + "on " + card.name + " (" + f.method + ").");
      }
    }
  }

  /** A card result moves the rankings: an upset winner jumps the loser; a title fight can crown a new champion. */
  cardRankings(bt, w, l) {
    const lists = [[this.division(), this.rankings], ...Object.entries(this.otherDivs || {})];
    for (const [name, L] of lists) {
      const wi = L.indexOf(w), li = L.indexOf(l);
      if (li < 0) continue;
      if (wi < 0 || wi > li) {
        removeItem(L, w);
        L.splice(L.indexOf(l), 0, w);
      }
      if (bt.title && li === 0) {
        const how = "Beat " + l.lastName() + " by " + (bt.result.methodType === "KO" ? "KO/TKO" : bt.result.methodType === "SUB" ? "submission" : "decision") + " at " + (this.scheduled ? this.scheduled.card.name : "");
        if (L === this.rankings) this.recordChamp(w, how);
        else (this.lineage[name] ||= []).push({ name: w.displayName(), player: false, date: this.dateLabel(), how, interim: false, defenses: 0 });
        this.log((this.scheduled ? this.scheduled.card.name : "") + ": NEW " + name.toUpperCase() + " CHAMPION! " + w.displayName() + " def. " + l.lastName() + ".");
      } else if (bt.title) {
        if (L === this.rankings) this.addDefense();
        else {
          const lin = this.lineage[name] || [];
          if (lin.length) lin[lin.length - 1].defenses++;
        }
      }
      return;
    }
  }

  /** The night's bonuses, from every bout on the card (yours included). Returns your share. */
  cardAwards(card) {
    const secs = (b) => (b.result.round - 1) * 300 + (Number(String(b.result.time).split(":")[0]) * 60 + Number(String(b.result.time).split(":")[1] || 0));
    const done = card.bouts.filter((b) => b.result);
    const excite = (b) => b.result.sig * 0.6 + b.result.kd * 14 + (b.result.methodType === "DEC" ? (b.result.split ? 18 : 6) + b.rounds * 4 : Math.max(0, 22 - secs(b) / 60)) + (b.title ? 8 : 0) + rnd() * 8;
    const best = (list, score) => list.reduce((a, b) => (!a || score(b) > score(a) ? b : a), null);
    const fotn = best(done, excite);
    const kos = done.filter((b) => b.result.methodType === "KO"), subs = done.filter((b) => b.result.methodType === "SUB");
    const kotn = best(kos, (b) => -secs(b) + rnd() * 40 + b.result.kd * 20);
    const sotn = best(subs, (b) => -secs(b) + rnd() * 40);
    const amount = this.gfc ? Math.round(50000 * ((this.promo() || { pay: 1 }).pay)) : 2500;
    const name = (b, who) => (who === "a" ? b.a : b.b).displayName();
    const awards = [];
    if (fotn) awards.push({ award: "Fight of the Night", icon: "🔥", bout: card.bouts.indexOf(fotn), winners: [name(fotn, "a"), name(fotn, "b")], amount, both: true });
    if (kotn) awards.push({ award: "KO of the Night", icon: "💥", bout: card.bouts.indexOf(kotn), winners: [name(kotn, kotn.result.winner)], amount });
    if (sotn) awards.push({ award: "Submission of the Night", icon: "🔒", bout: card.bouts.indexOf(sotn), winners: [name(sotn, sotn.result.winner)], amount });
    card.awards = awards;
    const mine = [];
    for (const a of awards) {
      const b = card.bouts[a.bout];
      if (b.player && (a.both || b.result.winner === "a")) mine.push({ award: a.award, icon: a.icon, amount });
    }
    for (const a of awards) this.log(card.name + " bonus — " + a.award + ": " + a.winners.join(" & ") + " (" + fmtMoney(amount) + ")");
    return mine;
  }

  // ---------------------------------------------------------------- media day

  mediaPlan(o, bouts) {
    if (o.contender) return null;
    const qs = shuffle(MEDIA_Q.map((_, i) => i)).slice(0, 3);
    const quotes = [];
    for (const bt of bouts) {
      if (bt.player) continue;
      for (const [f, them] of [[bt.a, bt.b], [bt.b, bt.a]]) {
        const tone = rnd() < 0.35 ? "trash" : rnd() < 0.6 ? "confident" : "respect";
        quotes.push({ who: f.displayName(), vs: them.lastName(), text: fill(pickOf(MEDIA_NPC[tone]), them.lastName(), f.lastName()), tone });
      }
    }
    return { qs, quotes: shuffle(quotes).slice(0, 10), done: false, result: null };
  }

  mediaReady() {
    const s = this.scheduled;
    return !!(s && s.card && s.card.media && !s.card.media.done && s.weeks <= 1 && !this.fight);
  }

  /** Your answers at media day (one tone per question) and the face-off. */
  mediaDay(answers, faceoff) {
    const s = this.scheduled;
    if (!s || !s.card || !s.card.media) throw new GameError("There's no media day for this fight.");
    const M = s.card.media;
    if (M.done) throw new GameError("Media day is already done.");
    if (s.weeks > 1) throw new GameError("Media day is in fight week.");
    const tones = (answers || []).slice(0, 3).map((t) => (["respect", "confident", "trash"].includes(t) ? t : "confident"));
    while (tones.length < 3) tones.push("confident");
    if (!["nod", "stare", "shove"].includes(faceoff)) faceoff = "stare";
    const opp = s.opp, them = opp.lastName(), mine = this.me.lastName();
    const effects = [];
    const lines = M.qs.map((qi, k) => {
      const Q = MEDIA_Q[qi], t = tones[k];
      const reply = fill(pickOf(t === "trash" ? TT.REPLY_ANGRY : t === "respect" ? TT.REPLY_RESPECT : TT.REPLY_CALM), them, mine);
      return { q: fill(Q.q, them, mine), you: fill(Q[t], them, mine), them: reply, tone: t };
    });
    const n = (t) => tones.filter((x) => x === t).length;
    let fame = n("respect") + 2 * n("confident") + 3 * n("trash") + Math.floor(this.stars("manager") / 2);
    if (n("trash") >= 2) this.hype(2, 0.15, effects);
    else if (n("trash") === 1 || n("confident") >= 2) this.hype(1, 0.08, effects);
    let faceText;
    if (faceoff === "nod") {
      faceText = "You touch fists with " + them + " for the cameras. Class.";
      fame += 1;
    } else if (faceoff === "stare") {
      faceText = "Nose to nose. Neither of you blinks. The flashbulbs go crazy.";
      fame += 2;
    } else {
      faceText = "You SHOVE " + them + "! Security floods the stage!";
      fame += 5;
      s.oppBonus = Math.min(6, (s.oppBonus || 0) + 1);
      effects.push("Opponent is fired up (+1 on fight night)");
      if (rnd() < 0.35) {
        const fine = Math.max(500, Math.round(s.purse * 0.1));
        this.money -= fine;
        effects.push("The commission fines you " + fmtMoney(fine));
      }
    }
    if (opp === this.rival) {
      this.rivalHeat = Math.min(100, this.rivalHeat + n("trash") * 6 + (faceoff === "shove" ? 10 : 0));
      effects.push("Rivalry heat rises");
    }
    this.fame = clamp(this.fame + fame, 0, 100);
    effects.unshift("Fame +" + fame);
    M.done = true;
    M.result = { lines, faceText, effects };
    this.log(s.card.name + " media day: " + (faceoff === "shove" ? "a shove at the face-off!" : "the card faces off.") + ' "' + lines[lines.length - 1].you + '"');
    return null;
  }

  /** The bout you chose to watch, with everything the arena needs to replay it. */
  watchJson() {
    // "h0".."h2": a highlight-reel win; "c": your prospect's last fight
    if (typeof this.watching === "string") {
      if (this.watching === "c") return (this.coaching && this.coaching.last && this.coaching.last.json) || null;
      const h = (this.highlights || [])[Number(this.watching.slice(1))];
      return (h && h.json) || null;
    }
    const card = this.scheduled ? this.scheduled.card : this.lastCard;
    if (this.watching == null || !card) return null;
    const b = card.bouts[this.watching];
    const view = this.cardJson(card).bouts[this.watching];
    if (!b || !b.json || !view || !view.canWatch || (this.fight && !this.fight.finished)) return null;
    return { ...b.json, cardName: card.name, slot: view.slot, division: b.division };
  }

  cardJson(card) {
    if (!card) return null;
    const pIdx = card.bouts.findIndex((b) => b.player);
    const playerDone = pIdx >= 0 && !!card.bouts[pIdx].result;
    const slot = (i) => (i === 0 ? "Main event" : i === 1 ? "Co-main event" : i < card.mainCount ? "Main card" : "Prelims");
    const side = (f, rec) => {
      const w = this.whereIs(f);
      return { name: f.displayName(), last: f.lastName(), record: rec, country: f.country, rank: w.rank, id: f.id };
    };
    const M = card.media;
    return {
      name: card.name, org: card.org, specialEvent: card.specialEvent || null, done: playerDone, awards: playerDone ? card.awards || [] : null, simmed: !!card.simmed,
      media: M ? { done: M.done, ready: this.mediaReady(), questions: M.qs.map((qi) => ({ q: fill(MEDIA_Q[qi].q, this.scheduled ? this.scheduled.opp.lastName() : "", this.me.lastName()),
        respect: fill(MEDIA_Q[qi].respect, this.scheduled ? this.scheduled.opp.lastName() : "", this.me.lastName()),
        confident: fill(MEDIA_Q[qi].confident, this.scheduled ? this.scheduled.opp.lastName() : "", this.me.lastName()),
        trash: fill(MEDIA_Q[qi].trash, this.scheduled ? this.scheduled.opp.lastName() : "", this.me.lastName()) })),
        quotes: M.quotes, result: M.result } : null,
      bouts: card.bouts.map((b, i) => {
        const show = !!b.result && (b.player || i > pIdx || playerDone);
        const r = b.result;
        return {
          id: i, slot: slot(i), player: b.player, division: b.division, rounds: b.rounds, title: b.title, rival: !!b.rival,
          a: side(b.a, b.aRec), b: side(b.b, b.bRec),
          result: show ? { winner: r.winner, method: r.method, round: r.round, time: r.time } : null,
          canWatch: show && !!b.json,
        };
      }),
    };
  }

  // ---------------------------------------------------------------- weight classes

  changeDivision(wc) {
    if (this.retired) throw new GameError("Your career is over.");
    if (this.fight || this.scheduled) throw new GameError("You can't change divisions with a fight booked.");
    if (!(wc >= 0 && wc < this.classes().length) || Math.abs(wc - this.weightClass) !== 1) throw new GameError("You can only move one division at a time.");
    const wait = this.lastDivisionChange + DIVISION_COOLDOWN - this.week;
    if (wait > 0) throw new GameError("Your body needs time to adjust. Try again in " + wait + " weeks.");
    const me = this.me;
    const old = this.weightClass;
    const oldRank = this.gfc ? this.rankings.indexOf(me) : -1;
    if (this.gfc && oldRank === 0) this.heldBelts[this.classes()[old]] = { since: this.lastTitleWeek };
    for (const s of STATS) me.add(s, Fighter.weightAdj(this.wcAdj(wc), s) - Fighter.weightAdj(this.wcAdj(old), s));
    if (wc < old) me.add("cardio", -2);
    // the old division keeps its fighters; the new one picks up where you last saw it
    this.ensureDivs();
    const stash = this.rankings.filter((f) => f !== me && f !== this.rival);
    const stored = this.otherDivs[this.classes()[wc]] || null;
    delete this.otherDivs[this.classes()[wc]];
    this.otherDivs[this.classes()[old]] = stash;
    this.weightClass = wc;
    this.lastDivisionChange = this.week;
    addOnce(this.divisionsFought, this.classes()[wc]);
    this.buildDivision(stored);
    let note;
    this.offers = [];
    this.offersAge = 0;
    const held = this.heldBelts[this.classes()[wc]];
    if (this.gfc && held) {
      // back in a division whose belt you never gave up
      delete this.heldBelts[this.classes()[wc]];
      this.moveTo(me, 0);
      this.lastTitleWeek = held.since;
      this.recordChamp(me, "Returned as the reigning champion");
      this.generateOffers();
      note = "You're back — and still the " + this.classes()[wc] + " champion.";
    } else if (this.gfc && oldRank === 0) {
      this.log("Keeps the " + this.classes()[old] + " belt and moves to " + this.classes()[wc] + " to chase a second one!");
      this.offers.push(this.titleOffer(this.rankings[0]));
      const n = Object.keys(this.heldBelts).length + 1;
      note = "Champion vs champion! Win the " + this.classes()[wc] + " superfight and you're a " + beltWord(n).toLowerCase() + ". You keep your "
        + Object.keys(this.heldBelts).join(", ") + " belt" + (n > 2 ? "s" : "") + ".";
    } else {
      if (this.gfc && oldRank > 0 && oldRank <= 5) {
        this.rankings.splice(10, 0, me);
        this.trim();
      }
      this.generateOffers();
      note = this.gfc && this.rankings.includes(me) ? "Your reputation earns you the #" + this.rankings.indexOf(me) + " spot." : "You start unranked in the new division.";
    }
    if (this.rival && this.rankings.indexOf(this.rival) < 0 && this.gfc) {
      for (const s of STATS) this.rival.add(s, Fighter.weightAdj(this.wcAdj(wc), s) - Fighter.weightAdj(this.wcAdj(old), s));
      this.rankings.splice(Math.min(13, this.rankings.length), 0, this.rival);
      this.trim();
    }
    this.log("Moves " + (wc > old ? "up" : "down") + " to " + this.classes()[wc] + ".");
    return "Welcome to " + this.classes()[wc] + "! " + (wc < old ? "The weight cut costs some cardio. " : "More power, a little less speed. ") + note;
  }

  // ---------------------------------------------------------------- fight night

  startFight() {
    if (this.fight) return null;
    if (!this.fightNight()) throw new GameError("There's no fight tonight.");
    const s = this.scheduled;
    this.watching = null;
    if (s.card) {
      this.simulateCard();
      if (s.card.media && !s.card.media.done) {
        // a no-show at media day costs you
        const fine = Math.max(200, Math.round(s.purse * 0.05));
        this.money -= fine;
        s.card.media.done = true;
        this.log("Skipped " + s.card.name + " media day — fined " + fmtMoney(fine) + ".");
      }
    }
    this.pinOthers();
    this.fight = new Fight(this.me, s.opp, s.rounds, s.title, this.npcOverall ? 0 : s.oppBonus, this.stars("head"));
    this.fight.org = s.contender ? "Contender Series" : this.gfc ? this.orgShort() : "Iron Cage";
    const weighNote = this.weighIn();
    this.fight.specialEvent = s.card ? s.card.specialEvent || null : null;
    if (s.title) {
      const kind = s.kind || "title";
      const holder = (f) => this.rankings[0] === f || (kind === "interim" && this.interim === f);
      this.fight.belt = {
        kind,
        label: (kind === "interim" ? "interim " : kind === "unify" ? "undisputed " : "") + this.orgShort() + " " + this.division() + " championship",
        champ: holder(this.me) ? "p" : holder(s.opp) ? "o" : null,
      };
    }
    return "⚖️ Weigh-ins: " + weighNote;
  }

  fightRound(plan, touch = true) {
    if (!this.fight || this.fight.finished) throw new GameError("No fight in progress.");
    if (!PLANS[plan]) throw new GameError("Pick a game plan.");
    this.fight.simulateRound(plan, touch);
    if (this.fight.finished) this.resolveFight();
  }

  /** Hands-on mode: start the round, then one exchange at a time. */
  fightManualStart(touch = true) {
    if (!this.fight || this.fight.finished) throw new GameError("No fight in progress.");
    this.fight.startManualRound(touch);
  }

  fightManualTurn(action, quick = false) {
    if (!this.fight || this.fight.finished) throw new GameError("No fight in progress.");
    this.fight.manualTurn(action, quick);
    if (this.fight.finished) this.resolveFight();
  }

  closeFight() {
    if (this.fight && this.fight.finished) this.fight = null;
  }

  resolveFight() {
    const o = this.scheduled, f = this.fight, opp = o.opp, me = this.me;
    const res = f.winner === "player" ? "W" : f.winner === "opponent" ? "L" : "D";
    const won = res === "W", lost = res === "L";
    const finish = f.methodType !== "DEC";
    const vsRival = opp === this.rival;
    const oppRank = this.gfc ? this.rankings.indexOf(opp) : -1;
    const wasChamp = this.isChamp();

    me.recordResult(res, f.methodType);
    opp.recordResult(won ? "L" : lost ? "W" : "D", f.methodType);

    let pay = o.purse + (won ? o.winBonus : 0);
    // your bout joins the card's results, then the bonuses are handed out
    let bonuses = [];
    if (o.card) {
      const bt = o.card.bouts.find((b) => b.player);
      bt.result = { winner: won ? "a" : lost ? "b" : "draw", method: f.method, methodType: f.methodType, round: f.endRound, time: f.endTime,
        kd: f.p.totKd + f.o.totKd, sig: f.p.totSig + f.o.totSig, split: /Split|Majority/.test(f.method || "") };
      bt.json = { ...f.toJson(), wc: this.weightClass };
      bonuses = this.cardAwards(o.card);
      for (const b of bonuses) pay += b.amount;
      this.fame = clamp(this.fame + bonuses.length * 3, 0, 100);
      this.lastCard = o.card;
    }
    const perfBonus = bonuses.reduce((a, b) => a + b.amount, 0);
    this.bonusCount = (this.bonusCount || 0) + bonuses.length;
    const ppv = this.ppvFor(o, won);
    if (ppv && ppv.share) pay += ppv.share;
    if (won) this.addHighlight(f, o, oppRank, bonuses);
    this.money += pay;
    this.earnings += pay;

    const fameBefore = this.fame;
    if (won) this.fame += (this.gfc ? 5 : 2) + (finish ? 3 : 0) + (o.title ? 12 : 0) + (oppRank > 0 ? Math.floor((RANKED - oppRank) / 3) : 0) + (vsRival ? 5 : 0);
    else if (lost) this.fame -= f.methodType === "KO" ? 5 : 3;
    else this.fame += 1;
    let talkNote = "";
    if (o.talkLevel > 0 && won) {
      this.fame += 2 * o.talkLevel;
      talkNote = "You backed up the trash talk!";
    } else if (o.talkLevel > 0 && lost) {
      this.fame -= 2 * o.talkLevel;
      talkNote = "You ate your words.";
    }
    // refusing the glove touch is a promise: keep it and the fans love it, break it and they don't
    if (f.touch === "o") {
      this.fame += won ? 2 : lost ? -2 : 0;
      talkNote = (talkNote + (won ? " You refused the glove touch and backed it up." : lost ? " Refusing the glove touch didn't age well." : "")).trim();
    }
    this.fame = clamp(this.fame, 0, 100);

    let injuryNote = "";
    if (lost && f.methodType === "KO") {
      me.add("chin", -1.5);
      injuryNote = this.injure(4 + nextInt(5), "knockout loss");
    } else if (f.playerDamage() > 60) {
      injuryNote = this.injure(1 + nextInt(3), "fight damage");
    }
    this.energy = 30;
    for (let i = 0; i < 2; i++) {
      const stat = pickOf(STATS);
      me.add(stat, (0.5 + rnd()) * Math.max(0, 1 - me.get(stat) / 95) * 2);
    }

    // sponsor win bonuses (already paid out) show in the fight's payday
    pay += this.sponsorsAfterFight(won, lost, f.methodType);
    let careerNote = "";
    if (o.contender) {
      if (won) {
        this.gfc = true;
        this.org = "gfc";
        this.contractFights = 8;
        this.lastTitleWeek = this.week;
        careerNote = "The GFC president hands you a contract. Welcome to the big show!";
        this.log("SIGNED with the GFC after a win on the Contender Series!");
        if (this.rival && !this.rankings.includes(this.rival)) {
          this.rankings.splice(Math.min(14, this.rankings.length), 0, this.rival);
          this.trim();
          this.log("Your rival " + this.rival.displayName() + " is already in the GFC, ranked #" + this.rankings.indexOf(this.rival) + ". The rivalry goes big time.");
        }
      } else {
        this.regionalWins = 0;
        careerNote = "No contract this time. Rebuild on the regional circuit.";
      }
    } else if (!this.gfc) {
      if (won) this.regionalWins++;
    } else {
      careerNote = this.updateRankings(won, lost, opp, o.title, wasChamp, o.kind);
      if (this.contractFights > 0 && --this.contractFights === 0) {
        this.log("That's the last fight on your " + this.orgShort() + " contract. You're a free agent!");
        this.promoAge = 99;
      }
    }

    let rivalNote = "";
    if (vsRival) {
      rivalNote = won ? "You beat your rival!" : lost ? "Your rival gets the better of you." : "The rivalry goes on.";
      this.rivalFought(won, lost);
    } else if (lost && finish && !this.rival && this.weeksWithoutRival >= 12) {
      this.setRival(opp, 50, "wants the world to know who's better after beating you");
      this.rivalLosses = 1;
      rivalNote = opp.lastName() + " is your new nemesis.";
    }

    const resultWord = won ? "def." : lost ? "lost to" : "drew with";
    this.log(me.lastName() + " " + resultWord + " " + opp.displayName() + " — " + f.method + (finish ? " (R" + f.endRound + " " + f.endTime + ")" : "") + ".");

    this.history.unshift({
      date: this.dateLabel(), result: res, opponent: opp.displayName(), method: f.method, round: f.endRound, time: f.endTime,
      event: (o.contender ? "Contender Series" : !this.gfc ? "Iron Cage Regional" : this.orgShort() + (o.kind === "interim" ? " Interim Title Fight" : o.kind === "unify" ? " Title Unification"
        : o.title ? " Title Fight" : o.kind === "eliminator" ? " Title Eliminator" : o.kind === "main" ? " Main Event" : ""))
        + (vsRival ? " · Grudge" : "") + " · " + this.classes()[this.weightClass],
    });
    this.lastResult = {
      result: res, method: f.method, pay, perfBonus, bonuses, ppv, weighIn: o.weighIn || null, cardName: o.card ? o.card.name : null, fameDelta: this.fame - fameBefore,
      careerNote: [careerNote, rivalNote, talkNote].join(" ").trim(), injuryNote: injuryNote.trim(), record: me.record(),
    };
    this.scheduled = null;
    this.offersAge = this.gfc ? -4 : -2; // post-fight layoff before new offers arrive
    this.advanceWeek();
  }

  isChamp() { return this.gfc && this.rankings.length > 0 && this.rankings[0] === this.me; }

  updateRankings(won, lost, opp, title, wasChamp, kind) {
    const me = this.me, R = this.rankings, wcName = this.classes()[this.weightClass];
    kind = title ? kind || "title" : kind;
    if (title) this.nextInLine = false;
    if (kind === "eliminator") {
      this.nextInLine = won;
      if (won) this.log("Wins the title eliminator — next in line for a shot at the belt!");
    }
    if (kind === "interim") {
      if (won) {
        const defended = this.interim === me;
        this.interim = me;
        this.moveTo(me, 1);
        if (defended) {
          this.addDefense(true);
          return "And STILL interim champion! Unify the belts when the champ returns.";
        }
        this.recordChamp(me, "Won the interim title vs " + opp.lastName(), true);
        this.log("AND NEW! " + me.displayName() + " is the " + this.orgShort() + " interim " + wcName + " champion!");
        return "AND NEW " + this.orgShort().toUpperCase() + " INTERIM " + wcName.toUpperCase() + " CHAMPION! Next: unify the belts.";
      }
      if (lost) {
        this.interim = opp;
        this.moveTo(opp, 1);
        this.dropDown(me, 1);
        this.recordChamp(opp, "Won the interim title vs " + me.lastName(), true);
        const r = R.indexOf(me);
        return opp.lastName() + " takes the interim belt." + (r > 0 ? " You drop to #" + r + "." : "");
      }
      return "A draw — no interim champion crowned.";
    }
    if (kind === "unify") {
      this.interim = null;
      this.champOut = this.champOutStart = 0;
      if (wasChamp) {
        if (won) {
          this.titleDefenses++;
          this.lastTitleWeek = this.week;
          this.addDefense();
          this.log("UNDISPUTED! " + me.displayName() + " unifies the " + wcName + " belts.");
          return "And STILL — and UNDISPUTED! Title defense #" + this.titleDefenses + ".";
        }
        if (lost) {
          this.moveTo(opp, 0);
          this.dropDown(me, 1);
          this.recordChamp(opp, "Unified the belts vs " + me.lastName());
          this.log(opp.displayName() + " unifies the belts and takes your title.");
          return "The interim champion takes your belt.";
        }
        this.lastTitleWeek = this.week;
        return "A draw — the champion keeps the belt.";
      }
      if (won) {
        this.titlesWon++;
        addOnce(this.divisionsWon, wcName);
        this.moveTo(me, 0);
        this.lastTitleWeek = this.week;
        this.recordChamp(me, "Unified the belts vs " + opp.lastName());
        this.log("AND NEW! " + me.displayName() + " is the UNDISPUTED " + this.orgShort() + " " + wcName + " Champion!");
        return "AND NEW UNDISPUTED " + this.orgShort().toUpperCase() + " " + wcName.toUpperCase() + " CHAMPION!";
      }
      this.addDefense();
      this.dropDown(me, 1);
      const r = R.indexOf(me);
      return lost ? "The champion unifies the belts." + (r > 0 ? " You drop to #" + r + "." : "") : "A draw — the champion keeps the belt.";
    }
    if (won) {
      if (title) {
        this.lastTitleWeek = this.week;
        if (wasChamp) {
          this.titleDefenses++;
          this.addDefense();
          this.log("Successful title defense #" + this.titleDefenses + "!");
          return "And STILL champion! Title defense #" + this.titleDefenses + ".";
        }
        this.titlesWon++;
        addOnce(this.divisionsWon, wcName);
        this.moveTo(me, 0);
        if (this.interim === me) this.interim = null;
        this.recordChamp(me, "Beat " + opp.lastName());
        this.log("AND NEW! " + me.displayName() + " is the " + this.orgShort() + " " + wcName + " Champion!");
        const belts = Object.keys(this.heldBelts);
        const word = beltWord(belts.length + 1);
        if (belts.length) this.log(word.toUpperCase() + "! " + me.displayName() + " holds the " + [wcName, ...belts].join(", ") + " belts at the same time!");
        if (this.divisionsWon.length >= 2) this.log("History made: a " + this.divisionsWon.length + "-division GFC champion!");
        return belts.length ? "AND NEW — " + word.toUpperCase() + "! " + this.orgShort().toUpperCase() + " " + [wcName, ...belts].join(" & ").toUpperCase() + " CHAMPION!"
          : "AND NEW " + this.orgShort().toUpperCase() + " " + wcName.toUpperCase() + " CHAMPION!";
      }
      if (R.includes(opp)) {
        this.placeAbove(me, opp);
      } else if (!R.includes(me) && me.streak >= 2) {
        R.splice(Math.min(RANKED - 1, R.length), 0, me);
        this.trim();
      }
      const r = this.rankings.indexOf(me);
      return r > 0 ? "You're now ranked #" + r + " in the division." : "Still unranked — keep stacking wins.";
    }
    if (lost) {
      if (title && wasChamp) {
        this.placeAbove(opp, me);
        this.recordChamp(opp, "Beat " + me.lastName());
        this.log(opp.displayName() + " takes the belt.");
        return "You lost the belt.";
      }
      if (title) this.addDefense();
      if (R.includes(me)) {
        this.placeAbove(opp, me);
        this.dropDown(me, title ? 1 : 2);
      }
      const r = this.rankings.indexOf(me);
      return r > 0 ? "You drop to #" + r + "." : "You're outside the rankings.";
    }
    if (title && wasChamp) this.lastTitleWeek = this.week;
    return title ? "A draw — the champion keeps the belt." : "A draw doesn't move the needle.";
  }

  /** Moves winner directly above loser if winner isn't already ranked higher. */
  placeAbove(winner, loser) {
    const R = this.rankings;
    const li = R.indexOf(loser);
    if (li < 0) return;
    const wi = R.indexOf(winner);
    if (wi >= 0 && wi < li) return;
    if (wi >= 0) R.splice(wi, 1);
    R.splice(li, 0, winner);
    this.trim();
  }

  dropDown(f, spots) {
    const R = this.rankings;
    const i = R.indexOf(f);
    if (i < 0) return;
    R.splice(i, 1);
    if (i + spots < RANKED) R.splice(Math.min(i + spots, R.length), 0, f);
    this.refill();
  }

  trim() {
    while (this.rankings.length > RANKED) this.rankings.pop();
  }

  refill() {
    while (this.rankings.length < RANKED) {
      const f = this.gen(70 + nextInt(6) + (this.org ? this.orgLevel() : 0));
      f.age = 23 + nextInt(4);
      this.rankings.push(f);
    }
  }

  // ---------------------------------------------------------------- the calendar

  advanceWeek() {
    this.week++;
    this.energy = Math.min(100, this.energy + 15);
    this.money -= GYM_FEE[this.gym] + this.teamSalary();
    const staff = Object.values(this.team);
    if (this.money < 0 && staff.length && rnd() < 0.5) {
      const gone = staff.reduce((a, b) => (b.salary() > a.salary() ? b : a));
      delete this.team[gone.role];
      this.log(gone.name + " quit — paychecks stopped clearing.");
    }
    if (this.injuryWeeks > 0) this.injuryWeeks--;
    this.peakOverall = Math.max(this.peakOverall, this.me.overall());
    if ((this.week - 1) % 52 === 0) this.newYear();
    if (this.retired) return;
    this.npcWeek();
    this.otherDivsWeek();
    this.orgsWeek();
    this.beltWeek();
    this.lifeWeek();
    this.sponsorWeek();
    this.promoWeek();
    this.rivalWeek();
    if (++this.marketAge >= 8) this.refreshMarket();
    if (this.scheduled) {
      this.scheduled.weeks--;
      if (this.scheduled.weeks <= 0 && this.injuryWeeks > 0) {
        this.log("Withdrew from the fight vs " + this.scheduled.opp.displayName() + " due to injury.");
        this.fame = Math.max(0, this.fame - 3);
        this.scheduled = null;
        this.generateOffers();
      }
      if (this.scheduled && this.scheduled.weeks <= 0) this.simulateCard();
    } else {
      this.offersAge++;
      if (this.offersAge >= 0 && (this.offers.length === 0 || this.offersAge >= 4)) this.generateOffers();
    }
  }

  newYear() {
    const me = this.me;
    me.age++;
    this.log("Happy birthday! " + me.name + " turns " + me.age + ".");
    if (me.age >= 31) {
      const d = (me.age - 30) * 0.9;
      me.add("speed", -(d + rnd()));
      me.add("cardio", -(d * 0.8 + rnd()));
      me.add("power", -(d * 0.5 + rnd() * 0.5));
      me.add("chin", -(d * 0.6 + rnd() * 0.5));
      for (const s of ["striking", "wrestling", "grappling"]) me.add(s, -d * 0.3 * rnd());
      this.log("Father Time is undefeated — your physical attributes are declining.");
    }
    for (const f of [...this.rankings]) {
      if (f === me || f === this.rival) continue;
      f.age++;
      for (const s of STATS) {
        if (f.age <= 27) f.add(s, rnd() * 2.5);
        else if (f.age >= 32) f.add(s, -rnd() * 1.5);
      }
      if (f.age >= 37 && rnd() < 0.5 && (!this.scheduled || this.scheduled.opp !== f)) {
        removeItem(this.rankings, f);
        if (this.gfc) this.log(f.displayName() + " (" + f.record() + ") retires from the " + this.orgShort() + ".");
      }
    }
    const elsewhere = Object.values(this.orgDivs || {}).flatMap((D) => Object.values(D));
    for (const L of [...Object.values(this.otherDivs || {}), ...elsewhere]) {
      for (const f of [...L]) {
        if (f === this.rival) continue;
        f.age++;
        for (const s of STATS) {
          if (f.age <= 27) f.add(s, rnd() * 2.5);
          else if (f.age >= 32) f.add(s, -rnd() * 1.5);
        }
        if (f.age >= 37 && rnd() < 0.5) removeItem(L, f);
      }
    }
    if (this.rival) {
      this.rival.age++;
      if (this.rival.age >= 38 && rnd() < 0.5 && (!this.scheduled || this.scheduled.opp !== this.rival)) {
        if (this.rivalWins + this.rivalLosses > 0) this.rivalries.push(this.rivalSummary());
        this.log("Your rival " + this.rival.displayName() + " retires. The rivalry is over.");
        removeItem(this.rankings, this.rival);
        this.rival = null;
      }
    }
    this.refill();
    if (me.age >= 40 && !this.retired) {
      this.endCareer("At 40, " + me.name + " is forced to retire. Legacy: " + this.legacyTier() + ".");
    }
  }

  /** Ranked NPCs fight each other in the background. */
  npcWeek() {
    const R = this.rankings;
    if (rnd() > 0.35 || R.length < 4) return;
    const i = nextInt(R.length - 1);
    const j = Math.min(R.length - 1, i + 1 + nextInt(3));
    const a = R[i], b = R[j];
    if (a === this.me || b === this.me) return;
    if (this.interim === a || this.interim === b || (i === 0 && this.champOut)) return;
    if (this.scheduled && (a === this.scheduled.opp || b === this.scheduled.opp)) return;
    const pa = 1 / (1 + Math.exp((b.overall() - a.overall()) / 5));
    const w = rnd() < pa ? a : b, l = w === a ? b : a;
    const r = rnd();
    const m = r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC";
    w.recordResult("W", m);
    l.recordResult("L", m);
    if (w === b) this.placeAbove(b, a);
    if (i === 0 && this.gfc) {
      if (w === a) this.addDefense();
      else this.recordChamp(b, "Beat " + a.lastName() + " by " + (m === "KO" ? "KO/TKO" : m === "SUB" ? "submission" : "decision"));
    }
    if (this.gfc) {
      const how = m === "KO" ? "KO/TKO" : m === "SUB" ? "submission" : "decision";
      const tag = w === this.rival ? "Your rival " : l === this.rival ? "Your rival loses! " : "";
      if (i === 0) this.log(w === a ? "Champion " + a.displayName() + " defends the belt vs " + b.lastName() + " by " + how + "."
        : "UPSET! " + b.displayName() + " dethrones " + a.lastName() + " by " + how + " to become champion!");
      else this.log(this.orgShort() + ": " + tag + w.displayName() + " def. " + l.displayName() + " by " + how + ".");
    }
  }

  generateOffers() {
    this.offers = [];
    this.offersAge = 0;
    if (this.retired) return;
    const me = this.me, R = this.rankings, offers = this.offers;
    const ovr = me.overall();
    if (!this.gfc) {
      for (const off of [-6, 0, 6]) {
        const t = Math.max(26, Math.min(72, ovr + off + nextInt(5) - 2));
        const purse = this.managed(Math.round((300 + t * 10 + this.fame * 20 + Math.max(0, off) * 40) / 50) * 50);
        offers.push(new Offer(this.gen(t), 3 + nextInt(4), purse, purse, 3, false, false));
      }
      if (this.contenderEligible()) {
        const purse = this.managed(5000);
        offers.unshift(new Offer(this.gen(Math.max(57, ovr - 1)), 4, purse, purse, 3, false, true));
      }
    } else {
      const r = R.indexOf(me);
      const ic = this.interim && this.interim !== me && R.includes(this.interim) ? this.interim : null;
      if (r === 0) {
        if (ic) offers.push(this.titleOffer(ic, "unify"));
        else for (let i = 1; i <= 3 && i < R.length; i++) offers.push(this.titleOffer(R[i]));
      } else {
        if (this.interim === me) {
          // interim champion: unify when the champion is back, defend the interim belt meanwhile
          if (!this.champOutNow()) offers.push(this.titleOffer(R[0], "unify"));
          else {
            const next = R.find((f, i) => i > 0 && f !== me);
            if (next) offers.push(this.titleOffer(next, "interim"));
          }
        } else if (this.champOutNow() && !ic && (r === 1 || r === 2)) {
          offers.push(this.titleOffer(R.find((f, i) => i > 0 && i <= 3 && f !== me), "interim"));
        } else if (this.titleShotEligible() && !this.champOutNow() && !ic) {
          offers.push(this.titleOffer(R[0]));
        }
        if (r > 0 && this.interim !== me) {
          const pool = [];
          for (let i = Math.max(1, r - 3); i <= Math.min(R.length - 1, r + 3); i++) if (i !== r && R[i] !== ic) pool.push(i);
          shuffle(pool);
          // #2-#5 without a shot yet can fight another contender in a title eliminator
          if (r >= 2 && r <= 5 && !this.nextInLine && !this.titleShotEligible()) {
            const e = pool.findIndex((i) => i >= 1 && i <= 5);
            if (e >= 0) offers.push(this.gfcOffer(R[pool.splice(e, 1)[0]], "eliminator"));
          }
          for (let k = 0; offers.length < 3 && k < pool.length; k++) offers.push(this.gfcOffer(R[pool[k]]));
        } else {
          if (me.streak >= 1 || this.fame >= 40) offers.push(this.gfcOffer(R[Math.min(R.length - 1, 12 + nextInt(4))]));
          while (offers.length < 3) offers.push(this.gfcOffer(this.gen(62 + nextInt(6) + this.orgLevel())));
        }
      }
    }
    // a heated rivalry turns into a grudge match offer
    const rival = this.rival;
    if (rival && this.rivalHeat >= GRUDGE_HEAT && this.week - this.lastRivalFight >= GRUDGE_GAP && !offers.some((o) => o.opp === rival)) {
      let base;
      if (!this.gfc) {
        const p = this.managed(800 + this.fame * 30);
        base = new Offer(rival, 4 + nextInt(3), p, p, 3, false, false);
      } else {
        const rr = R.indexOf(rival), mr = R.indexOf(me);
        if (mr === 0) base = rr > 0 ? this.titleOffer(rival) : null; // defend the belt against the rival
        else if (rr === 0) base = mr > 0 && mr <= 5 ? this.titleOffer(rival) : null; // the rival holds the belt
        else base = this.gfcOffer(rival);
      }
      if (base && this.rivalWins === 1 && this.rivalLosses === 1) {
        // one win each: the rubber match headlines
        base.trilogy = true;
        if (!base.title && this.gfc) {
          base.kind = "main";
          base.rounds = 5;
        }
      }
      if (base) {
        if (!base.title) {
          base.purse = Math.round(base.purse * 1.5);
          base.winBonus = Math.round(base.winBonus * 1.5);
        }
        offers.unshift(base);
      }
    }
  }

  managed(purse) { return Math.round(purse * (1 + 0.05 * this.stars("manager"))); }

  gfcOffer(opp, kind = null) {
    const rank = this.rankings.indexOf(opp), mine = this.rankings.indexOf(this.me);
    let purse = this.managed((12000 + this.fame * 400 + (rank > 0 ? (RANKED - rank) * 3000 : 0)) * ((this.promo() || { pay: 1 }).pay));
    // two top contenders headline the card: five rounds, like a UFC main event
    if (!kind && rank > 0 && rank <= 5 && mine > 0 && mine <= 10) kind = "main";
    if (kind === "eliminator") purse = Math.round(purse * 1.5);
    const o = new Offer(opp, 6 + nextInt(5), purse, purse, kind === "main" ? 5 : 3, false, false);
    o.kind = kind;
    return o;
  }

  titleOffer(opp, kind = "title") {
    const purse = this.managed(((kind === "interim" ? 70000 : 100000) + this.fame * 1500 + this.titleDefenses * 25000) * ((this.promo() || { pay: 1 }).pay));
    const o = new Offer(opp, 8 + nextInt(5), purse, Math.trunc(purse / 2), 5, true, false);
    o.kind = kind;
    return o;
  }

  /** Like the UFC: the #1 contender, the winner of a title eliminator, or a top-5 fighter on a real run. */
  titleShotEligible() {
    const r = this.rankings.indexOf(this.me);
    return this.gfc && r > 0 && (r === 1 || this.nextInLine || (r <= 3 && this.me.streak >= 2) || (r <= 5 && this.me.streak >= 3)
      || (!!(this.contract && this.contract.titleClause) && r <= 12 && this.me.streak >= 2));
  }

  contenderEligible() {
    return !this.gfc && this.regionalWins >= CONTENDER_WINS && this.me.overall() >= CONTENDER_OVR;
  }

  // ---------------------------------------------------------------- legacy

  legacyScore() {
    const me = this.me;
    return me.wins * 2 + me.koWins + me.subWins + this.titlesWon * 30 + this.titleDefenses * 15 + Math.floor(this.fame / 2) - me.losses * 2
      + (this.divisionsWon.length >= 2 ? 60 : 0);
  }

  legacyTier() {
    const s = this.legacyScore();
    if (s >= 300) return "All-Time Great";
    if (s >= 200) return "Hall of Famer";
    if (s >= 120) return "Fan Favorite";
    if (s >= 60) return "Journeyman";
    return "Never Made It";
  }

  /** Snapshot of a finished career for the Hall of Fame. */
  hallOfFameEntry() {
    const me = this.me;
    return {
      name: me.displayName(), style: me.style, country: me.country, divisions: [...this.divisionsFought], record: me.record(),
      koWins: me.koWins, subWins: me.subWins, titlesWon: this.titlesWon, titleDefenses: this.titleDefenses,
      divisionsWon: [...this.divisionsWon], peakOverall: this.peakOverall, earnings: this.earnings, retiredAge: me.age,
      years: Math.floor((this.week - 1) / 52) + 1, rivalries: [...this.rivalries], legacyScore: this.legacyScore(),
      legacy: this.legacyTier(), inducted: this.legacyScore() >= 200,
    };
  }

  // ---------------------------------------------------------------- presentation

  dateLabel() {
    return "Y" + (Math.floor((this.week - 1) / 52) + 1) + " W" + (((this.week - 1) % 52) + 1);
  }

  log(s) {
    this.news.unshift(this.dateLabel() + " — " + s);
    while (this.news.length > 40) this.news.pop();
  }

  goal() {
    if (this.retired) return "Retired. Legacy: " + this.legacyTier() + ".";
    if (!this.gfc) {
      if (this.contenderEligible()) return "You've earned a Contender Series invite! Win it to sign with the GFC.";
      return "Earn a Contender Series invite: " + Math.min(this.regionalWins, CONTENDER_WINS) + "/" + CONTENDER_WINS
        + " regional wins and overall " + this.me.overall() + "/" + CONTENDER_OVR + ".";
    }
    const r = this.rankings.indexOf(this.me);
    const d = this.titleDefenses;
    if (r === 0) {
      const idle = this.week - this.lastTitleWeek;
      if (idle >= STRIP_WARN) return "Defend the belt within " + (STRIP_WEEKS - idle) + " weeks or the " + this.orgShort() + " will strip you!";
      if (this.interim && this.interim !== this.me) return "There's an interim champion. Unify the belts and prove who's the real champ.";
      const old = Object.entries(this.heldBelts).find(([, h]) => this.week - h.since >= STRIP_WARN);
      if (old) return "Your " + old[0] + " belt will be stripped in " + (STRIP_WEEKS - (this.week - old[1].since)) + " weeks — go back and defend it!";
      const n = Object.keys(this.heldBelts).length + 1;
      const two = n > 1;
      return (two ? beltWord(n) + " — " + n + " belts! " : "You're the champion! ") + "Defend the belt" + (this.divisionsWon.length < 2 && !two ? " — or move divisions and chase a second one." : ".")
        + " (" + d + " defense" + (d === 1 ? "" : "s") + ")";
    }
    if (this.interim === this.me) return this.champOutNow() ? "You're the interim champion. Defend it until the champ is healthy, then unify." : "The champion is back. Unify the belts!";
    if (this.champOutNow() && (r === 1 || r === 2)) return "The champion is injured — you're in line for the interim title fight!";
    if (this.nextInLine) return "You won the eliminator — the next title shot is yours.";
    if (r < 0) return "Win back-to-back fights or beat a ranked fighter to crack the " + this.orgShort() + " top 15.";
    if (this.titleShotEligible()) return "A title shot is on the table — take it!";
    if (r <= 5) return "You're #" + r + ". Win a title eliminator, reach #1, or go on a win streak for a title shot.";
    return "You're #" + r + ". Climb into the top 3 for a shot at the belt.";
  }

  offerJson(o, index) {
    return {
      index, opponent: o.opp.toJson(), oppRank: this.gfc ? this.rankings.indexOf(o.opp) : -1, weeks: o.weeks,
      purse: o.purse, winBonus: o.winBonus, rounds: o.rounds, title: o.title, contender: o.contender, kind: o.kind || null,
      grudge: o.opp === this.rival, oppBonus: o.oppBonus, oppId: o.opp.id, callout: !!o.callout, trilogy: !!o.trilogy,
      camp: o.camp || null, cut: o.cut || null, cutReady: o.weeks <= 1 && !o.cut, campReady: !o.camp && o.weeks > 0,
      cuts: Object.fromEntries(Object.entries(CUTS).map(([k, v]) => [k, v.text])),
    };
  }

  toJson() {
    const gym = this.gym;
    const team = {};
    for (const role of ROLES) {
      const s = this.team[role];
      team[role] = { ...(s ? s.toJson() : {}), role, title: Staff.title(role) };
    }
    let rival = null;
    if (this.rival) {
      rival = { ...this.rival.toJson(), id: this.rival.id, heat: this.rivalHeat, h2hWins: this.rivalWins, h2hLosses: this.rivalLosses,
        rank: this.gfc ? this.rankings.indexOf(this.rival) : -1 };
    }
    return {
      fighter: this.me.toJson(),
      weightClass: this.classes()[this.weightClass],
      gender: this.gender || "M", classes: this.classes(),
      weightClassIndex: this.weightClass,
      divisionCooldown: Math.max(0, this.lastDivisionChange + DIVISION_COOLDOWN - this.week),
      year: Math.floor((this.week - 1) / 52) + 1,
      week: ((this.week - 1) % 52) + 1,
      money: this.money, earnings: this.earnings, fame: this.fame, energy: this.energy, trainCost: this.trainCost(),
      injuryWeeks: this.injuryWeeks, peakOverall: this.peakOverall,
      gym: {
        level: gym, name: GYM_NAMES[gym], mult: GYM_MULT[gym], fee: GYM_FEE[gym],
        nextName: gym + 1 < GYM_NAMES.length ? GYM_NAMES[gym + 1] : null,
        nextCost: gym + 1 < GYM_NAMES.length ? GYM_COST[gym + 1] : null,
      },
      team,
      teamSalary: this.teamSalary(),
      market: this.market.map((s, i) => {
        const cur = this.team[s.role];
        return { ...s.toJson(), index: i, current: cur ? cur.name + " (" + cur.stars + "★)" : null };
      }),
      marketRefresh: 8 - this.marketAge,
      rival,
      rivalries: this.rivalries,
      canTalk: this.lastTalkWeek !== this.week && !this.retired && !this.fight,
      lastTalk: this.lastTalk,
      gfc: this.gfc,
      org: this.gfc ? this.orgShort() : "Iron Cage Regional",
      orgShort: this.gfc ? this.orgShort() : "GFC",
      orgName: this.promo() ? this.promo().name : "Iron Cage Regional",
      contractFights: this.contractFights || 0,
      promotions: PROMOTIONS.map((p) => ({ id: p.id, name: p.name, short: p.short, about: p.about, need: p.need, fights: p.fights, pay: p.pay,
        current: p.id === this.org, ready: this.meetsNeed(p) })),
      promoOffers: (this.promoOffers || []).map((o) => ({ ...o })),
      progress: { fame: this.fame, wins: this.me.wins, ovr: this.me.overall() },
      rank: this.gfc ? this.rankings.indexOf(this.me) : -1,
      regionalWins: this.regionalWins, titlesWon: this.titlesWon, titleDefenses: this.titleDefenses,
      divisionsWon: [...this.divisionsWon], retired: this.retired, legacy: this.legacyTier(), legacyScore: this.legacyScore(),
      goal: this.goal(),
      offers: this.offers.map((o, i) => this.offerJson(o, i)),
      scheduled: this.scheduled ? this.offerJson(this.scheduled, -1) : null,
      fightNight: this.fightNight(),
      card: this.cardJson(this.scheduled ? this.scheduled.card : this.lastCard),
      legacyReel: this.legacyJson(), coaching: this.coachingJson(), contract: this.contract || null,
      watch: this.watchJson(),
      divisions: this.divisionsJson(PROMOTIONS.some((p) => p.id === this.viewOrg) ? this.viewOrg : this.orgKey()),
      viewOrg: PROMOTIONS.some((p) => p.id === this.viewOrg) ? this.viewOrg : this.orgKey(),
      orgKey: this.orgKey(),
      profile: this.profileJson(this.viewing),
      lastMeet: this.lastMeet || null,
      rankings: this.rankings.map((f, i) => ({ id: f.id, rank: i, name: f.displayName(), record: f.record(), overall: f.overall(),
        style: f.style, player: f === this.me, rival: f === this.rival, interim: f === this.interim })),
      belt: this.gfc ? {
        division: this.division(),
        champion: this.rankings[0] ? this.rankings[0].displayName() : null,
        interim: this.interim ? this.interim.displayName() : null,
        interimIsMe: this.interim === this.me,
        champInjured: this.champOutNow() ? this.champOut - this.week : 0,
        idle: this.isChamp() ? this.week - this.lastTitleWeek : null,
        stripWeeks: STRIP_WEEKS, stripWarn: STRIP_WARN,
        held: Object.keys(this.heldBelts),
        heldIdle: Object.values(this.heldBelts).map((h) => this.week - h.since),
        nextInLine: this.nextInLine,
        lineage: (this.lineage[this.division()] || []).slice(-15).reverse(),
      } : null,
      news: this.news,
      history: this.history,
      fight: this.fight ? this.fight.toJson() : null,
      lastResult: this.lastResult,
      life: this.lifeJson(),
    };
  }
}
Career.tag = "Career";

// ------------------------------------------------------------------ saving: object graph <-> JSON
// Fighters are shared between the rankings, offers, the rival and the fight, so they are
// stored once in a pool and referenced by id; class instances carry a "$c" tag.

const CLASSES = { Career, Offer, Staff, Fight, Corner };

export function packCareer(career) {
  const pool = {};
  const enc = (v) => {
    if (v instanceof Fighter) {
      if (!pool[v.id]) {
        // compact: stats as a list in STATS order (two decimals), empty and zero fields left out
        const o = {};
        for (const [k, x] of Object.entries(v)) if (k !== "id" && k !== "stats" && x !== null && x !== false && x !== "" && x !== 0) o[k] = x;
        o.s = STATS.map((k) => Math.round(v.get(k) * 100) / 100);
        pool[v.id] = o;
      }
      return { $f: v.id };
    }
    if (Array.isArray(v)) return v.map(enc);
    if (v && typeof v === "object") {
      const o = {};
      const tag = v.constructor && v.constructor.tag;
      if (tag && CLASSES[tag]) o.$c = tag;
      for (const k of Object.keys(v)) if (k !== "current") o[k] = enc(v[k]);
      return o;
    }
    return v;
  };
  const data = enc(career);
  return JSON.stringify({ v: 1, pool, data });
}

export function unpackCareer(text) {
  const { pool, data } = JSON.parse(text);
  const fighters = {};
  const blank = { nickname: "", wins: 0, losses: 0, draws: 0, koWins: 0, subWins: 0, decWins: 0, streak: 0, player: false, look: null };
  for (const id of Object.keys(pool)) {
    const f = Object.assign(Object.create(Fighter.prototype), blank, pool[id], { id });
    if (Array.isArray(f.s)) {
      // the compact form (older saves keep a stats object)
      f.stats = Object.fromEntries(STATS.map((k, i) => [k, f.s[i]]));
      delete f.s;
    }
    fighters[id] = f;
  }
  const dec = (v) => {
    if (Array.isArray(v)) return v.map(dec);
    if (v && typeof v === "object") {
      if (v.$f) return fighters[v.$f];
      const Cls = v.$c ? CLASSES[v.$c] : null;
      const o = Cls ? Object.create(Cls.prototype) : {};
      for (const k of Object.keys(v)) if (k !== "$c") o[k] = dec(v[k]);
      return o;
    }
    return v;
  };
  const c = dec(data);
  // a fight in progress keeps appending to its last round's log
  if (c.fight && c.fight.logs.length) c.fight.current = c.fight.logs[c.fight.logs.length - 1];
  return c;
}

// ------------------------------------------------------------------ the game API (formerly Main.java)

const MAX_SLOTS = 5;
const LOOK = /^\d{1,2}(,\d{1,2}){4,15}$/;

/**
 * Runs the game against a storage backend: { kind, getProfile, setProfile, getCareer, setCareer,
 * deleteCareer, getHallOfFame, addHallOfFame }. call(path, params) returns the UI state
 * synchronously and saves in the background.
 */
export class Game {
  constructor(store) {
    this.store = store;
    this.profile = { slots: [], active: null, claimed: [] };
    this.careers = new Map();
    this.hof = [];
  }

  async load() {
    const p = await this.store.getProfile();
    if (p && Array.isArray(p.slots)) {
      this.profile = { slots: p.slots.slice(0, MAX_SLOTS), active: p.active ?? null, claimed: Array.isArray(p.claimed) ? p.claimed : [] };
    }
    for (const cid of this.profile.slots) {
      try {
        const text = await this.store.getCareer(cid);
        if (text) this.careers.set(cid, unpackCareer(text));
      } catch (e) {
        console.warn("Save unreadable", cid, e);
      }
    }
    this.profile.slots = this.profile.slots.filter((cid) => this.careers.has(cid));
    if (!this.careers.has(this.profile.active)) this.profile.active = null;
    this.hof = await this.store.getHallOfFame();
    await this.claimGifts();
  }

  /** Ready-made careers left for this player (see store.getGifts) move into a free save slot once. */
  async claimGifts() {
    if (!this.store.getGifts) return;
    let added = false;
    for (const g of await this.store.getGifts()) {
      if (this.profile.claimed.includes(g.id) || this.profile.slots.length >= MAX_SLOTS) continue;
      try {
        const c = unpackCareer(g.save);
        const cid = newId();
        this.careers.set(cid, c);
        this.profile.slots.push(cid);
        this.profile.active = cid;
        this.profile.claimed.push(g.id);
        this.giftMessage = "A new fighter is ready: " + c.me.displayName() + ".";
        added = true;
      } catch (e) {
        console.warn("Gift unreadable", g.id, e);
      }
    }
    if (added) this.saveAll();
  }

  profileDoc() {
    return { slots: [...this.profile.slots], active: this.profile.active, claimed: [...this.profile.claimed] };
  }

  active() {
    return this.profile.active ? this.careers.get(this.profile.active) || null : null;
  }

  need(c) {
    if (!c) throw new GameError("Create a fighter first.");
    return c;
  }

  call(path, p = {}) {
    const prof = this.profile;
    let career = this.active();
    if (career) career.migrate(); // older saves predate some fields
    let msg = null;
    const int = (v) => (v === undefined || v === null || v === "" || isNaN(Number(v)) ? -1 : Math.trunc(Number(v)));
    let profileChanged = false;
    switch (path) {
      case "state":
        break;
      case "new": {
        if (prof.slots.length >= MAX_SLOTS) throw new GameError(`All ${MAX_SLOTS} save slots are full. Delete a save first.`);
        const c = this.newCareer(p);
        const cid = newId();
        prof.slots.push(cid);
        prof.active = cid;
        this.careers.set(cid, c);
        profileChanged = true;
        break;
      }
      case "action": msg = this.need(career).act(p.type, p.stat); break;
      case "accept": msg = this.need(career).accept(int(p.index)); break;
      case "upgrade": msg = this.need(career).upgradeGym(); break;
      case "fight/start": msg = this.need(career).startFight(); break;
      case "fight/round": this.need(career).fightRound(p.plan, p.touch !== false && p.touch !== "false"); break;
      case "fight/close": this.need(career).closeFight(); break;
      case "fight/manual": this.need(career).fightManualStart(p.touch !== false && p.touch !== "false"); break;
      case "fight/turn": this.need(career).fightManualTurn(p.action, !!p.quick); break;
      case "retire": msg = this.need(career).retire(); break;
      case "talk": msg = this.need(career).talk(p.target, p.tone); break;
      case "staff/hire": msg = this.need(career).hire(int(p.index)); break;
      case "staff/fire": msg = this.need(career).fire(p.role); break;
      case "division": msg = this.need(career).changeDivision(int(p.weightClass)); break;
      case "life": msg = this.need(career).lifeAction(p.type, p); break;
      case "edit": msg = this.need(career).editFighter(p); break;
      case "promo": msg = this.need(career).signPromotion(p.org); break;
      case "fighter/view": this.need(career).viewing = p.id || null; break;
      case "card/watch": this.need(career).watching = p.id === null || p.id === undefined || p.id === "" ? null : /^[hc]/.test(String(p.id)) ? String(p.id) : int(p.id); break;
      case "camp": msg = this.need(career).setCamp(p.kind); break;
      case "cut": msg = this.need(career).setCut(p.kind); break;
      case "negotiate": msg = this.need(career).negotiate(p.org, p.ask); break;
      case "gym/open": msg = this.need(career).openGym(p.name); break;
      case "coach": msg = this.need(career).coach(p.action, int(p.i), p.extra); break;
      case "card/media": msg = this.need(career).mediaDay(String(p.answers || "").split(",").filter(Boolean), p.faceoff); break;
      case "promo/view": this.need(career).viewOrg = p.id || null; break;
      case "fighter/meet": msg = this.need(career).meetFighter(p.id, p.type); break;
      case "save/blank":
        if (prof.slots.length >= MAX_SLOTS) throw new GameError(`All ${MAX_SLOTS} save slots are full. Delete a save first.`);
        prof.active = null;
        profileChanged = true;
        break;
      case "save/switch": {
        const cid = this.slot(int(p.slot));
        prof.active = cid;
        profileChanged = true;
        msg = "Loaded " + this.careers.get(cid).me.displayName() + ".";
        break;
      }
      case "save/import": {
        if (prof.slots.length >= MAX_SLOTS) throw new GameError(`All ${MAX_SLOTS} save slots are full. Delete a save first.`);
        let c;
        try {
          c = unpackCareer(String(p.text || ""));
          if (!c || !(c.me instanceof Fighter)) throw new Error("no fighter");
        } catch (e) {
          throw new GameError("That save code or file isn't a Cage Career 3D career.");
        }
        const cid = newId();
        prof.slots.push(cid);
        prof.active = cid;
        this.careers.set(cid, c);
        profileChanged = true;
        msg = "Loaded " + c.me.displayName() + ".";
        break;
      }
      case "save/delete": {
        const cid = this.slot(int(p.slot));
        const c = this.careers.get(cid);
        prof.slots = prof.slots.filter((x) => x !== cid);
        if (prof.active === cid) prof.active = null;
        this.careers.delete(cid);
        this.store.deleteCareer(cid);
        profileChanged = true;
        msg = c ? "Deleted " + c.me.displayName() + "." : "Save deleted.";
        break;
      }
      default:
        throw new GameError("Unknown action: " + path);
    }
    career = this.active();
    if (career) {
      career.migrate();
      career.pinOthers();
    }
    this.induct(career);
    if (path !== "state") {
      if (career) this.store.setCareer(prof.active, packCareer(career));
      if (profileChanged) this.store.setProfile(this.profileDoc());
    }
    return this.state(career, msg);
  }

  /** Write every save again (used when storage moves from the account to this browser). */
  saveAll() {
    this.store.setProfile(this.profileDoc());
    for (const [cid, c] of this.careers) this.store.setCareer(cid, packCareer(c));
  }

  /** The packed save of one slot, for exporting to a file or code. */
  exportSave(i) {
    return packCareer(this.careers.get(this.slot(i)));
  }

  slot(i) {
    if (i < 0 || i >= this.profile.slots.length) throw new GameError("That save slot doesn't exist.");
    return this.profile.slots[i];
  }

  newCareer(p) {
    const name = String(p.name || "").trim().replace(/\s+/g, " ");
    if (!name || name.length > 30) throw new GameError("Enter a name (1-30 characters).");
    const nick = String(p.nickname || "").trim();
    if (nick.length > 24) throw new GameError("Nickname is too long.");
    const gender = p.gender === "F" ? "F" : "M";
    const wc = Number(p.weightClass);
    if (!(Number.isInteger(wc) && wc >= 0 && wc < (gender === "F" ? WOMEN_CLASSES : WEIGHT_CLASSES).length)) throw new GameError("Pick a weight class.");
    if (!STYLES.includes(p.style)) throw new GameError("Pick a fighting style.");
    const country = COUNTRIES.includes(p.country) ? p.country : "USA";
    const c = new Career(name, nick, wc, p.style, country, gender);
    if (LOOK.test(p.look || "")) c.me.look = p.look;
    return c;
  }

  /** Retired careers go into the Hall of Fame exactly once. */
  induct(career) {
    if (!career || !career.retired || career.inducted) return;
    career.inducted = true;
    const entry = { ...career.hallOfFameEntry(), owner: this.profile.active };
    this.hof.push({ ...entry, mine: true });
    this.store.addHallOfFame(entry);
  }

  state(career, msg) {
    const m = { exists: !!career };
    if (career) Object.assign(m, career.toJson());
    m.weightClasses = WEIGHT_CLASSES;
    m.womenClasses = WOMEN_CLASSES;
    m.countries = COUNTRIES;
    m.saves = this.profile.slots.map((cid, i) => {
      const c = this.careers.get(cid);
      return {
        slot: i, active: cid === this.profile.active, name: c.me.displayName(), weightClass: c.classes()[c.weightClass],
        style: c.me.style, record: c.me.record(), overall: c.me.overall(), age: c.me.age, retired: c.retired,
      };
    });
    m.maxSaves = MAX_SLOTS;
    m.hallOfFame = [...this.hof].sort((a, b) => b.legacyScore - a.legacyScore);
    m.storage = this.store.kind;
    m.message = msg || this.giftMessage || null;
    this.giftMessage = null;
    return m;
  }
}
