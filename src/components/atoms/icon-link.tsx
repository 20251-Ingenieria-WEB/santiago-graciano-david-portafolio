import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type IconLinkVariant = "default" | "neon" | "neonPink"

export interface IconLinkProps {
  href: string
  icon: LucideIcon    // Icon component type
  label: string
  variant?: IconLinkVariant
}


export function IconLink({ href, icon: IconCmp, label, variant = "default" }: IconLinkProps) {
  const base = "p-2 rounded-full transition-colors"
  const variants = {
    default: "text-muted hover:text-accent",
    neon:    "text-accent hover:text-accent/80 drop-shadow-[0_0_6px_var(--color-accent)]",
    neonPink:"text-fuchsia-400 hover:text-fuchsia-300 drop-shadow-[0_0_6px_var(--color-fuchsia-400)]",
  }

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener"
      className={cn(base, variants[variant])}
    >
      <IconCmp size={20} />
    </a>
  )
}
