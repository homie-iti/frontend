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
    months:new FormControl(null,Validators.required),
    years:new FormControl(null,Validators.required),
    cvv:new FormControl(null, { validators:[
      Validators.required, 
      Validators.maxLength(3)
    ]}),
    amount:new FormControl(null,Validators.required),


  })

  ngOnInit(): void {
  }

}
