import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
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
  agentData: any;

  agentdetails: any;

  ngOnInit(): void {
    this.unitser
      .getUnitDetails(`/units/dc2eeacdf1dd3f9551fcbb3a`)
      .subscribe((a) => {
        this.unitComment = a.reviews.reviews;
        for (let item in this.unitComment) {
          if (typeof this.unitComment[item] === 'object') {
            for (const nestedKey in this.unitComment[item]) {
              if (typeof this.unitComment[item][nestedKey] === 'object') {
                for (const nestedKey2 in this.unitComment[item][nestedKey]) {
                  this.agentdetails =
                    this.unitComment[item][nestedKey][nestedKey2];
                }
              }
            }
          }
          console.log(this.agentdetails.fullName);
          console.log(this.agentdetails.image);
          // console.log(this.unitComment);
        }
      });
  }
}
