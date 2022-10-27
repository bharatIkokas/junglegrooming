import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FullWidthCarouselComponent } from './full-width-carousel/full-width-carousel.component';
import { HeaderComponent } from './header/header.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MidBannerComponent } from './mid-banner/mid-banner.component';
import { CategoryBigComponent } from './category-big/category-big.component';
import { ServiceBannerComponent } from './service-banner/service-banner.component';
import { FooterComponent } from './footer/footer.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { IpBannerComponent } from './ip-banner/ip-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullWidthCarouselComponent,
    HeaderComponent,
    CategorySectionComponent,
    ProductSliderComponent,
    MidBannerComponent,
    CategoryBigComponent,
    ServiceBannerComponent,
    FooterComponent,
    OurProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
    CommingSoonComponent,
    IpBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
