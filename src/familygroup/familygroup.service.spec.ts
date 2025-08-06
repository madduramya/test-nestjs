import { Test, TestingModule } from '@nestjs/testing';
import { FamilygroupService } from './familygroup.service';

describe('FamilygroupService', () => {
  let service: FamilygroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilygroupService],
    }).compile();

    service = module.get<FamilygroupService>(FamilygroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
