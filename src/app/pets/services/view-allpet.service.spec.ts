import { TestBed } from '@angular/core/testing';

import { ViewAllpetService } from './view-allpet.service';

describe('ViewAllpetService', () => {
  let service: ViewAllpetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllpetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
