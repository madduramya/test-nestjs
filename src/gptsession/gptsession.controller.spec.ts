import { Test, TestingModule } from '@nestjs/testing';
import { GptsessionController } from './gptsession.controller';

describe('GptsessionController', () => {
  let controller: GptsessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptsessionController],
    }).compile();

    controller = module.get<GptsessionController>(GptsessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
