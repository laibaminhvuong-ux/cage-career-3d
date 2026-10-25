// What gets said on fight night, as segments for audio.say(): each line has a delivery (mood), a pause
// before it and how loud the crowd gets. The cast: the arena announcer (build/hype/shout/tense), the
// referee (ref), the play-by-play man (call) and his color commentator (color), the fighter's coach
// (coach) and the cage-side interviewer (interview). Lines are picked from variants so no two fight
// nights sound the same.

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const spell = (label) => label.replace(/^GFC /i, "G F C ").replace(/ GFC /i, " G F C ");
const first = (c) => String(c.realName || c.name).split(" ")[0];
const last = (c) => {
  const n = String(c.realName || c.name).split(" ");
  return n[n.length - 1];
};
const full = (c) => (c.nickname ? `${first(c)} "${c.nickname}" ${last(c)}` : c.realName || c.name);

function record(r) {
  const [w, l, d] = String(r || "0-0-0").split("-").map(Number);
  return `${w} win${w === 1 ? "" : "s"}, ${l} loss${l === 1 ? "" : "es"}${d ? `, and ${d} draw${d === 1 ? "" : "s"}` : ""}`;
}

function introduce(c, corner, champ, belt) {
  const [w, l] = String(c.record || "0-0").split("-").map(Number);
  const lines = [
    { t: pick([`Fighting out of the ${corner} corner...`, `Introducing first... fighting out of the ${corner} corner...`, `And now... in the ${corner} corner...`]), mood: "build", gap: 600 },
    { t: `Hailing from ${c.country || "parts unknown"}... with a professional record of ${record(c.record)}...`, mood: "build" },
  ];
  if (l === 0 && w >= 5) lines.push({ t: pick(["Still... UNDEFEATED!", "Never been beaten!"]), mood: "hype", roar: 0.6 });
  if (champ && belt) lines.push({ t: `The reigning... the defending... ${spell(belt.label)} of the world!`, mood: "hype", roar: 0.7 });
  if (c.nickname) lines.push({ t: `${first(c)}... "${c.nickname}"...`, mood: "hype", roar: 0.5 });
  lines.push({ t: `${c.nickname ? last(c) : c.realName || c.name}!!!`, mood: "shout", roar: 1 });
  return lines;
}

/** The referee is introduced and gives the instructions in the center of the cage. */
function refereeCall(f) {
  const ref = f.referee || "Mario Delgado";
  return [
    { t: pick(["And the third man in the cage...", "Your referee for this bout...", "And the man in charge of the action tonight..."]), mood: "build", gap: 600 },
    { t: `${ref}!`, mood: "hype", roar: 0.4 },
    { t: pick([
      "Alright, fighters. We went over the rules in the back. Protect yourselves at all times. Obey my commands.",
      "You both know the rules. Intelligent defense at all times. When I say stop, you stop.",
      "Clean fight. Keep it legal. Protect yourselves at all times, and listen to my commands.",
    ]), mood: "ref", gap: 400 },
    { t: pick(["Touch gloves if you want to. Back to your corners... and let's go!", "Last chance to touch 'em. Let's have a great fight!", "Give the fans a show. Let's go!"]), mood: "ref" },
  ];
}

/** The walkout: "Ladies and gentlemen... IT'S TIME!", both fighters (champion last), then the referee. */
export function introCall(f, sponsors = []) {
  const belt = f.belt;
  const lines = [{ t: pick(["Ladies and gentlemen!", "Ladies and gentlemen... and fight fans all around the world!", "Live... from the GFC Arena!"]), mood: "build", roar: 0.35 }];
  if (sponsors.length) lines.push({ t: `Tonight's main attraction is brought to you by ${sponsors.slice(0, 2).join(" and ")}!`, mood: "build" });
  if (belt) lines.push({ t: `This contest is scheduled for five rounds... and it is for the ${spell(belt.label)} of the world!`, mood: "build", roar: 0.5 });
  else if (f.rounds === 5) lines.push({ t: pick(["This... is the main event of the evening! Five rounds!", "The moment you have all been waiting for... our five-round main event!"]), mood: "build", roar: 0.5 });
  else lines.push({ t: pick(["This contest is scheduled for three rounds!", "Three rounds... in the GFC octagon!"]), mood: "build" });
  lines.push({ t: "It's...", mood: "tense", gap: 400 }, { t: "TIME!!!", mood: "shout", gap: 300, roar: 1 });
  const pChamp = belt && belt.champ === "p", oChamp = belt && belt.champ === "o";
  const order = pChamp ? [["o", "blue"], ["p", "red"]] : oChamp ? [["p", "red"], ["o", "blue"]] : [["o", "blue"], ["p", "red"]];
  for (const [side, corner] of order) {
    lines.push(...introduce(side === "p" ? f.player : f.opponent, corner, belt && belt.champ === side, belt));
  }
  lines.push(...refereeCall(f));
  return lines;
}

