import { Module } from '@nestjs/common';
import { PincodeController } from './pincode.controller';
import { PincodeService } from './pincode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pincode } from './pincode.entity';
import { City } from 'src/city/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pincode, City])],
  controllers: [PincodeController],
  providers: [PincodeService],
  exports: [PincodeService]
})
export class PincodeModule {}
