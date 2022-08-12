import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private data:GetdataService) { }

  myform=new FormGroup({
    email:new FormControl(null, {validators:[
      Validators.required,
      Validators.email
    ]}
    )
  })


  send(){
      console.log(this.myform.value)
      this.data.forgetPassword(this.myform.value).subscribe((a) => {
        if(a)
        console.log('upadated', a);
      });
  }

  ngOnInit(): void {
  }

}
