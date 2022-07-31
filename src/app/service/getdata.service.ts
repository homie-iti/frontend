import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Units } from '../_models/units';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  private url: string = 'https://homie-iti.herokuapp.com';
  getAll() {
    return this.http.get<any>(this.url);
  }
  getAllCities(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  getAllUnits(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  getAllUnitDetails(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }

  constructor(private http: HttpClient) {}
}
