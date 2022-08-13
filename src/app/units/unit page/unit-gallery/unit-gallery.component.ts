import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { Unitdetails } from 'src/app/_models/unitdetails';

@Component({
  selector: 'app-unit-gallery',
  templateUrl: './unit-gallery.component.html',
  styleUrls: ['./unit-gallery.component.css'],
})
export class UnitGalleryComponent implements OnInit {
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  coverSrc = '';

  updateCoverSrc(event: any) {
    console.log(event.target); //image
    const clickedImageSrc = event.target.src;
    event.target.src = this.coverSrc;
    this.coverSrc = clickedImageSrc;
  }

  id: any = this.activate.snapshot.params['id'];
  unitDetails: Unitdetails[] = [];
  dailyPrice: number | undefined;

  // unitCover: string | undefined;

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.unitDetails = a.images;
      this.coverSrc =
        a.cover[0] === 'h'
          ? a.cover
          : 'https://homie-iti.herokuapp.com/' +
            a.cover.split('/').slice(1).join('/');
      this.dailyPrice = a.dailyPrice;

      // console.log(this.unitDetails);
      // console.log(this.coverSrc);
    });
  }
}
