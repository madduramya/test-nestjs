import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Address } from '../address/address.entity';
import { Country } from '../country/country.entity';
import { State } from '../state/state.entity';
import { City } from '../city/city.entity';
import { Pincode } from '../pincode/pincode.entity';
import { GeoLocation } from '../geolocation/geo-location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Country,
      State,
      City,
      Pincode,
      GeoLocation,
    ]),
  ],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
