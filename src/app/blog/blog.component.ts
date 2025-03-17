import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blog: any = {};
  baseURL = 'http://localhost:3000/';

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      console.log("yo");
      
      this.blogService.getBlogById(res.id).subscribe((res: any) => {
        console.log("getBlogById", res);
        if (res && res.data) {
          this.blog = res.data;
          const date = new Date(this.blog.updatedAt);
          const dateToDisplay = date.toLocaleString()
          this.blog.date = dateToDisplay;
        }
      });
    })
  }
}
