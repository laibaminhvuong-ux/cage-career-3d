// Full feature smoke test using the isolated QA tools; no live account or server required.
const fs = require("node:fs"), path = require("node:path"), assert = require("node:assert/strict");
const { pathToFileURL } = require("node:url");
const home = process.env.HOME, root = path.resolve(__dirname, "..");
const { chromium } = require(path.join(home, ".cache/codex-mma-qa/node_modules/playwright-core"));
const errors = [];
async function route(page, fixture = false) {
  page.setDefaultTimeout(120000);
  page.on("pageerror", e => errors.push(e.message)); page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  await page.route("http://mma.test/**", request => {
    const file = new URL(request.request().url()).pathname;
    if (fixture && file === "/") return request.fulfill({ contentType: "text/html; charset=utf-8", body: '<style>body{margin:0;background:#10141b}#host{width:100vw;height:100vh}</style><div id="host"></div>' });
    const target = path.join(root, "web", file === "/" ? "index.html" : file), ext = path.extname(target);
    return request.fulfill({ contentType: ({ ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" })[ext] || "application/octet-stream", body: fs.readFileSync(target) });
  });
}
async function saved(page) { return page.evaluate(() => { const p = JSON.parse(localStorage.getItem("cc3d_profile")); return localStorage.getItem("cc3d_c_" + p.active); }); }
(async () => {
  const browser = await chromium.launch({ executablePath: path.join(home, ".cache/ms-playwright/chromium-1140/chrome-linux/chrome"), headless: true,
    args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"], env: { ...process.env, LD_LIBRARY_PATH: path.join(home, ".cache/codex-mma-qa/libs/root/usr/lib/x86_64-linux-gnu") } });
  try {
    if (!process.argv.includes("--replay-only")) {
    const ctx = await browser.newContext({ viewport: { width: 1000, height: 760 } }), page = await ctx.newPage(); await route(page, true);
    await page.addInitScript(() => { localStorage.setItem("cc3d_quality", "low"); localStorage.setItem("cc3d_sound", '{"on":false}'); });
    await page.goto("http://mma.test/");
    await page.evaluate(async () => {
      const { createStage } = await import("/arena3d.js"); window.stage = createStage(); stage.setFps(30);
      const f = { player: { name: "Alex Stone", style: "Balanced", health: 100 }, opponent: { name: "Minh Vuong", style: "Striker", health: 100 }, org: "GFC", round: 0, rounds: 3, logs: [], finished: false };
      stage.arena.load(f, { weightClass: 3 }); stage.show(document.querySelector("#host"), "arena");
      window.phases = []; window.done = 0;
      stage.arena.startWalkouts({ music: "neon", lighting: "blue", entrance: "salute", celebration: "bow" }, p => phases.push(p.side), () => done++);
      if (stage.arena.P.pos.x >= -4.4 || stage.arena.O.f.root.visible) throw Error("Red must enter from outside first");
      for (let i = 0; i < 8; i++) stage.arena.update(0.1);
      stage.arena.snapCamera();
    });
    await page.screenshot({ path: "/tmp/codex-mma-walkout-red.png" });
    await page.evaluate(() => {
      while (stage.arena.walkouts.phase === 0) stage.arena.update(0.1);
      if (stage.arena.O.pos.x >= -4.4 || !stage.arena.P.f.root.visible || phases.join() !== "p,o") throw Error("Blue must enter second from outside");
      for (let i = 0; i < 8; i++) stage.arena.update(0.1);
      stage.arena.snapCamera();
    });
    await page.screenshot({ path: "/tmp/codex-mma-walkout-blue.png" });
    await page.evaluate(() => {
      stage.arena.skipWalkouts();
      if (stage.arena.walkouts.active || done !== 1 || !stage.arena.P.f.root.visible || !stage.arena.O.f.root.visible) throw Error("Skip did not finish both entrances once");
      if (stage.arena.P.pos.length() > 4.4 || stage.arena.O.pos.length() > 4.4) throw Error("Skip left fighters outside");
    });
    await ctx.close(); console.log("PASS: actual red/blue entrances, outside start positions, correct order, visible fighters and skip callback");
    }

    const { Game, packCareer } = await import(pathToFileURL(path.join(root, "web/engine.js")).href);
    const store = { kind: "mem", getProfile: async () => null, setProfile() {}, getCareer: async () => null, setCareer() {}, deleteCareer() {}, getHallOfFame: async () => [], addHallOfFame() {} };
    const game = new Game(store); await game.load(); game.call("new", { name: "Feature Browser QA", weightClass: 3, style: "Balanced", country: "USA" }); game.call("accept", { index: 0 });
    const career = game.active(); career.scheduled.weeks = 3;
    async function app(save) {
      const context = await browser.newContext({ viewport: { width: 1100, height: 840 } }), ui = await context.newPage(); await route(ui);
      await ui.addInitScript(({ profile, save }) => {
        localStorage.setItem("cc3d_profile", JSON.stringify(profile)); localStorage.setItem("cc3d_c_" + profile.active, save);
        localStorage.setItem("cc3d_quality", "low"); localStorage.setItem("cc3d_gfx", '{"fps":30,"meter":false}'); localStorage.setItem("cc3d_sound", '{"on":false}'); localStorage.setItem("cc3d_fightmode", "plan"); localStorage.setItem("cc3d_speed", "2");
        for (const c of ["career", "fight", "world"]) localStorage.setItem("cc3d_tour_" + c, "1");
      }, { profile: game.profile, save });
      await ui.goto("http://mma.test/"); await ui.locator("#modalBody .start-menu [data-closemodal]").click(); return { ui, context };
    }
    let ui, context;
    if (!process.argv.includes("--replay-only")) {
    ({ ui, context } = await app(packCareer(career)));
    await ui.locator("[data-walkoutsettings]").click();
    await ui.locator("#walkout-music").selectOption("neon"); await ui.locator("#walkout-lighting").selectOption("blue"); await ui.locator("#walkout-entrance").selectOption("salute"); await ui.locator("#walkout-celebration").selectOption("bow"); await ui.locator("[data-savewalkout]").click();
    assert.equal(JSON.parse(await saved(ui)).data.walkoutPreferences.music, "neon");
    await ui.locator("[data-filmroom]").click(); const week = JSON.parse(await saved(ui)).data.week;
    await ui.locator("[data-studyfilm]").click();
    await ui.getByText("Round-plan scouting unlocked for this booking").waitFor();
    assert.equal(JSON.parse(await saved(ui)).data.week, week + 1);
    await ui.screenshot({ path: "/tmp/codex-mma-film-room.png" }); await ui.locator("#modal .modal-close").click();
    for (let i = 0; i < 3 && !(await ui.locator("[data-startfight]:visible").count()); i++) await ui.locator("[data-action=rest]").click();
    await ui.locator("[data-startfight]:visible").first().click();
    await ui.locator(".walkout-banner [data-skipwalkout]").waitFor();
    const beforeSkip = await saved(ui);
    await ui.locator(".walkout-banner [data-skipwalkout]").click();
    await ui.locator(".walkout-banner").waitFor({ state: "detached" });
    assert.equal(await saved(ui), beforeSkip, "Skip must not send a fight action or change the save");
    assert.equal(JSON.parse(beforeSkip).data.fight.round, 0);
    await context.close(); console.log("PASS: saved walkout choices, one-week film study UI and skip without starting combat");
    }

    career.scheduled.weeks = 0; game.call("fight/start"); const f = career.fight;
    f.round = 1; f.clock = 300; f.manual = null; f.p.stamina = 50; f.p.damage = 20; f.p.cut = 2;
    f.logs = [[{ type: "info", side: "n", text: "Round 1", t: "0:00", hp: [100,100], st: [100,100], g: "" }, { type: "big", side: "p", text: "A big right hand lands", move: "cross", t: "1:20", hp: [80,95], st: [50,70], g: "" }, { type: "round", side: "n", text: "End of round 1.", t: "5:00", hp: [80,95], st: [50,70], g: "" }]]; f.current = f.logs[0];
    ({ ui, context } = await app(packCareer(career)));
    await ui.locator("[data-cornerchoice=cutman]").click();
    assert.equal(JSON.parse(await saved(ui)).data.fight.p.cut, 1); assert.equal(JSON.parse(await saved(ui)).data.fight.p.damage, 17);
    assert.equal(await ui.locator(".corner-work").count(), 0, "Corner choices disappear after selecting treatment");
    await ui.screenshot({ path: "/tmp/codex-mma-corner-choice.png" });
    await ui.locator("#fightControls [data-highlights]").first().click(); await ui.locator("[data-replayclip]").first().click();
    await ui.locator(".replay-controls").waitFor(); const replaySave = await saved(ui);
    await ui.locator("[data-stopreplay]").click(); await ui.locator(".replay-controls").waitFor({ state: "detached" });
    assert.equal(await saved(ui), replaySave, "Round replay must not change career/fight state");
    await ui.locator("[data-fightmode=manual]").click(); await ui.locator("[data-manual]").click();
    await ui.waitForFunction(() => { const p = JSON.parse(localStorage.getItem("cc3d_profile")); const f = JSON.parse(localStorage.getItem("cc3d_c_" + p.active)).data.fight; return f.finished || f.manual?.turn > 0; });
    if (await ui.locator("[data-instantreplay]").count()) {
      await ui.locator("[data-instantreplay]").click(); await ui.locator(".replay-controls").waitFor();
      const liveReplaySave = await saved(ui); await ui.waitForTimeout(250);
      assert.equal(await saved(ui), liveReplaySave, "Live replay must freeze the actual engine clock/state");
      await ui.locator("[data-stopreplay]").click(); await ui.locator(".replay-controls").waitFor({ state: "detached" });
    }
    console.log("PASS: live instant replay pauses engine state and returns to combat");
    for (let i = 0; i < 3 && !(await ui.locator("[data-closefight]").count()); i++) {
      if (await ui.locator("[data-fightmode=plan]").count()) await ui.locator("[data-fightmode=plan]").click();
      await ui.locator("[data-plan=BALANCED]").click(); await ui.locator("[data-skip]").click(); await ui.locator("[data-skip]").waitFor({ state: "detached" });
    }
    await ui.locator("[data-closefight]").waitFor();
    await ui.locator("#fightControls [data-highlights]").first().click(); await ui.locator("[data-reel]").click();
    await ui.locator(".replay-controls").waitFor(); const resultSave = await saved(ui);
    await ui.locator("[data-stopreplay]").click(); await ui.locator(".replay-controls").waitFor({ state: "detached" });
    assert.equal(await saved(ui), resultSave, "Highlight reel must not change result/pay/record");
    await context.close(); console.log("PASS: saved once-per-break cutman, round replay and post-fight reel preserve game state/results");
    assert.deepEqual(errors, [], "No browser page or console errors"); console.log("PASS: all four retained features in the browser; no errors");
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
