// Presentation controller: never sends a gameplay action while replaying or skipping entrances.
import * as audio from "./audio.js";
import { walkoutPreferences, npcWalkout, clipContext } from "./fightfeatures.js";
const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const $ = id => document.getElementById(id);
export function createFightPresentation(ui) {
  let walkout = null, replaying = false, token = 0, wake = null, rate = 0.5;
  const controller = {
    get walkout() { return walkout; }, get replaying() { return replaying; },
    controlsHtml() {
      if (walkout) {
        const p = walkout.phase;
        return `<div class="feature-note"><b>${p ? `${p.index}/2 · ${p.side === "p" ? "Red" : "Blue"} corner — ${esc(p.name)}` : "Fighters entering"}</b><p>Both fighters enter before the bell.</p><button class="btn primary big" data-skipwalkout>Skip walkouts ▶▶</button></div>`;
      }
      if (replaying) return `<div class="replay-controls"><b>↶ REPLAY</b><span>Fight and corner clock paused</span><div class="btn-row"><button class="btn small ${rate === 0.5 ? "gold" : ""}" data-replayrate="0.5">½×</button><button class="btn small ${rate === 1 ? "gold" : ""}" data-replayrate="1">1×</button><button class="btn primary" data-stopreplay>Stop replay / return</button></div></div>`;
      return null;
    },
    cancelWalkouts() {
      const old = walkout; walkout = null;
      if (!old) return;
      old.timers.forEach(clearTimeout); old.banner.remove();
      ui.getStage()?.arena.walkouts.stop(false); old.resolve(false);
    },
    skipWalkouts() { const stage = ui.getStage(); if (stage && walkout) stage.arena.skipWalkouts(); else walkout?.finish(); },
    runWalkouts(fight, spectator = false) {
      controller.cancelWalkouts();
      return new Promise(resolve => {
        const banner = document.createElement("div"); banner.className = "walkout-banner"; banner.setAttribute("aria-live", "polite");
        document.querySelector(".arena-wrap").appendChild(banner);
        const current = { fight, spectator, resolve, banner, phase: null, timers: [] }; walkout = current;
        const phase = data => {
          if (walkout !== current) return;
          current.phase = data;
          banner.innerHTML = `<strong>${data.index}/2 · ${data.side === "p" ? "RED" : "BLUE"} CORNER</strong><span>${esc(data.name)}</span><button class="btn small gold" data-skipwalkout>Skip walkouts ▶▶</button>`;
          audio.music("walkout-" + data.options.music, 0.8); ui.renderControls(fight);
        };
        const finish = () => {
          if (walkout !== current) return;
          walkout = null; current.timers.forEach(clearTimeout); banner.remove();
          audio.music("fight", 0.6);
          if (!spectator) ui.introductions(fight);
          if (!spectator && ui.getState().fight) ui.renderControls(ui.getState().fight);
          resolve(true);
        };
        current.finish = finish;
        const stage = ui.getStage();
        if (stage) stage.arena.startWalkouts(fight.walkout, phase, finish);
        else {
          phase({ side: "p", index: 1, name: fight.player.name, options: walkoutPreferences(fight.walkout) });
          current.timers.push(setTimeout(() => phase({ side: "o", index: 2, name: fight.opponent.name, options: npcWalkout(fight.opponent.name, fight.opponent.style) }), 6000));
          current.timers.push(setTimeout(finish, 12000));
        }
      });
    },
    setReplayRate(value) { rate = Number(value) === 1 ? 1 : 0.5; if (replaying) { ui.getStage()?.arena.setSpeed(rate); ui.renderControls(ui.getState().fight); } },
    stopReplay() { token++; if (wake) wake(); },
    cancelAll() { controller.cancelWalkouts(); controller.stopReplay(); },
    async playReplay(fight, clips) {
      if (replaying || walkout || ui.isPlaying() || !clips.length) return;
      const id = ++token, live = ui.getLive(), paused = live.paused;
      const screen = $("fightScreen"), wasOpen = !screen.classList.contains("hidden");
      replaying = true; live.stop = true; ui.renderControls(fight);
      while (live.running) await new Promise(resolve => setTimeout(resolve, 25));
      screen.classList.remove("hidden"); screen.classList.add("replaying");
      ui.renderControls(fight); audio.say([]);
      const sleep = ms => new Promise(resolve => { const timer = setTimeout(() => { wake = null; resolve(); }, ms); wake = () => { clearTimeout(timer); wake = null; resolve(); }; });
      try {
        const stage = ui.getStage();
        if (stage) { stage.show($("arenaStage"), "arena"); stage.arena.setReplayMode(true); stage.arena.setSpeed(rate); }
        for (const clip of clips) {
          if (id !== token) break;
          const context = clipContext(fight, clip);
          if (stage) stage.arena.load(context.initial, { playerLook: fight.player.look, weightClass: fight.wc ?? ui.getState().weightClassIndex, sponsors: [] });
          ui.renderHead(context.initial);
          for (const event of context.events) {
            if (id !== token) break;
            ui.caption({ ...event, text: `REPLAY · R${clip.round} · ${event.text}` }); ui.updateBars(event);
            const duration = stage ? stage.arena.play(event, fight) : 650;
            await sleep(Math.min(4500, duration / rate));
          }
        }
      } catch (error) { console.error(error); ui.toast("Replay unavailable. Your fight has not changed.", true); }
      finally {
        replaying = false; wake = null; screen.classList.remove("replaying");
        const stage = ui.getStage(), state = ui.getState();
        if (stage) {
          stage.arena.setSpeed(ui.getSpeed());
          const restore = state.fight || fight;
          stage.arena.load(restore, { playerLook: restore.player.look, weightClass: restore.wc ?? state.weightClassIndex, sponsors: [] });
          stage.arena.setReplayMode(false);
        }
        ui.caption(null);
        if (state.fight) { ui.renderHead(state.fight); ui.renderControls(state.fight); }
        if (!wasOpen) { screen.classList.add("hidden"); ui.render3d(); }
        live.stop = false; live.paused = paused; ui.updateMusic();
        if (state.fight?.manual && !state.fight.finished && !paused) ui.resumeLive();
      }
    },
  };
  return controller;
}
