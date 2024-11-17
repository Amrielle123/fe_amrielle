import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { CommonModule } from '@angular/common';
import { NavitemsComponent } from '../navitems/navitems.component';
import { FooterElementsComponent } from '../footer-elements/footer-elements.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-cart-details',
  standalone: true,
  imports: [CommonModule, NavitemsComponent, FooterElementsComponent],
  templateUrl: './show-cart-details.component.html',
  styleUrl: './show-cart-details.component.scss'
})
export class ShowCartDetailsComponent implements OnInit {
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(
    private cartService: CartServicesService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }


  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems().map((item: any) => ({
      ...item,
      quantity: item.quantity || 1 // Ensure quantity is at least 1
    }));
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


  createOrder(amount: number) {
    this.http.post('http://52.66.53.37/api/create-order', { amount }).subscribe((order: any) => {
      const options = {
        key: 'YOUR_KEY_ID',
        amount: order.amount,
        currency: order.currency,
        name: 'Amrielle',
        description: 'Purchase Description',
        order_id: order.id,
        handler: (response: any) => {
          // Handle payment success
          this.verifyPayment(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    });
  }

  verifyPayment(payment: any) {
    this.http.post('/verify-payment', payment).subscribe((response: any) => {
      console.info(response)
      if (response.success) {
        
      } else {
        // Payment verification failed
      }
    });
  }
}
