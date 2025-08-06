import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Unique } from "typeorm";
import { ServiceProvider } from "src/service-provider/serviceprovider.entity";
import { Customer } from "src/customer/customer.entity";

@Entity()
@Unique(['customer', 'serviceProvider']) 
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.enrollments, { eager: true })
  customer: Customer;

  @ManyToOne(() => ServiceProvider, sp => sp.enrollments, { eager: true })
  serviceProvider: ServiceProvider;

  @Column({ type: 'date' })
  enrollmentDate: Date;

  @Column({ default: 'pending' })
  status: string; 

  @Column({ nullable: true })
  careType: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ default: false })
  approvedByProvider: boolean;

  @Column({ type: 'timestamp', nullable: true })
  approvedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  endedAt: Date;
}
