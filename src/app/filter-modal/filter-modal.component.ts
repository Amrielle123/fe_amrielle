import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule ],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss'
})
export class FilterModalComponent implements OnInit {

  @Output() filtersApplied = new EventEmitter<any>();

  // Filter properties
  selectedprice = 1000;
  selectedSizes: string[] = [];
  selectedColors: string[] = [];



  topWear = ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Jackets', 'Blazers', 'Coats'];
  bottomWear = ['Jeans', 'Trousers', 'Shorts'];
  moreCasuals = ['Jumpsuits', 'Rompers'];
  sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
  colors = [
    { name: 'Navy Blue', hex: '#1D3557', count: 12 },
    { name: 'Olive Green', hex: '#6B8E23', count: 12 },
    { name: 'Burgundy', hex: '#800020', count: 12 },
    { name: 'Mustard Yellow', hex: '#FFD700', count: 12 },
    { name: 'Charcoal Grey', hex: '#36454F', count: 12 },
    { name: 'Soft Pink', hex: '#FFB6C1', count: 12 },
    { name: 'Teal', hex: '#008080', count: 12 },
    { name: 'Beige', hex: '#F5F5DC', count: 12 },
    { name: 'Coral', hex: '#FF7F50', count: 12 },
    { name: 'Orange', hex: '#FFA500', count: 12 }
  ];
  price = 1000;

  ngOnInit(): void {

  }
  constructor(public activeModal: NgbActiveModal) { }

  toggleSize(size: string): void {
    const index = this.selectedSizes.indexOf(size);
    if (index === -1) {
      this.selectedSizes.push(size);
    } else {
      this.selectedSizes.splice(index, 1);
    }
  }

  toggleColor(color: string): void {
    const index = this.selectedColors.indexOf(color);
    if (index === -1) {
      this.selectedColors.push(color);
    } else {
      this.selectedColors.splice(index, 1);
    }
  }

  applyFilters(): void {
    const filterData = {
      price: this.price,
      sizes: this.selectedSizes,
      colors: this.selectedColors
    };

    console.log(filterData)

    // Emit the selected filter data
    this.filtersApplied.emit(filterData);
  }

  close() {
    this.activeModal.close();
  }
}
