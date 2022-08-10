import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddunitComponent } from './addunit/addunit.component';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditunitComponent } from './editunit/editunit.component';



@NgModule({
  declarations: [
    AddunitComponent,
    EditunitComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule,
     

    
  ], exports:[
    AddunitComponent,
    EditunitComponent
  ]
})
export class UnitscrudModule { }
