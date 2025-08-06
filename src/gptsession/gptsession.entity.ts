import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Customer } from '../customer/customer.entity';

@Entity()
export class GPTSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prompt: string; // user question

  @Column('text')
  response: string; // GPT model response

  @ManyToOne(() => Customer, (customer) => customer.gptSessions, { onDelete: 'CASCADE' })
  customer: Customer;

  @CreateDateColumn()
  createdAt: Date;
}
