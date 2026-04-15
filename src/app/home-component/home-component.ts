import { Component, inject } from '@angular/core';
import { NotificationService } from '../notification-service';
import { ProductService } from '../product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  private ns = inject(NotificationService);
  private productService = inject(ProductService);
  bestsellers = this.productService.bestsellers;
  testNotification() {
    this.ns.show('Willkommen im Webshop!');
  }
}
