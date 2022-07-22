import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitFilterComponent } from './unit-filter/unit-filter.component';
import { UnitSortingComponent } from './unit-sorting/unit-sorting.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { UnitPaginationComponent } from './unit-pagination/unit-pagination.component';
import { UnitGalleryComponent } from './unit-gallery/unit-gallery.component';
import { UnitDescriptionComponent } from './unit-description/unit-description.component';
import { UnitInfoComponent } from './unit-info/unit-info.component';
import { UnitListingComponent } from './unit-listing/unit-listing.component';
import { UnitReviewComponent } from './unit-review/unit-review.component';
import { UnitsComponent } from './units.page';



@NgModule({
  declarations: [
    UnitFilterComponent,
    UnitSortingComponent,
    UnitCardComponent,
    UnitPaginationComponent,
    UnitGalleryComponent,
    UnitDescriptionComponent,
    UnitInfoComponent,
    UnitListingComponent,
    UnitReviewComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnitFilterComponent,
    UnitSortingComponent,
    UnitCardComponent,
    UnitPaginationComponent,
    UnitGalleryComponent,
    UnitDescriptionComponent,
    UnitInfoComponent,
    UnitListingComponent,
    UnitReviewComponent
  ]
})
export class UnitsModule { }
