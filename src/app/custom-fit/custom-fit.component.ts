import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-fit',
  standalone: true,
  imports: [],
  templateUrl: './custom-fit.component.html',
  styleUrl: './custom-fit.component.scss'
})
export class CustomFitComponent implements OnInit {
  constructor(private route: Router){}
  ngOnInit(): void {
   
  }

  openProducts(product: string) {
    this.route.navigate(['products/' + product])
  }

}
