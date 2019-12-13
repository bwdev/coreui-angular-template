import { Action } from '@ngrx/store';
import { INavData } from '@coreui/angular';

export enum ActionTypes {
    LOAD_NAV = '[GLOBAL] Load Navigation',
    LOAD_NAV_FAIL = '[GLOBAL] Load Navigation Fail',
    LOAD_NAV_SUCCESS = '[GLOBAL] Load Navigation Success'
}

export class GetNavigation implements Action {
    readonly type = ActionTypes.LOAD_NAV;
}

export class GetNavigationSuccess implements Action {
    readonly type = ActionTypes.LOAD_NAV_SUCCESS;
    constructor(public payload: { nav: INavData[] }) {
    }
}

export class GetNavigationFailure implements Action {
    readonly type = ActionTypes.LOAD_NAV_FAIL;
    constructor(public error: any) { }
}

export type Actions = GetNavigation | GetNavigationSuccess | GetNavigationFailure;
