import { Test, TestingModule } from '@nestjs/testing';
import { HealthrecordinfoController } from './healthrecordinfo.controller';

describe('HealthrecordinfoController', () => {
  let controller: HealthrecordinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthrecordinfoController],
    }).compile();

    controller = module.get<HealthrecordinfoController>(HealthrecordinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
