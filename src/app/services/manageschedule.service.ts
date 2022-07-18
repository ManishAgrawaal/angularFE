import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleTB } from '../models/manageschedule.model';

@Injectable({
  providedIn: 'root'
})
export class ManagescheduleService {
      baseUrl='https://localhost:44389/api/ScheduleFlight';
  constructor(private http:HttpClient) { }
  //getting all schedule data
  ShowData():Observable<ScheduleTB[]>
  {
  return this.http.get<ScheduleTB[]>(this.baseUrl);
  }
}
