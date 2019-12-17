import { Component, OnInit } from '@angular/core';

import { navItems } from '../../_nav';
import { Store } from '@ngrx/store';
import * as globalStore from '../../store/global';
import { INavData } from '@coreui/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  minimized = false;
  navItems$: Observable<INavData[]>;
  // public navItems = [...navItems];

  constructor(private store: Store<globalStore.State>) {

  }

  ngOnInit(): void {
    this.navItems$ = this.store.select(globalStore.selectNavigation);

    this.navItems$.subscribe(s => console.log(s));
  }

  toggleMinimize(e) {
    this.minimized = e;
  }
}
