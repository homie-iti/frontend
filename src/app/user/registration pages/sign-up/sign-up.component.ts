import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Checkmail } from 'src/app/_models/signUp/checkmail';
import { ChecknationalId } from 'src/app/_models/signUp/checknational-id';
import { Checkphone } from 'src/app/_models/signUp/checkphone';
import { Gender, SignUpData } from 'src/app/_models/signUp/sign-up-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  CheckMail: Checkmail = new Checkmail('');
  CheckNationalId: ChecknationalId = new ChecknationalId(0);
  CheckPhone: Checkphone = new Checkphone(0);
  user: SignUpData = new SignUpData(
    '',
    '',
    '',
    '',
    '',
    0,
    0,
    Gender.female,
    23,
    ''
  );
  


  AvalibleMail:boolean = true;
  AvalibleNationalId:boolean = true;
  AvaliblePhone:boolean = true;



   
  confirmPassword:string=""

  

 

  isMail(){
    console.log(this.CheckMail);

    if(this.CheckMail.email === ""){
      throw console.error(" object is empty");
    } else{
    this.user.email=this.CheckMail.email
    this.authService.checkAvailableEmail(this.CheckMail).subscribe(a=>{
      console.log(a);
      if (a.isAvailable== false){
        this.AvalibleMail=false
        console.log(this.AvalibleMail)
      }else {
        this.AvalibleMail=true
      }
     
    })}
  }
  isNationalId(){
    this.user.nationalId=Number(this.CheckNationalId.nationalId)
    if(this.CheckNationalId.nationalId === null){
      throw console.error(" object is empty");
    } else{
    console.log(this.CheckNationalId);
    this.authService.checkAvailableNationalId(this.CheckNationalId).subscribe(a=>{
      console.log(a);
      if (a.isAvailable== false){
        this.AvalibleNationalId=false
        console.log(this.AvalibleNationalId)
      }else {
        this.AvalibleNationalId=true
      }
    })}}
  

  isPhone(){
    this.user.phone=Number(this.CheckPhone.phone)
    if(this.CheckPhone.phone=== null){
      throw console.error(" object is empty");
    } else{

    console.log(this.CheckPhone);
    this.authService.checkAvailablePhone(this.CheckPhone).subscribe((a) => {
      console.log(a);
      if (a.isAvailable== false){
        this.AvaliblePhone=false
        console.log(this.AvaliblePhone)
      }else {
        this.AvaliblePhone=true
      }
    })}
  }

  // save(){
  //   console.log(JSON.stringify(this.user))
  // }

  save() {
    console.log(this.user);
    this.authService.addUser(this.user).subscribe((a) => {
      console.log(a);
    });
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');
  }
}
