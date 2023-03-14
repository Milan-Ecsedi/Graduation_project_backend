'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
exports.__esModule = true;
exports.CourseController = void 0;
var common_1 = require('@nestjs/common');
var CourseController = /** @class */ (function () {
  function CourseController(courseService) {
    this.courseService = courseService;
  }
  CourseController.prototype.create = function (createCourseDto) {
    return this.courseService.create(createCourseDto);
  };
  CourseController.prototype.findAll = function () {
    return this.courseService.findAll();
  };
  CourseController.prototype.findOne = function (id) {
    return this.courseService.findOne(+id);
  };
  CourseController.prototype.update = function (id, updateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  };
  CourseController.prototype.remove = function (id) {
    return this.courseService.remove(+id);
  };
  __decorate(
    [common_1.Post('create'), __param(0, common_1.Body())],
    CourseController.prototype,
    'create',
  );
  __decorate([common_1.Get('list')], CourseController.prototype, 'findAll');
  __decorate(
    [common_1.Get('search/:id'), __param(0, common_1.Param('id'))],
    CourseController.prototype,
    'findOne',
  );
  __decorate(
    [
      common_1.Patch('update/:id'),
      __param(0, common_1.Param('id')),
      __param(1, common_1.Body()),
    ],
    CourseController.prototype,
    'update',
  );
  __decorate(
    [common_1.Delete('delete/:id'), __param(0, common_1.Param('id'))],
    CourseController.prototype,
    'remove',
  );
  CourseController = __decorate(
    [common_1.Controller('course')],
    CourseController,
  );
  return CourseController;
})();
exports.CourseController = CourseController;
