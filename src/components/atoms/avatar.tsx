"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"

const avatarVariants = cva("rounded-full object-cover transition-all duration-500", {
  variants: {
    variant: {
      default:    "border-2 border-gray-700",
      neon:       "border-2 border-cyan-400 glow-border",
      neonPink:   "border-2 border-fuchsia-400 glow-border-pink",
      cyber:      "border-4 border-dashed border-cyan-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type AvatarVariantProps = VariantProps<typeof avatarVariants>

export interface AvatarProps extends AvatarVariantProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export default function Avatar({
  src,
  alt,
  size = 96,
  variant,
  className,
}: AvatarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const px = size

  return (
    <div
      className={cn(
        avatarVariants({ variant }),
        "relative inline-block"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          isHovered && variant === "neon"     && "glow-border animate-pulse",
          isHovered && variant === "neonPink" && "glow-border-pink animate-pulse",
        )}
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          opacity:   isHovered ? 0.7       : 0,
          transition: "all 0.3s ease-in-out",
        }}
      />

      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className={cn("rounded-full aspect-square object-cover", className)}
      />
    </div>
  )
}