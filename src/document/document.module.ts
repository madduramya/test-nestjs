import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './document.entity';
import { ServiceProvider } from 'src/service-provider/serviceprovider.entity';
import { HealthRecord } from 'src/healthrecord/healthrecord.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Document, ServiceProvider, HealthRecord])],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports: [DocumentService]
})
export class DocumentModule {}
