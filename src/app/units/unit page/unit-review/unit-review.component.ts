import { Component, OnInit } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-unit-review',
  templateUrl: './unit-review.component.html',
  styleUrls: ['./unit-review.component.css']
})
export class UnitReviewComponent implements OnInit {

  faStar=faStar
  constructor() { }

  ngOnInit(): void {
  }

}
