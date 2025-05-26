// src/components/atoms/progress-bar.tsx
"use client";

import { useEffect, useState } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export interface ProgressBarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "value"> {
  /** Valor objetivo de progreso (0–100) */
  value: number;
  /** Anima la transición desde 0 hasta `value` */
  animate?: boolean;
  /** Clases para el track (fondo) */
  className?: string;
  /** Clases para el indicador (barra interior) */
  indicatorClassName?: string;
}

export function ProgressBar({
  value,
  animate = true,
  className,
  indicatorClassName,
  ...rootProps
}: ProgressBarProps) {
  // Estado interno para animar la barra
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animate) {
      // Actualiza displayValue después de un breve retardo
      const timeout = setTimeout(() => setDisplayValue(value), 50);
      return () => clearTimeout(timeout);
    } else {
      setDisplayValue(value);
    }
  }, [value, animate]);

  return (
    <ProgressPrimitive.Root
      {...rootProps}
      className={cn("relative h-2 w-full rounded-full bg-gray-800 overflow-hidden", className)}
      value={displayValue} // Aunque Radix lo aplica, lo usaremos para aria
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full origin-left transition-[width] duration-500 ease-out",
          indicatorClassName
        )}
        style={{ width: `${displayValue}%` }}
      />
    </ProgressPrimitive.Root>
  );
}
