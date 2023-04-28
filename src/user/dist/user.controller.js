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
var swagger_1 = require("@nestjs/swagger");
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
    /*update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update(+id, updateUserDto);
    }*/
    UserController.prototype.remove = function (id) {
        return this.userService.remove(+id);
    };
    UserController.prototype.findProfile = function (req) {
        return this.userService.getProfile(req);
    };
    UserController.prototype.updateProfilePic = function (req, profile) {
        return this.userService.updateProfilePic(req.user, profile.profile_pic);
    };
    __decorate([
        common_1.Post('register'),
        swagger_1.ApiOperation({
            description: 'Létrehoz egy felhasználót ha az adatok átmentek a validációkon'
        }),
        swagger_1.ApiBadRequestResponse({
            description: 'Ha már van a megadott email címmel felhasználó'
        }),
        __param(0, common_1.Body())
    ], UserController.prototype, "create");
    __decorate([
        common_1.Get('list'),
        swagger_1.ApiOperation({
            description: 'Ki listázza az összes felhasználót'
        })
    ], UserController.prototype, "findAll");
    __decorate([
        common_1.Delete('delete/:id'),
        swagger_1.ApiOperation({
            description: 'Kitörli a felhasználót'
        }),
        swagger_1.ApiParam({
            name: 'id',
            description: 'A felhasználó azonosítója'
        }),
        __param(0, common_1.Param('id'))
    ], UserController.prototype, "remove");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Get('profile'),
        swagger_1.ApiOperation({
            description: 'Ki keresi a felhasználót és vissza adja a publikus adatait'
        }),
        swagger_1.ApiHeader({
            name: 'req',
            description: 'A felhasználó token-je alapján vissza kapott req.user'
        }),
        swagger_1.ApiUnauthorizedResponse({
            description: 'Ha nincs társítva felhasználói token'
        }),
        __param(0, common_1.Request())
    ], UserController.prototype, "findProfile");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Patch('updateProfile'),
        swagger_1.ApiOperation({
            description: 'Frissíti a felhasználó profilképét'
        }),
        swagger_1.ApiHeader({
            name: 'req',
            description: 'A felhasználó token-je alapján vissza kapott req.user'
        }),
        swagger_1.ApiUnauthorizedResponse({
            description: 'Ha nincs társítva felhasználói token'
        }),
        __param(0, common_1.Request()), __param(1, common_1.Body())
    ], UserController.prototype, "updateProfilePic");
    UserController = __decorate([
        common_1.Controller('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
