"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
//import { AuthModule }  from './modules/auth/auth.module';
var header_component_1 = require('./components/partials/header.component');
var footer_component_1 = require('./components/partials/footer.component');
var login_component_1 = require('./modules/auth/login.component');
var register_component_1 = require('./modules/auth/register.component');
var subject_component_1 = require('./components/subjects/subject.component');
var subject_service_1 = require('./services/subject.service');
var dashboard_component_1 = require('./components/dashboard.component');
var nav_component_1 = require('./components/partials/nav.component');
var pagenotfound_component_1 = require('./components/pagenotfound.component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                //AuthModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                pagenotfound_component_1.PageNotFoundComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                subject_component_1.SubjectsComponent,
                dashboard_component_1.DashboardComponent,
                nav_component_1.NavComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                subject_service_1.SubjectService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map