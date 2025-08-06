import { Module } from '@nestjs/common';
import { PincodeController } from './pincode.controller';
import { PincodeService } from './pincode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pincode } from './pincode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pincode])],
  controllers: [PincodeController],
  providers: [PincodeService],
  exports: [PincodeService]
})
export class PincodeModule {}
