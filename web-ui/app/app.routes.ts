import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/pagenotfound.component';
import {LoginComponent} from './modules/auth/login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: '', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

