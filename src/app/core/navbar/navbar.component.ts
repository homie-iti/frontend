import { Component, OnInit } from '@angular/core';
import {faHouseLaptop} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  faHouseLaptop = faHouseLaptop;
  constructor() { }

  ngOnInit(): void {
  }

}
