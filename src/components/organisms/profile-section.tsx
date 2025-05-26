"use client"

// Dark hero banner with BIG portrait on the right + “Ver más” modal

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Heading } from "../atoms/heading"
import { Text } from "../atoms/text"
import { Button } from "@/components/ui/button"
import { Download} from "lucide-react"
import { personal } from "../../lib/data"
import AboutMeModal from "../organisms/about-me-modal"

export default function ProfileSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [open, setOpen] = useState(false)

  // Matrix background
  useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return
    const ctx = cvs.getContext("2d")!
    cvs.width = cvs.offsetWidth
    cvs.height = cvs.offsetHeight
    const drops = Array(Math.floor(cvs.width / 18)).fill(1)
    const loop = () => {
      ctx.fillStyle = "rgba(0,0,0,.06)"
      ctx.fillRect(0, 0, cvs.width, cvs.height)
      ctx.fillStyle = "#00eeff"
      ctx.font = "14px monospace"
      drops.forEach((y, i) => {
        ctx.fillText("01"[(Math.random() * 2) | 0], i * 18, y * 18)
        drops[i] = y * 18 > cvs.height && Math.random() > 0.975 ? 0 : y + 1
      })
      requestAnimationFrame(loop)
    }
    loop()
  }, [])

  return (
    <section id="perfil" className="py-16">
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="relative rounded-xl bg-gray-900/90 border border-cyan-500/30 shadow-md overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_380px] gap-10 p-10">
            {/* Text column */}
            <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <Heading level={1} className="text-4xl sm:text-5xl font-bold text-white">
                {personal.name}
              </Heading>
              <Text size="lg" className="text-cyan-300">
                {personal.title}
              </Text>
              <Text size="lg" className="text-slate-200 leading-relaxed">
                Soy estudiante de Ingeniería de Sistemas apasionado por el desarrollo de
                software, DevOps y la creación de productos digitales de alto impacto.
              </Text>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3">
                  <Download className="w-4 h-4 mr-2" /> Descargar CV
                </Button>
                
                {/* Botón Ver más */}
                <Button
                  variant="secondary"
                  onClick={() => setOpen(true)}
                  className="border-yellow-400 text-yellow-300 hover:bg-yellow-900/10"
                >
                  Ver más
                </Button>
              </div>
            </div>

            {/* Portrait column */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src={personal.avatar}
                alt={personal.name}
                width={350}
                height={460}
                priority
                className="rounded-lg ring-4 ring-cyan-400 shadow-[0_0_20px_rgba(0,255,255,.4)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AboutMeModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
