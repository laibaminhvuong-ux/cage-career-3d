package mma;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

/** The whole save game: the player's fighter, team, finances, rival, the division and the calendar. */
public class Career implements Serializable {
    private static final long serialVersionUID = 2L;

    public static final String[] WEIGHT_CLASSES = {
        "Flyweight", "Bantamweight", "Featherweight", "Lightweight", "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"
    };
    static final String[] GYM_NAMES = {"Garage Gym", "Local MMA Club", "Regional Fight Team", "Elite Camp", "World-Class Academy"};
    static final long[] GYM_COST = {0, 3000, 15000, 50000, 150000};
    static final double[] GYM_MULT = {1.0, 1.25, 1.5, 1.8, 2.1};
    static final int[] GYM_FEE = {50, 150, 400, 1000, 2500};
    static final int CONTENDER_WINS = 3, CONTENDER_OVR = 52, RANKED = 16, DIVISION_COOLDOWN = 26;

    static class Offer implements Serializable {
        private static final long serialVersionUID = 1L;
        final Fighter opp;
        int weeks;
        long purse, winBonus;
        final int rounds;
        final boolean title, contender;
        /** 0 = none, 1 = trash talk, 2 = personal. */
        int talkLevel;
        /** Stat bonus the opponent brings into the fight after being provoked. */
        double oppBonus;

        Offer(Fighter opp, int weeks, long purse, long winBonus, int rounds, boolean title, boolean contender) {
            this.opp = opp;
            this.weeks = weeks;
            this.purse = purse;
            this.winBonus = winBonus;
            this.rounds = rounds;
            this.title = title;
            this.contender = contender;
        }
    }

    final Random rng = new Random();
    public final Fighter me;
    public int weightClass;
    public int week = 1, energy = 100, fame, injuryWeeks, gym, offersAge;
    public long money = 1500, earnings;
    public boolean gfc, retired, inducted;
    public int regionalWins, titleDefenses, titlesWon, peakOverall;
    int lastDivisionChange = -999, lastTalkWeek = -1;
    final Set<String> divisionsWon = new LinkedHashSet<>();
    final Set<String> divisionsFought = new LinkedHashSet<>();
    /** Index 0 is the champion, 1-15 the ranked contenders. May contain the player. */
    final List<Fighter> rankings = new ArrayList<>();
    final List<Offer> offers = new ArrayList<>();
    Offer scheduled;
    Fight fight;
    final LinkedList<String> news = new LinkedList<>();
    final List<Map<String, Object>> history = new ArrayList<>();
    Map<String, Object> lastResult, lastTalk;

    // team
    final Map<String, Staff> team = new LinkedHashMap<>();
    final List<Staff> market = new ArrayList<>();
    int marketAge;

    // rivalry
    Fighter rival;
    int rivalHeat, rivalWins, rivalLosses, weeksWithoutRival, lastRivalFight = -999;
    static final int GRUDGE_HEAT = 60, GRUDGE_GAP = 20;
    final List<String> rivalries = new ArrayList<>();

    public Career(String name, String nickname, int weightClass, String style, String country) {
        this.weightClass = weightClass;
        me = new Fighter(name, nickname, style, country, 21);
        me.player = true;
        for (String s : Fighter.STATS) {
            me.set(s, 38 + Fighter.bias(style, s) + Fighter.weightAdj(weightClass, s) + rng.nextGaussian() * 3);
        }
        peakOverall = me.overall();
        divisionsFought.add(WEIGHT_CLASSES[weightClass]);
        buildDivision();
        log(me.name + " turns pro out of a " + GYM_NAMES[0] + ". The journey begins.");

        Fighter r = Fighter.generate(rng, me.overall() + 1, weightClass);
        r.age = 21 + rng.nextInt(2);
        r.wins = r.losses = r.draws = r.koWins = r.subWins = r.decWins = r.streak = 0;
        setRival(r, 30, "came up in the same amateur scene and has been telling everyone you're overrated");
        refreshMarket();
        generateOffers();
    }

    private void buildDivision() {
        rankings.clear();
        for (int i = 0; i < RANKED; i++) rankings.add(Fighter.generate(rng, 88 - i * 1.2, weightClass));
    }

    // ---------------------------------------------------------------- weekly actions

    public String act(String type, String stat) {
        requireActive();
        String msg;
        switch (type == null ? "" : type) {
            case "train" -> {
                if (!Arrays.asList(Fighter.STATS).contains(stat)) throw new GameException("Unknown stat.");
                if (injuryWeeks > 0) throw new GameException("You're injured — rest up first.");
                if (energy < trainCost()) throw new GameException("Too exhausted to train. Take a rest week.");
                double before = me.get(stat);
                me.add(stat, trainGain(stat) * (stat.equals("chin") ? 0.5 : 1));
                boolean hurt = energy < 35 && rng.nextDouble() < 0.06 * injuryRisk();
                energy -= trainCost();
                msg = String.format("Trained %s: +%.1f", stat, me.get(stat) - before);
                if (hurt) msg += injure(1 + rng.nextInt(3), "overtraining");
            }
            case "spar" -> {
                if (injuryWeeks > 0) throw new GameException("You're injured — rest up first.");
                if (energy < 30) throw new GameException("Too exhausted to spar. Take a rest week.");
                for (String s : new String[]{"striking", "wrestling", "grappling", "speed"}) me.add(s, trainGain(s) * 0.45);
                me.add("chin", -0.15);
                energy -= 30;
                msg = "Hard sparring — gains in striking, wrestling, grappling and speed.";
                if (rng.nextDouble() < 0.08 * injuryRisk()) msg += injure(1 + rng.nextInt(3), "sparring");
            }
            case "rest" -> {
                energy = Math.min(100, energy + 35 + 3 * stars("physio"));
                if (injuryWeeks > 0) injuryWeeks--;
                msg = "Rest week. Energy recovered.";
            }
            case "media" -> {
                if (energy < 10) throw new GameException("Too exhausted even for interviews.");
                int gain = 1 + rng.nextInt(gfc ? 5 : 3) + stars("manager") / 2;
                long pay = gfc ? 1500 + fame * 50L : 100;
                fame = Math.min(100, fame + gain);
                money += pay;
                energy -= 10;
                msg = "Media week: +" + gain + " fame, +$" + String.format("%,d", pay) + ".";
            }
            case "work" -> {
                if (energy < 15) throw new GameException("Too exhausted to teach classes.");
                long pay = gfc ? 2000 + fame * 60L : 450;
                money += pay;
                energy -= 15;
                msg = (gfc ? "Ran a seminar" : "Taught classes at the gym") + ": +$" + String.format("%,d", pay) + ".";
            }
            default -> throw new GameException("Unknown action.");
        }
        advanceWeek();
        return msg;
    }

