import { NgModule }      from '@angular/core';

import {HomeComponent} from './home.component';
import {SearchComponent} from './search.component';

@NgModule({
    declarations: [
        SearchComponent,
        HomeComponent
    ]
})

export class HomeModule {
    title = 'angular2-quickstart!'
}