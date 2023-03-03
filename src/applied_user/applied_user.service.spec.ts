import { Test, TestingModule } from '@nestjs/testing';
import { AppliedUserService } from './applied_user.service';

describe('AppliedUserService', () => {
  let service: AppliedUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppliedUserService],
    }).compile();

    service = module.get<AppliedUserService>(AppliedUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
