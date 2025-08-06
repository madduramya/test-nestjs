import { Test, TestingModule } from '@nestjs/testing';
import { FamilygroupController } from './familygroup.controller';

describe('FamilygroupController', () => {
  let controller: FamilygroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilygroupController],
    }).compile();

    controller = module.get<FamilygroupController>(FamilygroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
