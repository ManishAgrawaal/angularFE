import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirlineRegTb } from '../models/manageairline.model';

@Injectable({
  providedIn: 'root'
})
export class ManageairlineService {
  baseUrl='https://localhost:44395/api/Register';

  constructor(private http:HttpClient) { }
  //get all airlinedata
  showData():Observable<AirlineRegTb[]>
  {
    return this.http.get<AirlineRegTb[]>(this.baseUrl);
  }
  addAirline(addData:AirlineRegTb): Observable<AirlineRegTb> 
  {
    return this.http.post<AirlineRegTb>(this.baseUrl, addData);
    
  }

}
