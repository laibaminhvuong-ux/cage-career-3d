package mma;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

/** Round-by-round fight simulation. The player picks a game plan before each round. */
public class Fight implements Serializable {
    private static final long serialVersionUID = 1L;
    static final int ROUND_SECONDS = 300;

    public enum Plan {
        BALANCED(1.0, 1.0), STRIKE(1.2, 1.0), WRESTLE(1.1, 1.3), SUBMIT(1.0, 1.15), COUNTER(0.6, 0.65), ALLOUT(1.6, 1.9);

        final double aggression, drain;

        Plan(double aggression, double drain) {
            this.aggression = aggression;
            this.drain = drain;
        }
    }

    static final String[] COMBOS = {
        "jab-cross", "stiff jab", "overhand right", "left hook", "body kick", "leg kick", "uppercut",
        "spinning back fist", "knee up the middle", "1-2-hook combination", "straight left", "calf kick"
    };
    static final String[] BIG_SHOTS = {
        "crushing overhand right", "perfectly timed left hook", "head kick", "flying knee", "short uppercut", "counter right hand"
    };
    static final String[] TAKEDOWNS = {
        "shoots a double-leg", "hits a single-leg", "secures a body lock", "times a reactive takedown", "trips from the clinch"
    };
    static final String[] SUBS_TOP = {"rear-naked choke", "arm-triangle choke", "kimura", "D'Arce choke", "armbar", "guillotine choke"};
    static final String[] SUBS_BOTTOM = {"triangle choke", "armbar", "guillotine choke", "kimura", "heel hook", "omoplata"};

    static class Corner implements Serializable {
        private static final long serialVersionUID = 1L;
        final Fighter f;
        final String tag;
        double damage, stamina = 100, bonus;
        Plan plan = Plan.BALANCED;
        // current round
        int sig, td, kd, control, subAtt;
        double dealt;
        // whole fight
        int totSig, totTd, totKd;

        Corner(Fighter f, String tag) {
            this.f = f;
            this.tag = tag;
        }

        double s(String stat) {
            return Math.min(99, f.get(stat) + bonus);
        }

        /** Stamina factor: gassed fighters are less effective. */
        double sf() {
            return 0.45 + stamina / 180.0;
        }

        String n() {
            return f.lastName();
        }

        void newRound() {
            sig = td = kd = control = subAtt = 0;
            dealt = 0;
        }

        Map<String, Object> toJson() {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("name", f.displayName());
            m.put("record", f.record());
            m.put("overall", f.overall());
            m.put("style", f.style);
            m.put("look", f.look);
            m.put("realName", f.name);
            m.put("health", Math.max(0, 100 - damage));
            m.put("stamina", Math.max(0, stamina));
            m.put("sig", totSig);
            m.put("td", totTd);
            m.put("kd", totKd);
            m.put("plan", plan.name());
            return m;
        }
    }

    final Corner p, o;
    final Random rng;
    public final int rounds;
    public final boolean title;
    public int round;
    public boolean finished;
    /** "player", "opponent" or "draw". */
    public String winner;
    /** KO, SUB or DEC. */
    public String methodType;
    public String method;
    public int endRound;
    public String endTime;
    final int[][] judges = new int[3][2];
    final List<List<Map<String, Object>>> logs = new ArrayList<>();
    private List<Map<String, Object>> current;
    private boolean ground;
    private Corner top;
    private int clock;
    /** Head coach quality: 3+ stars scouts the opponent's next game plan. */
    private final int coachStars;
    private Plan oppNext;

    public Fight(Fighter player, Fighter opponent, int rounds, boolean title, Random rng, double oppBonus, int coachStars) {
        this.p = new Corner(player, "p");
        this.o = new Corner(opponent, "o");
        this.o.bonus = oppBonus;
        this.rounds = rounds;
        this.title = title;
        this.rng = rng;
        this.coachStars = coachStars;
        this.oppNext = aiPlan(1);
    }

    public double playerDamage() {
        return p.damage;
    }

