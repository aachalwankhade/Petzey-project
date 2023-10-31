import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentSummaryService {

  constructor(private http:HttpClient) { }
  total()
  {
    return this. http.get('')
  }
  confirm()
  {
    return this. http.get('')
  }
  close()
  {
    return this. http.get('')
  }
  cancel()
  {
    return this. http.get('')
  }
}
