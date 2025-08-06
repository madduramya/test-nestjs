import { Test, TestingModule } from '@nestjs/testing';
import { AstroprofileService } from './astroprofile.service';

describe('AstroprofileService', () => {
  let service: AstroprofileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstroprofileService],
    }).compile();

    service = module.get<AstroprofileService>(AstroprofileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
