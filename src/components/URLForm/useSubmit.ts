import { useState } from "react"

import { createShortURL } from "@/services/shortURL"

import type { URLFormValues } from "@/components/URLForm/URLForm"

enum FormStatus {
  base,
  loading,
  submitted,
}

export default function useSubmit() {
  const [formStatus, setFormStatus] = useState(FormStatus.base)

  const onSubmit = async ({ url }: URLFormValues) => {
    setFormStatus(FormStatus.loading)

    const shortURL = await createShortURL({ url })

    setFormStatus(FormStatus.submitted)

    const host = process.env.NEXT_PUBLIC_SHORTURL_DOMAIN || window.location.host

    alert(host + "/" + shortURL.code)
  }

  return { formStatus, onSubmit }
}
