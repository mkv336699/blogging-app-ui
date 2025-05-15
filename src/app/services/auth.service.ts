import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';
import { Observable, catchError, map, of } from 'rxjs';
import { ToasterService } from './toaster.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  login(email: string, password: string) {
    let url = API_URLS.LOGIN;
    return this.http.post(url, { email, password });
  }

  checkToken(): Observable<boolean> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return of(false);
    }

    return this.http.get(API_URLS.CHECK_TOKEN).pipe(
      map((response: any) => {
        if (response.authToken) {
          localStorage.setItem('authToken', response.authToken);
        }
        return true;
      }),
      catchError((error) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.toasterService.showError('Session expired. Please login again.');
        this.router.navigate(['/auth/login']);
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
}
