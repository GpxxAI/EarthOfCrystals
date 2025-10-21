import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earth of Crystals",
  description: "Sito vetrina ispirato a Manus: elegante, fluido, focalizzato su immagini e storytelling.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
