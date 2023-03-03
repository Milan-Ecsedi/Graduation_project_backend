import { PartialType } from '@nestjs/mapped-types';
import { CreateAppliedUserDto } from './create-applied_user.dto';

export class UpdateAppliedUserDto extends PartialType(CreateAppliedUserDto) {}
