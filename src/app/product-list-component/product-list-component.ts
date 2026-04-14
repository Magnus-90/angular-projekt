import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { CategoryService } from '../category-service';
import { CartService } from '../cart-service';
import { Product } from '../Interfaces/interface';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {
  private productService = inject(ProductService);
  public cartservice = inject(CartService);
  products = this.productService.filteredProducts;
  constructor(public categoryService: CategoryService) {}
  SortLowToHigh(){
    this.productService.sortLowtoHigh();
  }
  SortHighToLow(){
    this.productService.sortHightoLow();
  }
  AddToCart(product: Product){
    this.cartservice.addToCart(product);
    console.log('Warenkorb Stand:', this.cartservice.cartItems());
  }
}