    private int trainCost() {
        return 22 - stars("snc");
    }

    private double trainGain(String stat) {
        double cur = me.get(stat);
        return 4.0 * GYM_MULT[gym] * staffMult(stat) * ageFactor() * Math.pow(Math.max(0.01, 1 - cur / 97.5), 1.6)
            * (0.4 + energy / 166.0) * (0.7 + rng.nextDouble() * 0.6);
    }

    private double staffMult(String stat) {
        double m = 1 + 0.03 * stars("head");
        m += 0.10 * switch (stat) {
            case "striking", "power", "speed" -> stars("striking");
            case "wrestling" -> stars("wrestling");
            case "grappling" -> stars("bjj");
            default -> stars("snc");
        };
        return m;
    }

    private double ageFactor() {
        if (me.age <= 24) return 1.15;
        if (me.age <= 28) return 1.0;
        if (me.age <= 31) return 0.8;
        if (me.age <= 34) return 0.55;
        return 0.35;
    }

    private double injuryRisk() {
        return 1 - 0.15 * stars("physio");
    }

    private String injure(int weeks, String cause) {
        weeks = Math.max(1, weeks - stars("physio") / 2);
        injuryWeeks = Math.max(injuryWeeks, weeks);
        log("Injured (" + cause + "): out " + weeks + " week" + (weeks == 1 ? "" : "s") + ".");
        return " Ouch — injured for " + weeks + " week" + (weeks == 1 ? "" : "s") + ".";
    }

    public String upgradeGym() {
        if (retired) throw new GameException("Your career is over.");
        if (gym >= GYM_NAMES.length - 1) throw new GameException("You're already at the best gym in the world.");
        long cost = GYM_COST[gym + 1];
        if (money < cost) throw new GameException("You need $" + String.format("%,d", cost) + " to move to " + GYM_NAMES[gym + 1] + ".");
        money -= cost;
        gym++;
        log("Moved training camp to " + GYM_NAMES[gym] + ".");
        return "Welcome to " + GYM_NAMES[gym] + "! Training is now " + Math.round(GYM_MULT[gym] * 100) + "% effective.";
    }

    public String accept(int index) {
        requireActive();
        if (scheduled != null) throw new GameException("You already have a fight booked.");
        if (index < 0 || index >= offers.size()) throw new GameException("That offer is no longer available.");
        Offer o = offers.get(index);
        if (injuryWeeks >= o.weeks) throw new GameException("You won't be healed in time for that fight.");
        scheduled = o;
        offers.clear();
        log("Booked: " + (o.title ? "TITLE FIGHT " : o.opp == rival ? "GRUDGE MATCH " : "") + "vs " + o.opp.displayName() + " in " + o.weeks + " weeks.");
        return "Fight booked! Get to work — fight night is in " + o.weeks + " weeks.";
    }

    public String retire() {
        if (retired) throw new GameException("You're already retired.");
        if (fight != null) throw new GameException("Finish your fight first.");
        endCareer(me.displayName() + " announces retirement at " + me.age + " with a record of " + me.record() + ".");
        return "You hang up the gloves. Legacy: " + legacyTier() + ".";
    }

    private void endCareer(String headline) {
        retired = true;
        scheduled = null;
        offers.clear();
        if (rival != null && rivalWins + rivalLosses > 0) rivalries.add(rivalSummary());
        log(headline);
    }

    private void requireActive() {
        if (retired) throw new GameException("Your career is over.");
        if (fight != null) throw new GameException("Finish your fight first.");
        if (fightNight()) throw new GameException("It's fight night! Head to the cage.");
    }

    boolean fightNight() {
        return scheduled != null && scheduled.weeks <= 0;
    }

    // ---------------------------------------------------------------- team

    int stars(String role) {
        Staff s = team.get(role);
        return s == null ? 0 : s.stars;
    }

    private void refreshMarket() {
        market.clear();
        marketAge = 0;
        for (int i = 0; i < 6; i++) market.add(Staff.generate(rng));
    }

    public String hire(int index) {
        if (retired) throw new GameException("Your career is over.");
        if (index < 0 || index >= market.size()) throw new GameException("That person already signed elsewhere.");
        Staff s = market.get(index);
        if (fame < s.fameRequired()) throw new GameException(s.name + " only works with fighters with " + s.fameRequired() + "+ fame.");
        if (money < s.signingFee()) throw new GameException("You need $" + String.format("%,d", s.signingFee()) + " to sign " + s.name + ".");
        money -= s.signingFee();
        market.remove(index);
        Staff old = team.put(s.role, s);
        log("Signed " + s.name + " (" + s.stars + "★ " + Staff.title(s.role) + ")" + (old != null ? ", replacing " + old.name : "") + ".");
        return s.name + " joins the team as " + Staff.title(s.role) + "!";
    }