    public void simulateRound(Plan playerPlan) {
        if (finished) throw new GameException("The fight is over.");
        round++;
        p.plan = playerPlan;
        o.plan = oppNext;
        p.newRound();
        o.newRound();
        ground = false;
        top = null;
        clock = 0;
        current = new ArrayList<>();
        logs.add(current);
        ev("info", null, "Round " + round + " — touch gloves and let's go!");

        while (!finished) {
            int step = 10 + rng.nextInt(16);
            if (clock + step >= ROUND_SECONDS) {
                if (ground) top.control += ROUND_SECONDS - clock;
                clock = ROUND_SECONDS;
                break;
            }
            clock += step;
            if (ground) {
                top.control += step;
                groundExchange();
            } else {
                standExchange();
            }
        }
        if (!finished) endRound();
    }

    private Plan aiPlan(int forRound) {
        Plan base = switch (o.f.style) {
            case "Striker" -> Plan.STRIKE;
            case "Wrestler" -> Plan.WRESTLE;
            case "Jiu-Jitsu" -> Plan.SUBMIT;
            default -> Plan.BALANCED;
        };
        double r = rng.nextDouble();
        if (forRound == rounds && rounds > 1 && cardLead() > 0 && r < 0.6) return Plan.ALLOUT;
        if (o.damage > 60 && r < 0.4) return o.f.style.equals("Striker") ? Plan.COUNTER : Plan.WRESTLE;
        if (r < 0.2) return Plan.BALANCED;
        return base;
    }

    /** Positive when the player leads on the judges' cards. */
    private int cardLead() {
        int lead = 0;
        for (int[] j : judges) lead += j[0] - j[1];
        return lead;
    }

    private Corner other(Corner c) {
        return c == p ? o : p;
    }

    private double drain(Corner c) {
        return 3.5 * (1.6 - c.s("cardio") / 100.0) * c.plan.drain;
    }

    private void standExchange() {
        double wp = p.plan.aggression * (p.s("speed") + 50) * p.sf();
        double wo = o.plan.aggression * (o.s("speed") + 50) * o.sf();
        Corner a = rng.nextDouble() * (wp + wo) < wp ? p : o;
        Corner d = other(a);

        double tdChance = switch (a.plan) {
            case STRIKE -> 0.08;
            case WRESTLE -> 0.55;
            case SUBMIT -> 0.45;
            case COUNTER -> 0.15;
            case ALLOUT -> 0.05;
            default -> clamp(0.22 + ((a.s("wrestling") - d.s("wrestling")) - (a.s("striking") - d.s("striking"))) / 150.0, 0.05, 0.6);
        };
        if (rng.nextDouble() < tdChance) takedown(a, d);
        else strike(a, d, false);

        if (!finished && !ground) {
            double fireBack = d.plan == Plan.COUNTER ? 0.5 : 0.2;
            if (rng.nextDouble() < fireBack) strike(d, a, true);
        }
    }

