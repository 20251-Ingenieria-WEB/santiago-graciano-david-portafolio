// src/components/templates/main-layout.tsx
"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import SidebarLeft  from "../organisms/sidebar-left"
import SidebarRight from "../organisms/sidebar-right"
import { Menu, X }   from "lucide-react"
import { motion }    from "framer-motion"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  /* ---------- custom cursor (sin cambios) ---------- */
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mouse.x}px`
      cursorRef.current.style.top  = `${mouse.y}px`
    }
  }, [mouse])

  /* ---------- drawer state ---------- */
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black cyberpunk-grid">
      {/* cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition:"transform .1s ease-out",
                 transform:`translate(${mouse.x}px,${mouse.y}px)` }}
      />

      {/* hamburger (solo ≤ md) */}
      <button
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-gray-800 text-white md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu />
      </button>

      {/* overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
        initial={{ opacity:0, pointerEvents:"none" }}
        animate={{ opacity: open ? 1 : 0,
                   pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: .25 }}
        onClick={() => setOpen(false)}
      />

      {/* drawer (solo móvil) */}
      <motion.aside
        className="fixed top-0 bottom-0 left-0 z-50 w-72 bg-gray-900/95 border-r border-gray-800 shadow-xl md:hidden overflow-y-auto scrollbar-hide overscroll-contain"
        initial={{ x:-288 }}           /*  -w-72 */
        animate={{ x: open ? 0 : -288 }}
        transition={{ type:"tween", duration:.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          <X />
        </button>
        <SidebarLeft />               {/* mismo contenido, scrollable */}
      </motion.aside>

      {/* --------- GRID PRINCIPAL (sin overflow-hidden) --------- */}
      <div className="h-screen grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr_100px]">
        {/* sidebar L (estático en md+) */}
        <aside className="hidden md:block bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 overflow-y-auto scrollbar-hide">
          <SidebarLeft />
        </aside>

        {/* MAIN */}
        <main className="p-4 md:p-8 overflow-y-auto scrollbar-hide">
          {children}
        </main>

        {/* sidebar R (solo ≥lg) */}
        <aside className="hidden lg:flex bg-gray-900/80 backdrop-blur-sm border-l border-gray-800 p-6 flex-col items-center justify-center">
          <SidebarRight />
        </aside>
      </div>
    </div>
  )
}
