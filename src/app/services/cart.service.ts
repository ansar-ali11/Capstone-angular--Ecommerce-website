import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = []; 

  constructor() {}

  
  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.productname} has been added to the cart!`);
  }


  getCartItems(): Product[] {
    return this.cart;
  }

 
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  
  clearCart() {
    this.cart = [];
  }
}
