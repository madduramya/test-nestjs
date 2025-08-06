import { 
  Entity, 
  Unique, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  OneToMany 
} from "typeorm";
import { Country } from "../country/country.entity";
import { City } from "../city/city.entity";

@Entity()
@Unique(['name', 'country'])
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, country => country.states)
  country: Country;

  @OneToMany(() => City, city => city.state)
  cities: City[];
}
