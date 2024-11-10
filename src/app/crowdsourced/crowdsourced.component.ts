import { Component, OnInit } from '@angular/core';
import { NavitemsComponent } from '../navitems/navitems.component';

@Component({
  selector: 'app-crowdsourced',
  standalone: true,
  imports: [NavitemsComponent],
  templateUrl: './crowdsourced.component.html',
  styleUrl: './crowdsourced.component.scss'
})
export class CrowdsourcedComponent implements OnInit {
  ngOnInit(): void {

  }

}
