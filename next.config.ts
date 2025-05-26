/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Next.js 15+, asegurar compatibilidad con React 19
  reactStrictMode: true,
  
  // Configuración para imágenes
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Configuración para Tailwind CSS 4
  experimental: {
    // turbo: {}, // Opcional para desarrollo más rápido
  },

  // Asegurar que funcione con Vercel
  output: 'standalone', // Solo si necesitas optimización especial
  
  // Configuración para archivos estáticos
  assetPrefix: '',
  
  // Para debugging en producción
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig