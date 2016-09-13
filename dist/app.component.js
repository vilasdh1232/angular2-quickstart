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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <!-- Navigation -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n                <i class=\"fa fa-home fa-3x\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a [routerLink]=\"['/schedules']\"><i class=\"fa fa-calendar fa-3x\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/users']\"><i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li>\n                    <a href=\"http://wp.me/p3mRWu-199\" target=\"_blank\"><i class=\"fa fa-info fa-3x\" aria-hidden=\"true\"></i></a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"https://www.facebook.com/chsakells.blog\" target=\"_blank\">\n                        <i class=\"fa fa-facebook fa-3x\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://twitter.com/chsakellsBlog\" target=\"_blank\">\n                        <i class=\"fa fa-twitter fa-3x\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://github.com/chsakell\" target=\"_blank\">\n                        <i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://chsakell.com\" target=\"_blank\">\n                        <i class=\"fa fa-rss-square fa-3x\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n<br/>\n<!-- Page Content -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<footer class=\"navbar navbar-fixed-bottom\">\n    <div class=\"text-center\">\n        <h4 class=\"white\">\n            <a href=\"https://chsakell.com/\" target=\"_blank\">chsakell's Blog</a>\n            <i>Anything around ASP.NET MVC,Web API, WCF, Entity Framework & Angular</i>\n        </h4>\n    </div>\n</footer>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map