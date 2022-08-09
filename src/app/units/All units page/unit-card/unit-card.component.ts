import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})

export class UnitCardComponent implements OnInit {
  faHeart = faHeart;
  page: number = 1;
  emp: any;
  favoriteUnit: any;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService,
    public transfer: TransferDataService,
    private SpinnerService: NgxSpinnerService
  ) {}

  id: any = this.activate.snapshot.params['id'];

  units: Units[] = [];

  onClick(item: any) {
    console.log(item);
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.unitser.getAllCityUnits(`/cities/${this.id}`).subscribe(
      (a) => {
        this.units = a.units;
        console.log(a);

        console.log(a.units[0].allowedGender);
        this.SpinnerService.hide();
      },
      (error) => {
        console.log(error);
      }
    );

    this.unitser
      .getAllCityUnits(`/users/b6fd2b6c4d37aaddcb4abe2e/favorites`)
      .subscribe((a) => {
        this.favoriteUnit = a;
        console.log(this.favoriteUnit);
      });
  }
}
