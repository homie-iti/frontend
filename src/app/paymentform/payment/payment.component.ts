import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private auth: AuthService) {}

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

  userBalance = this.auth.getUser().balance;
  addAmount(amount: any) {
    console.log(amount.value);
  }

  ngOnInit(): void {
    console.log(this.userBalance);
  }
}
