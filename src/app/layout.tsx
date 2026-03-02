import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://filmyfood.com";

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
