import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { QueryBuilder, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { BadRequestException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
@Injectable()
export class CustomerService {
    constructor(
      @InjectRepository(Customer)
      private readonly customerRepository: Repository<Customer>,
    ) {}

  async create(dto: CreateCustomerDto): Promise<Customer> {
  const existing = await this.customerRepository.findOne({
    where: { 
      email: dto.email,
      firstName: dto.firstName, 
      lastName: dto.lastName
    },
  });
  if (existing) {
    throw new BadRequestException('Customer with this email, firstName, lastName already exists');
  }

  const customer = this.customerRepository.create(dto);
    return this.customerRepository.save(customer);
  }


  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      relations: ['familyGroupUsers', 'healthInfos', 'astroProfiles', 'gptSessions', 'enrollments'], 
    });

    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }

  async search(query: string): Promise<Customer[]> {
  return await this.customerRepository
    .createQueryBuilder('customer')
    .where('LOWER(customer.firstName) LIKE LOWER(:query)', { query: `%${query}%` })
    .orWhere('LOWER(customer.lastName) LIKE LOWER(:query)', { query: `%${query}%` })
    .orWhere('LOWER(customer.email) LIKE LOWER(:query)', { query: `%${query}%` })
    .getMany();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async update(id: number, dto: UpdateCustomerDto): Promise<Customer> {
  const updated = await this.customerRepository.preload({
    id,
    ...dto,
  });

  if (!updated) {
    throw new NotFoundException(`Customer with ID ${id} not found`);
  }
    return this.customerRepository.save(updated);
  }

}

