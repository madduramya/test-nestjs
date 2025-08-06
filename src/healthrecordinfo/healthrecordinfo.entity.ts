import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity } from "typeorm";
import { Customer } from "../customer/customer.entity";
import { HealthRecord } from "../healthrecord/healthrecord.entity";

@Entity()
export class HealthRecordInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bloodGroup: string;

    @Column()
    customerId: number;

    @Column()
    heightCm: number;

    @Column()
    weightKg: number;

    @Column()
    medicalConditions?: string;

    @Column()
    emergencyContactName?: string;

    @Column()
    emergencyContactPhone?: string;

    @Column()
    lastCheckupDate?: Date;

    @Column()
    notes?: string;

    @ManyToOne(() => Customer, customer => customer.healthInfos)
    customer: Customer;

    @OneToMany(() => HealthRecord, hr => hr.healthRecordInfo)
    healthRecords: HealthRecord[];

}