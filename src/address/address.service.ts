import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../address/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { Country } from '../country/country.entity';
import { State } from '../state/state.entity';
import { City } from '../city/city.entity';
import { Pincode } from '../pincode/pincode.entity';
import { GeoLocation } from '../geolocation/geo-location.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private addressRepo: Repository<Address>,
    @InjectRepository(Country) private countryRepo: Repository<Country>,
    @InjectRepository(State) private stateRepo: Repository<State>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(Pincode) private pincodeRepo: Repository<Pincode>,
    @InjectRepository(GeoLocation) private geoRepo: Repository<GeoLocation>,
  ) {}

  async create(dto: CreateAddressDto): Promise<Address> {
    const address = new Address();
    address.street = dto.street,
    address.country = await this.countryRepo.findOneByOrFail({ id: dto.countryId });
    address.state = await this.stateRepo.findOneByOrFail({ id: dto.stateId });
    address.city = await this.cityRepo.findOneByOrFail({ id: dto.cityId });
    address.pincode = await this.pincodeRepo.findOneByOrFail({ id: dto.pincodeId });

    if (dto.geoLocationId) {
      address.geoLocation = await this.geoRepo.findOneByOrFail({ id: dto.geoLocationId });
    }

    return this.addressRepo.save(address);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepo.find();
  }

  async findOne(id: number): Promise<Address> {
    const address = await this.addressRepo.findOne({ where: { id } });
    if (!address) throw new NotFoundException('Address not found');
    return address;
  }

}
