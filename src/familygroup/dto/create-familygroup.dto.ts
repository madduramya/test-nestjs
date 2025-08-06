import { IsString } from 'class-validator';

export class CreateFamilyGroupDto {
  @IsString()
  name: string;

  @IsString()
  contact: string;
}
