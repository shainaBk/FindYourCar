import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourCarComponent } from './find-your-car.component';

describe('FindYourCarComponent', () => {
  let component: FindYourCarComponent;
  let fixture: ComponentFixture<FindYourCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
