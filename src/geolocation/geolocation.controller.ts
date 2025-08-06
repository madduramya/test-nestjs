import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GeoLocationService } from './geolocation.service';
import { CreateGeoLocationDto } from './dto/create-geolocation.dto';

@Controller('geolocations')
export class GeoLocationController {
  constructor(private readonly geoService: GeoLocationService) {}

  @Post()
  create(@Body() dto: CreateGeoLocationDto) {
    return this.geoService.create(dto);
  }

  @Get()
  findAll() {
    return this.geoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.geoService.findOne(id);
  }

//   @Patch(':id')
//   update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateGeoLocationDto) {
//     return this.geoService.update(id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseIntPipe) id: number) {
//     return this.geoService.remove(id);
//   }
}
