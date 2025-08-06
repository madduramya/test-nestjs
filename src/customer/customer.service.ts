import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { BadRequestException } from '@nestjs/common';

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

