"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var course_module_1 = require("./course/course.module");
var user_module_1 = require("./user/user.module");
var applied_user_module_1 = require("./applied_user/applied_user.module");
var user_entity_1 = require("./user/entities/user.entity");
var course_entity_1 = require("./course/entities/course.entity");
var applied_user_entity_1 = require("./applied_user/entities/applied_user.entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DB_HOST || 'localhost',
                    port: parseInt(process.env.DB_PORT) || 3306,
                    username: process.env.DB_USERNAME || 'root',
                    password: process.env.DB_PASSWORD || '',
                    database: process.env.DB_DATABASE || 'database',
                    entities: [
                        user_entity_1["default"], course_entity_1["default"], applied_user_entity_1["default"]
                    ],
                    synchronize: true
                }),
                course_module_1.CourseModule,
                user_module_1.UserModule,
                applied_user_module_1.AppliedUserModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
