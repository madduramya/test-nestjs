import { IsOptional, IsString } from 'class-validator';

export class UpdateServiceProviderDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone: string;

  // You can include other fields here if needed
}