    public String fire(String role) {
        if (retired) throw new GameException("Your career is over.");
        Staff s = team.remove(role == null ? "" : role);
        if (s == null) throw new GameException("Nobody in that role.");
        log("Parted ways with " + Staff.title(s.role) + " " + s.name + ".");
        return s.name + " has left the team.";
    }

    private long teamSalary() {
        long t = 0;
        for (Staff s : team.values()) t += s.salary();
        return t;
    }

    // ---------------------------------------------------------------- rivals & trash talk

    private void setRival(Fighter f, int heat, String why) {
        rival = f;
        rivalHeat = heat;
        rivalWins = rivalLosses = 0;
        weeksWithoutRival = 0;
        log("RIVALRY: " + f.displayName() + " " + why + ".");
    }

    private String rivalSummary() {
        String n = rival.displayName();
        if (rivalWins > rivalLosses) return "Beat " + n + " " + rivalWins + "-" + rivalLosses;
        if (rivalLosses > rivalWins) return "Lost to " + n + " " + rivalWins + "-" + rivalLosses;
        return "Even with " + n + " " + rivalWins + "-" + rivalLosses;
    }

    /** The rival keeps pace with the player's development, and keeps fighting. */
    private void rivalWeek() {
        if (rival == null) {
            if (++weeksWithoutRival >= 40 && !retired) {
                int r = rankings.indexOf(me);
                Fighter f;
                if (gfc && r > 0) f = rankings.get(Math.max(1, Math.min(rankings.size() - 1, r + (rng.nextBoolean() ? 1 : -1))));
                else f = Fighter.generate(rng, me.overall() + 1, weightClass);
                if (f == me) return;
                setRival(f, 35, "calls you out in a viral interview");
            }
            return;
        }
        if (week % 4 == 0) {
            double gap = me.overall() + 1 - rival.overall();
            for (String s : Fighter.STATS) rival.add(s, gap * 0.25 + rng.nextGaussian() * 0.4);
        }
        if (!rankings.contains(rival) && rng.nextDouble() < 0.12 && (scheduled == null || scheduled.opp != rival)) {
            boolean w = rng.nextDouble() < 0.65;
            double r = rng.nextDouble();
            rival.recordResult(w ? "W" : "L", r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC");
            if (w && rng.nextDouble() < 0.5) log("Your rival " + rival.lastName() + " wins again (" + rival.record() + ") and says you're next.");
        }
        rivalHeat = Math.max(0, rivalHeat - 1);
        if (rivalHeat >= 50 && rng.nextDouble() < 0.08) {
            log(rival.lastName() + ": \"" + TrashTalk.fill(TrashTalk.pick(rng, TrashTalk.CALLOUTS), me.lastName(), rival.lastName()) + "\"");
            rivalHeat = Math.min(100, rivalHeat + 3);
        }
    }

    private void rivalFought(boolean won, boolean lost) {
        lastRivalFight = week;
        if (won) {
            rivalWins++;
            rivalHeat = 15;
        } else if (lost) {
            rivalLosses++;
            rivalHeat = 45;
        }
        if (Math.abs(rivalWins - rivalLosses) >= 2 || rivalWins + rivalLosses >= 5) {
            String s = rivalSummary();
            rivalries.add(s);
            log("Rivalry settled: " + s + ".");
            rival = null;
        }
    }

    public String talk(String target, String tone) {
        if (retired) throw new GameException("Your career is over.");
        if (fight != null) throw new GameException("Finish your fight first.");
        if (lastTalkWeek == week) throw new GameException("You've already said your piece this week.");
        Fighter t;
        if ("rival".equals(target)) {
            if (rival == null) throw new GameException("You don't have a rival right now.");
            t = rival;
        } else {
            if (scheduled == null) throw new GameException("You don't have a fight booked.");
            t = scheduled.opp;
        }
        boolean booked = scheduled != null && scheduled.opp == t;
        boolean isRival = t == rival;
        String mine = me.lastName(), them = t.lastName();
        int mgr = stars("manager");
        String yours, reply;
        List<String> effects = new ArrayList<>();
        int fameGain;

        switch (tone == null ? "" : tone) {
            case "respect" -> {
                yours = TrashTalk.pick(rng, TrashTalk.RESPECT);
                reply = TrashTalk.pick(rng, rng.nextDouble() < 0.7 ? TrashTalk.REPLY_RESPECT : TrashTalk.REPLY_CALM);
                fameGain = 1;
                if (isRival) rivalHeat = Math.max(0, rivalHeat - 5);
                if (isRival) effects.add("Rivalry heat -5");
            }
            case "trash" -> {
                yours = TrashTalk.pick(rng, TrashTalk.TRASH);
                reply = TrashTalk.pick(rng, rng.nextBoolean() ? TrashTalk.REPLY_CALM : TrashTalk.REPLY_ANGRY);
                fameGain = 2 + rng.nextInt(3) + mgr / 2;
                if (isRival) rivalHeat = Math.min(100, rivalHeat + 12);
                if (isRival) effects.add("Rivalry heat +12");
                if (booked) hype(1, 0.08, effects);
            }
            case "personal" -> {
                yours = TrashTalk.pick(rng, TrashTalk.PERSONAL);
                reply = TrashTalk.pick(rng, TrashTalk.REPLY_ANGRY);
                if (rng.nextDouble() < 0.2) {
                    long fine = Math.max(200, money / 20);
                    money -= fine;
                    fameGain = -3;
                    effects.add("The commission fines you $" + String.format("%,d", fine) + " for conduct");
                } else {
                    fameGain = 4 + rng.nextInt(5) + mgr;
                }
                if (isRival) rivalHeat = Math.min(100, rivalHeat + 25);
                if (isRival) effects.add("Rivalry heat +25");
                if (booked) hype(2, 0.15, effects);
            }
            default -> throw new GameException("Pick a tone.");
        }
        fame = Math.max(0, Math.min(100, fame + fameGain));
        effects.add(0, "Fame " + (fameGain >= 0 ? "+" : "") + fameGain);
        lastTalkWeek = week;

        lastTalk = new LinkedHashMap<>();
        lastTalk.put("you", TrashTalk.fill(yours, them, mine));
        lastTalk.put("them", TrashTalk.fill(reply, them, mine));
        lastTalk.put("target", t.displayName());
        lastTalk.put("effects", effects);
        log("Mic work vs " + them + ": \"" + TrashTalk.fill(yours, them, mine) + "\"");
        return null;
    }

    private void hype(int level, double purseBump, List<String> effects) {
        scheduled.talkLevel = Math.max(scheduled.talkLevel, level);
        scheduled.purse = Math.round(scheduled.purse * (1 + purseBump));
        scheduled.winBonus = Math.round(scheduled.winBonus * (1 + purseBump));
        scheduled.oppBonus = Math.min(4.5, scheduled.oppBonus + 1.5 * level);
        effects.add("Purse +" + Math.round(purseBump * 100) + "% from the hype");
        effects.add("Opponent is fired up (+" + scheduled.oppBonus + " to all stats on fight night)");
    }

    // ---------------------------------------------------------------- weight classes

    public String changeDivision(int wc) {
        if (retired) throw new GameException("Your career is over.");
        if (fight != null || scheduled != null) throw new GameException("You can't change divisions with a fight booked.");
        if (wc < 0 || wc >= WEIGHT_CLASSES.length || Math.abs(wc - weightClass) != 1) throw new GameException("You can only move one division at a time.");
        int wait = lastDivisionChange + DIVISION_COOLDOWN - week;
        if (wait > 0) throw new GameException("Your body needs time to adjust. Try again in " + wait + " weeks.");

        int old = weightClass;
        int oldRank = gfc ? rankings.indexOf(me) : -1;
        for (String s : Fighter.STATS) me.add(s, Fighter.weightAdj(wc, s) - Fighter.weightAdj(old, s));
        if (wc < old) me.add("cardio", -2);
        weightClass = wc;
        lastDivisionChange = week;
        divisionsFought.add(WEIGHT_CLASSES[wc]);
        buildDivision();

        String note;
        offers.clear();
        offersAge = 0;
        if (gfc && oldRank == 0) {
            log("Vacates the " + WEIGHT_CLASSES[old] + " belt to chase gold at " + WEIGHT_CLASSES[wc] + "!");
            offers.add(titleOffer(rankings.get(0)));
            note = "Champion vs champion! A superfight for the " + WEIGHT_CLASSES[wc] + " title is on the table.";
        } else {
            if (gfc && oldRank > 0 && oldRank <= 5) {
                rankings.add(10, me);
                trim();
            }
            generateOffers();
            note = gfc && rankings.contains(me) ? "Your reputation earns you the #" + rankings.indexOf(me) + " spot." : "You start unranked in the new division.";
        }
        if (rival != null && rankings.indexOf(rival) < 0 && gfc) {
            for (String s : Fighter.STATS) rival.add(s, Fighter.weightAdj(wc, s) - Fighter.weightAdj(old, s));
            rankings.add(Math.min(13, rankings.size()), rival);
            trim();
        }
        log("Moves " + (wc > old ? "up" : "down") + " to " + WEIGHT_CLASSES[wc] + ".");
        return "Welcome to " + WEIGHT_CLASSES[wc] + "! " + (wc < old ? "The weight cut costs some cardio. " : "More power, a little less speed. ") + note;
    }

    // ---------------------------------------------------------------- fight night

    public String startFight() {
        if (fight != null) return null;
        if (!fightNight()) throw new GameException("There's no fight tonight.");
        fight = new Fight(me, scheduled.opp, scheduled.rounds, scheduled.title, rng, scheduled.oppBonus, stars("head"));
        return null;
    }

    public void fightRound(String plan) {
        if (fight == null || fight.finished) throw new GameException("No fight in progress.");
        Fight.Plan p;
        try {
            p = Fight.Plan.valueOf(plan == null ? "" : plan);
        } catch (IllegalArgumentException e) {
            throw new GameException("Pick a game plan.");
        }
        fight.simulateRound(p);
        if (fight.finished) resolveFight();
    }

    public void closeFight() {
        if (fight != null && fight.finished) fight = null;
    }

    private void resolveFight() {
        Offer o = scheduled;
        Fight f = fight;
        Fighter opp = o.opp;
        String res = f.winner.equals("player") ? "W" : f.winner.equals("opponent") ? "L" : "D";
        boolean won = res.equals("W"), lost = res.equals("L");
        boolean finish = !f.methodType.equals("DEC");
        boolean vsRival = opp == rival;
        int oppRank = gfc ? rankings.indexOf(opp) : -1;
        boolean wasChamp = isChamp();

        me.recordResult(res, f.methodType);
        opp.recordResult(won ? "L" : lost ? "W" : "D", f.methodType);

        long pay = o.purse + (won ? o.winBonus : 0);
        boolean perfBonus = won && finish && gfc;
        if (perfBonus) pay += 50000;
        money += pay;
        earnings += pay;

        int fameBefore = fame;
        if (won) fame += (gfc ? 5 : 2) + (finish ? 3 : 0) + (o.title ? 12 : 0) + (oppRank > 0 ? (RANKED - oppRank) / 3 : 0) + (vsRival ? 5 : 0);
        else if (lost) fame -= f.methodType.equals("KO") ? 5 : 3;
        else fame += 1;
        String talkNote = "";
        if (o.talkLevel > 0 && won) {
            fame += 2 * o.talkLevel;
            talkNote = "You backed up the trash talk!";
        } else if (o.talkLevel > 0 && lost) {
            fame -= 2 * o.talkLevel;
            talkNote = "You ate your words.";
        }
        fame = Math.max(0, Math.min(100, fame));

        String injuryNote = "";
        if (lost && f.methodType.equals("KO")) {
            me.add("chin", -1.5);
            injuryNote = injure(4 + rng.nextInt(5), "knockout loss");
        } else if (f.playerDamage() > 60) {
            injuryNote = injure(1 + rng.nextInt(3), "fight damage");
        }
        energy = 30;
        for (int i = 0; i < 2; i++) {
            String stat = Fighter.STATS[rng.nextInt(Fighter.STATS.length)];
            me.add(stat, (0.5 + rng.nextDouble()) * Math.max(0, 1 - me.get(stat) / 95.0) * 2);
        }

        String careerNote = "";
        if (o.contender) {
            if (won) {
                gfc = true;
                careerNote = "The GFC president hands you a contract. Welcome to the big show!";
                log("SIGNED with the GFC after a win on the Contender Series!");
                if (rival != null && !rankings.contains(rival)) {
                    rankings.add(Math.min(14, rankings.size()), rival);
                    trim();
                    log("Your rival " + rival.displayName() + " is already in the GFC, ranked #" + rankings.indexOf(rival) + ". The rivalry goes big time.");
                }
            } else {
                regionalWins = 0;
                careerNote = "No contract this time. Rebuild on the regional circuit.";
            }
        } else if (!gfc) {
            if (won) regionalWins++;
        } else {
            careerNote = updateRankings(won, lost, opp, o.title, wasChamp);
        }

        String rivalNote = "";
        if (vsRival) {
            rivalNote = won ? "You beat your rival!" : lost ? "Your rival gets the better of you." : "The rivalry goes on.";
            rivalFought(won, lost);
        } else if (lost && finish && rival == null && weeksWithoutRival >= 12) {
            setRival(opp, 50, "wants the world to know who's better after beating you");
            rivalLosses = 1;
            rivalNote = opp.lastName() + " is your new nemesis.";
        }

        String resultWord = won ? "def." : lost ? "lost to" : "drew with";
        log(me.lastName() + " " + resultWord + " " + opp.displayName() + " — " + f.method + (finish ? " (R" + f.endRound + " " + f.endTime + ")" : "") + ".");

        Map<String, Object> h = new LinkedHashMap<>();
        h.put("date", dateLabel());
        h.put("result", res);
        h.put("opponent", opp.displayName());
        h.put("method", f.method);
        h.put("round", f.endRound);
        h.put("time", f.endTime);
        h.put("event", (o.contender ? "Contender Series" : o.title ? "GFC Title Fight" : gfc ? "GFC" : "Iron Cage Regional")
            + (vsRival ? " · Grudge" : "") + " · " + WEIGHT_CLASSES[weightClass]);
        history.add(0, h);

        lastResult = new LinkedHashMap<>();
        lastResult.put("result", res);
        lastResult.put("method", f.method);
        lastResult.put("pay", pay);
        lastResult.put("perfBonus", perfBonus);
        lastResult.put("fameDelta", fame - fameBefore);
        lastResult.put("careerNote", String.join(" ", careerNote, rivalNote, talkNote).trim());
        lastResult.put("injuryNote", injuryNote.trim());
        lastResult.put("record", me.record());

        scheduled = null;
        offersAge = gfc ? -4 : -2; // post-fight layoff before new offers arrive
        advanceWeek();
    }

    private boolean isChamp() {
        return gfc && !rankings.isEmpty() && rankings.get(0) == me;
    }

    private String updateRankings(boolean won, boolean lost, Fighter opp, boolean title, boolean wasChamp) {
        if (won) {
            if (title) {
                if (wasChamp) {
                    titleDefenses++;
                    log("Successful title defense #" + titleDefenses + "!");
                    return "And STILL champion! Title defense #" + titleDefenses + ".";
                }
                titlesWon++;
                divisionsWon.add(WEIGHT_CLASSES[weightClass]);
                placeAbove(me, opp);
                log("AND NEW! " + me.displayName() + " is the GFC " + WEIGHT_CLASSES[weightClass] + " Champion!");
                if (divisionsWon.size() >= 2) log("History made: a " + divisionsWon.size() + "-division GFC champion!");
                return "AND NEW GFC " + WEIGHT_CLASSES[weightClass].toUpperCase() + " CHAMPION!";
            }
            if (rankings.contains(opp)) {
                placeAbove(me, opp);
            } else if (!rankings.contains(me) && me.streak >= 2) {
                rankings.add(Math.min(RANKED - 1, rankings.size()), me);
                trim();
            }
            int r = rankings.indexOf(me);
            return r > 0 ? "You're now ranked #" + r + " in the division." : "Still unranked — keep stacking wins.";
        }
        if (lost) {
            if (title && wasChamp) {
                placeAbove(opp, me);
                log(opp.displayName() + " takes the belt.");
                return "You lost the belt.";
            }
            if (rankings.contains(me)) {
                placeAbove(opp, me);
                dropDown(me, title ? 1 : 2);
            }
            int r = rankings.indexOf(me);
            return r > 0 ? "You drop to #" + r + "." : "You're outside the rankings.";
        }
        return "A draw doesn't move the needle.";
    }

    /** Moves winner directly above loser if winner isn't already ranked higher. */
    private void placeAbove(Fighter winner, Fighter loser) {
        int li = rankings.indexOf(loser);
        if (li < 0) return;
        int wi = rankings.indexOf(winner);
        if (wi >= 0 && wi < li) return;
        if (wi >= 0) rankings.remove(wi);
        rankings.add(li, winner);
        trim();
    }

    private void dropDown(Fighter f, int spots) {
        int i = rankings.indexOf(f);
        if (i < 0) return;
        rankings.remove(i);
        if (i + spots < RANKED) rankings.add(Math.min(i + spots, rankings.size()), f);
        refill();
    }

    private void trim() {
        while (rankings.size() > RANKED) rankings.remove(rankings.size() - 1);
    }

    private void refill() {
        while (rankings.size() < RANKED) {
            Fighter f = Fighter.generate(rng, 70 + rng.nextInt(6), weightClass);
            f.age = 23 + rng.nextInt(4);
            rankings.add(f);
        }
    }

    // ---------------------------------------------------------------- the calendar

    private void advanceWeek() {
        week++;
        energy = Math.min(100, energy + 15);
        money -= GYM_FEE[gym] + teamSalary();
        if (money < 0 && !team.isEmpty() && rng.nextDouble() < 0.5) {
            Staff gone = Collections.max(team.values(), (a, b) -> Long.compare(a.salary(), b.salary()));
            team.remove(gone.role);
            log(gone.name + " quit — paychecks stopped clearing.");
        }
        if (injuryWeeks > 0) injuryWeeks--;
        peakOverall = Math.max(peakOverall, me.overall());
        if ((week - 1) % 52 == 0) newYear();
        if (retired) return;
        npcWeek();
        rivalWeek();
        if (++marketAge >= 8) refreshMarket();
        if (scheduled != null) {
            scheduled.weeks--;
            if (scheduled.weeks <= 0 && injuryWeeks > 0) {
                log("Withdrew from the fight vs " + scheduled.opp.displayName() + " due to injury.");
                fame = Math.max(0, fame - 3);
                scheduled = null;
                generateOffers();
            }
        } else {
            offersAge++;
            if (offersAge >= 0 && (offers.isEmpty() || offersAge >= 4)) generateOffers();
        }
    }

    private void newYear() {
        me.age++;
        log("Happy birthday! " + me.name + " turns " + me.age + ".");
        if (me.age >= 31) {
            double d = (me.age - 30) * 0.9;
            me.add("speed", -(d + rng.nextDouble()));
            me.add("cardio", -(d * 0.8 + rng.nextDouble()));
            me.add("power", -(d * 0.5 + rng.nextDouble() * 0.5));
            me.add("chin", -(d * 0.6 + rng.nextDouble() * 0.5));
            for (String s : new String[]{"striking", "wrestling", "grappling"}) me.add(s, -d * 0.3 * rng.nextDouble());
            log("Father Time is undefeated — your physical attributes are declining.");
        }
        for (Fighter f : new ArrayList<>(rankings)) {
            if (f == me || f == rival) continue;
            f.age++;
            for (String s : Fighter.STATS) {
                if (f.age <= 27) f.add(s, rng.nextDouble() * 2.5);
                else if (f.age >= 32) f.add(s, -rng.nextDouble() * 1.5);
            }
            if (f.age >= 37 && rng.nextDouble() < 0.5 && (scheduled == null || scheduled.opp != f)) {
                rankings.remove(f);
                if (gfc) log(f.displayName() + " (" + f.record() + ") retires from the GFC.");
            }
        }
        if (rival != null) {
            rival.age++;
            if (rival.age >= 38 && rng.nextDouble() < 0.5 && (scheduled == null || scheduled.opp != rival)) {
                if (rivalWins + rivalLosses > 0) rivalries.add(rivalSummary());
                log("Your rival " + rival.displayName() + " retires. The rivalry is over.");
                rankings.remove(rival);
                rival = null;
            }
        }
        refill();
        if (me.age >= 40 && !retired) {
            endCareer("At 40, " + me.name + " is forced to retire. Legacy: " + legacyTier() + ".");
        }
    }

    /** Ranked NPCs fight each other in the background. */
    private void npcWeek() {
        if (rng.nextDouble() > 0.35 || rankings.size() < 4) return;
        int i = rng.nextInt(rankings.size() - 1);
        int j = Math.min(rankings.size() - 1, i + 1 + rng.nextInt(3));
        Fighter a = rankings.get(i), b = rankings.get(j);
        if (a == me || b == me) return;
        if (scheduled != null && (a == scheduled.opp || b == scheduled.opp)) return;
        double pa = 1 / (1 + Math.exp((b.overall() - a.overall()) / 5.0));
        Fighter w = rng.nextDouble() < pa ? a : b, l = w == a ? b : a;
        double r = rng.nextDouble();
        String m = r < 0.4 ? "KO" : r < 0.6 ? "SUB" : "DEC";
        w.recordResult("W", m);
        l.recordResult("L", m);
        if (w == b) placeAbove(b, a);
        if (gfc) {
            String how = m.equals("KO") ? "KO/TKO" : m.equals("SUB") ? "submission" : "decision";
            String tag = w == rival ? "Your rival " : l == rival ? "Your rival loses! " : "";
            if (i == 0) log(w == a ? "Champion " + a.displayName() + " defends the belt vs " + b.lastName() + " by " + how + "."
                : "UPSET! " + b.displayName() + " dethrones " + a.lastName() + " by " + how + " to become champion!");
            else log("GFC: " + tag + w.displayName() + " def. " + l.displayName() + " by " + how + ".");
        }
    }

    private void generateOffers() {
        offers.clear();
        offersAge = 0;
        if (retired) return;
        int ovr = me.overall();
        if (!gfc) {
            for (int off : new int[]{-6, 0, 6}) {
                double t = Math.max(26, Math.min(72, ovr + off + rng.nextInt(5) - 2));
                long purse = managed(Math.round((300 + t * 10 + fame * 20 + Math.max(0, off) * 40) / 50.0) * 50);
                offers.add(new Offer(Fighter.generate(rng, t, weightClass), 3 + rng.nextInt(4), purse, purse, 3, false, false));
            }
            if (contenderEligible()) {
                long purse = managed(5000);
                offers.add(0, new Offer(Fighter.generate(rng, Math.max(57, ovr - 1), weightClass), 4, purse, purse, 3, false, true));
            }
        } else {
            int r = rankings.indexOf(me);
            if (r == 0) {
                for (int i = 1; i <= 3 && i < rankings.size(); i++) offers.add(titleOffer(rankings.get(i)));
            } else {
                if (titleShotEligible()) offers.add(titleOffer(rankings.get(0)));
                if (r > 0) {
                    List<Integer> pool = new ArrayList<>();
                    for (int i = Math.max(1, r - 3); i <= Math.min(rankings.size() - 1, r + 3); i++) if (i != r) pool.add(i);
                    Collections.shuffle(pool, rng);
                    for (int k = 0; k < Math.min(3, pool.size()); k++) offers.add(gfcOffer(rankings.get(pool.get(k))));
                } else {
                    if (me.streak >= 1 || fame >= 40) offers.add(gfcOffer(rankings.get(Math.min(rankings.size() - 1, 12 + rng.nextInt(4)))));
                    while (offers.size() < 3) offers.add(gfcOffer(Fighter.generate(rng, 62 + rng.nextInt(6), weightClass)));
                }
            }
        }
        // a heated rivalry turns into a grudge match offer
        if (rival != null && rivalHeat >= GRUDGE_HEAT && week - lastRivalFight >= GRUDGE_GAP
                && offers.stream().noneMatch(o -> o.opp == rival)) {
            Offer base;
            if (!gfc) {
                base = new Offer(rival, 4 + rng.nextInt(3), managed(800 + fame * 30L), managed(800 + fame * 30L), 3, false, false);
            } else {
                int rr = rankings.indexOf(rival), mr = rankings.indexOf(me);
                if (mr == 0) base = rr > 0 ? titleOffer(rival) : null;           // defend the belt against the rival
                else if (rr == 0) base = mr > 0 && mr <= 5 ? titleOffer(rival) : null; // the rival holds the belt
                else base = gfcOffer(rival);
            }
            if (base != null) {
                if (!base.title) {
                    base.purse = Math.round(base.purse * 1.5);
                    base.winBonus = Math.round(base.winBonus * 1.5);
                }
                offers.add(0, base);
            }
        }
    }

    private long managed(long purse) {
        return Math.round(purse * (1 + 0.05 * stars("manager")));
    }

    private Offer gfcOffer(Fighter opp) {
        int rank = rankings.indexOf(opp);
        long purse = managed(12000 + fame * 400L + (rank > 0 ? (RANKED - rank) * 3000L : 0));
        return new Offer(opp, 6 + rng.nextInt(5), purse, purse, 3, false, false);
    }

    private Offer titleOffer(Fighter opp) {
        long purse = managed(100000 + fame * 1500L + titleDefenses * 25000L);
        return new Offer(opp, 8 + rng.nextInt(5), purse, purse / 2, 5, true, false);
    }

    private boolean titleShotEligible() {
        int r = rankings.indexOf(me);
        return gfc && (r == 1 || (r > 1 && r <= 3 && me.streak >= 2));
    }

    private boolean contenderEligible() {
        return !gfc && regionalWins >= CONTENDER_WINS && me.overall() >= CONTENDER_OVR;
    }

    // ---------------------------------------------------------------- legacy

    int legacyScore() {
        return me.wins * 2 + me.koWins + me.subWins + titlesWon * 30 + titleDefenses * 15 + fame / 2 - me.losses * 2
            + (divisionsWon.size() >= 2 ? 60 : 0);
    }

    String legacyTier() {
        int s = legacyScore();
        if (s >= 300) return "All-Time Great";
        if (s >= 200) return "Hall of Famer";
        if (s >= 120) return "Fan Favorite";
        if (s >= 60) return "Journeyman";
        return "Never Made It";
    }

    /** Snapshot of a finished career for the Hall of Fame. */
    Map<String, Object> hallOfFameEntry() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("name", me.displayName());
        m.put("style", me.style);
        m.put("country", me.country);
        m.put("divisions", new ArrayList<>(divisionsFought));
        m.put("record", me.record());
        m.put("koWins", me.koWins);
        m.put("subWins", me.subWins);
        m.put("titlesWon", titlesWon);
        m.put("titleDefenses", titleDefenses);
        m.put("divisionsWon", new ArrayList<>(divisionsWon));
        m.put("peakOverall", peakOverall);
        m.put("earnings", earnings);
        m.put("retiredAge", me.age);
        m.put("years", (week - 1) / 52 + 1);
        m.put("rivalries", new ArrayList<>(rivalries));
        m.put("legacyScore", legacyScore());
        m.put("legacy", legacyTier());
        m.put("inducted", legacyScore() >= 200);
        return m;
    }

