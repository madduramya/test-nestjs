import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pincode } from '../pincode/pincode.entity';
import { CreatePincodeDto } from './dto/create-pincode.dto';
import { City } from '../city/city.entity';

@Injectable()
export class PincodeService {
  constructor(
    @InjectRepository(Pincode)
    private pincodeRepo: Repository<Pincode>,
  ) {}

  async create(dto: CreatePincodeDto): Promise<Pincode> {
  const existing = await this.pincodeRepo.findOne({ where: { code: dto.code } });

  if (existing) {
    throw new Error(`Pincode '${dto.code}' already exists.`);
  }

  const pincode = this.pincodeRepo.create({ code: dto.code });
  return this.pincodeRepo.save(pincode);
}


  findAll(): Promise<Pincode[]> {
    return this.pincodeRepo.find({ relations: ['cities'] });
  }

  async findOne(id: number): Promise<Pincode> {
    const pincode = await this.pincodeRepo.findOne({ where: { id } });
      if (!pincode) throw new NotFoundException('City not found');
      return pincode;
    }
}
