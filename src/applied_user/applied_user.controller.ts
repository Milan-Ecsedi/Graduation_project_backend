import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppliedUserService } from './applied_user.service';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';

@Controller('applied-user')
export class AppliedUserController {
  constructor(private readonly appliedUserService: AppliedUserService) {}
  
  @UseGuards(AuthGuard('bearer'))
  @Post('join')
  create(@Request() req, @Body() id) {
    return this.appliedUserService.create(req.user, id.id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('findCourseByUser')
  findAll(@Request() req){
    return this.appliedUserService.findAll(req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('isJoined/:id')
  CheckUser(@Request() req ,  @Param('id') id : string){
    return this.appliedUserService.isAlreadyJoined(req.user, +id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliedUserService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('applications')
  findAllCourseByUser(@Request() req){
    return this.appliedUserService.findAllCourseByUser(req.user)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppliedUserDto: UpdateAppliedUserDto) {
    return this.appliedUserService.update(+id, updateAppliedUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appliedUserService.remove(+id);
  }
}
