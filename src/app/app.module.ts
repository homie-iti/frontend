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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
