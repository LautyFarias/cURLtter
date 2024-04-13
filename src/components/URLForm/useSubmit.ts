import { useState } from "react"

import { createShortURL } from "@/services/shortURL"

import type { URLFormValues } from "@/components/URLForm/URLForm"

export enum FormStatus {
  base,
  loading,
  submitted,
}

export function useSubmit() {
  const [formStatus, setFormStatus] = useState(FormStatus.base)
  const [shortURL, setShortURL] = useState<string | null>(null)

  const onSubmit = async ({ url }: URLFormValues) => {
    setFormStatus(FormStatus.loading)

    const shortURL = await createShortURL({ url })

    const host = process.env.NEXT_PUBLIC_SHORTURL_DOMAIN || window.location.host

    setShortURL(host + "/" + shortURL.code)
    setFormStatus(FormStatus.submitted)
  }

  return { formStatus, shortURL, onSubmit }
}
