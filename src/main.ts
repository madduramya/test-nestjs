import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // strips unknown properties
      forbidNonWhitelisted: false, // throws error if extra fields passed
      transform: true,        // transforms types (e.g. string -> number)
    }),
  );

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
