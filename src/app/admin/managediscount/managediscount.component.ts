import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiscountTB } from 'src/app/models/managediscount.model';

@Component({
  selector: 'app-managediscount',
  templateUrl: './managediscount.component.html'
})
export class ManagediscountComponent implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.ShowData();
  }

  //Get Method

  ShowData()
  {
    this.http.get("https://localhost:44395/api/Discount")
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }
  
  //invoke object of class
  discounttbs:DiscountTB= new DiscountTB();

  //Get data from table in array
  getData: Array<DiscountTB>= new Array<DiscountTB>();


  //Post Method
  
  AddDiscount() {
    var addData = {
      coupenCode: this.discounttbs.coupenCode,
      discountPrice: this.discounttbs.discountPrice,
      startDate: this.discounttbs.startDate,
      expiryDate: this.discounttbs.expiryDate,
      isActive: this.discounttbs.isActive
    }
    console.log(addData);
    console.log(this.discounttbs);
    this.http.post("https://localhost:44395/api/Discount", addData)
    .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
    this.discounttbs= new DiscountTB();

  }

  //Put Method
  EditDiscount(dis: DiscountTB) {
    this.discounttbs = dis;
  }

  //Delete Method
  DeleteDiscount(dis: DiscountTB) {
    console.log(dis);
    let httparms = new HttpParams().set("Id", dis.id);
    let options = { params: httparms };
    // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
    this.http.delete("https://localhost:44395/api/Discount", options)
    .subscribe(res => { this.ShowData(); console.log(res) }, res => console.log(res));
    

  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (sample: any) {
      return sample != value;
    });
  }

}
