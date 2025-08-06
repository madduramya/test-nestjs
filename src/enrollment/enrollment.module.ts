import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './enrollment.entity';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { Customer } from 'src/customer/customer.entity';
import { ServiceProvider } from 'src/service-provider/serviceprovider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment, Customer, ServiceProvider])],
  providers: [EnrollmentService],
  controllers: [EnrollmentController],
  exports: [EnrollmentService]
})
export class EnrollmentModule {}
