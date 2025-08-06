import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { State } from "../state/state.entity";
import { Pincode } from "../pincode/pincode.entity";

@Entity()
@Unique(['name', 'state'])
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, state => state.cities)
  state: State;

  @ManyToMany(() => Pincode, pincode => pincode.cities, { cascade: true })
  @JoinTable()
  pincodes: Pincode[];
  
}

