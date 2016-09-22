"use strict";
var router_1 = require('@angular/router');
var pagenotfound_component_1 = require('./components/pagenotfound.component');
var login_component_1 = require('./modules/auth/login.component');
var register_component_1 = require('./modules/auth/register.component');
var subject_component_1 = require('./components/subjects/subject.component');
var dashboard_component_1 = require('./components/dashboard.component');
var appRoutes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: {
            title: 'Sign in'
        }
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        data: {
            title: 'Sign up'
        }
    },
    {
        path: 'subject',
        component: subject_component_1.SubjectsComponent,
        data: {
            title: 'Subject List'
        }
    },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map