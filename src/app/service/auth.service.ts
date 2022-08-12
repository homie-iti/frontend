import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../_models/user';
import { AuthInfo } from '../_models/auth';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Checkmail } from '../_models/signUp/checkmail';
import { ChecknationalId } from '../_models/signUp/checknational-id';
import { Checkphone } from '../_models/signUp/checkphone';
import { SignUpData } from '../_models/signUp/sign-up-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInfo: AuthInfo = { isLoggedIn: false };

  jwtHelper: any;

  // private url: string = 'http://localhost:8080';
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

  checkAvailableEmail(checkAvailable: Checkmail) {
    return this.http.post<any>(
      this.url + '/signup/check-availability',
      checkAvailable
    );
  }

  checkAvailableNationalId(checkAvailable: ChecknationalId) {
    return this.http.post<any>(
      this.url + '/signup/check-availability',
      checkAvailable
    );
  }
  checkAvailablePhone(checkAvailable: Checkphone) {
    return this.http.post<any>(
      this.url + '/signup/check-availability',
      checkAvailable
    );
  }

  addUser(signUp: SignUpData) {
    return this.http.post<any>(this.url + '/signup', signUp);
  }

  // setAuthInfo(authInfo: AuthInfo) {
  //   this.authInfo = authInfo;
  // }
  getAuthInfo() {
    return this.authInfo;
  }

  setUser(user: any) {
    console.log(user);

    this.authInfo.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.authInfo.user;
  }

  setToken(token: string) {
    this.authInfo.token = token;
    localStorage.setItem('token', token);
  }
  getToken() {
    return this.authInfo.token;
  }
  getDecodedToken(): { id: string; role: string; exp: number; iat: number } {
    return this.jwtHelper.decodeToken(this.getLocalStorageToken());
  }

  getLocalStorageToken() {
    return localStorage.getItem('token');
  }
  removeLocalStorageToken() {
    localStorage.removeItem('token');
  }

  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  removeLocalStorageUser() {
    localStorage.removeItem('user');
  }

  isExpired(token: string | null) {
    return this.jwtHelper.isTokenExpired(token);
  }

  isLoggedIn() {
    return this.authInfo.isLoggedIn;
  }
  setLoggedIn(isLoggedIn: boolean) {
    this.authInfo.isLoggedIn = isLoggedIn;
    if (isLoggedIn) return;
    this.authInfo.token = undefined;
    this.authInfo.user = undefined;
  }

  constructor(
    private http: HttpClient,
    private router: Router // private jwtHelper: JwtHelperService
  ) {
    this.jwtHelper = new JwtHelperService();
    const storedToken = this.getLocalStorageToken();
    if (!this.isExpired(storedToken)) {
      this.setToken(storedToken as string);
      this.setLoggedIn(true);
      this.setUser(this.getLocalStorageUser());
    }
  }
}
