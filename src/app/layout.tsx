import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tourlink - O destino é o mesmo, o cuidado é especial',
  description: 'Plataforma que conecta turistas com deficiência a guias nativos capacitados, tornando o turismo verdadeiramente acessível para todos.',
  keywords: ['turismo acessível', 'guias turísticos', 'deficiência', 'acessibilidade', 'turismo inclusivo', 'viagem', 'turismo', 'guia local'],
  authors: [{ name: 'Equipe Tourlink' }],
  creator: 'Tourlink',
  publisher: 'Tourlink',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className + " antialiased"}>
        {children}
      </body>
    </html>
  );
}
