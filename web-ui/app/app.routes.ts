import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/pagenotfound.component';
import {LoginComponent} from './modules/auth/login.component';
import {RegisterComponent} from './modules/auth/register.component';
import {SubjectsComponent} from './components/subjects/subject.component';
import {DashboardComponent} from './components/dashboard.component';


const appRoutes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
        
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Sign in'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Sign up'
        }
    },
    {
        path: 'subject',
        component: SubjectsComponent,
        data: {
            title: 'Subject List'
        }
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

