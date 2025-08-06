import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GPTSession } from '../gptsession/gptsession.entity';
import { Repository } from 'typeorm';
import { CreateGPTSessionDto } from './dto/create-gptsession.dto';
import { Customer } from 'src/customer/customer.entity';

@Injectable()
export class GPTSessionService {
  constructor(
    @InjectRepository(GPTSession)
    private readonly gptRepo: Repository<GPTSession>
  ) {}

  async create(dto: CreateGPTSessionDto): Promise<GPTSession> {
    const session = this.gptRepo.create({
      prompt: dto.prompt,
      response: dto.response,
      customer: { id: dto.customerId } as Customer,
    });
    return this.gptRepo.save(session);
  }

  async findAll(): Promise<GPTSession[]> {
    return this.gptRepo.find({ relations: ['customer'] });
  }

  async findOne(id: number): Promise<GPTSession> {
    const session = await this.gptRepo.findOne({
      where: { id },
      relations: ['customer'],
    });
    if (!session) throw new NotFoundException(`GPTSession ${id} not found`);
    return session;
  }
}
