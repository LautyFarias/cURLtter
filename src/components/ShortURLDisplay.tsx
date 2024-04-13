import type { PropsWithURL } from "@/types/URL.type"

export default function ShortURLDisplay({ url }: PropsWithURL) {
  return <div>{url}</div>
}
