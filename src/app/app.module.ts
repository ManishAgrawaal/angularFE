import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageairlineComponent } from './admin/manageairline/manageairline.component';
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { ManagediscountComponent } from './admin/managediscount/managediscount.component';
import { ManagereportComponent } from './admin/managereport/managereport.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { HeaderComponent } from './admin/header/header.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserbookingComponent } from './user/userbooking/userbooking.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageairlineComponent,
    ManagescheduleComponent,
    ManagediscountComponent,
    ManagereportComponent,
    AdminloginComponent,
    HeaderComponent,
    UserhomeComponent,
    MainheaderComponent,
    MainfooterComponent,
    UserbookingComponent,
    UserloginComponent,
    UserregistrationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
