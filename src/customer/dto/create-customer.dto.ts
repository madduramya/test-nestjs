import { IsString, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsDateString()
  dateOfBirth: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;
  
}
