import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import {HomeModule} from './modules/home/home.module';
import {NavbarComponent } from './components/shared/navbar/navbar.component';
import {FooterComponent } from './components/shared/footer/footer.component';



@NgModule({
    imports: [BrowserModule, routing, HomeModule],
    declarations: [AppComponent, NavbarComponent, FooterComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    title = 'angular2-quickstart!'
}