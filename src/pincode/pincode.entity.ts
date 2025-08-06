import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from '../city/city.entity';
import { Address } from 'src/address/address.entity';

@Entity()
export class Pincode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  code: string;

  @OneToMany(() => City, (city) => city.pincode) 
  cities: City[];

  @OneToMany(() => Address, address => address.pincode)
  addresses: Address[];
}
