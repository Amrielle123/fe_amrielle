import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/show-products/show-products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductRelatedServiceService {

  private apiBaseUrl = 'https://amrielle.in/api/'

  constructor(private http: HttpClient) { }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiBaseUrl}get-product-details/${id}`);
  }


  fetchProducts(): Observable<Product[]> {
    // Returns an observable that can be subscribed to in the component
    return this.http.get<Product[]>(`${this.apiBaseUrl}get-products/new-arrivals`);
  }


  // Create order using Razorpay
  createOrder(amount: number): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}create-order`, { amount });
  }

  // Payment verification (add if needed)
  verifyPayment(payment: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}verify-payment`, payment);
  }


  // Fetch all products from the server
  fetchAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBaseUrl}get-products`);
  }

  // Fetch products with new arrivals endpoint
  fetchTrendingProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBaseUrl}get-products/new-arrivals`);
  }
}
