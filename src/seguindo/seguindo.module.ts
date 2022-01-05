import { Module } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { SeguindoController } from './seguindo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SeguindoController],
  providers: [SeguindoService],
  imports: [PrismaModule],
})
export class SeguindoModule {}
