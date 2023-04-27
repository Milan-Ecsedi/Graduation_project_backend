"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCourseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateCourseDto = /** @class */ (function () {
    function CreateCourseDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'A Kurzus megnevezése, kötelező megadni',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'Kurzus rövid leírása, kötelező megadni',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "description");
    __decorate([
        swagger_1.ApiProperty({
            description: 'Borító kép url-je, opcionális',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "cphoto");
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'Tantárgy, kötelző megadni',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "subject");
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'témakőr az adott tantárgyon belül',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "topic");
    __decorate([
        swagger_1.ApiProperty({
            description: 'Kurzus részletes leírása, opcionális',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "details");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUrl(),
        swagger_1.ApiProperty({
            description: 'Kurzus csomag url link-je , kötelező',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "file_url");
    __decorate([
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty({
            description: 'Kurzus Lejárati ideje',
            type: 'string'
        })
    ], CreateCourseDto.prototype, "deadline");
    return CreateCourseDto;
}());
exports.CreateCourseDto = CreateCourseDto;
