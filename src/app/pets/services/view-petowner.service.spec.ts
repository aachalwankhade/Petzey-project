import { TestBed } from '@angular/core/testing';

import { ViewPetownerService } from './view-petowner.service';

describe('ViewPetownerService', () => {
  let service: ViewPetownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPetownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
