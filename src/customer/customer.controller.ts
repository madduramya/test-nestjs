import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto) {
    return this.customerService.create(dto);
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.customerService.search(query);
  }
 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @Get() 
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll(); 
  }

  @Patch(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCustomerDto,
  ) {
    //console.log('PATCH /customer/:id hit');
    return this.customerService.update(id, dto);
  }

}
