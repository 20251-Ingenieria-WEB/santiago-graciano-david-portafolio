"use client"

import { useState, useEffect, useRef } from "react"
import { Heading } from "../atoms/heading"
import { Text } from "../atoms/text"
import { ProgressBar } from "../atoms/progress-bar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Code2, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function ProgrammingCard({ stacks }: { stacks: Array<{ name: string; percent: number }> }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeStack, setActiveStack] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <Card
      ref={ref}
      className="overflow-hidden border-gray-800 bg-gray-900 shadow-lg hover:shadow-cyan-900/20 transition-all duration-500"
    >
      <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 pb-3 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-cyan-400" />
            <Heading level={3} variant="neon" className="m-0">
              Lenguajes de Programación
            </Heading>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full p-1 hover:bg-gray-700 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <ChevronUp size={18} className="text-cyan-400" />
            ) : (
              <ChevronDown size={18} className="text-cyan-400" />
            )}
          </button>
        </div>
      </CardHeader>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="pt-4">
              <div className="space-y-6">
                {stacks.map((s, index) => (
                  <motion.div
                    key={s.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    onMouseEnter={() => setActiveStack(s.name)}
                    onMouseLeave={() => setActiveStack(null)}
                  >
                    <div className="flex justify-between items-center">
                      <Text
                        weight="medium"
                        variant={activeStack === s.name ? "neon" : "default"}
                        className="transition-all duration-300"
                      >
                        {s.name}
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text
                          size="xs"
                          variant={activeStack === s.name ? "neon" : "muted"}
                          className="transition-all duration-300"
                        >
                          {s.percent}%
                        </Text>
                        {activeStack === s.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                          />
                        )}
                      </div>
                    </div>
                    <ProgressBar
                      value={isInView ? s.percent : 0}
                      className={cn(
                        "h-3 bg-gray-800 rounded-md overflow-hidden",
                        activeStack === s.name && "ring-1 ring-cyan-400",
                      )}
                      indicatorClassName={cn(
                        index % 3 === 0
                          ? "from-cyan-400 to-blue-500"
                          : index % 3 === 1
                            ? "from-fuchsia-400 to-purple-500"
                            : "from-emerald-400 to-green-500",
                        activeStack === s.name && "animate-pulse",
                      )}
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
