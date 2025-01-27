import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appConfig } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSwagger = new DocumentBuilder()
    .setTitle('Curriculum Designer')
    .setDescription('The curriculum designer description')
    .setVersion('1.0')
    .addTag('curriculum')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(appConfig.port ?? 5000);
}

bootstrap();
