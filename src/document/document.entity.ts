import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";
import { ServiceProvider } from "../service-provider/serviceprovider.entity";
import { HealthRecord } from "src/healthrecord/healthrecord.entity";

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documentType: string;

    @Column()
    fileUrl: string;

    @ManyToOne(() => ServiceProvider, sp => sp.document)
    serviceProvider: ServiceProvider;

    @ManyToOne(() => HealthRecord, (hr) => hr.document)
    healthRecord: HealthRecord;

}