import { BadRequestException, ImATeapotException, Injectable } from '@nestjs/common';
import Course from 'src/course/entities/course.entity';
import User from 'src/user/entities/user.entity';
import { And, DataSource } from 'typeorm';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';
import AppliedUser from './entities/applied_user.entity';
import { ok } from 'assert';
import { isJoinedDto } from './dto/isjoined.dto';


@Injectable()
export class AppliedUserService {
  constructor(private dataSource: DataSource) {}

  async create(user : User, id: number) {
    const courseRepo= this.dataSource.getRepository(Course)
    const appliedRepo= this.dataSource.getRepository(AppliedUser)
    const course = await courseRepo.findOne({where:{id: id}})
    const appliedUser= new AppliedUser
    appliedUser.user= user
    appliedUser.course= course
    appliedUser.apply_date= new Date()
   appliedRepo.save(appliedUser);
  }

  findAll() {
    return `This action returns all appliedUser`;
  }

  findOne(id: number) {}

  async isAlreadyJoined(req: User , id: number){
    const appliedRepo= this.dataSource.getRepository(AppliedUser)
    const courseRepo= await this.dataSource.getRepository(Course)
    const course= await courseRepo.findOne({where :{id: id}})
    const appliedcourse=await appliedRepo.findOne({where:{course: course, user: req}, relations:{ user: true , course: true}})
    const isjoined= new isJoinedDto

    if(appliedcourse=== null){
      isjoined.joined= false
      return isjoined
    }
    else{
      isjoined.joined= true
      return isjoined
    }

  }


  async findAllCourseByUser(req: User){

    const appliedRepo=this.dataSource.getRepository(AppliedUser)
    const appliedcourses= await appliedRepo.find()

    console.log('le fut ez')
    console.log(appliedcourses)

    return appliedcourses
  }

  update(id: number, updateAppliedUserDto: UpdateAppliedUserDto) {
    return `This action updates a #${id} appliedUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appliedUser`;
  }
}
