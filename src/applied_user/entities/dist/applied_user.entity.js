"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var course_entity_1 = require("src/course/entities/course.entity");
var user_entity_1 = require("src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
/**
 * Felhasználók akik jelentkeztek az adott kurzusra.
 */
var AppliedUser = /** @class */ (function () {
    function AppliedUser() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], AppliedUser.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1["default"]; }, function (user) { return user.applications; })
    ], AppliedUser.prototype, "user");
    __decorate([
        typeorm_1.ManyToOne(function () { return course_entity_1["default"]; }, function (course) { return course.AppliedCourse; })
    ], AppliedUser.prototype, "course");
    __decorate([
        typeorm_1.Column('date')
    ], AppliedUser.prototype, "apply_date");
    AppliedUser = __decorate([
        typeorm_1.Entity()
    ], AppliedUser);
    return AppliedUser;
}());
exports["default"] = AppliedUser;
