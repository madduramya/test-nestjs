import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AstroProfile } from 'src/astroprofile/astroprofile.entity';
import { CreateAstroProfileDto } from './dto/create-astroprofile.dto';
import { Customer } from 'src/customer/customer.entity';

@Injectable()
export class AstroProfileService {
  constructor(
    @InjectRepository(AstroProfile)
    private readonly astroRepo: Repository<AstroProfile>
  ) {}

  async create(dto: CreateAstroProfileDto): Promise<AstroProfile> {
    const astro = this.astroRepo.create({
      zodiac: dto.zodiac,
      birthDate: dto.birthDate,
      customer: { id: dto.customerId } as Customer
    });
    return this.astroRepo.save(astro);
  }

  async findAll(): Promise<AstroProfile[]> {
    return this.astroRepo.find({ relations: ['customer'] });
  }

  async findOne(id: number): Promise<AstroProfile> {
    const profile = await this.astroRepo.findOne({
      where: { id },
      relations: ['customer'],
    });
    if (!profile) {
      throw new NotFoundException(`AstroProfile ${id} not found`);
    }
    return profile;
  }
}
