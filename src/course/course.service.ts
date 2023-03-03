import { Injectable } from '@nestjs/common';
import Course from './entities/course.entity';
import { DataSource } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

 constructor(private dataSource:DataSource){}
 
  async create(createCourseDto: CreateCourseDto) {
    const courseRepo = await this.dataSource.getRepository(Course)
    const course= new Course() 
    course.course_name=createCourseDto.course_name
    course.course_description=createCourseDto.course_description
    course.cover_photo=createCourseDto.cover_photo
    course.subject=createCourseDto.subject
    course.topic=createCourseDto.topic
    courseRepo.save(course)
    
  }

  async findAll() {
    const CourseRepo =this.dataSource.getRepository(Course);
    const courses=CourseRepo.find();
    return courses
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
