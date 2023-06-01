import { Component, OnInit } from '@angular/core';
import { AboutData } from './data/about-data';
import { AboutService } from './data/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts:AboutData[]=[];
  constructor(private service:AboutService) { }

  ngOnInit(): void {
    this.abouts=this.service.getAbout();
  }

}
