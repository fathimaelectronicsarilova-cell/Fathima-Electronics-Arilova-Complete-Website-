import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: "Fathima Electronics | Premium TV Repair",
  description: "Expert TV Repair Services for LED, OLED, Smart TVs and Android TVs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-navy-950 text-slate-100 min-h-screen pb-16 md:pb-0 antialiased">
        <Header />
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
