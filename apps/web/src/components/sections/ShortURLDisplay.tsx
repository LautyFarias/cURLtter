import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <Button disabled>Save URL</Button>
            </TooltipTrigger>
            <TooltipContent>Coming Soon...</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  )
}
