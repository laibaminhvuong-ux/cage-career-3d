// Local smoke test; PLAYWRIGHT_MODULE/CHROME_BIN/LD_LIBRARY_PATH may override isolated QA tools.
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const assert = require("node:assert/strict");
const home = process.env.HOME;
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || path.join(home, ".cache/codex-mma-qa/node_modules/playwright-core"));
const root = path.resolve(__dirname, "..");
const errors = [];
async function routePage(page, fixture = false) {
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  await page.route("http://mma.test/**", route => {
    const file = new URL(route.request().url()).pathname;
    if (fixture && file === "/") return route.fulfill({ contentType: "text/html; charset=utf-8", body: '<style>body{margin:0;background:#10141b}#host{width:100vw;height:100vh}</style><div id="host"></div>' });
    const target = path.join(root, "web", file === "/" ? "index.html" : file);
    const ext = path.extname(target);
    return route.fulfill({ contentType: ({ ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" })[ext] || "application/octet-stream", body: fs.readFileSync(target) });
  });
}
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_BIN || path.join(home, ".cache/ms-playwright/chromium-1140/chrome-linux/chrome"),
    headless: true,
    args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
    env: { ...process.env, LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH || path.join(home, ".cache/codex-mma-qa/libs/root/usr/lib/x86_64-linux-gnu") },
  });
  try {
    const context = await browser.newContext({ viewport: { width: 1000, height: 760 } });
    const page = await context.newPage(); page.setDefaultTimeout(120000);
    await routePage(page, true);
    await page.addInitScript(() => { localStorage.setItem("cc3d_quality", "low"); localStorage.setItem("cc3d_sound", '{"on":false}'); });
    await page.goto("http://mma.test/");
    await page.evaluate(async () => {
      const { createStage } = await import("/arena3d.js"); const { SPECIAL_EVENTS } = await import("/eventstyle.js");
      window.stage = createStage(); stage.setFps(30);
      window.fight = { player: { name: "Alex Stone", style: "Balanced", health: 100 }, opponent: { name: "Minh Vuong", style: "Striker", health: 100 }, org: "GFC", specialEvent: SPECIAL_EVENTS.legacy, round: 0, rounds: 3, logs: [], finished: false };
      stage.arena.load(fight, { weightClass: 3 }); stage.show(document.querySelector("#host"), "arena");
      if (!stage.arena.presenter.root.visible || stage.arena.presenter.round !== 1) throw Error("Opening round card missing");
      if (stage.arena.P.f.gloveStyle.body !== SPECIAL_EVENTS.legacy.gloves.body || !stage.arena.eventBorder.visible) throw Error("Event gloves or cage theme missing");
      if (stage.arena.presenter.root.userData.outfit !== "sports-bra-and-shorts") throw Error("Sport outfit not default");
      for (let n = 0; n < 10; n++) stage.arena.update(1 / 30);
    });
    await page.screenshot({ path: "/tmp/codex-mma-special-event-round1.png" });
    await page.evaluate(async () => {
      fight.round = 1;
      stage.arena.play({ type: "info", side: "n", text: "Round 1 — underway", touch: null }, fight);
      if (stage.arena.presenter.root.visible) throw Error("Presenter stayed during combat");
      stage.arena.play({ type: "round", side: "n", text: "End of round 1." }, fight);
      if (!stage.arena.presenter.root.visible || stage.arena.presenter.round !== 2) throw Error("Upcoming round card wrong");
      const { setPresentation15Plus } = await import("/ringcard3d.js"); setPresentation15Plus(true); stage.arena.setPresentation15Plus(true);
      if (stage.arena.presenter.root.userData.outfit !== "bikini") throw Error("Live bikini toggle failed");
      for (let n = 0; n < 10; n++) stage.arena.update(1 / 30);
      stage.arena.snapCamera();
      stage.arena.scene.updateMatrixWorld(true); stage.arena.camera.updateMatrixWorld(true);
      const THREE = await import("/vendor/three.module.min.js");
      const card = stage.arena.presenter.card;
      for (const x of [-0.34, 0.34]) for (const y of [-0.215, 0.215]) {
        const p = card.localToWorld(new THREE.Vector3(x, y, 0.015)).project(stage.arena.camera);
        if (Math.abs(p.x) > 1 || Math.abs(p.y) > 1) throw Error("Round sign cropped by the camera");
      }
    });
    await page.screenshot({ path: "/tmp/codex-mma-special-event-round2.png" });
    await page.evaluate(() => {
      stage.arena.load({ ...fight, specialEvent: null, round: 0 }, { weightClass: 3 });
      if (stage.arena.eventBorder.visible || stage.arena.P.f.gloveStyle.body !== "#141414") throw Error("Standard event theme did not reset");
      stage.arena.load({ ...fight, specialEvent: null, round: 1, logs: [] }, { weightClass: 3 });
      if (stage.arena.presenter.root.visible) throw Error("Presenter leaked into a restored active round");
      stage.arena.play({ type: "round", side: "n", text: "End of round 1." }, { ...fight, finished: true });
      if (!stage.arena.presenter.root.visible || stage.arena.presenter.round !== 2) throw Error("Round cards missing from spectator replay");
    });
    await context.close();
    console.log("PASS: special gloves/cage, round 1/2 cards, combat hide, live outfit toggle, standard-event reset, restored combat and replay cards");
    if (process.argv.includes("--arena-only")) { assert.deepEqual(errors, []); return; }

    const { Game, packCareer } = await import(pathToFileURL(path.join(root, "web/engine.js")).href);
    const store = { kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} };
    const game = new Game(store); await game.load(); game.call("new", { name: "Presentation QA", weightClass: 3, style: "Balanced", country: "USA" });
    game.call("accept", { index: 0 }); const career = game.active();
    career.eventNum[career.cardOrg()] = 24; career.buildCard(career.scheduled); career.scheduled.weeks = 1;
    const uiContext = await browser.newContext({ viewport: { width: 1100, height: 820 } });
    const ui = await uiContext.newPage(); ui.setDefaultTimeout(120000); await routePage(ui);
    await ui.addInitScript(({ profile, save }) => {
      if (!localStorage.getItem("cc3d_profile")) { localStorage.setItem("cc3d_profile", JSON.stringify(profile)); localStorage.setItem("cc3d_c_" + profile.active, save); }
      localStorage.setItem("cc3d_quality", "low"); localStorage.setItem("cc3d_gfx", '{"fps":30,"meter":false}'); localStorage.setItem("cc3d_sound", '{"on":false}');
      for (const ctx of ["career", "fight", "world"]) localStorage.setItem("cc3d_tour_" + ctx, "1");
    }, { profile: game.profile, save: packCareer(career) });
    await ui.goto("http://mma.test/");
    await ui.locator("#modalBody .start-menu [data-closemodal]").click();
    console.log("UI loaded; testing settings");
    await ui.locator("[data-settings]:visible").first().click();
    assert.equal(await ui.locator("#presentation15Plus").isChecked(), false);
    await ui.locator("#presentation15Plus").check();
    assert.equal(await ui.evaluate(() => localStorage.getItem("cc3d_presentation15plus")), "1");
    await ui.screenshot({ path: "/tmp/codex-mma-presentation-settings.png" });
    await ui.reload();
    await ui.locator("#modalBody .start-menu [data-closemodal]").click();
    await ui.locator("[data-settings]:visible").first().click();
    assert.equal(await ui.locator("#presentation15Plus").isChecked(), true);
    await ui.locator("#modalBody [data-closemodal]").click();
    await ui.locator("[data-media]:visible").first().click();
    await ui.locator("#mediaPresenterStage canvas").waitFor({ state: "visible" });
    await ui.screenshot({ path: "/tmp/codex-mma-media-day-presenter.png" });
    await ui.locator("[data-mediaans=respect]").click();
    await ui.locator("#mediaPresenterStage canvas").waitFor({ state: "visible" });
    assert.equal(await ui.locator("#mediaPresenterStage canvas").count(), 1);
    await uiContext.close();
    assert.deepEqual(errors, [], "Browser must have no page/console errors");
    console.log("PASS: actual Settings default/toggle/reload persistence, media-day presenter, question rerender and canvas replacement; no browser errors");
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
