import { TestBed } from '@angular/core/testing';

import { AppointmentSummaryService } from './appointment-summary.service';

describe('AppointmentSummaryService', () => {
  let service: AppointmentSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
