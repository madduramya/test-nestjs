import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pincode } from './pincode.entity';
import { CreatePincodeDto } from './dto/create-pincode.dto';
import { City } from 'src/city/city.entity';

@Injectable()
export class PincodeService {
    constructor(
        @InjectRepository(Pincode)
        private readonly pincodeRepo: Repository<Pincode>,
        @InjectRepository(City)
        private readonly cityRepo: Repository<City>
    ) {}

    async create(dto: CreatePincodeDto): Promise<Pincode> {
    const city = await this.cityRepo.findOne({ where: { id: dto.cityId } });
    if (!city) {
        throw new NotFoundException(`City with id ${dto.cityId} not found`);
    }

    // Check if this code already exists for the city
    const existing = await this.pincodeRepo.findOne({
    where: {
        code: dto.code,
        city: { id: dto.cityId },
        },
        relations: ['city'], // Needed for nested `city.id` lookup
    });

    if (existing) {
        throw new BadRequestException(
        `Pincode '${dto.code}' already exists for this city`
        );
    }

  // ✅ Create and save new pincode
  const pincode = this.pincodeRepo.create({
    code: dto.code,
    city: city,
  });

  return await this.pincodeRepo.save(pincode);
}



    async findAll(): Promise<Pincode[]> {
        return this.pincodeRepo.find();
    }

    async findOne(id: number): Promise<Pincode> {
        const pincode = await this.pincodeRepo.findOne({ where: {id} });
        if(!pincode) throw new NotFoundException(`Pincode with ID ${id} not found`);
        return pincode;
    }
}
