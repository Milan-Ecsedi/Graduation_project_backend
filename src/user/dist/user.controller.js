"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.create = function (createUserDto) {
        return this.userService.create(createUserDto);
    };
    UserController.prototype.findAll = function () {
        return this.userService.findAll();
    };
    UserController.prototype.findOne = function (id) {
        return this.userService.findOne(+id);
    };
    UserController.prototype.update = function (id, updateUserDto) {
        return this.userService.update(+id, updateUserDto);
    };
    UserController.prototype.remove = function (id) {
        return this.userService.remove(+id);
    };
    UserController.prototype.findProfile = function (req) {
        console.log(req.user);
        return this.userService.getProfile(req);
    };
    __decorate([
        common_1.Post('register'),
        __param(0, common_1.Body())
    ], UserController.prototype, "create");
    __decorate([
        common_1.Get('list'),
        common_1.UseGuards(passport_1.AuthGuard('bearer'))
    ], UserController.prototype, "findAll");
    __decorate([
        common_1.Get('search/:id'),
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        __param(0, common_1.Param('id'))
    ], UserController.prototype, "findOne");
    __decorate([
        common_1.Patch('update/:id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], UserController.prototype, "update");
    __decorate([
        common_1.Delete('delete/:id'),
        __param(0, common_1.Param('id'))
    ], UserController.prototype, "remove");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Get('profile'),
        __param(0, common_1.Request())
    ], UserController.prototype, "findProfile");
    UserController = __decorate([
        common_1.Controller('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
