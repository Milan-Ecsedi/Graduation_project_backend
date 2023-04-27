import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBadRequestResponse, ApiHeader, ApiOperation, ApiParam, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({
    description: 'Létrehoz egy felhasználót ha az adatok átmentek a validációkon'
  })
  @ApiBadRequestResponse({
    description:'Ha van már a megadott email címmel felhasználó'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('list')
  @ApiOperation({
    description: 'Ki listázza az összes felhasználót'
  })
  findAll() {
    return this.userService.findAll();
  }

  
  /*update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }*/


  @Delete('delete/:id')
  @ApiOperation({
    description:'Kitörli a felhasználót'
  })
  @ApiParam({
    name:'id',
    description:'A felhasználó azonosítója'
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('profile')
  @ApiOperation({
    description:'Ki keresi a felhasználót és vissza adja a publikus adatait'
  })
  @ApiHeader({
    name:'req',
    description:'A felhasználó token-je alapján vissza kapott req.user'
  })
  @ApiUnauthorizedResponse({
    description:'Ha nincs társítva felhasználói token'
  })
  findProfile(@Request() req){
    return this.userService.getProfile(req)
  }

  @UseGuards(AuthGuard('bearer'))
  @Patch('updateProfile')
  @ApiOperation({
    description:'Frissíti a felhasználó profilképét'
  })
  @ApiHeader({
    name:'req',
    description:'A felhasználó token-je alapján vissza kapott req.user'
  })
  @ApiUnauthorizedResponse({
    description:'Ha nincs társítva felhasználói token'
  })
  updateProfilePic(@Request() req , @Body() profile){
    return this.userService.updateProfilePic(req.user , profile.profile_pic)

  }
}
