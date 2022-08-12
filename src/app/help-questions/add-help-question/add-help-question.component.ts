import { GetdataService } from 'src/app/service/getdata.service';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-help-question',
  templateUrl: './add-help-question.component.html',
  styleUrls: ['./add-help-question.component.css']
})
export class AddHelpQuestionComponent implements OnInit {
  userID: any;
  
  constructor(private authSer:AuthService, private addSer:GetdataService) { }
  helpForm = new FormGroup({
    userId: new FormControl(null, Validators.required),
    question: new FormControl(null, Validators.required),
   
  })

  save() {
    
    this.helpForm.value.userId = this.userID;
    console.log(this.helpForm.value);
    this.addSer.addQuestion(this.helpForm.value).subscribe(a => {
       console.log(a);
       
    })
  }

  ngOnInit(): void {
    this.userID = this.authSer.getUser()._id;
    console.log(this.userID);
    
  }

}
