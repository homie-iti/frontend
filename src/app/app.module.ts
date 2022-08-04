import { ContactUsModule } from './contact-us/contact-us.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '../app/user/user.module';
import { UnitsModule } from '../app/units/units.module';
import { SharedModule } from './shared/shared.module';
import { HomepageModule } from './homepage/homepage.module';
import { CoreModule } from './core/core.module';
import{ HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomepageModule,
    SharedModule,
    UnitsModule,
    UserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AboutUsModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
