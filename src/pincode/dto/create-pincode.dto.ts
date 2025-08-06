import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePincodeDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  cityId: number;
}
