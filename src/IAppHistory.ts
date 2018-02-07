import {
    Action,
    History,
    Href,
    Location,
    LocationDescriptorObject,
    LocationListener,
    LocationState,
    Path,
    TransitionPromptHook,
    UnregisterCallback,
} from "history";

export interface IAppHistory extends History {
    /**
     * Gets the number of entries in the history stack
     */
    length: number;

    /**
     * Gets the current navigation action
     */
    action: Action;

    /**
     * Gets the current location
     */
    location: Location;

    push(path: Path, state?: LocationState): void;
    push(location: LocationDescriptorObject): void;

    replace(path: Path, state?: LocationState): void;
    replace(location: LocationDescriptorObject): void;

    go(n: number): void;

    goBack(): void;

    goForward(): void;

    block(prompt?: boolean | string | TransitionPromptHook): UnregisterCallback;

    listen(listener: LocationListener): UnregisterCallback;

    createHref(location: LocationDescriptorObject): Href;
}
