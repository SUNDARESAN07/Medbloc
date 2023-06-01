import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-acc-type',
  templateUrl: './acc-type.component.html',
  styleUrls: ['./acc-type.component.css']
})
export class AccTypeComponent implements OnInit {
 custom:OwlOptions={loop: true,
  autoplay: true,
  autoplayTimeout: 5000, //5000ms = 5s;
  autoplayHoverPause: true,}
  constructor() { }

  ngOnInit(): void {
  }

}
