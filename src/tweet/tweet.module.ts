import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [PrismaModule],
})
export class TweetModule {}
