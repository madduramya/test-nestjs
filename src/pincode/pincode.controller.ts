import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PincodeService } from './pincode.service';
import { CreatePincodeDto } from './dto/create-pincode.dto';

@Controller('pincode')
export class PincodeController {
    constructor(private readonly pincodeService: PincodeService) {}

    @Post()
    create(@Body() dto: CreatePincodeDto ) {
        return this.pincodeService.create(dto);
    }

    @Get()
    findAll() {
        return this.pincodeService.findAll();
    }

    @Get()
    findOne(@Param('id', ParseIntPipe)id: number) {
        return this.pincodeService.findOne(id);
    }
}
