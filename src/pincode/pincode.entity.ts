import { Entity, Unique, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { City } from "../city/city.entity";

@Entity()
@Unique(['code'])
export class Pincode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @ManyToMany(() => City, city => city.pincodes)
  cities: City;
}
