"use client"

import { education } from "../../lib/data"
import { Heading } from "../atoms/heading"
import { Text } from "../atoms/text"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.section id="educacion" className="mb-16" ref={containerRef} style={{ opacity, y }}>
      <Heading level={2} variant="gradient" className="mb-8 text-center">
        Educación
      </Heading>

      <div className="space-y-6 relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-transparent" />

        {education.map((ed, index) => (
          <EducationCard key={ed.institute} education={ed} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

function EducationCard({ education, index }: { education: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="border-gray-800 bg-gray-900 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 ml-10">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="absolute -left-6 mt-1">
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-700 z-10"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  borderColor: isHovered ? "#00eeff" : "#374151",
                  boxShadow: isHovered ? "0 0 10px rgba(0, 238, 255, 0.5)" : "none",
                }}
              >
                <GraduationCap className={`h-6 w-6 ${isHovered ? "text-cyan-400" : "text-gray-400"}`} />
              </motion.div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <Heading
                  level={3}
                  variant={isHovered ? "neon" : "default"}
                  className="mb-1 md:mb-0 transition-colors duration-300"
                >
                  {education.institute}
                </Heading>
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar className={`h-4 w-4 ${isHovered ? "text-cyan-400" : ""}`} />
                  <Text size="xs" variant="muted" className={isHovered ? "text-cyan-400" : ""}>
                    {education.period}
                  </Text>
                </div>
              </div>

              <Text
                weight="medium"
                size="md"
                variant={isHovered ? "neon" : "highlight"}
                className="mb-2 transition-colors duration-300"
              >
                {education.degree}
              </Text>

              <Text size="md" className="leading-relaxed">
                {education.description}
              </Text>

              {isHovered && (
                <motion.div
                  className="mt-4 flex items-center text-cyan-400 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span>Ver certificados</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
