import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';
import { CreateStateDto } from './dto/create-state.dto';
import { Country } from '../country/country.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private stateRepo: Repository<State>,
    @InjectRepository(Country)
    private countryRepo: Repository<Country>,
  ) {}

  async create(dto: CreateStateDto): Promise<State> {
    const country = await this.countryRepo.findOneByOrFail({ id: dto.countryId });
    const state = this.stateRepo.create({ name: dto.name, country });
    return this.stateRepo.save(state);
  }

  findAll(): Promise<State[]> {
    return this.stateRepo.find({ relations: ['country', 'cities'] });
  }
  
  async findOne(id: number): Promise<State> {
      const state = await this.stateRepo.findOne({ where: { id } });
        if (!state) throw new NotFoundException('City not found');
        return state;
      }
}

