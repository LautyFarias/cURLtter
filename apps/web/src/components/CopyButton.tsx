import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import TooltipOnClick from "@/components/TooltipOnClick"

export default function CopyButton({ text }: { text: string }) {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <TooltipOnClick tip="Copied!">
      <Button
        onClick={() => copy(text)}
        variant="link"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        {text} <CopyIcon />
      </Button>
    </TooltipOnClick>
  )
}
