import { Controller, Post, Body, Get, ParseIntPipe, Param, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {} 

    @Post()
    create(@Body() dto: CreateCityDto) {
        return this.cityService.create(dto);
    }

    @Get()
    findAll() {
        return this.cityService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        return this.cityService.search(query);
    }


    @Get()
    findOne(@Param('id', ParseIntPipe)id: number) {
        return this.cityService.findOne(id);
    }
}
