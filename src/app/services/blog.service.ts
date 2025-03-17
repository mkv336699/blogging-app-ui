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
}
