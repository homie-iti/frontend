import { Component, OnInit } from '@angular/core';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../service/auth.service';
import { AuthInfo } from '../../_models/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faHouseLaptop = faHouseLaptop;

  authInfo!: AuthInfo;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authInfo = this.authService.getAuthInfo();
  }
}
