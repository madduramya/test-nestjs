import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyGroupUser } from '../familygroupuser/familygroupuser.entity';
import { Repository } from 'typeorm';
import { CreateFamilyGroupUserDto } from 'src/familygroupuser/dto/create-familygroupuser.dto';

@Injectable()
export class FamilygroupuserService {
    constructor(
        @InjectRepository(FamilyGroupUser)
        private readonly fguRepository: Repository<FamilyGroupUser>,
    ) {}

    async create(dto: CreateFamilyGroupUserDto): Promise<FamilyGroupUser> {
    const user = this.fguRepository.create({
        name: dto.name,
        contact: dto.contact,
        relationToCustomer: dto.relationToCustomer,
        familyGroup: { id: dto.familyGroupId },
        customer: { id: dto.customerId },
    });

    return this.fguRepository.save(user);
    }

    async findAll(): Promise<FamilyGroupUser[]> {
        return this.fguRepository.find({
            relations: ['familyGroup', 'customer'],
        });
    }

}
