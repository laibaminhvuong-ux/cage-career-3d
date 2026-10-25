// The game engine: a JavaScript port of the Java backend (Fighter, Staff, TrashTalk, Fight,
// Career and the API in Main), so the whole game runs in the browser with no server.
// Every action returns the same state object the Java API returned.

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
  static generate(target, wc) {
    const style = pickOf(STYLES);
    const name = pickOf(FIRST) + " " + pickOf(LAST);
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
    return f;
  }
  toJson() {
    return {
      name: this.name, nickname: this.nickname, displayName: this.displayName(), style: this.style,
      country: this.country, age: this.age, record: this.record(), overall: this.overall(),
      koWins: this.koWins, subWins: this.subWins, decWins: this.decWins, streak: this.streak,
      stats: { ...this.stats }, look: this.look,
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
// ground positions, worst to best for the fighter on top
const POSITIONS = ["guard", "half", "side", "mount", "back"];
const POS_TEXT = {
  half: " passes into half guard.", side: " passes to side control.", mount: " climbs to full mount!", back: " takes the back!",
  headlock: " snaps down into a front headlock.",
};

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
  }
  s(stat) { return Math.min(99, this.f.get(stat) + this.bonus); }
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
      look: this.f.look, realName: this.f.name, health: Math.max(0, 100 - this.damage), stamina: Math.max(0, this.stamina),
      sig: this.totSig, td: this.totTd, kd: this.totKd, plan: this.plan,
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
    this.clock = 0;
    this.oppNext = this.aiPlan(1);
  }
  get top() { return this.topTag === "p" ? this.p : this.topTag === "o" ? this.o : null; }
  set top(c) { this.topTag = c ? c.tag : null; }

  playerDamage() { return this.p.damage; }

  simulateRound(plan) {
    if (this.finished) throw new GameError("The fight is over.");
    this.round++;
    this.p.plan = plan;
    this.o.plan = this.oppNext;
    this.p.newRound();
    this.o.newRound();
    this.ground = false;
    this.top = null;
    this.pos = null;
    this.clock = 0;
    this.current = [];
    this.logs.push(this.current);
    this.ev("info", null, "Round " + this.round + " — touch gloves and let's go!");
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
    acc = acc * a.sf() + (counter ? 0.06 : 0) - (d.plan === "COUNTER" ? 0.05 : 0) + d.damage / 500;
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
    d.damage += dmg;
    a.dealt += dmg;
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
    if (move != null) e.move = move;
    if (landed > 0) e.n = landed;
    this.current.push(e);
  }

  toJson() {
    return {
      round: this.round, rounds: this.rounds, title: this.title, finished: this.finished, winner: this.winner,
      methodType: this.methodType, method: this.method, endRound: this.endRound, endTime: this.endTime,
      player: this.p.toJson(), opponent: this.o.toJson(), logs: this.logs, belt: this.belt || null,
      cards: this.finished ? this.cards() : null,
      scout: this.coachStars >= 3 && !this.finished ? this.oppNext : null,
      oppFiredUp: this.o.bonus > 0,
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
const PARTNER_NAMES = ["Linh", "Sofia", "Mia", "Chloe", "Ava", "Hana", "Lucia", "Maya", "Isabella", "Emma", "Yuki", "Amara", "Daniel", "Lucas",
  "Mateo", "Noah", "Kai", "Leo", "Ethan", "Minh Anh", "Thao", "Bao", "Camila", "Zara"];
const KID_NAMES = ["Max", "Luna", "Leo", "Mila", "Kai", "Nova", "An", "Bella", "Rocky", "Aria", "Tony", "Zoe", "Bao", "Lily"];
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
};
const fmtMoney = (n) => "$" + Math.round(n).toLocaleString("en-US");
function randomLookString() {
  return [nextInt(6), nextInt(9), nextInt(6), 0, nextInt(8)].join(",");
}

const addOnce = (arr, v) => { if (!arr.includes(v)) arr.push(v); };
const removeItem = (arr, v) => { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); };

