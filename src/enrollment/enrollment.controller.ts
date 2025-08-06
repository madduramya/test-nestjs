import {
  Controller, 
  Post, 
  Get, 
  Delete, 
  Param, 
  Body, 
  ParseIntPipe
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from '../enrollment/dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  create(@Body() dto: CreateEnrollmentDto) {
    return this.enrollmentService.create(dto);
  }

  @Get()
  findAll() {
    return this.enrollmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.enrollmentService.findOne(id);
  }

//   @Put(':id')
//   update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() dto: UpdateEnrollmentDto
//   ) {
//     return this.enrollmentService.update(id, dto);
//   }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.enrollmentService.remove(id);
  // }
}
