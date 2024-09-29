import { Module } from '@nestjs/common';
import { ShortUrlsService } from './short-urls.service';
import { ShortUrlsController } from './short-urls.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ShortUrlsController],
  providers: [PrismaService, ShortUrlsService],
})
export class ShortUrlsModule {}
