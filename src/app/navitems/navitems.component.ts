import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navitems',
  standalone: true,
  imports: [],
  templateUrl: './navitems.component.html',
  styleUrl: './navitems.component.scss'
})
export class NavitemsComponent implements OnInit {
constructor(
  private route: Router
){}
  ngOnInit(): void {
   
  }

  openCart(){
    this.route.navigate(['cart-items'])
  }

  shopFor(gender: string){
    if(gender !== 'crowdsourced' && gender !== 'stylefile'){
      this.route.navigate([`/home/${gender}`]);
    }
    else{
      return;
    }
    
  }
}
