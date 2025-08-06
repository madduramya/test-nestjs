import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  stateId: number;
}
