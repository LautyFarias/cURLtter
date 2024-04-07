import ky from "ky"

import type { ShortURL } from "@/types/shortURL.type"

const baseURL = "/api/short-urls"

export const createShortURL = ({ url }: { url: string }) =>
  ky.post(baseURL, { json: { url } }).json<ShortURL>()
