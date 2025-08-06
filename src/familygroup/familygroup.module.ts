// src/familygroup/familygroup.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyGroup } from 'src/familygroup/familygroup.entity';
import { FamilyGroupService } from './familygroup.service';
import { FamilyGroupController } from './familygroup.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyGroup])],
  providers: [FamilyGroupService],
  controllers: [FamilyGroupController],
  exports: [FamilyGroupService],
})
export class FamilyGroupModule {}
