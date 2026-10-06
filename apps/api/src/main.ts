import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  );

  // Enable CORS so the Next.js frontend can fetch data
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Bind to 0.0.0.0 to allow local network connections
  await app.listen(process.env.PORT ?? 8080, '0.0.0.0');
}
bootstrap();