    // ---------------------------------------------------------------- presentation

    private String dateLabel() {
        return "Y" + ((week - 1) / 52 + 1) + " W" + ((week - 1) % 52 + 1);
    }

    private void log(String s) {
        news.addFirst(dateLabel() + " — " + s);
        while (news.size() > 40) news.removeLast();
    }

    private String goal() {
        if (retired) return "Retired. Legacy: " + legacyTier() + ".";
        if (!gfc) {
            if (contenderEligible()) return "You've earned a Contender Series invite! Win it to sign with the GFC.";
            return "Earn a Contender Series invite: " + Math.min(regionalWins, CONTENDER_WINS) + "/" + CONTENDER_WINS
                + " regional wins and overall " + me.overall() + "/" + CONTENDER_OVR + ".";
        }
        int r = rankings.indexOf(me);
        if (r == 0) return "You're the champion! Defend the belt" + (divisionsWon.size() < 2 ? " — or move divisions and chase a second one." : ".")
            + " (" + titleDefenses + " defense" + (titleDefenses == 1 ? "" : "s") + ")";
        if (r < 0) return "Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.";
        if (titleShotEligible()) return "A title shot is on the table — take it!";
        if (r <= 3) return "You're #" + r + ". Get a 2-fight win streak (or reach #1) for a title shot.";
        return "You're #" + r + ". Climb into the top 3 for a shot at the belt.";
    }

