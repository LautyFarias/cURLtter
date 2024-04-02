import { Prisma } from "@prisma/client"

import { prisma } from "@/server/database"

type ShortURLCreate = Prisma.ShortURLCreateInput
type ShortURLType = {
  id: number
  code: string
  url: string
  createdAt: Date
}

export class ShortURL {
  id: ShortURLType["id"]
  code: ShortURLType["code"]
  url: ShortURLType["url"]
  createdAt: ShortURLType["createdAt"]

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
