// Where saves live. In the claude.ai viewer they are kept in this page's database under the
// player's private folder (data/users/<id>/), so they follow the account to every device.
// Anywhere else they fall back to this browser's localStorage.
//
// Layout (db):
//   data/users/<id>/profile     { slots: [careerId], active }
//   data/users/<id>/c_<careerId> { save: "<packed career JSON>", updated }
//   hof/<id>                     { entries: [hall of fame entries] }  (readable by everyone with access)

const LOCAL_ONLY = "cc3d_localOnly";

export async function openStore() {
  try {
    if (localStorage.getItem(LOCAL_ONLY)) return localStore();
  } catch { /* storage blocked */ }
  try {
    if (window.claude && typeof window.claude.use === "function") {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      const uid = db && user ? await user.id() : null;
      // visitors who may not write here (e.g. through a public link) keep their saves in their own browser
      const canWrite = user ? await user.can("data.write") : null;
      if (db && uid && canWrite !== false) return switchable(dbStore(db, uid));
    }
  } catch (e) {
    console.warn("Account storage unavailable, using this browser", e);
  }
  return localStore();
}

/**
 * Account storage that drops to browser storage if the platform refuses this visitor's writes.
 * The game then re-saves everything through onDowngrade, and later visits go straight to the browser.
 */
function switchable(primary) {
  let impl = primary;
  const wrap = {
    get kind() { return impl.kind; },
    onDowngrade: null,
  };
  const downgrade = () => {
    if (impl.kind === "device") return;
    impl = localStore();
    try { localStorage.setItem(LOCAL_ONLY, "1"); } catch { /* ignore */ }
    if (wrap.onDowngrade) wrap.onDowngrade();
  };
  primary.refused = downgrade;
  for (const k of ["getProfile", "setProfile", "getCareer", "setCareer", "deleteCareer", "getHallOfFame", "addHallOfFame"]) {
    wrap[k] = (...args) => impl[k](...args);
  }
  wrap.getGifts = () => (impl.getGifts ? impl.getGifts() : Promise.resolve([]));
  return wrap;
}

/** Keeps one write in flight per document and collapses a burst into the latest value. */
function writer(write, onError) {
  const slots = new Map();
  return (key, value) => {
    let s = slots.get(key);
    if (!s) slots.set(key, (s = { running: false, next: undefined, has: false }));
    s.next = value;
    s.has = true;
    if (s.running) return;
    s.running = true;
    (async () => {
      while (s.has) {
        const v = s.next;
        s.has = false;
        try {
          await write(key, v);
        } catch (e) {
          // one retry for a transient hiccup
          try {
            await new Promise((r) => setTimeout(r, 600 + Math.random() * 600));
            await write(key, v);
          } catch (e2) {
            onError(e2);
          }
        }
      }
      s.running = false;
    })();
  };
}

let errorHandler = (e) => console.error("Save failed", e);
export function onSaveError(fn) {
  errorHandler = fn;
}

function dbStore(db, uid) {
  const mine = db.collection("data/users/" + uid);
  const hofDoc = db.doc("hof/" + uid);
  let hofEntries = [];
  const failed = (e) => {
    if (e && (e.code === "invalid_argument" || e.code === "not_granted" || e.code === "revoked") && self.refused) self.refused();
    else errorHandler(e);
  };
  const put = writer(async (key, value) => {
    if (value === null) await mine.doc(key).delete();
    else await mine.doc(key).set(value);
  }, failed);
  const putHof = writer(async (_, entries) => hofDoc.set({ entries }), failed);
  const self = {
    kind: "account",
    async getProfile() {
      const s = await mine.doc("profile").get();
      return s.exists ? s.data() : null;
    },
    setProfile(p) { put("profile", p); },
    async getCareer(cid) {
      const s = await mine.doc("c_" + cid).get();
      return s.exists ? s.data().save : null;
    },
    setCareer(cid, text) { put("c_" + cid, { save: text, updated: Date.now() }); },
    deleteCareer(cid) { put("c_" + cid, null); },
    async getHallOfFame() {
      const all = [];
      try {
        const snap = await db.collection("hof").get();
        for (const d of snap.docs) {
          const entries = (d.data() && d.data().entries) || [];
          if (d.id === uid) hofEntries = entries.slice();
          for (const e of entries) all.push({ ...e, mine: d.id === uid });
        }
      } catch (e) {
        console.warn("Hall of Fame unavailable", e);
      }
      return all;
    },
    addHallOfFame(entry) {
      hofEntries.push(entry);
      putHof("hof", hofEntries.slice());
    },
    /** Careers prepared for the page's owner: gifts/<id> { save }. Only the owner can read them. */
    async getGifts() {
      try {
        const snap = await db.collection("gifts").get();
        return snap.docs.filter((d) => d.data() && d.data().save).map((d) => ({ id: d.id, save: d.data().save }));
      } catch (e) {
        return [];
      }
    },
  };
  return self;
}

function localStore() {
  const KEY = "cc3d_";
  const get = (k) => {
    try { return localStorage.getItem(KEY + k); } catch { return null; }
  };
  const set = (k, v) => {
    try {
      if (v === null) localStorage.removeItem(KEY + k);
      else localStorage.setItem(KEY + k, v);
    } catch (e) {
      errorHandler(e);
    }
  };
  return {
    kind: "device",
    async getProfile() {
      try { return JSON.parse(get("profile") || "null"); } catch { return null; }
    },
    setProfile(p) { set("profile", JSON.stringify(p)); },
    async getCareer(cid) { return get("c_" + cid); },
    setCareer(cid, text) { set("c_" + cid, text); },
    deleteCareer(cid) { set("c_" + cid, null); },
    async getHallOfFame() {
      try { return JSON.parse(get("hof") || "[]").map((e) => ({ ...e, mine: true })); } catch { return []; }
    },
    addHallOfFame(entry) {
      let list = [];
      try { list = JSON.parse(get("hof") || "[]"); } catch { /* start over */ }
      list.push(entry);
      set("hof", JSON.stringify(list));
    },
  };
}
