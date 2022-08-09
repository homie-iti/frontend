import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-user-wish-list',
  templateUrl: './user-wish-list.component.html',
  styleUrls: ['./user-wish-list.component.css'],
})
export class UserWishListComponent implements OnInit {
  faHeart = faHeart;

  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  id: any = this.activate.snapshot.params['id'];
  favoriteUnit: any;

  ngOnInit(): void {
    this.unitser
      .getAllCityUnits(`/users/b6fd2b6c4d37aaddcb4abe2e/favorites`)
      .subscribe((a) => {
        this.favoriteUnit = a;
        console.log(this.favoriteUnit);
      });
  }
}
