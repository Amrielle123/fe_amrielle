import { Component, OnInit } from '@angular/core';
import { NavitemsComponent } from '../navitems/navitems.component';

@Component({
  selector: 'app-stylefile',
  standalone: true,
  imports: [NavitemsComponent],
  templateUrl: './stylefile.component.html',
  styleUrl: './stylefile.component.scss'
})
export class StylefileComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

}
