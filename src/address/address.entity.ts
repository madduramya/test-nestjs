import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { GeoLocation } from '../geolocation/geo-location.entity';
import { Pincode } from '../pincode/pincode.entity';
import { ServiceProvider } from '../service-provider/serviceprovider.entity';
import { City } from 'src/city/city.entity';
import { State } from 'src/state/state.entity';
import { Country } from 'src/country/country.entity';


@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  line1: string;

  @Column({ nullable: true })
  line2?: string;

  @Column({ nullable: true })
  landmark?: string;

  @OneToOne(() => GeoLocation, { cascade: true, eager: true })
  @JoinColumn()
  geoLocation: GeoLocation;

  @ManyToOne(() => Pincode, pincode => pincode.addresses)
  @JoinColumn()
  pincode: Pincode;

  @OneToOne(() => ServiceProvider, sp => sp.address)
  serviceProvider: ServiceProvider

  @ManyToOne(() => Country, { eager: true })
  @JoinColumn()
  country: Country;

  @ManyToOne(() => State, { eager: true })
  @JoinColumn()
  state: State;

  @ManyToOne(() => City, { eager: true })
  @JoinColumn()
  city: City;

}
