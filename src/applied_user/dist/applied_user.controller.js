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
    AppliedUserController.prototype.findOne = function (id) {
        return this.appliedUserService.findOne(+id);
    };
    AppliedUserController.prototype.update = function (id, updateAppliedUserDto) {
        return this.appliedUserService.update(+id, updateAppliedUserDto);
    };
    AppliedUserController.prototype.remove = function (id) {
        return this.appliedUserService.remove(+id);
    };
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Post('join'),
        __param(0, common_1.Request()), __param(1, common_1.Body())
    ], AppliedUserController.prototype, "create");
    __decorate([
        common_1.Get()
    ], AppliedUserController.prototype, "findAll");
    __decorate([
        common_1.UseGuards(passport_1.AuthGuard('bearer')),
        common_1.Get('isJoined/:id'),
        __param(0, common_1.Request()), __param(1, common_1.Param('id'))
    ], AppliedUserController.prototype, "CheckUser");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], AppliedUserController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], AppliedUserController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], AppliedUserController.prototype, "remove");
    AppliedUserController = __decorate([
        common_1.Controller('applied-user')
    ], AppliedUserController);
    return AppliedUserController;
}());
exports.AppliedUserController = AppliedUserController;
