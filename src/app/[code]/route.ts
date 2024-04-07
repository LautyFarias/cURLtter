import { redirect } from "next/navigation"

import { ShortURL } from "@/server/models"

import type { ShortURL as ShortURLType } from "@/types/shortURL.type"

type ParamsContainer = { params: { code: ShortURLType["code"] } }

export async function GET(
  _request: Request,
  { params: { code } }: ParamsContainer
) {
  const shortURL = await ShortURL.get({
    filter: { code },
    fields: { url: true },
  })

  if (!shortURL) redirect("/")

  redirect(shortURL.url)
}
