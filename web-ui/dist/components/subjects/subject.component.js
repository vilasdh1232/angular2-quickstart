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
var router_1 = require('@angular/router');
var subject_service_1 = require('./../../services/subject.service');
var SubjectsComponent = (function () {
    function SubjectsComponent(subjectService, router) {
        this.subjectService = subjectService;
        this.router = router;
    }
    SubjectsComponent.prototype.getSubjects = function () {
        var _this = this;
        this.subjectService
            .getSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
    };
    SubjectsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.subjectService.create(name)
            .then(function (subject) {
            _this.subjects.push(subject);
            _this.selectedSubject = null;
        });
    };
    SubjectsComponent.prototype.delete = function (subject) {
        var _this = this;
        this.subjectService
            .delete(subject.id)
            .then(function () {
            _this.subjects = _this.subjects.filter(function (h) { return h !== subject; });
            if (_this.selectedSubject === subject) {
                _this.selectedSubject = null;
            }
        });
    };
    SubjectsComponent.prototype.ngOnInit = function () {
        this.getSubjects();
    };
    SubjectsComponent.prototype.onSelect = function (subject) {
        this.selectedSubject = subject;
    };
    SubjectsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedSubject.id]);
    };
    SubjectsComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-subject',
            templateUrl: 'app/components/subjects/subject.component.html',
        }), 
        __metadata('design:paramtypes', [subject_service_1.SubjectService, router_1.Router])
    ], SubjectsComponent);
    return SubjectsComponent;
}());
exports.SubjectsComponent = SubjectsComponent;
//# sourceMappingURL=subject.component.js.map