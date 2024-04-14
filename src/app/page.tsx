"use client"

import Title from "@/components/Title"
import URLFormContainer from "@/components/URLFormContainer"

export default function Home() {
  return (
    <main>
      <section className="container flex h-screen w-screen flex-col items-center gap-8 py-40">
        <Title />
        <URLFormContainer />
      </section>
    </main>
  )
}
