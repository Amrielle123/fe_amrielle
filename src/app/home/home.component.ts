import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavitemsComponent } from '../navitems/navitems.component';
import { FooterElementsComponent } from '../footer-elements/footer-elements.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavitemsComponent, FooterElementsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router
  ){

  }
  ngOnInit(): void {
   
  }

  shopFor(gender: string){
    this.route.navigate([`/home/${gender}`])
  }
}
