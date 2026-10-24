package mma;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.regex.Pattern;

/**
 * Serves the HTML game from ./web and the JSON game API under /api/.
 * Every browser gets a profile (identified by a cookie) with up to five career save slots.
 * Each career has its own id, which doubles as a save code for loading it in another browser.
 * The Hall of Fame is shared by everyone.
 */
public class Main {
    private static final Object LOCK = new Object();
    private static final Path PROFILES = Paths.get("save", "players");
    private static final Path CAREERS = Paths.get("save", "careers");
    private static final Path HOF = Paths.get("save", "halloffame.dat");
    private static final String COOKIE = "cc_player";
    private static final Pattern ID = Pattern.compile("[0-9a-f]{32}");
    private static final Pattern LOOK = Pattern.compile("\\d(,\\d){4}");
    private static final int MAX_BODY = 8 * 1024, MAX_CACHED = 500;
    private static Path webRoot;
    private static ArrayList<Map<String, Object>> hallOfFame = new ArrayList<>();

    /** Recently used careers by career id and profiles by player id. Every change is saved to disk, so eviction is safe. */
    private static final Map<String, Career> careers = lru();
    private static final Map<String, Profile> profiles = lru();

    private static <V> Map<String, V> lru() {
        return new LinkedHashMap<>(16, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, V> eldest) {
                return size() > MAX_CACHED;
            }
        };
    }

    public static void main(String[] args) throws IOException {
        String envPort = System.getenv("PORT");
        int port = args.length > 0 ? Integer.parseInt(args[0]) : envPort != null ? Integer.parseInt(envPort) : 8080;
        webRoot = Paths.get(args.length > 1 ? args[1] : "web").toAbsolutePath().normalize();
        hallOfFame = loadHallOfFame();

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/", Main::api);
        server.createContext("/", Main::files);
        server.setExecutor(Executors.newFixedThreadPool(8));
        server.start();
        System.out.println("Cage Career 3D is running on port " + port + ": open http://localhost:" + port);
    }

    private static void api(HttpExchange ex) throws IOException {
        String path = ex.getRequestURI().getPath().substring("/api/".length());
        Map<String, String> p = params(ex);
        String id = playerId(ex);
        int status = 200;
        String body;
        synchronized (LOCK) {
            try {
                Profile prof = profile(id);
                Career career = active(prof);
                String msg = null, code = null;
                switch (path) {
                    case "state" -> { }
                    case "new" -> {
                        Career c = newCareer(p);
                        String cid = newId();
                        prof.add(cid);
                        careers.put(cid, c);
                    }
                    case "action" -> msg = need(career).act(p.get("type"), p.get("stat"));
                    case "accept" -> msg = need(career).accept(parseInt(p.get("index")));
                    case "upgrade" -> msg = need(career).upgradeGym();
                    case "fight/start" -> msg = need(career).startFight();
                    case "fight/round" -> need(career).fightRound(p.get("plan"));
                    case "fight/close" -> need(career).closeFight();
                    case "retire" -> msg = need(career).retire();
                    case "talk" -> msg = need(career).talk(p.get("target"), p.get("tone"));
                    case "staff/hire" -> msg = need(career).hire(parseInt(p.get("index")));
                    case "staff/fire" -> msg = need(career).fire(p.get("role"));
                    case "division" -> msg = need(career).changeDivision(parseInt(p.get("weightClass")));
                    case "reset" -> {
                        need(career);
                        deleteCareer(prof, prof.active);
                    }
                    case "save/blank" -> {
                        if (prof.slots.size() >= Profile.MAX_SLOTS) throw new GameException("All " + Profile.MAX_SLOTS + " save slots are full. Delete a save first.");
                        prof.active = null;
                    }
                    case "save/switch" -> {
                        prof.active = prof.slot(parseInt(p.get("slot")));
                        msg = "Loaded " + need(active(prof)).me.displayName() + ".";
                    }
                    case "save/delete" -> {
                        String cid = prof.slot(parseInt(p.get("slot")));
                        Career c = career(cid);
                        deleteCareer(prof, cid);
                        msg = c == null ? "Save deleted." : "Deleted " + c.me.displayName() + ".";
                    }
                    case "save/code" -> {
                        need(career);
                        code = prof.active;
                    }
                    case "save/load" -> {
                        String cid = p.getOrDefault("code", "").trim().toLowerCase().replaceAll("[^0-9a-f]", "");
                        Career c = ID.matcher(cid).matches() ? career(cid) : null;
                        if (c == null) throw new GameException("No save found for that code.");
                        prof.add(cid);
                        msg = "Loaded " + c.me.displayName() + ".";
                    }
                    default -> throw new GameException("Unknown endpoint: " + path);
                }
                career = active(prof);
                induct(prof.active, career);
                if (!path.equals("state")) {
                    if (career != null) saveCareer(prof.active, career);
                    saveProfile(id, prof);
                }
                Map<String, Object> st = state(id, prof, career, msg);
                if (code != null) st.put("saveCode", code);
                body = Json.write(st);
            } catch (GameException e) {
                status = 400;
                body = Json.write(Map.of("error", e.getMessage()));
            } catch (RuntimeException e) {
                e.printStackTrace();
                status = 500;
                body = Json.write(Map.of("error", "Server error. Please try again."));
            }
        }
        send(ex, status, "application/json; charset=utf-8", body.getBytes(StandardCharsets.UTF_8));
    }

    /** Reads the player cookie, or issues a new one. */
    private static String playerId(HttpExchange ex) {
        List<String> cookies = ex.getRequestHeaders().get("Cookie");
        if (cookies != null) {
            for (String header : cookies) {
                for (String c : header.split(";")) {
                    String[] kv = c.trim().split("=", 2);
                    if (kv.length == 2 && kv[0].equals(COOKIE) && ID.matcher(kv[1]).matches()) return kv[1];
                }
            }
        }
        String id = newId();
        ex.getResponseHeaders().add("Set-Cookie", COOKIE + "=" + id + "; Path=/; Max-Age=315360000; SameSite=Lax; HttpOnly");
        return id;
    }

    private static String newId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    private static Profile profile(String id) {
        Profile prof = profiles.get(id);
        if (prof == null) {
            prof = loadProfile(id);
            profiles.put(id, prof);
        }
        return prof;
    }

    /** The career being played, or null. A slot whose save has vanished (deleted elsewhere) is dropped. */
    private static Career active(Profile prof) {
        if (prof.active == null) return null;
        Career c = career(prof.active);
        if (c == null) prof.remove(prof.active);
        return c;
    }

    private static Career career(String cid) {
        if (careers.containsKey(cid)) return careers.get(cid);
        Career c = loadCareer(cid);
        if (c != null) careers.put(cid, c);
        return c;
    }

    private static void deleteCareer(Profile prof, String cid) {
        if (cid == null) return;
        prof.remove(cid);
        careers.remove(cid);
        try {
            Files.deleteIfExists(CAREERS.resolve(cid + ".dat"));
        } catch (IOException e) {
            System.err.println("Could not delete " + cid + ": " + e);
        }
    }

    private static Career need(Career career) {
        if (career == null) throw new GameException("Create a fighter first.");
        return career;
    }

    private static Career newCareer(Map<String, String> p) {
        String name = p.getOrDefault("name", "").trim().replaceAll("\\s+", " ");
        if (name.isEmpty() || name.length() > 30) throw new GameException("Enter a name (1-30 characters).");
        String nick = p.getOrDefault("nickname", "").trim();
        if (nick.length() > 24) throw new GameException("Nickname is too long.");
        int wc = parseInt(p.get("weightClass"));
        if (wc < 0 || wc >= Career.WEIGHT_CLASSES.length) throw new GameException("Pick a weight class.");
        String style = p.getOrDefault("style", "");
        if (!java.util.Arrays.asList(Fighter.STYLES).contains(style)) throw new GameException("Pick a fighting style.");
        String country = p.getOrDefault("country", "USA").trim();
        if (!java.util.Arrays.asList(Fighter.COUNTRIES).contains(country)) country = "USA";
        Career c = new Career(name, nick, wc, style, country);
        String look = p.getOrDefault("look", "");
        if (LOOK.matcher(look).matches()) c.me.look = look;
        return c;
    }

    private static Map<String, Object> state(String id, Profile prof, Career career, String msg) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("exists", career != null);
        if (career != null) m.putAll(career.toJson());
        m.put("weightClasses", java.util.Arrays.asList(Career.WEIGHT_CLASSES));
        m.put("countries", java.util.Arrays.asList(Fighter.COUNTRIES));
        List<Map<String, Object>> saves = new ArrayList<>();
        for (int i = 0; i < prof.slots.size(); i++) {
            String cid = prof.slots.get(i);
            Career c = career(cid);
            Map<String, Object> e = new LinkedHashMap<>();
            e.put("slot", i);
            e.put("active", cid.equals(prof.active));
            if (c == null) {
                e.put("missing", true);
            } else {
                e.put("name", c.me.displayName());
                e.put("weightClass", Career.WEIGHT_CLASSES[c.weightClass]);
                e.put("style", c.me.style);
                e.put("record", c.me.record());
                e.put("overall", c.me.overall());
                e.put("age", c.me.age);
                e.put("retired", c.retired);
            }
            saves.add(e);
        }
        m.put("saves", saves);
        m.put("maxSaves", Profile.MAX_SLOTS);
        List<Map<String, Object>> hof = new ArrayList<>();
        for (Map<String, Object> e : hallOfFame) {
            Map<String, Object> copy = new LinkedHashMap<>(e);
            Object owner = copy.remove("owner");
            copy.put("mine", id.equals(owner) || prof.slots.contains(owner));
            hof.add(copy);
        }
        hof.sort(Comparator.comparingInt((Map<String, Object> e) -> (Integer) e.get("legacyScore")).reversed());
        m.put("hallOfFame", hof);
        m.put("message", msg);
        return m;
    }

    private static int parseInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException | NullPointerException e) {
            return -1;
        }
    }

    // ---------------------------------------------------------------- saving

    /** Retired careers are added to the shared Hall of Fame exactly once, owned by their career id. */
    private static void induct(String id, Career career) {
        if (career == null || !career.retired || career.inducted) return;
        Map<String, Object> entry = new LinkedHashMap<>(career.hallOfFameEntry());
        entry.put("owner", id);
        hallOfFame.add(entry);
        career.inducted = true;
        try {
            Files.createDirectories(HOF.getParent());
            try (ObjectOutputStream out = new ObjectOutputStream(Files.newOutputStream(HOF))) {
                out.writeObject(hallOfFame);
            }
        } catch (IOException e) {
            System.err.println("Could not save the Hall of Fame: " + e);
        }
    }

    @SuppressWarnings("unchecked")
    private static ArrayList<Map<String, Object>> loadHallOfFame() {
        if (!Files.exists(HOF)) return new ArrayList<>();
        try (ObjectInputStream in = new ObjectInputStream(Files.newInputStream(HOF))) {
            return (ArrayList<Map<String, Object>>) in.readObject();
        } catch (Exception e) {
            System.err.println("Hall of Fame unreadable: " + e);
            return new ArrayList<>();
        }
    }

    private static void saveCareer(String cid, Career career) {
        write(CAREERS.resolve(cid + ".dat"), career);
    }

    private static Career loadCareer(String cid) {
        Object o = read(CAREERS.resolve(cid + ".dat"));
        return o instanceof Career c ? c : null;
    }

    private static void saveProfile(String id, Profile prof) {
        write(PROFILES.resolve(id + ".profile"), prof);
    }

    /** Loads a profile; a pre-save-slot save (players/<id>.dat) becomes the profile's first slot. */
    private static Profile loadProfile(String id) {
        if (read(PROFILES.resolve(id + ".profile")) instanceof Profile prof) return prof;
        Profile prof = new Profile();
        Path legacy = PROFILES.resolve(id + ".dat");
        if (read(legacy) instanceof Career c) {
            String cid = newId();
            saveCareer(cid, c);
            prof.add(cid);
            saveProfile(id, prof);
            try {
                Files.delete(legacy);
            } catch (IOException e) {
                System.err.println("Could not remove migrated save " + legacy + ": " + e);
            }
        }
        return prof;
    }

    private static void write(Path file, Object o) {
        try {
            Files.createDirectories(file.getParent());
            try (ObjectOutputStream out = new ObjectOutputStream(Files.newOutputStream(file))) {
                out.writeObject(o);
            }
        } catch (IOException e) {
            System.err.println("Could not save " + file + ": " + e);
        }
    }

    private static Object read(Path file) {
        if (!Files.exists(file)) return null;
        try (ObjectInputStream in = new ObjectInputStream(Files.newInputStream(file))) {
            return in.readObject();
        } catch (Exception e) {
            System.err.println("Save " + file + " unreadable: " + e);
            return null;
        }
    }

    // ---------------------------------------------------------------- http plumbing

    private static Map<String, String> params(HttpExchange ex) throws IOException {
        Map<String, String> p = new HashMap<>();
        parseForm(ex.getRequestURI().getRawQuery(), p);
        try (InputStream in = ex.getRequestBody()) {
            parseForm(new String(in.readNBytes(MAX_BODY), StandardCharsets.UTF_8), p);
        }
        return p;
    }

    private static void parseForm(String s, Map<String, String> into) {
        if (s == null || s.isEmpty()) return;
        for (String pair : s.split("&")) {
            int i = pair.indexOf('=');
            String k = i < 0 ? pair : pair.substring(0, i);
            String v = i < 0 ? "" : pair.substring(i + 1);
            try {
                into.put(URLDecoder.decode(k, StandardCharsets.UTF_8), URLDecoder.decode(v, StandardCharsets.UTF_8));
            } catch (IllegalArgumentException ignored) {
                // malformed percent-encoding: skip the pair
            }
        }
    }

    private static void files(HttpExchange ex) throws IOException {
        String path = ex.getRequestURI().getPath();
        if (path.equals("/")) path = "/index.html";
        Path file = webRoot.resolve(path.substring(1)).normalize();
        if (!file.startsWith(webRoot) || !Files.isRegularFile(file)) {
            send(ex, 404, "text/plain", "Not found".getBytes(StandardCharsets.UTF_8));
            return;
        }
        send(ex, 200, contentType(file.toString()), Files.readAllBytes(file));
    }

    private static String contentType(String name) {
        if (name.endsWith(".html")) return "text/html; charset=utf-8";
        if (name.endsWith(".css")) return "text/css; charset=utf-8";
        if (name.endsWith(".js")) return "application/javascript; charset=utf-8";
        if (name.endsWith(".json")) return "application/json; charset=utf-8";
        if (name.endsWith(".svg")) return "image/svg+xml";
        if (name.endsWith(".png")) return "image/png";
        return "application/octet-stream";
    }

    private static void send(HttpExchange ex, int status, String type, byte[] body) throws IOException {
        ex.getResponseHeaders().set("Content-Type", type);
        ex.getResponseHeaders().set("Cache-Control", "no-store");
        ex.getResponseHeaders().set("X-Content-Type-Options", "nosniff");
        ex.sendResponseHeaders(status, body.length);
        try (OutputStream out = ex.getResponseBody()) {
            out.write(body);
        }
    }
}
