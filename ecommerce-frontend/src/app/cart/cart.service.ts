import { Injectable } from '@angular/core';
import { Product } from './product.service'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];

  constructor() {}

  addToCart(product: Product, quantity: number): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity; // Update quantity if product exists in cart
    } else {
      this.cartItems.push({ product, quantity }); // Add new product to cart
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }

  getCartItems(): { product: Product; quantity: number }[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}
