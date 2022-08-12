import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../_models/agent';
import { HelpQuestions } from '../_models/help-questions';
import { Landlord } from '../_models/landlord';
import { Unitreviews } from '../_models/unitreview';
import { Units } from '../_models/units';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  GetdataService(): any {
    throw new Error('Method not implemented.');
  }
  private url: string = 'https://homie-iti.herokuapp.com';
  getAll() {
    return this.http.get<any>(this.url);
  }
  getAllCities(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  getAllCityUnits(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  getUnitDetails(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }
  gethelpQuestions(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }
  getUserDetails(id: string) {
    return this.http.get<any>(this.url + `/users/` + id);
  }

  filter(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  addComment(comment: any) {
    return this.http.post<Unitreviews>(this.url + '/' + 'reviews', comment);
  }

  deleteComment(endpoint: string) {
    return this.http.delete('https://homie-iti.herokuapp.com' + endpoint);
  }

  addQuestion(question: any) {
    return this.http.post<HelpQuestions>(
      this.url + '/' + 'help-questions',
      question
    );
  }

  deletQuestion(endpoint: string) {
    return this.http.delete('https://homie-iti.herokuapp.com' + endpoint);
  }
  addUnit(unit: {}) {
    return this.http.post<any>('https://homie-iti.herokuapp.com/units', unit);
  }

  postFavorite(favorite: any, userId: any) {
    return this.http.post<any>(
      this.url + '/users/' + userId + '/favorites/',
      favorite
    );
  }
  deleteFavorite(id: any, userId: any) {
    return this.http.delete<any>(
      this.url + '/users/' + userId + '/favorites/' + id
    );
  }

  updateUnit(id: any, unit: {}) {
    return this.http.put<any>(
      `https://homie-iti.herokuapp.com/units/${id}`,
      unit
    );
  }
  addAmount(userId: any, balance: any) {
    return this.http.put<any>(
      `https://homie-iti.herokuapp.com/users/${userId}`,
      { balance }
    );
  }

  updateUserData(endpoint: string, id: string, user: User) {
    return this.http.put<User>(this.url + endpoint + id, user);
  }

  updateUserImage(endpoint: string, id: string, image: any) {
    return this.http.put<User>(this.url + endpoint + id, image);
  }

  addLandlord(endpoint: string, data: any) {
    return this.http.post<Landlord>(this.url + endpoint, data);
  }

  deleteLandlord(endpoint: string, id: any) {
    return this.http.delete<Landlord>(this.url + endpoint + id);
  }

  addAgent(endpoint: string, data: any) {
    return this.http.post<any>(this.url + endpoint, data);
  }

  deleteAgent(endpoint: string, id: any) {
    return this.http.delete<Agent>(this.url + endpoint + id);
  }
  constructor(private http: HttpClient) {}
}
