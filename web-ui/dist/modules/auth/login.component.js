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
var user_1 = require('./../../models/user');
var LoginComponent = (function () {
    function LoginComponent() {
        this.user = new user_1.User();
    }
    LoginComponent.prototype.getLogin = function (loginFrm) {
        console.log(this.user);
        console.log(loginFrm);
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: "<div class=\"container\">\n    <h1>Login Form</h1>\n    <form (ngSubmit)=\"getLogin()\" >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" required #username=\"ngModel\" minlength=\"2\" maxlength=\"20\">\n        <div *ngIf=\"username.errors && (username.dirty || username.touched)\"\n            class=\"alert alert-danger\">\n            <div [hidden]=\"!username.errors.required\">\n              Username is required\n            </div>\n            <div [hidden]=\"!username.errors.minlength\">\n              Username must be at least 4 characters long.\n            </div>\n            <div [hidden]=\"!username.errors.maxlength\">\n              Username cannot be more than 24 characters long.\n            </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required  #password=\"ngModel\">\n        <div *ngIf=\"username.errors && (password.dirty || password.touched)\"\n            class=\"alert alert-danger\">\n            <div [hidden]=\"!password.errors.required\">\n              Password is required\n            </div>            \n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n</div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map