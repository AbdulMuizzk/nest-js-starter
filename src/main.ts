import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './common/customerLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: new CustomLogger(),
  });
  const port = process.env.PORT || 5500;
  await app.listen(port);
}
bootstrap();
