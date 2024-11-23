import type { ReactNode } from "react"

interface EmojiProps {
  label: string
  children: ReactNode
}

export default function Emoji(props: EmojiProps) {
  const { label, children } = props

  return (
    <span role="img" aria-label={label}>
      {children}
    </span>
  )
}
