import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { CategoryService } from '../category-service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products = this.productService.filteredProducts;
  constructor(public categoryService: CategoryService) {}
  SortLowToHigh(){
    this.productService.sortLowtoHigh();
  }
  SortHighToLow(){
    this.productService.sortHightoLow();
  }
}
