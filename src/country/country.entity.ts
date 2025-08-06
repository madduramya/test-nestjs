import { Entity, Unique, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { State } from "../state/state.entity";

@Entity()
@Unique(['name'])
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => State, state => state.country)
  states: State[];
}
