import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {
  @Input() PrdutSliderName : string | undefined;
  @Input() ProductSliderNameSpan : string | undefined;
  p_item_list = [
    {
      p_name: 'Pine Tree',
      p_img: 'assets/img/pc-1.jpg',
      p_price: '100.00',
      p_label: 'hot'
    },
    {
      p_name: 'Grey Star Calathea',
      p_img: 'assets/img/pc-2.jpg',
      p_price: '90.00',
      p_label: '-40%'
    },
    {
      p_name: 'Devil’s Ivy',
      p_img: 'assets/img/pc-3.jpg',
      p_price: '80.00',
      p_label: 'hot'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}
