import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // indica a Next que use `src/app` como carpeta de App Router
  experimental: {
    appDir: true,
  },
  // aquí puedes añadir más opciones si las necesitas
};

export default nextConfig;
