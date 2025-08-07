import { Body, Controller, Post, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    @Post()
    create(@Body() dto: CreateStateDto) {
        return this.stateService.create(dto);
    }


    @Get()
    findAll() {
        return this.stateService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        return this.stateService.search(query);
    }


    @Get() 
    findOne(@Param('id', ParseIntPipe)id: number) {
        return this.stateService.findOne(id);
    }
}
