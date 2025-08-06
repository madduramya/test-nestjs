import {
  IsString,
  IsOptional,
  IsEmail,
  IsBoolean,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateServiceProviderDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  serviceType: string;

  @IsString()
  @IsOptional()
  licenseNumber?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  experienceYears?: number;

  @IsBoolean()
  availabilityStatus: boolean;

  @IsNumber()
  rating: number;

  @IsOptional()
  @IsNumber()
  addressId?: number;

  @IsNumber()
  @IsOptional()
  documentId?: number;
}
