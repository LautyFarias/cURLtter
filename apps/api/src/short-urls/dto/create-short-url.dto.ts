import { IsUrl } from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl({ protocols: ['https'], require_protocol: true })
  url: string;
}
