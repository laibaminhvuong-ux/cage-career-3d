// Cage Career 3D as a desktop app: the same game as the website, run by Electron so it can insist
// on the computer's dedicated graphics card (browsers on laptops often pick the weaker built-in
// one), never throttle when the window loses focus, and fill the screen.
const { app, BrowserWindow, Menu, net, protocol, shell } = require("electron");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

// the GPU: the high-performance card, even if Chromium's blocklist would rather not, with
// rasterisation and uploads on the GPU too
app.commandLine.appendSwitch("force_high_performance_gpu");
app.commandLine.appendSwitch("ignore-gpu-blocklist");
app.commandLine.appendSwitch("enable-gpu-rasterization");
app.commandLine.appendSwitch("enable-zero-copy");
// keep full speed when another window is in front
app.commandLine.appendSwitch("disable-background-timer-throttling");
app.commandLine.appendSwitch("disable-renderer-backgrounding");
app.commandLine.appendSwitch("disable-backgrounding-occluded-windows");

// the game is served from app://game/ (not file://, where modules, fetch and storage misbehave)
protocol.registerSchemesAsPrivileged([{ scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);
const SITE = path.join(__dirname, "site");

app.whenReady().then(() => {
  protocol.handle("app", (req) => {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p === "/" || p === "") p = "/index.html";
    const file = path.normalize(path.join(SITE, p));
    if (!file.startsWith(SITE + path.sep) || !fs.existsSync(file)) return new Response("Not found", { status: 404 });
    return net.fetch(pathToFileURL(file).toString());
  });
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 900, minHeight: 600, show: false,
    backgroundColor: "#0b0d12", title: "Cage Career 3D", icon: path.join(SITE, "icons", "icon-512.png"),
    webPreferences: { backgroundThrottling: false, contextIsolation: true, sandbox: true },
  });
  win.once("ready-to-show", () => { win.maximize(); win.show(); });
  // the first launch offers Minh Vuong's career (the game asks before loading it)
  const flag = path.join(app.getPath("userData"), "launched");
  const first = !fs.existsSync(flag);
  try { fs.writeFileSync(flag, "1"); } catch { /* read-only profile: ask again next time */ }
  win.loadURL("app://game/index.html" + (first ? "?career=minh-vuong" : ""));
  // F11 fullscreen; links to the web open in the real browser
  win.webContents.on("before-input-event", (e, input) => {
    if (input.type === "keyDown" && input.key === "F11") {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });
});
app.on("window-all-closed", () => app.quit());
