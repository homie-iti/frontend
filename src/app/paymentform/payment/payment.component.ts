import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private unitser: GetdataService,
    private router: Router
  ) {}

  myform = new FormGroup({
    cardNumber: new FormControl(null, Validators.required),
    nameonCard: new FormControl(null, Validators.required),
    months: new FormControl(null, Validators.required),
    years: new FormControl(null, Validators.required),
    cvv: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(3)],
    }),
    amount: new FormControl(null, Validators.required),
  });

  user = this.auth.getUser();
  userId = this.auth.getUser()?._id;
  userBalance = this.auth.getUser()?.balance;
  addAmount() {
    console.log(this.myform.controls['amount'].value);

    this.unitser
      .addAmount(
        this.userId,
        this.userBalance + this.myform.controls['amount'].value
      )
      .subscribe(
        (a) => {
          console.log(this.userId);
          console.log(a);
          this.auth.setUser({
            ...this.user,
            balance: this.userBalance + this.myform.controls['amount'].value,
          });
          this.router.navigateByUrl('/balance');
        },
        (error) => {
          if (error) {
            this.router.navigateByUrl('/notfound');
          }
        }
      );
  }

  ngOnInit(): void {}
}
