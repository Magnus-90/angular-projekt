import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
  viewProviders: [provideIcons({ heroShoppingCart })],
})
export class NavbarComponent {
  router = inject(Router);
}
