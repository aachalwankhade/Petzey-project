import { Component } from '@angular/core';
import {NewPetDataService} from './services/new-pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent {

  title = 'API call in Angular';
  newpet: any;
  newpetDataService: any;
  constructor(private  newpetData: NewPetDataService){
    this.newpetData.newpet().subscribe((result)=>{
      this.newpet = data;
    });
  }
  getNewPetFormData(data:any){
    
    this.newpetDataService.saveNewPet(data).subscribe((result)=>{
      console.warn(result) 
    })
  }
}
