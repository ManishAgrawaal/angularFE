import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscountTB } from '../models/managediscount.model';

@Injectable({
  providedIn: 'root'
})
export class ManagediscountService {
   baseUrl='https://localhost:44395/api/Discount';
  
  constructor(private http:HttpClient) {
  }
  //get alldiscountdatas
  showData():Observable<DiscountTB[]>
  {
   return this.http.get<DiscountTB[]>(this.baseUrl);
  }
}
