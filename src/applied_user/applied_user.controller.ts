import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppliedUserService } from './applied_user.service';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';
import { ApiConflictResponse, ApiNotFoundResponse, ApiOperation, ApiParam, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('applied-user')
export class AppliedUserController {
  constructor(private readonly appliedUserService: AppliedUserService) {}
  
  @UseGuards(AuthGuard('bearer'))
  @Post('join')
  @ApiOperation({
    description:'csatlakoztatja a felhasználót a kurzushoz'
  })
  @ApiConflictResponse({
    description:'Ha már a felhasználó csatlakozva van a kurzusra'
  })
  @ApiUnauthorizedResponse({
    description:'Ha nincs társítva felhasználói token'
  })
  @ApiNotFoundResponse({
    description:'Ha nincs kurzus a társított azonosítóval'
  })
  create(@Request() req, @Body() id) {
    return this.appliedUserService.create(req.user, id.id);
  }

  @Get('list')
  @ApiOperation({
    description:'Ki listázza az összes felhasználót és a hozzá tartozó kurzust'
  })
  findAll(){
    return this.appliedUserService.findAll();
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('isJoined/:id')
  @ApiOperation({
    description:'Ellenörzi hogy a felhasználó csatlakozva van-e a kurzusra'
  })
  @ApiParam({
    name:'id',
    description:'A kurzus azonosítója'
  })
  @ApiUnauthorizedResponse({
    description:'Ha nincs társítva felhasználói token'
  })
  CheckUser(@Request() req ,  @Param('id') id : string){
    return this.appliedUserService.isAlreadyJoined(req.user, +id)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.appliedUserService.findOne(+id);
  // }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  @ApiOperation({
    description:'Ki keresi a felhasználó kurzusait amire jelentkezett'
  })
  @ApiUnauthorizedResponse({
    description:'Ha nincs társítva felhasználói token'
  })
  findAllCourseByUser(@Request() req){
    return this.appliedUserService.findAllCourseByUser(req.user)
  }

}

