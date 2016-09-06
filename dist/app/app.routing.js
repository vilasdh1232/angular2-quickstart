"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./modules/home/home.component');
var product_detail_component_1 = require("./modules/product-detail/product-detail.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'products/:id', component: product_detail_component_1.ProductDetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map