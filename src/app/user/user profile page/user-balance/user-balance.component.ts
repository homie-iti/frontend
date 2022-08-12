import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css'],
})
export class UserBalanceComponent implements OnInit {
  constructor(private auth: AuthService) {}
  userBalance = this.auth.getUser()?.balance;

  ngOnInit(): void {}
}
