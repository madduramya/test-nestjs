import { IsNumber, IsString } from "class-validator";

export class CreateDocumentDto {
    @IsString()
    documentType: string;

    @IsString()
    fileUrl: string;

    @IsNumber()
    serviceProviderId: number;

    @IsNumber()
    healthRecordId: number;

}