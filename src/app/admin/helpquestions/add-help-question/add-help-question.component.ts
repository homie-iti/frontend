import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { HelpQuestions } from 'src/app/_models/help-questions';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-add-help-question',
  templateUrl: './add-help-question.component.html',
  styleUrls: ['./add-help-question.component.css'],
})
export class AddHelpQuestionComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  userName: string = '';
  userId: any;

  getUserId(event: any) {
    console.log(event);
    this.userName = event.target.value;
    console.log(this.userName);
    for (let i = 0; i < this.users.length; i++) {
      if (this.userName == this.users[i].fullName) {
        this.userId = this.users[i]._id;
      }
    }
    console.log(this.userId);
  }

  questionForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),

    question: new FormControl('', [Validators.required, Validators.email]),
  });

  get questionValues() {
    return this.questionForm.controls;
  }

  
  users: User[] = [];
  addQuestion(question: any) {
    this.adminService.addHelpQuestion('help-questions', question).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl('admin/all-helpQuestions');
      },
    });
  }

  ngOnInit(): void {
    this.adminService.getAll('users').subscribe((res) => {
      this.users = res.results;
    });
  }
}