    private void strike(Corner a, Corner d, boolean counter) {
        int thrown = 2 + rng.nextInt(4) + (a.plan == Plan.ALLOUT ? 2 : 0);
        double acc = 0.38 + (a.s("striking") - d.s("striking")) * 0.004 + (a.s("speed") - d.s("speed")) * 0.002;
        acc = acc * a.sf() + (counter ? 0.06 : 0) - (d.plan == Plan.COUNTER ? 0.05 : 0) + d.damage / 500.0;
        acc = clamp(acc, 0.1, 0.75);

        int landed = 0;
        double dmg = 0;
        boolean big = false;
        for (int i = 0; i < thrown; i++) {
            if (rng.nextDouble() < acc) {
                landed++;
                dmg += (0.6 + a.s("power") / 60.0) * (0.5 + rng.nextDouble()) * (a.plan == Plan.ALLOUT ? 1.25 : 1);
                if (!big && rng.nextDouble() < 0.012 + a.s("power") / 3000.0) big = true;
            }
        }
        a.stamina = Math.max(0, a.stamina - drain(a));

        if (landed == 0) {
            if (rng.nextDouble() < 0.35) {
                String combo = pick(COMBOS);
                ev("miss", a, a.n() + " throws " + an(combo) + " but " + d.n() + " slips it.", combo, 0);
            }
            return;
        }
        a.sig += landed;
        a.totSig += landed;

        if (big) {
            dmg += 6 + a.s("power") / 8.0;
            hit(a, d, dmg);
            String shot = pick(BIG_SHOTS);
            double kdChance = (a.s("power") / 100.0) * 0.55 * (1.25 - d.s("chin") / 100.0) + d.damage / 250.0;
            if (rng.nextDouble() < kdChance) {
                a.kd++;
                a.totKd++;
                ev("kd", a, "DOWN GOES " + d.n().toUpperCase() + "! A " + shot + " from " + a.n() + " puts " + d.n() + " on the canvas!", shot, landed);
                double finishChance = 0.2 + d.damage / 180.0 - d.s("chin") / 400.0 + (a.plan == Plan.ALLOUT ? 0.1 : 0);
                if (rng.nextDouble() < finishChance) {
                    if (rng.nextBoolean()) finish(a, "KO", "KO (" + shot + ")");
                    else finish(a, "KO", "TKO (punches)");
                    return;
                }
                d.damage += 4;
                ev("info", d, d.n() + " survives the follow-up and makes it back to the feet!");
            } else {
                ev("big", a, a.n() + " lands " + an(shot) + "! " + d.n() + " is rocked.", shot, landed);
            }
        } else {
            hit(a, d, dmg);
            String combo = pick(COMBOS);
            String text;
            if (counter) text = a.n() + " fires back with " + an(combo) + ".";
            else if (landed >= 4) text = a.n() + " unloads a flurry — " + landed + " strikes land on " + d.n() + ".";
            else if (landed >= 2) text = a.n() + " connects with " + an(combo) + ".";
            else text = a.n() + " lands " + an(combo) + ".";
            ev("strike", a, text, combo, landed);
        }
        checkStoppage(a, d, "punches");
    }

    private void takedown(Corner a, Corner d) {
        double ch = 0.32 + (a.s("wrestling") - d.s("wrestling")) * 0.008;
        ch = clamp(ch * a.sf() + (d.stamina < 35 ? 0.1 : 0), 0.05, 0.85);
        a.stamina = Math.max(0, a.stamina - drain(a) * 1.4);
        if (rng.nextDouble() < ch) {
            a.td++;
            a.totTd++;
            ground = true;
            top = a;
            ev("td", a, a.n() + " " + pick(TAKEDOWNS) + " and takes " + d.n() + " down.");
        } else {
            ev("stuff", d, d.n() + " stuffs a takedown attempt from " + a.n() + ".");
        }
    }

    private void groundExchange() {
        Corner t = top, b = other(top);
        double bottomActs = (b.plan == Plan.SUBMIT ? 0.45 : 0.3) + (b.s("grappling") > t.s("grappling") + 10 ? 0.1 : 0);

        if (rng.nextDouble() < bottomActs) {
            boolean goesForSub = (b.plan == Plan.SUBMIT || (b.s("grappling") > 65 && rng.nextDouble() < 0.35)) && rng.nextDouble() < 0.5;
            if (goesForSub) {
                submission(b, t, true);
            } else {
                double ch = 0.28 + (b.s("wrestling") - t.s("wrestling")) * 0.006 + (b.s("grappling") - t.s("grappling")) * 0.003;
                ch = clamp(ch * b.sf(), 0.05, 0.7);
                if (rng.nextDouble() < ch) {
                    if (b.s("grappling") > t.s("grappling") && rng.nextDouble() < 0.3) {
                        top = b;
                        ev("sweep", b, b.n() + " hits a slick sweep and ends up on top!");
                    } else {
                        ground = false;
                        top = null;
                        ev("info", b, b.n() + " scrambles back to the feet.");
                    }
                } else if (rng.nextDouble() < 0.4) {
                    ev("ground", t, t.n() + " keeps " + b.n() + " pinned against the fence.");
                }
            }
        } else {
            boolean goesForSub = (t.plan == Plan.SUBMIT || (t.s("grappling") > 70 && rng.nextDouble() < 0.25)) && rng.nextDouble() < 0.6;
            if (goesForSub) submission(t, b, false);
            else groundAndPound(t, b);
        }
        t.stamina = Math.max(0, t.stamina - drain(t) * 0.8);
        b.stamina = Math.max(0, b.stamina - drain(b) * 1.1);
    }

