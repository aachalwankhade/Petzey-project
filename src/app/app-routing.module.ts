import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSummaryComponent } from './appointment/components/appointment-summary/appointment-summary.component';
import { DashboardComponent } from './appointment/components/dashboard/dashboard.component';
import { ViewallAppointmentComponent } from './appointment/components/viewall-appointment/viewall-appointment.component';
import { NewPetComponent } from './pets/components/new-pet/new-pet.component';
import { ViewAllpetComponent } from './pets/components/view-allpet/view-allpet.component';
import { ViewPetownerComponent } from './pets/components/view-petowner/view-petowner.component';
import { EditProfileComponent } from './reception/components/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './reception/components/view-profile/view-profile.component';

const routes: Routes = [
   {path:'dashboard',component:DashboardComponent},
   {path:'',redirectTo:'dashboard',pathMatch:'full'},
   {path:'summary',component:AppointmentSummaryComponent},
   {path:'viewappointment',component:ViewallAppointmentComponent},
   {path:'newpet',component:NewPetComponent},
   {path:'viewallpet',component:ViewAllpetComponent},
   {path:'view',component:ViewPetownerComponent},
   {path:'editprofile',component:EditProfileComponent},
   {path:'viewprofile',component:ViewProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
