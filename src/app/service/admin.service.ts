import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../_models/users';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url: string = 'https://homie-iti.herokuapp.com/users/';
  getAllUsers() {
    return this.http.get<any>(this.url);
  }

  getUserById(id: any) {
    return this.http.get<Users>(this.url + id);
  }

  addUser(user: Users) {
    return this.http.post<Users>(this.url, user);
  }

  updateUserData(id: string, user: Users) {
    return this.http.put<Users>(this.url + id, user);
  }

  deleteUser(id: any) {
    return this.http.delete<Users>(this.url + id);
  }
  constructor(private http: HttpClient) {}
}
