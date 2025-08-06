import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FamilyGroupUser } from "../familygroupuser/familygroupuser.entity";
import { HealthRecordInfo } from "../healthrecordinfo/healthrecordinfo.entity";
import { AstroProfile } from "../astroprofile/astroprofile.entity";
import { GPTSession } from "../gptsession/gptsession.entity";
import { Enrollment } from "../enrollment/enrollment.entity";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToMany(() => FamilyGroupUser, fgu => fgu.customer)
    familyGroupUsers: FamilyGroupUser[];

    @OneToMany(() => HealthRecordInfo, hri => hri.customer)
    healthInfos: HealthRecordInfo[];

    @OneToMany(() => AstroProfile, ap => ap.customer)
    astroProfiles: AstroProfile[];

    @OneToMany(() => GPTSession, gpt => gpt.customer)
    gptSessions: GPTSession[];

    @OneToMany(() => Enrollment, e => e.customer)
    enrollments: Enrollment[];
}