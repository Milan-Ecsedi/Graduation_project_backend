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
 * Felhasználó táblát jelképezi az adatbázisban
 */
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.OneToMany(function () { return applied_user_entity_1["default"]; }, function (appliedUser) { return appliedUser.user; })
    ], User.prototype, "applications");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "profile_pic");
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports["default"] = User;
