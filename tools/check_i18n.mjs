// Run: node tools/check_i18n.mjs   (web/*.js are ES modules; Node 22+, or add
// --experimental-default-type=module on Node 20)
//
// Checks web/i18n.js without a browser:
//   * every row is [English, Tiếng Việt, Español, Português, Français], complete and non-empty
//   * no duplicate English keys
//   * {x} placeholders line up between the English key and every translation
//   * the built-in language codes are real, distinct entries in LANGUAGES
//   * every user-visible string in web/index.html (the app shell: loading screen, top bar,
//     yes/no dialog, world help line, arena toolbar) resolves through the hand-written table,
//     so the shell reads correctly in those languages instead of relying on machine
//     translation or showing English offline
//
// The string matching below mirrors tr()/LEAD/TRAIL in web/i18n.js: those strip leading
// symbols (the emoji on a button) and trailing punctuation before looking up the table.
import assert from "node:assert/strict";
import fs from "node:fs";
import { ROWS, LANGUAGES, isBuiltIn } from "../web/i18n.js";

const LANGS = ["vi", "es", "pt", "fr"];

// ---------------------------------------------------------------- the table
const keys = new Map();
for (const row of ROWS) {
  assert.equal(row.length, 1 + LANGS.length, `row needs English + ${LANGS.length} translations: ${JSON.stringify(row)}`);
  assert.ok(row[0].trim(), "English key must not be empty");
  for (let i = 1; i <= LANGS.length; i++) {
    assert.equal(typeof row[i], "string", `cell must be a string: ${JSON.stringify(row)}`);
    assert.ok(row[i].trim(), `missing ${LANGS[i - 1]} for ${JSON.stringify(row[0])}`);
  }
  assert.ok(!keys.has(row[0]), `duplicate English key: ${JSON.stringify(row[0])}`);
  const holes = (s) => (s.match(/\{x\}/g) || []).length;
  for (let i = 1; i <= LANGS.length; i++) {
    assert.equal(holes(row[i]), holes(row[0]), `{x} count differs for ${JSON.stringify(row[0])} (${LANGS[i - 1]})`);
  }
  keys.set(row[0], row);
}
assert.ok(ROWS.length >= 190, `table looks truncated: ${ROWS.length} rows`);

assert.ok(LANGUAGES.some((l) => l[0] === "en"), "LANGUAGES needs English");
assert.equal(new Set(LANGUAGES.map((l) => l[0])).size, LANGUAGES.length, "duplicate language codes");
for (const code of LANGS) {
  assert.ok(LANGUAGES.some((l) => l[0] === code), `${code} is built in but missing from LANGUAGES`);
  assert.ok(isBuiltIn(code), `${code} should be built in`);
}
assert.ok(isBuiltIn("en"), "English is always available");
assert.ok(!isBuiltIn("ja") && !isBuiltIn("de"), "only the hand-written languages are built in");

// ------------------------------------------------------------ the app shell
/** Blanks out elements declared translate="no", exactly like the walker in web/i18n.js skips them. */
function blankNoTranslate(src) {
  const OPEN = /<([a-zA-Z][\w-]*)\b[^>]*\btranslate="no"[^>]*>/g;
  let out = src, m;
  while ((m = OPEN.exec(out))) {
    const tags = new RegExp(`<${m[1]}\\b|</${m[1]}\\s*>`, "gi");
    tags.lastIndex = m.index + m[0].length;
    let depth = 1, t;
    while (depth > 0 && (t = tags.exec(out))) depth += t[0][1] === "/" ? -1 : 1;
    const end = t ? tags.lastIndex : out.length;
    out = out.slice(0, m.index) + " ".repeat(end - m.index) + out.slice(end);
    OPEN.lastIndex = end;
  }
  return out;
}

const LEAD = /^[^\p{L}\p{N}+(]+/u, TRAIL = /[\s:…!?.]+$/u;
/** The translation column (0-3 → vi/es/pt/fr) a line resolves to, or null. Mirrors tr(). */
function lookup(src, col) {
  const s = src.replace(/\s+/g, " ").trim();
  if (!s || !/\p{L}{2}/u.test(s)) return null;
  const lead = (s.match(LEAD) || [""])[0];
  const body = s.slice(lead.length);
  const trail = (body.match(TRAIL) || [""])[0];
  const core = body.slice(0, body.length - trail.length);
  const row = keys.get(s) || keys.get(body) || keys.get(core);
  if (!row) return null;
  return row[0] === s ? row[1 + col] : lead + row[1 + col] + trail;
}
function translated(src) {
  const s = src.replace(/\s+/g, " ").trim();
  if (!s || !/\p{L}{2}/u.test(s)) return true; // nothing translatable on its own
  return LANGS.some((_, col) => lookup(src, col) !== null);
}

// A few end-to-end checks that the shell labels really come out translated in each language,
// including a button whose emoji prefix must survive the lookup.
const SAMPLES = [
  ["Yes", ["Có", "Sí", "Sim", "Oui"]],
  ["Cancel", ["Hủy", "Cancelar", "Cancelar", "Annuler"]],
  ["Close", ["Đóng", "Cerrar", "Fechar", "Fermer"]],
  ["📱 Phone", ["📱 Điện thoại", "📱 Teléfono", "📱 Celular", "📱 Téléphone"]],
  ["🌆 Life", ["🌆 Cuộc sống", "🌆 Vida", "🌆 Vida", "🌆 Vie"]],
];
for (const [src, want] of SAMPLES) {
  for (let col = 0; col < LANGS.length; col++) {
    assert.equal(lookup(src, col), want[col], `${JSON.stringify(src)} should render as ${JSON.stringify(want[col])} in ${LANGS[col]}`);
  }
}

const raw = fs.readFileSync(new URL("../web/index.html", import.meta.url), "utf8");
assert.ok(/class="brand"[^>]*translate="no"/.test(raw), "the brand mark should stay translate=no");
const body = blankNoTranslate(raw.slice(raw.indexOf("<body")));

const strings = new Set();
for (const m of body.matchAll(/>([^<>]+)</g)) {
  const s = m[1].replace(/\s+/g, " ").trim();
  if (/[A-Za-z]{2}/.test(s)) strings.add(s);
}
for (const m of body.matchAll(/(?:placeholder|title|aria-label)="([^"]*)"/g)) {
  const s = m[1].replace(/\s+/g, " ").trim();
  if (/[A-Za-z]{2}/.test(s)) strings.add(s);
}

// The boot mark repeats the wordmark but is not marked translate="no" (reported to the
// integrator); it is the same brand text, so it is exempt here on purpose.
const BRAND = new Set(["CAGE", "CAREER"]);
const missing = [...strings].filter((s) => !BRAND.has(s) && !translated(s)).sort();
assert.equal(missing.length, 0, `untranslated shell text (add a row to ROWS in web/i18n.js):\n  ${missing.join("\n  ")}`);

assert.ok(strings.size >= 40, `only ${strings.size} shell strings found — did index.html change shape?`);
console.log(`PASS: ${keys.size} hand-written rows across ${LANGS.length} built-in languages; ${strings.size} user-visible strings in web/index.html all resolve (${BRAND.size} brand marks exempt)`);
