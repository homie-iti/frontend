import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../_models/user';
import { AuthInfo } from '../_models/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInfo: AuthInfo = { isLoggedIn: false };

  private url: string = 'http://localhost:8080';

  login(email: string, password: string) {
    return this.http.post<{
      message: string;
      details?: string;
      token?: string;
    }>(this.url + '/login', {
      email,
      password,
    });
  }

  setAuthInfo(authInfo: AuthInfo) {
    this.authInfo = authInfo;
  }
  getAuthInfo() {
    return this.authInfo;
  }

  setUser(user: User) {
    this.authInfo.user = user;
  }
  getUser() {
    return this.authInfo.user;
  }

  setToken(token: string) {
    this.authInfo.token = token;
    localStorage.setItem('token', token);
  }
  getToken() {
    return this.authInfo.user;
  }

  isLoggedIn() {
    return this.authInfo.isLoggedIn;
  }
  setLoggedIn(isLoggedIn: boolean) {
    this.authInfo.isLoggedIn = isLoggedIn;
  }

  constructor(private http: HttpClient, private router: Router) {}
}
