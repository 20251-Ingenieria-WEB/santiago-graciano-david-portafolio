"use client"

import { Heading } from "../atoms/heading"
import EducationCard, { EducationItem } from "../molecules/education-card"
import { education } from "../../lib/data"
import { motion } from "framer-motion"

export default function EducationSection() {
  return (
    <motion.section
      id="educacion"
      /* contenedor gris oscuro con borde cian */
      className="mb-8 bg-gray-900/70 rounded-xl border border-cyan-500/20 max-w-5xl mx-auto px-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <Heading level={2} variant="gradient" className="pt-10 mb-6 text-center">
        Educación
      </Heading>

      {((education as EducationItem[]) || []).map((ed, idx, arr) => (
        <EducationCard
          key={ed.institute}
          item={ed}
          isLast={idx === arr.length - 1}
        />
      ))}

      {/* Espacio inferior para respirar */}
      <div className="pb-10" />
    </motion.section>
  )
}
