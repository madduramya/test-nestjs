import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Document } from '../document/document.entity';
import { Enrollment } from '../enrollment/enrollment.entity';

@Entity()
export class ServiceProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  serviceType: string;

  @Column({ nullable: true })
  licenseNumber: string;

  @Column({ type: 'int', default: 0 })
  experienceYears: number;

  @Column({ default: true })
  availabilityStatus: boolean;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @ManyToOne(() => Address, { eager: true })
  @JoinColumn()
  address?: Address;

  @OneToMany(() => Document, (document) => document.serviceProvider)
  @JoinColumn()
  document: Document;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.serviceProvider)
  enrollments: Enrollment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
