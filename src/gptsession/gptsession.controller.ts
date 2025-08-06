import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.gptService.findOne(+id);
  }
}
