import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GPTSession } from '../gptsession/gptsession.entity';
import { GPTSessionService } from './gptsession.service';
import { GPTSessionController } from './gptsession.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GPTSession])],
  controllers: [GPTSessionController],
  providers: [GPTSessionService],
  exports: [GPTSessionService]
})
export class GPTSessionModule {}
