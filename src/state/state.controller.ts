import { Controller, Post, Get, Param, Patch, Delete, Body } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';

@Controller('states')
export class StateController {
  constructor(private readonly service: StateService) {}

  @Post()
  create(@Body() dto: CreateStateDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

}
