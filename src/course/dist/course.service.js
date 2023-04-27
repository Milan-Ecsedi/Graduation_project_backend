"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CourseService = void 0;
var common_1 = require("@nestjs/common");
var course_entity_1 = require("./entities/course.entity");
var CourseService = /** @class */ (function () {
    function CourseService(dataSource) {
        this.dataSource = dataSource;
    }
    /**
     * Létrehoz egy kurzust
     * @param createCourseDto Kurzus tipusú objektum
     */
    CourseService.prototype.create = function (createCourseDto) {
        return __awaiter(this, void 0, void 0, function () {
            var courseRepo, course;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.getRepository(course_entity_1["default"])];
                    case 1:
                        courseRepo = _a.sent();
                        course = new course_entity_1["default"]();
                        course.name = createCourseDto.name;
                        course.description = createCourseDto.description;
                        course.cphoto = createCourseDto.cphoto;
                        course.subject = createCourseDto.subject;
                        course.topic = createCourseDto.topic;
                        course.deadline = createCourseDto.deadline;
                        course.details = createCourseDto.details;
                        course.file_url = createCourseDto.file_url;
                        courseRepo.save(course);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Ki keresi az összes kurzust
     * @returns kurzusból álló tömb
     */
    CourseService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var CourseRepo, courses;
            return __generator(this, function (_a) {
                CourseRepo = this.dataSource.getRepository(course_entity_1["default"]);
                courses = CourseRepo.find();
                return [2 /*return*/, courses];
            });
        });
    };
    /**
     * Ki keresi azonositó alapján a kurzust
     * @param id kurzus azonosítója
     * @returns egy kurzust
     */
    CourseService.prototype.findOne = function (id) {
        var CourseRepo = this.dataSource.getRepository(course_entity_1["default"]);
        var course = CourseRepo.find({ where: { id: id } });
        return course;
    };
    /**
     *
     * @param id kurzus azonosítója
     * @param updateCourseDto Kurzus tipusú objektum
     */
    CourseService.prototype.update = function (id, updateCourseDto) {
        return __awaiter(this, void 0, void 0, function () {
            var courseRepo, courseToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        courseRepo = this.dataSource.getRepository(course_entity_1["default"]);
                        return [4 /*yield*/, courseRepo.findOneBy({ id: id })];
                    case 1:
                        if (!(_a.sent())) {
                            throw new common_1.BadRequestException('Ilyen id-val nem található kurzus');
                        }
                        return [4 /*yield*/, courseRepo.findOneBy({ id: id })];
                    case 2:
                        courseToUpdate = _a.sent();
                        if (updateCourseDto.name == null) {
                            throw new common_1.BadRequestException('A kéréshez nem társult semilyen adat');
                        }
                        courseToUpdate.name = updateCourseDto.name;
                        courseToUpdate.description = updateCourseDto.description;
                        courseToUpdate.cphoto = updateCourseDto.cphoto;
                        courseToUpdate.topic = updateCourseDto.topic;
                        courseToUpdate.subject = updateCourseDto.subject;
                        courseRepo.save(courseToUpdate);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Kitörli a kurzust azonosítója alapján
     * @param id kurzus azonosítója
     */
    CourseService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var courseRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.getRepository(course_entity_1["default"])];
                    case 1:
                        courseRepo = _a.sent();
                        courseRepo["delete"](id);
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseService = __decorate([
        common_1.Injectable()
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
