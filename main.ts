import { NestFactory } from '@nestjs/core';
import { HopeModule } from './src/hope.module';

async function bootstrap() {
  const app = await NestFactory.create(HopeModule);
  await app.listen(3000);
}
bootstrap();
