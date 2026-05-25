import type { Metadata, Viewport } from "next";
import { Syne, DM_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexflow — Bot & Automazioni AI su Misura",
  description:
    "Trasforma il tuo business con bot personalizzati e automazioni intelligenti. Soluzioni AI su misura per ottimizzare i tuoi processi aziendali.",
  keywords: [
    "bot",
    "automazioni",
    "AI",
    "intelligenza artificiale",
    "chatbot",
    "workflow",
    "automazione aziendale",
  ],
  authors: [{ name: "Nexflow" }],
  openGraph: {
    title: "Nexflow — Bot & Automazioni AI su Misura",
    description:
      "Trasforma il tuo business con bot personalizzati e automazioni intelligenti.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${syne.variable} ${dmMono.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
