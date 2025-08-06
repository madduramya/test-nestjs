import {
  Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe
} from '@nestjs/common';
import { HealthRecordInfoService } from './healthrecordinfo.service';
import { CreateHealthRecordInfoDto } from '../healthrecordinfo/dto/create-healthrecordinfo.dto';


@Controller('healthrecordinfo')
export class HealthRecordInfoController {
  constructor(private readonly hriService: HealthRecordInfoService) {}

  @Post()
  create(@Body() dto: CreateHealthRecordInfoDto) {
    return this.hriService.create(dto);
  }

  @Get()
  findAll() {
    return this.hriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hriService.findOne(id);
  }

//   @Put(':id')
//   update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() dto: UpdateHealthRecordInfoDto
//   ) {
//     return this.hriService.update(id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseIntPipe) id: number) {
//     return this.hriService.remove(id);
//   }
}
