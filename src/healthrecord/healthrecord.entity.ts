import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { HealthRecordInfo } from '../healthrecordinfo/healthrecordinfo.entity';
import { Document } from 'src/document/document.entity';

@Entity()
export class HealthRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diagnosis: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  treatment: string;

  @Column({ nullable: true })
  doctorName: string;

  @Column({ nullable: true })
  hospitalName: string;

  @Column({ nullable: true })
  prescription: string;

  @Column({ nullable: true })
  notes: string;

  @Column()
  bloodPressure: string;

  @Column()
  bloodSugar: string;

  @ManyToOne(() => HealthRecordInfo, (hri) => hri.healthRecords)
  healthRecordInfo: HealthRecordInfo;

  @OneToMany(() => Document, (document) => document.healthRecord)
  document: Document;
}
