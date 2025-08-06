import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepo: Repository<City>
    ) {}

    async create(dto: CreateCityDto): Promise<City> {
        const existing = await this.cityRepo.findOne({ where: { name: dto.name }});
        if (existing) {
            throw new BadRequestException(`City already exist`);
        };

        const city = this.cityRepo.create(dto);
        return await this.cityRepo.save(city);
    }

    async findAll(): Promise<City[]> {
        return this.cityRepo.find();
    }

    async findOne(id: number): Promise<City> {
        const city = await this.cityRepo.findOne({ where: { id }});
        if(!city) throw new NotFoundException(`City with ID ${id} not found`);
        return city;
    }
}
