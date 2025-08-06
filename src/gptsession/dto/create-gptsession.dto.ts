import { IsString, IsInt } from 'class-validator';

export class CreateGPTSessionDto {
  @IsString()
  query: string;

  @IsString()
  response: string;

  @IsInt()
  customerId: number;
}
