import { Module } from '@nestjs/common';
import { CategoriadotweetService } from './categoriadotweet.service';
import { CategoriadotweetController } from './categoriadotweet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategoriadotweetController],
  providers: [CategoriadotweetService],
  imports: [PrismaModule],
})
export class CategoriadotweetModule {}
