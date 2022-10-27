import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-width-carousel',
  templateUrl: './full-width-carousel.component.html',
  styleUrls: ['./full-width-carousel.component.css']
})
export class FullWidthCarouselComponent implements OnInit {
  carouselCnt =[
    {
      carouselImg: 'assets/img/c-img-1.jpg',
      carouselTitle: 'Gift Green This',
      carouselTitleItalic: 'Holiday',
      carouselSubTitle: 'SALE UP TO 30% OFF',
      carouselBtnText: 'Explore'
    },
    {
      carouselImg: 'assets/img/c-img-1.jpg',
      carouselTitle: 'Gift Green This',
      carouselTitleItalic: 'Holiday',
      carouselSubTitle: 'SALE UP TO 30% OFF',
      carouselBtnText: 'Explore'
    },
    {
      carouselImg: 'assets/img/c-img-1.jpg',
      carouselTitle: 'Gift Green This',
      carouselTitleItalic: 'Holiday',
      carouselSubTitle: 'SALE UP TO 30% OFF',
      carouselBtnText: 'Explore'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
