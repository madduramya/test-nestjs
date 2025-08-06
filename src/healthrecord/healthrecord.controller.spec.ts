import { Test, TestingModule } from '@nestjs/testing';
import { HealthrecordController } from './healthrecord.controller';

describe('HealthrecordController', () => {
  let controller: HealthrecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthrecordController],
    }).compile();

    controller = module.get<HealthrecordController>(HealthrecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