    private void groundAndPound(Corner t, Corner b) {
        int thrown = 2 + rng.nextInt(4);
        double acc = 0.45 + (t.s("wrestling") + t.s("grappling") - b.s("wrestling") - b.s("grappling")) * 0.002;
        acc = clamp(acc * t.sf(), 0.2, 0.75);
        int landed = 0;
        double dmg = 0;
        for (int i = 0; i < thrown; i++) {
            if (rng.nextDouble() < acc) {
                landed++;
                dmg += (0.4 + t.s("power") / 80.0) * (0.5 + rng.nextDouble());
            }
        }
        if (landed == 0) {
            if (rng.nextDouble() < 0.5) ev("ground", b, t.n() + " postures up but " + b.n() + " ties up the arms.");
            return;
        }
        t.sig += landed;
        t.totSig += landed;
        hit(t, b, dmg);
        if (landed >= 3) ev("gnp", t, t.n() + " rains down ground and pound — " + landed + " shots land!", "punches", landed);
        else ev("gnp", t, t.n() + " lands " + (landed == 1 ? "a short elbow" : "short punches") + " from top.", landed == 1 ? "elbow" : "punches", landed);
        checkStoppage(t, b, "ground and pound");
    }

    private void submission(Corner a, Corner d, boolean fromBottom) {
        a.subAtt++;
        String sub = pick(fromBottom ? SUBS_BOTTOM : SUBS_TOP);
        double ch = 0.07 + (a.s("grappling") - d.s("grappling")) * 0.006 + d.damage / 400.0 + (d.stamina < 35 ? 0.07 : 0);
        if (fromBottom) ch *= 0.7;
        ch = clamp(ch * a.sf(), 0.01, 0.55);
        a.stamina = Math.max(0, a.stamina - 3);
        ev("subatt", a, a.n() + " locks up " + an(sub) + (fromBottom ? " from the bottom!" : "!"), sub, 0);
        if (rng.nextDouble() < ch) {
            finish(a, "SUB", "Submission (" + sub + ")");
            return;
        }
        ev("info", d, d.n() + " defends and escapes the " + sub + ".");
        if (!fromBottom && rng.nextDouble() < 0.25) {
            ground = false;
            top = null;
            ev("info", d, d.n() + " uses the scramble to get back up.");
        }
    }

    private void hit(Corner a, Corner d, double dmg) {
        d.damage += dmg;
        a.dealt += dmg;
    }

    private void checkStoppage(Corner a, Corner d, String how) {
        if (finished) return;
        if (d.damage >= 100 || (d.damage > 85 && rng.nextDouble() < 0.2)) {
            ev("info", a, "The referee jumps in to save " + d.n() + "!");
            finish(a, "KO", "TKO (" + how + ")");
        }
    }

    private double score(Corner c) {
        return c.sig + c.dealt * 0.6 + c.td * 3 + c.control / 25.0 + c.kd * 10 + c.subAtt * 2;
    }

    private void endRound() {
        double ps = score(p), os = score(o);
        for (int[] j : judges) {
            double pj = ps * (1 + rng.nextGaussian() * 0.12) + rng.nextGaussian() * 1.5;
            double oj = os * (1 + rng.nextGaussian() * 0.12) + rng.nextGaussian() * 1.5;
            double diff = pj - oj;
            int pp = 10, op = 10;
            if (diff >= 0.6) op = (p.kd - o.kd >= 2 || (pj > oj * 3 && diff > 30)) ? 8 : 9;
            else if (diff <= -0.6) pp = (o.kd - p.kd >= 2 || (oj > pj * 3 && -diff > 30)) ? 8 : 9;
            j[0] += pp;
            j[1] += op;
        }
        ev("round", null, "End of round " + round + ". Sig. strikes " + p.sig + "–" + o.sig
            + ", takedowns " + p.td + "–" + o.td + ", control " + fmt(p.control) + "–" + fmt(o.control) + ".");

        for (Corner c : new Corner[]{p, o}) {
            c.stamina = Math.min(100, c.stamina + 18 + c.s("cardio") / 5 + (c == p ? coachStars * 2 : 0));
            c.damage = Math.max(0, c.damage - 4);
        }
        for (Corner c : new Corner[]{p, o}) {
            if (c.damage > 85 && rng.nextDouble() < 0.15) {
                ev("info", c, "The cageside doctor takes a look at " + c.n() + " and waves it off!");
                finish(other(c), "KO", "TKO (doctor stoppage)");
                return;
            }
        }
        if (round == rounds) decision();
        else oppNext = aiPlan(round + 1);
    }

