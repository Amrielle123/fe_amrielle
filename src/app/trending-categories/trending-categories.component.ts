import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-trending-categories',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './trending-categories.component.html',
  styleUrl: './trending-categories.component.scss'
})
export class TrendingCategoriesComponent implements OnInit {
  products: Product[] = [];
  gender: string | null = null;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.gender = params.get('gender'); // Get the gender from the URL
      this.fetchProducts(); // Fetch products based on the gender parameter
    });
  }


  constructor(
    private route: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productRelatedService: ProductRelatedServiceService
  ){}

  fetchProducts() {
    this.productRelatedService.fetchTrendingProducts().subscribe(
      (response) => {
        // Filter products based on gender
        this.products = response.filter((product) => product.gender === this.gender);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  openProducts(product: string) {
    this.route.navigate(['products/' + product])
  }
}
