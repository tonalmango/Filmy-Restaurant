import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Filmy Food | Where Cinema Meets Cuisine",
  description:
    "Filmy Food is a cinematic fine dining destination blending luxury ambiance, storytelling, and world-class cuisine.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Filmy Food | Where Cinema Meets Cuisine",
    description: "Luxury cinematic fine dining with immersive ambiance and chef-crafted tasting experiences.",
    url: siteUrl,
    siteName: "Filmy Food",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filmy Food | Where Cinema Meets Cuisine",
    description: "Ultra-premium cinematic fine dining experience.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${cormorant.variable} bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
