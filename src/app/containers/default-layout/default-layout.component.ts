import { Component } from '@angular/core';

import { navItems } from '../../_nav';

@Component({
  selector: 'app-layout',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  minimized = false;
  public navItems = [...navItems];

  toggleMinimize(e) {
    this.minimized = e;
  }
}
