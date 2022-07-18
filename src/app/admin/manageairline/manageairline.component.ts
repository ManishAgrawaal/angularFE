import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AirlineRegTb } from 'src/app/models/manageairline.model';

@Component({
  selector: 'app-manageairline',
  templateUrl: './manageairline.component.html'
})
export class ManageairlineComponent implements OnInit{
  
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.ShowData();
  }

  //Get Method

  ShowData()
  {
    console.log("hi");
    this.http.get("https://localhost:44395/api/Register")
  
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }
  
  //invoke object of class
  airlineRegTbs:AirlineRegTb= new AirlineRegTb();
  
  //Get data from table in array
  getData: Array<AirlineRegTb>= new Array<AirlineRegTb>();

 //Post Method
  
 AddAirline() {
  var addData = {
    id:Number(this.airlineRegTbs.id),
    airlineName:this.airlineRegTbs.airlineName,
    logo:this.airlineRegTbs.logo,
    cnum:this.airlineRegTbs.cnum,
    caddress:this.airlineRegTbs.caddress,
    isActive:this.airlineRegTbs.isActive
  }
  console.log(addData);
  console.log(this.airlineRegTbs);
  this.http.post("https://localhost:44395/api/Register", addData)
  .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
  this.airlineRegTbs= new AirlineRegTb();

}

  //Delete Method
  DeleteAirline(air: AirlineRegTb) {
    console.log(air);
    let httparms = new HttpParams().set("Id", air.id);
    let options = { params: httparms };
    // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
    this.http.delete("https://localhost:44395/api/Register", options)
    .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
    

  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (sample: any) {
      return sample != value;
    });
  }


}
