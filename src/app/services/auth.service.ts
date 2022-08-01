import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../_models/user';
import { Router } from '@angular/router';

interface AuthInfo {
  isLoggedIn: boolean;
  token?: string;
  user?: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInfo: AuthInfo = { isLoggedIn: false };

  private url: string = 'https://homie-iti.herokuapp.com';

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

  getUser() {
    return this.authInfo.user;
  }
  setUser(user: User) {
    this.authInfo.user = user;
  }

  getToken() {
    return this.authInfo.user;
  }
  setToken(token: string) {
    this.authInfo.token = token;
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    return this.authInfo.isLoggedIn;
  }
  setLoggedIn(isLoggedIn: boolean) {
    this.authInfo.isLoggedIn = isLoggedIn;
  }

  constructor(private http: HttpClient, private router: Router) {}
}
