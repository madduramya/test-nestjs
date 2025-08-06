import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthRecord } from 'src/healthrecord/healthrecord.entity';
import { CreateHealthRecordDto } from './dto/create-healthrecord.dto';

@Injectable()
export class HealthRecordService {
  constructor(
    @InjectRepository(HealthRecord)
    private readonly hrRepo: Repository<HealthRecord>
  ) {}

 async create(dto: CreateHealthRecordDto): Promise<HealthRecord> {
  const existing = await this.hrRepo.findOne({
    where: {
      healthRecordInfo: { id: dto.healthRecordInfoId },
    },
    relations: ['healthRecordInfo'],
  });

  if (existing) {
    throw new Error('Duplicate health record already exists for this diagnosis and date.');
  }

  const health = this.hrRepo.create({
    diagnosis: dto.diagnosis,
    date: dto.date,
    treatment: dto.treatment,
    doctorName: dto.doctorName,
    hospitalName: dto.hospitalName,
    prescription: dto.prescription,
    notes: dto.notes,
    bloodPressure:dto.bloodPressure,
    bloodSugar: dto.bloodSugar,
    healthRecordInfo: { id: dto.healthRecordInfoId } as any,
  });

  return this.hrRepo.save(health);
}



  async findAll(): Promise<HealthRecord[]> {
    return this.hrRepo.find({ relations: ['healthRecordInfo'] });
  }

  async findOne(id: number): Promise<HealthRecord> {
    const health = await this.hrRepo.findOne({
      where: { id },
      relations: ['healthRecordInfo'],
    });
    if (!health) throw new NotFoundException(`HealthRecord ${id} not found`);
    return health;
  }
}
