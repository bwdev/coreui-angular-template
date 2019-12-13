import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';
import { Observable, of } from 'rxjs';

@Injectable()
export class NavigationService {
    getNav(): Observable<INavData[]> {
        return of([
            {
                name: 'Dashboard',
                url: '/dashboard',
                icon: 'icon-speedometer',
                badge: {
                    variant: 'info',
                    text: 'NEW'
                }
            },
            {
                name: 'Disabled',
                url: '/dashboard',
                icon: 'icon-ban',
                attributes: { disabled: true },
            }
        ]);
    }
}
