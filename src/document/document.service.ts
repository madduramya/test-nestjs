import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { NotFoundException } from '@nestjs/common';
import { ServiceProvider } from 'src/service-provider/serviceprovider.entity';
import { HealthRecord } from 'src/healthrecord/healthrecord.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private documentRepo: Repository<Document>,
    @InjectRepository(ServiceProvider)
    private serviceProviderRepo: Repository<ServiceProvider>,
    @InjectRepository(HealthRecord)
    private healthRecordRepo: Repository<HealthRecord>
  ) {}

  async create(dto: CreateDocumentDto) {
  const document = new Document();
  document.documentType = dto.documentType;
  document.fileUrl = dto.fileUrl;

  if (dto.serviceProviderId) {
    const provider = await this.serviceProviderRepo.findOneBy({ id: dto.serviceProviderId });
    if (!provider) throw new NotFoundException('Service Provider not found');
    document.serviceProvider = provider;
  }

  if (dto.healthRecordId) {
    const healthRecord = await this.healthRecordRepo.findOneBy({ id: dto.healthRecordId });
    if (!healthRecord) throw new NotFoundException('Health Record not found');
    document.healthRecord = healthRecord;
  }

  return this.documentRepo.save(document);
}


  findAll() {
    return this.documentRepo.find();
  }

  findOne(id: number) {
    return this.documentRepo.findOneBy({ id });
  }

//   async remove(id: number) {
//     const doc = await this.findOne(id);
//     return this.documentRepo.remove(doc);
//   }
}
