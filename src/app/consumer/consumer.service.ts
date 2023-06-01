import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicinedata } from '../medicine/medicinedata';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  getMedicinebyId(bno:string):Observable<Medicinedata>{
    return this.http.get<Medicinedata>("/consumer/getmedid/"+bno);
  }
}
