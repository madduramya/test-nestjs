import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../city/city.entity';
import { State } from '../state/state.entity';
import { Pincode } from '../pincode/pincode.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepo: Repository<City>,
    @InjectRepository(State)
    private stateRepo: Repository<State>,
    @InjectRepository(Pincode)
    private pincodeRepo: Repository<Pincode>,
  ) {}

  async create(dto: CreateCityDto): Promise<City> {
  const existing = await this.cityRepo.findOne({ where: { name: dto.name } });
  if (existing) return existing;

  const city = this.cityRepo.create(dto);
    return this.cityRepo.save(city);
}

  findAll(): Promise<City[]> {
    return this.cityRepo.find({ relations: ['state', 'pincode'] });
  }

  async findOne(id: number): Promise<City> {
  const city = await this.cityRepo.findOne({ where: { id } });
    if (!city) throw new NotFoundException('City not found');
      return city;
    }
  
}
