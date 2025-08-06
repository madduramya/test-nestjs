import { Controller } from '@nestjs/common';
import { HealthRecordService } from './healthrecord.service';
import { CreateHealthRecordDto } from './dto/create-healthrecord.dto';
import { Post, Body, Get, ParseIntPipe, Param } from "@nestjs/common";


@Controller('healthrecord')
export class HealthrecordController {
    constructor(private readonly hrService: HealthRecordService) {}

    @Post()
    create(@Body() dto: CreateHealthRecordDto) {
        return this.hrService.create(dto);
    }

    @Get()
      findAll() {
        return this.hrService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id', ParseIntPipe) id: number) {
        return this.hrService.findOne(id);
      }
}
