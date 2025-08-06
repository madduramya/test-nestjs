import { Controller } from '@nestjs/common';
import { FamilygroupuserService } from './familygroupuser.service';
import { Post, Body, Get } from '@nestjs/common';
import { CreateFamilyGroupUserDto } from 'src/familygroupuser/dto/create-familygroupuser.dto';
import { FamilyGroupUser } from './familygroupuser.entity';

@Controller('familygroupuser')
export class FamilygroupuserController {
    constructor(private readonly familygroupuserService: FamilygroupuserService) {}

    @Post()
    create(@Body() dto: CreateFamilyGroupUserDto) {
        return this.familygroupuserService.create(dto);
    }

    @Get()
    findAll(): Promise<FamilyGroupUser[]> {
        return this.familygroupuserService.findAll();
    }

}
