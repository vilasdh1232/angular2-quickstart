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
    }
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
            template: "<div class=\"container\">\n    <h1>Login Form</h1>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\"\n              required minlength=\"4\" maxlength=\"24\"\n              name=\"username\" [(ngModel)]=\"user.username\"             >\n\n        <div *ngIf=\"username.errors && (username.dirty || username.touched)\"\n            class=\"alert alert-danger\">\n            <div [hidden]=\"!username.errors.required\">\n              Name is required\n            </div>\n            <div [hidden]=\"!username.errors.minlength\">\n              Name must be at least 4 characters long.\n            </div>\n            <div [hidden]=\"!username.errors.maxlength\">\n              Name cannot be more than 24 characters long.\n            </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"alterEgo\">Alter Ego</label>\n        <input type=\"text\" class=\"form-control\" id=\"alterEgo\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n</div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map