import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  ngOnInit(): void {
    this.stella = [];
    this.goldie = [];
    this.both = [];
    this.getImages();
  }

  chosenCat = '1';

  getImages() {
    for (let i = 1; i < 37; i++) {
      this.stella.push({
        image: `/assets/img/stella/stella${i}.jpg`,
        thumbImage: `/assets/img/stella/stella${i}.jpg`,
      })
    }
    for (let i = 1; i < 38; i++) {
      this.goldie.push({
        image: `/assets/img/goldie/goldie${i}.jpg`,
        thumbImage: `/assets/img/goldie/goldie${i}.jpg`,
      })
    }
    for (let i = 1; i < 14; i++) {
      this.both.push({
        image: `/assets/img/beide/both${i}.jpg`,
        thumbImage: `/assets/img/beide/both${i}.jpg`,
      })
    }
  }

  stella: Array<object> = [];
  goldie: Array<object> = [];
  both: Array<object> = [];

}
