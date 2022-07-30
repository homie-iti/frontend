import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Units } from '../_models/units';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  getAllUnits() {
    return this.http.get<any>(
      'https://homie-iti.herokuapp.com/cities/984ef4ae21ff6071cfb30fb0'
    );
  }

  constructor(private http: HttpClient) {}
}
