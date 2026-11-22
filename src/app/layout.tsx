import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bloomly — Gifts & Flowers",
  description:
    "Hand-tied bouquets, curated gift boxes, and same-day floral delivery for every occasion.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Bloomly — Gifts & Flowers",
    description: "Where petals become gifts. Fresh blooms and thoughtful presents, delivered.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
