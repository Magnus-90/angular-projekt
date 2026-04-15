export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: Category;
    bestseller: boolean;
}

export interface Category {
    id: number;
    name: string;
}

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
    totalprice: number;
}

export interface Order {
    id: number;
    cartitem: CartItem;
    address: string;
    name: string;
    phonenumber: number;
    email: string;
}
