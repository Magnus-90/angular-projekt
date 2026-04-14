import { computed, inject, Injectable, signal } from '@angular/core';
import { PRODUCTS } from './product-data';
import { Product } from './Interfaces/interface';
import { CategoryService } from './category-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = signal<Product[]>(PRODUCTS);
  private categoryService = inject(CategoryService);
  filteredProducts = computed(function(this: ProductService) {
    const selectedId = this.categoryService.selectedCategoryId();
    const allProducts = this.products();
    if (selectedId === null) {
      return allProducts;
    }
    return allProducts.filter(function(product) {
      return product.category.id === selectedId;
    });
    
  }.bind(this));
  
  getAllProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number) {
    return this.products().find(p => p.id === id);
  }
  sortLowtoHigh(){
    const copy = this.products().slice()
    copy.sort(function (a,b){
      return a.price - b.price
    });
    this.products.set(copy);
  }
  sortHightoLow(){
    const copy = this.products().slice()
    copy.sort(function (a,b){
      return b.price - a.price
    });
    this.products.set(copy);
  }
}
