import { Component, OnInit } from '@angular/core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import {faBell} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-unit-filter',
  templateUrl: './unit-filter.component.html',
  styleUrls: ['./unit-filter.component.css']
})
export class UnitFilterComponent implements OnInit {

  faSearchengin=faSearchengin;
  faBell=faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
