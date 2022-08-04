import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactUsComponent } from './contact-us.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactUsComponent,ContactComponent
  ]
})
export class ContactUsModule { }
