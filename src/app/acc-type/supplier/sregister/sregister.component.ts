import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/medicine/address';
import { Name } from 'src/app/medicine/name';
import { Supplier } from 'src/app/supplier/supplier';
import { SupplierService } from 'src/app/supplier/supplier.service';

@Component({
  selector: 'app-sregister',
  templateUrl: './sregister.component.html',
  styleUrls: ['./sregister.component.css']
})
export class SregisterComponent implements OnInit {
  sid:number=0;
  sname: Name = {
    firstname: '',
    lastname: ''
  }
  comaddress: Address = {
    caddress: '',
    postal: 0
  }
  supplier: Supplier = {
    sid: 0,
    name: this.sname.firstname + '' + this.sname.lastname,
    address: this.comaddress.caddress + this.comaddress.postal,
    email: "",
    phno: 0,
    proofurl: "",
    cname: '',
    quantity: 0
  };
  checkbox: boolean = false;
  @ViewChild('sform') sform!:NgForm;
  constructor(private service: SupplierService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((id)=>{
      this.sid=id['sid'];
      this.supplier.sid=this.sid;
      console.log(this.supplier.sid)
    });
  }

  ngOnInit(): void {
  }
  addSupplier(): void {
    this.supplier.name=this.sname.firstname+' '+this.sname.lastname;
    this.supplier.address=this.comaddress.caddress+' ' + this.comaddress.postal;
   // console.log(this.supplier)
   this.service.addSupplier(this.supplier);
  }
  reset(){
this.sform.reset({sid:this.sid})
console.log(this.supplier.sid);
  }
}
