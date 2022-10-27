import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {
categoryCnt = [
  {
    categorylImg: 'assets/img/category-img-1.jpg',
    categorylTitle: 'Air Purifying'
  },
  {
    categorylImg: 'assets/img/category-img-2.jpg',
    categorylTitle: 'Ceramic Pots'
  },
  {
    categorylImg: 'assets/img/category-img-3.jpg',
    categorylTitle: 'Herb Seeds'
  },
  {
    categorylImg: 'assets/img/category-img-4.jpg',
    categorylTitle: 'Indoor Plants'
  },
  {
    categorylImg: 'assets/img/category-img-5.jpg',
    categorylTitle: 'Low Maintenance'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
