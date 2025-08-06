import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity";

@Entity()
export class AstroProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    zodiac: string;

    @Column({ type: 'date' })
    birthDate: Date;

    @ManyToOne(() => Customer, customer => customer.astroProfiles)
    customer: Customer;
}