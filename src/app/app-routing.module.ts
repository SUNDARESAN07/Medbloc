import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccTypeComponent } from './acc-type/acc-type.component';
import { ConsumerSearchComponent } from './acc-type/consumer/consumer-search/consumer-search.component';
import { ConsumerComponent } from './acc-type/consumer/consumer.component';
import { CSigninComponent } from './acc-type/consumer/signin/signin.component';
import { AddmedicineComponent } from './acc-type/manufacturer/addmedicine/addmedicine.component';
import { ManregisterComponent } from './acc-type/manufacturer/manregister/manregister.component';
import { ManufacturerComponent } from './acc-type/manufacturer/manufacturer.component';
import { MedicineDashboardComponent } from './acc-type/manufacturer/medicine-dashboard/medicine-dashboard.component';
import { SigninComponent } from './acc-type/manufacturer/signin/signin.component';
import { SSigninComponent } from './acc-type/supplier/signin/signin.component';
import { SmedicineDashboardComponent } from './acc-type/supplier/smedicine-dashboard/smedicine-dashboard.component';
import { SregisterComponent } from './acc-type/supplier/sregister/sregister.component';
import { SupplierComponent } from './acc-type/supplier/supplier.component';
import { BlogComponent } from './blog/blog.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {path:'home' ,component:HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'accounts',component:AccTypeComponent},
  {path:'accounts/manufacturer',component:ManufacturerComponent,
    children: [
      {path:'signin',component:SigninComponent},
      {path:'dashboard',component:MedicineDashboardComponent},
      {path:'add',component:AddmedicineComponent},
      {path:'',redirectTo:'signin',pathMatch:'full'},
      { path: 'register', component: ManregisterComponent},
    ]
  },
  {path:'accounts/supplier',component:SupplierComponent,
  children: [
    {path:'signin',component:SSigninComponent},
    {path:'dashboard',component:SmedicineDashboardComponent},
    {path:'',redirectTo:'signin',pathMatch:'full'},
    { path: 'register', component:SregisterComponent},
  ]
},
  {path:'accounts/consumer',component:ConsumerComponent,
  children: [
    {path:'signin',component:CSigninComponent},
    {path:'',redirectTo:'signin',pathMatch:'full'},
    { path: 'dashboard', component:ConsumerSearchComponent},
  ]
},
  {path:'blog',component:BlogComponent},
  {path:'company',component:CompaniesComponent},
  {path:'contact',component:ContactComponent},
  {path:'error',component:ErrorsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
