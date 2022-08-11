import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.css'],
})
export class UserComponent implements OnInit {
  constructor(private aut: AuthService) {}

  ngOnInit(): void {
    console.log(this.aut.getUser()._id);
  }
}
