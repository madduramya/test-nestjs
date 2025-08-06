import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City } from '../city/city.entity';
import { State } from '../state/state.entity';
import { Pincode } from '../pincode/pincode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, State, Pincode])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
