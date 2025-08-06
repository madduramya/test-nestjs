import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm";
import { Country } from "src/country/country.entity";
import { State } from "src/state/state.entity";
import { City } from "src/city/city.entity";
import { Pincode } from "src/pincode/pincode.entity";
import { GeoLocation } from "src/geolocation/geo-location.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column({ nullable: true })
  landmark: string;

  @ManyToOne(() => Country)
  country: Country;

  @ManyToOne(() => State )
  state: State;

  @ManyToOne(() => City)
  city: City;

  @ManyToOne(() => Pincode)
  pincode: Pincode;

  @OneToOne(() => GeoLocation, geo => geo.address)
  geoLocation: GeoLocation;

}
