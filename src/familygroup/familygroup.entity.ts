import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { FamilyGroupUser } from '../familygroupuser/familygroupuser.entity';

@Entity()
export class FamilyGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => FamilyGroupUser, fgu => fgu.familyGroup)
  familyGroupUsers: FamilyGroupUser[];
}
