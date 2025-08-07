import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { State } from 'src/state/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, State])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService]
})
export class CityModule {}
