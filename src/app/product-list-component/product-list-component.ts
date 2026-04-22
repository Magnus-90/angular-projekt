import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { CategoryService } from '../category-service';
import { CartService } from '../cart-service';
import { Product } from '../Interfaces/interface';
import { NotificationService } from '../notification-service';

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
  private notificationService = inject(NotificationService);
  products = this.productService.filteredProducts;
  constructor(public categoryService: CategoryService) {}
  SortLowToHigh(){
    this.productService.sortLowtoHigh();
  }
  SortHighToLow(){
    this.productService.sortHightoLow();
  }
  notificationAddtoCart() {
    this.notificationService.show('Der Artikel wurde zum Warenkorb hinzugefügt');
  }
  AddToCart(product: Product){
    this.cartservice.addToCart(product);
    console.log('Warenkorb Stand:', this.cartservice.cartItems());
    this.notificationAddtoCart();
  }
}
