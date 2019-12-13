import { ActionTypes, Actions } from './actions';
import { initialState, State, Loaders } from './state';

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_NAV: {
            state.loaders[Loaders.Navigation] = true;
            return {
                ...state
            };
        }
        case ActionTypes.LOAD_NAV_SUCCESS: {
            state.loaders[Loaders.Navigation] = false;
            return {
                ...state,
                navigation: action.payload.nav
            };
        }
        case ActionTypes.LOAD_NAV_FAIL: {
            state.loaders[Loaders.Navigation] = false;
            return {
                ...state,
                error: action.error,
                errorStack: [...state.errorStack, action.error]
            };
        }
        default: {
            return state;
        }
    }
}
