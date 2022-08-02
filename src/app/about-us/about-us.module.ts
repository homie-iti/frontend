import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCoverComponent } from './about-cover/about-cover.component';
import { AboutUsComponent } from './about-us.page'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AboutCoverComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,RouterModule,AppRoutingModule
  ], exports: [
    AboutCoverComponent
  ]
})
export class AboutUsModule { }
