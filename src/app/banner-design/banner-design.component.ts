import { Component, Input, OnInit } from '@angular/core';
import { Bannerdata } from '../interface/bannerdata';

@Component({
  selector: 'app-banner-design',
  standalone: true,
  imports: [],
  templateUrl: './banner-design.component.html',
  styleUrl: './banner-design.component.scss'
})
export class BannerDesignComponent implements OnInit {
  @Input() data: Bannerdata | undefined;

  constructor(){}
  
  ngOnInit(): void {
    console.log(this.data)
  }


}
