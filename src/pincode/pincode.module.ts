import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PincodeService } from './pincode.service';
import { PincodeController } from './pincode.controller';
import { Pincode } from '../pincode/pincode.entity';
import { City } from '../city/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pincode, City])],
  controllers: [PincodeController],
  providers: [PincodeService],
  exports: [PincodeService],
})
export class PincodeModule {}
