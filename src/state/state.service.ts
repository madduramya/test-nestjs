import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { State } from './state.entity';
import { CreateStateDto } from './dto/create-state.dto';
import { Country } from 'src/country/country.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepo: Repository<State>,

    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,
  ) {}

  // Create state
  async create(dto: CreateStateDto): Promise<State> {
    const country = await this.countryRepo.findOneBy({ id: dto.countryId });
    if (!country) {
      throw new NotFoundException('Country not found');
    }

    const existing = await this.stateRepo.findOne({
      where: {
        name: ILike(dto.name), // case-insensitive check
        country: { id: dto.countryId },
      },
    });

    if (existing) {
      throw new ConflictException('State with this name already exists in the selected country');
    }

    const state = this.stateRepo.create({ name: dto.name, country });
    return this.stateRepo.save(state);
  }

  // Get all states
  async findAll(): Promise<State[]> {
    return this.stateRepo.find({ relations: ['country'] });
  }

  // Get one state
  async findOne(id: number): Promise<State> {
    const state = await this.stateRepo.findOne({ where: { id }, relations: ['country'] });
    if (!state) {
      throw new NotFoundException('State not found');
    }
    return state;
  }

  // Update state
  // async update(id: number, dto: UpdateStateDto): Promise<State> {
  //   const state = await this.stateRepo.findOneBy({ id });
  //   if (!state) {
  //     throw new NotFoundException('State not found');
  //   }

  //   const duplicate = await this.stateRepo.findOne({
  //     where: {
  //       name: ILike(dto.name),
  //       country: { id: dto.countryId },
  //     },
  //   });

  //   if (duplicate && duplicate.id !== id) {
  //     throw new ConflictException('Another state with this name already exists in the selected country');
  //   }

  //   const country = await this.countryRepo.findOneBy({ id: dto.countryId });
  //   if (!country) {
  //     throw new NotFoundException('Country not found');
  //   }

  //   state.name = dto.name;
  //   state.country = country;

  //   return this.stateRepo.save(state);
  // }

  // // Delete state
  // async remove(id: number): Promise<void> {
  //   const result = await this.stateRepo.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`State with ID ${id} not found`);
  //   }
  // }
}