    private Map<String, Object> offerJson(Offer o, int index) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("index", index);
        m.put("opponent", o.opp.toJson());
        m.put("oppRank", gfc ? rankings.indexOf(o.opp) : -1);
        m.put("weeks", o.weeks);
        m.put("purse", o.purse);
        m.put("winBonus", o.winBonus);
        m.put("rounds", o.rounds);
        m.put("title", o.title);
        m.put("contender", o.contender);
        m.put("grudge", o.opp == rival);
        m.put("oppBonus", o.oppBonus);
        return m;
    }

    public Map<String, Object> toJson() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("fighter", me.toJson());
        m.put("weightClass", WEIGHT_CLASSES[weightClass]);
        m.put("weightClassIndex", weightClass);
        m.put("divisionCooldown", Math.max(0, lastDivisionChange + DIVISION_COOLDOWN - week));
        m.put("year", (week - 1) / 52 + 1);
        m.put("week", (week - 1) % 52 + 1);
        m.put("money", money);
        m.put("earnings", earnings);
        m.put("fame", fame);
        m.put("energy", energy);
        m.put("trainCost", trainCost());
        m.put("injuryWeeks", injuryWeeks);
        m.put("peakOverall", peakOverall);

        Map<String, Object> g = new LinkedHashMap<>();
        g.put("level", gym);
        g.put("name", GYM_NAMES[gym]);
        g.put("mult", GYM_MULT[gym]);
        g.put("fee", GYM_FEE[gym]);
        g.put("nextName", gym + 1 < GYM_NAMES.length ? GYM_NAMES[gym + 1] : null);
        g.put("nextCost", gym + 1 < GYM_NAMES.length ? GYM_COST[gym + 1] : null);
        m.put("gym", g);

        Map<String, Object> teamJson = new LinkedHashMap<>();
        for (String role : Staff.ROLES) {
            Staff s = team.get(role);
            Map<String, Object> slot = s != null ? s.toJson() : new LinkedHashMap<>();
            slot.put("role", role);
            slot.put("title", Staff.title(role));
            teamJson.put(role, slot);
        }
        m.put("team", teamJson);
        m.put("teamSalary", teamSalary());
        List<Map<String, Object>> marketJson = new ArrayList<>();
        for (int i = 0; i < market.size(); i++) {
            Map<String, Object> s = market.get(i).toJson();
            s.put("index", i);
            Staff cur = team.get(market.get(i).role);
            s.put("current", cur == null ? null : cur.name + " (" + cur.stars + "★)");
            marketJson.add(s);
        }
        m.put("market", marketJson);
        m.put("marketRefresh", 8 - marketAge);

        if (rival != null) {
            Map<String, Object> r = rival.toJson();
            r.put("heat", rivalHeat);
            r.put("h2hWins", rivalWins);
            r.put("h2hLosses", rivalLosses);
            r.put("rank", gfc ? rankings.indexOf(rival) : -1);
            m.put("rival", r);
        } else {
            m.put("rival", null);
        }
        m.put("rivalries", rivalries);
        m.put("canTalk", lastTalkWeek != week && !retired && fight == null);
        m.put("lastTalk", lastTalk);

        m.put("gfc", gfc);
        m.put("org", gfc ? "GFC" : "Iron Cage Regional");
        m.put("rank", gfc ? rankings.indexOf(me) : -1);
        m.put("regionalWins", regionalWins);
        m.put("titlesWon", titlesWon);
        m.put("titleDefenses", titleDefenses);
        m.put("divisionsWon", new ArrayList<>(divisionsWon));
        m.put("retired", retired);
        m.put("legacy", legacyTier());
        m.put("legacyScore", legacyScore());
        m.put("goal", goal());

        List<Map<String, Object>> offerList = new ArrayList<>();
        for (int i = 0; i < offers.size(); i++) offerList.add(offerJson(offers.get(i), i));
        m.put("offers", offerList);
        m.put("scheduled", scheduled == null ? null : offerJson(scheduled, -1));
        m.put("fightNight", fightNight());

        List<Map<String, Object>> ranks = new ArrayList<>();
        for (int i = 0; i < rankings.size(); i++) {
            Fighter f = rankings.get(i);
            Map<String, Object> r = new LinkedHashMap<>();
            r.put("rank", i);
            r.put("name", f.displayName());
            r.put("record", f.record());
            r.put("overall", f.overall());
            r.put("style", f.style);
            r.put("player", f == me);
            r.put("rival", f == rival);
            ranks.add(r);
        }
        m.put("rankings", ranks);
        m.put("news", news);
        m.put("history", history);
        m.put("fight", fight == null ? null : fight.toJson());
        m.put("lastResult", lastResult);
        return m;
    }
}
