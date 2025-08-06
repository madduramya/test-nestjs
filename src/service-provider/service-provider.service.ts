import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceProvider } from '../service-provider/serviceprovider.entity';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { Address } from '../address/address.entity';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectRepository(ServiceProvider)
    private readonly serviceProviderRepo: Repository<ServiceProvider>,

    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
  ) {}

  async create(dto: CreateServiceProviderDto): Promise<ServiceProvider> {
    const serviceProvider = this.serviceProviderRepo.create(dto);

    // if (dto.addressId) {
    //   const address = await this.addressRepo.findOne({ where: { id: dto.addressId } });
    //   if (!address) throw new NotFoundException('Address not found');
    //   serviceProvider.address = address;
    // }

    return this.serviceProviderRepo.save(serviceProvider);
  }

  findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderRepo.find();
  }

  async findOne(id: number): Promise<ServiceProvider> {
    const provider = await this.serviceProviderRepo.findOne({ where: { id } });
    if (!provider) throw new NotFoundException('Service Provider not found');
    return provider;
  }

  // async update(id: number, dto: UpdateServiceProviderDto): Promise<ServiceProvider> {
  //   const provider = await this.findOne(id);

  //   if (dto.addressId) {
  //     const address = await this.addressRepo.findOne({ where: { id: dto.addressId } });
  //     if (!address) throw new NotFoundException('Address not found');
  //     provider.address = address;
  //   }

  //   Object.assign(provider, dto);
  //   return this.serviceProviderRepo.save(provider);
  // }

  // async remove(id: number): Promise<void> {
  //   const result = await this.serviceProviderRepo.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException('Service Provider not found');
  //   }
  // }
}
