import { IsString } from "class-validator";

export class CreateDocument {
    @IsString()
    documentType: string;

    @IsString()
    fileUrl: string;
}