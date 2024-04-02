import { Prisma, ShortURL as ShortURLType } from "@prisma/client"

import { prisma } from "@/server/database"

type ShortURLCreate = Prisma.ShortURLCreateInput

export class ShortURL implements ShortURLType {
  id
  code
  url
  createdAt

  private constructor({ id, code, url, createdAt }: ShortURLType) {
    this.id = id
    this.code = code
    this.url = url
    this.createdAt = createdAt
  }

  static async create({ code, url, createdAt }: ShortURLCreate) {
    const createdUrl = await prisma.shortURL.create({
      data: { code, url, createdAt },
    })

    return new ShortURL(createdUrl)
  }
}
