import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    let url = API_URLS.LOGIN;
    return this.http.post(url, { email, password });
  }
}
