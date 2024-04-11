import { Prisma } from "@prisma/client"

import { prisma } from "@/server/database"

import type { ShortURL as ShortURLType } from "@/types/shortURL.type"

type ShortURLFields = Prisma.ShortURLSelect
type ShortURLFilter = Prisma.ShortURLWhereUniqueInput

type ShortURLCreate = Prisma.ShortURLCreateInput
type ShortURLGet = { filter: ShortURLFilter; fields?: ShortURLFields }

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

  static async get({ filter, fields }: ShortURLGet) {
    const shortURL = await prisma.shortURL.findUnique({
      select: fields,
      where: filter,
    })

    if (!shortURL) return null

    return new ShortURL(shortURL)
  }
}
