import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageairlineComponent } from './admin/manageairline/manageairline.component';
import { ManagediscountComponent } from './admin/managediscount/managediscount.component';
import { ManagereportComponent } from './admin/managereport/managereport.component';
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { UserbookingComponent } from './user/userbooking/userbooking.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';

const routes: Routes = [
  {path:'', component:UserhomeComponent},
  {path:'user/booking', component:UserbookingComponent},
  {path:'user/login', component:UserloginComponent},
  {path:'user/registration', component:UserregistrationComponent},
  
  {path:'admin/manageairline', component:ManageairlineComponent},
  {path:'admin/manageschedule', component:ManagescheduleComponent},
  {path:'admin/managediscount', component:ManagediscountComponent},
  {path:'admin/managereport', component:ManagereportComponent},
  {path:'admin/login', component:AdminloginComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'admin/dashboard', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
