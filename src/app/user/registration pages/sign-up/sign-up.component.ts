import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SingupService } from 'src/app/service/singup.service';
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



  CheckMail: Checkmail=new Checkmail("");
  CheckNationalId: ChecknationalId=new ChecknationalId(0);
  CheckPhone: Checkphone=new Checkphone(0);
  user:SignUpData=new SignUpData("","","","","",0,0,Gender.female,23,"")
  AvalibleMail:boolean = true;
  AvalibleNationalId:boolean = true;
  AvaliblePhone:boolean = true;



   
  confirmPassword:string=""

  

 

  isMail(){
    console.log(this.CheckMail);
    this.user.email=this.CheckMail.email
    this.signUpService.checkAvailableEmail(this.CheckMail).subscribe(a=>{
      console.log(a);
      if (a.isAvailable== false){
        this.AvalibleMail=false
        console.log(this.AvalibleMail)
      }
     
    })
  }
  isNationalId(){
    this.user.nationalId=Number(this.CheckNationalId.nationalId)

    console.log(this.CheckNationalId);
    this.signUpService.checkAvailableNationlId(this.CheckNationalId).subscribe(a=>{
      console.log(a);
      if (a.isAvailable== false){
        this.AvalibleNationalId=false
        console.log(this.AvalibleNationalId)
      }
    })
  }

  isPhone(){
    this.user.phone=Number(this.CheckPhone.phone)

    console.log(this.CheckPhone);
    this.signUpService.checkAvailablephone(this.CheckPhone).subscribe(a=>{
      console.log(a);
      if (a.isAvailable== false){
        this.AvaliblePhone=false
        console.log(this.AvaliblePhone)
      }
    })
  }


  // save(){
  //   console.log(JSON.stringify(this.user))
  // }

  save(){
    console.log(this.user);
    this.signUpService.addUser(this.user).subscribe(a=>{
      console.log(a);
    })
  }
  constructor( private signUpService:SingupService, private authService: AuthService, private router: Router) { 

  }


  
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');
  }


}
