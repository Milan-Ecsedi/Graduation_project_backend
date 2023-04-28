import { BadRequestException, ConflictException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import Course from 'src/course/entities/course.entity';
import User from 'src/user/entities/user.entity';
import { And, DataSource } from 'typeorm';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';
import AppliedUser from './entities/applied_user.entity';
import { isJoinedDto } from './dto/isjoined.dto';


@Injectable()
export class AppliedUserService {
  constructor(private dataSource: DataSource) {}

  /**
   * Jelentkezteti a felhasználót a kurzusra
   * @param user Felhasználó
   * @param id kurzus azonosítója
   */
  async create(user : User, id: number) {
    const courseRepo= this.dataSource.getRepository(Course)
    const appliedRepo= this.dataSource.getRepository(AppliedUser)
    const matchedCourse= await courseRepo.findOne({where:{id:id}})
    const isapplied= await appliedRepo.findOne({where:{user: user , course: matchedCourse}})
    if(isapplied)
    {
      throw new ConflictException({message:"Már jelentkezve vagy a kurzusra"})
    }
    if(matchedCourse===null){
      throw new NotFoundException({message:'Nincs ilyen kurzus'})
    }
    const appliedUser= new AppliedUser
    appliedUser.user= user
    appliedUser.course= matchedCourse
    appliedUser.apply_date= new Date()
    appliedRepo.save(appliedUser);
  }

  /**
   * 
   * @returns jelentkezett felhasználókat tömbben
   */
  async findAll() {
    const appliedRepo=this.dataSource.getRepository(AppliedUser)
    const appliedcourses= await appliedRepo.find()
    return appliedcourses;
  }

/**
 * 
 * @param req Felhasználó
 * @param id kurzus azonosító
 * @returns csatlakozva van-e, true vagy false
 */
  async isAlreadyJoined(req: User , id: number){
    const appliedRepo= this.dataSource.getRepository(AppliedUser)
    const courseRepo= await this.dataSource.getRepository(Course)
    const course= await courseRepo.findOne({where :{id: id}})
    const appliedcourse=await appliedRepo.findOne({where:{course: course, user: req}, relations:{ user: true , course: true}})
    const isjoined= new isJoinedDto

    if(appliedcourse=== null){
      isjoined.joined= false
    }
    else{
      isjoined.joined= true
    }
    return isjoined
  }


  /**
   * 
   * @param req Felhasználó
   * @returns Felhasználó jelentkezett kurzusait tömbben
   */
  async findAllCourseByUser(req: User) {
    const appliedRepo=this.dataSource.getRepository(AppliedUser)
    const appliedcourses= await appliedRepo.find({where: {user: req}, relations: {course: true}})

    return appliedcourses;
  }

}
