import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products = this.productService.getAllProducts();
}
