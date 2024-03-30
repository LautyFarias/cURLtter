"use client"

import Title from "@/components/Title"
import { URLForm, URLFormValues } from "@/components/URLForm"

export default function Home() {
  function onSubmit({ url }: URLFormValues) {
    alert(url)
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
