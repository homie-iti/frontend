import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { HelpQuestions } from 'src/app/_models/help-questions';

@Component({
  selector: 'app-get-all-help-questions',
  templateUrl: './get-all-help-questions.component.html',
  styleUrls: ['./get-all-help-questions.component.css'],
})
export class GetAllHelpQuestionsComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  deleteQuestion(questionId: string, x: number) {
    this.adminService
      .deleteHelpQuestion('helpQuestion/', questionId)
      .subscribe((res: any) => {
        console.log(res);
        this.helpQuestions.splice(x, 1);
      });
  }
  helpQuestions: HelpQuestions[] = [];
  ngOnInit(): void {
    this.adminService.getAll('help-questions').subscribe((questionData) => {
      console.log(questionData);
      this.helpQuestions = questionData.results;
    });
  }
}
