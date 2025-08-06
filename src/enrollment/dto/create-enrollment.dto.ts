import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateEnrollmentDto {
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsNumber()
  @IsNotEmpty()
  serviceProviderId: number;

  @IsDateString()
  @IsNotEmpty()
  enrollmentDate: string;

  @IsOptional()
  @IsString()
  careType?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  status?: string; // Optional, default is 'pending'

  @IsOptional()
  @IsBoolean()
  approvedByProvider?: boolean;

  @IsOptional()
  @IsDateString()
  approvedAt?: string;

  @IsOptional()
  @IsDateString()
  endedAt?: string;
}
