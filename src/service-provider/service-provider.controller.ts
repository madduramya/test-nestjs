import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { BadRequestException } from '@nestjs/common';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Controller('service-providers')
export class ServiceProviderController {
  constructor(private readonly service: ServiceProviderService) {}

  @Post()
  create(@Body() dto: CreateServiceProviderDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.service.search(query);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateServiceProviderDto
  ) {
    return this.service.update(id, dto);
  }


  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.service.remove(id);
  // }
}
