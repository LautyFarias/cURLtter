"use client"

import Title from "@/components/Title"
import URLFormContainer from "@/components/sections/URLFormContainer"

export default function Home() {
  return (
    <main>
      <section className="duration-700 container flex h-screen w-screen flex-col items-center gap-8 py-40 animate-in fade-in">
        <Title />
        <URLFormContainer />
      </section>
    </main>
  )
}
