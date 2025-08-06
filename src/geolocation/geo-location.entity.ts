import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GeoLocation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('decimal', { precision: 10, scale: 7 })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 7 })
  longitude: number;
}
