import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faDollarSign,
  faHeart,
  faPaw,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';
import { favoriteUnits } from 'src/app/_models/favoriteunits';

@Component({
  selector: 'app-user-wish-list',
  templateUrl: './user-wish-list.component.html',
  styleUrls: ['./user-wish-list.component.css'],
})
export class UserWishListComponent implements OnInit, OnChanges {
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faUser = faUser;
  faPaw = faPaw;

  favunit: favoriteUnits | undefined;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  id: any = this.activate.snapshot.params['id'];
  favoriteUnit: any;

  onClick(item: any) {
    console.log(item);
    this.unitser.deleteFavorite(item).subscribe((a) => {
      this.getAllFavourite();
      console.log(a);
    });
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
    this.getAllFavourite();
  }

  ngOnChanges() {
    this.getAllFavourite();
  }
}
