import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-big',
  templateUrl: './category-big.component.html',
  styleUrls: ['./category-big.component.css']
})
export class CategoryBigComponent implements OnInit {
  categoryBigList = [
    {
      img: 'assets/img/category-big-1.jpg',
      btnText: 'Pots & Accessories'
    },
    {
      img: 'assets/img/category-big-2.jpg',
      btnText: 'Gift Green'
    },
    {
      img: 'assets/img/category-big-3.jpg',
      btnText: 'Home Grown'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
