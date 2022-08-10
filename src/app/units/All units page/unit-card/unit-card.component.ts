import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { favoriteUnits } from 'src/app/_models/favoriteunits';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})
export class UnitCardComponent implements OnInit {
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  page: number = 1;
  emp: any;
  favoriteUnit: any;
  favunit: favoriteUnits | undefined;
  isActive: boolean | undefined;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService,
    public transfer: TransferDataService,
    private SpinnerService: NgxSpinnerService
  ) {}

  id: any = this.activate.snapshot.params['id'];

  units: Units[] = [];

  checkId(item: any) {
    for (let i of this.favoriteUnit) {
      for (let index of i.favoriteUnits) {
        if (item === index._id) {
          return true;
        }
      }
    }
    return false;
  }

  onClick(item: any) {
    this.isActive = !this.isActive;
    this.favunit = new favoriteUnits(item);
    this.checkId(item);
    if (this.checkId(item) === true) {
      this.unitser.deleteFavorite(item).subscribe((a) => {
        this.getAllFavourite();
        console.log(a);
      });
      console.log(true);
    } else if (this.checkId(item) === false) {
      this.unitser.postFavorite(this.favunit).subscribe((a) => {
        this.getAllFavourite();
        console.log(a);
      });
      console.log(false);
    }
  }

  getAllFavourite() {
    this.unitser
      .getAllCityUnits(`/users/b6fd2b6c4d37aaddcb4abe2e/favorites`)
      .subscribe((a) => {
        this.favoriteUnit = a;
        console.log(this.favoriteUnit);
      });
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.unitser.getAllCityUnits(`/cities/${this.id}`).subscribe((a) => {
      this.units = a.units;
      console.log(a);
      this.SpinnerService.hide();
    });

    this.getAllFavourite();
  }
}
