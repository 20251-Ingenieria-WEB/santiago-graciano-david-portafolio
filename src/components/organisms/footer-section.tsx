"use client"

import { Text } from "../atoms/text"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function FooterSection() {
  return (
    <motion.footer
      className="py-8 text-center border-t border-gray-800 bg-gray-900/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2">
        <Text size="sm" variant="muted">
          © {new Date().getFullYear()} Santiago Graciano. Hecho con
        </Text>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <Heart className="h-4 w-4 text-fuchsia-500 fill-current" />
        </motion.div>
        <Text size="sm" variant="muted">
          en Medellín, Colombia
        </Text>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <Text size="xs" variant="muted">
          Diseñado con <span className="text-cyan-400">❮</span>código<span className="text-fuchsia-400">/❯</span> y
          creatividad
        </Text>
      </div>
    </motion.footer>
  )
}
