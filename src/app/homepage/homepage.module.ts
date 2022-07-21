import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CityCardsComponent } from './city-cards/city-cards.component';
import { HomieCoverComponent } from './homie-cover/homie-cover.component';
import { HomieSearchComponent } from './homie-search/homie-search.component';
import { HomieInfoComponent } from './homie-info/homie-info.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    CityCardsComponent,
    HomieCoverComponent,
    HomieSearchComponent,
    HomieInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
