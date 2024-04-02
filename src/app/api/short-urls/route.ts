import { ShortURL } from "@/server/models"
import { generateCode } from "@/server/utils"
import { URLSchema } from "@/lib/schemas"

export async function POST(request: Request) {
  const parse = URLSchema.safeParse(await request.json())

  if (!parse.success) {
    return Response.json(parse.error)
  }

  const { url } = parse.data
  const shortURL = await ShortURL.create({ url, code: generateCode() })

  return Response.json(shortURL)
}
