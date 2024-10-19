import { Component, OnInit } from '@angular/core';

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor() {
    // Sample cart data (replace this with actual cart data from a service)
    this.cartItems = [
      {
        productId: 1,
        productName: 'Laptop',
        quantity: 1,
        price: 999.99,
        total: 999.99
      },
      {
        productId: 2,
        productName: 'Headphones',
        quantity: 2,
        price: 199.99,
        total: 399.98
      }
    ];
  }

  ngOnInit(): void {
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.calculateTotalAmount();
  }

  updateQuantity(productId: number, newQuantity: number): void {
    const item = this.cartItems.find(item => item.productId === productId);
    if (item) {
      item.quantity = newQuantity;
      item.total = item.price * newQuantity;
      this.calculateTotalAmount();
    }
  }
}
