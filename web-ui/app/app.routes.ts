import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/pagenotfound.component';
import {LoginComponent} from './modules/auth/login.component';
import {RegisterComponent} from './modules/auth/register.component';


const appRoutes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Heroes List'
        }
    },
    
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

