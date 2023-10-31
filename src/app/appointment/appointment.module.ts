import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddAppointment2Component } from './components/add-appointment2/add-appointment2.component';
import { AppointmentSummaryComponent } from './components/appointment-summary/appointment-summary.component';
import { ViewallAppointmentComponent } from './components/viewall-appointment/viewall-appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AddAppointmentComponent,
    AddAppointment2Component,
    AppointmentSummaryComponent,
    ViewallAppointmentComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
