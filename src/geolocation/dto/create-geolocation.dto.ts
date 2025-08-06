import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGeoLocationDto {
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}
