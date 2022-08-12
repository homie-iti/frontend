import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule
  ],exports:[
    PaymentComponent
  ]
})
export class PaymentformModule { }
