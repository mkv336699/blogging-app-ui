import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blog: any = {};
  comments: any[] = [];
  newComment: string = '';
  baseURL = 'http://localhost:3000/';
  isLoggedIn = false;

  constructor(
    private blogService: BlogService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService
  ) {
    this.isLoggedIn = localStorage.getItem('user') !== null;
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.loadBlog(params.id);
      this.loadComments(params.id);
    });
  }

  loadBlog(id: string) {
    this.blogService.getBlogById(id).subscribe((res: any) => {
      if (res && res.data) {
        this.blog = res.data;
        const date = new Date(this.blog.updatedAt);
        this.blog.date = date.toLocaleString();
      }
    });
  }

  loadComments(blogId: string) {
    this.commentService.getComments(blogId).subscribe((res: any) => {
      if (res && res.data) {
        this.comments = res.data;
      }
    });
  }

  submitComment() {
    if (!this.newComment.trim()) {
      this.toasterService.showError('Please enter a comment');
      return;
    }

    this.commentService.addComment(this.blog._id, this.newComment).subscribe({
      next: (res: any) => {
        this.toasterService.showSuccess('Comment added successfully');
        this.newComment = '';
        this.loadComments(this.blog._id);
      },
      error: (error) => {
        this.toasterService.showError(error.message || 'Failed to add comment');
      }
    });
  }
}
