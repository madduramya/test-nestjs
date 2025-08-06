import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './state.entity';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { Country } from '../country/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State, Country])],
  controllers: [StateController],
  providers: [StateService],
  exports: [StateService],
})
export class StateModule {}
