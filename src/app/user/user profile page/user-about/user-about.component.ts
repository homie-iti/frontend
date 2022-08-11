import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {

  constructor( private user:AuthService) { }
   userInfo:any
  ngOnInit(): void {
    this.userInfo=this.user.getUser()

  }

}