export function roundCall(n, f) {
  const word = ["one", "two", "three", "four", "five"][n - 1] || n;
  if (n === f.rounds && f.rounds > 1) return [{ t: pick(["This is it! The FINAL round!", "Final round! Leave it all in there!", "Five minutes to decide it all. FINAL ROUND!"]), mood: "shout", roar: 0.9 }];
  return [{ t: `Round ${word}!`, mood: "hype", roar: 0.5 }];
}

/** The coach's advice in the corner between rounds, from how the last round went. */
export function cornerCall(f) {
  const P = f.player, O = f.opponent, D = last(O);
  const lines = [];
  if (P.health < 45) lines.push(pick(["Breathe! Breathe! You're taking too much damage. Hands UP!", `Look at me! You're getting tagged. Move your head, stop standing in front of ${D}.`]));
  else if (O.health < 45) lines.push(pick([`${D} is HURT! You've got this! Go get it this round!`, `That's it! ${D} is fading! Push the pace, finish this!`]));
  else lines.push(pick(["Good round. Stay loose, stick to the game plan.", "You're doing great. Jab more, set up the big shots.", `Listen to me. Feint, then go to the body. ${D} keeps dropping the hands.`]));
  if (P.stamina < 35) lines.push(pick(["Your gas tank's low. Pick your shots, don't waste energy.", "Big breaths. Slow your heart rate down."]));
  return [{ t: lines.join(" "), mood: "coach", gap: 300 }];
}

/** The official result. winner: "p", "o" or null for a draw. */
export function resultCall(f, winner) {
  const W = winner === "p" ? f.player : winner === "o" ? f.opponent : null;
  const belt = f.belt;
  const lines = [{ t: "Ladies and gentlemen...", mood: "tense", gap: 400 }];
  const method = String(f.method || "");
  if (f.methodType === "DEC" || !W) {
    lines.push({ t: pick([`After ${f.endRound || f.rounds} rounds... we go to the judges' scorecards!`, `${f.endRound || f.rounds} hard-fought rounds... it's in the hands of the judges!`]), mood: "build", roar: 0.4 });
    (f.cards || []).forEach((c, i) => {
      const [a, b] = c.split("-").map(Number);
      lines.push({ t: `${["Judge one", "Judge two", "And judge three"][i]} scores the contest... ${Math.max(a, b)} to ${Math.min(a, b)}...`, mood: "tense", gap: 250 });
    });
    if (!W) {
      lines.push({ t: "This contest... is declared... a DRAW!", mood: "shout", gap: 500, roar: 0.8 });
      if (belt) lines.push({ t: "And the champion keeps the belt!", mood: "hype" });
      return lines;
    }
    const how = /split/i.test(method) ? "split decision" : /majority/i.test(method) ? "majority decision" : "unanimous decision";
    lines.push({ t: `For the winner... by ${how}...`, mood: "tense", gap: 600 });
  } else {
    const time = f.endTime ? `${f.endTime.replace(":", " ")} of round ${f.endRound}` : `round ${f.endRound}`;
    lines.push({ t: `Referee ${f.referee || "Mario Delgado"} calls a stop to this contest at ${time}...`, mood: "build" });
    const how = f.methodType === "SUB" ? "submission" : /TKO/i.test(method) ? "technical knockout" : "knockout";
    lines.push({ t: `Declaring the winner... by ${how}...`, mood: "tense", gap: 400 });
  }
  if (belt) {
    const still = winner === belt.champ;
    lines.push({ t: still ? "AND STILL..." : "AND NEW...", mood: "shout", gap: 700, roar: 0.8 });
    lines.push({ t: `${spell(belt.label)}... ${full(W)}!!!`, mood: "shout", roar: 1 });
  } else {
    lines.push({ t: `${W.nickname ? `${first(W)}... "${W.nickname}"... ${last(W)}` : W.realName || W.name}!!!`, mood: "shout", gap: 600, roar: 1 });
  }
  return lines;
}

/** The cage-side interview with the winner. */
export function interviewCall(f, winner) {
  const W = winner === "p" ? f.player : winner === "o" ? f.opponent : null;
  if (!W) return [];
  const L = winner === "p" ? f.opponent : f.player;
  const belt = f.belt;
  const how = f.methodType;
  const lines = [{ t: pick([`${first(W)}, congratulations. Take me through that one.`, `${last(W)}! What a performance. How are you feeling right now?`, `Talk to me, ${first(W)}. What was the plan going in?`]), mood: "interview", gap: 900 }];
  const answer = how === "KO" ? pick([
    "I told everybody! We drilled that shot every single day in camp. When it lands, it's over!",
    `Respect to ${last(L)}, but I felt the power the first time I touched them. I knew it was coming.`,
    "Lights out! That's what I do. That's my job!",
  ]) : how === "SUB" ? pick([
    "Once I got my grips, it was over. Nobody escapes that!",
    "Everybody wanted to talk about my striking. I'm a black belt too! Tap, tap!",
    `${last(L)} made one mistake on the ground, and I made them pay.`,
  ]) : pick([
    "That was a war! Five minutes at a time, I just kept pushing.",
    `${last(L)} is tough, man. Really tough. But I wanted it more tonight.`,
    "I'm not happy I didn't finish it, but a win is a win. Back to the gym tomorrow.",
  ]);
  lines.push({ t: answer, mood: "fighter" });
  if (f.touch === "o" && winner === "p") lines.push({ t: "And about the glove touch? I don't touch gloves with people who talk trash. Simple.", mood: "fighter" });
  if (belt && winner === belt.champ) lines.push({ t: pick(["Who's next? Line them up! Nobody's taking this belt!", "This belt stays with me. Anyone who wants it, come and get it!"]), mood: "fighter", roar: 0.8 });
  else if (belt) lines.push({ t: pick(["I've dreamed about this since I was a kid. This belt is MINE now!", "Mom, I did it! I'm the champion of the WORLD!"]), mood: "fighter", roar: 1 });
  else lines.push({ t: pick(["GFC, give me a title shot! I'm ready!", "I want the best in the division next. Book it!", "Thank you to my team, my family, and all the fans. Let's GO!"]), mood: "fighter", roar: 0.6 });
  return lines;
}

