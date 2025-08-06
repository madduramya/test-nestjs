import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pincode } from './pincode.entity';
import { CreatePincodeDto } from './dto/create-pincode.dto';

@Injectable()
export class PincodeService {
    constructor(
        @InjectRepository(Pincode)
        private readonly pincodeRepo: Repository<Pincode>,
    ) {}

    async create(dto: CreatePincodeDto): Promise<Pincode> {
        const existing = await this.pincodeRepo.findOne({ where: {code: dto.code}})
        if (existing) {
            throw new BadRequestException(`Pincode already exists`);
        }

        const pincode = this.pincodeRepo.create(dto);
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
