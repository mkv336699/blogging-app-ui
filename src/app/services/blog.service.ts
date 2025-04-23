import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    let url = API_URLS.GET_ALL_BLOGS;
    return this.http.get(url);
  }

  getBlogById(id: string) {
    let url = API_URLS.GET_BLOG_BY_ID.replace("{id}", id);
    return this.http.get(url);
  }

  createBlog(blog: any) {
    let url = API_URLS.CREATE_BLOG;
    return this.http.post(url, blog);
  }
}
