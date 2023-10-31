import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewPetownerService {

  constructor(private http: HttpClient) { }
  viewpetowner()
  {
    return this.http.get('http://15.206.64.114:9120/api/getpetownerbyid/{ownerId}')
  }
}
