import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Checkmail } from '../_models/signUp/checkmail';
import { ChecknationalId } from '../_models/signUp/checknational-id';
import { Checkphone } from '../_models/signUp/checkphone';
import { SignUpData } from '../_models/signUp/sign-up-data';

@Injectable({
  providedIn: 'root'
})
export class SingupService {



  private url: string = 'https://homie-iti.herokuapp.com/signup/check-availability';
  private Posturl:string='https://homie-iti.herokuapp.com/signup'

  checkAvailableEmail( checkAvailable: Checkmail) {
      return this.http.post<any>(this.url, checkAvailable);

    
    
    
  }
  
  checkAvailableNationlId( checkAvailable:ChecknationalId) {
    return this.http.post<any>(this.url, checkAvailable);
  }
  checkAvailablephone( checkAvailable:Checkphone) {
    return this.http.post<any>(this.url, checkAvailable);
  }

  addUser( signUp: SignUpData) {
    return this.http.post<any>(this.Posturl, signUp);
  }

  constructor(private http: HttpClient) {}
}
