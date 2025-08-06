import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { State } from '../state/state.entity';
import { Pincode } from '../pincode/pincode.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn()
  state: State;

  @ManyToOne(() => Pincode, (pincode) => pincode.cities)
  @JoinColumn()
  pincode: Pincode;
}
