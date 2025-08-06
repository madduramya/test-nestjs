import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { FamilyGroup } from '../familygroup/familygroup.entity';
import { Customer } from '../customer/customer.entity';

@Entity()
export class FamilyGroupUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  @Column()
  relationToCustomer: string;

  @ManyToOne(() => FamilyGroup, fg => fg.familyGroupUsers, { onDelete: 'CASCADE' })
  familyGroup: FamilyGroup;

  @ManyToOne(() => Customer, customer => customer.familyGroupUsers, { onDelete: 'CASCADE' })
  customer: Customer;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
