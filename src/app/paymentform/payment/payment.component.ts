import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }


  myform=new FormGroup({
    cardNumber:new FormControl(null,Validators.required),
    nameonCard:new FormControl(null,Validators.required),
    expireDate:new FormControl(null,Validators.required),
    securtiyCode:new FormControl(null,Validators.required)

  })

  ngOnInit(): void {
  }

}
