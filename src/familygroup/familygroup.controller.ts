// src/familygroup/familygroup.controller.ts
import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FamilyGroupService } from './familygroup.service';
import { CreateFamilyGroupDto } from './dto/create-familygroup.dto';
import { FamilyGroup } from 'src/familygroup/familygroup.entity';

@Controller('familygroups')
export class FamilyGroupController {
  constructor(private readonly familyGroupService: FamilyGroupService) {}

  @Post()
  create(@Body() dto: CreateFamilyGroupDto): Promise<FamilyGroup> {
    return this.familyGroupService.create(dto);
  }

  @Get()
  findAll(): Promise<FamilyGroup[]> {
    return this.familyGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.familyGroupService.findOne(id);
  }
}
