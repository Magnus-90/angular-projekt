import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { CartService } from '../cart-service';
import { Product } from '../Interfaces/interface';
import { NotificationService } from '../notification-service';


@Component({
  selector: 'app-product-deteil-component',
  imports: [],
  templateUrl: './product-deteil-component.html',
  styleUrl: './product-deteil-component.scss',
})
export class ProductDeteilComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  public cartservice = inject(CartService);
  private notificationService = inject(NotificationService);
  product = this.productService.getProductById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
  details = this.product?.description.split(';');
  products = this.productService.filteredProducts;
  notificationAddtoCart() {
    this.notificationService.show('Der Artikel wurde zum Warenkorb hinzugefügt');
  }
  AddToCart(product: Product){
      this.cartservice.addToCart(product);
      this.notificationAddtoCart();
    }
}
