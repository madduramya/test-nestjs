import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AstroProfileService } from './astroprofile.service';
import { CreateAstroProfileDto } from './dto/create-astroprofile.dto';

@Controller('astroprofile')
export class AstroProfileController {
  constructor(private readonly astroProfileService: AstroProfileService) {}

  @Post()
  create(@Body() dto: CreateAstroProfileDto) {
    return this.astroProfileService.create(dto);
  }

  @Get()
  findAll() {
    return this.astroProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.astroProfileService.findOne(+id);
  }
}
