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
      player: this.p.toJson(), opponent: this.o.toJson(), logs: this.logs,
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
  }
}
Offer.tag = "Offer";

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
    return 4.0 * GYM_MULT[this.gym] * this.staffMult(stat) * this.ageFactor() * Math.pow(Math.max(0.01, 1 - cur / 97.5), 1.6)
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
    for (const s of STATS) me.add(s, Fighter.weightAdj(wc, s) - Fighter.weightAdj(old, s));
    if (wc < old) me.add("cardio", -2);
    this.weightClass = wc;
    this.lastDivisionChange = this.week;
    addOnce(this.divisionsFought, WEIGHT_CLASSES[wc]);
    this.buildDivision();
    let note;
    this.offers = [];
    this.offersAge = 0;
    if (this.gfc && oldRank === 0) {
      this.log("Vacates the " + WEIGHT_CLASSES[old] + " belt to chase gold at " + WEIGHT_CLASSES[wc] + "!");
      this.offers.push(this.titleOffer(this.rankings[0]));
      note = "Champion vs champion! A superfight for the " + WEIGHT_CLASSES[wc] + " title is on the table.";
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
    this.fight = new Fight(this.me, s.opp, s.rounds, s.title, s.oppBonus, this.stars("head"));
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
      careerNote = this.updateRankings(won, lost, opp, o.title, wasChamp);
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
      event: (o.contender ? "Contender Series" : o.title ? "GFC Title Fight" : this.gfc ? "GFC" : "Iron Cage Regional")
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

  updateRankings(won, lost, opp, title, wasChamp) {
    const me = this.me, R = this.rankings, wcName = WEIGHT_CLASSES[this.weightClass];
    if (won) {
      if (title) {
        if (wasChamp) {
          this.titleDefenses++;
          this.log("Successful title defense #" + this.titleDefenses + "!");
          return "And STILL champion! Title defense #" + this.titleDefenses + ".";
        }
        this.titlesWon++;
        addOnce(this.divisionsWon, wcName);
        this.placeAbove(me, opp);
        this.log("AND NEW! " + me.displayName() + " is the GFC " + wcName + " Champion!");
        if (this.divisionsWon.length >= 2) this.log("History made: a " + this.divisionsWon.length + "-division GFC champion!");
        return "AND NEW GFC " + wcName.toUpperCase() + " CHAMPION!";
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
        this.log(opp.displayName() + " takes the belt.");
        return "You lost the belt.";
      }
      if (R.includes(me)) {
        this.placeAbove(opp, me);
        this.dropDown(me, title ? 1 : 2);
      }
      const r = this.rankings.indexOf(me);
      return r > 0 ? "You drop to #" + r + "." : "You're outside the rankings.";
    }
    return "A draw doesn't move the needle.";
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
    if (this.scheduled && (a === this.scheduled.opp || b === this.scheduled.opp)) return;
    const pa = 1 / (1 + Math.exp((b.overall() - a.overall()) / 5));
    const w = rnd() < pa ? a : b, l = w === a ? b : a;
    const r = rnd();
    const m = r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC";
    w.recordResult("W", m);
    l.recordResult("L", m);
    if (w === b) this.placeAbove(b, a);
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
      if (r === 0) {
        for (let i = 1; i <= 3 && i < R.length; i++) offers.push(this.titleOffer(R[i]));
      } else {
        if (this.titleShotEligible()) offers.push(this.titleOffer(R[0]));
        if (r > 0) {
          const pool = [];
          for (let i = Math.max(1, r - 3); i <= Math.min(R.length - 1, r + 3); i++) if (i !== r) pool.push(i);
          shuffle(pool);
          for (let k = 0; k < Math.min(3, pool.length); k++) offers.push(this.gfcOffer(R[pool[k]]));
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

  gfcOffer(opp) {
    const rank = this.rankings.indexOf(opp);
    const purse = this.managed(12000 + this.fame * 400 + (rank > 0 ? (RANKED - rank) * 3000 : 0));
    return new Offer(opp, 6 + nextInt(5), purse, purse, 3, false, false);
  }

  titleOffer(opp) {
    const purse = this.managed(100000 + this.fame * 1500 + this.titleDefenses * 25000);
    return new Offer(opp, 8 + nextInt(5), purse, Math.trunc(purse / 2), 5, true, false);
  }

  titleShotEligible() {
    const r = this.rankings.indexOf(this.me);
    return this.gfc && (r === 1 || (r > 1 && r <= 3 && this.me.streak >= 2));
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
    if (r === 0) return "You're the champion! Defend the belt" + (this.divisionsWon.length < 2 ? " — or move divisions and chase a second one." : ".")
      + " (" + d + " defense" + (d === 1 ? "" : "s") + ")";
    if (r < 0) return "Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.";
    if (this.titleShotEligible()) return "A title shot is on the table — take it!";
    if (r <= 3) return "You're #" + r + ". Get a 2-fight win streak (or reach #1) for a title shot.";
    return "You're #" + r + ". Climb into the top 3 for a shot at the belt.";
  }

  offerJson(o, index) {
    return {
      index, opponent: o.opp.toJson(), oppRank: this.gfc ? this.rankings.indexOf(o.opp) : -1, weeks: o.weeks,
      purse: o.purse, winBonus: o.winBonus, rounds: o.rounds, title: o.title, contender: o.contender,
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
        style: f.style, player: f === this.me, rival: f === this.rival })),
      news: this.news,
      history: this.history,
      fight: this.fight ? this.fight.toJson() : null,
      lastResult: this.lastResult,
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
