import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Unitreviews } from 'src/app/_models/unitreview';

@Component({
  selector: 'app-get-all-reviews',
  templateUrl: './get-all-reviews.component.html',
  styleUrls: ['./get-all-reviews.component.css'],
})
export class GetAllReviewsComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  reviews: any[] = [];

  deleteReview(unitId: string, reviewId: string, x: number) {
    this.adminService.deleteReview(unitId, reviewId).subscribe((res) => {
      console.log(res);
      this.reviews.splice(x, 1);
    });
  }
  ngOnInit(): void {
    this.adminService.getAll('reviews').subscribe((reviewsData) => {
      console.log(reviewsData);
      this.reviews = reviewsData;
    });
  }
}
