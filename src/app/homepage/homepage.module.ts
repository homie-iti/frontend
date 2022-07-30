import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutUsComponent } from './about-us/about-us.component';
import { CityCardsComponent } from './city-cards/city-cards.component';
import { HomieCoverComponent } from './homie-cover/homie-cover.component';
import { HomieSearchComponent } from './homie-search/homie-search.component';
import { HomieInfoComponent } from './homie-info/homie-info.component';
import { HomepageComponent } from './homepage.page';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent,
    CityCardsComponent,
    HomieCoverComponent,
    HomieSearchComponent,
    HomieInfoComponent,
    HomepageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselModule ,
    RouterModule
  ],
  exports: [
    AboutUsComponent,
    CityCardsComponent,
    HomieCoverComponent,
    HomieSearchComponent,
    HomieInfoComponent
  ]
})
export class HomepageModule { }
