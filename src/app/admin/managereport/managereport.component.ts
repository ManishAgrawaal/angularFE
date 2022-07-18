import { Component, OnInit } from '@angular/core';
import { BookingTB } from 'src/app/models/managereport.model';
import { ManagereportService } from 'src/app/services/managereport.service';

@Component({
  selector: 'app-managereport',
  templateUrl: './managereport.component.html'
})
export class ManagereportComponent implements OnInit {

  constructor(private ManagereportService:ManagereportService) { }
  bookingtbs:BookingTB[]=[];

  ngOnInit(): void {
    this.getdata();
  }
  getdata()
  {
    this.ManagereportService.getdata()
    .subscribe(
      res => {
      //  console.log(Response)
        this.bookingtbs=res;
      }
    );
  }

}
