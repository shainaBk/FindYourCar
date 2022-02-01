import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourCar2Component } from './find-your-car2.component';

describe('FindYourCar2Component', () => {
  let component: FindYourCar2Component;
  let fixture: ComponentFixture<FindYourCar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourCar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourCar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
