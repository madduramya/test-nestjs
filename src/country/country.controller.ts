import { Controller, Post, Get, Param, Body, Patch, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
//import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.countryService.search(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.countryService.findOne(id);
  }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() dto: UpdateCountryDto) {
//     return this.countryService.update(+id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.countryService.remove(+id);
//   }
}
