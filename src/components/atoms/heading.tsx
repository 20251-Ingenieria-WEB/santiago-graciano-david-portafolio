import type React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("font-bold tracking-tight text-white", {
  variants: {
    level: {
      1: "text-4xl lg:text-5xl mb-6",
      2: "text-3xl lg:text-4xl mb-4",
      3: "text-2xl lg:text-3xl mb-3",
      4: "text-xl lg:text-2xl mb-2",
      5: "text-lg lg:text-xl mb-2",
      6: "text-base lg:text-lg mb-1",
    },
    variant: {
      default: "",
      gradient:
        "bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent",
      neon: "neon-text",
      neonPink: "neon-text-pink",
      glitch: "glitch",
      cyber: "font-mono uppercase tracking-widest",
    },
  },
  defaultVariants: {
    level: 1,
    variant: "default",
  },
});

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  className?: string;
  dataText?: string;
}

export function Heading({
  level = 1,
  variant,
  children,
  className,
  dataText,
}: HeadingProps) {
  const Tag = `h${level}` as const;
  const attributes =
    variant === "glitch" ? { "data-text": dataText || children } : {};

  return (
    <Tag
      className={cn(headingVariants({ level, variant }), className)}
      {...attributes}
    >
      {children}
    </Tag>
  );
}
