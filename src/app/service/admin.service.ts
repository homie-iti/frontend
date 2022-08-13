import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../_models/city';
import { Contract } from '../_models/contract';
import { HelpQuestions } from '../_models/help-questions';
import { Units } from '../_models/units';
import { User } from '../_models/user';
import { Unitreviews } from '../_models/unitreview';
import { Admin } from '../_models/admin';

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

  addAdmin(endpoint: string, admin: Admin) {
    return this.http.post<User>(this.url + endpoint, admin);
  }

  addUnit(endpoint: string, unit: Units, image?: any) {
    return this.http.post<any>(this.url + endpoint, unit, image);
  }

  addCity(endpoint: string, city: City) {
    return this.http.post<City>(this.url + endpoint, city);
  }

  addContract(endpoint: string, contract: Contract) {
    return this.http.post<Contract>(this.url + endpoint, contract);
  }

  addReview(endpoint: string, review: Unitreviews) {
    return this.http.post<Contract>(this.url + endpoint, review);
  }

  addHelpQuestion(endpoint: string, question: HelpQuestions) {
    return this.http.post<Contract>(this.url, question);
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

  deleteAdmin(endpoint: string, id: any) {
    return this.http.delete<Admin>(this.url + endpoint + id);
  }

  deleteContract(contractId: string, unitId: string) {
    return this.http.delete<Contract>(
      this.url + 'contracts/' + contractId + '/unit/' + unitId
    );
  }

  deleteCity(endpoint: string, cityId: string) {
    return this.http.delete<City>(this.url + endpoint + cityId);
  }

  deleteUnit(endpoint: string, unitId: string) {
    return this.http.delete<Units>(this.url + endpoint + unitId);
  }

  deleteHelpQuestion(endpoint: string, questionId: string) {
    return this.http.delete<HelpQuestions>(this.url + endpoint + questionId);
  }

  deleteReview(unitId: string, reviewId: string) {
    return this.http.delete<Unitreviews>(
      this.url + 'units/' + unitId + '/reviews/' + reviewId
    );
  }
  constructor(private http: HttpClient) {}
}
