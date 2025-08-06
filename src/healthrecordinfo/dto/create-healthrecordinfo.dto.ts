import { IsString, IsInt, IsNumber, IsOptional, IsPhoneNumber, IsDate, IsDateString } from "class-validator";

export class CreateHealthRecordInfoDto {
    @IsString()
    bloodGroup: string;

    @IsInt()
    customerId: number;

    @IsNumber()
    heightCm: number;

    @IsNumber()
    weightKg: number;

    @IsOptional()
    @IsString()
    medicalConditions?: string;

    @IsString()
    emergencyContactName?: string;
 
    @IsPhoneNumber()
    emergencyContactPhone?: string;
    
    @IsDateString()
    lastCheckupDate?: Date;

    @IsString()
    notes?: string;
}
