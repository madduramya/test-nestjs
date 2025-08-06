import { IsString, IsNumber } from 'class-validator';

export class CreateFamilyGroupUserDto {
  
  @IsString()
  name: string;

  @IsString()
  contact: string;

  @IsString()
  relationToCustomer: string;

  @IsNumber()
  familyGroupId: number;

  @IsNumber()
  customerId: number;
}
