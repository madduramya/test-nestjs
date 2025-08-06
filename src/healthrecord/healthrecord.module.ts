import { Module } from '@nestjs/common';
import { HealthrecordController } from './healthrecord.controller';
import { HealthRecordService } from './healthrecord.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthRecord } from 'src/healthrecord/healthrecord.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HealthRecord]),
  ],
  controllers: [HealthrecordController],
  providers: [HealthRecordService],
  exports: [HealthRecordService]
})
export class HealthrecordModule {}
