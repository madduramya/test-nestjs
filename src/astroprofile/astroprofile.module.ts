import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AstroProfile } from 'src/astroprofile/astroprofile.entity';
import { AstroProfileService } from './astroprofile.service';
import { AstroProfileController } from './astroprofile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AstroProfile])],
  controllers: [AstroProfileController],
  providers: [AstroProfileService],
  exports: [AstroProfileService]
})
export class AstroProfileModule {}
