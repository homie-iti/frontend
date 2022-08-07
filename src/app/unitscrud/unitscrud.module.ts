import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddunitComponent } from './addunit/addunit.component';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddunitComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule,
     

    
  ], exports:[
    AddunitComponent
  ]
})
export class UnitscrudModule { }
