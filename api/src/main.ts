import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationOptions } from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);

  app.useGlobalPipes(new ValidationPipe(validationOptions));
}
bootstrap();
