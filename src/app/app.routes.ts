import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrowdsourcedComponent } from './crowdsourced/crowdsourced.component';
import { StylefileComponent } from './stylefile/stylefile.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowCartDetailsComponent } from './show-cart-details/show-cart-details.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/crowdsourced',
        component: CrowdsourcedComponent
    },
    {
        path: 'home/stylefile',
        component: StylefileComponent
    },
    {
        path: 'home/:gender',
        component: ShoppingComponent
    },
    {
        path: 'products/:category',
        component: ShowProductsComponent
    },
    {
        path: 'cart-items',
        component: ShowCartDetailsComponent
    },
    {
        path: 'product-details/:id',
        component: SingleProductDetailsComponent
    }
];
