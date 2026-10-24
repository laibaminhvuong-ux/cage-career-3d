package mma;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Random;

/** A fighter: the player or any NPC. Stats run 1-99. */
public class Fighter implements Serializable {
    private static final long serialVersionUID = 1L;

    public static final String[] STATS = {"striking", "power", "speed", "wrestling", "grappling", "cardio", "chin"};
    public static final String[] STYLES = {"Striker", "Wrestler", "Jiu-Jitsu", "Balanced"};

    private static final String[] FIRST = {
        "Marcus", "Diego", "Ivan", "Kenji", "Tariq", "Lucas", "Mateo", "Andre", "Sergei", "Malik",
        "Rafael", "Connor", "Jamal", "Tomasz", "Kai", "Darius", "Elijah", "Bruno", "Nikolai", "Omar",
        "Viktor", "Hiroshi", "Leon", "Caleb", "Arman", "Zane", "Felipe", "Yusuf", "Dmitri", "Jae-won",
        "Mason", "Tyrell", "Santiago", "Emeka", "Rustam", "Liam", "Paulo", "Gabe", "Anton", "Quinn"
    };
    private static final String[] LAST = {
        "Silva", "Petrov", "Okafor", "Tanaka", "Reyes", "Kowalski", "Brennan", "Haddad", "Volkov", "Santos",
        "Mendes", "Novak", "Adeyemi", "Kim", "Duarte", "Morales", "Ivanov", "Walsh", "Nakamura", "Costa",
        "Abdullaev", "Fischer", "Okoye", "Lindqvist", "Moreau", "Gutierrez", "Tsarukyan", "Barros", "Hughes", "Nguyen",
        "Castillo", "Yamamoto", "Kruger", "Dvorak", "Ferreira", "O'Rourke", "Bakr", "Salazar", "Jensen", "Popescu"
    };
    private static final String[] NICKS = {
        "The Hammer", "Iceman", "The Machine", "Bulldozer", "The Python", "Lights Out", "Storm", "The Reaper",
        "Mad Dog", "The Surgeon", "Thunder", "The Wolf", "Cyclone", "The Anaconda", "Dynamite", "Ghost",
        "The Butcher", "Smooth", "The Natural", "Venom", "Tank", "Kid Danger", "The Professor", "Wildfire"
    };
    public static final String[] COUNTRIES = {
        "USA", "Brazil", "Russia", "Mexico", "Ireland", "Japan", "Nigeria", "Poland", "Australia", "Canada",
        "Georgia", "Sweden", "England", "South Korea", "France", "Kazakhstan", "Netherlands", "Cuba", "Vietnam", "Philippines"
    };

    public String name, nickname, style, country;
    public int age;
    public final Map<String, Double> stats = new LinkedHashMap<>();
    public int wins, losses, draws, koWins, subWins, decWins;
    /** Positive = win streak, negative = losing streak. */
    public int streak;
    public boolean player;
    /** Appearance for the 3D model: "skin,hair,hairColor,beard,shorts" as digits. Null means derive it from the name. */
    public String look;

    public Fighter(String name, String nickname, String style, String country, int age) {
        this.name = name;
        this.nickname = nickname == null ? "" : nickname;
        this.style = style;
        this.country = country;
        this.age = age;
        for (String s : STATS) stats.put(s, 40.0);
    }

    public double get(String stat) {
        return stats.getOrDefault(stat, 0.0);
    }

    public void set(String stat, double v) {
        stats.put(stat, Math.max(1, Math.min(99, v)));
    }

    public void add(String stat, double delta) {
        set(stat, get(stat) + delta);
    }

    public int overall() {
        double sum = 0;
        for (String s : STATS) sum += get(s);
        return (int) Math.round(sum / STATS.length);
    }

    public String record() {
        return wins + "-" + losses + "-" + draws;
    }

    public String lastName() {
        return name.substring(name.lastIndexOf(' ') + 1);
    }

    public String displayName() {
        if (nickname.isBlank()) return name;
        int i = name.lastIndexOf(' ');
        if (i < 0) return name + " \"" + nickname + "\"";
        return name.substring(0, i) + " \"" + nickname + "\" " + name.substring(i + 1);
    }

    /** result is W, L or D; method is KO, SUB or DEC. */
    public void recordResult(String result, String method) {
        switch (result) {
            case "W" -> {
                wins++;
                streak = streak > 0 ? streak + 1 : 1;
                switch (method) {
                    case "KO" -> koWins++;
                    case "SUB" -> subWins++;
                    default -> decWins++;
                }
            }
            case "L" -> {
                losses++;
                streak = streak < 0 ? streak - 1 : -1;
            }
            default -> {
                draws++;
                streak = 0;
            }
        }
    }

    /** How a fighting style shifts each stat away from the baseline. */
    public static double bias(String style, String stat) {
        return switch (style) {
            case "Striker" -> switch (stat) {
                case "striking" -> 12; case "power" -> 8; case "speed" -> 6;
                case "wrestling" -> -8; case "grappling" -> -10; default -> 0;
            };
            case "Wrestler" -> switch (stat) {
                case "wrestling" -> 14; case "cardio" -> 7; case "grappling" -> 3; case "power" -> 2;
                case "striking" -> -6; case "speed" -> -3; default -> 0;
            };
            case "Jiu-Jitsu" -> switch (stat) {
                case "grappling" -> 16; case "wrestling" -> 3; case "cardio" -> 3;
                case "striking" -> -8; case "power" -> -6; default -> 0;
            };
            default -> 0;
        };
    }

    /** Heavier divisions hit harder but move slower. */
    public static double weightAdj(int weightClass, String stat) {
        double w = weightClass - 3.5;
        return switch (stat) {
            case "power" -> w * 1.6;
            case "speed" -> -w * 1.6;
            case "chin" -> w * 0.6;
            default -> 0;
        };
    }

    public static Fighter generate(Random rng, double target, int weightClass) {
        String style = STYLES[rng.nextInt(STYLES.length)];
        String name = FIRST[rng.nextInt(FIRST.length)] + " " + LAST[rng.nextInt(LAST.length)];
        String nick = rng.nextDouble() < 0.6 ? NICKS[rng.nextInt(NICKS.length)] : "";
        Fighter f = new Fighter(name, nick, style, COUNTRIES[rng.nextInt(COUNTRIES.length)], 22 + rng.nextInt(13));
        for (String s : STATS) {
            f.set(s, target + bias(style, s) + weightAdj(weightClass, s) + rng.nextGaussian() * 4);
        }
        f.wins = Math.max(0, (int) ((target - 30) / 3.5) + rng.nextInt(4));
        f.losses = rng.nextInt(2 + f.wins / 4);
        f.draws = rng.nextDouble() < 0.15 ? 1 : 0;
        f.koWins = rng.nextInt(f.wins + 1) / 2;
        f.subWins = rng.nextInt(f.wins - f.koWins + 1) / 2;
        f.decWins = f.wins - f.koWins - f.subWins;
        f.streak = rng.nextInt(4);
        return f;
    }

    public Map<String, Object> toJson() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("name", name);
        m.put("nickname", nickname);
        m.put("displayName", displayName());
        m.put("style", style);
        m.put("country", country);
        m.put("age", age);
        m.put("record", record());
        m.put("overall", overall());
        m.put("koWins", koWins);
        m.put("subWins", subWins);
        m.put("decWins", decWins);
        m.put("streak", streak);
        m.put("stats", new LinkedHashMap<>(stats));
        m.put("look", look);
        return m;
    }
}
