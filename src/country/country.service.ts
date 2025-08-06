import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../country/country.entity';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
//import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,
  ) {}

  // Create or return existing country
  async create(dto: CreateCountryDto): Promise<Country> {
    const existing = await this.countryRepo.findOne({ where: { name: dto.name } });
    if (existing) {
      throw new NotFoundException(`Country already exists`)
    }

    const country = this.countryRepo.create(dto);
    return await this.countryRepo.save(country);
  }

  // Get all countries
  async findAll(): Promise<Country[]> {
    return this.countryRepo.find();
  }

  // Get single country
  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepo.findOne({ where: { id } });
    if (!country) throw new NotFoundException(`Country with ID ${id} not found`);
    return country;
  }

  // Update country
//   async update(id: number, dto: UpdateCountryDto): Promise<Country> {
//     const country = await this.countryRepo.preload({ id, ...dto });
//     if (!country) throw new NotFoundException(`Country with ID ${id} not found`);
//     return await this.countryRepo.save(country);
//   }

//   // Delete country
//   async remove(id: number): Promise<{ message: string }> {
//     const result = await this.countryRepo.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Country with ID ${id} not found`);
//     }
//     return { message: `Country with ID ${id} deleted` };
//   }
}
