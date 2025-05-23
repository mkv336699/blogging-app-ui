import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    MatMenuModule, 
    MatIconModule, 
    MatSlideToggleModule, 
    MatButtonModule, 
    MatCardModule,
    RouterLink,
    MatPaginatorModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allBlogs: any = [];
  pageNumber = 1;
  totalBlogs = 0;
  pageSize = 12;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private blogService: BlogService,
    private loadingService: LoadingService
  ) {}
  
  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    const pagination = {
      recordsPerPage: this.pageSize,
      pageNumber: this.pageNumber
    }
    this.blogService.getAllBlogs({}, pagination).subscribe((res: any) => {
      if (res && res.data) {
        this.allBlogs = res.data;
        this.totalBlogs = res.total || 0;
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getBlogs();
  }
}
