import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthRecordInfo } from './healthrecordinfo.entity';
import { HealthRecordInfoService } from './healthrecordinfo.service';
import { HealthRecordInfoController } from './healthrecordinfo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HealthRecordInfo])],
  providers: [HealthRecordInfoService],
  controllers: [HealthRecordInfoController],
  exports: [HealthRecordInfoService]
})
export class HealthRecordInfoModule {}
