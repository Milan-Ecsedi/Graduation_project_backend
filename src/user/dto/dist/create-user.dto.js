"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'felhasználó név: kötelező megadni',
            type: 'string'
        })
    ], CreateUserDto.prototype, "username");
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'jelszó: kötelező megadni',
            type: 'string'
        })
    ], CreateUserDto.prototype, "password");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        swagger_1.ApiProperty({
            description: 'Email cím: Kötelező megadni és email cím kell hogy legyen'
        })
    ], CreateUserDto.prototype, "email");
    __decorate([
        swagger_1.ApiProperty({
            description: 'profilkép: Alapértelmezett értéket kap, updateProfile függvényen lehet frissíteni'
        })
    ], CreateUserDto.prototype, "profile_pic");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
