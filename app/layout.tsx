import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

/*
  The Figma design uses "Degular Display" (OH no Type Co — a paid font, not on
  Google Fonts). Hanken Grotesk is the closest free stand-in: same friendly
  geometric-grotesk feel, full weight range, self-hosted via next/font (no CLS,
  no render-blocking request). To match the design exactly, drop the licensed
  Degular .woff2 files into /fonts and swap this for `next/font/local`.
*/
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://papyrusads.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Papyrus Ads — Você no controle dos seus anúncios",
    template: "%s | Papyrus Ads",
  },
  description:
    "Acompanhe seus anúncios do Google, Meta e TikTok Ads com clareza e segurança. Veja os dados que importam, entenda seus resultados e decida com mais confiança.",
  applicationName: "Papyrus Ads",
  keywords: [
    "Papyrus Ads",
    "anúncios",
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "ROAS",
    "tráfego pago",
    "dashboard de anúncios",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Papyrus Ads",
    title: "Papyrus Ads — Você no controle dos seus anúncios",
    description:
      "Veja os dados que realmente importam, entenda seus resultados e tome decisões com mais segurança.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papyrus Ads — Você no controle dos seus anúncios",
    description:
      "Veja os dados que realmente importam, entenda seus resultados e tome decisões com mais segurança.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C2C4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
