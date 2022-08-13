import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  constructor(private data:GetdataService, public route:Router) { }

  myform=new FormGroup({
    newPassword:new FormControl(null,{validators:[
      Validators.required,
      Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"),
      Validators.minLength(8)
    ]}),

    resetLink:new FormControl(null,{validators:[
      Validators.required,
    ]})
  })
  doesDataHasError:boolean=false
  send(){
    console.log(this.myform.value)
    this.data.resetPassword(this.myform.value).subscribe({
      next: (a) => {
        console.log(a)
        this.route.navigateByUrl('/login');

      },
      error: (error) => {
       if(error){
        console.log(error)
        this.doesDataHasError=true
       } 
       
        
      },
    });
  }

  ngOnInit(): void {
  }

}
