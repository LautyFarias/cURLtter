import { useState } from "react"

import { createShortURL } from "@/services/shortURL"

import type { URLFormProps } from "@/types/URLForm.type"

export enum FormStatus {
  base,
  loading,
  submitted,
}

export function useSubmit() {
  const [formStatus, setFormStatus] = useState(FormStatus.base)
  const [shortURL, setShortURL] = useState<string | null>(null)

  const onSubmit: URLFormProps["onSubmit"] = async ({ url }) => {
    setFormStatus(FormStatus.loading)

    const shortURL = await createShortURL({ url })

    const host = process.env.NEXT_PUBLIC_SHORTURL_DOMAIN || window.location.host

    setShortURL(host + "/" + shortURL.code)
    setFormStatus(FormStatus.submitted)
  }

  return { formStatus, shortURL, onSubmit }
}
