import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Rede social')
    .setDescription('Rede social com user, tweet, seguidores e seguindo.')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
