package mma;

import java.util.Random;

/** Pre-fight quotes. {o} is the target's last name, {m} the player's. */
final class TrashTalk {
    private TrashTalk() {}

    static final String[] RESPECT = {
        "{o} is a tough fighter and I respect the grind. But respect ends when the cage door closes.",
        "Nothing but respect for {o}. May the best fighter win.",
        "{o} has earned this. I'm just going to be better on the night.",
        "I've studied {o} for years. Great fighter. That's why beating them will mean something."
    };
    static final String[] TRASH = {
        "{o} fights like they learned MMA from a video game. I'm going to expose that.",
        "I watched {o}'s highlight reel. Didn't take long.",
        "Tell {o} to enjoy the walkout. It's the best part of the night for them.",
        "{o}'s chin has been writing checks the rest of that body can't cash.",
        "I'm going to put {o} on a poster — the 'before' picture.",
        "{o} has a great ground game. That's where they'll be looking at the lights from."
    };
    static final String[] PERSONAL = {
        "{o} is a fraud, the whole gym knows it, and I'm going to prove it in front of everyone.",
        "When I'm done, {o} will be teaching seminars on how to lose.",
        "{o}'s coach should be charged with negligence for letting them take this fight.",
        "I don't just want to beat {o}. I want {o} to retire."
    };
    static final String[] REPLY_RESPECT = {
        "Respect to {m}. It's going to be a great fight.",
        "{m} is the real deal. I'm ready for war.",
        "Class act, that {m}. Still putting them down, though."
    };
    static final String[] REPLY_CALM = {
        "{m} talks a lot for someone who hasn't fought anybody.",
        "I'll let my hands do the talking on fight night.",
        "Keep my name in your mouth, {m}. It's the closest you'll get to a win.",
        "Words don't win fights. See you in the cage."
    };
    static final String[] REPLY_ANGRY = {
        "Say that to my face, {m}. Oh wait — you will. And then you'll be asleep.",
        "This is personal now. {m} is leaving on a stretcher.",
        "I'm going to make {m} regret every single word.",
        "I've never wanted to hurt someone this badly. {m} just made my whole camp easy."
    };
    static final String[] CALLOUTS = {
        "{o} is hiding from me. Everyone knows I'm the better fighter.",
        "Still waiting on {o} to sign the contract. Scared?",
        "{o} got lucky last time and the whole world knows it.",
        "I'll fight {o} anywhere, any time. Their team keeps saying no."
    };

    static String fill(String line, String target, String me) {
        return line.replace("{o}", target).replace("{m}", me);
    }

    static String pick(Random rng, String[] lines) {
        return lines[rng.nextInt(lines.length)];
    }
}
