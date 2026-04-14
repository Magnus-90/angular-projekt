import { Injectable, signal } from '@angular/core';
import { CartItem, Product } from './Interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  addToCart(product: Product){
    const exists = this.cartItems().some(function(item){
      return item.product.id === product.id;
    });
    if (exists){
    this.cartItems.update(function(items) {
      return items.map(function(item) {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1, totalprice: product.price * (item.quantity + 1) };
        }
        return item;
      });
    });
  } else {
        this.cartItems.update(function(items) {
        return [...items, { 
          id: product.id, 
          product: product, 
          quantity: 1, 
          totalprice: product.price 
    }];
  });
}}
  removeFromCart(productid: number) {
  const item = this.cartItems().find(function(item) {
    return item.product.id === productid;
  });

  if (item && item.quantity > 1) {
    this.cartItems.update(function(items) {
      return items.map(function(item) {
        if (item.product.id === productid) {
          return { ...item, quantity: item.quantity - 1, totalprice: item.product.price * (item.quantity - 1) };
        }
        return item;
      });
    });
  } else {
    this.cartItems.update(function(items) {
      return items.filter(function(item) {
        return item.product.id !== productid;
      });
    });
  }
}
  getTotalPrice(){
    let total = 0;
    for (const item of this.cartItems()){
      total = total + item.totalprice;
    }
    return total;
  }
  clearCart(){
    this.cartItems.set([]);
  }
}
