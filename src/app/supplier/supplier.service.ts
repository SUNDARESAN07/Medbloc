import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacturer } from '../manufacturer/manufacturer';
import { Medicinedata } from '../medicine/medicinedata';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }
  getManufacturer(mid:string):Observable<Manufacturer>{
    return this.http.get<Manufacturer>("supplier/getmanid/"+mid);
  }
  verify(sid:string,id:string):Observable<Medicinedata>{
    return this.http.get<Medicinedata>("/supplier/validate/medid/"+id+"/"+sid);
  }
  getMedicinebyId(bno:string):Observable<Medicinedata>{
    return this.http.get<Medicinedata>("/supplier/getmedid/"+bno);
  }
  addSupplier(supplier:Supplier){
    this.http.post<Supplier>("/supplier/add/",supplier).subscribe((data)=>{
      console.log(data);
    });
  }
}
