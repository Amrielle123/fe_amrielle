import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  constructor() {
    this.loadCartItems();
  }
  private cartItems: any[] = [];

  // Save cart items to localStorage
  saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  addToCart(product: any): void {
    console.log(product)
    const cartItem = {
      ...product,
    };
    
    this.cartItems.push(cartItem);
    this.saveCartItems(); // Save cart items to localStorage
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems(); // Clear cart items in localStorage
  }

  removeFromCart(productId: string, selectedSize: string): void {
    this.cartItems = this.cartItems.filter(
      (item: any) => item._id !== productId || item.selectedSize !== selectedSize
    );
    this.saveCartItems();
  }

  // Load cart items from localStorage
  loadCartItems(): void {
    if (localStorage.getItem('cartItems')) {
      const savedCartItems = localStorage.getItem('cartItems');
      this.cartItems = savedCartItems ? JSON.parse(savedCartItems).map((item: any) => ({
        ...item,
        quantity: item.quantity || 1 // Set default quantity to 1 if null or undefined
      })) : [];

    }
  }

  updateCart(updatedCartItems: any[]): void {
    this.cartItems = updatedCartItems;
    this.saveCartItems();
  }
}
