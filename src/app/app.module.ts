import { ContactUsModule } from './contact-us/contact-us.module';
import { ContactUsComponent } from './contact-us/contact-us.page';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { UnitscrudModule } from './unitscrud/unitscrud.module';
import { AdminModule } from './admin/admin.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    AdminModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    AboutUsModule,
    ContactUsModule,
    UnitscrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
