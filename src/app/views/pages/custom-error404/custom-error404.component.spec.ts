import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomError404Component } from './custom-error404.component';

describe('CustomError404Component', () => {
  let component: CustomError404Component;
  let fixture: ComponentFixture<CustomError404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomError404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
