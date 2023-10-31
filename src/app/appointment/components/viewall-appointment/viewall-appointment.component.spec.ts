import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallAppointmentComponent } from './viewall-appointment.component';

describe('ViewallAppointmentComponent', () => {
  let component: ViewallAppointmentComponent;
  let fixture: ComponentFixture<ViewallAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
