import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';
import { LoadingService } from './loading.service';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  private handleError(error: any) {
    this.loadingService.showError(error.message || 'An error occurred');
    return throwError(() => error);
  }

  getAllBlogs() {
    this.loadingService.showLoading();
    let url = API_URLS.GET_ALL_BLOGS;
    return this.http.get(url).pipe(
      catchError(this.handleError.bind(this)),
      finalize(() => this.loadingService.hideLoading())
    );
  }

  getBlogById(id: string) {
    this.loadingService.showLoading();
    let url = API_URLS.GET_BLOG_BY_ID.replace("{id}", id);
    return this.http.get(url).pipe(
      catchError(this.handleError.bind(this)),
      finalize(() => this.loadingService.hideLoading())
    );
  }

  createBlog(blog: any) {
    this.loadingService.showLoading();
    let url = API_URLS.CREATE_BLOG;
    return this.http.post(url, blog).pipe(
      catchError(this.handleError.bind(this)),
      finalize(() => this.loadingService.hideLoading())
    );
  }
}
