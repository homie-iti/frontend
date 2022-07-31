import { Component, OnInit } from '@angular/core';

import {faHeart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-user-unit-listing',
  templateUrl: './user-unit-listing.component.html',
  styleUrls: ['./user-unit-listing.component.css']
})
export class UserUnitListingComponent implements OnInit {
  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
