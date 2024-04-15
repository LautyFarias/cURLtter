import { Button } from "@/components/ui/button"
import CopyButton from "@/components/CopyButton"

import type { PropsWithURL } from "@/types/URL.type"

export default function ShortURLDisplay({ url }: PropsWithURL) {
  return (
    <section className="container flex flex-col gap-8">
      <div className="flex justify-center">
        <CopyButton text={url} />
      </div>
      <div className="flex justify-evenly gap-8">
        <Button asChild>
          <a href="/">Cut another URL</a>
        </Button>
        <Button disabled>Save URL</Button>
      </div>
    </section>
  )
}
