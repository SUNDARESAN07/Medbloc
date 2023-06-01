import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccTypeComponent } from '../acc-type.component';
import { ConsumerSearchComponent } from '../consumer/consumer-search/consumer-search.component';
import { ConsumerComponent } from '../consumer/consumer.component';
import { CSigninComponent } from '../consumer/signin/signin.component';
import { AddmedicineComponent } from '../manufacturer/addmedicine/addmedicine.component';
import { ManregisterComponent } from '../manufacturer/manregister/manregister.component';
import { ManufacturerComponent } from '../manufacturer/manufacturer.component';
import { MedicineDashboardComponent } from '../manufacturer/medicine-dashboard/medicine-dashboard.component';
import { SigninComponent } from '../manufacturer/signin/signin.component';
import { SSigninComponent } from '../supplier/signin/signin.component';
import { SmedicineDashboardComponent } from '../supplier/smedicine-dashboard/smedicine-dashboard.component';
import { SregisterComponent } from '../supplier/sregister/sregister.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ManufacturerModule } from '../manufacturer/manufacturer.module';
import { SupplierModule } from '../supplier/supplier.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccTypeComponent,
    ConsumerComponent,
    CSigninComponent,
    ConsumerSearchComponent,
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ManufacturerModule,
    SupplierModule,
    FormsModule
  ]
})
export class AccountModuleModule { }
