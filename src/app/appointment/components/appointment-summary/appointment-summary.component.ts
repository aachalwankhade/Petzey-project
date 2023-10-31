import { Component } from '@angular/core';
import { AppointmentSummaryService  } from '../../services/appointment-summary.service';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.css']
})
export class AppointmentSummaryComponent {
  total:any;
  confirm:any;
  close:any;
  cancel:any;
  constructor(private view:AppointmentSummaryService ){
    view.total().subscribe((data)=>{
      this.total=data;
      console.log(data);
    });

    view.confirm().subscribe((data)=>{
      this.confirm=data;
      console.log(data);
    });

    view.close().subscribe((data)=>{
      this.close=data;
      console.log(data);
    });

    view.cancel().subscribe((data)=>{
      this.cancel=data;
      console.log(data);
    });
  }

}
