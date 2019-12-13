import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as globalActions from './actions';
import { NavigationService } from 'src/app/shared/navigation.service';

@Injectable()
export class GlobalEffects {
    @Effect()
    loadNavigation$: Observable<Action> = this.actions$.pipe(
        ofType<globalActions.GetNavigation>(globalActions.ActionTypes.LOAD_NAV),
        switchMap(() => this.navService.getNav()
            .pipe(map(nav => new globalActions.GetNavigationSuccess({ nav })),
                catchError(err => of(new globalActions.GetNavigationFailure(err)))
            )
        )
    );

    constructor(
        private navService: NavigationService,
        private actions$: Actions) { }
}
