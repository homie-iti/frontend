import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.css'],
})
export class UserComponent implements OnInit {

  constructor(private user:AuthService) { }
     userInfo:any

  ngOnInit(): void {
    this.userInfo=this.user.getUser()
    console.log(this.userInfo)
  }
}
