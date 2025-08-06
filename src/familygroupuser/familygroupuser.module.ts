import { Module } from '@nestjs/common';
import { FamilygroupuserController } from './familygroupuser.controller';
import { FamilygroupuserService } from './familygroupuser.service';
import { FamilyGroupUser } from '../familygroupuser/familygroupuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyGroupUser])],
  controllers: [FamilygroupuserController],
  providers: [FamilygroupuserService],
  exports: [FamilygroupuserService]
})
export class FamilygroupuserModule {}
