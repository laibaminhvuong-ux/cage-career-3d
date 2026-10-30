# Cage Career 3D — notes for Freebuff

Three AI agents (Claude Code, Codex, Freebuff) work in this repo at the same time.
**Before editing anything, read `COLLABORATION.md` and follow the THREE-AGENT PROTOCOL at the bottom**: claim files there first, don't edit files another agent has claimed, release with a note when done, and don't build, commit or deploy (Claude Code integrates and ships).

Project: a desktop MMA career game (Electron app; the game code is web technology). Source in `web/` (ES modules, three.js r160 vendored in `web/vendor/`). `web/engine.js` is the game logic (no DOM), `web/app.js` the UI, `web/arena3d.js` / `web/fighter3d.js` / `web/world3d.js` the 3D views. Saves are packed with `packCareer`, so keep new saved fields backward compatible via `Career.migrate()`.

**Cage Career 3D is now a desktop app, not a website.** Work on the app: same `web/` source, packaged by Electron (`desktop/`) so it runs on the dedicated GPU. Don't do website-only work (GitHub Pages, PWA, service worker). See the "FROM NOW ON" note in `COLLABORATION.md`.

**🔁 Right now Codex is the temporary integrator** (Claude is unavailable): it reviews, commits, builds and publishes releases. See the HANDOVER section at the end of `COLLABORATION.md` for how.
