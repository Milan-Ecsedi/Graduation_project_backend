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
exports.AppliedUserController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var swagger_1 = require("@nestjs/swagger");
var AppliedUserController = /** @class */ (function () {
    function AppliedUserController(appliedUserService) {
        this.appliedUserService = appliedUserService;
    }
    AppliedUserController.prototype.create = function (req, id) {
        return this.appliedUserService.create(req.user, id.id);
    };
    AppliedUserController.prototype.findAll = function () {
        return this.appliedUserService.findAll();
    };
    AppliedUserController.prototype.CheckUser = function (req, id) {
        return this.appliedUserService.isAlreadyJoined(req.user, +id);
    };
    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.appliedUserService.findOne(+id);
    // }
    AppliedUserController.prototype.findAllCourseByUser = function (req) {
        return this.appliedUserService.findAllCourseByUser(req.user);
    };
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Post('join'),
        swagger_1.ApiOperation({
            description: 'csatlakoztatja a felhasználót a kurzushoz'
        }),
        swagger_1.ApiConflictResponse({
            description: 'Ha már a felhasználó csatlakozva van a kurzusra'
        }),
        swagger_1.ApiUnauthorizedResponse({
            description: 'Ha nincs társítva felhasználói token'
        }),
        swagger_1.ApiNotFoundResponse({
            description: 'Ha nincs kurzus a társított azonosítóval'
        }),
        __param(0, common_1.Request()), __param(1, common_1.Body())
    ], AppliedUserController.prototype, "create");
    __decorate([
        common_1.Get('list'),
        swagger_1.ApiOperation({
            description: 'Ki listázza az összes felhasználót és a hozzá tartozó kurzust'
        })
    ], AppliedUserController.prototype, "findAll");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Get('isJoined/:id'),
        swagger_1.ApiOperation({
            description: 'Ellenörzi hogy a felhasználó csatlakozva van-e a kurzusra'
        }),
        swagger_1.ApiParam({
            name: 'id',
            description: 'A kurzus azonosítója'
        }),
        swagger_1.ApiUnauthorizedResponse({
            description: 'Ha nincs társítva felhasználói token'
        }),
        __param(0, common_1.Request()), __param(1, common_1.Param('id'))
    ], AppliedUserController.prototype, "CheckUser");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Get(),
        swagger_1.ApiOperation({
            description: 'Ki keresi a felhasználó kurzusait amire jelentkezett'
        }),
        swagger_1.ApiUnauthorizedResponse({
            description: 'Ha nincs társítva felhasználói token'
        }),
        __param(0, common_1.Request())
    ], AppliedUserController.prototype, "findAllCourseByUser");
    AppliedUserController = __decorate([
        common_1.Controller('applied-user')
    ], AppliedUserController);
    return AppliedUserController;
}());
exports.AppliedUserController = AppliedUserController;
