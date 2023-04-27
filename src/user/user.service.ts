import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import { AppService } from 'src/app.service';
import { IsEmail, isEmail } from 'class-validator';

@Injectable()
export class UserService {

  constructor(private dataSource:DataSource,
    private readonly appService: AppService,){}

   /**
    * Regisztrál egy felhasználót
    * @param createUserDto user típusú objektum
    */ 
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
    throw new BadRequestException('Az E-mail cím már regisztrálva van')
   }
    const user= new User()
    user.username=createUserDto.username
    user.email= createUserDto.email
    user.password=await this.appService.getPW(createUserDto.password)
    user.profile_pic= 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
    userRepo.save(user)
  }

  /**
   * 
   * @returns Felhasználókat tömbként
   */
  async findAll() {
    
    const userRepo= await this.dataSource.getRepository(User)
    const users= userRepo.find()
    return users;
  }
  
    // async update(id: number, updateUserDto: UpdateUserDto) {
    //   const userRepo = this.dataSource.getRepository(User);
    //   const user= await  userRepo.findOneBy({ id: id })
    //   if (!user) {
    //     throw new BadRequestException('Ilyen id-val nem található felhasználó');
    //   }

    //   const userToUpdate = await userRepo.findOneBy({ id });

    //   userToUpdate.username = user.username;
    //   userToUpdate.password = user.password;
    //   userToUpdate.profile_pic = updateUserDto.profile_pic;
      
    //   userRepo.save(userToUpdate);
    // }
  

    
    /**
     * Kitörli a felhasználót a megadott azonosító alapján
     * @param id Felhasználó azonosítója
     */
  async remove(id: number) {
    const userRepo= await this.dataSource.getRepository(User)
    userRepo.delete(id)
 }

  
  async getProfile(req){
    return req.user
  }

  /**
   * Frissíti a felhasználó profilképét
   * @param req felhasználó tokenje alapján kikeresett felhasználó
   * @param profile_pic profilkép url-je
   */
  async updateProfilePic(req: User, profile_pic: string){

    const userRepo= this.dataSource.getRepository(User)
    const user= await userRepo.findOne({where: {id: req.id}})
    user.profile_pic= profile_pic
    userRepo.save(user)

  }

}
