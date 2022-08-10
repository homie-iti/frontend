import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  rate: [] = [];
  sum: any;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  id: any = this.activate.snapshot.params['id'];

  getAvr() {
    length = this.rate.length;

    this.sum = this.rate.forEach((num) => {
      this.rate + num;
    });

    let average = this.sum / length;

    console.log(average);
  }

  getrating() {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.rate = a.reviews.ratings;
      this.getrating();
      console.log(this.rate);
    });
  }

  ngOnInit(): void {
    this.getrating();
  }
}
