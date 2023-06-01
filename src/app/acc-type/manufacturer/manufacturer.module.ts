import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { ManregisterComponent } from './manregister/manregister.component';
import { ManufacturerComponent } from './manufacturer.component';
import { MedicineDashboardComponent } from './medicine-dashboard/medicine-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManufacturerComponent,
    SigninComponent,
    ManregisterComponent,
    AddmedicineComponent,
    MedicineDashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class ManufacturerModule { }
