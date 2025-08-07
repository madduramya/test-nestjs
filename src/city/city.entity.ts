import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, ManyToMany, JoinTable, JoinColumn } from "typeorm";
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
  @JoinColumn({ name: 'stateId' })
  state: State;


  @ManyToMany(() => Pincode, pincode => pincode.city, { cascade: true })
  @JoinTable()
  pincodes: Pincode[];
  
}

