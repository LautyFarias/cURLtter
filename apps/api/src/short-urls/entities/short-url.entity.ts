import { ShortURL } from '@prisma/client';

export class ShortUrl implements ShortURL {
  id: number;
  code: string;
  url: string;
  createdAt: Date;
}
