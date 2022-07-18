import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AirlineRegTb } from 'src/app/models/manageairline.model';
import { ScheduleTB } from 'src/app/models/manageschedule.model';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html'
})
export class ManagescheduleComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.ShowData();
   
  }

  //Get Method

  ShowData()
  {
    this.http.get("https://localhost:44389/api/ScheduleFlight")
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }
  
  //invoke object of class
  scheduletbs:ScheduleTB= new ScheduleTB();
  
  //Get data from table in array
  getData: Array<ScheduleTB>= new Array<ScheduleTB>();

 //Post Method
  
 AddSchedule() {
  var addData = {
    airlineId:Number(this.scheduletbs.airlineId),
    flightNum:this.scheduletbs.flightNum,
    fromPlace:this.scheduletbs.fromPlace,
    toPlace:this.scheduletbs.toPlace,
    startDate:this.scheduletbs.startDate,
    startTime:this.scheduletbs.startTime,
    endDate:this.scheduletbs.endDate,
    endTime:this.scheduletbs.endTime,
    schDays:this.scheduletbs.schDays,
    instrumentType:this.scheduletbs.instrumentType,
    bclassSeat:this.scheduletbs.bclassSeat,
    nbclassSeat:this.scheduletbs.nbclassSeat,
    price:this.scheduletbs.price,
    noOfRows:this.scheduletbs.noOfRows,
    mealPlan:this.scheduletbs.mealPlan,
    status:this.scheduletbs.status
  }
  console.log(addData);
  console.log(this.scheduletbs);
  this.http.post("https://localhost:44389/api/ScheduleFlight", addData)
  .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
  this.scheduletbs= new ScheduleTB();

}


}
