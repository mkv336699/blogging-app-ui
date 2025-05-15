import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(blogId: string) {
    return this.http.get(`/api/comments/${blogId}`);
  }

  addComment(blogId: string, comment: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.http.post('/api/comments', {
      comment,
      createdBy: user._id,
      commentedAt: blogId
    });
  }
} 