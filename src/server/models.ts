import { Prisma } from "@prisma/client"

import { prisma } from "@/server/database"

type URLCreate = Prisma.UrlCreateInput
interface URL {
  id: number
  code: string
  url: string
  createdAt: Date
}

export class Url {
  id: URL["id"]
  code: URL["code"]
  url: URL["url"]
  createdAt: URL["createdAt"]

  private constructor({ id, code, url, createdAt }: URL) {
    this.id = id
    this.code = code
    this.url = url
    this.createdAt = createdAt
  }

  static async create({ code, url, createdAt }: URLCreate): Promise<URL> {
    const createdUrl = await prisma.url.create({
      data: { code, url, createdAt },
    })

    return new Url(createdUrl)
  }
}
