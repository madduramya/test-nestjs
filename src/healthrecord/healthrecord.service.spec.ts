import { Test, TestingModule } from '@nestjs/testing';
import { HealthrecordService } from './healthrecord.service';

describe('HealthrecordService', () => {
  let service: HealthrecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthrecordService],
    }).compile();

    service = module.get<HealthrecordService>(HealthrecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
