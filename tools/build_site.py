#!/usr/bin/env python3
"""Builds dist/site/: the game as an installable web app (PWA) for any static host such as GitHub Pages.
Files: index.html, game.js (everything bundled, three.js included), sw.js (offline cache),
manifest.webmanifest and icons. Needs esbuild: set ESBUILD=/path/to/esbuild or have it on PATH."""
import hashlib, json, os, shutil, subprocess

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
web = os.path.join(root, "web")
out = os.path.join(root, "dist", "site")
shutil.rmtree(out, ignore_errors=True)
os.makedirs(os.path.join(out, "icons"))
esbuild = os.environ.get("ESBUILD", "esbuild")

subprocess.run([esbuild, os.path.join(web, "app.js"), "--bundle", "--format=esm", "--minify", "--target=es2020",
                "--legal-comments=none", "--outfile=" + os.path.join(out, "game.js")], check=True)
for f in ["icon-180.png", "icon-192.png", "icon-512.png"]:
    shutil.copy(os.path.join(web, "icons", f), os.path.join(out, "icons", f))
shutil.copy(os.path.join(web, "icon.svg"), os.path.join(out, "icon.svg"))
shutil.copy(os.path.join(web, "logo.jpg"), os.path.join(out, "logo.jpg"))
# ready-made careers players can download and load
shutil.copytree(os.path.join(web, "saves"), os.path.join(out, "saves"))
open(os.path.join(out, ".nojekyll"), "w").close()

css = open(os.path.join(web, "style.css"), encoding="utf-8").read()
html = open(os.path.join(web, "index.html"), encoding="utf-8").read()
html = html.replace('<link rel="manifest" href="manifest.json">', '<link rel="manifest" href="manifest.webmanifest">')
html = html.replace('<link rel="stylesheet" href="style.css">', "<style>\n" + css + "\n</style>")
html = html.replace('<meta name="apple-mobile-web-app-capable" content="yes">',
    '<meta name="apple-mobile-web-app-capable" content="yes">\n'
    '  <meta name="mobile-web-app-capable" content="yes">\n'
    '  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n'
    '  <meta name="apple-mobile-web-app-title" content="Cage Career">\n'
    '  <meta name="description" content="MMA career game with 3D fights: build a fighter, climb to a title, and watch every fight in the octagon.">\n'
    '  <link rel="apple-touch-icon" href="icons/icon-180.png">')
install = """
  <script>
    // offline support and the "Install app" button
    if ("serviceWorker" in navigator) {
      addEventListener("load", () => navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then((r) => r.update()).catch(() => {}));
      // a new version took over a page running the old one: reload once so the update shows straight away
      const hadOld = !!navigator.serviceWorker.controller;
      let reloaded = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (hadOld && !reloaded) { reloaded = true; location.reload(); }
      });
    }
    (function () {
      const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
      if (standalone) return;
      const btn = document.createElement("button");
      btn.className = "btn small primary";
      btn.textContent = "Install app";
      btn.hidden = true;
      document.querySelector(".topright").prepend(btn);
      let prompt = null;
      addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); prompt = e; btn.hidden = false; });
      addEventListener("appinstalled", () => { btn.hidden = true; });
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      if (ios) btn.hidden = false;
      btn.addEventListener("click", async () => {
        if (prompt) { prompt.prompt(); await prompt.userChoice; prompt = null; btn.hidden = true; return; }
        const t = document.getElementById("toast");
        t.textContent = "To install: tap the Share button, then \\u201cAdd to Home Screen\\u201d.";
        t.className = "toast show";
        setTimeout(() => (t.className = "toast"), 6000);
      });
    })();
  </script>
  <script type="module" src="game.js"></script>"""
html = html.replace('<script type="module" src="app.js"></script>', install.strip())
open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(html)

manifest = {
    "name": "Cage Career 3D", "short_name": "Cage Career", "id": "./", "start_url": "./", "scope": "./",
    "display": "standalone", "orientation": "any", "background_color": "#0e1014", "theme_color": "#0e1014",
    "description": "MMA career game with 3D fights.", "categories": ["games", "sports"],
    "icons": [
        {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
}
json.dump(manifest, open(os.path.join(out, "manifest.webmanifest"), "w"), indent=2)

files = ["./", "index.html", "game.js", "manifest.webmanifest", "icon.svg", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "logo.jpg"]
digest = hashlib.sha256()
for f in files[1:]:
    digest.update(open(os.path.join(out, f), "rb").read())
version = digest.hexdigest()[:10]
sw = f"""// Offline cache for Cage Career 3D. A new build gets a new version, so players pick up updates.
const CACHE = "cage-career-{version}";
const FILES = {json.dumps(files)};
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (e) => {{
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // pages: try the network first so updates arrive; everything else: cache first
  if (req.mode === "navigate") {{
    e.respondWith(fetch(req).then((r) => {{ caches.open(CACHE).then((c) => c.put("index.html", r.clone())); return r; }})
      .catch(() => caches.match("index.html")));
    return;
  }}
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
}});
"""
open(os.path.join(out, "sw.js"), "w").write(sw)
total = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(out) for f in fs)
print(out, f"{total / 1024:.0f} KB, version {version}")
