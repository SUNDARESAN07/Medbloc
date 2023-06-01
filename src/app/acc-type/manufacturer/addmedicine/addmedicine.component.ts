import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from 'src/app/manufacturer/manufacturer.service';
import { MedicineService } from 'src/app/medicine/medicine.service';
import { Medicinedata } from 'src/app/medicine/medicinedata';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {
  manid:string='';
  med: Medicinedata = {
    cname: "",
    medname: "",
    quantity: 0,
    batchno: 0,
    mfgdate: new Date(),
    expdate: new Date(),
    status:'false',
    mid:this.manid,
    sid:''

  };
  check: boolean = false;
  @ViewChild('medicineform')
  medform!: NgForm;
  constructor(private mservice: ManufacturerService) { }

  ngOnInit(): void {
  }
  addMedicine(): void {
    this.mservice.addMedicine(this.med);
    console.log(this.med);
  }
  clear(): void {
    this.medform.reset();
    
  }
}
