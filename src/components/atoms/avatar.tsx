"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"

const avatarVariants = cva("rounded-full object-cover transition-all duration-500", {
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
      xl: "w-24 h-24",
      "2xl": "w-32 h-32",
    },
    variant: {
      default: "border-2 border-gray-700",
      neon: "border-2 border-cyan-400 glow-border",
      neonPink: "border-2 border-fuchsia-400 glow-border-pink",
      cyber: "border-4 border-dashed border-cyan-400",
    },
  },
  defaultVariants: {
    size: "lg",
    variant: "default",
  },
})

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string
  alt: string
  className?: string
  size?: number
}

export default function Avatar({ src, alt, className, size, variant, ...props }: AvatarProps) {
  const sizeInPx = size || 96
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          isHovered && variant === "neon" && "glow-border animate-pulse",
          isHovered && variant === "neonPink" && "glow-border-pink animate-pulse",
        )}
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          opacity: isHovered ? 0.7 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      />
      <Image
        src={src || "/avatar.jpeg"}
        alt={alt}
        width={sizeInPx}
        height={sizeInPx}
        className={cn(avatarVariants({ size: size ? undefined : "lg", variant }), className, isHovered && "scale-105")}
        {...props}
      />
    </div>
  )
}
