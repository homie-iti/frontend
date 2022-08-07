import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';
import { Unitreviews } from 'src/app/_models/unitreview';

@Component({
  selector: 'app-unit-review',
  templateUrl: './unit-review.component.html',
  styleUrls: ['./unit-review.component.css'],
})
export class UnitReviewComponent implements OnInit {
  faStar = faStar;
  unitid: any;
  agentId: any;
  rate: any;
  review: any;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitComment: any;
  agentdetails: any;
  comment: Unitreviews = new Unitreviews(
    '',
    '446c9cdde5b59bcfd75bbe44',
    'bf1a9d32ab752f9ccf16bf9b',
    3,
    ''
  );

  addComment() {
    console.log(this.comment.unitId);

    // this.unitser.addComment(``).subscribe((a) => {
    //   this.unitid = a.unitId;
    //   this.agentId = a.agentId;
    //   console.log(this.unitid);
    // });

    // this.unitid = this.comment.unitId;
    // this.agentId = this.comment.agentId;
    // this.rate = this.comment.rate;
    // this.review = this.comment.comment;

    // console.log(this.unitid);
    // console.log(this.agentId);
    // console.log(this.rate);
    // console.log(this.review);
  }

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
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
