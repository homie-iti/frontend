import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  faStar = faStar;

  rate: [] = [];
  sum: any;
  result = 0;
  average: any;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  id: any = this.activate.snapshot.params['id'];

  getAvr() {
    length = this.rate.length;
    this.sum = this.rate.forEach((i) => {
      this.result += i;
    });
    console.log(this.result);
    this.average = this.result / length;
    console.log(this.average);
  }

  getrating() {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.rate = a.reviews.ratings;
      this.getAvr();
      console.log(this.average);
    });
  }

  ngOnInit(): void {
    this.getrating();
  }
}
