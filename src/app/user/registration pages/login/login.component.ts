import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { faChainSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"'
      ),
    ]),
  });

  // {
  //   email: '',
  //   password: '',
  // };

  doesLoginHasError = false;

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');

    // this.loginForm = new FormGroup({
    //   email: new FormControl(null),
    //   password: new FormControl(null),
    // });
  }

  login() {
    console.log(
      this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string
    );
    this.authService
      .login(
        this.loginForm.get('email')?.value as string,
        this.loginForm.get('password')?.value as string
      )
      .subscribe({
        next: (loginInfo) => {
          this.authService.setLoggedIn(true);
          this.authService.setToken(loginInfo.token as string);
          this.router.navigateByUrl('/home');
          this.doesLoginHasError = false;
        },
        error: (error) => {
          console.log(error);
          this.doesLoginHasError = true;
        },
      });
  }
}
