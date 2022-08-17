import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';
import { AuthInfo } from 'src/app/_models/auth';
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
  unitrev: any;
  authInfo!: AuthInfo;

  constructor(
    private auth: AuthService,
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  userId = this.auth.getUser()?._id;

  id: any = this.activate.snapshot.params['id'];
  unitComment: any;
  commentdetails: any;

  comment: Unitreviews = new Unitreviews(this.userId, this.id, 1, '');

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
    console.log(this.userId);
    this.getAllComments();
    this.authInfo = this.auth.getAuthInfo();
  }
}
