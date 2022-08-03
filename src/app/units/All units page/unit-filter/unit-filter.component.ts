import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';
import { TransferDataService } from 'src/app/service/transfer-data.service';
// import { Dayjs } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-unit-filter',
  templateUrl: './unit-filter.component.html',
  styleUrls: ['./unit-filter.component.css'],
})
export class UnitFilterComponent implements OnInit {
  faSearchengin = faSearchengin;
  faBell = faBell;
  maxPrice: number = 0;
  minPrice: number = 0;

  id: any = this.ac.snapshot.params['id'];
  unitArray = [];
  unit: any;

  checkGender(gender: any) {
    this.transfer.genderToTransfer = gender;

    if (this.transfer.genderToTransfer) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?gender=${this.transfer.genderToTransfer}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }
  }

  checkPetsAllowed(pet: any) {
    this.transfer.petsToTransfer = pet;
    if (this.transfer.petsToTransfer) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?petAllowed=${this.transfer.petsToTransfer}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }
  }

  checkEstateType(estate: any) {
    this.transfer.estateType = estate;
    if (this.transfer.estateType) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?estateType=${this.transfer.estateType}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }
  }

  onChange(event: any) {
    if (event.target.checked) {
      console.log(event.target.checked);
      this.transfer.estateType = event.target.value;
      if (this.transfer.estateType) {
        this.unit = this.unitser
          .filter(
            `/Homie/${this.id}/filter?estateType=${this.transfer.estateType}`
          )
          .subscribe((a) => {
            this.transfer.filteredUnits = a.units;
            console.log(this.transfer.filteredUnits);
          });
      }
    } else {
    }
  }

  checkMinPrice(price: any) {
    this.minPrice = price;
    console.log(this.minPrice);
    this.unitser
      .filter(`/Homie/${this.id}/filter?minPrice=${this.minPrice}`)
      .subscribe((a) => {
        this.transfer.filteredUnits = a.units;
        console.log(this.transfer.filteredUnits);
      });
  }

  checkMaxPrice(price: any) {
    this.maxPrice = price;
    console.log(this.maxPrice);
    this.unitser
      .filter(`/Homie/${this.id}/filter?maxPrice=${this.maxPrice}`)
      .subscribe((a) => {
        this.transfer.filteredUnits = a.units;
        console.log(this.transfer.filteredUnits);
      });
  }

  selected!: { startDate: any; endDate: any };
  constructor(
    public ac: ActivatedRoute,
    public transfer: TransferDataService,
    public unitser: GetdataService
  ) {}

  ngOnInit(): void {}
}
