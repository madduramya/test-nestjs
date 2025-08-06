import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
//import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Customer } from '../customer/customer.entity';
import { ServiceProvider } from 'src/service-provider/serviceprovider.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepo: Repository<Enrollment>,

    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,

    @InjectRepository(ServiceProvider)
    private readonly serviceProviderRepo: Repository<ServiceProvider>,
  ) {}

async create(dto: CreateEnrollmentDto): Promise<Enrollment> {
  const customer = await this.customerRepo.findOneBy({ id: dto.customerId });
  if (!customer) throw new NotFoundException('Customer not found');

  const serviceProvider = await this.serviceProviderRepo.findOneBy({
    id: dto.serviceProviderId,
  });
  if (!serviceProvider) throw new NotFoundException('Service Provider not found');

  const exists = await this.enrollmentRepo.findOne({
    where: {
      customer: { id: dto.customerId },
      serviceProvider: { id: dto.serviceProviderId },
    },
  });

  if (exists) {
    throw new ConflictException('Already enrolled');
  }

  const enrollment: Enrollment = this.enrollmentRepo.create({
    customer,
    serviceProvider,
    enrollmentDate: new Date(dto.enrollmentDate),
    status: dto.status ?? 'pending',
    careType: dto.careType,
    notes: dto.notes,
    approvedByProvider: dto.approvedByProvider ?? false,
    approvedAt: dto.approvedAt,
    endedAt: dto.endedAt
  })

  return this.enrollmentRepo.save(enrollment);
}


  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentRepo.find({
      relations: ['customer', 'serviceProvider'],
    });
  }

  async findOne(id: number): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepo.findOne({
      where: { id },
      relations: ['customer', 'serviceProvider'],
    });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    return enrollment;
  }

  // async update(id: number, dto: UpdateEnrollmentDto): Promise<Enrollment> {
  //   const enrollment = await this.findOne(id);

  //   Object.assign(enrollment, {
  //     ...dto,
  //     enrollmentDate: dto.enrollmentDate
  //       ? new Date(dto.enrollmentDate)
  //       : enrollment.enrollmentDate,
  //     approvedAt: dto.approvedAt ? new Date(dto.approvedAt) : enrollment.approvedAt,
  //     endedAt: dto.endedAt ? new Date(dto.endedAt) : enrollment.endedAt,
  //   });

  //   return this.enrollmentRepo.save(enrollment);
  // }

  // async remove(id: number): Promise<void> {
  //   const enrollment = await this.findOne(id);
  //   await this.enrollmentRepo.remove(enrollment);
  // }
}
