import type React from "react"
import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva("text-gray-300", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm leading-snug",
      md: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      default: "",
      muted: "text-gray-400",
      highlight: "text-cyan-400",
      highlightPink: "text-fuchsia-400",
      neon: "neon-text",
      neonPink: "neon-text-pink",
      typing: "typing",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
    variant: "default",
  },
})

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode
  className?: string
}

export function Text({ size, weight, variant, children, className }: TextProps) {
  return <p className={cn(textVariants({ size, weight, variant }), className)}>{children}</p>
}
