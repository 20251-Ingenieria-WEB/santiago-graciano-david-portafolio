# Portafolio — Black Edition



---

## ✨ Tecnologías clave

| Stack             | Versión         | Descripción                                       |
| ----------------- | --------------- | ------------------------------------------------- |
| **Next.js**       | 15 (App Router) | Framework React full‑stack, routing /app.         |
| **TypeScript**    | 5.x             | Tipado estático.                                  |
| **Tailwind CSS**  | 3.x             | Utility‑first + plugins `typography` y `animate`. |
| **Atomic Design** | —               | Organización por `atoms/`, `molecules/`, …        |
| **Lucide React**  | 0.x             | Íconos esbeltos (Sun, Moon, GitHub, LinkedIn).    |

---

## 📁 Estructura de carpetas

```
.
├── app/                
│   ├── layout.tsx      
│   ├── page.tsx        
│   └── globals.css     
├── components/
│   ├── atoms/          
│   ├── molecules/      
│   ├── organisms/      
│   └── templates/      
├── lib/data.ts         
├── public/             
├── tailwind.config.js  
└── README.md           
```

---

## 🚀 Instalación local

```bash
# 1 — Clona 
$ cd mi‑portafolio

# 2 — Instala dependencias
$ npm install

# 3 — Arranca el servidor
$ npm run dev     # http://localhost:3000
```

Scripts útiles:

| Comando         | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Modo desarrollo con HMR            |
| `npm run build` | Compila para producción (`.next/`) |
| `npm start`     | Sirve la build localmente          |
| `npm run lint`  | ESLint + TypeScript checks         |


---

## 📜 Licencia

MIT © 2025 Santiago Graciano
