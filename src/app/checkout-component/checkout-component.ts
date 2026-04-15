import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutService } from '../checkout-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-component',
  imports: [FormsModule],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.scss',
})
export class CheckoutComponent {
  firstName = '';
  lastName = '';
  email = '';
  address = '';
  private checkoutService = inject(CheckoutService);
  private router = inject(Router);
  confirmOrder() {
  const success = this.checkoutService.confirmOrder({
    name: this.firstName + ' ' + this.lastName,
    email: this.email,
    address: this.address
  });

  if (success) {
    setTimeout(function(this: CheckoutComponent) {
      this.router.navigate(['']);
    }.bind(this), 3000);
  }
}
}