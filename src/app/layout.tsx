import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Persona | Fine Dining Restaurant & Lounge | Patna",
  description:
    "Experience upscale fine dining at Persona, Patna's premier restaurant and lounge in Patliputra Colony. Multi-cuisine menu, signature cocktails, and elegant ambiance.",
  keywords: [
    "restaurant patna",
    "fine dining patna",
    "Persona restaurant patliputra colony",
    "best restaurant patna",
    "lounge patna",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-dark text-cream antialiased">
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
