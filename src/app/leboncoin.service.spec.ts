import { TestBed } from '@angular/core/testing';

import { LeboncoinService } from './leboncoin.service';

describe('LeboncoinService', () => {
  let service: LeboncoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeboncoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
