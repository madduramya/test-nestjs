import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/customer.entity';
import { FamilygroupuserModule } from './familygroupuser/familygroupuser.module';
import { FamilyGroupUser } from './familygroupuser/familygroupuser.entity';
import { GPTSession } from './gptsession/gptsession.entity';
import { AstroProfile } from './astroprofile/astroprofile.entity';
import { HealthRecordInfo } from './healthrecordinfo/healthrecordinfo.entity';
import { FamilyGroup } from './familygroup/familygroup.entity';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { HealthRecordInfoModule } from './healthrecordinfo/healthrecordinfo.module';
import { HealthrecordModule } from './healthrecord/healthrecord.module';
import { AstroProfileModule } from './astroprofile/astroprofile.module';
import { GPTSessionModule } from './gptsession/gptsession.module';
import { HealthRecord } from './healthrecord/healthrecord.entity';
import { Enrollment } from './enrollment/enrollment.entity';
import { FamilyGroupModule } from './familygroup/familygroup.module';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { AddressModule } from './address/address.module';
import { PincodeModule } from './pincode/pincode.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { GeoLocationModule } from './geolocation/geolocation.module';
import { CountryModule } from './country/country.module';
import { DocumentModule } from './document/document.module';
import { Address } from './address/address.entity';
import { ServiceProvider } from './service-provider/serviceprovider.entity';
import { GeoLocation } from './geolocation/geo-location.entity';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'test-nestjs',
      entities: [Enrollment, Customer, FamilyGroupUser, GPTSession, AstroProfile, HealthRecordInfo, FamilyGroup, HealthRecord, Address, ServiceProvider, GeoLocation], 
      synchronize: true, 
      autoLoadEntities: true,
     }),
     CustomerModule,
     FamilygroupuserModule,
     EnrollmentModule,
     HealthRecordInfoModule,
     HealthrecordModule,
     AstroProfileModule,
     GPTSessionModule,
     FamilyGroupModule,
     ServiceProviderModule,
     AddressModule,
     PincodeModule,
     CityModule,
     StateModule,
     GeoLocationModule,
     CountryModule,
     DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
