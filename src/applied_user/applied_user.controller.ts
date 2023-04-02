import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.appliedUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliedUserService.findOne(+id);
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
