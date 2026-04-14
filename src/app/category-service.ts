import { Injectable, signal } from '@angular/core';
import { Category } from './Interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = signal<Category[]>([
    {id: 1, name: 'Indoor'},
    {id: 2, name: 'Outdoor'},
    {id: 3, name: 'Multimedia'},
  ])
  selectedCategoryId = signal<number | null>(null);
  selectCategory(id: number | null){
    this.selectedCategoryId.set(id)
  }
  clearSelection(): void {
    this.selectedCategoryId.set(null);
  }
}
