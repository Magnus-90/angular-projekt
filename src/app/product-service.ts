import { Injectable, signal } from '@angular/core';
import { PRODUCTS } from './product-data';
import { Product } from './Interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = signal<Product[]>(PRODUCTS);

  getAllProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number) {
    return this.products().find(p => p.id === id);
  }
}
