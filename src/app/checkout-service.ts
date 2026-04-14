import { inject, Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private cartService = inject(CartService);
  private notificationService = inject(NotificationService);
  confirmOrder(costumerData: {name: string; email: string; address: string;}){
    if (this.cartService.cartItems().length === 0){
      this.notificationService.show("Dein Warenkorb ist leer");
      return;
    }
    if (costumerData.name.length < 3){
      this.notificationService.show("Bitte gib einen gültigen Namen ein.");
      return;
    }
    if (!costumerData.email.includes('@')){
      this.notificationService.show("Deine E-Mail Adresse ist ungültig");
      return;
    }
    this.cartService.clearCart();
    this.notificationService.show("Deine Bestellung war erfolgreich");
  }
}
