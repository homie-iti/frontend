import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  filterGender(endpoint: string) {
    return this.http.get<any>(this.url + endpoint);
  }
  


  constructor(private http: HttpClient) {}
}