export class Career {
  constructor(name, nickname, weightClass, style, country) {
    if (name === undefined) return; // restored from a save
    this.weightClass = weightClass;
    this.me = new Fighter(name, nickname, style, country, 21);
    this.me.player = true;
    for (const s of STATS) this.me.set(s, 38 + Fighter.bias(style, s) + Fighter.weightAdj(weightClass, s) + gauss() * 3);
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
    this.divisionsFought = [WEIGHT_CLASSES[weightClass]];
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
    const r = Fighter.generate(this.me.overall() + 1, weightClass);
    r.age = 21 + nextInt(2);
    r.wins = r.losses = r.draws = r.koWins = r.subWins = r.decWins = r.streak = 0;
    this.setRival(r, 30, "came up in the same amateur scene and has been telling everyone you're overrated");
    this.refreshMarket();
    this.generateOffers();
  }

  buildDivision() {
    this.rankings = [];
    for (let i = 0; i < RANKED; i++) this.rankings.push(Fighter.generate(88 - i * 1.2, this.weightClass));
    this.interim = null;
    this.champOut = this.champOutStart = 0;
    this.nextInLine = false;
    this.recordChamp(this.rankings[0], "Reigning champion");
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
      const kid = { name: pickOf(KID_NAMES), born: this.week, look: randomLookString() };
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
        L.candidate = { name: pickOf(PARTNER_NAMES), age: me.age - 3 + nextInt(7), look: randomLookString(), job: pickOf(JOBS), week: this.week };
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
        L.partner = { name: c.name, age: c.age, look: c.look, job: c.job, stage: "dating", affection: 35, since: this.week };
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
          return "Big night… but the photos leaked. Scandal! (−fame" + (L.partner ? ", " + L.partner.name + " is upset" : "") + ")";
        }
        return "What a night! VIP section, the whole city knows your name. (−20 energy)";
      }
      default:
        throw new GameError("Unknown life action.");
    }
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
      catalog: { houses: HOUSES, cars: CARS, pets: PETS, lifestyles: LIFESTYLES },
      weddingCost: [20000, 60000, 250000, 1500000][L.lifestyle], dateCost: [80, 400, 2500, 15000][L.lifestyle],
    };
  }

  /** Older saves predate the belt system and life outside the cage. */
  migrate() {
    if (!this.lifeState) {
      this.lifeState = {
        happiness: 60, followers: 200 + (this.fame || 0) * (this.fame || 0) * 20, house: 0, cars: [], driving: null, pets: [], partner: null,
        candidate: null, kids: [], tryingForKids: false, lifestyle: 1, feed: [], done: {}, exes: [],
      };
    }
    if (!this.heldBelts) this.heldBelts = {};
    if (!this.lineage) this.lineage = {};
    if (this.interim === undefined) this.interim = null;
    if (this.champOut === undefined) this.champOut = this.champOutStart = 0;
    if (this.nextInLine === undefined) this.nextInLine = false;
    if (!this.lastTitleWeek) this.lastTitleWeek = this.week || 1;
  }

  division() { return WEIGHT_CLASSES[this.weightClass]; }

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
        this.log("STRIPPED! The GFC takes your " + d + " belt after a year and a half without a defense.");
      }
    }
    if (this.interim && this.interim !== me && !R.includes(this.interim)) this.interim = null;
    const booked = (f) => this.scheduled && this.scheduled.opp === f;
    if (this.isChamp()) {
      const idle = this.week - this.lastTitleWeek;
      const titleBooked = this.scheduled && this.scheduled.title;
      if (titleBooked) return;
      if (idle >= STRIP_WEEKS) return this.strip();
      if (idle === STRIP_WARN) this.log("The GFC wants a title defense soon — go a year and a half without one and you'll be stripped.");
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
      this.log("Champion " + R[0].displayName() + " is injured and out for months. The GFC will crown an interim champion.");
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
    this.log("STRIPPED! The GFC takes the " + this.division() + " belt for inactivity. " + champ.displayName() + " is the new champion.");
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
        else f = Fighter.generate(me.overall() + 1, this.weightClass);
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
      this.log(rival.lastName() + ': "' + fill(pickOf(TT.CALLOUTS), me.lastName(), rival.lastName()) + '"');
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

  // ---------------------------------------------------------------- weight classes

  changeDivision(wc) {
    if (this.retired) throw new GameError("Your career is over.");
    if (this.fight || this.scheduled) throw new GameError("You can't change divisions with a fight booked.");
    if (!(wc >= 0 && wc < WEIGHT_CLASSES.length) || Math.abs(wc - this.weightClass) !== 1) throw new GameError("You can only move one division at a time.");
    const wait = this.lastDivisionChange + DIVISION_COOLDOWN - this.week;
    if (wait > 0) throw new GameError("Your body needs time to adjust. Try again in " + wait + " weeks.");
    const me = this.me;
    const old = this.weightClass;
    const oldRank = this.gfc ? this.rankings.indexOf(me) : -1;
    if (this.gfc && oldRank === 0) this.heldBelts[WEIGHT_CLASSES[old]] = { since: this.lastTitleWeek };
    for (const s of STATS) me.add(s, Fighter.weightAdj(wc, s) - Fighter.weightAdj(old, s));
    if (wc < old) me.add("cardio", -2);
    this.weightClass = wc;
    this.lastDivisionChange = this.week;
    addOnce(this.divisionsFought, WEIGHT_CLASSES[wc]);
    this.buildDivision();
    let note;
    this.offers = [];
    this.offersAge = 0;
    const held = this.heldBelts[WEIGHT_CLASSES[wc]];
    if (this.gfc && held) {
      // back in a division whose belt you never gave up
      delete this.heldBelts[WEIGHT_CLASSES[wc]];
      this.moveTo(me, 0);
      this.lastTitleWeek = held.since;
      this.recordChamp(me, "Returned as the reigning champion");
      this.generateOffers();
      note = "You're back — and still the " + WEIGHT_CLASSES[wc] + " champion.";
    } else if (this.gfc && oldRank === 0) {
      this.log("Keeps the " + WEIGHT_CLASSES[old] + " belt and moves to " + WEIGHT_CLASSES[wc] + " to chase a second one!");
      this.offers.push(this.titleOffer(this.rankings[0]));
      const n = Object.keys(this.heldBelts).length + 1;
      note = "Champion vs champion! Win the " + WEIGHT_CLASSES[wc] + " superfight and you're a " + beltWord(n).toLowerCase() + ". You keep your "
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
      for (const s of STATS) this.rival.add(s, Fighter.weightAdj(wc, s) - Fighter.weightAdj(old, s));
      this.rankings.splice(Math.min(13, this.rankings.length), 0, this.rival);
      this.trim();
    }
    this.log("Moves " + (wc > old ? "up" : "down") + " to " + WEIGHT_CLASSES[wc] + ".");
    return "Welcome to " + WEIGHT_CLASSES[wc] + "! " + (wc < old ? "The weight cut costs some cardio. " : "More power, a little less speed. ") + note;
  }

  // ---------------------------------------------------------------- fight night

  startFight() {
    if (this.fight) return null;
    if (!this.fightNight()) throw new GameError("There's no fight tonight.");
    const s = this.scheduled;
    this.pinOthers();
    this.fight = new Fight(this.me, s.opp, s.rounds, s.title, this.npcOverall ? 0 : s.oppBonus, this.stars("head"));
    if (s.title) {
      const kind = s.kind || "title";
      const holder = (f) => this.rankings[0] === f || (kind === "interim" && this.interim === f);
      this.fight.belt = {
        kind,
        label: (kind === "interim" ? "interim " : kind === "unify" ? "undisputed " : "") + "GFC " + this.division() + " championship",
        champ: holder(this.me) ? "p" : holder(s.opp) ? "o" : null,
      };
    }
    return null;
  }

  fightRound(plan) {
    if (!this.fight || this.fight.finished) throw new GameError("No fight in progress.");
    if (!PLANS[plan]) throw new GameError("Pick a game plan.");
    this.fight.simulateRound(plan);
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
    const perfBonus = won && finish && this.gfc;
    if (perfBonus) pay += 50000;
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

    let careerNote = "";
    if (o.contender) {
      if (won) {
        this.gfc = true;
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
      event: (o.contender ? "Contender Series" : o.kind === "interim" ? "GFC Interim Title Fight" : o.kind === "unify" ? "GFC Title Unification"
        : o.title ? "GFC Title Fight" : o.kind === "eliminator" ? "GFC Title Eliminator" : o.kind === "main" ? "GFC Main Event" : this.gfc ? "GFC" : "Iron Cage Regional")
        + (vsRival ? " · Grudge" : "") + " · " + WEIGHT_CLASSES[this.weightClass],
    });
    this.lastResult = {
      result: res, method: f.method, pay, perfBonus, fameDelta: this.fame - fameBefore,
      careerNote: [careerNote, rivalNote, talkNote].join(" ").trim(), injuryNote: injuryNote.trim(), record: me.record(),
    };
    this.scheduled = null;
    this.offersAge = this.gfc ? -4 : -2; // post-fight layoff before new offers arrive
    this.advanceWeek();
  }

  isChamp() { return this.gfc && this.rankings.length > 0 && this.rankings[0] === this.me; }

  updateRankings(won, lost, opp, title, wasChamp, kind) {
    const me = this.me, R = this.rankings, wcName = WEIGHT_CLASSES[this.weightClass];
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
        this.log("AND NEW! " + me.displayName() + " is the GFC interim " + wcName + " champion!");
        return "AND NEW GFC INTERIM " + wcName.toUpperCase() + " CHAMPION! Next: unify the belts.";
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
        this.log("AND NEW! " + me.displayName() + " is the UNDISPUTED GFC " + wcName + " Champion!");
        return "AND NEW UNDISPUTED GFC " + wcName.toUpperCase() + " CHAMPION!";
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
        this.log("AND NEW! " + me.displayName() + " is the GFC " + wcName + " Champion!");
        const belts = Object.keys(this.heldBelts);
        const word = beltWord(belts.length + 1);
        if (belts.length) this.log(word.toUpperCase() + "! " + me.displayName() + " holds the " + [wcName, ...belts].join(", ") + " belts at the same time!");
        if (this.divisionsWon.length >= 2) this.log("History made: a " + this.divisionsWon.length + "-division GFC champion!");
        return belts.length ? "AND NEW — " + word.toUpperCase() + "! GFC " + [wcName, ...belts].join(" & ").toUpperCase() + " CHAMPION!"
          : "AND NEW GFC " + wcName.toUpperCase() + " CHAMPION!";
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
      const f = Fighter.generate(70 + nextInt(6), this.weightClass);
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
    this.beltWeek();
    this.lifeWeek();
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
        if (this.gfc) this.log(f.displayName() + " (" + f.record() + ") retires from the GFC.");
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
      else this.log("GFC: " + tag + w.displayName() + " def. " + l.displayName() + " by " + how + ".");
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
        offers.push(new Offer(Fighter.generate(t, this.weightClass), 3 + nextInt(4), purse, purse, 3, false, false));
      }
      if (this.contenderEligible()) {
        const purse = this.managed(5000);
        offers.unshift(new Offer(Fighter.generate(Math.max(57, ovr - 1), this.weightClass), 4, purse, purse, 3, false, true));
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
          while (offers.length < 3) offers.push(this.gfcOffer(Fighter.generate(62 + nextInt(6), this.weightClass)));
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
    let purse = this.managed(12000 + this.fame * 400 + (rank > 0 ? (RANKED - rank) * 3000 : 0));
    // two top contenders headline the card: five rounds, like a UFC main event
    if (!kind && rank > 0 && rank <= 5 && mine > 0 && mine <= 10) kind = "main";
    if (kind === "eliminator") purse = Math.round(purse * 1.5);
    const o = new Offer(opp, 6 + nextInt(5), purse, purse, kind === "main" ? 5 : 3, false, false);
    o.kind = kind;
    return o;
  }

  titleOffer(opp, kind = "title") {
    const purse = this.managed((kind === "interim" ? 70000 : 100000) + this.fame * 1500 + this.titleDefenses * 25000);
    const o = new Offer(opp, 8 + nextInt(5), purse, Math.trunc(purse / 2), 5, true, false);
    o.kind = kind;
    return o;
  }

  /** Like the UFC: the #1 contender, the winner of a title eliminator, or a top-5 fighter on a real run. */
  titleShotEligible() {
    const r = this.rankings.indexOf(this.me);
    return this.gfc && r > 0 && (r === 1 || this.nextInLine || (r <= 3 && this.me.streak >= 2) || (r <= 5 && this.me.streak >= 3));
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
      if (idle >= STRIP_WARN) return "Defend the belt within " + (STRIP_WEEKS - idle) + " weeks or the GFC will strip you!";
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
    if (r < 0) return "Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.";
    if (this.titleShotEligible()) return "A title shot is on the table — take it!";
    if (r <= 5) return "You're #" + r + ". Win a title eliminator, reach #1, or go on a win streak for a title shot.";
    return "You're #" + r + ". Climb into the top 3 for a shot at the belt.";
  }

  offerJson(o, index) {
    return {
      index, opponent: o.opp.toJson(), oppRank: this.gfc ? this.rankings.indexOf(o.opp) : -1, weeks: o.weeks,
      purse: o.purse, winBonus: o.winBonus, rounds: o.rounds, title: o.title, contender: o.contender, kind: o.kind || null,
      grudge: o.opp === this.rival, oppBonus: o.oppBonus,
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
      rival = { ...this.rival.toJson(), heat: this.rivalHeat, h2hWins: this.rivalWins, h2hLosses: this.rivalLosses,
        rank: this.gfc ? this.rankings.indexOf(this.rival) : -1 };
    }
    return {
      fighter: this.me.toJson(),
      weightClass: WEIGHT_CLASSES[this.weightClass],
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
      org: this.gfc ? "GFC" : "Iron Cage Regional",
      rank: this.gfc ? this.rankings.indexOf(this.me) : -1,
      regionalWins: this.regionalWins, titlesWon: this.titlesWon, titleDefenses: this.titleDefenses,
      divisionsWon: [...this.divisionsWon], retired: this.retired, legacy: this.legacyTier(), legacyScore: this.legacyScore(),
      goal: this.goal(),
      offers: this.offers.map((o, i) => this.offerJson(o, i)),
      scheduled: this.scheduled ? this.offerJson(this.scheduled, -1) : null,
      fightNight: this.fightNight(),
      rankings: this.rankings.map((f, i) => ({ rank: i, name: f.displayName(), record: f.record(), overall: f.overall(),
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
      if (!pool[v.id]) pool[v.id] = { ...v, stats: { ...v.stats } };
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
  for (const id of Object.keys(pool)) fighters[id] = Object.assign(Object.create(Fighter.prototype), pool[id]);
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
const LOOK = /^\d(,\d){4}$/;

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
      case "fight/round": this.need(career).fightRound(p.plan); break;
      case "fight/close": this.need(career).closeFight(); break;
      case "retire": msg = this.need(career).retire(); break;
      case "talk": msg = this.need(career).talk(p.target, p.tone); break;
      case "staff/hire": msg = this.need(career).hire(int(p.index)); break;
      case "staff/fire": msg = this.need(career).fire(p.role); break;
      case "division": msg = this.need(career).changeDivision(int(p.weightClass)); break;
      case "life": msg = this.need(career).lifeAction(p.type, p); break;
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
    const wc = Number(p.weightClass);
    if (!(Number.isInteger(wc) && wc >= 0 && wc < WEIGHT_CLASSES.length)) throw new GameError("Pick a weight class.");
    if (!STYLES.includes(p.style)) throw new GameError("Pick a fighting style.");
    const country = COUNTRIES.includes(p.country) ? p.country : "USA";
    const c = new Career(name, nick, wc, p.style, country);
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
    m.countries = COUNTRIES;
    m.saves = this.profile.slots.map((cid, i) => {
      const c = this.careers.get(cid);
      return {
        slot: i, active: cid === this.profile.active, name: c.me.displayName(), weightClass: WEIGHT_CLASSES[c.weightClass],
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
