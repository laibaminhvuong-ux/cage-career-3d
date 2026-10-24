package mma;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/** One browser's save slots: the ids of its careers and which one is being played. */
public class Profile implements Serializable {
    private static final long serialVersionUID = 1L;
    public static final int MAX_SLOTS = 5;

    final List<String> slots = new ArrayList<>();
    /** Career id being played, or null while on the create-fighter screen. */
    String active;

    String slot(int index) {
        if (index < 0 || index >= slots.size()) throw new GameException("That save slot doesn't exist.");
        return slots.get(index);
    }

    void add(String careerId) {
        if (!slots.contains(careerId)) {
            if (slots.size() >= MAX_SLOTS) throw new GameException("All " + MAX_SLOTS + " save slots are full. Delete a save first.");
            slots.add(careerId);
        }
        active = careerId;
    }

    void remove(String careerId) {
        slots.remove(careerId);
        if (careerId.equals(active)) active = null;
    }
}
