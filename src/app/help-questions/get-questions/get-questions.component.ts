import { GetdataService } from 'src/app/service/getdata.service';
import { Component, OnInit } from '@angular/core';
import { HelpQuestions } from 'src/app/_models/help-questions';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
  questions: HelpQuestions[]  = [];

  constructor(public helpService: GetdataService) { }

  ngOnInit(): void {
    this.helpService.gethelpQuestions(`/help-questions`).subscribe((a) => {
      this.questions = a.results;
        // if ()
      // console.log(a.results.userId);
      
      // console.log(a.questions[0].allowedGender);
      console.log(this.questions);
    }
    )
  }
}