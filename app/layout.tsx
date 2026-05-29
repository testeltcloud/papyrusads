import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/*
  The Figma design uses "Degular Display". We use Inter here to give the letters
  a more square and crisp feel as requested.
*/
const sans = Inter({
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
    <html lang="pt-BR" className={sans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
