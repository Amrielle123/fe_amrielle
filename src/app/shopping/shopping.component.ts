import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavitemsComponent } from '../navitems/navitems.component';
import { BannerDesignComponent } from '../banner-design/banner-design.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';
import { Bannerdata } from '../interface/bannerdata';
import { PopularCategoriesComponent } from '../popular-categories/popular-categories.component';
import { CustomFitComponent } from '../custom-fit/custom-fit.component';
import { TrendingCategoriesComponent } from '../trending-categories/trending-categories.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [NavitemsComponent, BannerDesignComponent, NewArrivalsComponent, PopularCategoriesComponent, CustomFitComponent, TrendingCategoriesComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  male: boolean = false;
  female: boolean = false;
  bannerData: Bannerdata =
    {
      h5title: "T-shirts",
      h1title1: "Discover Your Perfect",
      h1title2: "Fit with Amrielle",
      button1: "SHOP FOR MALE",
      button2: "SHOP FOR FEMALE"
    }

  ngOnInit(): void {

    const url = this.activatedRoute.snapshot.url[1].path

    if (url == "male") {
      this.male = true;
    }

  }
}
