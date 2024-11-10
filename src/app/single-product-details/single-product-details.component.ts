import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductRelatedServiceService } from '../../services/product-related-service.service';
import { NavitemsComponent } from '../navitems/navitems.component';
import { CartServicesService } from '../../services/cart-services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomFitFormComponent } from '../custom-fit-form/custom-fit-form.component';
import { FooterElementsComponent } from '../footer-elements/footer-elements.component';

@Component({
  selector: 'app-single-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavitemsComponent, FooterElementsComponent],
  templateUrl: './single-product-details.component.html',
  styleUrl: './single-product-details.component.scss'
})
export class SingleProductDetailsComponent implements OnInit {
  product: any;
  selectedSize: string | null = null;
  isCustomFit: boolean = false;
  newCustomFit: boolean = false;


  bust: number | null = null;
  armLength: number | null = null;
  measurementUnit: string = 'IN';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private productService: ProductRelatedServiceService,
    private cartService: CartServicesService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (localStorage.getItem('customFitData')) {
      this.newCustomFit = true;
      this.loadMeasurements();
    }
    else {
      this.newCustomFit = false;
    }

    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (data: any) => {
          this.product = data;
          this.isCustomFit = this.product.category.includes('custom-fit');
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    } else {
      console.error('Product ID not found in route parameters');
    }
  }

  // Load measurements from localStorage
  loadMeasurements() {
    const savedData = localStorage.getItem('customFitData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.bust = data.bust;
      this.armLength = data.armLength;
      this.measurementUnit = data.measurementUnit || 'IN';
    }
  }


  selectSize(size: string): void {
    this.selectedSize = size;
  }

  addToCart(): void {
    console.log(this.selectedSize)
    if (this.product && this.selectedSize) {
      const cartItem = {
        ...this.product,
        selectedSize: this.selectedSize,
      };
      console.log(cartItem)

      this.cartService.addToCart(cartItem);
      this.router.navigate(['/cart-items']);
    }
    else if (this.product && this.newCustomFit) {

      const retrievedCustomFitData = JSON.parse(localStorage.getItem('customFitData') || '{}');
  
      const cartItem = {
        ...this.product,
        customFit: true,
        selectedSize: retrievedCustomFitData,
      };

      this.cartService.addToCart(cartItem);
      this.router.navigate(['/cart-items']);
    } else {
      alert("Please select a size or customize your fit before adding to cart.");
    }
  }

  openCustomFitModal() {
    const modalRef = this.modalService.open(CustomFitFormComponent, {
      windowClass: 'slide-in-modal',
      backdropClass: 'custom-backdrop'
    });
  }

  clearCustomFitData(){
    if(localStorage.getItem('customFitData')) {
      localStorage.removeItem('customFitData');
      location.reload();
    }
  }

}
