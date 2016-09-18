"use strict";
var router_1 = require('@angular/router');
var pagenotfound_component_1 = require('./components/pagenotfound.component');
var login_component_1 = require('./modules/auth/login.component');
var register_component_1 = require('./modules/auth/register.component');
var appRoutes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map