import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NewPetDataService {
  url = 'http://15.206.64.114:9120/api/petdetails';
  constructor(private http: HttpClient) { }
  newpet(){
    return this.http.get("http://15.206.64.114:9120/api/petdetails");
  }
  saveNewPet(data:any)
  {
    return this.http.post("http://15.206.64.114:9120/api/petdetails",data);
  }
}
