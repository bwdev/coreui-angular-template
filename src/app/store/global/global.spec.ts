import * as state from './state';
import { featureReducer } from './reducer';
import { GetNavigation, GetNavigationSuccess, GetNavigationFailure } from './actions';
import { INavData } from '@coreui/angular';
import { GlobalEffects } from './effects';
import { take } from 'rxjs/operators';

describe('Global Store Tests', () => {

    it('should default the state', () => {
        const st = state.initialState;

        expect(st.isProduction).toBe(false);
        expect(st.navigation.length).toBe(0);
        expect(st.loaders).toBeTruthy();
        expect(st.errorStack.length).toBe(0);
        expect(st.error).toBeNull();
    });

    it('should toggle navigation loader when getting nav', () => {
        const st = state.initialState;
        const res = featureReducer(st, new GetNavigation());
        expect(res.loaders[state.Loaders.Navigation]).toBe(true);
    });

    it('should toggle nav loader false on success', () => {
        const st = state.initialState;
        const navData: INavData[] = [
            {
                name: 'foo'
            }
        ];

        const res = featureReducer(st, new GetNavigationSuccess({ nav: navData }));
        expect(res.loaders[state.Loaders.Navigation]).toBe(false);
        expect(res.navigation.length).toBe(1);
        expect(res.navigation[0].name).toBe('foo');
    });

    it('should add error to state and error stack', () => {
        const st = state.initialState;
        const res = featureReducer(st, new GetNavigationFailure({ message: 'foo' }));
        expect(res.error).toBeTruthy();
        expect(res.error.message).toBe('foo');
        expect(res.errorStack.length).toBe(1);
        expect(res.loaders[state.Loaders.Navigation]).toBe(false);
    });
});
