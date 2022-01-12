import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //necessario para usar o @decorators

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Rede social')
    .setDescription('Rede social com user, tweet, seguidores, seguindo, favoritos e categoria do tweet.')
    .setVersion('2.0')
    .addTag('usuario') //para fazer a separacao dos itens no swaager, precisa do @ApiTags('') antes de @controller na controler da rota
    .addTag('tweet')
    .addTag('seguindo')
    .addTag('seguidores')
    .addTag('auth')
    .addTag('categoria')
    .addTag('favoritos')
    .addTag('categoriadotweet')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
