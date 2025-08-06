import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvider } from '../service-provider/serviceprovider.entity';
import { Address } from '../address//address.entity';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderController } from './service-provider.controller';
import { Document } from '../document/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceProvider, Address, Document])],
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
