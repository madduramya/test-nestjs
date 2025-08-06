import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamilyGroup } from 'src/familygroup/familygroup.entity';
import { CreateFamilyGroupDto } from './dto/create-familygroup.dto';

@Injectable()
export class FamilyGroupService {
  constructor(
    @InjectRepository(FamilyGroup)
    private familyGroupRepo: Repository<FamilyGroup>,
  ) {}

  async create(dto: CreateFamilyGroupDto): Promise<FamilyGroup> {
    const group = this.familyGroupRepo.create(dto); 
      return this.familyGroupRepo.save(group);
  }

  async findAll(): Promise<FamilyGroup[]> {
    return this.familyGroupRepo.find({ 
      relations: ['familyGroupUsers'] 
    });
  }

  async findOne(id: number): Promise<FamilyGroup> {
    const group = await this.familyGroupRepo.findOne({
      where: { id },
      relations: ['familyGroupUsers'],
    });
    if (!group) throw new NotFoundException(`FamilyGroup ${id} not found`);
    return group;
  }
}
