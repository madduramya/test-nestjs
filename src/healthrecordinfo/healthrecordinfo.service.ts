import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthRecordInfo } from './healthrecordinfo.entity';
import { CreateHealthRecordInfoDto } from '../healthrecordinfo/dto/create-healthrecordinfo.dto';

@Injectable()
export class HealthRecordInfoService {
  constructor(
    @InjectRepository(HealthRecordInfo)
    private readonly hriRepo: Repository<HealthRecordInfo>
  ) {}

  async create(dto: CreateHealthRecordInfoDto): Promise<HealthRecordInfo> {
  const record = this.hriRepo.create({
    bloodGroup: dto.bloodGroup,
    heightCm: dto.heightCm,
    weightKg: dto.weightKg,
    medicalConditions: dto.medicalConditions,
    emergencyContactName: dto.emergencyContactName,
    emergencyContactPhone: dto.emergencyContactPhone,
    lastCheckupDate: dto.lastCheckupDate,
    notes: dto.notes,
    customer: { id: dto.customerId } as any,
  });

  return this.hriRepo.save(record);
}


  async findAll(): Promise<HealthRecordInfo[]> {
    return this.hriRepo.find({ relations: ['customer', 'healthRecords'] });
  }

  async findOne(id: number): Promise<HealthRecordInfo> {
    const record = await this.hriRepo.findOne({
      where: { id },
      relations: ['customer', 'healthRecords'],
    });
    if (!record) throw new NotFoundException(`HealthRecordInfo #${id} not found`);
    return record;
  }

//   async update(id: number, dto: UpdateHealthRecordInfoDto): Promise<HealthRecordInfo> {
//     const record = await this.findOne(id);
//     Object.assign(record, dto);
//     if (dto.customerId) {
//       record.customer = { id: dto.customerId } as any;
//     }
//     return this.hriRepo.save(record);
//   }

//   async remove(id: number): Promise<void> {
//     const result = await this.hriRepo.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`HealthRecordInfo #${id} not found`);
//     }
//   }
}
