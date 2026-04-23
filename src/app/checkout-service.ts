import { inject, Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private cartService = inject(CartService);
  private notificationService = inject(NotificationService);
  confirmOrder(costumerData: {name: string; email: string; address: string; paymentmethod: string;}){
    if (this.cartService.cartItems().length === 0){
      this.notificationService.show("Dein Warenkorb ist leer");
      return false;
    }
    if (costumerData.name.length < 3){
      this.notificationService.show("Bitte gib einen gültigen Namen ein.");
      return false;
    }
    if (!costumerData.email.includes('@')){
      this.notificationService.show("Deine E-Mail Adresse ist ungültig.");
      return false;
    }
    if (costumerData.address.length < 5){
      this.notificationService.show("Bitte gib eine gültige Adresse ein.");
      return false;
    }
    if (!costumerData.paymentmethod){
      this.notificationService.show("Bitte wähle eine Zahlungsmethode.");
      return false;
    }
    this.cartService.clearCart();
    //TODO: evlt. könnte man hier so wie ein ein Confirm Screen machen in irgend einer Art.
    this.notificationService.show("Deine Bestellung war erfolgreich. Sie werden nun auf die Startseite weitergeleitet.");
    return true;
  }
}