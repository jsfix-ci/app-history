import { IHistory, ILocation, IWrappedState, NavigationAction } from "./api";
import { nextState } from "./nextState";

export function nextLocation(
    source: IHistory,
    action: NavigationAction,
    location: ILocation,
    cacheLimit: number,
): ILocation<IWrappedState> {
    return {
        hash: location.hash,
        key: location.key,
        pathname: location.pathname,
        search: location.search,
        state: nextState(source, action, location.state, cacheLimit),
    };
}
