import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeoLocationService } from './geolocation.service';
import { GeoLocationController } from './geolocation.controller';
import { GeoLocation } from '../geolocation/geo-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeoLocation])],
  controllers: [GeoLocationController],
  providers: [GeoLocationService],
  exports: [GeoLocationService],
})
export class GeoLocationModule {}
