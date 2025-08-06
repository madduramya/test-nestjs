import { Test, TestingModule } from '@nestjs/testing';
import { AstroprofileController } from './astroprofile.controller';

describe('AstroprofileController', () => {
  let controller: AstroprofileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstroprofileController],
    }).compile();

    controller = module.get<AstroprofileController>(AstroprofileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
