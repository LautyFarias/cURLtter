import { z } from "zod"

export default z.object({
  url: z.string().url().startsWith("https://"),
})
