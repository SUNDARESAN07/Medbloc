import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSigninComponent } from './signin/signin.component';
import { SmedicineDashboardComponent } from './smedicine-dashboard/smedicine-dashboard.component';
import { SregisterComponent } from './sregister/sregister.component';
import { SupplierComponent } from './supplier.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SregisterComponent,
    SupplierComponent,
    SSigninComponent, 
    SmedicineDashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ]
})
export class SupplierModule { }
