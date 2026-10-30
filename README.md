# Cage Career 3D — MMA Career Sim

A Java + HTML MMA career simulator, now with 3D fighters and music. Create a fighter at 21,
grind the regional circuit, earn a Contender Series shot, sign with the GFC, climb the rankings
and chase the belt before Father Time catches up — and watch every fight play out in a 3D octagon.

## Download

**[⬇ Download Cage Career 3D](https://github.com/laibaminhvuong-ux/cage-career-3d/releases/latest)**, free, for every platform:

| Device | File | How |
|---|---|---|
| 🪟 Windows 10/11 | `Cage-Career-3D-Setup-<version>.exe` (or `-portable.zip`) | Run the installer. If Windows says "protected your PC": **More info → Run anyway** |
| 🍎 Mac (Apple Silicon and Intel) | `Cage-Career-3D-<version>-mac.dmg` | Drag it to Applications, then **right-click → Open** the first time (newer macOS: System Settings → Privacy & Security → **Open Anyway**) |
| 🐧 Linux | `Cage-Career-3D-<version>-linux.AppImage` | `chmod +x` it and run it |
| 🤖 Android | `Cage-Career-3D-<version>-android.apk` | Open it on the phone and allow **Install unknown apps** for your browser |

The desktop apps run on your dedicated graphics card and tell you when a new version is out; your saves carry over. iPhone/iPad isn't available yet (it needs the App Store).

## Play online

The game runs entirely in the browser and is published as a private claude.ai artifact:
https://claude.ai/artifact/C6n3rc5Gbr58AgQUG83wr9 — saves are kept with your claude.ai account.
To update it, run `ESBUILD=/path/to/esbuild python3 tools/build_artifact.py`, which writes
`dist/cage-career-3d.html` (one self-contained page, three.js included), and republish that file.

## Run locally

Requires JDK 17+ (`sudo apt install openjdk-21-jdk` on Ubuntu/WSL).

    ./run.sh          # Linux / macOS / WSL
    run.bat           # Windows

Then open http://localhost:8080. To play on your phone, connect it to the same Wi-Fi and
open `http://<your-computer-ip>:8080`, then use "Add to Home Screen" for an app-like icon.

Progress auto-saves to `save/` (separate from the original Cage Career's saves).

## Put it online

The repo includes a `Dockerfile` and a Render Blueprint (`render.yaml`).

1. Push this repo to GitHub.
2. On [render.com](https://render.com), choose **New → Blueprint** and pick the repo. Render builds the Dockerfile and gives you a permanent `https://cage-career-xxxx.onrender.com` link.
3. Every push to `main` redeploys automatically.

On the free plan the server sleeps after 15 idle minutes, so the first visit takes about 30 seconds. Saves in `save/` are also wiped on every restart or redeploy. To keep saves, switch to a paid instance and attach a disk mounted at `/app/save`.

## What's new in 3D

- **3D fighters**: every fighter is a jointed 3D model. Pick your skin tone, hair, hair color,
  facial hair and fight shorts when you create your fighter (with a live preview). Opponents get
  their own look, and build follows weight class and style (wrestlers are stockier).
- **Watch the fight**: the fight engine is unchanged, but each event is acted out in a 3D octagon
  with a crowd and a referee: jabs, crosses, hooks, uppercuts, overhands, body/head/leg kicks,
  knees, spinning back fists, takedowns and sprawls, ground and pound, submissions and tap-outs,
  knockdowns in slow motion, and stoppages. The camera cuts to close-ups on big shots;
  drag the arena to look around. Use 1×/2×/½× to change speed, Skip to jump to the end of a round,
  and 📜 Log for the full play-by-play.
- **Music and sound**: a laid-back gym beat on the career screens and a driving fight track in the
  arena that builds up for the final round, plus crowd noise, punches and kicks, the cage bell,
  result stings and a ring announcer (uses your browser's built-in voice). Everything is synthesized
  live, so there are no audio files. Toggle with 🔊. Browsers start sound after your first tap or click.
- No WebGL? The game falls back to the text play-by-play.

## How it plays

- **Weeks**: every action (train a stat, spar, rest, media, teach classes) takes one week.
  Energy limits how hard you can push; overtraining risks injury.
- **Gyms**: spend money to move up from a Garage Gym to a World-Class Academy for faster gains.
- **Fights**: accept an offer, train through camp, then fight live. Before each round you pick a
  game plan (Balanced, Strike, Wrestle, Hunt Subs, Counter, All Out). The engine simulates
  strikes, takedowns, ground and pound, submissions, knockdowns and stamina; three judges score
  every round.
- **Career path**: 3 regional wins and 52 overall earn a Contender Series invite. Win it to sign
  with the GFC. Beat ranked fighters to climb; reach the top 3 with a win streak (or #1) for a title shot.
- **Aging**: training slows after 28, attributes decline from 31, and you must retire at 40.
  Your legacy is scored on wins, finishes, titles and defenses.
- **Rivals**: you start with a rival who develops alongside you. Build heat with callouts and a
  grudge match (1.5× purse) appears. First to lead the head-to-head by 2 settles it; a fighter who
  finishes you can become your next nemesis.
- **Trash talk**: once a week, talk about your rival or next opponent — respectful, trash or
  personal. Hype raises your purse and fame, but fires up your opponent (and personal shots can
  get you fined). Win and you backed it up; lose and you eat your words.
- **Team**: sign a head coach, striking/wrestling/BJJ coaches, S&C, physio and a manager (1-5★).
  Better staff want more fame and salary. A 3★+ head coach scouts the opponent's game plan
  between rounds. Miss payroll and staff walk.
- **Weight classes**: move up or down one division (every 26 weeks). Stats shift with the
  weight; champions moving divisions get an immediate superfight for the second belt.
- **Hall of Fame**: every retired career is recorded across saves (`save/halloffame.dat`);
  a legacy score of 200+ gets you inducted.
- **Trophies**: 24 milestones unlock as the career goes on — first fight, first win, first
  finish, KO and submission counts, win streaks, bonuses, the rankings, the belt, title
  defenses, a second division, fame and career earnings. They are saved with the career and
  announced on the result panel after the fight that earns them; open the full shelf with
  🏆 in the top bar.
- **Bonus objectives**: when a bout is booked the promotion posts one or two targets (finish
  inside two rounds, win by KO or submission, land takedowns or volume, don't get knocked
  down, out-land them two to one), paid on top of the purse if you win and hit them.
- **Dynasty**: once a career is in the Hall of Fame, a new fighter can start as that legend's
  protégé: some inherited fame, 25% off gym moves, and the mentor's legacy score as the mark
  to beat, with a moment when you pass it.
- **Your rival's fights**: when your rival fights away from your cards it's a real bout, and
  the Rival panel lets you watch the latest one.

## Code layout

    web/engine.js          the game rules in JavaScript (a port of the Java classes below); the browser runs this
    web/store.js           saves: claude.ai account storage when available, otherwise this browser
    src/mma/Main.java      HTTP server (JDK built-in) that serves web/; the Java game classes are the original reference
    src/mma/Career.java    calendar, training, money, offers, rankings, aging, rivals, team, divisions
    src/mma/Fight.java     round-by-round fight engine and judging
    src/mma/Fighter.java   fighter stats, styles, NPC generation
    src/mma/Staff.java     team members, roles and perks
    src/mma/TrashTalk.java press conference quotes and replies
    src/mma/Json.java      tiny JSON writer (no dependencies)
    web/                   index.html, style.css, app.js (the game UI)
    web/fighter3d.js       3D fighter models, poses and the animation blender
    web/arena3d.js         shared WebGL stage: fighter preview, octagon arena, fight choreography and cameras
    web/audio.js           synthesized music, crowd, sound effects and announcer
    web/vendor/            three.js r160 (MIT), bundled so the game runs offline

## Fight presentation and preparation

- **Both walkouts:** red corner enters from the aisle outside the cage, then blue corner. The visible **Skip walkouts** button brings both to their corners without starting the fight. Choose synthesized entrance music, lighting, an entrance animation and a celebration under **Walkout & celebration**. Preferences are saved with the career.
- **Replays:** instant replay pauses a live fight; round and post-fight highlights select knockdowns, big shots, takedowns, submission attempts and finishes. Half-speed/full-speed playback and Stop/return restore the original fight state. Replays do not simulate exchanges or change pay, records or results.
- **Corner work:** once per break, recover stamina, treat a cut, or take a tactical boost for the next round only. Existing normal recovery still applies. Replay pauses the corner countdown.
- **Opponent film room:** study a booked opponent for one week and 10 energy, unlocking a scouting report and round-plan scouting. Completed cards build genuine archived footage, with playable highlights for the 12 most recently retained bouts. Compact summaries retain up to three bouts per fighter and 80 fighters.

Feature checks (Node 22+, or `--experimental-default-type=module` for `.mjs` checks on Node 20): `node tools/check_fight_features.mjs`, `node tools/check_achievements.mjs` (trophy table, unlock-once, save compatibility), `node tools/check_retire_trophies.mjs` (retirement / Hall of Fame trophies announced on voluntary and forced retirement), `node tools/check_objectives.mjs` (bonus objectives and the rival's watchable fights), `node tools/check_dynasty.mjs` (protégé careers), `node tools/check_auto_quality.mjs` (the Auto graphics ladder), `node tools/check_i18n.mjs` (translation table and app-shell coverage), `node tools/check_venue_extras.mjs` (the club, ink studio and realtor's office dress fits the real room: inside the walls, clear of the furniture and the doorway, no added lights, the room's own animation preserved). Local Chromium integration: `node tools/check_fight_features_browser.cjs` (use `--replay-only` for the corner/replay UI subset). Browser tests use the isolated QA tools under `~/.cache/codex-mma-qa` and write screenshots under `/tmp`.
