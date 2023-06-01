import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssignin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SSigninComponent implements OnInit {
  toggle:boolean=false;
 
  signup(){
  this.toggle=!this.toggle;
  console.log(this.toggle);
 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
