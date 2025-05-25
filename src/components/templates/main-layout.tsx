"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import SidebarLeft from "../organisms/sidebar-left"
import SidebarRight from "../organisms/sidebar-right"
import { motion } from "framer-motion"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`
      cursorRef.current.style.top = `${mousePosition.y}px`
    }
  }, [mousePosition])

  return (
    <div className="min-h-screen bg-black cyberpunk-grid">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          transition: "transform 0.1s ease-out",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      <div className="h-screen grid grid-cols-[280px_1fr_100px] overflow-hidden">
        <motion.aside
          className="bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 p-0 overflow-y-auto scrollbar-hide"
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SidebarLeft />
        </motion.aside>

        <motion.main
          className="p-8 overflow-y-auto scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.main>

        <motion.aside
          className="bg-gray-900/80 backdrop-blur-sm border-l border-gray-800 p-6 flex items-center justify-center"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SidebarRight />
        </motion.aside>
      </div>
    </div>
  )
}