    private void decision() {
        int pw = 0, ow = 0;
        for (int[] j : judges) {
            if (j[0] > j[1]) pw++;
            else if (j[1] > j[0]) ow++;
        }
        finished = true;
        methodType = "DEC";
        endRound = rounds;
        endTime = "5:00";
        if (pw >= 2) {
            winner = "player";
            method = pw == 3 ? "Unanimous Decision" : ow == 1 ? "Split Decision" : "Majority Decision";
        } else if (ow >= 2) {
            winner = "opponent";
            method = ow == 3 ? "Unanimous Decision" : pw == 1 ? "Split Decision" : "Majority Decision";
        } else {
            winner = "draw";
            method = pw == 0 && ow == 0 ? "Unanimous Draw" : pw == 1 && ow == 1 ? "Split Draw" : "Majority Draw";
        }
        String verdict = winner.equals("draw") ? "This one is a draw!"
            : "Winner by " + method + ": " + (winner.equals("player") ? p : o).f.displayName() + "!";
        ev("finish", winner.equals("draw") ? null : winner.equals("player") ? p : o,
            "The judges score it " + String.join(", ", cards()) + ". " + verdict);
    }

    private void finish(Corner w, String type, String detail) {
        finished = true;
        winner = w == p ? "player" : "opponent";
        methodType = type;
        method = detail;
        endRound = round;
        endTime = fmt(clock);
        ev("finish", w, "IT'S ALL OVER! " + w.f.displayName() + " wins by " + detail + " at " + endTime + " of round " + round + "!");
    }

    private List<String> cards() {
        List<String> c = new ArrayList<>();
        for (int[] j : judges) c.add(j[0] + "-" + j[1]);
        return c;
    }

    private void ev(String type, Corner side, String text) {
        ev(type, side, text, null, 0);
    }

    /** Each event also records where the fight is afterwards ("g": tag of the fighter on top, "" standing)
     *  and the technique and strikes landed, so the 3D arena can act it out. */
    private void ev(String type, Corner side, String text, String move, int landed) {
        Map<String, Object> e = new LinkedHashMap<>();
        e.put("t", fmt(clock));
        e.put("type", type);
        e.put("side", side == null ? "n" : side.tag);
        e.put("text", text);
        e.put("g", ground && top != null ? top.tag : "");
        if (move != null) e.put("move", move);
        if (landed > 0) e.put("n", landed);
        current.add(e);
    }

    private static String an(String noun) {
        return ("aeiou".indexOf(Character.toLowerCase(noun.charAt(0))) >= 0 ? "an " : "a ") + noun;
    }

    private String pick(String[] arr) {
        return arr[rng.nextInt(arr.length)];
    }

    static double clamp(double v, double lo, double hi) {
        return Math.max(lo, Math.min(hi, v));
    }

    static String fmt(int seconds) {
        return (seconds / 60) + ":" + String.format("%02d", seconds % 60);
    }

    public Map<String, Object> toJson() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("round", round);
        m.put("rounds", rounds);
        m.put("title", title);
        m.put("finished", finished);
        m.put("winner", winner);
        m.put("methodType", methodType);
        m.put("method", method);
        m.put("endRound", endRound);
        m.put("endTime", endTime);
        m.put("player", p.toJson());
        m.put("opponent", o.toJson());
        m.put("logs", logs);
        m.put("cards", finished ? cards() : null);
        m.put("scout", coachStars >= 3 && !finished ? oppNext.name() : null);
        m.put("oppFiredUp", o.bonus > 0);
        return m;
    }
}
