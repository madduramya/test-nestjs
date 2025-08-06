import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GPTSessionService } from './gptsession.service';
import { CreateGPTSessionDto } from './dto/create-gptsession.dto';

@Controller('gptsession')
export class GPTSessionController {
  constructor(private readonly gptService: GPTSessionService) {}

  @Post()
  create(@Body() dto: CreateGPTSessionDto) {
    return this.gptService.create(dto);
  }

  @Get()
  findAll() {
    return this.gptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gptService.findOne(id);
  }
}
