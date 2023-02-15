import { BadRequestException, Body, Controller, Get, Post, Render } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Course from './course.entity';
import RegisterDto from './register.dto';
import Users from './user.entity';
import * as bcrypt from 'bcrypt';
import RegisterCourseDto from './registerCourse.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return {};
  }
  
  @Get('courses')
   listCourses(){
    const CourseRepo =  this.dataSource.getRepository(Course);
    const courses=CourseRepo.find();
    return courses
  
  }

  @Get('courses/users')
   listUsers(){
    const UserRepo =  this.dataSource.getRepository(Users);
    const users=UserRepo.find();
    return users
  
  }

  @Post('courses')
  async NewCourse(@Body() registerCoursedto: RegisterCourseDto){

    const CourseRepo=this.dataSource.getRepository(Course);
   
    if(!registerCoursedto.course_name|| !registerCoursedto.course_description || !registerCoursedto.subject || !registerCoursedto.topic)
   {

    throw new BadRequestException('Kötelező a nevet, leírást, tantárgyat, témát kitölteni')

   }

   const course= new Course()
   course.course_name= registerCoursedto.course_name
   course.course_description= registerCoursedto.course_description
   course.cover_photo= registerCoursedto.cover_photo
   course.subject= registerCoursedto.subject
   course.topic= registerCoursedto.topic

  CourseRepo.save(registerCoursedto);


  }

  @Post('courses/register')
  async Register(@Body() registerDto: RegisterDto){

    
    const UserRepo=this.dataSource.getRepository(Users);
    if (!registerDto.username|| !registerDto.email || !registerDto.password) {
      throw new  BadRequestException("Kötelező az összes adatot kitölteni")
    }

    const user= new Users()
    user.username=registerDto.username;
    user.email= registerDto.email;
    user.password= await bcrypt.hash(registerDto.password, 15)
    UserRepo.save(registerDto);


  }
  



}
