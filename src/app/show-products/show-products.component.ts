import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavitemsComponent } from '../navitems/navitems.component';
import { CommonModule } from '@angular/common';
import { CartServicesService } from '../../services/cart-services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { HttpClient } from '@angular/common/http';

export interface Product {
  _id: string;
  productname: string;
  price: number;
  imageurl: string;
  displayImages: string[];
  category: string[];
  description: string;
  sizes: string[];
  shippingAndReturn: string;
  careGuide: string;
  gender: string; // Add gender property
  selectedSize?: string;
  quantity?: number;
  color: String
}


@Component({
  selector: 'app-show-products',
  standalone: true,
  imports: [NavitemsComponent, CommonModule, RouterModule],
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.scss'
})

export class ShowProductsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartServicesService,
    private modalService: NgbModal,
    private http: HttpClient,
    private route: Router
  ) { }

  productCategory: any | undefined;
  products: Product[] = [];
  allProducts: Product[] = [];
  filterData: any | undefined;
  selectedPriceRange: { min: number; max: number } | null = null;
  selectedColors: string[] = [];
  selectedSizes: string[] = [];


  ngOnInit(): void {
    this.productCategory = this.activatedRoute.snapshot.params['category'];
    this.fetchProducts();
  }


  // Fetch products from the server and filter by category
  fetchProducts() {
    this.http.get<Product[]>('http://localhost:3000/get-products').subscribe(
      (allProducts) => {
        // Store all products initially to allow resetting filters
        this.allProducts = allProducts;

        // Filter products by category and update displayed products
        this.products = allProducts.filter(
          (product) => product.category.includes(this.productCategory)
        );
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  openFilterModal() {
    const modalRef = this.modalService.open(FilterModalComponent, {
      windowClass: 'slide-in-modal',
      backdropClass: 'custom-backdrop'
    });

    modalRef.componentInstance.filtersApplied.subscribe((filterData: any) => {
      this.filterData = {
        colors: filterData?.colors,
        price: filterData?.price,
        sizes: filterData?.sizes
      };
      this.applyFilters(filterData);
    });
  }

  applyFilters(filterData: any) {
    const { price, sizes, colors } = filterData;

    // Filter products from allProducts, applying category filter first
    this.products = this.allProducts
      .filter(product => product.category.includes(this.productCategory)) // Always apply category filter
      .filter(product => {
        // Price Filter: Include products with price <= selected price
        const matchesPrice = product.price <= price;

        // Size Filter: If no sizes are selected, match all products; otherwise, match only if product size array contains one of the selected sizes
        const matchesSize = sizes.length === 0 || sizes.some((size: string) => product.sizes && product.sizes.includes(size));

        // Color Filter: If no colors are selected, match all products; otherwise, match only selected colors
        const matchesColor = colors.length === 0 || colors.includes(product.color);

        // Only include products that match all selected filters
        return matchesPrice && matchesSize && matchesColor;
      });
  }

  showProductDetail(id: any) {
    this.route.navigate(['product-details/' + id]);
  }

  clearFilter(filterType: string) {
    if (filterType === 'price') this.filterData['price'] = null;
    if (filterType === 'color') this.filterData['colors'] = [];
    if (filterType === 'size') this.filterData['sizes'] = [];
  }

  // Clear all filters
  clearAllFilters() {
    this.selectedPriceRange = null;
    this.selectedColors = [];
    this.selectedSizes = [];
  }

}
