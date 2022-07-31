import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../_models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  getCityByName() {
    return this.http.get<City[]>(`https://homie-iti.herokuapp.com/cities`);
  }
  constructor(public http: HttpClient) {}
}
