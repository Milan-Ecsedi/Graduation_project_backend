"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var applied_user_entity_1 = require("src/applied_user/entities/applied_user.entity");
var typeorm_1 = require("typeorm");
/**
 * A kurzus táblát jelképezi az adatbázisban
 */
var Course = /** @class */ (function () {
    function Course() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Course.prototype, "id");
    __decorate([
        typeorm_1.OneToMany(function () { return applied_user_entity_1["default"]; }, function (appliedUser) { return appliedUser.course; })
    ], Course.prototype, "AppliedCourse");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "course_name");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "course_description");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "cover_photo");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "subject");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "topic");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "details");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "file_url");
    __decorate([
        typeorm_1.Column()
    ], Course.prototype, "deadline");
    Course = __decorate([
        typeorm_1.Entity()
    ], Course);
    return Course;
}());
exports["default"] = Course;
