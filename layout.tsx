import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofrología México | Instituto SOS PHREN LOGOS®",
  description: "Sesiones individuales para niños, adolescentes y adultos, y formación profesional en sofrología.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
