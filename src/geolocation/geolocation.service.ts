import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeoLocation } from '../geolocation/geo-location.entity';
import { CreateGeoLocationDto } from './dto/create-geolocation.dto';


@Injectable()
export class GeoLocationService {
  constructor(
    @InjectRepository(GeoLocation)
    private readonly geoRepo: Repository<GeoLocation>,
  ) {}

  create(dto: CreateGeoLocationDto): Promise<GeoLocation> {
    const location = this.geoRepo.create(dto);
    return this.geoRepo.save(location);
  }

  findAll(): Promise<GeoLocation[]> {
    return this.geoRepo.find();
  }

  async findOne(id: number): Promise<GeoLocation> {
    const location = await this.geoRepo.findOneBy({ id });
    if (!location) throw new NotFoundException('GeoLocation not found');
    return location;
  }

//   async update(id: number, dto: UpdateGeoLocationDto): Promise<GeoLocation> {
//     const location = await this.findOne(id);
//     Object.assign(location, dto);
//     return this.geoRepo.save(location);
//   }

//   async remove(id: number): Promise<void> {
//     const result = await this.geoRepo.delete(id);
//     if (result.affected === 0) throw new NotFoundException('GeoLocation not found');
//   }
}
