import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-unit-review',
  templateUrl: './unit-review.component.html',
  styleUrls: ['./unit-review.component.css'],
})
export class UnitReviewComponent implements OnInit {
  faStar = faStar;
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitComment: any;

  ngOnInit(): void {
    this.unitser
      .getUnitDetails(`/units/dc2eeacdf1dd3f9551fcbb3a`)
      .subscribe((a) => {
        this.unitComment = a.reviews.reviews;
        console.log(this.unitComment);
      });
  }
}
