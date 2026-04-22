import { Component, HostListener, inject } from '@angular/core';
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
  private notificationService = inject(NotificationService);
  private productService = inject(ProductService);
  bestsellers = this.productService.bestsellers;
  notification() {
    this.notificationService.show('Willkommen im Webshop!');
  }
  @HostListener('window:load')
  onLoad() {
    this.notificationService.show('Willkommen im InOut Media Store! Stöbern Sie in unserem umfassenden Sortiement und lassen Sie sich von den fantastischen preisen überzeugen.');
  }
}