/** The commentators' reaction to a moment (two voices), or null. */
export function reaction(e, f) {
  const who = e.side === "p" ? f.player : e.side === "o" ? f.opponent : null;
  const other = e.side === "p" ? f.opponent : f.player;
  const m = String(e.move || "").toLowerCase();
  const flashy = /spinning|cartwheel|rolling|tornado|superman|showtime|question|axe|flying|jumping|hook kick/.test(m);
  const call = (t) => ({ t, mood: "call" }), color = (t) => ({ t, mood: "color" });
  if (e.type === "info" && e.touch === "o") return [call(`${last(f.player)} refuses to touch gloves! Listen to that crowd!`), color("That's a message. This is personal.")];
  if (e.type === "info" && e.touch === "p") return [call(`${last(f.opponent)} leaves ${last(f.player)} hanging!`), color("Bad blood. You can feel it in the arena.")];
  if (!who) return null;
  const A = last(who), D = last(other);
  if (e.type === "kd") return [call(pick([`DOWN GOES ${D.toUpperCase()}! WHAT A SHOT!`, `${D.toUpperCase()} IS DOWN! ${A.toUpperCase()} DROPPED THEM!`])),
    color(pick(["Right on the button! You can't train your chin for that.", "That's the power we talked about before the fight!"]))];
  if (e.type === "big") return [call(flashy ? `OHHH! A ${m.toUpperCase()}! ${D} is HURT!` : `${D} is HURT! ${A} smells blood!`),
    color(pick([`${D} needs to tie up and survive right now.`, "The legs are gone! Watch the referee here!", "That one rattled the brain. Huge moment."]))];
  if (e.type === "strike" && flashy) return [call(pick([`Did you SEE that?! A ${m}!`, `A ${m}! Unbelievable athleticism!`])), color("You don't see that every day. That's highlight-reel stuff.")];
  if (e.type === "miss" && flashy && Math.random() < 0.6) return [call(`${A} goes for a ${m}... and misses!`), color("Swing and a miss, but you have to love the confidence!")];
  if (e.type === "stuff" && Math.random() < 0.4) return [call(pick([`Stuffed! Great takedown defense by ${A}!`, `${A} sprawls and shuts that down!`]))];
  if (e.type === "td" && /slam|suplex|judo/.test(m)) return [call(`WHAT A ${m.includes("slam") ? "SLAM" : m.includes("suplex") ? "SUPLEX" : "THROW"}! The crowd is on its feet!`),
    color("That's raw strength! You felt that one in the cheap seats.")];
  if (e.type === "sweep") return [call(`What a reversal! ${A} is on top now!`)];
  if (e.type === "subatt") return [call(`${A} has it locked in! ${D} is in serious trouble!`), color(pick(["That's deep! I don't know how you get out of that.", "Tap or nap. That's tight!"]))];
  if (e.type === "ground" && e.p === "back") return [call(`${A} takes the back! Here comes the choke!`)];
  if (e.type === "ground" && e.p === "mount") return [call(`Full mount! ${D} has to get out of there!`), color("Worst place to be in this sport.")];
  if (e.type === "info" && /survives/i.test(e.text || "")) return [call(`${A} is back up! What a chin!`), color("Heart of a champion right there.")];
  if (e.type === "gnp" && (e.n || 0) >= 3 && Math.random() < 0.5) return [call(`${A} is raining down shots!`), color(`${D} has to show the referee something!`)];
  return null;
}

/** Immediate calls when the fight ends, before the official result. */
export function finishShout(f, winner, doctor) {
  if (doctor) return "The doctor has seen enough! This fight is OVER!";
  if (f.methodType === "SUB") return `TAP! TAP! ${last(winner === "p" ? f.opponent : f.player)} taps! It's all over!`;
  if (f.methodType === "DEC" || !winner) return null;
  return pick(["IT'S ALL OVER!!! WHAT A FINISH!", "GOODNIGHT! IT'S OVER!", "THE REFEREE WAVES IT OFF! IT'S OVER!"]);
}
