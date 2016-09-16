import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AuthModule }  from './modules/auth/auth.module';
import { HeaderComponent }  from './components/partials/header.component';

import { FooterComponent }  from './components/partials/footer.component';
import {PageNotFoundComponent } from './components/pagenotfound.component';


import { routing, appRoutingProviders }  from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
