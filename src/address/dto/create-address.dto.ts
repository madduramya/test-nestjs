import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsOptional()
  @IsString()
  landmark?: string;

  @IsNotEmpty()
  countryId: number;

  @IsNotEmpty()
  stateId: number;

  @IsNotEmpty()
  cityId: number;

  @IsNotEmpty()
  pincodeId: number;

  @IsOptional()
  geoLocationId: number;
}
