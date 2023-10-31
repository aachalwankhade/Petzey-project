import { TestBed } from '@angular/core/testing';

import { ViewallAppointmentService } from './viewall-appointment.service';

describe('ViewallAppointmentService', () => {
  let service: ViewallAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewallAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
