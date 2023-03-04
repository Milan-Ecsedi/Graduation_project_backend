import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import User from './entities/user.entity';
import { AppService } from 'src/app.service';
import { IsEmail, isEmail } from 'class-validator';

@Injectable()
export class UserService {

  constructor(private dataSource:DataSource,
    private readonly appService: AppService,){}
  async create(createUserDto: CreateUserDto) {
   const userRepo= await this.dataSource.getRepository(User);
   const IsEmailUsed = await userRepo.findOne({ where: { email: createUserDto.email}})
  const IsEmail= isEmail(createUserDto.email)
    console.log(IsEmail)
  /*if(IsEmail){
    throw new BadRequestException('Nem megfelelő E-mail cím')
  }*/
   if(IsEmailUsed)
   {
    throw new BadRequestException('Az E-mail már regisztrálva van')
   }
    const user= new User()
    user.username=createUserDto.username
    user.email= createUserDto.email
    user.password=await this.appService.getPW(createUserDto.password)
    userRepo.save(user)
  }

  async findAll() {
    
    const userRepo= await this.dataSource.getRepository(User)
    const users= userRepo.find()
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const userRepo= await this.dataSource.getRepository(User)
    userRepo.delete(id)
 }
}
