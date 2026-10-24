package mma;

/** A player-facing error, e.g. "Too exhausted to train." Shown as a toast in the UI. */
public class GameException extends RuntimeException {
    public GameException(String message) {
        super(message);
    }
}
