import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpQuestionsComponent } from './help-questions.page';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HelpQuestionsComponent,
    GetQuestionsComponent
  ],
  imports: [
    CommonModule,RouterModule,AppRoutingModule,FormsModule
  ],
  exports: [
    HelpQuestionsComponent,
    GetQuestionsComponent
  ]
})
export class HelpQuestionsModule { }
