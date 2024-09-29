import { z } from "zod"

export const URLSchema = z.object({
  url: z.string().url().startsWith("https://"),
})
