import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NotfoundComponent
  ]
})
export class NotfoundModule { }
