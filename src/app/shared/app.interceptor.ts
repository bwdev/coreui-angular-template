import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { first, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as globalState from '../store/global/state';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private store: Store<globalState.State>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const user$ = this.store.select(UserFeatureStoreSelectors.selectSimpleCurrentUser);
        // const res = user$.pipe(
        //     first(),
        //     flatMap(user => {
        //         const userReq = !!user ? req.clone({
        //             withCredentials: true,
        //             setHeaders: {
        //                 'X-Object-Guid': user.objectGuid,
        //                 'Content-Type': 'application/json'
        //             }
        //         }) :
        //             req.clone({
        //                 withCredentials: true,
        //                 setHeaders: { 'Content-Type': 'application/json' }
        //             });

        //         return next.handle(userReq);
        //     }));

        // return res;

        req.clone({
            withCredentials: true,
            setHeaders: { 'Content-Type': 'application/json' }
        });

        return next.handle(req);
    }

}
