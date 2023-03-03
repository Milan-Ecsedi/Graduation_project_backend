import { Injectable } from '@nestjs/common';
import { CreateAppliedUserDto } from './dto/create-applied_user.dto';
import { UpdateAppliedUserDto } from './dto/update-applied_user.dto';

@Injectable()
export class AppliedUserService {
  create(createAppliedUserDto: CreateAppliedUserDto) {
    
    return 'This action adds a new appliedUser';
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
