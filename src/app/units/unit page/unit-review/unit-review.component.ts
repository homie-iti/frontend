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
  unitrev: any;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitComment: any;
  commentdetails: any;

  comment: Unitreviews = new Unitreviews(
    'b6fd2b6c4d37aaddcb4abe2e',
    this.id,
    3,
    ''
  );

  addComment(review: any) {
    console.log(review.value);
    this.comment.comment = review.value;
    this.unitrev = this.comment.comment;
    this.unitid = this.id;

    // this.agentId = this.comment.agentId;
    // this.rate = this.comment.rating;

    this.unitser.addComment(this.comment).subscribe((a) => {
      this.getAllComments();
      console.log(a);
    });
  }

  deleteComment(item: any) {
    this.unitser
      .deleteComment(`/units/${this.id}/reviews/${item}`)
      .subscribe((a) => {
        this.getAllComments();
        console.log(a);
      });
  }

  getAllComments() {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.unitComment = a.reviews.reviews;
      console.log(this.unitComment);
    });
  }

  ngOnInit(): void {
    this.getAllComments();
  }
}
