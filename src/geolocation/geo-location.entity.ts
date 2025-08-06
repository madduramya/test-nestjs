import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Address } from 'src/address/address.entity';

@Entity()
export class GeoLocation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('decimal', { precision: 10, scale: 7 })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 7 })
  longitude: number;

  @OneToOne(() => Address, address => address.geoLocation)
  address: Address;
}
