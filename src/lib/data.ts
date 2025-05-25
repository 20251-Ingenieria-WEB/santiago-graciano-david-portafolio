import { Laptop, Cloud, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"


export const personal = {
  name: "Santiago Graciano",
  title: "Estudiante de Ingeniería de Sistemas",
  avatar: "/avatar.jpeg",
  location: "Medellín, CO",
  phone: "+57 314‑646‑7003",
  email: "santiago.gracianod@gmail.com"
};

export const languages = [
  { name: "Español", percent: 100 },
  { name: "Inglés", percent: 65 }
];

export const programming = [
  { name: "TypeScript", percent: 80 },
  { name: "PHP", percent: 70 },
  { name: "Python", percent: 60 },
  { name: "Java", percent: 60 },
];

export const skills = ["Scrum", "Git", "SQL Server", "AWS", "CI/CD"];


type KnowledgeItem = {
  icon: LucideIcon
  title: string
  description: string
}

export const knowledge: KnowledgeItem[] = [
  { icon: Laptop, title: "Desarrollo Web",   description: "React, Next.js, Tailwind" },
  { icon: Cloud,  title: "Cloud Computing",  description: "AWS, CI/CD" },
  { icon: Server, title: "Desarrollo Backend", description: "PHP, Laravel" },
]

export const education = [
  {
    institute: "Universidad de Antioquia",
    period: "2019 – Presente",
    degree: "BSc Ingeniería de Sistemas",
    description: "Enfoque en arquitectura de software y DevOps"
  }
];

export const projects = [
  {
    id: 1,
    image: "/project1.png",
    title: "TelcoNova",
    description: "Sistema SaaS para seguimiento de órdenes en proceso.",
    url: "https://github.com/santiagogracianod/telconona-frontend.git"
  },
  {
    id: 2,
    image: "/project2.png",
    title: "Backend sistema de vuelos",
    description: "Módulo de reservas para sistema de vuelos con Java SprinBoot.",
    url: "https://github.com/santiagogracianod/lab1FligthSearchBackend.git"
  },
  {
    id: 3,
    image: "/project2.png",
    title: "La Rookola",
    description: "Proyecto de música en línea con React y API spotify.",
    url: "https://github.com/santiagogracianod/la-rookola.git"
  },
  {
    id: 4,
    image: "/project2.png",
    title: "Reto Kaggle",
    description: "Desarrollo de modelo para predicciones en Python.",
    url: "https://github.com/santiagogracianod/Kaggle-UdeA.git"
  }
]