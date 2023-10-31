import { Component } from '@angular/core';
import { ViewPetownerService } from '../../services/view-petowner.service';
@Component({
  selector: 'app-view-petowner',
  templateUrl: './view-petowner.component.html',
  styleUrls: ['./view-petowner.component.css']
})
export class ViewPetownerComponent {
  name:string="Mr. Jack Hall";
mobile:string= '+41 38042309';
location:string="Utah , USA 7810";

viewpetowner:any
constructor(private view:ViewPetownerService)
{
  view.viewpetowner().subscribe((data)=>{
    this.viewpetowner=data;
    console.log(data);
  })
}

}
