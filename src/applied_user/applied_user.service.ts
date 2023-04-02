import { BadRequestException, Injectable } from '@nestjs/common';
import Course from 'src/course/entities/course.entity';
import User from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';
import AppliedUser from './entities/applied_user.entity';


@Injectable()
export class AppliedUserService {
  constructor(private dataSource: DataSource) {}

  async create(user : User, id: number) {
    console.log(id)
    id
    const courseRepo= this.dataSource.getRepository(Course)
    const appliedRepo= this.dataSource.getRepository(AppliedUser)
    const course = await courseRepo.findOne({where:{id: id}})
    const appliedUser= new AppliedUser
    appliedUser.user= user
    appliedUser.course= course
    //const date = new Date()
    //const ymdFormat= date.getFullYear() + '-' + (date.getMonth() + 1 )+ '-' + (date.getDate()) 
   appliedRepo.save(appliedUser);
  }

  findAll() {
    return `This action returns all appliedUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appliedUser`;
  }

  update(id: number, updateAppliedUserDto: UpdateAppliedUserDto) {
    return `This action updates a #${id} appliedUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appliedUser`;
  }
}
