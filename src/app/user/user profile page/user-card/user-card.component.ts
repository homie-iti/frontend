import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit, OnChanges {
  faCheck = faCheck;
  faPlus = faPlus;

  constructor(private user: AuthService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  userInfo: any;
  userId = this.user.getUser()?._id;
  ngOnInit(): void {
    this.userInfo = this.user.getUser();

    console.log(this.userInfo);
    console.log(this.userId);
  }
  OnChanges() {
    this.userInfo = this.user.getUser();
  }
}
