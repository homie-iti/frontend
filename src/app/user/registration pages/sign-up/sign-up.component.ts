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
  AvailableMail: boolean = true;
  AvailableNationalId: boolean = true;
  AvailablePhone: boolean = true;

  confirmPassword: string = '';

  isMail() {
    console.log(this.CheckMail);
    this.user.email = this.CheckMail.email;
    this.authService.checkAvailableEmail(this.CheckMail).subscribe((a) => {
      console.log(a);
      if (a.isAvailable == false) {
        this.AvailableMail = false;
        console.log(this.AvailableMail);
      }
    });
  }
  isNationalId() {
    this.user.nationalId = Number(this.CheckNationalId.nationalId);

    console.log(this.CheckNationalId);
    this.authService
      .checkAvailableNationalId(this.CheckNationalId)
      .subscribe((a) => {
        console.log(a);
        if (a.isAvailable == false) {
          this.AvailableNationalId = false;
          console.log(this.AvailableNationalId);
        }
      });
  }

  isPhone() {
    this.user.phone = Number(this.CheckPhone.phone);

    console.log(this.CheckPhone);
    this.authService.checkAvailablePhone(this.CheckPhone).subscribe((a) => {
      console.log(a);
      if (a.isAvailable == false) {
        this.AvailablePhone = false;
        console.log(this.AvailablePhone);
      }
    });
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
