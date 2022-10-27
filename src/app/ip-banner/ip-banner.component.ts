import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-banner',
  templateUrl: './ip-banner.component.html',
  styleUrls: ['./ip-banner.component.css']
})
export class IpBannerComponent implements OnInit {
// ipTitle = 'About Us';
@Input() ipTitle: string | undefined;
ipBannerImg = 'assets/img/ip-banner.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
