"use strict";
var router_1 = require('@angular/router');
var pagenotfound_component_1 = require('./components/pagenotfound.component');
var login_component_1 = require('./modules/auth/login.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: '', component: login_component_1.LoginComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map