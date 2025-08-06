import { Test, TestingModule } from '@nestjs/testing';
import { HealthrecordinfoService } from './healthrecordinfo.service';

describe('HealthrecordinfoService', () => {
  let service: HealthrecordinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthrecordinfoService],
    }).compile();

    service = module.get<HealthrecordinfoService>(HealthrecordinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
