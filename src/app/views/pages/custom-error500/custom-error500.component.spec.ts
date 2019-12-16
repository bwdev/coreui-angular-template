import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomError500Component } from './custom-error500.component';

describe('CustomError500Component', () => {
  let component: CustomError500Component;
  let fixture: ComponentFixture<CustomError500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomError500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomError500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
