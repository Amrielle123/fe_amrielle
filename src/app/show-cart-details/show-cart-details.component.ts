import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { CommonModule } from '@angular/common';
import { NavitemsComponent } from '../navitems/navitems.component';

@Component({
  selector: 'app-show-cart-details',
  standalone: true,
  imports: [CommonModule, NavitemsComponent],
  templateUrl: './show-cart-details.component.html',
  styleUrl: './show-cart-details.component.scss'
})
export class ShowCartDetailsComponent implements OnInit {
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(
    private cartService: CartServicesService
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }


  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems().map((item: any) => ({
      ...item,
      quantity: item.quantity || 1 // Ensure quantity is at least 1
    }));

    console.log(this.cartItems)
    this.calculateTotalCost();
  }

  incrementQuantity(item: any): void {
    item.quantity++;
    this.calculateTotalCost();
    this.cartService.updateCart(this.cartItems); // Update localStorage if necessary
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalCost();
      this.cartService.updateCart(this.cartItems); // Update localStorage if necessary
    }
  }

   // Pass productId and size to removeFromCart
   removeFromCart(item: any): void {
    this.cartService.removeFromCart(item._id, item.selectedSize);
    this.loadCartItems();
  }

  calculateTotalCost(): void {
    this.totalCost = this.cartItems.reduce((total, item: any) => total + item.price * item.quantity, 0).toFixed(2);
  }
}
