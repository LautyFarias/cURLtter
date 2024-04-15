import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import TooltipOnClick from "@/components/TooltipOnClick"

import type { PropsWithURL } from "@/types/URL.type"

export default function ShortURLDisplay({ url }: PropsWithURL) {
  return (
    <section className="container flex flex-col gap-8">
      <div className="flex justify-center">
        <TooltipOnClick tip="Copied!">
          <Button
            variant="link"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            {url} <CopyIcon />
          </Button>
        </TooltipOnClick>
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
