import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitFilterComponent } from './All units page/unit-filter/unit-filter.component';
import { UnitSortingComponent } from './All units page/unit-sorting/unit-sorting.component';
import { UnitCardComponent } from './All units page/unit-card/unit-card.component';

// import { UnitPaginationComponent } from './All units page/unit-pagination/unit-pagination.component';

import { UnitGalleryComponent } from './unit page/unit-gallery/unit-gallery.component';
import { UnitDescriptionComponent } from './unit page/unit-description/unit-description.component';
import { UnitInfoComponent } from './unit page/unit-info/unit-info.component';
import { UnitListingComponent } from './unit-listing/unit-listing.component';
import { UnitReviewComponent } from './unit page/unit-review/unit-review.component';
import { UnitsComponent } from './units.page';
import { LandlorddetailsComponent } from './unit page/landlorddetails/landlorddetails.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UnitPageComponent } from './unit page/unit.page/unit.page';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AppRoutingModule } from '../app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaymentInfoComponent } from './unit page/payment-info/payment-info.component';
import { RatingComponent } from './unit page/rating/rating.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    UnitFilterComponent,
    UnitSortingComponent,
    UnitCardComponent,

    // UnitPaginationComponent,

    UnitGalleryComponent,
    UnitDescriptionComponent,
    UnitInfoComponent,
    UnitListingComponent,
    UnitReviewComponent,
    UnitsComponent,
    UnitPageComponent,
    LandlorddetailsComponent,
    PaymentInfoComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  exports: [
    UnitFilterComponent,
    UnitSortingComponent,
    UnitCardComponent,

    // UnitPaginationComponent,

    UnitGalleryComponent,
    UnitDescriptionComponent,
    UnitInfoComponent,
    UnitListingComponent,
    UnitReviewComponent,
    LandlorddetailsComponent,
    RatingComponent,
  ],
})
export class UnitsModule {}
