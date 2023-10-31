import { TestBed } from '@angular/core/testing';

import { ReceptionRepositoryService } from './reception-repository.service';

describe('ReceptionRepositoryService', () => {
  let service: ReceptionRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
