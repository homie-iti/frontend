import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { GetdataService } from '../../../service/getdata.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { faChainSlash } from '@fortawesome/free-solid-svg-icons';
// import { bootstrap } from 'bootstrap/dist/js/bootstrap.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private getdataService: GetdataService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`
      ),
    ]),
  });

  // {
  //   email: '',
  //   password: '',
  // };

  doesLoginHasError = false;
  doesFormHasInvalidData: { email?: any; password?: any } = {};

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');

    // this.loginForm = new FormGroup({
    //   email: new FormControl(null),
    //   password: new FormControl(null),
    // });
  }

  checkFormValidation() {
    if (this.loginForm.get('email')?.errors) {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        email: { ...this.loginForm.get('email')?.errors },
      };
    } else {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        email: null,
      };
    }

    if (this.loginForm.get('password')?.errors) {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        password: { ...this.loginForm.get('password')?.errors },
      };
    } else {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        password: null,
      };
    }

    console.log(this.loginForm.get('email')?.errors);
    console.log(this.loginForm.get('password')?.errors);
    console.log(this.doesFormHasInvalidData);
  }

  login() {
    this.authService
      .login(
        this.loginForm.get('email')?.value as string,
        this.loginForm.get('password')?.value as string
      )
      .subscribe({
        next: (loginInfo) => {
          this.authService.setLoggedIn(true);
          this.authService.setToken(loginInfo.token as string);
          this.retrieveLoggedUserInfo(this.authService.getDecodedToken().id);
        },
        error: (error) => {
          console.log(error);
          this.doesLoginHasError = true;
        },
      });
  }

  retrieveLoggedUserInfo(id: string) {
    this.getdataService.getUserDetails(id).subscribe((user) => {
      console.log(user);
      this.authService.setUser(user);
      this.router.navigateByUrl('/home');
      this.doesLoginHasError = false;
    });
  }
}
