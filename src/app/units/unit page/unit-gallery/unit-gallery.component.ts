import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-gallery',
  templateUrl: './unit-gallery.component.html',
  styleUrls: ['./unit-gallery.component.css'],
})
export class UnitGalleryComponent implements OnInit {
  constructor() {}

  coverSrc = '../../../assets/Images/UnitImages/1.jpg';

  ngOnInit(): void {}

  updateCoverSrc(event: any) {
    console.log(event.target); //image
    const clickedImageSrc =event.target.src
    event.target.src = this.coverSrc
    this.coverSrc = clickedImageSrc
  }
}
