import { BadRequestException, Body, Controller, Get, Post, Render } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Course from './course.entity';
import RegisterDto from './register.dto';
import Users from './user.entity';
import * as bcrypt from 'bcrypt';
import RegisterCourseDto from './registerCourse.dto';
import AppliedUser from './applied_user.entity';


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
  
  /**
   * Ki listázza a kurzusokat
   * @returns courses(Course_name, description, cover_photo url, subject, topic) 
   */
  @Get('courses')
   listCourses(){
    const CourseRepo =  this.dataSource.getRepository(Course);
    const courses=CourseRepo.find();
    return courses
  
  }

  @Get('courses/users/applied')
  listAppliedUsers(){

    const AppliedUserRepo = this.dataSource.getRepository(AppliedUser);
    const applieduser=AppliedUserRepo.find();
    return applieduser
    
  }

  @Get('courses/users')
   listUsers(){
    const UserRepo =  this.dataSource.getRepository(Users);
    const users=UserRepo.find();
    return users
  
  }
  
  @Post('courses')
  async NewCourse(@Body() registerCourseDto: RegisterCourseDto){

    const CourseRepo=this.dataSource.getRepository(Course);
   
    if(!registerCourseDto.course_name|| !registerCourseDto.course_description || !registerCourseDto.subject || !registerCourseDto.topic)
   {

    throw new BadRequestException('Kötelező a nevet, leírást, tantárgyat, témát kitölteni')

   }

   const course= new Course()
   course.course_name= registerCourseDto.course_name
   course.course_description= registerCourseDto.course_description
   course.cover_photo= registerCourseDto.cover_photo
   course.subject= registerCourseDto.subject
   course.topic= registerCourseDto.topic

  CourseRepo.save(registerCourseDto);


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
   // await bcrypt.hash(registerDto.password, 10)
    user.password=await this.appService.getPW(registerDto.password);
    UserRepo.save(user);


  }
  



}
