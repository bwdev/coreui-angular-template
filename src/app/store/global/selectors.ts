import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

// access to the whole feature slice
export const selectGlobalState = createFeatureSelector<State>('globalState');

// any logic involved in memoized selectors goes here
const getNavigation = (state: State) => state.navigation;
const getErrors = (state: State) => state.errorStack.filter(f => f.message && f.message !== '');

// exposed selectors
export const selectNavigation = createSelector(selectGlobalState, (state: State) => state.navigation);
export const selectErrorMessages = createSelector(selectGlobalState, getErrors);
