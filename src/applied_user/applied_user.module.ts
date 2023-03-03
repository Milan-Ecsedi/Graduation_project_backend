import { Module } from '@nestjs/common';
import { AppliedUserService } from './applied_user.service';
import { AppliedUserController } from './applied_user.controller';

@Module({
  controllers: [AppliedUserController],
  providers: [AppliedUserService]
})
export class AppliedUserModule {}
