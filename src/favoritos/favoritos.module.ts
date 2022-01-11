import { Module } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FavoritosController],
  providers: [FavoritosService],
  imports: [PrismaModule],
})
export class FavoritosModule {}
