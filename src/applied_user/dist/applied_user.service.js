"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppliedUserService = void 0;
var common_1 = require("@nestjs/common");
var applied_user_entity_1 = require("./entities/applied_user.entity");
var AppliedUserService = /** @class */ (function () {
    function AppliedUserService(dataSource) {
        this.dataSource = dataSource;
    }
    AppliedUserService.prototype.create = function (user) {
        var appliedRepo = this.dataSource.getRepository(applied_user_entity_1["default"]);
        var appliedUser = new applied_user_entity_1["default"];
        appliedUser.user = user;
        console.log(user);
        // appliedRepo.save(appliedUser);
    };
    AppliedUserService.prototype.findAll = function () {
        return "This action returns all appliedUser";
    };
    AppliedUserService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " appliedUser";
    };
    AppliedUserService.prototype.update = function (id, updateAppliedUserDto) {
        return "This action updates a #" + id + " appliedUser";
    };
    AppliedUserService.prototype.remove = function (id) {
        return "This action removes a #" + id + " appliedUser";
    };
    AppliedUserService = __decorate([
        common_1.Injectable()
    ], AppliedUserService);
    return AppliedUserService;
}());
exports.AppliedUserService = AppliedUserService;
