import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShortUrlsService } from './short-urls.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';

@Controller('short-urls')
export class ShortUrlsController {
  constructor(private readonly shortUrlsService: ShortUrlsService) {}

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    return await this.shortUrlsService.create(createShortUrlDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortUrlsService.findOne(+id);
  }
}
