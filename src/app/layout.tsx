import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "Next.js Essencial",
  description: "AH! Zé da Manga!",
};

const font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
