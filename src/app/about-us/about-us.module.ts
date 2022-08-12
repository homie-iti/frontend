import { FormsModule } from '@angular/forms';
import { HomepageModule } from './../homepage/homepage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCoverComponent } from './about-cover/about-cover.component';
import { AboutUsComponent } from './about-us.page'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ValuesComponent } from './values/values.component';



@NgModule({
  declarations: [
    AboutCoverComponent,
    AboutUsComponent,
    ValuesComponent
  ],
  imports: [
    CommonModule,RouterModule,AppRoutingModule,HomepageModule,FormsModule
  ], exports: [
    AboutCoverComponent
  ]
})
export class AboutUsModule { }
