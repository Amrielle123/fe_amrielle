import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/show-products/show-products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductRelatedServiceService {

  private apiUrl = 'http://localhost:3000/get-product-details'; // Backend API URL

  constructor(private http: HttpClient) {}

  getProductById(id: string): Observable<Product> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
