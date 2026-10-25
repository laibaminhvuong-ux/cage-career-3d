// What the announcer and the commentator say, as segments for audio.say(): each line has a delivery
// (mood), a pause before it and how loud the crowd gets. Built like a real fight-night broadcast.

const spell = (label) => label.replace(/^GFC /i, "G F C ").replace(/ GFC /i, " G F C ");
const first = (c) => String(c.realName || c.name).split(" ")[0];
const last = (c) => {
  const n = String(c.realName || c.name).split(" ");
  return n[n.length - 1];
};

function record(r) {
  const [w, l, d] = String(r || "0-0-0").split("-").map(Number);
  return `${w} win${w === 1 ? "" : "s"}, ${l} loss${l === 1 ? "" : "es"}${d ? `, and ${d} draw${d === 1 ? "" : "s"}` : ""}`;
}

function introduce(c, corner, champ, belt) {
  const lines = [
    { t: `Fighting out of the ${corner} corner...`, mood: "build", gap: 600 },
    { t: `Hailing from ${c.country || "parts unknown"}... with a professional record of ${record(c.record)}...`, mood: "build" },
  ];
  if (champ && belt) lines.push({ t: `The reigning... the defending... ${spell(belt.label)} of the world!`, mood: "hype", roar: 0.7 });
  if (c.nickname) lines.push({ t: `${first(c)}... "${c.nickname}"...`, mood: "hype", roar: 0.5 });
  lines.push({ t: `${c.nickname ? last(c) : c.realName || c.name}!!!`, mood: "shout", roar: 1 });
  return lines;
}

/** The walkout: "Ladies and gentlemen... IT'S TIME!", then both fighters, champion (or red corner) last. */
export function introCall(f) {
  const belt = f.belt;
  const lines = [{ t: "Ladies and gentlemen!", mood: "build", roar: 0.35 }];
  if (belt) lines.push({ t: `This contest is scheduled for five rounds... and it is for the ${spell(belt.label)} of the world!`, mood: "build", roar: 0.5 });
  else if (f.rounds === 5) lines.push({ t: "This... is the main event of the evening! Five rounds!", mood: "build", roar: 0.5 });
  else lines.push({ t: "This contest is scheduled for three rounds!", mood: "build" });
  lines.push({ t: "It's...", mood: "tense", gap: 400 }, { t: "TIME!!!", mood: "shout", gap: 300, roar: 1 });
  const pChamp = belt && belt.champ === "p", oChamp = belt && belt.champ === "o";
  const order = pChamp ? [["o", "blue"], ["p", "red"]] : oChamp ? [["p", "red"], ["o", "blue"]] : [["o", "blue"], ["p", "red"]];
  for (const [side, corner] of order) {
    lines.push(...introduce(side === "p" ? f.player : f.opponent, corner, belt && belt.champ === side, belt));
  }
  return lines;
}

export function roundCall(n, f) {
  const word = ["one", "two", "three", "four", "five"][n - 1] || n;
  if (n === f.rounds && f.rounds > 1) return [{ t: "This is it! The FINAL round!", mood: "shout", roar: 0.9 }];
  return [{ t: `Round ${word}!`, mood: "hype", roar: 0.5 }];
}

/** The official result. winner: "p", "o" or null for a draw. */
export function resultCall(f, winner) {
  const W = winner === "p" ? f.player : winner === "o" ? f.opponent : null;
  const belt = f.belt;
  const lines = [{ t: "Ladies and gentlemen...", mood: "tense", gap: 400 }];
  const method = String(f.method || "");
  if (f.methodType === "DEC" || !W) {
    lines.push({ t: `After ${f.endRound || f.rounds} rounds... we go to the judges' scorecards!`, mood: "build", roar: 0.4 });
    (f.cards || []).forEach((c, i) => {
      const [a, b] = c.split("-").map(Number);
      const hi = Math.max(a, b), lo = Math.min(a, b);
      lines.push({ t: `${["Judge one", "Judge two", "And judge three"][i]} scores the contest... ${hi} to ${lo}...`, mood: "tense", gap: 250 });
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
    lines.push({ t: `The referee calls a stop to this contest at ${time}...`, mood: "build" });
    const how = f.methodType === "SUB" ? "submission" : /TKO/i.test(method) ? "technical knockout" : "knockout";
    lines.push({ t: `Declaring the winner... by ${how}...`, mood: "tense", gap: 400 });
  }
  if (belt) {
    const still = winner === belt.champ;
    lines.push({ t: still ? "AND STILL..." : "AND NEW...", mood: "shout", gap: 700, roar: 0.8 });
    lines.push({ t: `${spell(belt.label)}... ${W.nickname ? `${first(W)} "${W.nickname}" ${last(W)}` : W.realName || W.name}!!!`, mood: "shout", roar: 1 });
  } else {
    lines.push({ t: `${W.nickname ? `${first(W)}... "${W.nickname}"... ${last(W)}` : W.realName || W.name}!!!`, mood: "shout", gap: 600, roar: 1 });
  }
  return lines;
}

/** The commentator's reaction to a moment, or null. */
export function reaction(e, f) {
  const who = e.side === "p" ? f.player : e.side === "o" ? f.opponent : null;
  const other = e.side === "p" ? f.opponent : f.player;
  const m = String(e.move || "").toLowerCase();
  const flashy = /spinning|cartwheel|rolling|tornado|superman|showtime|question|axe|flying|jumping|hook kick/.test(m);
  if (e.type === "info" && e.touch === "o") return `${last(f.player)} refuses to touch gloves! Listen to that crowd!`;
  if (e.type === "info" && e.touch === "p") return `${last(f.opponent)} leaves ${last(f.player)} hanging! There's bad blood here!`;
  if (!who) return null;
  if (e.type === "kd") return `DOWN GOES ${last(other).toUpperCase()}! WHAT A SHOT!`;
  if (e.type === "big") return flashy ? `OHHH! A ${m.toUpperCase()}! ${last(other)} is HURT!` : `${last(other)} is HURT! ${last(who)} smells blood!`;
  if (e.type === "strike" && flashy) return `Did you SEE that?! A ${m}!`;
  if (e.type === "td" && /slam|suplex|judo/.test(m)) return `WHAT A ${m.includes("slam") ? "SLAM" : m.includes("suplex") ? "SUPLEX" : "THROW"}! The crowd is on its feet!`;
  if (e.type === "subatt") return `${last(who)} has it locked in! ${last(other)} is in serious trouble!`;
  if (e.type === "ground" && e.p === "back") return `${last(who)} takes the back! Here comes the choke!`;
  if (e.type === "ground" && e.p === "mount") return `Full mount! ${last(other)} has to get out of there!`;
  return null;
}

/** Immediate calls when the fight ends, before the official result. */
export function finishShout(f, winner, doctor) {
  if (doctor) return "The doctor has seen enough! This fight is OVER!";
  if (f.methodType === "SUB") return "TAP! TAP! He taps! It's all over!".replace("He taps", `${last(winner === "p" ? f.opponent : f.player)} taps`);
  if (f.methodType === "DEC" || !winner) return null;
  return "IT'S ALL OVER!!! WHAT A FINISH!";
}
