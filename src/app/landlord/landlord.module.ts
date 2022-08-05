import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddcityComponent } from './addcity/addcity.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddcityComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,FormControl 
  ],exports:[
    AddcityComponent
  ]
})
export class LandlordModule { }
