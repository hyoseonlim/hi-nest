import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto에 정의되지 않은 속성을 가진 요청 거름
      forbidUnknownValues: true, // dto에 정의되지 않은 속성이 요청 데이터에 포함되면 예외 발생
      transform: true, // url로 보낸 값을 string이 아닌 원하는 타입으로 받아줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
