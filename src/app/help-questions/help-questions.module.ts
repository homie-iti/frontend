import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpQuestionsComponent } from './help-questions.page';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AddHelpQuestionComponent } from './add-help-question/add-help-question.component';



@NgModule({
  declarations: [
    HelpQuestionsComponent,
    GetQuestionsComponent,
    AddHelpQuestionComponent
  ],
  imports: [
    CommonModule,RouterModule,AppRoutingModule,FormsModule
  ],
  exports: [
    HelpQuestionsComponent,
    GetQuestionsComponent,
    AddHelpQuestionComponent
  ]
})
export class HelpQuestionsModule { }
