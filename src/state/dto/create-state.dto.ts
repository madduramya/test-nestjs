import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateStateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  countryId: number;
}
