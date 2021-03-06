import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
//import { AuthModule }  from './modules/auth/auth.module';
import { HeaderComponent }  from './components/partials/header.component';
import { FooterComponent }  from './components/partials/footer.component';
import { LoginComponent }  from './modules/auth/login.component';
import { RegisterComponent }  from './modules/auth/register.component';
import { SubjectsComponent }  from './components/subjects/subject.component';
import { SubjectService }  from './services/subject.service';
import {DashboardComponent} from './components/dashboard.component';
import {NavComponent} from './components/partials/nav.component'


import {PageNotFoundComponent } from './components/pagenotfound.component';


import { routing, appRoutingProviders }  from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //AuthModule,
    HttpModule,

    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    DashboardComponent,
    NavComponent
  ],
  providers: [
    appRoutingProviders,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
