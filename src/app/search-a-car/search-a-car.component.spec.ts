import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchACarComponent } from './search-a-car.component';

describe('SearchACarComponent', () => {
  let component: SearchACarComponent;
  let fixture: ComponentFixture<SearchACarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchACarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
