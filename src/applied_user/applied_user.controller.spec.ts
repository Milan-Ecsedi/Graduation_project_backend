import { Test, TestingModule } from '@nestjs/testing';
import { AppliedUserController } from './applied_user.controller';
import { AppliedUserService } from './applied_user.service';

describe('AppliedUserController', () => {
  let controller: AppliedUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliedUserController],
      providers: [AppliedUserService],
    }).compile();

    controller = module.get<AppliedUserController>(AppliedUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
