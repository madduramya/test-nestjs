import { Entity, Unique, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { City } from "../city/city.entity";

@Entity()
@Unique(['code', 'city'])
export class Pincode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @ManyToOne(() => City, city => city.pincodes)
  @JoinColumn({ name: 'cityId' })
  city: City;

}