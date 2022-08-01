import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'https://homie-iti.herokuapp.com';

  login(email: string, password: string) {
    return this.http.post(this.url + '/login', {
      email,
      password,
    });
  }

  constructor(private http: HttpClient) {}
}
