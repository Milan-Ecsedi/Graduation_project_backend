import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppliedUserService } from './applied_user.service';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';

@Controller('applied-user')
export class AppliedUserController {
  constructor(private readonly appliedUserService: AppliedUserService) {}

  @Post()
  create(@Body() createAppliedUserDto: CreateAppliedUserDto) {
    return this.appliedUserService.create(createAppliedUserDto);
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
