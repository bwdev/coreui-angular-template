import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomError401Component } from './custom-error401.component';

describe('CustomError401Component', () => {
  let component: CustomError401Component;
  let fixture: ComponentFixture<CustomError401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomError401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomError401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
