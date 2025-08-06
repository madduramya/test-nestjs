import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PincodeService } from './pincode.service';
import { CreatePincodeDto } from './dto/create-pincode.dto';

@Controller('pincodes')
export class PincodeController {
  constructor(private readonly pincodeService: PincodeService) {}

  @Post()
  create(@Body() dto: CreatePincodeDto) {
    return this.pincodeService.create(dto);
  }

  @Get()
  findAll() {
    return this.pincodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pincodeService.findOne(id);
  }

//   @Patch(':id')
//   update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePincodeDto) {
//     return this.pincodeService.update(id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseIntPipe) id: number) {
//     return this.pincodeService.remove(id);
//   }
}
