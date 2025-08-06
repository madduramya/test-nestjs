import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Country } from '../country/country.entity';
import { City } from '../city/city.entity';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, country => country.states)
  @JoinColumn()
  country: Country;

  @OneToMany(() => City, city => city.state)
  cities: City[];
}
