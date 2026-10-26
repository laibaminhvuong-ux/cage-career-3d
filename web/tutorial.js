// A step-by-step guided tour: dims the screen, spotlights one part of it and explains it. There is a
// tour for the career screen, for fight night and for the town. Each plays once (remembered in this
// browser), can be skipped at any step, and can be replayed from the ❓ buttons.

const TOURS = {
  career: [
    { title: "Welcome to Cage Career 3D! 🥊", text: "You're a young fighter with a dream. Want a quick tour of how everything works? You can skip it any time." },
    { sel: "#goal", title: "Your next goal", text: "This banner always tells you what to aim for next: regional wins, a Contender Series invite, a title shot, defending the belt…" },
    { sel: "#fighterCard", title: "Your fighter", text: "Your stats, record and badges. Stats grow with training and decline after 30. Tap ✏️ Edit any time to change your look, nickname, style, tattoos or face." },
    { sel: "#actionsCard", title: "This week", text: "Each action takes one week: train a stat, spar, rest to recover energy, do media for fame, or work for cash. Watch your energy and injuries." },
    { sel: "#fightCard", title: "Fight offers", text: "Accept a fight and you get a training camp of a few weeks. Tougher opponents pay more. Title fights are five rounds." },
    { sel: "#teamCard", title: "Your team", text: "Hire coaches to train faster, a physio to avoid injuries, and a manager for bigger purses." },
    { sel: "#sponsorCard", title: "Sponsors", text: "As your fame and following grow, brands offer deals: signing bonuses, weekly pay and win bonuses. Mind the clauses!" },
    { sel: "#rankCard", title: "Rankings & the belt", text: "Climb your promotion's rankings to earn a title shot. Champions must defend within 78 weeks or get stripped, and can hold belts in several divisions." },
    { sel: "#lifeBtn", title: "🌆 Life", text: "Step out into the 3D city: buy a house and cars, adopt pets, date, start a family, get tattoos and post on social media. Happiness makes you train better." },
    { sel: "[data-saves]", title: "Saves", text: "Every action saves automatically. Keep several fighters, export them, or load a career from a file or code." },
    { title: "You're ready!", text: "Win fights, chase the belt, and build a legend. Tap ❓ any time to see this again. Good luck, champ!" },
  ],
  fight: [
    { sel: "#fightHead", title: "Fight night", text: "Health and stamina drop live as the fight plays out. Low stamina weakens everything you throw." },
    { sel: ".touch-row", title: "Touch gloves?", text: "Before round one: touch gloves out of respect, or refuse. Refusing fires up your opponent, but backing it up wins fame." },
    { sel: ".mode-row", title: "Fight it yourself — or not", text: "🎮 Fight it yourself: call every exchange — attack, dodge or move — like a turn-based RPG. Read your opponent: a slip beats a punch, a check beats a leg kick, a sprawl beats a takedown. 📋 Game plan: pick a strategy and watch." },
    { sel: ".plans", title: "Game plan", text: "Pick a plan for each round: strike, wrestle, go for submissions, counter, or go all out. Your coach gives advice between rounds." },
    { sel: "#arenaStage", title: "Watch it happen", text: "Drag to look around the cage. The commentators call the action. Tap ⏭ Skip talk to skip the announcements, or change the speed." },
  ],
  world: [
    { sel: "#worldStage", title: "The city", text: "Tap the ground (or use WASD) to walk there. Hold Shift to run. Drag to look around." },
    { sel: "#worldHud", title: "Your life", text: "Cash, happiness, followers and energy. Happy fighters train up to 15% faster." },
    { sel: "[data-phone]", title: "📱 Phone", text: "Post once a week: training clips, flexes, family pics or a call-out. Followers bring fame and sponsor money." },
    { sel: "#worldBottom", title: "Places", text: "Walk up to a door and tap Enter: home, realtor, car dealer, pet shop, café, nightclub, Ink Studio, gym and the Arena. Own a car? Drive it!" },
    { sel: "[data-closeworld]", title: "Back to your career", text: "Tap 🥊 Career to return to training and fights." },
  ],
};

let active = null;

