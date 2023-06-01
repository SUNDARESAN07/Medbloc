import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Medicinedata } from '../medicine/medicinedata';
import { Manufacturer } from './manufacturer';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http:HttpClient) { }
   
  stream1=new Subject<number>();

  getMedicine():Observable<Medicinedata[]>{
    return this.http.get<Medicinedata[]>("/manufacturer/getmedicines");
  }
  addMedicine(medicine:Medicinedata):void{
    this.http.post("/manufacturer/addmedicine/",medicine).subscribe((data)=>{
      console.log(data);
    });
  }
  addManufacturer(manufacturer:Manufacturer){
    this.http.post<Manufacturer>("/manufacturer/add/",manufacturer).subscribe((data)=>{
      console.log(data);
    });

  }

}
