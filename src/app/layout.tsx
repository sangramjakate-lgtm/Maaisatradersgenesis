import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import Script from "next/script";

const fontHeading = Noto_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maaisa Genesis | Curated Architectural Excellence",
  description: "Experience luxury living at Maaisa Genesis. A sanctuary defined by light, space, and the geometry of pure intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark no-scrollbar">
      <head>
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" 
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${fontHeading.variable} ${fontBody.variable} antialiased min-h-screen font-body flex flex-col bg-surface-lowest text-secondary noise-overlay`}
      >
        <Script 
          src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js" 
          strategy="afterInteractive"
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
