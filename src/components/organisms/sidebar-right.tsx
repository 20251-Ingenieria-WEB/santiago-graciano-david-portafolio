"use client"

import { IconLink, IconLinkVariant } from "../atoms/icon-link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

type Social = {
  icon: typeof Github | typeof Linkedin | typeof Mail
  label: string
  href: string
  variant: IconLinkVariant
}

export default function SidebarRight() {
  const [activeIcon, setActiveIcon] = useState<number | null>(null)

  const icons: Social[] = [
    { icon: Github,   label: "GitHub",   href: "https://github.com/santiagogracianod", variant: "neon" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-graciano-david/", variant: "neonPink" },
    { icon: Mail,     label: "Email",    href: "mailto:santiago.gracianod@gmail.com", variant: "neonPink" },
  ]

  return (
    <motion.nav
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={icon.label}
          onMouseEnter={() => setActiveIcon(index)}
          onMouseLeave={() => setActiveIcon(null)}
          animate={{
            y: activeIcon === index ? -5 : 0,
            scale: activeIcon === index ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <IconLink
            href={icon.href}
            icon={icon.icon}
            label={icon.label}
            variant={icon.variant}
          />
        </motion.div>
      ))}

      <motion.div
        className="mt-8 h-32 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        animate={{
          height: [32, 64, 32],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.nav>
  )
}
