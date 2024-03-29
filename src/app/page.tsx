import Title from "@/components/Title"
import URLForm from "@/components/URLForm"

export default function Home() {
  return (
    <main>
      <section className="container flex h-screen w-screen flex-col items-center gap-8 py-40">
        <Title />
        <URLForm />
      </section>
    </main>
  )
}
