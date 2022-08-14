import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  constructor(
    private data: GetdataService,
    private router: Router,
    private authService: AuthService
  ) {}

  myform = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
  });

  doesEmailHasError: boolean = false;

  send() {
    if (this.myform.value.email) console.log(this.myform.value);
    this.data.forgetPassword(this.myform.value).subscribe({
      next: (a) => {
        console.log(a);
        this.router.navigateByUrl('/login/reset-password');
      },
      error: (error) => {
        if (error) {
          console.log(error);
          this.doesEmailHasError = true;
        }
      },
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/home');
  }
}
