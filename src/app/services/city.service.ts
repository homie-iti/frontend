import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../_models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCityByName() {
    return this.http.get<City[]>(`http://localhost:8080/cities`)
  }
  constructor(public http: HttpClient) { }
}
