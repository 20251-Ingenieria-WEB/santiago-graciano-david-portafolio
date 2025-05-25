"use client";

import { useEffect, useState } from "react";
import type * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
  indicatorClassName,
  animate = true,
  ...props
}: {
  value: number;
  animate?: boolean;
} & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setProgress(value), 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animate]);

  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-gray-800",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-1000",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
