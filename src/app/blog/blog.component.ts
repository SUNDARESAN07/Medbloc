import { Component, OnInit } from '@angular/core';
import { BlogData } from './data/blog-data';
import { BlogService } from './data/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:BlogData[]=[];
  constructor(private service:BlogService) { }

  ngOnInit(): void {
    this.blogs=this.service.getBlogs();
  }

}
