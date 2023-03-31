import { BadRequestException, Injectable } from '@nestjs/common';
import Course from './entities/course.entity';
import { DataSource } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private dataSource: DataSource) {}

  async create(createCourseDto: CreateCourseDto) {
    const courseRepo = await this.dataSource.getRepository(Course);
    const course = new Course();
    course.name = createCourseDto.name;
    course.description = createCourseDto.description;
    course.cphoto = createCourseDto.cphoto;
    course.subject = createCourseDto.subject;
    course.topic = createCourseDto.topic;
    course.deadline = createCourseDto.deadline;
    course.details = createCourseDto.details;
    course.file_url = createCourseDto.file_url;
    courseRepo.save(course);
  }

  async findAll() {
    const CourseRepo = this.dataSource.getRepository(Course);
    const courses = CourseRepo.find();
    return courses;
  }

  findOne(id: number) {
    const CourseRepo = this.dataSource.getRepository(Course);
    const course = CourseRepo.find({ where: { id: id } });
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const courseRepo = this.dataSource.getRepository(Course);
    if (!(await courseRepo.findOneBy({ id: id }))) {
      throw new BadRequestException('Ilyen id-val nem található ');
    }
    const courseToUpdate = await courseRepo.findOneBy({ id });
    if (updateCourseDto.name == null) {
      throw new BadRequestException('A kéréshez nem társult semilyen adat');
    }
    courseToUpdate.name = updateCourseDto.name;
    courseToUpdate.description = updateCourseDto.description;
    courseToUpdate.cphoto = updateCourseDto.cphoto;
    courseToUpdate.topic = updateCourseDto.topic;
    courseToUpdate.subject = updateCourseDto.subject;

    courseRepo.save(courseToUpdate);
  }

  async remove(id: number) {
    const courseRepo = await this.dataSource.getRepository(Course);
    courseRepo.delete(id);
  }
}
