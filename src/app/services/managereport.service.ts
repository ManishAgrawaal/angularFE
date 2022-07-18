import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingTB } from '../models/managereport.model';

@Injectable({
  providedIn: 'root'
})
export class ManagereportService {
  baseUrl='https://localhost:44367/api/Booking/getdata';

  constructor(private http:HttpClient) { }
  //getting all booking data
  getdata():Observable<BookingTB[]>
  {
  return this.http.get<BookingTB[]>(this.baseUrl);
  }
}
