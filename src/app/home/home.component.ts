import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    MatMenuModule, 
    MatIconModule, 
    MatSlideToggleModule, 
    MatButtonModule, 
    MatCardModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allBlogs: any = [];

  constructor(
    private blogService: BlogService
  ) {}
  
  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getAllBlogs().subscribe((res: any) => {
      console.log("getAllBlogs", res);
      if (res && res.data) {
        this.allBlogs = res.data;
      }
    });
  }
}
