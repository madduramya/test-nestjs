import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { State } from '../state/state.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => State, state => state.country)
  states: State[];
}
