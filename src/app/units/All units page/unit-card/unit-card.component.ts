import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import {
  faHeart,
  faDollarSign,
  faUser,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { favoriteUnits } from 'src/app/_models/favoriteunits';
import { AuthService } from 'src/app/service/auth.service';
import { AuthInfo } from 'src/app/_models/auth';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})
export class UnitCardComponent implements OnInit {
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faUser = faUser;
  faPaw = faPaw;
  page: number = 1;
  emp: any;
  favoriteUnit: any;
  favunit: favoriteUnits | undefined;
  isActive: boolean | undefined;
  authInfo!: AuthInfo;

  constructor(
    private router: Router,
    private auth: AuthService,
    private activate: ActivatedRoute,
    private unitSer: GetdataService,
    public transfer: TransferDataService,
    private SpinnerService: NgxSpinnerService
  ) {}

  userId = this.auth.getUser()?._id;

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
    console.log(this.favunit);
    this.userId = this.auth.getUser()?._id;
    this.checkId(item);
    if (this.checkId(item) === true) {
      this.unitSer.deleteFavorite(item, this.userId).subscribe((a) => {
        this.getAllFavourite();
        console.log(a);
      });
      console.log(true);
    } else if (this.checkId(item) === false) {
      this.unitSer.postFavorite(this.favunit, this.userId).subscribe((a) => {
        console.log(a);
        this.getAllFavourite();
      });
      console.log(false);
    }
  }

  getAllFavourite() {
    this.unitSer
      .getAllCityUnits(`/users/${this.userId}/favorites`)
      .subscribe((a) => {
        this.favoriteUnit = a;
        console.log(this.favoriteUnit);
      });
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.unitSer.getAllCityUnits(`/cities/${this.id}`).subscribe(
      (a) => {
        this.units = a.units;
        console.log(this.units);
        this.SpinnerService.hide();
      },
      (error: Error) => {
        if (error) {
          this.router.navigateByUrl('/notfound');
        }
      }
    );

    this.authInfo = this.auth.getAuthInfo();

    this.getAllFavourite();
  }
}
