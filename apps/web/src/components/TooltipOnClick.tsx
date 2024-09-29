import { useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import type { PropsWithChildren } from "react"

interface TooltipOnClickProps extends PropsWithChildren {
  tip: string
}

export default function TooltipOnClick({ children, tip }: TooltipOnClickProps) {
  const [open, setOpen] = useState(false)

  const onClick = () => setOpen(true)
  const onMouseLeave = () => setOpen(false)

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild onClick={onClick} onMouseLeave={onMouseLeave}>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
