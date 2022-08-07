import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unitreviews } from '../_models/unitreview';
import { Units } from '../_models/units';

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

  filter(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  addComment(unitreview: string) {
    return this.http.post<Unitreviews>(
      'https://homie-iti.herokuapp.com/reviews',
      unitreview
    );
  }

  // deleteComment(id: string) {
  //   return this.http.delete(
  //     'https://homie-iti.herokuapp.com/reviews/bf1a9d32ab752f9ccf16bf9b' + id
  //   );
  // }

  // updateComment(comment: Unitreviews) {
  //   return this.http.put(
  //     'https://homie-iti.herokuapp.com/reviews/bf1a9d32ab752f9ccf16bf9b' + comment.id,
  //     comment
  //   );
  // }

  constructor(private http: HttpClient) {}
}
