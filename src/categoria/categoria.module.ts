import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
  imports: [PrismaModule],
})
export class CategoriaModule {}
