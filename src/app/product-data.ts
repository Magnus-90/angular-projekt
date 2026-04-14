import { Product } from "./Interfaces/interface";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Test Produkt 1 (Indoor)',
    price: 899,
    description: '',
    image: '',
    category: { id: 1, name: 'Indoor' }
  },
  {
    id: 2,
    name: 'Test Produkt 2 (Outdoor)',
    price: 49,
    description: '',
    image: '',
    category: { id: 2, name: 'Outdoor' }
  },
  {
    id: 3,
    name: 'Test Produkt 3 (Multimedia)',
    price: 499,
    description: '',
    image: '',
    category: { id: 3, name: 'Multimedia' }
  }
]