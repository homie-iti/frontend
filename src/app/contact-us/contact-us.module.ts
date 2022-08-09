import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactUsComponent } from './contact-us.page';
import { OnlineContactComponent } from './online-contact/online-contact.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactUsComponent,
    OnlineContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactUsComponent,ContactComponent
  ]
})
export class ContactUsModule { }
