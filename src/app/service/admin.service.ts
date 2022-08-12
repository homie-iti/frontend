import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Units } from '../_models/units';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url: string = 'https://homie-iti.herokuapp.com/';
  getAll(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  getUserById(endpoint: string, id: any) {
    return this.http.get<User>(this.url + endpoint + id);
  }

  addUser(endpoint: string, user: User) {
    return this.http.post<User>(this.url + endpoint, user);
  }

  addUnit(endpoint: string, unit: Units, image?: any) {
    return this.http.post<any>(this.url + endpoint, unit, image);
  }

  uploadUnitCover(endpoint: string, image: any) {
    return this.http.post(this.url + endpoint, image);
  }

  updateUserData(endpoint: string, id: string, user: User) {
    return this.http.put<User>(this.url + endpoint + id, user);
  }

  deleteUser(endpoint: string, id: any) {
    return this.http.delete<User>(this.url + endpoint + id);
  }

  constructor(private http: HttpClient) {}
}
