import "./globals.css";
import MainLayout from "../src/components/templates/main-layout";
export const metadata = { title: "Portafolio" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}