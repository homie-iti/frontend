import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  constructor(private data:GetdataService) { }

  myform=new FormGroup({
    password:new FormControl(null,{validators:[
      Validators.required,
      Validators.pattern("")
    ]}),

    resetLink:new FormControl(null,{validators:[
      Validators.required,
    ]})
  })

  send(){
    console.log(this.myform.value)
    this.data.resetPassword(this.myform.value).subscribe((a) => {
      if(a)
      console.log('upadated', a);
    });
  }

  ngOnInit(): void {
  }

}
