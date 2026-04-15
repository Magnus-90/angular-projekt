import { Product } from "./Interfaces/interface";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Lampe (Indoor)',
    price: 899,
    description: '',
    image: 'lampe.jpg',
    category: { id: 1, name: 'Indoor' },
    bestseller: true,
  },
  {
    id: 2,
    name: 'Rucksack (Outdoor)',
    price: 49,
    description: '',
    image: 'rucksack.jpg',
    category: { id: 2, name: 'Outdoor' },
    bestseller: true,
  },
  {
    id: 3,
    name: 'Beamer (Multimedia)',
    price: 499,
    description: '',
    image: 'beamer.png',
    category: { id: 3, name: 'Multimedia' },
    bestseller: true,
  }
]