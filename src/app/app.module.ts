import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './reception/components/view-profile/view-profile.component';
import { EditProfileComponent } from './reception/components/edit-profile/edit-profile.component';
import { DashboardComponent } from './appointment/components/dashboard/dashboard.component';
import { AppointmentSummaryComponent } from './appointment/components/appointment-summary/appointment-summary.component';
import { ViewallAppointmentComponent } from './appointment/components/viewall-appointment/viewall-appointment.component';
import { NewPetComponent } from './pets/components/new-pet/new-pet.component';
import { ViewAllpetComponent } from './pets/components/view-allpet/view-allpet.component';
import { ViewPetownerComponent } from './pets/components/view-petowner/view-petowner.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    EditProfileComponent,
    DashboardComponent,
    AppointmentSummaryComponent,
    ViewallAppointmentComponent,
    NewPetComponent,
    ViewAllpetComponent,
    ViewPetownerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   // ServiceWorkerModule.register('ngsw-worker.js', {
     // enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
     // registrationStrategy: 'registerWhenStable:30000'
  //  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
