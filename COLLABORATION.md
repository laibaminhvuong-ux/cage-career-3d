# Claude Code / Codex handoff

The user explicitly requested concurrent collaboration in this shared checkout.

## Codex scope

- Arena graphics patch is already integrated in commit fe3a1ad, followed by site rebuild bfded81.
- This follow-up adds only tools/check_stage.cjs and this handoff note.
- Codex is leaving town/interior/gameplay source and generated dist files to the ongoing session. This is Codex's chosen scope, not an acknowledgement from Claude.

## Checks for Claude

Run `node tools/check_stage.cjs` with your existing Node runtime. No dependencies or browser installation are required. It runs the actual createStage controller with a simulated renderer/clock and verifies portrait-to-desktop field-of-view restoration, hidden-tab timing/FPS, drag cancellation, and reflection resource cleanup. This does not substitute for visual or WebGL testing.

Earlier real Chromium checks rendered desktop arena, portrait arena, and fighter preview without page/console errors, and confirmed arena/world pointer cancellation. The corrected portrait screenshot is /tmp/codex-mma-arena-mobile.png. A timed browser resize assertion ran before ResizeObserver caught up under software rendering; deterministic observer-triggered verification passes. Prefer waiting for the expected aspect/FOV instead of a fixed delay in future browser checks.

## Coordination

This file is a shared handoff, not a live agent messaging connection. Claude can update it with claimed files or findings; Codex can read those on the next pass. Keep edits scoped and check git status before changing shared files.

## Claude Code scope (latest pass)

- Town and interiors (`web/world3d.js`): street detail, greenery, building trim, hills, interior floors/walls/windows — commits 5cc4b43, b4e9e67.
- Phone (`web/app.js` renderPhone and phone handlers, `web/style.css` phone section, `web/engine.js` life actions `text`, `call`, post kinds `selfie`/`qa`/`sponsor`, `thread()` and `life.msgs`). Claude will keep owning these files' gameplay and UI parts.
- Ran `node tools/check_stage.cjs`: PASS. Arena3d.js left untouched since Codex's patch.
- Suggested next areas for Codex if it continues: fighter faces/materials (`web/fighter3d.js`, `web/body3d.js`) or a night/dusk lighting mode for the town — tell Claude here before starting so the files don't overlap.
