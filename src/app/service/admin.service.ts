import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url: string = 'https://homie-iti.herokuapp.com/users/';
  getAllUsers() {
    return this.http.get<any>(this.url);
  }

  getUserById(id: any) {
    return this.http.get<User>(this.url + id);
  }

  addUser(user: User) {
    return this.http.post<User>(this.url, user);
  }

  updateUserData(id: string, user: User) {
    return this.http.put<User>(this.url + id, user);
  }

  deleteUser(id: any) {
    return this.http.delete<User>(this.url + id);
  }
  constructor(private http: HttpClient) {}
}
