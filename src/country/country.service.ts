import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { CreateCountryDto } from '../country/dto/create-country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepo: Repository<Country>,
  ) {}

  async create(dto: CreateCountryDto): Promise<Country> {
  const existing = await this.countryRepo.findOne({ where: { name: dto.name } });
  if (existing) return existing;
  const country = this.countryRepo.create(dto);
  return this.countryRepo.save(country);
}


  findAll(): Promise<Country[]> {
    return this.countryRepo.find({ relations: ['states'] });
  }

  async findOne(id: number): Promise<Country> {
      const country = await this.countryRepo.findOne({ where: { id } });
        if (!country) throw new NotFoundException('City not found');
        return country;
      }
}
