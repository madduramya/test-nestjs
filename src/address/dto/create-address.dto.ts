import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  line1: string;

  @IsOptional()
  @IsString()
  line2?: string;

  @IsOptional()
  @IsString()
  landmark?: string;

  @IsNotEmpty()
  @IsNumber()
  countryId: number;

  @IsNotEmpty()
  @IsNumber()
  stateId: number;

  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @IsNotEmpty()
  @IsNumber()
  pincodeId: number;

  @IsOptional()
  @IsNumber()
  geoLocationId?: number;
}
