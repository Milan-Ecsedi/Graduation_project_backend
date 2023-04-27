import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import {ApiBadRequestResponse, ApiOperation, ApiParam } from '@nestjs/swagger';


@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  
  @Post('create')
  @ApiOperation({
    description:'Létrehoz egy kurzust',
  })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get('list')
  @ApiOperation({description:'Ki listázza az összes kurzust'})
  findAll() {
    return this.courseService.findAll();
  }

  @Get('search/:id')
  @ApiOperation({
    description:'Ki keresi a megadott id alapján a kurzust'
  })
  @ApiParam({
    name: 'id', 
    description: 'A kurzus azonosítója'
  })
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({
    description:'Frissít egy kurzust'
  })
  @ApiParam({
    name: 'id', 
    description: 'A kurzus azonosítója'
  })
  @ApiBadRequestResponse({
    description:'Ha nincs a megadott azonosítóval kurzus vagy a társult adat hiányos'
  })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    description: 'Töröl egy kurzust'
  })
  @ApiParam({
    name: 'id', 
    description: 'A kurzus azonosítója'
  })
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
