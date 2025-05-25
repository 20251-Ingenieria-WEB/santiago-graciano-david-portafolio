"use client"

import type { Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"

interface IconLinkProps {
  href: string
  icon: Icon
  label: string
  className?: string
  variant?: "default" | "neon" | "neonPink"
}

export function IconLink({ href, icon: IconCmp, label, className, variant = "default" }: IconLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex items-center justify-center p-3 rounded-full bg-gray-800 transition-all duration-300",
              variant === "default" && "hover:bg-gray-700",
              variant === "neon" && "hover:glow-border hover:text-cyan-400",
              variant === "neonPink" && "hover:glow-border-pink hover:text-fuchsia-400",
              "transform hover:scale-110 active:scale-95",
              className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IconCmp
              size={20}
              className={cn(
                isHovered && variant === "neon" && "text-cyan-400",
                isHovered && variant === "neonPink" && "text-fuchsia-400",
              )}
            />
          </a>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-800 border-gray-700">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
