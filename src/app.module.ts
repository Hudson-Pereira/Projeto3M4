import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { CategoriadotweetModule } from './categoriadotweet/categoriadotweet.module';

@Module({
  imports: [UsuarioModule, TweetModule, SeguindoModule, SeguidoresModule, PrismaModule, AuthModule, CategoriaModule, FavoritosModule, CategoriadotweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
