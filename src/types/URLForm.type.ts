import { z } from "zod"

import { URLSchema } from "@/lib/schemas"

export type URLFormValues = z.infer<typeof URLSchema>
export interface URLFormProps {
  onSubmit: ({ url }: URLFormValues) => void
}
