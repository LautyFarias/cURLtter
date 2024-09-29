import { Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { PrismaService } from 'src/prisma.service';
import { generateCode } from './utils';
import { ShortUrl } from './entities/short-url.entity';

@Injectable()
export class ShortUrlsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl> {
    const code = generateCode();

    return await this.prisma.shortURL.create({
      data: { url: createShortUrlDto.url, code },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} shortUrl`;
  }
}
