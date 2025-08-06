import { IsString, IsDate, IsInt, IsDateString } from "class-validator";

export class CreateHealthRecordDto {
    @IsString()
    diagnosis: string;

    @IsDateString()
    date: Date;

    @IsInt()
    healthRecordInfoId: number;

    @IsString()
    treatment: string;

    @IsString()
    doctorName: string;

    @IsString()
    hospitalName: string;

    @IsString()
    prescription: string;

    @IsString()
    notes: string;

    @IsString()
    bloodPressure: string;

    @IsString()
    bloodSugar: string;

}