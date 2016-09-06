import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {ProductDetailComponent} from "./modules/product-detail/product-detail.component";
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products/:id', component: ProductDetailComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
