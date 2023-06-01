import { Component, OnInit, ViewChild } from '@angular/core';
import { Address } from 'src/app/medicine/address';
import { Manufacturer } from 'src/app/manufacturer/manufacturer';
import { Name } from 'src/app/medicine/name';
import { ManufacturerService } from 'src/app/manufacturer/manufacturer.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';

@Component({
  selector: 'app-manregister',
  templateUrl: './manregister.component.html',
  styleUrls: ['./manregister.component.css']
})
export class ManregisterComponent implements OnInit {
  mid:number=0;
  mname:Name={
    firstname: '',
    lastname: ''
  }
  comaddress:Address={
    caddress: '',
    postal: 0
  }
  man: Manufacturer = {
    mid: 0,
    name: '',
    address: '',
    email: "",
    phno: 0,
    proofurl: "",
    cname: '',
    quantity: 0
  };
  checkbox:boolean=false;
  @ViewChild('manform') mform!:NgForm;
  constructor(private mservice:ManufacturerService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((id)=>{
      this.mid=id['mid'];
      this.man.mid=this.mid;
      console.log(this.man.mid)
    });
  }

  ngOnInit(): void {
   
  }

    
  addManufacturer(){
    console.log(this.man.mid);
    this.man.name=this.mname.firstname+' '+this.mname.lastname;
    this.man.address=this.comaddress.caddress+' ' + this.comaddress.postal;
    this.mservice.addManufacturer(this.man);
  }

  reset(){
    this.mform.reset({mid:this.mid});
    console.log(this.man.mid)
  }

}
