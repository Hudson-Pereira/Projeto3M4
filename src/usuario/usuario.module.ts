import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; //importar dentro do module criado

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [PrismaModule], //importar
})
export class UsuarioModule {}
