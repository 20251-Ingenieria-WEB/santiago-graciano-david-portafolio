"use client"

import BaseModal from "../molecules/base-modal"
import { Heading } from "../atoms/heading"
import { Text } from "../atoms/text"
import { personal } from "../../lib/data"

export default function AboutMeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <BaseModal open={open} onClose={onClose}>
      <Heading level={2} className="text-center mb-4 text-cyan-400">
        Sobre mí
      </Heading>
      <Text size="lg" className="text-slate-200 leading-relaxed">
        ¡Hola! Soy {personal.name}. Además de programar, disfruto enseñar, escribir y explorar nuevas herramientas que
        mejoren la experiencia de los desarrolladores. Me motiva construir soluciones que generen impacto real y
        compartir lo aprendido con la comunidad.
      </Text>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-lg bg-gray-800 border border-cyan-600 text-center">
          <span className="block text-3xl font-bold text-cyan-400">5+</span>
          <span className="text-sm text-slate-300">Proyectos<br/>completados</span>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 border border-fuchsia-600 text-center">
          <span className="block text-3xl font-bold text-fuchsia-400">3</span>
          <span className="text-sm text-slate-300">Años de<br/>experiencia</span>
        </div>
      </div>
    </BaseModal>
  )
}
