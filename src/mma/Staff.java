package mma;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Random;

/** A member of the fighter's team. Quality is 1-5 stars. */
public class Staff implements Serializable {
    private static final long serialVersionUID = 1L;

    public static final String[] ROLES = {"head", "striking", "wrestling", "bjj", "snc", "physio", "manager"};
    static final long[] SALARY = {0, 100, 250, 600, 1500, 3500};

    private static final String[] FIRST = {
        "Greg", "Rafa", "Mike", "Duke", "Javier", "Firas", "Trevor", "Eddie", "Mark", "Henri",
        "Ray", "Sam", "Bas", "Andre", "Lou", "Teo", "Frankie", "Coach Kim", "Pat", "Oleg"
    };
    private static final String[] LAST = {
        "Jacobsen", "Cordova", "Winkler", "Rourke", "Mendez", "Haddadi", "Whitlock", "Bravo", "Delgado", "Dunmore",
        "Lombardi", "Kearney", "Tatum", "Mirkovic", "Sauer", "Benítez", "Reed", "Holmberg", "Okafor", "Varga"
    };

    public final String role, name;
    public final int stars;

    public Staff(String role, String name, int stars) {
        this.role = role;
        this.name = name;
        this.stars = stars;
    }

    public long salary() {
        return SALARY[stars];
    }

    public long signingFee() {
        return salary() * 4;
    }

    /** The minimum fame a fighter needs before this person will sign. */
    public int fameRequired() {
        return (stars - 1) * 12;
    }

    public static String title(String role) {
        return switch (role) {
            case "head" -> "Head Coach";
            case "striking" -> "Striking Coach";
            case "wrestling" -> "Wrestling Coach";
            case "bjj" -> "BJJ Coach";
            case "snc" -> "Strength & Conditioning";
            case "physio" -> "Physio";
            case "manager" -> "Manager";
            default -> role;
        };
    }

    public static String perk(String role, int s) {
        return switch (role) {
            case "head" -> "+" + 3 * s + "% all training, +" + 2 * s + " stamina between rounds"
                + (s >= 3 ? ", scouts the opponent's game plan" : "");
            case "striking" -> "+" + 10 * s + "% striking, power & speed training";
            case "wrestling" -> "+" + 10 * s + "% wrestling training";
            case "bjj" -> "+" + 10 * s + "% grappling training";
            case "snc" -> "+" + 10 * s + "% cardio & chin training, -" + s + " energy per session";
            case "physio" -> "-" + 15 * s + "% injury risk, faster healing, +" + 3 * s + " energy on rest weeks";
            case "manager" -> "+" + 5 * s + "% purses, extra fame from media & trash talk";
            default -> "";
        };
    }

    public static Staff generate(Random rng) {
        String role = ROLES[rng.nextInt(ROLES.length)];
        double r = rng.nextDouble();
        int stars = r < 0.30 ? 1 : r < 0.60 ? 2 : r < 0.82 ? 3 : r < 0.94 ? 4 : 5;
        return new Staff(role, FIRST[rng.nextInt(FIRST.length)] + " " + LAST[rng.nextInt(LAST.length)], stars);
    }

    public Map<String, Object> toJson() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("role", role);
        m.put("title", title(role));
        m.put("name", name);
        m.put("stars", stars);
        m.put("salary", salary());
        m.put("fee", signingFee());
        m.put("fameRequired", fameRequired());
        m.put("perk", perk(role, stars));
        return m;
    }
}
