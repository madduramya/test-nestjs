import { Test, TestingModule } from '@nestjs/testing';
import { GptsessionService } from './gptsession.service';

describe('GptsessionService', () => {
  let service: GptsessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptsessionService],
    }).compile();

    service = module.get<GptsessionService>(GptsessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
