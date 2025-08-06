import { IsString, IsInt } from 'class-validator';

export class CreateGPTSessionDto {
  @IsString()
  prompt: string;

  @IsString()
  response: string;

  @IsInt()
  customerId: number;
}
