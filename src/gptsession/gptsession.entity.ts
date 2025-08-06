import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity";

@Entity()
export class GPTSession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    query: string;

    @Column()
    response: string;

    @ManyToOne(() => Customer, customer => customer.gptSessions)
    customer: Customer;
}