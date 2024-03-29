import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetdataService } from '../../../service/getdata.service';
import { ImagesManagementService } from '../../../service/images-management.service';
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
    private route: ActivatedRoute,
    private getdataService: GetdataService,
    private imagesManagementService: ImagesManagementService
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
  activationMessage = false;
  isAccountActivated = true;
  doesFormHasInvalidData: { email?: any; password?: any } = {};

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');
    if (this.route.snapshot.queryParams['status'])
      this.activationMessage = true;

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
      if (!user.isAccountActivated) {
        this.isAccountActivated = false;
        this.authService.removeLocalStorageToken();
        this.authService.setLoggedIn(false);
      } else {
        this.authService.setUser(user);
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('/');
        this.doesLoginHasError = false;
      }
    });
  }
}
