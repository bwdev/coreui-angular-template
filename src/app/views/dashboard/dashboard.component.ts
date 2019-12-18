import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

  onDismissModal(obj) {
    console.log('I am dismissing the modal!', obj);
  }
}
