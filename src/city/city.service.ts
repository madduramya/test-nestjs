import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { State } from 'src/state/state.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepo: Repository<City>,
        @InjectRepository(State)
        private readonly stateRepo: Repository<State>
    ) {}

    async create(dto: CreateCityDto): Promise<City> {
    const state = await this.stateRepo.findOne({ where: { id: dto.stateId } });

    if (!state) {
        throw new NotFoundException(`State with id ${dto.stateId} not found`);
    }

    const city = this.cityRepo.create({
        name: dto.name,
        state: state
    });

    return await this.cityRepo.save(city);
    }

    async findAll(): Promise<City[]> {
        return this.cityRepo.find();
    }

    async search(query: string): Promise<City[]> {
    return await this.cityRepo
        .createQueryBuilder('city')
        .leftJoinAndSelect('city.state', 'state')
        .where('LOWER(city.name) LIKE LOWER(:query)', { query: `%${query}%` })
        .getMany();
    }

    async findOne(id: number): Promise<City> {
        const city = await this.cityRepo.findOne({ where: { id }});
        if(!city) throw new NotFoundException(`City with ID ${id} not found`);
        return city;
    }
}
