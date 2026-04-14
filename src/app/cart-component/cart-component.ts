import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart-component',
  imports: [RouterLink],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent {
  public cartService = inject(CartService);
}