function seen(ctx) {
  try { return localStorage.getItem("cc3d_tour_" + ctx) === "1"; } catch { return false; }
}
function markSeen(ctx) {
  try { localStorage.setItem("cc3d_tour_" + ctx, "1"); } catch { /* storage blocked */ }
}

export function tourRunning() {
  return !!active;
}

/** Start a tour (once, unless force). */
export function startTour(ctx, force = false) {
  if (active || !TOURS[ctx] || (!force && seen(ctx))) return;
  const steps = TOURS[ctx].filter((s) => !s.sel || document.querySelector(s.sel));
  if (!steps.length) return;
  const root = document.createElement("div");
  root.className = "tut";
  root.innerHTML = `<div class="tut-spot"></div><div class="tut-bubble" role="dialog" aria-live="polite">
    <div class="tut-count"></div><h3></h3><p></p>
    <div class="btn-row"><button class="btn ghost small" data-tut="back">Previous</button><button class="btn primary small" data-tut="next">Next</button>
    <button class="btn ghost small" data-tut="skip">Skip tutorial</button></div></div>`;
  document.body.appendChild(root);
  active = { ctx, steps, i: 0, root };
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-tut]");
    if (!b) return;
    e.stopPropagation();
    const a = b.dataset.tut;
    if (a === "skip") return end();
    if (a === "back") active.i = Math.max(0, active.i - 1);
    if (a === "next") {
      if (active.i >= active.steps.length - 1) return end();
      active.i++;
    }
    show();
  });
  addEventListener("resize", place);
  addEventListener("scroll", place, true);
  show();
}

function end() {
  if (!active) return;
  markSeen(active.ctx);
  active.root.remove();
  removeEventListener("resize", place);
  removeEventListener("scroll", place, true);
  active = null;
}

function show() {
  const { steps, i, root } = active;
  const s = steps[i];
  root.querySelector(".tut-count").textContent = `${i + 1} / ${steps.length}`;
  root.querySelector("h3").textContent = s.title;
  root.querySelector("p").textContent = s.text;
  root.querySelector('[data-tut="back"]').disabled = i === 0;
  root.querySelector('[data-tut="next"]').textContent = i === steps.length - 1 ? "Let's go!" : i === 0 && !s.sel ? "Show me" : "Next";
  const el = s.sel && document.querySelector(s.sel);
  if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
  setTimeout(place, el ? 350 : 0);
}

function place() {
  if (!active) return;
  const s = active.steps[active.i];
  const spot = active.root.querySelector(".tut-spot"), bubble = active.root.querySelector(".tut-bubble");
  const el = s.sel && document.querySelector(s.sel);
  const vw = innerWidth, vh = innerHeight;
  if (!el) {
    spot.style.cssText = `left:${vw / 2}px;top:${vh / 2}px;width:0;height:0`;
    bubble.style.cssText = `left:${Math.max(12, vw / 2 - 170)}px;top:${Math.max(12, vh / 2 - 110)}px`;
    return;
  }
  const r = el.getBoundingClientRect();
  const pad = 6;
  spot.style.cssText = `left:${r.left - pad}px;top:${r.top - pad}px;width:${r.width + pad * 2}px;height:${r.height + pad * 2}px`;
  const bw = Math.min(340, vw - 24), bh = bubble.offsetHeight || 170;
  // tall things (cards, the 3D view): put the bubble beside them when there's room
  if (r.height > vh * 0.45) {
    const side = r.right + 14 + bw < vw ? r.right + 14 : r.left - bw - 14 > 0 ? r.left - bw - 14 : null;
    if (side !== null) {
      bubble.style.cssText = `left:${side}px;top:${Math.min(vh - bh - 12, Math.max(12, r.top + 20))}px;width:${bw}px`;
      return;
    }
  }
  let top = r.bottom + 14;
  if (top + bh > vh - 12) top = r.top - bh - 14;
  if (top < 12) top = Math.min(vh - bh - 12, Math.max(12, r.top + 12));
  const left = Math.min(vw - bw - 12, Math.max(12, r.left + r.width / 2 - bw / 2));
  bubble.style.cssText = `left:${left}px;top:${top}px;width:${bw}px`;
}
