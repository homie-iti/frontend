import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = {
    email: '',
    password: '',
  };

  doesLoginHasError = false;

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');
  }

  login() {
    this.authService
      .login(this.loginForm.email, this.loginForm.password)
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
