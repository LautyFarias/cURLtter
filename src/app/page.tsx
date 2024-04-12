"use client"

import { useState } from "react"

import Title from "@/components/Title"
import { URLForm } from "@/components/URLForm"
import { createShortURL } from "@/services/shortURL"

import type { URLFormValues } from "@/components/URLForm"

enum FormStatus {
  userTyping,
  loading,
  submitted,
}

export default function Home() {
  const [_formStatus, setFormStatus] = useState(FormStatus.userTyping)

  const onSubmit = async ({ url }: URLFormValues) => {
    setFormStatus(FormStatus.loading)

    const shortURL = await createShortURL({ url })

    setFormStatus(FormStatus.submitted)

    const host = process.env.NEXT_PUBLIC_SHORTURL_DOMAIN || window.location.host

    alert(host + "/" + shortURL.code)
  }

  return (
    <main>
      <section className="container flex h-screen w-screen flex-col items-center gap-8 py-40">
        <Title />
        <URLForm onSubmit={onSubmit} />
      </section>
    </main>
  )
}
