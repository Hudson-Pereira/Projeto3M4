import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { SeguidoresController } from './seguidores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SeguidoresController],
  providers: [SeguidoresService],
  imports: [PrismaModule],
})
export class SeguidoresModule {}
