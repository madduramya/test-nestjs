import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateAstroProfileDto {
  @IsString()
  zodiac: string;

  @IsDateString()
  birthDate: Date;

  @IsInt()
  customerId: number;
}
