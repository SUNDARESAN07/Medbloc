import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/manufacturer/manufacturer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  toggle:boolean=false;
  signup(){
    this.toggle=!this.toggle;
    console.log(this.toggle);
   
    }
    
  constructor(private mservice:ManufacturerService) { }

  ngOnInit(): void {
  }
  
  register(){
    this.mservice.stream1.next(105);
  }



}
