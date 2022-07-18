import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MainSearchComponentComponent } from './main-search-component/main-search-component.component';
import { CityCardCompnentComponent } from './city-card-compnent/city-card-compnent.component';
import { InfoCenterComponentComponent } from './info-center-component/info-center-component.component';
import { FindHomieComponentComponent } from './find-homie-component/find-homie-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MainSearchComponentComponent,
    CityCardCompnentComponent,
    InfoCenterComponentComponent,
    FindHomieComponentComponent,
    AboutUsComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
