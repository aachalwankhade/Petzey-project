import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { ViewAllpetComponent } from './components/view-allpet/view-allpet.component';
import { ViewPetownerComponent } from './components/view-petowner/view-petowner.component';


@NgModule({
  declarations: [
    NewPetComponent,
    ViewAllpetComponent,
    ViewPetownerComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
