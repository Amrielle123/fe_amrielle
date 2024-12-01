import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRelatedServiceService } from '../../services/product-related-service.service';

interface Product {
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
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent implements OnInit {
  products: Product[] = [];
  gender: string | null = null;
  constructor(
    private route: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productRelatedServiceService: ProductRelatedServiceService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.gender = params.get('gender'); // Get the gender from the URL
      this.fetchProducts(); // Fetch products based on the gender parameter
    });
  }

  fetchProducts() {
    // Make the GET request to fetch products
    this.productRelatedServiceService.fetchProducts().subscribe(
      (response:any) => {
        this.products = response.filter((product:any) => product.gender === this.gender);
      },
      (error:any) => {
        console.error('Error fetching new arrivals:', error);
      }
    );
  }


  openProducts(product: string) {
    this.route.navigate(['products/' + product])
  }
}
