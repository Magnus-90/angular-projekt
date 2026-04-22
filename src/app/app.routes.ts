import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDeteilComponent } from './product-detail-component/product-detail-component';
import { CartComponent } from './cart-component/cart-component';
import { CheckoutComponent } from './checkout-component/checkout-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDeteilComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '' } 
];
