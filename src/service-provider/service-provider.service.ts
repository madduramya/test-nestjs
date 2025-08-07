import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceProvider } from '../service-provider/serviceprovider.entity';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { Address } from '../address/address.entity';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { ConflictException } from '@nestjs/common';

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

    if (dto.addressId) {
      const address = await this.addressRepo.findOne({ where: { id: dto.addressId } });
      if (!address) throw new NotFoundException('Address not found');
      serviceProvider.address = address;
    }

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

  async search(query: string): Promise<ServiceProvider[]> {
    return await this.serviceProviderRepo
      .createQueryBuilder('provider')
      .where('LOWER(provider.name) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(provider.email) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(provider.serviceType) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('provider.phone LIKE :query', { query: `%${query}%` })
      .getMany();
  }

  async update(id: number, dto: UpdateServiceProviderDto): Promise<ServiceProvider> {
  const existing = await this.serviceProviderRepo.findOne({ where: { id } });

  if (!existing) {
    throw new NotFoundException(`ServiceProvider with id ${id} not found`);
  }

  // Only check for email conflict if email is being changed
  if (dto.email && dto.email !== existing.email) {
    const emailTaken = await this.serviceProviderRepo.findOne({ where: { email: dto.email } });
    if (emailTaken) {
      throw new ConflictException(`Email ${dto.email} already exists`);
    }
  }

  Object.assign(existing, dto);
  return await this.serviceProviderRepo.save(existing);
}



  // async remove(id: number): Promise<void> {
  //   const result = await this.serviceProviderRepo.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException('Service Provider not found');
  //   }
  // }
}
