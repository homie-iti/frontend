import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitFilterComponent } from './unit-filter/unit-filter.component';
import { UnitSortingComponent } from './unit-sorting/unit-sorting.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { UnitPaginationComponent } from './unit-pagination/unit-pagination.component';



@NgModule({
  declarations: [
    UnitFilterComponent,
    UnitSortingComponent,
    UnitCardComponent,
    UnitPaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UnitsModule { }
