import { Module } from '@nestjs/common';
import { ShortUrlsModule } from './short-urls/short-urls.module';
import { ShortUrlsController } from './short-urls/short-urls.controller';
import { ShortUrlsService } from './short-urls/short-urls.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ShortUrlsModule],
  controllers: [ShortUrlsController],
  providers: [PrismaService, ShortUrlsService],
})
export class AppModule {}
